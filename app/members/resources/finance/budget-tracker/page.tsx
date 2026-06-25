import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, TrendingUp, DollarSign, BarChart2, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budget & Financial Dashboard | Finance Resources | Aesthetic Executive",
  description:
    "Build your annual budget, track monthly expenses by category, and monitor your financial health in one interactive dashboard — built specifically for aesthetic practices.",
};

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Set Your Annual Budget",
    body: "Enter your annual revenue goal and allocate a percentage to each of the 11 standard expense categories. Industry benchmarks are built in to guide you — or hit Auto-Fill to start from the midpoint of each range. Your monthly targets calculate automatically.",
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Track Monthly Actuals",
    body: "Select a month and enter your revenue. Upload a CSV export from QuickBooks, Wave, or any accounting software — the tool matches your categories automatically. Or enter amounts manually. Each category shows budget vs. actual, variance, and % of revenue with color-coded status.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Review the Annual View",
    body: "See all 12 months at a glance with quarterly rollups, a revenue vs. expenses bar chart, and a month-over-month detail table. Quarterly cards surface Q1–Q4 totals and financial health ratings, making it easy to spot seasonal patterns.",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Monitor Your KPI Scorecard",
    body: "Get an instant financial health rating (Excellent / Strong / Stable / Needs Improvement) based on your net profit margin. All expense categories show your actual % vs. benchmark range — so you know exactly where to investigate.",
  },
];

const categories = [
  { key: "Payroll & Labor",          lo: 25, hi: 35, note: "Providers, estheticians, front desk, benefits, payroll taxes" },
  { key: "Cost of Goods Sold",       lo: 15, hi: 25, note: "Injectables, skincare, consumables, procedure supplies" },
  { key: "Marketing",                lo: 5,  hi: 10, note: "Google/Meta ads, SEO, email, content, referral programs" },
  { key: "Occupancy",                lo: 5,  hi: 12, note: "Rent, CAM charges, property expenses" },
  { key: "Technology & Software",    lo: 2,  hi: 5,  note: "EMR, CRM, scheduling, phone systems, subscriptions" },
  { key: "Merchant Processing",      lo: 2,  hi: 4,  note: "Credit card processing, financing platform fees" },
  { key: "Equipment & Device Costs", lo: 5,  hi: 10, note: "Device financing/leases, maintenance, service contracts" },
  { key: "Administrative Expenses",  lo: 2,  hi: 5,  note: "Office supplies, printing, uniforms, cleaning" },
  { key: "Insurance",                lo: 1,  hi: 3,  note: "Malpractice, general liability, workers comp, cyber" },
  { key: "Professional Services",    lo: 1,  hi: 3,  note: "CPA, bookkeeping, legal, consultants" },
  { key: "Education & Training",     lo: 1,  hi: 3,  note: "Conferences, clinical training, development courses" },
];

const csvTips = [
  "Export from QuickBooks, Wave, FreshBooks, or your EMR system",
  'Your file must include a "Category" column and an "Amount" column',
  "Category values are matched automatically — common variations are recognized",
  "Unmatched categories are flagged so you can enter them manually",
  "You can re-upload anytime; the tool updates the matched amounts",
];

export default function BudgetTrackerPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      {/* Hero */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(162,140,117,0.12)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)",
          }}
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

          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium tracking-wide"
              style={{
                color: "#b89e8a",
                background: "rgba(184,158,138,0.08)",
                border: "1px solid rgba(184,158,138,0.2)",
              }}
            >
              Interactive Tool
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-5 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Budget &amp; Financial Dashboard
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed mb-8"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            Build your annual budget by category, import monthly expenses from CSV,
            and track financial health through quarterly rollups and KPI benchmarks —
            all in one tool, built specifically for aesthetic practices.
          </p>

          <a
            href="/tools/budget-tracker.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 h-12 rounded text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ background: "#a28c75", color: "#0c0004" }}
          >
            Open Dashboard
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        {/* How it works */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            How It Works
          </p>
          <h2
            className="font-display text-3xl font-light mb-10 leading-snug"
            style={{ color: "#fffdf6" }}
          >
            Four tabs. A complete picture.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-xl border p-6"
                  style={{
                    background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                    borderColor: "rgba(162,140,117,0.18)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(162,140,117,0.1)",
                        border: "1px solid rgba(162,140,117,0.2)",
                      }}
                    >
                      <Icon size={16} style={{ color: "#a28c75" }} />
                    </div>
                    <span
                      className="font-display text-sm"
                      style={{ color: "rgba(162,140,117,0.5)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="font-display text-lg font-light mb-3 leading-snug"
                    style={{ color: "#fffdf6" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,253,246,0.45)" }}
                  >
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CSV upload tips */}
        <div
          className="rounded-xl border p-7 mb-16"
          style={{
            background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.15)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-3"
                style={{ color: "rgba(162,140,117,0.6)" }}
              >
                CSV Import
              </p>
              <h3
                className="font-display text-xl font-light mb-3 leading-snug"
                style={{ color: "#fffdf6" }}
              >
                Upload your expense export directly
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,253,246,0.45)" }}
              >
                The tool reads your accounting software export and automatically
                maps expenses to the 11 standard categories. No reformatting required
                in most cases.
              </p>
            </div>
            <ul className="space-y-3">
              {csvTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#a28c75" }}
                  />
                  <span className="text-sm" style={{ color: "rgba(255,253,246,0.5)" }}>
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benchmark table */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            Industry Benchmarks
          </p>
          <h2
            className="font-display text-3xl font-light mb-3 leading-snug"
            style={{ color: "#fffdf6" }}
          >
            The 11 expense categories
          </h2>
          <p
            className="text-sm max-w-2xl leading-relaxed mb-8"
            style={{ color: "rgba(255,253,246,0.45)" }}
          >
            Every expense in your practice maps to one of these categories. The benchmark
            ranges are derived from high-performing aesthetic and medical spa operations —
            they represent the target zone, not the average.
          </p>

          <div
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: "rgba(162,140,117,0.18)" }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr
                  style={{
                    background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
                    borderBottom: "1px solid rgba(162,140,117,0.2)",
                  }}
                >
                  <th
                    className="text-left px-5 py-3.5 text-xs tracking-[0.18em] uppercase"
                    style={{ color: "#a28c75" }}
                  >
                    Category
                  </th>
                  <th
                    className="text-left px-5 py-3.5 text-xs tracking-[0.18em] uppercase"
                    style={{ color: "#a28c75" }}
                  >
                    Benchmark
                  </th>
                  <th
                    className="text-left px-5 py-3.5 text-xs tracking-[0.18em] uppercase hidden md:table-cell"
                    style={{ color: "#a28c75" }}
                  >
                    Includes
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, i) => (
                  <tr
                    key={cat.key}
                    style={{
                      borderBottom:
                        i < categories.length - 1
                          ? "1px solid rgba(162,140,117,0.07)"
                          : "none",
                    }}
                  >
                    <td
                      className="px-5 py-3.5 text-sm font-medium"
                      style={{ color: "#fffdf6" }}
                    >
                      {cat.key}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          color: "#a28c75",
                          background: "rgba(162,140,117,0.1)",
                          border: "1px solid rgba(162,140,117,0.22)",
                        }}
                      >
                        {cat.lo}–{cat.hi}%
                      </span>
                    </td>
                    <td
                      className="px-5 py-3.5 text-xs hidden md:table-cell"
                      style={{ color: "rgba(255,253,246,0.4)" }}
                    >
                      {cat.note}
                    </td>
                  </tr>
                ))}
                {/* Profit row */}
                <tr
                  style={{
                    borderTop: "1px solid rgba(162,140,117,0.2)",
                    background: "rgba(47,4,16,0.4)",
                  }}
                >
                  <td
                    className="px-5 py-3.5 text-sm font-medium"
                    style={{ color: "#fffdf6" }}
                  >
                    Target Net Profit
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        color: "rgba(34,197,94,0.9)",
                        background: "rgba(34,197,94,0.08)",
                        border: "1px solid rgba(34,197,94,0.2)",
                      }}
                    >
                      15–30%
                    </span>
                  </td>
                  <td
                    className="px-5 py-3.5 text-xs hidden md:table-cell"
                    style={{ color: "rgba(255,253,246,0.4)" }}
                  >
                    Before owner distributions and taxes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial health ratings */}
        <div className="mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            KPI Scorecard
          </p>
          <h2
            className="font-display text-3xl font-light mb-3 leading-snug"
            style={{ color: "#fffdf6" }}
          >
            Financial health ratings
          </h2>
          <p
            className="text-sm max-w-2xl leading-relaxed mb-8"
            style={{ color: "rgba(255,253,246,0.45)" }}
          >
            Your net profit margin — after all operating expenses — determines your
            financial health rating. This is based on revenue minus expenses before
            owner distributions and taxes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Excellent", range: "25%+ margin", color: "rgba(34,197,94,0.9)", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)", note: "Running lean and maximizing profitability" },
              { label: "Strong",    range: "15–25% margin", color: "#a28c75", bg: "rgba(162,140,117,0.1)", border: "rgba(162,140,117,0.25)", note: "Healthy margins with room to reinvest" },
              { label: "Stable",    range: "10–15% margin", color: "rgba(245,158,11,0.9)", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", note: "Covering costs but limited flexibility" },
              { label: "Needs Improvement", range: "Below 10%", color: "rgba(239,68,68,0.9)", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)", note: "Review expenses and revenue immediately" },
            ].map((h) => (
              <div
                key={h.label}
                className="rounded-xl border p-5"
                style={{ background: h.bg, borderColor: h.border }}
              >
                <div
                  className="font-display text-xl font-light mb-1"
                  style={{ color: h.color }}
                >
                  {h.label}
                </div>
                <div
                  className="text-xs font-medium mb-3"
                  style={{ color: h.color, opacity: 0.8 }}
                >
                  {h.range}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  {h.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl border p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <h2
            className="font-display text-3xl font-light mb-3"
            style={{ color: "#fffdf6" }}
          >
            Ready to build your budget?
          </h2>
          <p
            className="text-sm max-w-md mx-auto leading-relaxed mb-7"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            All data saves automatically in your browser. No logins, no uploads —
            your numbers stay private and accessible whenever you return.
          </p>
          <a
            href="/tools/budget-tracker.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 h-12 rounded text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ background: "#a28c75", color: "#0c0004" }}
          >
            Open Budget Dashboard
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
