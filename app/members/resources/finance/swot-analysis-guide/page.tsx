import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  Target,
  ExternalLink,
  CalendarClock,
  ListChecks,
  Users2,
  ArrowDownWideNarrow,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SWOT Analysis Guide | Aesthetic Executive",
};

const quadrants = [
  {
    icon: ShieldCheck,
    title: "Strengths",
    tag: "Internal, Positive",
    body: "What your practice does well right now — the advantages, resources, and reputation you already have. What do patients love about you? What unique capabilities set you apart?",
  },
  {
    icon: AlertTriangle,
    title: "Weaknesses",
    tag: "Internal, Negative",
    body: "Where your practice is falling short internally — gaps in systems, skills, or resources. What complaints come up? Where are you improvising instead of running a real process?",
  },
  {
    icon: TrendingUp,
    title: "Opportunities",
    tag: "External, Positive",
    body: "Trends and openings outside your practice that you could take advantage of — a new service, an underserved market, a shift in what patients are asking for.",
  },
  {
    icon: Target,
    title: "Threats",
    tag: "External, Negative",
    body: "Outside forces that could hurt your practice if you don't plan for them — new competitors, regulatory changes, rising costs, or shifting patient expectations.",
  },
];

const steps = [
  {
    icon: ListChecks,
    title: "1. List honestly, in all four quadrants",
    body: "Work through Strengths, Weaknesses, Opportunities, and Threats using the guiding questions in each. Be specific and be honest — a SWOT that only lists strengths isn't useful.",
  },
  {
    icon: Users2,
    title: "2. Involve more than just yourself",
    body: "Your front desk sees different weaknesses than you do. Your lead injector sees different opportunities. Pull in your leadership team before you finalize the list.",
  },
  {
    icon: ArrowDownWideNarrow,
    title: "3. Prioritize your top 2–3 per quadrant",
    body: "Not every item deserves action this quarter. Star the handful in each quadrant that matter most right now — the ones with the biggest impact if addressed or seized.",
  },
  {
    icon: CalendarClock,
    title: "4. Turn each priority into a 30-day action",
    body: "For every starred item, write one concrete action you'll take in the next 30 days. A SWOT without an action plan is just a list — the action plan is what makes it worth doing.",
  },
];

const tips = [
  {
    title: "Put it on the calendar — quarterly, not \"someday\"",
    body: "A SWOT done once a year (or once, ever) goes stale fast. Your competition, your team, and your market all shift quarter to quarter. Set a recurring 60-minute block, same week every quarter.",
  },
  {
    title: "Compare quarter to quarter",
    body: "The real value shows up over time. Keep last quarter's SWOT next to this one — what's still a weakness that hasn't moved? What threat became real? What opportunity did you actually seize?",
  },
  {
    title: "Feed it into your goals",
    body: "An opportunity you flag in your SWOT should become a goal you're actually tracking — not a note that gets forgotten until next quarter's SWOT surfaces it again.",
  },
  {
    title: "Keep the action steps small",
    body: "\"Fix our retention problem\" isn't a 30-day action. \"Call our last 20 lapsed patients this month\" is. Specific and small beats big and vague.",
  },
];

export default function SwotAnalysisGuidePage() {
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
              <Compass size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Strategic Planning
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            SWOT Analysis Guide
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            A SWOT analysis is one of the simplest strategic planning tools there is — four
            questions, honestly answered, that tell you exactly what to protect, fix, chase,
            and watch out for. Done once a quarter, it&apos;s how you keep strategy current
            instead of reacting to problems after they&apos;ve already cost you.
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
            Why quarterly, not just once
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            Most practices do a SWOT analysis once — usually when they&apos;re writing a business
            plan — and never look at it again. But a practice&apos;s strengths, weaknesses,
            opportunities, and threats change every quarter: a competitor opens down the street,
            a provider you relied on leaves, a new device becomes worth exploring, a process you
            fixed last quarter stops being a weakness. Running this on a quarterly cadence is what
            turns it from a one-time exercise into an actual early-warning and opportunity-spotting
            system for your business.
          </p>
        </div>
      </div>

      {/* The 4 quadrants */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            What SWOT stands for
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Four questions, two axes
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Strengths and Weaknesses look inward, at your practice. Opportunities and Threats look
          outward, at the market around you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {quadrants.map((q) => {
            const Icon = q.icon;
            return (
              <div
                key={q.title}
                className="rounded-xl border p-7 flex flex-col gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                  >
                    <Icon size={16} style={{ color: "#a28c75" }} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>{q.title}</h3>
                    <p className="text-[11px] uppercase tracking-wide" style={{ color: "rgba(162,140,117,0.6)" }}>{q.tag}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{q.body}</p>
              </div>
            );
          })}
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
          How to actually run one
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Four steps, start to finish — from a blank list to a 30-day action plan.
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
          Running it well, every quarter
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
          href="/members/resources/finance/swot-analysis"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <Compass size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Put it to work
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Run this quarter&apos;s SWOT analysis
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                Work through all four quadrants with guided prompts, star your top priorities,
                and build a 30-day action plan — then save it under this quarter&apos;s name so
                you can compare it to the next one.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open SWOT Analysis Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
