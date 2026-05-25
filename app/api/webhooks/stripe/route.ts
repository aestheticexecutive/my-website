import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { clerkClient } from "@clerk/nextjs/server";

// Stripe sends raw body — disable body parsing
export const runtime = "nodejs";

async function setSubscriptionActive(clerkUserId: string, stripeCustomerId: string, stripeSubscriptionId: string) {
  const clerk = await clerkClient();
  await clerk.users.updateUserMetadata(clerkUserId, {
    publicMetadata: {
      hasActiveSubscription: true,
      stripeCustomerId,
      stripeSubscriptionId,
    },
  });
}

async function setSubscriptionInactive(clerkUserId: string) {
  const clerk = await clerkClient();
  await clerk.users.updateUserMetadata(clerkUserId, {
    publicMetadata: {
      hasActiveSubscription: false,
    },
  });
}

async function getClerkUserIdFromCustomer(customerId: string): Promise<string | null> {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    limit: 1,
  });
  return subscriptions.data[0]?.metadata?.clerkUserId ?? null;
}

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return new NextResponse("Missing stripe-signature header", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new NextResponse(`Webhook Error: ${message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const clerkUserId = session.metadata?.clerkUserId;
        if (clerkUserId && session.customer && session.subscription) {
          await setSubscriptionActive(
            clerkUserId,
            session.customer as string,
            session.subscription as string
          );
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const clerkUserId = subscription.metadata?.clerkUserId;
        if (!clerkUserId) break;

        const isActive = ["active", "trialing"].includes(subscription.status);
        if (isActive) {
          await setSubscriptionActive(
            clerkUserId,
            subscription.customer as string,
            subscription.id
          );
        } else {
          await setSubscriptionInactive(clerkUserId);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const clerkUserId =
          subscription.metadata?.clerkUserId ??
          (await getClerkUserIdFromCustomer(subscription.customer as string));
        if (clerkUserId) {
          await setSubscriptionInactive(clerkUserId);
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const clerkUserId = await getClerkUserIdFromCustomer(
          invoice.customer as string
        );
        if (clerkUserId) {
          await setSubscriptionInactive(clerkUserId);
        }
        break;
      }
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook handler error for ${event.type}:`, message);
    return new NextResponse(`Handler error: ${message}`, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
