import { stripe, STRIPE_PRICE_ID } from "@/lib/stripe";

/**
 * Creates a Stripe subscription Checkout session for the given Clerk user
 * and returns its hosted URL. Shared between the /api/checkout route and
 * the onboarding page (which continues straight to checkout for anyone who
 * clicked "Subscribe" before completing their profile).
 */
export async function createCheckoutSession(userId: string): Promise<string> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: STRIPE_PRICE_ID,
        quantity: 1,
      },
    ],
    success_url: `${appUrl}/members/dashboard?checkout=success`,
    cancel_url: `${appUrl}/pricing`,
    allow_promotion_codes: true,
    metadata: {
      clerkUserId: userId,
    },
    subscription_data: {
      metadata: {
        clerkUserId: userId,
      },
    },
  });

  if (!session.url) {
    throw new Error("Stripe did not return a checkout URL.");
  }

  return session.url;
}
