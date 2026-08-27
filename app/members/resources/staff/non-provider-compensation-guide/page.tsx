import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Lightbulb,
  ShoppingBag,
  Gift,
  ClipboardCheck,
  Sparkles,
  Briefcase,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Provider Compensation & Bonus Structures | Aesthetic Executive",
};

interface BonusMechanism {
  name: string;
  how: string;
  range: string;
}

interface RoleBlock {
  icon: typeof Users;
  role: string;
  base: string;
  intro: string;
  bonuses: BonusMechanism[];
}

const roles: RoleBlock[] = [
  {
    icon: Users,
    role: "Front Desk / Patient Care Coordinator",
    base: "Hourly, non-exempt — this role rarely bills for its own time, so pay is time-based, not production-based.",
    intro:
      "The front desk touches every patient, every visit — which makes it the highest-leverage support role for a few specific, measurable behaviors worth rewarding directly.",
    bonuses: [
      {
        name: "Retail Attach Rate Bonus",
        how: "A flat bonus once the visits they check out cross a target attach rate for the month (e.g., 30%+ of visits include a retail item), or a small flat amount per retail item sold.",
        range: "$5–10 per item, or $150–300/mo at target",
      },
      {
        name: "Membership / Rewards Enrollment Bonus",
        how: "A flat amount per new membership or manufacturer rewards program (Allē, Aspire, etc.) they personally enroll.",
        range: "$10–25 per enrollment",
      },
      {
        name: "Rebooking Rate Bonus",
        how: "A monthly bonus tied to the percentage of patients rebooked before they leave the building, rather than left to call back later.",
        range: "$100–200/mo at target rate",
      },
      {
        name: "Review Generation Bonus",
        how: "A small bonus per verified 5-star review they're credited with generating that month.",
        range: "$5–10 per review",
      },
    ],
  },
  {
    icon: Sparkles,
    role: "Aestheticians",
    base: "Hourly or salary, often with a service commission layered on top — a middle ground between front desk and injector pay.",
    intro:
      "How much of an aesthetician's day is billable chair time determines which model fits better: the same commission logic from the injector guide if they're production-heavy, or a flat bonus model closer to front desk if their day is mixed with retail, prep, and support work.",
    bonuses: [
      {
        name: "Service Commission",
        how: "A commission on services performed, generally lower than injector rates since ticket sizes are smaller. Follow the same all-in-comp and break-even logic from the Compensation & Commission Structure Guide if this role is mostly billable time.",
        range: "10–20% of service revenue",
      },
      {
        name: "Retail Attach Rate Bonus",
        how: "Same mechanic as front desk — aestheticians are typically the strongest retail sellers in the building, since they're recommending home-care product directly after treatment.",
        range: "$5–10 per item, or $150–300/mo at target",
      },
      {
        name: "Membership / Rewards Enrollment Bonus",
        how: "A flat amount per new membership or rewards enrollment they personally close.",
        range: "$10–25 per enrollment",
      },
    ],
  },
  {
    icon: Briefcase,
    role: "Office / Practice Manager",
    base: "Salary, typically exempt — this role is judged on the health of the whole practice, not any single transaction.",
    intro:
      "A manager doesn't drive one number — they drive all of them. That calls for a scorecard bonus tied to overall practice performance, not a commission on any one activity.",
    bonuses: [
      {
        name: "KPI Scorecard Bonus",
        how: "Pick 4–6 practice-wide KPIs (revenue vs. target, staff turnover, patient satisfaction/reviews, budget adherence) and pay a bonus scaled to how many are hit each quarter — full bonus at all targets, partial credit for partial hits.",
        range: "5–15% of salary per quarter at full target",
      },
      {
        name: "Revenue Growth Bonus",
        how: "A smaller, simpler alternative or supplement to the full scorecard — a flat bonus once practice revenue clears a set year-over-year growth threshold.",
        range: "$500–2,000/quarter at target",
      },
    ],
  },
];

export default function NonProviderCompensationGuidePage() {
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
              <Users size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Team Pay
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Non-Provider Compensation &amp; Bonus Structures
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            Front desk, aestheticians, and office managers don&apos;t bill for their own chair time
            the way injectors do — so their bonus structures need to reward the specific behaviors
            that actually move revenue: retail attach, membership enrollment, and the KPIs that
            keep the practice healthy.
          </p>
        </div>
      </div>

      {/* Why it's different */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)", borderColor: "rgba(162,140,117,0.2)" }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <Lightbulb size={18} style={{ color: "#a28c75" }} />
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
                A different problem than provider pay
              </p>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
                They support revenue — they don&apos;t bill for it
              </h2>
              <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.6)" }}>
                The break-even multiple from the{" "}
                <Link href="/members/resources/staff/compensation-guide" className="underline hover:opacity-80" style={{ color: "#a28c75" }}>
                  Compensation &amp; Commission Structure Guide
                </Link>{" "}
                works for injectors because their production is a real dollar number you can measure
                against their pay. Front desk, aestheticians on non-billable duties, and managers
                don&apos;t have one clean number like that — so instead of a break-even threshold,
                the right move is a small, direct bonus tied to the exact behavior you want more of.
                Keep it simple enough to explain in one sentence, and keep the bonus smaller than the
                value the behavior creates, so it&apos;s self-funding by design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role-by-role structures */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14 pt-10">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Role by role
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Three roles, three different levers
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Starting ranges below are a place to calibrate from, not a rulebook — adjust to your market,
          your margins, and what these roles already earn on base pay.
        </p>

        <div className="space-y-8">
          {roles.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.role}
                className="rounded-2xl border p-7 md:p-8"
                style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.14)" }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                  >
                    <Icon size={18} style={{ color: "#a28c75" }} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-light mb-1.5" style={{ color: "#fffdf6" }}>
                      {r.role}
                    </h3>
                    <p className="text-xs italic mb-2" style={{ color: "rgba(162,140,117,0.7)" }}>
                      {r.base}
                    </p>
                    <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.55)" }}>
                      {r.intro}
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(162,140,117,0.2)" }}>
                        <th className="text-left py-2 pr-4 font-normal text-xs tracking-[0.1em] uppercase" style={{ color: "rgba(162,140,117,0.55)" }}>
                          Bonus mechanism
                        </th>
                        <th className="text-left py-2 pr-4 font-normal text-xs tracking-[0.1em] uppercase" style={{ color: "rgba(162,140,117,0.55)" }}>
                          How it works
                        </th>
                        <th className="text-right py-2 font-normal text-xs tracking-[0.1em] uppercase whitespace-nowrap" style={{ color: "rgba(162,140,117,0.55)" }}>
                          Starting range
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {r.bonuses.map((b) => (
                        <tr key={b.name} style={{ borderBottom: "1px solid rgba(162,140,117,0.08)" }}>
                          <td className="py-3 pr-4 align-top font-medium" style={{ color: "#fffdf6" }}>
                            {b.name}
                          </td>
                          <td className="py-3 pr-4 align-top leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                            {b.how}
                          </td>
                          <td className="py-3 align-top text-right whitespace-nowrap font-medium" style={{ color: "#a28c75" }}>
                            {b.range}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bonus mechanism deep-dives */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Making it work
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          What makes these bonuses actually land
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          The mechanism matters less than how clearly it&apos;s tracked and paid.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              icon: ShoppingBag,
              title: "Track attach rate at the source",
              body: "Retail attach only works as an incentive if it's visible in real time — pull it from your POS by staff member, not from memory at the end of the month.",
            },
            {
              icon: Gift,
              title: "Pay enrollment bonuses the same pay period",
              body: "The closer the bonus lands to the behavior, the stronger the incentive. A membership bonus paid two months later barely registers as connected to the sale.",
            },
            {
              icon: ClipboardCheck,
              title: "Keep the manager scorecard short",
              body: "Four to six KPIs is plenty. More than that and a manager can't actually hold all of them in mind day to day — the scorecard stops being a lever.",
            },
            {
              icon: Sparkles,
              title: "Revisit ranges once a year",
              body: "As your average ticket, membership price, or retail margin changes, the dollar amounts above should move with it — the ranges are a snapshot, not a permanent policy.",
            },
          ].map((tip) => {
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

      {/* Overtime / non-exempt note */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div
          className="rounded-lg border p-5 flex items-start gap-3"
          style={{ background: "rgba(162,140,117,0.05)", borderColor: "rgba(162,140,117,0.18)" }}
        >
          <AlertCircle size={16} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>
              A quick note on overtime and exempt status
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
              Front desk staff and aestheticians are usually non-exempt (hourly) employees — and
              non-discretionary bonuses generally have to be factored into their overtime rate for
              that pay period, which is an easy detail to miss. Manager exempt-status rules also vary
              by state. Check with your accountant or an employment attorney on how to structure and
              pay these bonuses correctly before rolling them out.
            </p>
          </div>
        </div>
      </div>

      {/* See also */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link
            href="/members/resources/staff/compensation-guide"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="p-7 flex items-center gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <Briefcase size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Compensation &amp; Commission Structure Guide</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>The break-even math and commission tiers for injectors and providers.</p>
              </div>
              <ExternalLink size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }} />
            </div>
          </Link>
          <Link
            href="/members/resources/finance/kpi-tracker"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="p-7 flex items-center gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <ClipboardCheck size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>KPI Tracker</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Track the KPIs a manager scorecard bonus would run on, tagged by team member.</p>
              </div>
              <ExternalLink size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
