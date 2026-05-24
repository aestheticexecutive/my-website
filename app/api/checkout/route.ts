import { auth } from "@clerk/nextjs/server";
import { stripe, STRIPE_PRICE_ID } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

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
    metadata: {
      clerkUserId: userId,
    },
    subscription_data: {
      metadata: {
        clerkUserId: userId,
      },
    },
  });

  return NextResponse.json({ url: session.url });
}
