import Link from "next/link";
import {
  ArrowLeft,
  Headset,
  ClipboardList,
  Zap,
  Search,
  Target,
  Users2,
  BarChart2,
  Gift,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maximizing the Power of the Front Desk Guide | Aesthetic Executive",
};

const steps = [
  {
    icon: ClipboardList,
    title: "1. Audit current roles + impact",
    body: "List everything your front desk handles beyond answering phones — check-in, upsells, booking, payments, scheduling gaps. Write down where they're excelling and where there's real opportunity.",
  },
  {
    icon: Zap,
    title: "2. Define the front desk's power potential",
    body: "Brainstorm how the front desk could contribute more strategically across revenue, patient experience, efficiency, and marketing — and flag where the current gap actually is.",
  },
  {
    icon: Search,
    title: "3. Mystery shop the experience",
    body: "Call or visit yourself, or use a friend or secret shopper. How welcoming is the greeting? Do they explain services well? Are upsells offered naturally? Is follow-up clear?",
  },
  {
    icon: Target,
    title: "4. Set clear front desk goals",
    body: "Upsell rate, rebooking rate, reviews collected per month, inquiry-to-consult conversion — pick targets specific enough that the team knows exactly what they're aiming for.",
  },
  {
    icon: Users2,
    title: "5. Create an empowerment + training plan",
    body: "Scripts for upselling and rebooking, retail product training, a review-request process, and schedule management tactics — decide how you'll actually teach each one.",
  },
  {
    icon: BarChart2,
    title: "6. Build a tracking + feedback system",
    body: "What you'll track, how often you'll review it, and how you'll celebrate wins and coach gaps — a goal without a review cadence rarely moves.",
  },
  {
    icon: Gift,
    title: "7. Recognize + reward",
    body: "A monthly bonus for hitting upsell targets, a shout-out in team meetings, a gift card or spa service reward — decide how you'll actually motivate the team that's driving these numbers.",
  },
];

const tips = [
  {
    title: "Your front desk is your most underused revenue channel",
    body: "Every patient who calls or walks in talks to the front desk before anyone else. That's more total patient touchpoints than any provider gets — most practices just never build a strategy around it.",
  },
  {
    title: "Mystery shop your own practice first",
    body: "You can't fix what you haven't actually experienced. Call in as a new patient, or send a friend, before you write a single script or set a single goal.",
  },
  {
    title: "Scripts only work with practice",
    body: "Handing someone a script and expecting a natural delivery is how scripts get abandoned. Role play it in a team meeting until it doesn't sound read.",
  },
  {
    title: "Recognition is part of the system, not an afterthought",
    body: "A team that's never celebrated for hitting a rebooking or upsell goal stops chasing it. Build the reward into the plan from day one, not after you notice engagement dropping.",
  },
];

export default function FrontDeskGuidePage() {
  return (
    <div className="bg-[#170009] min-h-screen">
      {/* Hero header */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link
            href="/members/resources/operations"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Operations Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Headset size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Front Desk Strategy
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Maximizing the Power of the Front Desk
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            Your front desk touches more patients, more often, than any single provider —
            but most practices only ask them to answer phones and check people in. This is
            the process for turning that role into a real driver of revenue, retention,
            and reviews.
          </p>
        </div>
      </div>

      {/* Why it matters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
            Why it matters
          </p>
          <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
            The role with the most touchpoints, and the least strategy
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            The front desk is the first voice a new patient hears and the last face an
            existing one sees on the way out — every single visit. That&apos;s an enormous
            amount of influence over rebooking, upsells, reviews, and how the whole practice
            feels. Most practices never build a real plan around it, which means whatever
            happens there is left to whoever&apos;s working that day. A clear audit, real
            goals, and a training plan turn it from an administrative role into a genuine
            growth lever.
          </p>
        </div>
      </div>

      {/* The process */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            The process
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Seven steps, from audit to reward
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Start with what your front desk already handles, end with how you&apos;ll
          recognize them for growing into more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-xl border p-6 flex items-start gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.52)" }}>{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Running it well */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Execution
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Running it well
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border p-6"
              style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{tip.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.52)" }}>{tip.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA to the tool */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Link
          href="/members/resources/operations/front-desk-tool"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <Headset size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Put it to work
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Build your front desk power plan
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                Audit current responsibilities, define the power potential across revenue,
                experience, efficiency, and marketing, and build a real training and reward
                plan — pre-loaded with the source template&apos;s example contributions and
                training initiatives.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Front Desk Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
