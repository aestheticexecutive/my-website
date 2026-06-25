import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  Download,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Percent,
  Clock,
  ShoppingBag,
  Package,
  Award,
  BarChart2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatment Profitability Analyzer | Aesthetic Executive",
};

const formula = [
  { label: "Treatment Price", sign: "", color: "#fffdf6" },
  { label: "− Cost of Goods Sold (COGS)", sign: "−", color: "rgba(255,253,246,0.65)" },
  { label: "− Additional Supplies", sign: "−", color: "rgba(255,253,246,0.65)" },
  { label: "− Provider Labor", sign: "−", color: "rgba(255,253,246,0.65)" },
  { label: "− Provider Commission", sign: "−", color: "rgba(255,253,246,0.65)" },
  { label: "= Net Profit Per Treatment", sign: "=", color: "#a28c75" },
];

const morpheus8 = [
  { label: "Morpheus8 Tip", value: "$120" },
  { label: "Additional Supplies", value: "$10" },
  { label: "Provider Labor", value: "$50" },
  { label: "Provider Commission", value: "$100" },
];

const inputCards = [
  {
    step: "01",
    icon: DollarSign,
    label: "Treatment Price",
    description: "What the patient pays for this treatment.",
    examples: ["Morpheus8 Face = $1,000", "Botox (average session) = $500", "HydraFacial = $250"],
    note: "",
  },
  {
    step: "02",
    icon: Package,
    label: "Cost of Goods Sold (COGS)",
    description: "Items directly consumed during treatment — things you use up on each patient.",
    examples: ["Botox / Nuceiva / Dysport", "Dermal fillers, Sculptra, Radiesse", "Morpheus8 tips", "Cannulas, PRF tubes", "Exosomes, growth factors"],
    note: "",
  },
  {
    step: "03",
    icon: ShoppingBag,
    label: "Additional Supplies",
    description: "Small consumables used per treatment. These are often overlooked but add up.",
    examples: ["Gloves, gauze, alcohol prep pads", "Numbing cream", "Needles and syringes", "Applicators, tip covers"],
    note: "",
  },
  {
    step: "04",
    icon: Clock,
    label: "Provider Labor Cost",
    description: "The cost of the provider's time — not their pay rate, their true hourly cost.",
    examples: [],
    formula: {
      label: "Treatment Time (hrs) × Hourly Cost",
      example: "60-minute treatment, $50/hr = $50 labor cost",
    },
    note: "Use the provider's true cost including taxes and benefits — not just their base hourly rate.",
  },
  {
    step: "05",
    icon: Award,
    label: "Provider Commission",
    description: "Any percentage or flat-rate bonus paid to the provider per treatment.",
    examples: ["10% commission on a $1,000 treatment = $100", "Flat bonus: $25 per filler syringe"],
    note: "If commission varies by treatment, calculate it individually for each service.",
  },
];

const monthlyTable = [
  { treatment: "Botox", profit: "$180", volume: "120", contribution: "$21,600" },
  { treatment: "Filler", profit: "$320", volume: "35", contribution: "$11,200" },
  { treatment: "Morpheus8", profit: "$720", volume: "20", contribution: "$14,400" },
  { treatment: "Lumecca", profit: "$275", volume: "30", contribution: "$8,250" },
];

export default function TreatmentProfitabilityPage() {
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
            Treatment Profitability Analyzer
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            See exactly what you&apos;re making on every treatment — based on direct costs only.
            Use it to identify your most profitable services, spot pricing gaps, and decide where
            to focus your marketing.
          </p>

          <div className="mt-8">
            <a
              href="/downloads/ae-treatment-profitability.xlsx"
              download
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{
                background: "rgba(162,140,117,0.14)",
                border: "1px solid rgba(162,140,117,0.3)",
                color: "#a28c75",
              }}
            >
              <Download size={15} />
              <span className="text-sm font-medium tracking-wide">Download Treatment Profitability Template</span>
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

        {/* ── Why Direct Costs Only ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              The Approach
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="flex items-start gap-4 mb-5">
              <AlertCircle size={20} style={{ color: "#a28c75", flexShrink: 0, marginTop: 2 }} />
              <p className="font-display text-xl font-light leading-snug" style={{ color: "#fffdf6" }}>
                The goal is to know whether a treatment is fundamentally profitable
                based on its direct costs — not the full overhead picture.
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
              While rent, software, and admin costs matter at the business level,
              allocating them per treatment makes the exercise overly complicated
              and the numbers vary significantly patient to patient. This calculator
              focuses on what you can actually control and compare: the direct cost
              to deliver each treatment.
            </p>
          </div>
        </section>

        {/* ── The Formula ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              The Formula
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Formula card */}
            <div
              className="rounded-2xl border p-8"
              style={{
                background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.2)",
              }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "rgba(162,140,117,0.55)" }}>
                Profitability Formula
              </p>
              <div className="space-y-2.5">
                {formula.map((line, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="font-display text-lg leading-tight" style={{ color: line.color }}>
                      {line.label}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="mt-6 pt-5 border-t"
                style={{ borderColor: "rgba(162,140,117,0.15)" }}
              >
                <p className="text-xs" style={{ color: "rgba(255,253,246,0.35)" }}>
                  Margin % = Net Profit ÷ Treatment Price
                </p>
              </div>
            </div>

            {/* Morpheus8 example */}
            <div
              className="rounded-2xl border p-8"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.13)",
              }}
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Example — Morpheus8 Face
                </p>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.25)",
                    color: "rgba(34,197,94,0.9)",
                  }}
                >
                  72% Margin
                </span>
              </div>

              <div className="mb-5">
                <p className="text-xs tracking-wide uppercase mb-1" style={{ color: "rgba(255,253,246,0.35)" }}>
                  Treatment Price
                </p>
                <p className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>$1,000</p>
              </div>

              <div className="space-y-2 mb-5">
                {morpheus8.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                    style={{ color: "rgba(255,253,246,0.55)" }}
                  >
                    <span className="text-sm">{item.label}</span>
                    <span className="text-sm font-medium" style={{ color: "rgba(255,253,246,0.7)" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
                <div
                  className="flex items-center justify-between pt-2 border-t"
                  style={{ borderColor: "rgba(162,140,117,0.2)" }}
                >
                  <span className="text-sm font-medium" style={{ color: "rgba(255,253,246,0.7)" }}>
                    Total Direct Cost
                  </span>
                  <span className="text-sm font-medium" style={{ color: "rgba(255,253,246,0.9)" }}>
                    $280
                  </span>
                </div>
              </div>

              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(162,140,117,0.06)",
                  border: "1px solid rgba(162,140,117,0.14)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm" style={{ color: "rgba(255,253,246,0.6)" }}>
                    Net Profit
                  </span>
                  <span className="font-display text-xl font-light" style={{ color: "#a28c75" }}>
                    $720
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: "rgba(255,253,246,0.6)" }}>
                    Profit Margin
                  </span>
                  <span
                    className="text-lg font-medium"
                    style={{ color: "rgba(34,197,94,0.9)" }}
                  >
                    72%
                  </span>
                </div>
                <p className="text-xs mt-2" style={{ color: "rgba(255,253,246,0.3)" }}>
                  $1,000 − $280 = $720 &nbsp;·&nbsp; $720 ÷ $1,000 = 72%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What to Gather ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              What to Gather First
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            For each treatment on your menu, collect five data points. The more accurate
            your inputs, the more actionable the output.
          </p>

          <div className="space-y-4">
            {inputCards.map((card) => (
              <div
                key={card.step}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(162,140,117,0.13)" }}
              >
                <div
                  className="flex items-center gap-4 px-6 py-4 border-b"
                  style={{
                    background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                    borderColor: "rgba(162,140,117,0.14)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}
                  >
                    <card.icon size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs tracking-[0.3em]" style={{ color: "rgba(162,140,117,0.5)" }}>
                      {card.step}
                    </span>
                    <h3 className="font-display text-base font-light" style={{ color: "#fffdf6" }}>
                      {card.label}
                    </h3>
                  </div>
                </div>
                <div
                  className="px-6 py-5"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.55)" }}>
                        {card.description}
                      </p>
                      {card.note && (
                        <div
                          className="rounded-lg p-3"
                          style={{
                            background: "rgba(162,140,117,0.06)",
                            border: "1px solid rgba(162,140,117,0.12)",
                            borderLeft: "3px solid rgba(162,140,117,0.3)",
                          }}
                        >
                          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                            {card.note}
                          </p>
                        </div>
                      )}
                    </div>
                    <div>
                      {card.formula ? (
                        <div className="space-y-3">
                          <div
                            className="text-xs font-mono px-3 py-2 rounded-lg"
                            style={{
                              background: "rgba(162,140,117,0.07)",
                              border: "1px solid rgba(162,140,117,0.14)",
                              color: "rgba(162,140,117,0.85)",
                            }}
                          >
                            {card.formula.label}
                          </div>
                          <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>
                            Example: {card.formula.example}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-xs tracking-[0.2em] uppercase mb-2.5" style={{ color: "rgba(162,140,117,0.5)" }}>
                            Examples
                          </p>
                          <ul className="space-y-1.5">
                            {card.examples.map((ex) => (
                              <li key={ex} className="flex items-start gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                                <span style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }}>·</span>
                                <span className="text-sm">{ex}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Rating System ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Profitability Rating System
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "Excellent",
                range: "70%+ Margin",
                color: "rgba(34,197,94,0.9)",
                bg: "rgba(34,197,94,0.06)",
                border: "rgba(34,197,94,0.2)",
                dot: "rgba(34,197,94,0.8)",
                action: "Prioritize marketing and volume growth for this treatment. This is your profit engine — protect its margin.",
              },
              {
                label: "Healthy",
                range: "50–69% Margin",
                color: "rgba(234,179,8,0.9)",
                bg: "rgba(234,179,8,0.06)",
                border: "rgba(234,179,8,0.2)",
                dot: "rgba(234,179,8,0.8)",
                action: "Monitor costs and consider a modest price review. Healthy treatments just need consistent execution.",
              },
              {
                label: "Needs Review",
                range: "Below 50% Margin",
                color: "rgba(239,68,68,0.9)",
                bg: "rgba(239,68,68,0.06)",
                border: "rgba(239,68,68,0.2)",
                dot: "rgba(239,68,68,0.8)",
                action: "Evaluate your pricing, product costs, or whether the treatment belongs on your current menu.",
              },
            ].map((r) => (
              <div
                key={r.label}
                className="rounded-xl border p-6"
                style={{ background: r.bg, borderColor: r.border }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: r.dot }}
                  />
                  <span className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                    {r.label}
                  </span>
                </div>
                <p
                  className="text-xl font-medium mb-4"
                  style={{ color: r.color }}
                >
                  {r.range}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  {r.action}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Monthly Contribution Tab ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Monthly Profit Contribution
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
                This is where the &ldquo;aha moment&rdquo; happens.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Margin % tells you how profitable a treatment is per service.
                But margin × volume tells you which treatments are actually carrying your practice.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                A high-volume, mid-margin treatment can outperform a high-margin, low-volume one by
                thousands of dollars per month. The monthly contribution tab makes that visible.
              </p>
            </div>

            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "rgba(162,140,117,0.14)" }}
            >
              <div
                className="grid text-xs font-medium tracking-wide uppercase px-4 py-3"
                style={{
                  gridTemplateColumns: "1fr 100px 80px 1fr",
                  background: "rgba(47,4,16,0.8)",
                  color: "rgba(162,140,117,0.7)",
                  borderBottom: "1px solid rgba(162,140,117,0.12)",
                }}
              >
                <span>Treatment</span>
                <span className="text-right">Profit/Tx</span>
                <span className="text-right">Volume</span>
                <span className="text-right">Monthly $</span>
              </div>
              {monthlyTable.map((row, i) => (
                <div
                  key={row.treatment}
                  className="grid px-4 py-2.5 text-sm"
                  style={{
                    gridTemplateColumns: "1fr 100px 80px 1fr",
                    background: i % 2 === 1 ? "rgba(255,253,246,0.02)" : "transparent",
                    borderBottom: i < monthlyTable.length - 1 ? "1px solid rgba(162,140,117,0.06)" : undefined,
                  }}
                >
                  <span style={{ color: "rgba(255,253,246,0.65)" }}>{row.treatment}</span>
                  <span className="text-right" style={{ color: "rgba(162,140,117,0.8)" }}>{row.profit}</span>
                  <span className="text-right" style={{ color: "rgba(255,253,246,0.5)" }}>{row.volume}</span>
                  <span className="text-right font-medium" style={{ color: "#fffdf6" }}>{row.contribution}</span>
                </div>
              ))}
              <div
                className="grid px-4 py-3 text-sm font-medium"
                style={{
                  gridTemplateColumns: "1fr 100px 80px 1fr",
                  background: "rgba(47,4,16,0.8)",
                  borderTop: "1px solid rgba(162,140,117,0.15)",
                  color: "#a28c75",
                }}
              >
                <span>Total</span>
                <span />
                <span />
                <span className="text-right">$55,450</span>
              </div>
            </div>
          </div>

          {/* What it helps identify */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Highest profit treatments", detail: "Where to invest in marketing and upsell training." },
              { label: "Highest volume treatments", detail: "Treatments doing volume deserve consistency, not just margin analysis." },
              { label: "Marketing opportunities", detail: "Treatments with great margins but low volume — what would happen with 5 more bookings?" },
              { label: "Pricing decisions", detail: "When a treatment's margin is low, the Monthly Contribution tab helps you see the total impact of a price increase." },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-xl border p-4"
                style={{
                  background: "rgba(162,140,117,0.04)",
                  borderColor: "rgba(162,140,117,0.1)",
                }}
              >
                <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.6)" }} />
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "rgba(255,253,246,0.75)" }}>
                    {item.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Download CTA ── */}
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
                <BarChart2 size={22} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>
                  Treatment Profitability Template
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Three-tab Excel workbook. Pre-loaded with 15 common treatments and the Morpheus8
                  example. Formulas calculate profit and margin automatically — conditional color
                  coding included.
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1">
                  {[
                    "15 pre-loaded treatment rows + 5 blank rows",
                    "Auto-calculating profit and margin",
                    "Green/Yellow/Red conditional color coding",
                    "Monthly Profit Contribution tab",
                  ].map((feat) => (
                    <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                      <span style={{ color: "#a28c75" }}>·</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/downloads/ae-treatment-profitability.xlsx"
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
