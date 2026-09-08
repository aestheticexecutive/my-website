import { stripe } from "@/lib/stripe";

/**
 * Creates a Stripe Billing Portal session for the given Stripe customer and
 * returns its hosted URL. The portal itself handles updating a payment
 * method, viewing invoices, and canceling — no custom UI needed for any of
 * that.
 */
export async function createBillingPortalSession(
  stripeCustomerId: string,
  returnPath = "/members/account"
): Promise<string> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const session = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${appUrl}${returnPath}`,
  });

  return session.url;
}
