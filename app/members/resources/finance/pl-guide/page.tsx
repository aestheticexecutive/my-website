import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  DollarSign,
  BarChart2,
  PieChart,
  Percent,
  Target,
  ClipboardCheck,
  CheckCircle,
  ExternalLink,
  Download,
  AlertCircle,
  Calculator,
  FileText,
  Layers,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Med Spa P&L Guide | Aesthetic Executive",
};

const revenueCategories = [
  {
    label: "Injectables",
    color: "rgba(162,140,117,0.9)",
    bg: "rgba(162,140,117,0.1)",
    border: "rgba(162,140,117,0.25)",
    items: ["Botox / Nuceiva", "Dysport / Xeomin / Daxxify", "Dermal Fillers", "Sculptra / Radiesse", "PRF / PRP"],
  },
  {
    label: "Energy-Based Devices",
    color: "rgba(200,179,163,0.9)",
    bg: "rgba(200,179,163,0.08)",
    border: "rgba(200,179,163,0.2)",
    items: ["Morpheus8", "Lumecca (IPL)", "Forma (RF)", "Diolaze (Laser Hair)", "BodyTite / FaceTite"],
  },
  {
    label: "Esthetic Services",
    color: "rgba(212,197,184,0.9)",
    bg: "rgba(212,197,184,0.07)",
    border: "rgba(212,197,184,0.18)",
    items: ["Facials", "Chemical Peels", "HydraFacial", "Dermaplaning", "Microneedling"],
  },
  {
    label: "Wellness Services",
    color: "rgba(184,158,138,0.9)",
    bg: "rgba(184,158,138,0.08)",
    border: "rgba(184,158,138,0.2)",
    items: ["Medical Weight Loss", "IV Therapy", "Hormone Optimization", "Sexual Wellness"],
  },
  {
    label: "Retail & Memberships",
    color: "rgba(162,140,117,0.9)",
    bg: "rgba(162,140,117,0.08)",
    border: "rgba(162,140,117,0.2)",
    items: ["Skincare Products", "Supplements", "Monthly Membership Fees", "VIP Programs"],
  },
  {
    label: "Other Revenue",
    color: "rgba(200,179,163,0.7)",
    bg: "rgba(200,179,163,0.05)",
    border: "rgba(200,179,163,0.15)",
    items: ["Consultation Fees", "Training Revenue", "Event Revenue"],
  },
];

const cogsItems = [
  { label: "Injectable Costs", items: ["Botox purchases", "Filler purchases", "Biostimulators", "PRF tubes, cannulas, syringes"] },
  { label: "Device Consumables", items: ["Morpheus8 tips", "IPL consumables", "Laser hair removal consumables", "RF consumables"] },
  { label: "Retail Product Costs", items: ["Skincare inventory", "Supplements inventory"] },
  { label: "Medical Supplies", items: ["Gloves, gauze, alcohol pads", "Numbing cream", "Needles & syringes"] },
];

const expenseCategories = [
  {
    icon: DollarSign,
    label: "Payroll",
    goal: "25–35%",
    goalNote: "of revenue",
    items: ["Provider Compensation (injectors, estheticians, nurses)", "Administrative Staff (front desk, coordinators)", "Payroll Taxes (employer portion)", "Benefits (health insurance, retirement, PTO)"],
    note: "Payroll is typically your largest single expense. Over 35% signals a staffing efficiency problem.",
  },
  {
    icon: Target,
    label: "Marketing",
    goal: "5–10%",
    goalNote: "of revenue",
    items: ["Digital Advertising (Meta, Google, TikTok)", "Agency Fees", "Website & SEO", "CRM Platforms (GoHighLevel, PatientNow)", "Photography & Videography", "Print Materials"],
    note: "Practices spending under 5% on marketing often plateau. Over 10% without ROI tracking is a risk.",
  },
  {
    icon: Layers,
    label: "Occupancy",
    goal: "10–15%",
    goalNote: "of revenue",
    items: ["Rent", "CAM Fees", "Utilities (electric, water, internet)", "Cleaning Services", "Security"],
    note: "Occupancy is largely fixed. If you're over 15%, focus on growing revenue rather than cutting rent.",
  },
  {
    icon: FileText,
    label: "Administrative",
    goal: "7–12%",
    goalNote: "of revenue",
    items: ["Software (EMR, scheduling, QuickBooks)", "Merchant Processing Fees", "Legal & Accounting Fees", "Insurance", "Licenses & Permits", "Office Supplies & Continuing Education"],
    note: "Often underestimated. Merchant processing alone can run 2.5–3.5% of revenue on card transactions.",
  },
];

const keyMetrics = [
  {
    metric: "Gross Margin",
    formula: "Gross Profit ÷ Revenue",
    goal: "70–80%",
    icon: PieChart,
    note: "A gross margin under 65% usually means injectable costs or retail margins are eroding profitability.",
  },
  {
    metric: "Payroll %",
    formula: "Total Payroll ÷ Revenue",
    goal: "25–35%",
    icon: DollarSign,
    note: "Rising payroll % with flat revenue is a leading indicator of a profitability problem before it shows on the bottom line.",
  },
  {
    metric: "Marketing %",
    formula: "Marketing Spend ÷ Revenue",
    goal: "5–10%",
    icon: BarChart2,
    note: "Track spend vs. booked revenue attribution by channel when possible. Marketing % alone tells you what you spent — not whether it worked.",
  },
  {
    metric: "Net Profit %",
    formula: "Net Profit ÷ Revenue",
    goal: "15–30%",
    icon: TrendingUp,
    note: "A well-run, single-provider med spa should target 20–25%+. Multi-provider practices may see 15–20% while investing in growth.",
  },
  {
    metric: "Revenue Per Provider",
    formula: "Total Revenue ÷ # of Providers",
    goal: "Benchmark internally",
    icon: Calculator,
    note: "Track month-over-month by provider. Wide variance between providers signals a coaching or scheduling issue.",
  },
  {
    metric: "Revenue Per Treatment Room",
    formula: "Total Revenue ÷ # of Rooms",
    goal: "Benchmark internally",
    icon: Percent,
    note: "A measure of space utilization. If rooms sit unused, scheduling structure and provider capacity need attention.",
  },
];

const checklist = [
  "Review Total Revenue vs. prior month and same month last year",
  "Review Revenue by Service Category — what's growing, what's flat?",
  "Review Revenue by Provider — is anyone underperforming?",
  "Review Retail Sales — often the most undermanaged revenue line",
  "Review COGS — any unusual spikes in injectable or supply costs?",
  "Review Payroll % — is it within the 25–35% target?",
  "Review Marketing Spend — what was the ROI this month?",
  "Review Occupancy and Admin costs",
  "Calculate Net Profit % — are you on track?",
  "Compare to Previous Month",
  "Compare to Same Month Last Year",
  "Identify Top 3 Growth Opportunities",
  "Identify Top 3 Expense Reduction Opportunities",
];

export default function PLGuidePage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── Hero ── */}
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
            Finance &amp; Business Performance
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
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Finance &amp; Business Performance
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Med Spa P&amp;L Guide
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            What to track, how to categorize every dollar, and how to read the numbers — so you
            actually know whether your practice is profitable, and where the money goes.
          </p>

          {/* Download CTA */}
          <div className="mt-8">
            <a
              href="/downloads/ae-pl-template.xlsx"
              download
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{
                background: "rgba(162,140,117,0.14)",
                border: "1px solid rgba(162,140,117,0.3)",
                color: "#a28c75",
              }}
            >
              <Download size={15} />
              <span className="text-sm font-medium tracking-wide">Download P&amp;L Spreadsheet Template</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "rgba(162,140,117,0.2)", color: "rgba(162,140,117,0.9)" }}
              >
                .xlsx
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* ── Why You Need a P&L ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Why It Matters
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-2xl border p-8 md:p-10 mb-8"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle size={20} style={{ color: "#a28c75", flexShrink: 0, marginTop: 2 }} />
              <p className="font-display text-xl font-light leading-snug" style={{ color: "#fffdf6" }}>
                The biggest mistake med spas make is looking at their bank account balance
                instead of understanding profitability by category.
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
              A Profit &amp; Loss Statement (P&amp;L) is the single most important financial report for
              your practice. Your bank balance tells you what you have. Your P&amp;L tells you what
              you earned, what it cost, and whether your business model actually works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              className="rounded-xl border p-6"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.13)",
              }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
                What your P&amp;L tells you
              </p>
              <ul className="space-y-2.5">
                {[
                  "How much revenue your practice generated",
                  "How much it cost to provide those services",
                  "What your operating expenses were",
                  "How much profit you actually made",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.6)" }} />
                    <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.55)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.13)",
              }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
                Without a P&amp;L, you can&apos;t know
              </p>
              <ul className="space-y-2.5">
                {[
                  "Whether a new device is actually profitable",
                  "Whether staffing costs are too high",
                  "Whether marketing is producing a return",
                  "How much you can safely reinvest in growth",
                  "Whether you're making money — or just staying busy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.5)", fontSize: 14 }}>·</span>
                    <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.45)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="mt-5 rounded-xl border p-4 flex items-center gap-3"
            style={{
              background: "rgba(162,140,117,0.05)",
              borderColor: "rgba(162,140,117,0.15)",
              borderLeft: "3px solid rgba(162,140,117,0.4)",
            }}
          >
            <CheckCircle size={14} style={{ color: "rgba(162,140,117,0.7)", flexShrink: 0 }} />
            <p className="text-sm" style={{ color: "rgba(255,253,246,0.55)" }}>
              <span style={{ color: "#a28c75" }}>Review cadence:</span>{" "}
              Your P&amp;L should be updated monthly and reviewed within the first 5 days of the following month — while the data is still actionable.
            </p>
          </div>
        </section>

        {/* ── Step 1: Revenue ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 01 — Revenue Categories
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            Separate revenue into categories so you know what&apos;s driving growth — and what isn&apos;t.
            A single &ldquo;total revenue&rdquo; number hides everything.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {revenueCategories.map((cat) => (
              <div
                key={cat.label}
                className="rounded-xl border p-5"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                    style={{ color: cat.color, background: cat.bg, border: `1px solid ${cat.border}` }}
                  >
                    {cat.label}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                      <span style={{ color: "rgba(162,140,117,0.5)" }}>·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Step 2: COGS ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 02 — Cost of Goods Sold (COGS)
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            COGS are expenses directly tied to delivering treatments. Unlike operating expenses,
            COGS move with revenue — if you do more treatments, COGS goes up.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {cogsItems.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border p-5"
                style={{
                  background: "rgba(162,140,117,0.04)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <p className="font-display text-sm font-light mb-3" style={{ color: "#fffdf6" }}>
                  {c.label}
                </p>
                <ul className="space-y-1.5">
                  {c.items.map((item) => (
                    <li key={item} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                      <span style={{ color: "rgba(162,140,117,0.45)" }}>·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Formula callout */}
          <div
            className="rounded-xl border p-6"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
              The Gross Profit Formula
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: "rgba(255,253,246,0.7)" }}>
              <span className="font-display text-lg" style={{ color: "#fffdf6" }}>Revenue</span>
              <span style={{ color: "rgba(162,140,117,0.6)" }}>−</span>
              <span className="font-display text-lg" style={{ color: "#fffdf6" }}>COGS</span>
              <span style={{ color: "rgba(162,140,117,0.6)" }}>=</span>
              <span className="font-display text-lg" style={{ color: "#a28c75" }}>Gross Profit</span>
            </div>
            <div className="mt-4 pt-4 border-t" style={{ borderColor: "rgba(162,140,117,0.15)" }}>
              <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>
                Example: $100,000 Revenue − $22,000 COGS = $78,000 Gross Profit (78% Gross Margin)
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,253,246,0.4)" }}>
                Target Gross Margin: <span style={{ color: "rgba(162,140,117,0.8)" }}>70–80%</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── Steps 3–6: Operating Expenses ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Steps 03–06 — Operating Expenses
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            Operating expenses are the costs of running the business — separate from the cost
            of delivering treatments. Each category has a benchmark range most healthy practices
            fall within.
          </p>

          <div className="space-y-5">
            {expenseCategories.map((exp, idx) => (
              <div
                key={exp.label}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(162,140,117,0.14)" }}
              >
                <div
                  className="flex items-center justify-between gap-4 px-6 py-4 border-b"
                  style={{
                    background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                    borderColor: "rgba(162,140,117,0.15)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}
                    >
                      <exp.icon size={15} style={{ color: "#a28c75" }} />
                    </div>
                    <span className="font-display text-base font-light" style={{ color: "#fffdf6" }}>
                      Step 0{idx + 3}: {exp.label}
                    </span>
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium tracking-wide flex-shrink-0"
                    style={{
                      background: "rgba(46,125,50,0.12)",
                      border: "1px solid rgba(46,125,50,0.25)",
                      color: "rgba(46,125,50,0.9)",
                    }}
                  >
                    Goal: {exp.goal} {exp.goalNote}
                  </span>
                </div>
                <div
                  className="p-6"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
                        Line items to track
                      </p>
                      <ul className="space-y-2">
                        {exp.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }}>·</span>
                            <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.5)" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: "rgba(162,140,117,0.05)",
                        border: "1px solid rgba(162,140,117,0.12)",
                        borderLeft: "3px solid rgba(162,140,117,0.3)",
                      }}
                    >
                      <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                        Context
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                        {exp.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Step 7: Net Profit ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 07 — Calculate Net Profit
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-2xl border p-8 md:p-10 mb-6"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "rgba(162,140,117,0.6)" }}>
              Full P&amp;L Formula
            </p>
            <div className="space-y-3 mb-6">
              {[
                { label: "Revenue", sign: "", color: "#fffdf6" },
                { label: "− COGS", sign: "−", color: "rgba(255,253,246,0.65)" },
                { label: "= Gross Profit", sign: "=", color: "#a28c75" },
                { label: "− Payroll", sign: "−", color: "rgba(255,253,246,0.65)" },
                { label: "− Marketing", sign: "−", color: "rgba(255,253,246,0.65)" },
                { label: "− Occupancy", sign: "−", color: "rgba(255,253,246,0.65)" },
                { label: "− Administrative", sign: "−", color: "rgba(255,253,246,0.65)" },
                { label: "= Net Operating Profit", sign: "=", color: "#a28c75" },
              ].map((line, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="font-display text-lg" style={{ color: line.color }}>
                    {line.label}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="rounded-lg p-4 mt-4"
              style={{
                background: "rgba(162,140,117,0.06)",
                border: "1px solid rgba(162,140,117,0.15)",
              }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.55)" }}>
                Example — $100K Revenue Month
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Revenue", value: "$100,000" },
                  { label: "COGS", value: "$22,000" },
                  { label: "Gross Profit", value: "$78,000" },
                  { label: "Payroll (30%)", value: "$30,000" },
                  { label: "Marketing (5%)", value: "$5,000" },
                  { label: "Occupancy (10%)", value: "$10,000" },
                  { label: "Admin (8%)", value: "$8,000" },
                  { label: "Net Profit (25%)", value: "$25,000", highlight: true },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>{item.label}</p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: item.highlight ? "#a28c75" : "rgba(255,253,246,0.7)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Metrics ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Key Metrics
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            These six metrics give you a complete picture of your practice&apos;s financial health.
            Track all of them every month — not just the ones that look good.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {keyMetrics.map((m) => (
              <div
                key={m.metric}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.13)",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                    >
                      <m.icon size={15} style={{ color: "#a28c75" }} />
                    </div>
                    <h3 className="font-display text-base font-light" style={{ color: "#fffdf6" }}>
                      {m.metric}
                    </h3>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{
                      background: "rgba(46,125,50,0.1)",
                      border: "1px solid rgba(46,125,50,0.22)",
                      color: "rgba(46,125,50,0.9)",
                    }}
                  >
                    {m.goal}
                  </span>
                </div>
                <div
                  className="text-xs font-mono mb-3 px-3 py-2 rounded-lg"
                  style={{
                    background: "rgba(162,140,117,0.06)",
                    border: "1px solid rgba(162,140,117,0.12)",
                    color: "rgba(162,140,117,0.8)",
                  }}
                >
                  {m.formula}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                  {m.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Monthly Checklist ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Monthly Financial Review
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div
              className="flex items-center gap-3 px-6 py-4 border-b"
              style={{
                background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
                borderColor: "rgba(162,140,117,0.15)",
              }}
            >
              <ClipboardCheck size={16} style={{ color: "#a28c75" }} />
              <h3 className="font-display text-base font-light" style={{ color: "#fffdf6" }}>
                Run through this every month, within the first 5 days
              </h3>
            </div>
            <div
              className="p-6"
              style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                {checklist.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 py-2.5 border-b"
                    style={{ borderColor: "rgba(162,140,117,0.08)" }}
                  >
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(162,140,117,0.08)",
                        border: "1px solid rgba(162,140,117,0.2)",
                      }}
                    >
                      <span className="text-xs" style={{ color: "rgba(162,140,117,0.5)" }}>□</span>
                    </div>
                    <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.55)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Spreadsheet download CTA ── */}
        <section>
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
              >
                <Calculator size={22} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>
                  P&amp;L Spreadsheet Template
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Four-tab Excel template built for aesthetic practices. All formulas pre-built —
                  enter your numbers and it calculates everything automatically.
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1">
                  {[
                    "Monthly P&L with all revenue & expense categories",
                    "Revenue breakdown by service",
                    "Revenue breakdown by provider",
                    "Auto-calculating KPI Dashboard",
                  ].map((feat) => (
                    <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                      <span style={{ color: "#a28c75" }}>·</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/downloads/ae-pl-template.xlsx"
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
        </section>

        {/* ── Back nav ── */}
        <div className="pt-4">
          <Link
            href="/members/resources/finance"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            <ArrowLeft size={12} />
            Back to Finance &amp; Business Performance
          </Link>
        </div>

      </div>
    </div>
  );
}
