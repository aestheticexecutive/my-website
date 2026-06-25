import Link from "next/link";
import { ArrowLeft, TrendingUp, Download, ExternalLink, BarChart2, FileText, Calculator, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance & Business Performance Resources | Aesthetic Executive",
};

const resources: { title: string; type: string; description: string; href?: string }[] = [
  {
    title: "Monthly P&L Tracker",
    type: "Template",
    description:
      "Pre-built profit and loss spreadsheet designed for aesthetic practices — with built-in formulas for revenue by service category, COGS, and net margin.",
  },
  {
    title: "Treatment Profitability Analyzer",
    type: "Tool",
    description:
      "Enter price and direct costs for each treatment to see net profit and margin. Includes conditional color-coding, a monthly profit contribution tab, and 15 pre-loaded services.",
    href: "/members/resources/finance/treatment-profitability",
  },
  {
    title: "Membership Program Pricing Model",
    type: "Tool",
    description:
      "Calculate optimal membership tier pricing based on treatment costs and volume — with projected MRR and break-even analysis built in.",
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
    title: "Cash Flow Projection Worksheet",
    type: "Tool",
    description:
      "13-week cash flow projection model to help you anticipate shortfalls, plan for payroll, and make confident decisions about growth investments.",
  },
  {
    title: "Pricing Strategy Playbook",
    type: "Guide",
    description:
      "How to price your services with confidence — covering competitive positioning, value-based pricing, package bundling, and how to raise prices without losing patients.",
  },
  {
    title: "Expense Benchmarking Guide",
    type: "Guide",
    description:
      "Industry benchmarks for every major expense category in an aesthetic practice — so you know if you're spending too much or leaving margin on the table.",
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
    <div className="bg-[#0c0004] min-h-screen">
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
            style={{ color: "rgba(255,253,246,0.5)" }}
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
            style={{ color: "rgba(255,253,246,0.45)" }}
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
                background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
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
                  style={{ color: "rgba(255,253,246,0.45)" }}
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
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
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
                  style={{ color: "rgba(255,253,246,0.45)" }}
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
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
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
                  style={{ color: "rgba(255,253,246,0.45)" }}
                >
                  A four-tab interactive dashboard covering the full financial picture of your
                  practice — from annual budget planning through monthly expense tracking,
                  quarterly rollups, and KPI benchmarking. All data saves locally in your browser.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/members/resources/finance/budget-tracker"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                    style={{ background: "#a28c75", color: "#0c0004" }}
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
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
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
                <Link href={resource.href as string} className="group rounded-xl border p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#a28c75]/30" style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.2)" }}>
                  {children}
                </Link>
              ) : (
                <div className="group rounded-xl border p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300" style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
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
                    style={{ color: "rgba(255,253,246,0.45)" }}
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
