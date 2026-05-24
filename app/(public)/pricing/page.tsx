"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const features = [
  "Unlimited access to 150+ business templates",
  "Full webinar library — live access + all recordings",
  "Monthly compliance & regulatory updates",
  "Growth playbooks and frameworks",
  "New resources added every month",
  "Private member community",
  "Priority email support",
  "Cancel anytime, no contracts",
];

const faqs = [
  {
    q: "What kinds of templates are included?",
    a: "The library includes consent forms, treatment protocols, employee handbooks, staff onboarding checklists, financial projection models, price menu templates, social media content calendars, vendor comparison worksheets, and much more — all built specifically for aesthetic practices.",
  },
  {
    q: "How often is new content added?",
    a: "We add new templates, at least one live webinar, and multiple resource articles every month. Members always have access to everything that's been published.",
  },
  {
    q: "Can I cancel my membership?",
    a: "Yes — cancel anytime directly from your account settings. Your access continues until the end of the billing period with no cancellation fees.",
  },
  {
    q: "Is this right for a solo injector just starting out?",
    a: "Absolutely. In fact, our most-used templates are designed for practitioners in their first 1–3 years: business plan frameworks, initial pricing strategy guides, and legal/compliance checklists for launch.",
  },
  {
    q: "What if I have multiple practice locations?",
    a: "Your membership covers you personally across any practices you own or manage. We also offer team plans for practices with multiple staff who benefit from access — contact us for pricing.",
  },
];

export default function PricingPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasSubscription =
    user?.publicMetadata?.hasActiveSubscription === true;

  async function handleSubscribe() {
    if (!isSignedIn) {
      router.push("/sign-up?redirect_url=/pricing");
      return;
    }

    if (hasSubscription) {
      router.push("/members/dashboard");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      if (!res.ok) throw new Error("Failed to create checkout session");
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-blush py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge variant="neutral" className="mb-5">
            Pricing
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl font-light text-warm-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-warm-600 max-w-md mx-auto leading-relaxed">
            One membership. Full access. No tiers, no upsells, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing card */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-lg mx-auto">
            <div className="bg-white border-2 border-gold-300 rounded-2xl shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="bg-warm-950 px-8 py-8 text-center">
                <p className="text-warm-400 text-xs tracking-widest uppercase mb-3">
                  Monthly Membership
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-7xl font-light text-cream">
                    $97
                  </span>
                  <span className="text-warm-400 text-lg">/month</span>
                </div>
                <p className="text-warm-500 text-sm mt-2">
                  Billed monthly · Cancel anytime
                </p>
              </div>

              {/* Features list */}
              <div className="px-8 py-8">
                <ul className="space-y-3 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-gold-500 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-warm-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {error && (
                  <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
                )}

                {hasSubscription ? (
                  <button
                    onClick={() => router.push("/members/dashboard")}
                    className="w-full h-12 bg-gold-400 text-warm-950 text-sm font-medium rounded tracking-wide hover:bg-gold-500 transition-all duration-200 inline-flex items-center justify-center gap-2"
                  >
                    Go to Dashboard
                    <ArrowRight size={15} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubscribe}
                    disabled={loading || !isLoaded}
                    className="w-full h-12 bg-gold-400 text-warm-950 text-sm font-medium rounded tracking-wide hover:bg-gold-500 transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Redirecting…
                      </>
                    ) : isSignedIn ? (
                      <>
                        Start Your Membership
                        <ArrowRight size={15} />
                      </>
                    ) : (
                      <>
                        Get Started
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                )}

                <p className="text-center text-xs text-warm-500 mt-3">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-warm-500 mt-6">
              Questions?{" "}
              <a
                href="mailto:hello@aestheticexecutive.com"
                className="text-gold-600 hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-blush py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-light text-warm-900 text-center mb-12">
              Frequently asked questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white rounded-xl border border-warm-200 px-7 py-6"
                >
                  <h3 className="font-medium text-warm-900 mb-2 text-sm">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-warm-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
