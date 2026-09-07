import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createCheckoutSession } from "@/lib/checkout";
import { OnboardingForm } from "./OnboardingForm";

export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const { intent } = await searchParams;
  const wantsToSubscribe = intent === "subscribe";

  if (user.publicMetadata?.profileComplete === true) {
    if (wantsToSubscribe) {
      // redirect() throws internally to perform the navigation, so it must
      // never be called inside this try block - only the Stripe call is
      // wrapped, and we redirect afterward based on whether it succeeded.
      let checkoutUrl: string | null = null;
      try {
        checkoutUrl = await createCheckoutSession(user.id);
      } catch (err) {
        console.error("Stripe checkout session creation failed:", err);
      }
      redirect(checkoutUrl ?? "/pricing?checkout_error=true");
    }
    redirect("/members/dashboard");
  }

  return (
    <div className="min-h-screen bg-blush flex flex-col items-center justify-center px-4 py-16">
      <div className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-9 h-9 rounded-full bg-gold-400 flex items-center justify-center text-warm-950 text-sm font-semibold font-display">
            AE
          </span>
          <span className="font-display text-xl font-medium text-warm-900 tracking-wide">
            Aesthetic Executive
          </span>
        </Link>
        <p className="text-warm-600 text-sm">
          Just a couple details before we get you into the library.
        </p>
      </div>
      <OnboardingForm
        initialFirstName={user.firstName ?? ""}
        initialLastName={user.lastName ?? ""}
        wantsToSubscribe={wantsToSubscribe}
      />
    </div>
  );
}
