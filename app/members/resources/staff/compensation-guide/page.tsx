import Link from "next/link";
import {
  ArrowLeft,
  DollarSign,
  Calculator,
  AlertTriangle,
  Lock,
  TrendingUp,
  Layers,
  SlidersHorizontal,
  MessageCircle,
  BarChart3,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compensation & Commission Structure Guide | Aesthetic Executive",
};

const allInIncludes = [
  "Base salary or hourly pay",
  "Commission or bonus payouts",
  "Employer cost of benefits (health insurance, retirement match)",
  "Employer-side payroll taxes",
  "Continuing education & certifications",
  "Product/uniform allowances or other real perks",
];

const models = [
  {
    icon: Lock,
    name: "Flat / Salary",
    tagline: "Fixed pay, regardless of production",
    bestFor: "New injectors still building a book, support-heavy roles, or practices that want predictable payroll.",
    pros: [
      "Predictable for the provider and for payroll",
      "No incentive to overtreat or oversell just to hit a number",
      "Simplest structure to run and explain",
    ],
    cons: [
      "No built-in incentive to grow production",
      "Top performers can start to feel underpaid relative to what they generate",
      "Doesn't scale automatically as the practice grows",
    ],
  },
  {
    icon: TrendingUp,
    name: "Commission",
    tagline: "Pay tied directly to production or collections",
    bestFor: "Established injectors with a full, growing book, or roles where output varies a lot person to person.",
    pros: [
      "Pay scales directly with what they produce",
      "Self-selecting motivation — the schedule fills itself",
      "Naturally aligns provider and practice growth",
    ],
    cons: [
      "Income volatility for the provider in slow months",
      "Can incentivize pushing add-ons or over-scheduling",
      "Doesn't account for admin time, training, or no-revenue days",
    ],
  },
  {
    icon: Layers,
    name: "Hybrid (Base + Commission)",
    tagline: "A floor for security, upside for performance",
    bestFor: "Most established practices — the default once a provider is producing consistently.",
    pros: [
      "Income floor gives security; upside still rewards production",
      "Easiest structure to defend, since the base already covers break-even risk",
      "The industry-standard structure at scale",
    ],
    cons: [
      "More moving parts to administer",
      "Base has to be set deliberately against the break-even number, or you recreate the same problem",
      "Needs clean, consistent reporting every pay period",
    ],
  },
];

export default function CompensationGuidePage() {
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
            href="/members/resources/staff"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Staff Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <DollarSign size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Provider Pay
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Compensation &amp; Commission Structure
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            How to choose between flat, commission, and hybrid pay for your injectors and providers —
            and the one number every practice owner needs on hand before that conversation: what a
            provider actually has to produce for the practice to break even on their role.
          </p>
        </div>
      </div>

      {/* Break-even math */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)", borderColor: "rgba(162,140,117,0.2)" }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
            The number to know before any pay conversation
          </p>
          <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
            The break-even multiple
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl mb-8" style={{ color: "rgba(255,253,246,0.6)" }}>
            It&apos;s tempting to look at a provider&apos;s production, subtract their pay, and call the
            difference &quot;profit.&quot; It isn&apos;t. Compensation is only one line in the true cost of
            that chair — product and disposables, facility, front desk and support staff, admin, the
            marketing that keeps their schedule full, insurance, everything else the business absorbs
            still has to come out of what they produce first. Add it all up, and the reliable rule of
            thumb across the industry is that a provider needs to generate roughly{" "}
            <strong style={{ color: "#fffdf6" }}>3.5 times</strong> their total compensation just for the
            practice to break even on that role — not profit, break even. The exact multiple moves with
            your own rent, staffing, and product costs, but 3.5x is a solid starting benchmark for a
            typical med spa.
          </p>

          {/* Formula box */}
          <div
            className="rounded-xl border p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
            style={{ background: "rgba(162,140,117,0.06)", borderColor: "rgba(162,140,117,0.2)" }}
          >
            <div className="flex items-center gap-3 flex-shrink-0">
              <Calculator size={20} style={{ color: "#a28c75" }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.6)" }}>
                The formula
              </span>
            </div>
            <div
              className="flex-1 flex flex-wrap items-center gap-3 font-display text-xl md:text-2xl font-light"
              style={{ color: "#fffdf6" }}
            >
              <span>All-in annual compensation</span>
              <span style={{ color: "#a28c75" }}>×</span>
              <span style={{ color: "#a28c75" }}>3.5</span>
              <span style={{ color: "rgba(255,253,246,0.4)" }}>=</span>
              <span>Break-even production required</span>
            </div>
          </div>

          {/* Worked example */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border p-6" style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.14)" }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.55)" }}>
                Example
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>
                A provider making <strong style={{ color: "#fffdf6" }}>$100,000</strong> a year — base,
                commission, benefits, education, and bonuses combined — needs to generate{" "}
                <strong style={{ color: "#fffdf6" }}>$350,000</strong> in services annually just for their
                role to break even. Below that line, the practice is subsidizing the position. Above it,
                real profit starts.
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.14)" }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.55)" }}>
                What counts as &quot;all-in&quot;
              </p>
              <ul className="space-y-1">
                {allInIncludes.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: "rgba(255,253,246,0.6)" }}>
                    <span style={{ color: "#a28c75", flexShrink: 0 }}>·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why it surprises people */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14 pt-10">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Reframing the raise conversation
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Why this number is humbling — for everyone
        </h2>
        <p className="text-sm mb-8 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          This is the math that turns a defensive pay conversation into an honest one.
        </p>

        <div
          className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
          >
            <AlertTriangle size={22} style={{ color: "#a28c75" }} />
          </div>
          <div className="flex-1">
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.65)" }}>
              A provider who sees roughly 70% gross margin on their own service line often assumes their
              pay is the other 30%, and the rest is pure profit sitting with the owner. It isn&apos;t.
              That 70% still has to cover product cost, the rest of the team, rent, marketing, admin, and
              everything else that keeps the schedule full — before a single dollar of real owner profit
              exists.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>
              Run the math out loud, with real numbers:{" "}
              <em>
                &quot;You make $100,000 a year here. At 3.5x, this role needs to produce $350,000 for us
                to break even on you. Right now you&apos;re producing $200,000 — we&apos;re $150,000
                underwater on your role, before the practice has made a dollar.&quot;
              </em>{" "}
              That turns &quot;I deserve a raise&quot; into &quot;here&apos;s what has to change
              first&quot; — a conversation about production, not tenure or feeling.
            </p>
          </div>
        </div>
      </div>

      {/* Flat vs Commission vs Hybrid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Choosing a structure
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Flat, commission, or hybrid
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Every model has a place. The right one depends on where a provider is in building their book,
          and how much predictability your practice needs on the other side.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {models.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.name}
                className="rounded-xl border p-7 flex flex-col gap-5"
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
                    <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>
                      {m.name}
                    </h3>
                    <p className="text-xs" style={{ color: "rgba(162,140,117,0.6)" }}>{m.tagline}</p>
                  </div>
                </div>

                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  <span style={{ color: "rgba(162,140,117,0.7)" }}>Best for: </span>
                  {m.bestFor}
                </p>

                <div>
                  <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>
                    Pros
                  </p>
                  <ul className="space-y-1.5">
                    {m.pros.map((p) => (
                      <li key={p} className="text-sm leading-snug flex items-start gap-2" style={{ color: "rgba(255,253,246,0.6)" }}>
                        <span style={{ color: "#a28c75", flexShrink: 0 }}>+</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>
                    Cons
                  </p>
                  <ul className="space-y-1.5">
                    {m.cons.map((c) => (
                      <li key={c} className="text-sm leading-snug flex items-start gap-2" style={{ color: "rgba(255,253,246,0.5)" }}>
                        <span style={{ color: "rgba(255,253,246,0.35)", flexShrink: 0 }}>–</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Setting the threshold */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div
          className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
          >
            <SlidersHorizontal size={22} style={{ color: "#a28c75" }} />
          </div>
          <div className="flex-1">
            <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
              For hybrid structures
            </p>
            <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
              Set the commission threshold at the break-even line
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
              The cleanest way to design a hybrid plan is to let the base salary cover the provider up to
              their own break-even point, and let commission start only on production above it. A
              provider earning $100,000 in base and benefits needs roughly $29,000 a month in production
              just to clear their own break-even line ($350,000 ÷ 12) — commission kicks in only on what
              they produce beyond that. It keeps the incentive real without ever paying commission on
              revenue that hasn&apos;t covered the role&apos;s true cost yet, and it&apos;s a structure you
              can explain to a provider in one sentence.
            </p>
          </div>
        </div>
      </div>

      {/* Talking to your team */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Transparency
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Share the number — before you need it
        </h2>
        <p className="text-sm mb-8 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Don&apos;t save the break-even math for a tense raise conversation. Walk your providers through
          it when you set their pay structure in the first place, so it&apos;s a shared frame of reference
          instead of a surprise.
        </p>

        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)", borderColor: "rgba(162,140,117,0.2)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle size={18} style={{ color: "#a28c75" }} />
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.6)" }}>
              Try saying it plainly
            </p>
          </div>
          <p className="text-base md:text-lg leading-relaxed font-display font-light italic" style={{ color: "#fffdf6" }}>
            &quot;You make $100,000 a year here — base, commission, benefits, education, and bonuses, all
            combined. At 3.5 times comp, this role needs to produce $350,000 a year for us to break even
            on you. Last year you produced $200,000, which means we&apos;re $150,000 underwater on your
            role before the practice has made a dollar. Let&apos;s talk about what closing that gap looks
            like — and then let&apos;s talk about your raise.&quot;
          </p>
          <p className="text-sm leading-relaxed mt-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            The goal isn&apos;t to use the number as a weapon — it&apos;s to make the business real to the
            people running it day to day. A provider who understands what their role actually costs
            becomes a partner in growing production, instead of an adversary fighting over profit that,
            most months, doesn&apos;t exist yet.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Link
          href="/members/resources/finance/kpi-tracker"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <BarChart3 size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Track it monthly
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Track production by provider in the KPI Tracker
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                Tag production and revenue metrics by team member so you always know exactly where each
                provider sits against their own break-even line — before a pay conversation ever comes up.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open KPI Tracker
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
