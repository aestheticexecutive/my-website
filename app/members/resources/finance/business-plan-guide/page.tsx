import Link from "next/link";
import {
  ArrowLeft,
  Milestone,
  Eye,
  DollarSign,
  ListChecks,
  Building2,
  RefreshCw,
  RotateCw,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1, 5, and 10-Year Business Plan Guide | Aesthetic Executive",
};

const horizons = [
  {
    title: "1 Year",
    tag: "Near-term, Tactical",
    body: "Where your day-to-day already points. Your current budget, staffing, and services should already be moving you here — it's the most concrete horizon, and the easiest one to actually hold yourself accountable to.",
  },
  {
    title: "5 Year",
    tag: "Mid-term, Strategic",
    body: "Where deliberate growth decisions live. A second location, an associate provider, a new service line — these take lead time to plan for and are close enough to actually plan around.",
  },
  {
    title: "10 Year",
    tag: "Long-term, Directional",
    body: "The exit, the legacy, or the ceiling. Whether that's selling the practice, building a multi-location group, or defining what \"done growing\" looks like — this horizon keeps today's decisions pointed at something.",
  },
];

const steps = [
  {
    icon: Eye,
    title: "1. Define your vision",
    body: "Write one clear sentence for what your practice looks like at each horizon — 1, 5, and 10 years out. Specific enough that you'd know if you'd hit it.",
  },
  {
    icon: DollarSign,
    title: "2. Set revenue & profit milestones",
    body: "Estimate a target revenue and a target profit (dollar amount or margin %) at each stage. Rough numbers now beat no numbers — you'll refine them every review.",
  },
  {
    icon: ListChecks,
    title: "3. Break goals into actions",
    body: "For each horizon, name one major goal and three concrete short-term action steps under it. A goal without actions is just a wish.",
  },
  {
    icon: Building2,
    title: "4. Forecast staffing & space",
    body: "What team and physical footprint does each horizon actually require? A 5-year revenue target that assumes today's headcount and square footage usually isn't real.",
  },
  {
    icon: RefreshCw,
    title: "5. Account for market shifts & seasonality",
    body: "Competitor growth, changing regulations, economic conditions, seasonal trends, and technology advances all hit differently at each horizon. Name your plan to address each one.",
  },
  {
    icon: RotateCw,
    title: "6. Set a review cadence",
    body: "Revisit the 1-year plan every 3 months, the 5-year plan annually, and the 10-year plan every 2 years. A plan you never reopen isn't a plan — it's a document.",
  },
];

const tips = [
  {
    title: "Start with the vision, not the numbers",
    body: "It's tempting to open with a revenue target. But a number without a picture of what the practice looks like when you hit it is just a guess. Write the vision first — the numbers should serve it, not the other way around.",
  },
  {
    title: "Keep actions concrete, not aspirational",
    body: "\"Grow the practice\" isn't an action step. \"Add a second injector by Q3\" is. If an action step could apply to any med spa in the country, it's too vague to actually do.",
  },
  {
    title: "Revisit on the cadence, not when it's convenient",
    body: "The 3-month / annual / 2-year review schedule only works if it's on the calendar in advance. A plan that only gets reopened when things go wrong stops being a planning tool.",
  },
  {
    title: "Let the 1-year plan feed your budget",
    body: "Your 1-year revenue and profit milestones should show up directly in the budget you're already tracking — not live as a separate, disconnected number nobody checks.",
  },
];

export default function BusinessPlanGuidePage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      {/* Hero header */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link
            href="/members/resources/finance"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Finance Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Milestone size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Long-Term Planning
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            1, 5, and 10-Year Business Plan Guide
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            Most practices plan a quarter, or a year, ahead — and stop there. This is the
            planning most owners skip: a clear vision, real milestones, and a concrete action
            plan for where your practice is headed at 1, 5, and 10 years out.
          </p>
        </div>
      </div>

      {/* Why it matters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
            Why it matters
          </p>
          <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
            Why plan past this year
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            Most med spa owners run their business one budget cycle at a time — which means
            most decisions get made in reaction to what already happened, not in service of
            where the practice is actually headed. A 1, 5, and 10-year plan forces you to
            define what growth actually means for your practice, not just &quot;more&quot; —
            and it&apos;s the exact document a lender, investor, or future buyer will eventually
            ask you for. Building it now means it already exists when you need it.
          </p>
        </div>
      </div>

      {/* The 3 horizons */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            The framework
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Three horizons, three different jobs
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
          Each horizon answers a different question — near-term execution, mid-term growth,
          and long-term direction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {horizons.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border p-7 flex flex-col gap-3"
              style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <div>
                <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>{h.title}</h3>
                <p className="text-[11px] uppercase tracking-wide" style={{ color: "rgba(162,140,117,0.6)" }}>{h.tag}</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{h.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to do it */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            The process
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          How to actually build one
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
          Six steps, start to finish — from a blank vision to a scheduled review.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-xl border p-6 flex items-start gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>{step.body}</p>
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
              style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{tip.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>{tip.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA to the tool */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Link
          href="/members/resources/finance/business-plan"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <Milestone size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Put it to work
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Build your 1, 5, and 10-year plan
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                Work through your vision, revenue milestones, goals, staffing needs, and market
                risks across all three horizons — then print it or save it to revisit on its
                own review cadence.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Business Plan Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
