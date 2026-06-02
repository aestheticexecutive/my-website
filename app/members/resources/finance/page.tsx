import Link from "next/link";
import { ArrowLeft, TrendingUp, Download, ExternalLink, BarChart2 } from "lucide-react";
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
    title: "Treatment Profitability Calculator",
    type: "Tool",
    description:
      "Enter your pricing, product cost, and time per treatment to see true profit per service. Includes comparison across your full treatment menu.",
  },
  {
    title: "Membership Program Pricing Model",
    type: "Tool",
    description:
      "Calculate optimal membership tier pricing based on treatment costs and volume — with projected MRR and break-even analysis built in.",
  },
  {
    title: "Annual Budget Template",
    type: "Template",
    description:
      "12-month budget planning spreadsheet for aesthetic practices — covering payroll, supplies, marketing, rent, equipment, and owner compensation.",
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
