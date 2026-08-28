import Link from "next/link";
import { ArrowLeft, TrendingUp, Download, ExternalLink, BarChart2, FileText, Calculator, Layers, Compass, ShieldCheck, Target, Milestone, DollarSign, ListChecks, RefreshCw, Gauge, Banknote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance & Business Performance Resources | Aesthetic Executive",
};

const resources: { title: string; type: string; description: string; href?: string }[] = [
  {
    title: "Treatment Profitability Analyzer",
    type: "Tool",
    description:
      "Enter price and direct costs for each treatment to see net profit and margin. Includes conditional color-coding, a monthly profit contribution tab, and 15 pre-loaded services.",
    href: "/members/resources/finance/treatment-profitability",
  },
  {
    title: "Annual Budget Template",
    type: "Tool",
    description:
      "12-month budget planning spreadsheet for aesthetic practices — covering payroll, supplies, marketing, rent, equipment, and owner compensation.",
    href: "/members/resources/finance/budget-tracker",
  },
  {
    title: "KPI Tracker",
    type: "Tool",
    description:
      "Track all 16 key performance indicators for your practice — month over month, tagged by team member. Includes industry benchmarks, trend indicators, and a side-by-side compare view.",
    href: "/members/resources/finance/kpi-tracker",
  },
  {
    title: "Second Location Feasibility Model",
    type: "Tool",
    description:
      "Model startup investment, financing, a realistic staffing ramp, and a revenue ramp for a new location. Calculates your break-even month, full payback timeline, and the peak capital you'll actually need on hand.",
    href: "/members/resources/finance/expansion-feasibility",
  },
  {
    title: "Client LTV & Acquisition Cost Calculator",
    type: "Tool",
    description:
      "Turn retention rate, visit frequency, and average ticket into a patient's lifetime value, then see exactly how much you can afford to spend acquiring one — and how your actual spend compares.",
    href: "/members/resources/finance/ltv-cac-calculator",
  },
];

const typeMeta: Record<string, { color: string; bg: string; border: string; action: string }> = {
  Template: {
    color: "#a28c75",
    bg: "rgba(162,140,117,0.1)",
    border: "rgba(162,140,117,0.25)",
    action: "Download",
  },
  Guide: {
    color: "#c8b3a3",
    bg: "rgba(200,179,163,0.08)",
    border: "rgba(200,179,163,0.2)",
    action: "View",
  },
  Checklist: {
    color: "#d4c5b8",
    bg: "rgba(212,197,184,0.08)",
    border: "rgba(212,197,184,0.18)",
    action: "Download",
  },
  Tool: {
    color: "#b89e8a",
    bg: "rgba(184,158,138,0.08)",
    border: "rgba(184,158,138,0.2)",
    action: "Open",
  },
};

export default function FinanceResourcesPage() {
  return (
    <div className="bg-[#170009] min-h-screen">
      {/* Hero header */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-12">
          {/* Breadcrumb */}
          <Link
            href="/members/resources"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            All Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <TrendingUp size={18} style={{ color: "#a28c75" }} />
            </div>
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#a28c75" }}
            >
              Member Library
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Finance & Business Performance
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.6)" }}
          >
            Revenue tracking, pricing strategy, profitability analysis, budgeting,
            and KPI dashboards — because the numbers tell the real story.
          </p>
        </div>
      </div>

      {/* ── P&L Resources Featured Section ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(162,140,117,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              P&amp;L Resources
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <p
            className="text-sm leading-relaxed mb-8 max-w-2xl"
            style={{ color: "rgba(255,253,246,0.55)" }}
          >
            Everything you need to understand and track your practice&apos;s profitability —
            a comprehensive guide and a ready-to-use spreadsheet template built for aesthetic practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Guide card */}
            <Link
              href="/members/resources/finance/pl-guide"
              className="group rounded-xl border p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#a28c75]/30"
              style={{
                background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
                borderColor: "rgba(162,140,117,0.2)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(162,140,117,0.12)",
                      border: "1px solid rgba(162,140,117,0.22)",
                    }}
                  >
                    <FileText size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{
                      color: "#c8b3a3",
                      background: "rgba(200,179,163,0.08)",
                      border: "1px solid rgba(200,179,163,0.2)",
                    }}
                  >
                    Guide
                  </span>
                </div>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.2)",
                  }}
                >
                  <ExternalLink size={13} style={{ color: "#a28c75" }} />
                </div>
              </div>

              <div>
                <h3
                  className="font-display text-xl font-light mb-2 leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  Med Spa P&amp;L Guide
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,253,246,0.55)" }}
                >
                  What to track, how to categorize every dollar, and how to interpret
                  the numbers — so you know exactly where your practice stands.
                  Covers revenue categories, COGS, payroll, occupancy, marketing, admin,
                  key metrics, and a monthly review checklist.
                </p>
              </div>

              <div className="mt-auto pt-2">
                <span
                  className="text-xs tracking-[0.15em] uppercase flex items-center gap-1.5"
                  style={{ color: "#a28c75" }}
                >
                  <ExternalLink size={11} />
                  Read Guide →
                </span>
              </div>
            </Link>

            {/* Download card */}
            <a
              href="/downloads/ae-pl-template.xlsx"
              download
              className="group rounded-xl border p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#a28c75]/30"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #170009 100%)",
                borderColor: "rgba(162,140,117,0.15)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(162,140,117,0.1)",
                      border: "1px solid rgba(162,140,117,0.2)",
                    }}
                  >
                    <Calculator size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{
                      color: "#a28c75",
                      background: "rgba(162,140,117,0.1)",
                      border: "1px solid rgba(162,140,117,0.25)",
                    }}
                  >
                    Template
                  </span>
                </div>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.2)",
                  }}
                >
                  <Download size={13} style={{ color: "#a28c75" }} />
                </div>
              </div>

              <div>
                <h3
                  className="font-display text-xl font-light mb-2 leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  Monthly &amp; Annual P&amp;L Template
                </h3>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "rgba(255,253,246,0.55)" }}
                >
                  Four-tab Excel workbook built for aesthetic practices. All formulas pre-built —
                  enter your numbers and it calculates gross margin, payroll %, net profit, and
                  nine KPI metrics automatically.
                </p>
                <ul className="space-y-1">
                  {[
                    "Monthly P&L with all revenue & expense categories",
                    "Revenue by service + revenue by provider",
                    "Auto-calculating KPI Dashboard",
                  ].map((feat) => (
                    <li
                      key={feat}
                      className="text-xs flex items-center gap-2"
                      style={{ color: "rgba(162,140,117,0.65)" }}
                    >
                      <span style={{ color: "#a28c75" }}>·</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-2">
                <span
                  className="text-xs tracking-[0.15em] uppercase flex items-center gap-1.5"
                  style={{ color: "#a28c75" }}
                >
                  <Download size={11} />
                  Download .xlsx →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── Budget & Financial Dashboard Featured Section ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(162,140,117,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Budget &amp; Financial Dashboard
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <div
            className="group rounded-xl border p-7 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(162,140,117,0.12)",
                      border: "1px solid rgba(162,140,117,0.22)",
                    }}
                  >
                    <Layers size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{
                      color: "#b89e8a",
                      background: "rgba(184,158,138,0.08)",
                      border: "1px solid rgba(184,158,138,0.2)",
                    }}
                  >
                    Interactive Tool
                  </span>
                </div>

                <h3
                  className="font-display text-2xl font-light mb-3 leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  Build your budget. Track your spending. Know your numbers.
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(255,253,246,0.55)" }}
                >
                  A four-tab interactive dashboard covering the full financial picture of your
                  practice — from annual budget planning through monthly expense tracking,
                  quarterly rollups, and KPI benchmarking. All data saves locally in your browser.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/members/resources/finance/budget-tracker"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                    style={{ background: "#a28c75", color: "#170009" }}
                  >
                    <FileText size={13} />
                    View Guide
                  </Link>
                  <a
                    href="/tools/budget-tracker.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-70"
                    style={{
                      background: "transparent",
                      color: "#a28c75",
                      border: "1px solid rgba(162,140,117,0.3)",
                    }}
                  >
                    <ExternalLink size={13} />
                    Open Tool
                  </a>
                </div>
              </div>

              {/* Right — feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Calculator, label: "Budget Setup", desc: "Annual revenue goal + 11-category allocation with benchmarks" },
                  { icon: TrendingUp, label: "Monthly Tracker", desc: "Revenue entry, CSV expense import, budget vs. actual variance" },
                  { icon: BarChart2, label: "Annual Overview", desc: "Quarterly rollups, month-over-month chart, and annual totals" },
                  { icon: Layers, label: "KPI Scorecard", desc: "Financial health rating and expense % vs. industry benchmarks" },
                ].map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.label}
                      className="rounded-lg p-4"
                      style={{
                        background: "rgba(162,140,117,0.05)",
                        border: "1px solid rgba(162,140,117,0.12)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={13} style={{ color: "#a28c75" }} />
                        <span
                          className="text-xs font-medium tracking-wide"
                          style={{ color: "#fffdf6" }}
                        >
                          {feat.label}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cash Flow Forecasting Featured Section ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(162,140,117,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Cash Flow Forecasting
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <p
            className="text-sm leading-relaxed mb-8 max-w-2xl"
            style={{ color: "rgba(255,253,246,0.55)" }}
          >
            Profit and cash aren&apos;t the same thing — a profitable month can still run your
            practice short on cash if revenue is financed out slowly or a big payment lands the
            same week as payroll. This forecasts the cash itself, month by month and week by week.
          </p>

          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
              >
                <Banknote size={22} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>
                  Cash Flow Forecast Template
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.6)" }}>
                  A 12-month and 13-week Excel forecast, pre-built with formulas and a working
                  example. Enter your beginning balance and expected inflows/outflows — every
                  running total, net cash flow, and ending balance calculates automatically.
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1">
                  {[
                    "12-month rolling forecast",
                    "13-week short-term forecast",
                    "Minimum reserve target & cushion tracking",
                    "Pre-filled working example",
                  ].map((feat) => (
                    <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                      <span style={{ color: "#a28c75" }}>·</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/downloads/ae-cash-flow-forecast-template.xlsx"
                  download
                  className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "rgba(162,140,117,0.14)",
                    border: "1px solid rgba(162,140,117,0.3)",
                    color: "#a28c75",
                  }}
                >
                  <Download size={13} />
                  Download .xlsx
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SWOT Analysis Featured Section ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(162,140,117,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              SWOT Analysis
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <div
            className="group rounded-xl border p-7 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(162,140,117,0.12)",
                      border: "1px solid rgba(162,140,117,0.22)",
                    }}
                  >
                    <Compass size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{
                      color: "#b89e8a",
                      background: "rgba(184,158,138,0.08)",
                      border: "1px solid rgba(184,158,138,0.2)",
                    }}
                  >
                    Interactive Tool
                  </span>
                </div>

                <h3
                  className="font-display text-2xl font-light mb-3 leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  Know where you stand — every quarter, not just once.
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(255,253,246,0.55)" }}
                >
                  Work through Strengths, Weaknesses, Opportunities, and Threats with guided
                  prompts, star your top priorities, and build a 30-day action plan for each —
                  then save it under this quarter&apos;s name to compare against the next one.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/members/resources/finance/swot-analysis-guide"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                    style={{ background: "#a28c75", color: "#170009" }}
                  >
                    <FileText size={13} />
                    View Guide
                  </Link>
                  <Link
                    href="/members/resources/finance/swot-analysis"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-70"
                    style={{
                      background: "transparent",
                      color: "#a28c75",
                      border: "1px solid rgba(162,140,117,0.3)",
                    }}
                  >
                    <ExternalLink size={13} />
                    Open Tool
                  </Link>
                </div>
              </div>

              {/* Right — feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, label: "Guided Prompts", desc: "Built-in questions for each quadrant, straight from the source template" },
                  { icon: Target, label: "Priority Flags", desc: "Star your top 2–3 items per quadrant to focus on what matters most" },
                  { icon: Calculator, label: "30-Day Action Plan", desc: "One action step per priority item — for strengths, weaknesses, opportunities & threats" },
                  { icon: Layers, label: "Quarter-over-Quarter", desc: "Save each quarter under its own name and look back on what changed" },
                ].map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.label}
                      className="rounded-lg p-4"
                      style={{
                        background: "rgba(162,140,117,0.05)",
                        border: "1px solid rgba(162,140,117,0.12)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={13} style={{ color: "#a28c75" }} />
                        <span
                          className="text-xs font-medium tracking-wide"
                          style={{ color: "#fffdf6" }}
                        >
                          {feat.label}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Business Plan Featured Section ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(162,140,117,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Long-Term Business Planning
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <div
            className="group rounded-xl border p-7 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(162,140,117,0.12)",
                      border: "1px solid rgba(162,140,117,0.22)",
                    }}
                  >
                    <Milestone size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{
                      color: "#b89e8a",
                      background: "rgba(184,158,138,0.08)",
                      border: "1px solid rgba(184,158,138,0.2)",
                    }}
                  >
                    Interactive Tool
                  </span>
                </div>

                <h3
                  className="font-display text-2xl font-light mb-3 leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  Plan past this quarter. Plan past this year.
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(255,253,246,0.55)" }}
                >
                  Build your vision, revenue and profit milestones, goals, staffing forecast,
                  and market-risk plan across your 1, 5, and 10-year horizons — then save it
                  under a name and revisit it on its own review cadence.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/members/resources/finance/business-plan-guide"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                    style={{ background: "#a28c75", color: "#170009" }}
                  >
                    <FileText size={13} />
                    View Guide
                  </Link>
                  <Link
                    href="/members/resources/finance/business-plan"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-70"
                    style={{
                      background: "transparent",
                      color: "#a28c75",
                      border: "1px solid rgba(162,140,117,0.3)",
                    }}
                  >
                    <ExternalLink size={13} />
                    Open Tool
                  </Link>
                </div>
              </div>

              {/* Right — feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Compass, label: "3 Time Horizons", desc: "Vision, revenue targets, and goals mapped across 1, 5, and 10 years" },
                  { icon: DollarSign, label: "Revenue & Profit Milestones", desc: "Set concrete dollar or margin targets for each horizon" },
                  { icon: ListChecks, label: "Goals → Actions", desc: "One major goal per horizon, broken into 3 short-term action steps" },
                  { icon: RefreshCw, label: "Market Shift Tracking", desc: "Plan for competitors, regulation, economy, seasonality & tech across all 3 horizons" },
                ].map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.label}
                      className="rounded-lg p-4"
                      style={{
                        background: "rgba(162,140,117,0.05)",
                        border: "1px solid rgba(162,140,117,0.12)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={13} style={{ color: "#a28c75" }} />
                        <span
                          className="text-xs font-medium tracking-wide"
                          style={{ color: "#fffdf6" }}
                        >
                          {feat.label}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Competitive Pricing Analysis ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(162,140,117,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Competitive Pricing Analysis
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <div
            className="group rounded-xl border p-7 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(162,140,117,0.12)",
                      border: "1px solid rgba(162,140,117,0.22)",
                    }}
                  >
                    <DollarSign size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{
                      color: "#c8b3a3",
                      background: "rgba(200,179,163,0.08)",
                      border: "1px solid rgba(200,179,163,0.2)",
                    }}
                  >
                    AI Tool
                  </span>
                </div>

                <h3
                  className="font-display text-2xl font-light mb-3 leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  Know exactly where to price a treatment before you launch it.
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(255,253,246,0.55)" }}
                >
                  Enter a treatment, your city and state, and where you want to sit against local
                  competitors — below, at, or above market. Our AI reasons through typical regional
                  pricing patterns and gives you a specific per-session price, with package pricing
                  if you want it, and the logic behind the number.
                </p>

                <a
                  href="/tools/pricing-analyzer.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{ background: "#a28c75", color: "#170009" }}
                >
                  <DollarSign size={12} />
                  Open Pricing Analysis
                </a>
              </div>

              {/* Right — feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Choose Your Position", desc: "Below, at, or above market — the recommendation adapts to the position you pick" },
                  { label: "Location-Aware", desc: "Factors in your city and state, not a flat national number" },
                  { label: "Package Pricing", desc: "Optional 3- and 6-session package pricing alongside the per-session rate" },
                  { label: "Honest About Limits", desc: "A directional estimate with a clear note to spot-check real local competitors" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{
                      background: "rgba(162,140,117,0.05)",
                      border: "1px solid rgba(162,140,117,0.12)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign size={13} style={{ color: "#a28c75" }} />
                      <span
                        className="text-xs font-medium tracking-wide"
                        style={{ color: "#fffdf6" }}
                      >
                        {feat.label}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Device ROI Tracker Featured Section ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(162,140,117,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Device ROI Tracker
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <div
            className="group rounded-xl border p-7 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(162,140,117,0.12)",
                      border: "1px solid rgba(162,140,117,0.22)",
                    }}
                  >
                    <Gauge size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{
                      color: "#b89e8a",
                      background: "rgba(184,158,138,0.08)",
                      border: "1px solid rgba(184,158,138,0.2)",
                    }}
                  >
                    Interactive Tool
                  </span>
                </div>

                <h3
                  className="font-display text-2xl font-light mb-3 leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  Know exactly when a device pays for itself.
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(255,253,246,0.55)" }}
                >
                  Enter how you paid for a device — in full, financed with a down payment, or
                  monthly-only — plus every warranty, service, and parts cost along the way.
                  Log revenue as it comes in and see your real ROI, break-even progress, and
                  whether you&apos;re on pace to hit your payoff goal. Track as many devices as
                  you own.
                </p>

                <Link
                  href="/members/resources/finance/device-roi-tracker"
                  className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{ background: "#a28c75", color: "#170009" }}
                >
                  <Gauge size={13} />
                  Open Device ROI Tracker
                </Link>
              </div>

              {/* Right — feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: DollarSign, label: "True Cost, Incl. Interest", desc: "Full payment, financed, or monthly-only — plus ongoing warranty, servicing & parts" },
                  { icon: TrendingUp, label: "Real ROI", desc: "Live ROI %, net position, and % of investment recovered as revenue comes in" },
                  { icon: Target, label: "Payoff Goals", desc: "Set a target payoff date and an optional ROI goal to track your pace against" },
                  { icon: Gauge, label: "Pacing Projections", desc: "See your projected break-even date and whether you're ahead or behind goal" },
                ].map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.label}
                      className="rounded-lg p-4"
                      style={{
                        background: "rgba(162,140,117,0.05)",
                        border: "1px solid rgba(162,140,117,0.12)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={13} style={{ color: "#a28c75" }} />
                        <span
                          className="text-xs font-medium tracking-wide"
                          style={{ color: "#fffdf6" }}
                        >
                          {feat.label}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <p
          className="text-xs tracking-[0.25em] uppercase mb-8"
          style={{ color: "rgba(162,140,117,0.5)" }}
        >
          {resources.length} resources available
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((resource) => {
            const meta = typeMeta[resource.type];
            const ActionIcon = meta.action === "Download" ? Download : ExternalLink;
            const isLivetool = "href" in resource && resource.href;
            const CardWrapper = ({ children }: { children: React.ReactNode }) =>
              isLivetool ? (
                <Link href={resource.href as string} className="group rounded-xl border p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#a28c75]/30" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.2)" }}>
                  {children}
                </Link>
              ) : (
                <div className="group rounded-xl border p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  {children}
                </div>
              );
            return (
              <CardWrapper key={resource.title}>
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide flex-shrink-0"
                    style={{
                      color: meta.color,
                      background: meta.bg,
                      border: `1px solid ${meta.border}`,
                    }}
                  >
                    {resource.type}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{
                      background: "rgba(162,140,117,0.1)",
                      border: "1px solid rgba(162,140,117,0.2)",
                    }}
                  >
                    <ActionIcon size={13} style={{ color: "#a28c75" }} />
                  </div>
                </div>

                <div>
                  <h3
                    className="font-display text-lg font-light mb-2 leading-snug"
                    style={{ color: "#fffdf6" }}
                  >
                    {resource.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,253,246,0.55)" }}
                  >
                    {resource.description}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  {isLivetool ? (
                    <span
                      className="text-xs tracking-[0.15em] uppercase flex items-center gap-1.5"
                      style={{ color: "#a28c75" }}
                    >
                      <BarChart2 size={11} />
                      Open Tool →
                    </span>
                  ) : (
                    <button
                      className="text-xs tracking-[0.15em] uppercase flex items-center gap-1.5 transition-colors duration-200 hover:opacity-80"
                      style={{ color: "rgba(162,140,117,0.65)" }}
                    >
                      <ActionIcon size={11} />
                      {meta.action} — Coming Soon
                    </button>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
