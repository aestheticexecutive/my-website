import Link from "next/link";
import {
  ArrowLeft,
  Target,
  DollarSign,
  UserPlus,
  Heart,
  Stethoscope,
  Headphones,
  ExternalLink,
  ArrowDownWideNarrow,
  CalendarClock,
  TrendingDown,
  NotebookPen,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goal Setting Guide | Aesthetic Executive",
};

const goalCategories = [
  {
    icon: DollarSign,
    title: "Revenue Goals",
    examples: [
      "Monthly revenue by service line (Botox, filler, laser, body contouring)",
      "Average ticket / transaction value",
      "Total location or provider revenue",
      "Membership program revenue",
    ],
  },
  {
    icon: UserPlus,
    title: "Patient Acquisition & Conversion",
    examples: [
      "New patient consultations booked",
      "Consult-to-treatment conversion rate",
      "New membership sign-ups",
      "Leads generated per marketing campaign",
    ],
  },
  {
    icon: Heart,
    title: "Retention & Loyalty",
    examples: [
      "Patient rebooking / retention rate",
      "Referral-generated new patients",
      "Online reviews collected",
      "Membership renewal rate",
    ],
  },
  {
    icon: Stethoscope,
    title: "Provider Productivity",
    examples: [
      "Units of product used per provider (Botox units, syringes of filler)",
      "Treatments performed per provider per week",
      "Chair / treatment room utilization rate",
      "Continuing education hours completed",
    ],
  },
  {
    icon: Headphones,
    title: "Front Desk & Coordinator Goals",
    examples: [
      "Inquiry calls converted to booked consults",
      "No-show / late-cancellation rate reduction",
      "Retail attach rate (% of visits with a retail purchase)",
      "Outstanding balance collected",
    ],
  },
];

const runningWellTips = [
  {
    icon: CalendarClock,
    title: "Set it before the period starts",
    body: "A goal set on day one of the month is a plan. A goal set on day 20 is a guess dressed up as a target. Set next month's numbers before this month closes.",
  },
  {
    icon: NotebookPen,
    title: "Log progress on a fixed cadence",
    body: "Same day, same time, every week — not \"whenever there's a minute.\" Inconsistent logging is what lets a bad two weeks hide until it's too late to fix.",
  },
  {
    icon: TrendingDown,
    title: "Watch the pace, not just the total",
    body: "\"$32,000 of $60,000\" sounds fine in isolation. \"$1,100 short of pace with 8 business days left\" is the number that actually tells you whether to worry today.",
  },
  {
    icon: ArrowDownWideNarrow,
    title: "Use notes to explain outliers",
    body: "A slow week because of a provider's PTO is not the same problem as a slow week because consults stopped converting. Write down which one it was while you still remember.",
  },
];

export default function GoalSettingGuidePage() {
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
              <Target size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Growth &amp; Performance
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Goal Setting Guide
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            A $60,000 monthly revenue goal is too big to actually manage — nobody notices they&apos;re
            behind until it&apos;s week four and too late to fix it. The practices that consistently hit
            their numbers are the ones that break big goals down into something small enough to check
            every single day.
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
            Big goals hide problems. Small goals surface them.
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            A single yearly or monthly number is easy to set and easy to lose track of — there&apos;s no
            natural moment where you&apos;re forced to check in against it, so a slow stretch can run for
            weeks before anyone notices. Breaking that number down into a weekly, then daily, target
            changes the entire dynamic: instead of finding out on the last day of the month that you missed
            by $8,000, you find out on Tuesday that you&apos;re $340 short of where you should be — small
            enough to notice, small enough to actually do something about before the month is gone.
          </p>
        </div>
      </div>

      {/* Breaking it down */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            The method
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Yearly → monthly → weekly → daily
        </h2>
        <p className="text-sm mb-8 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Every big goal should cascade down until it lands on a number small enough that one person can
          look at it and immediately know whether today was a good day or not.
        </p>

        <div className="rounded-2xl border p-8 md:p-10" style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}>
          <p className="text-xs tracking-[0.22em] uppercase mb-5" style={{ color: "rgba(162,140,117,0.5)" }}>
            Worked example — Botox &amp; filler revenue
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { period: "Monthly Goal", value: "$60,000", note: "The number ownership cares about" },
              { period: "Weekly Pace", value: "≈ $14,000", note: "÷ ~4.3 weeks in the month" },
              { period: "Daily Pace", value: "≈ $2,800", note: "÷ ~5 business days in the week" },
              { period: "Today's Check-In", value: "On pace or not?", note: "The only question that matters day to day" },
            ].map((step, idx) => (
              <div key={step.period} className="relative">
                <div className="rounded-xl border p-5 h-full" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>{step.period}</p>
                  <p className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>{step.value}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{step.note}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden sm:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 items-center justify-center w-6 h-6" style={{ color: "rgba(162,140,117,0.4)" }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed mt-6" style={{ color: "rgba(255,253,246,0.6)" }}>
            Nobody can act on &quot;$60,000 for the month&quot; on a random Tuesday. Everybody can act on
            &quot;we need $2,800 more today.&quot; The Goal Tracker tool below does this math for you
            automatically, recalculating the pace you need for every remaining business day as progress
            comes in.
          </p>
        </div>
      </div>

      {/* Suggested goals */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Where to start
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Goals worth setting in an aesthetic or wellness practice
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Not every category applies to every role — a front desk goal set and a provider goal set should
          look different. Pick a handful that map to what each person actually controls.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {goalCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-xl border p-7"
                style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                  >
                    <Icon size={16} style={{ color: "#a28c75" }} />
                  </div>
                  <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>{cat.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="text-sm flex items-start gap-2" style={{ color: "rgba(255,253,246,0.6)" }}>
                      <span style={{ color: "#a28c75", flexShrink: 0 }}>·</span> {ex}
                    </li>
                  ))}
                </ul>
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
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          The breakdown is the framework. These habits are what make it actually change behavior.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {runningWellTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
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
                  <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{tip.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.52)" }}>{tip.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA to the tool */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Link
          href="/members/resources/operations/goal-tracker"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <Target size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Put it to work
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Set this month&apos;s goals and track pace as you go
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                Set a target for the period, log progress and business days remaining as they come in, and
                see exactly what you need to hit per day to stay on track. Print a worksheet for the team
                to fill in by hand, then log it back in — and save the whole stack under a name and date
                range to look back on later.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Goal Tracker
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
