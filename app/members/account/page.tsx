import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { stripe } from "@/lib/stripe";
import { ManageBillingButton } from "@/components/ui/ManageBillingButton";
import { ProfileForm } from "@/components/account/ProfileForm";
import { CalendarClock, CreditCard, CircleCheck, CircleAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Account | Aesthetic Executive",
};

function formatDate(unixSeconds: number) {
  return new Date(unixSeconds * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatAmount(amountCents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amountCents / 100);
}

export default async function AccountPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const stripeSubscriptionId = user.publicMetadata?.stripeSubscriptionId as
    | string
    | undefined;

  let subscription: Awaited<ReturnType<typeof stripe.subscriptions.retrieve>> | null = null;
  let subscriptionError = false;

  if (stripeSubscriptionId) {
    try {
      subscription = await stripe.subscriptions.retrieve(stripeSubscriptionId, {
        expand: ["items.data.price.product"],
      });
    } catch (err) {
      console.error("Failed to load subscription for account page:", err);
      subscriptionError = true;
    }
  }

  const item = subscription?.items.data[0];
  const price = item?.price;
  const product =
    price?.product && typeof price.product === "object" && !("deleted" in price.product)
      ? price.product
      : null;
  const renewalDate = item ? formatDate(item.current_period_end) : null;
  const isCanceling = subscription?.cancel_at_period_end === true;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="mb-10">
        <p className="text-xs text-warm-500 tracking-widest uppercase mb-2">Account</p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-warm-900">
          Your Account
        </h1>
        <p className="text-warm-600 mt-2">Manage your membership and practice details.</p>
      </div>

      {/* Membership */}
      <div className="bg-white border border-warm-200 rounded-xl p-7 mb-6">
        <h2 className="font-display text-xl font-medium text-warm-900 mb-5">Membership</h2>

        {!stripeSubscriptionId || subscriptionError || !subscription ? (
          <p className="text-sm text-warm-600">
            We couldn&apos;t load your subscription details right now. Please try again
            shortly, or contact us if this continues.
          </p>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <p className="text-sm text-warm-500">Plan</p>
                <p className="text-warm-900 font-medium">
                  {product?.name ?? "Aesthetic Executive Membership"}
                  {price?.unit_amount != null && (
                    <span className="text-warm-500 font-normal">
                      {" "}
                      — {formatAmount(price.unit_amount, price.currency)}/
                      {price.recurring?.interval}
                    </span>
                  )}
                </p>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 h-7 px-3 rounded-full text-xs font-medium tracking-wide ${
                  isCanceling
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-green-50 text-green-700 border border-green-200"
                }`}
              >
                {isCanceling ? <CircleAlert size={13} /> : <CircleCheck size={13} />}
                {isCanceling ? "Ending" : "Active"}
              </span>
            </div>

            {renewalDate && (
              <div className="flex items-center gap-2 text-sm text-warm-600">
                <CalendarClock size={15} className="text-warm-400" />
                {isCanceling
                  ? `Your membership ends on ${renewalDate}`
                  : `Renews on ${renewalDate}`}
              </div>
            )}

            <div className="pt-2">
              <ManageBillingButton className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-warm-900 text-cream text-sm font-medium tracking-wide hover:bg-warm-800 transition-colors">
                <CreditCard size={15} />
                Manage Billing
              </ManageBillingButton>
              <p className="text-xs text-warm-500 mt-2">
                Update your payment method, view past invoices, or cancel your membership.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Practice details */}
      <div className="bg-white border border-warm-200 rounded-xl p-7">
        <h2 className="font-display text-xl font-medium text-warm-900 mb-5">
          Practice Details
        </h2>
        <ProfileForm
          initialFirstName={user.firstName ?? ""}
          initialLastName={user.lastName ?? ""}
          initialPracticeName={(user.publicMetadata?.practiceName as string) ?? ""}
          initialPracticeAddress={(user.publicMetadata?.practiceAddress as string) ?? ""}
        />
      </div>
    </div>
  );
}
