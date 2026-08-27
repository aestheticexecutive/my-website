"use client";

import { useMemo, useState } from "react";
import { Calculator, AlertCircle } from "lucide-react";

type PayType = "salary" | "hourly";
type SalaryFreq = "weekly" | "biweekly" | "monthly";

const FREQ_MULTIPLIER: Record<SalaryFreq, number> = {
  weekly: 52,
  biweekly: 26,
  monthly: 12,
};

const FREQ_LABEL: Record<SalaryFreq, string> = {
  weekly: "Weekly",
  biweekly: "Biweekly",
  monthly: "Monthly",
};

const inputStyle: React.CSSProperties = {
  background: "rgba(12,0,4,0.8)",
  borderColor: "rgba(162,140,117,0.25)",
  color: "#fffdf6",
};

function parseNum(v: string): number {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

function fmt(n: number): string {
  if (!Number.isFinite(n)) return "$0";
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function calcTieredCommission(production: number, breakEven: number) {
  const t1Cap = breakEven * 1.25;
  const t2Cap = breakEven * 1.5;

  if (production <= breakEven || breakEven <= 0) {
    return { totalCommission: 0, breakdown: [] as { label: string; amount: number; pay: number; rate: number }[] };
  }

  let remaining = production - breakEven;
  let totalCommission = 0;
  const breakdown: { label: string; amount: number; pay: number; rate: number }[] = [];

  const band1 = Math.min(remaining, t1Cap - breakEven);
  if (band1 > 0) {
    const pay = band1 * 0.05;
    totalCommission += pay;
    breakdown.push({ label: "Tier 1 (5%)", amount: band1, pay, rate: 0.05 });
    remaining -= band1;
  }

  const band2 = Math.min(remaining, t2Cap - t1Cap);
  if (band2 > 0) {
    const pay = band2 * 0.07;
    totalCommission += pay;
    breakdown.push({ label: "Tier 2 (7%)", amount: band2, pay, rate: 0.07 });
    remaining -= band2;
  }

  if (remaining > 0) {
    const pay = remaining * 0.1;
    totalCommission += pay;
    breakdown.push({ label: "Tier 3 (10%)", amount: remaining, pay, rate: 0.1 });
  }

  return { totalCommission, breakdown };
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs tracking-[0.1em] uppercase mb-2 block" style={{ color: "rgba(162,140,117,0.6)" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function StatBox({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{
        background: accent ? "rgba(162,140,117,0.08)" : "rgba(162,140,117,0.03)",
        borderColor: accent ? "rgba(162,140,117,0.3)" : "rgba(162,140,117,0.14)",
      }}
    >
      <p className="text-xs tracking-[0.15em] uppercase mb-1.5" style={{ color: "rgba(162,140,117,0.6)" }}>
        {label}
      </p>
      <p className="font-display text-2xl font-light" style={{ color: accent ? "#a28c75" : "#fffdf6" }}>
        {value}
      </p>
    </div>
  );
}

export default function CompensationCalculator() {
  const [payType, setPayType] = useState<PayType>("salary");
  const [salaryAmount, setSalaryAmount] = useState("6250");
  const [salaryFreq, setSalaryFreq] = useState<SalaryFreq>("monthly");
  const [hourlyRate, setHourlyRate] = useState("48");
  const [hoursPerWeek, setHoursPerWeek] = useState("32");
  const [benefitsCost, setBenefitsCost] = useState("15000");
  const [multiplier, setMultiplier] = useState("3.5");
  const [actualProduction, setActualProduction] = useState("");

  const {
    annualBase,
    allIn,
    breakEvenAnnual,
    breakEvenMonthly,
    t1Cap,
    t2Cap,
  } = useMemo(() => {
    const base =
      payType === "hourly"
        ? parseNum(hourlyRate) * parseNum(hoursPerWeek) * 52
        : parseNum(salaryAmount) * FREQ_MULTIPLIER[salaryFreq];
    const allInAnnual = base + parseNum(benefitsCost);
    const mult = parseNum(multiplier) || 3.5;
    const beAnnual = allInAnnual * mult;
    return {
      annualBase: base,
      allIn: allInAnnual,
      breakEvenAnnual: beAnnual,
      breakEvenMonthly: beAnnual / 12,
      t1Cap: beAnnual * 1.25,
      t2Cap: beAnnual * 1.5,
    };
  }, [payType, salaryAmount, salaryFreq, hourlyRate, hoursPerWeek, benefitsCost, multiplier]);

  const production = parseNum(actualProduction);
  const { totalCommission, breakdown } = useMemo(
    () => calcTieredCommission(production, breakEvenAnnual),
    [production, breakEvenAnnual]
  );

  return (
    <div
      className="rounded-2xl border p-8 md:p-10"
      style={{ background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)", borderColor: "rgba(162,140,117,0.2)" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Calculator size={18} style={{ color: "#a28c75" }} />
        <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.6)" }}>
          Interactive Calculator
        </p>
      </div>
      <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>
        Calculate your break-even &amp; commission structure
      </h2>
      <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.6)" }}>
        Plug in a provider&apos;s real pay, and this works out their break-even production and a
        starting tiered commission structure — resets when you leave the page, nothing is saved.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
        <Field label="Pay type">
          <div className="inline-flex rounded-lg border overflow-hidden" style={{ borderColor: "rgba(162,140,117,0.25)" }}>
            {(["salary", "hourly"] as PayType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setPayType(t)}
                className="px-4 py-2 text-xs tracking-[0.1em] uppercase transition-colors duration-150"
                style={{
                  background: payType === t ? "rgba(162,140,117,0.2)" : "transparent",
                  color: payType === t ? "#a28c75" : "rgba(255,253,246,0.5)",
                }}
              >
                {t === "salary" ? "Salary" : "Hourly"}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Break-even multiplier">
          <div className="flex items-center gap-2">
            <input
              type="number"
              step="0.1"
              value={multiplier}
              onChange={(e) => setMultiplier(e.target.value)}
              className="w-24 text-sm px-3 py-2 rounded-lg border outline-none"
              style={inputStyle}
            />
            <span className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>
              × all-in comp (default 3.5)
            </span>
          </div>
        </Field>

        {payType === "salary" ? (
          <>
            <Field label="Pay amount ($)">
              <input
                type="number"
                value={salaryAmount}
                onChange={(e) => setSalaryAmount(e.target.value)}
                className="w-full text-sm px-3 py-2 rounded-lg border outline-none"
                style={inputStyle}
              />
            </Field>
            <Field label="Pay frequency">
              <select
                value={salaryFreq}
                onChange={(e) => setSalaryFreq(e.target.value as SalaryFreq)}
                className="w-full text-sm px-3 py-2 rounded-lg border outline-none appearance-none cursor-pointer"
                style={inputStyle}
              >
                {(Object.keys(FREQ_LABEL) as SalaryFreq[]).map((f) => (
                  <option key={f} value={f}>
                    {FREQ_LABEL[f]}
                  </option>
                ))}
              </select>
            </Field>
          </>
        ) : (
          <>
            <Field label="Hourly rate ($)">
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-full text-sm px-3 py-2 rounded-lg border outline-none"
                style={inputStyle}
              />
            </Field>
            <Field label="Average hours / week">
              <input
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
                className="w-full text-sm px-3 py-2 rounded-lg border outline-none"
                style={inputStyle}
              />
            </Field>
          </>
        )}

        <Field label="Annual cost of benefits (health, retirement match, CE, bonuses, etc.)">
          <input
            type="number"
            value={benefitsCost}
            onChange={(e) => setBenefitsCost(e.target.value)}
            className="w-full text-sm px-3 py-2 rounded-lg border outline-none"
            style={inputStyle}
          />
        </Field>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 mb-8">
        <StatBox label="All-in annual compensation" value={fmt(allIn)} />
        <StatBox label="Break-even production — annual" value={fmt(breakEvenAnnual)} accent />
        <StatBox label="Break-even production — monthly" value={fmt(breakEvenMonthly)} accent />
      </div>
      <p className="text-xs leading-relaxed mb-8" style={{ color: "rgba(255,253,246,0.4)" }}>
        Annualized base pay: {fmt(annualBase)}
        {payType === "hourly" ? ` (${hourlyRate || 0}/hr × ${hoursPerWeek || 0} hrs × 52 weeks)` : ""}
        {" + "}
        {fmt(parseNum(benefitsCost))} in benefits = {fmt(allIn)} all-in, × {parseNum(multiplier) || 3.5} = break-even.
      </p>

      {/* Suggested tiered commission structure */}
      <div className="rounded-xl border p-6 md:p-7 mb-6" style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}>
        <h3 className="font-display text-lg font-light mb-2" style={{ color: "#fffdf6" }}>
          Suggested tiered commission structure
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
          No commission on production up to the break-even line — that portion just covers the
          role. Above it, the rate climbs the further a provider goes, topping out at 10%.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(162,140,117,0.2)" }}>
                <th className="text-left py-2 pr-4 font-normal text-xs tracking-[0.1em] uppercase" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Annual production range
                </th>
                <th className="text-right py-2 font-normal text-xs tracking-[0.1em] uppercase" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Commission rate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid rgba(162,140,117,0.08)" }}>
                <td className="py-2.5 pr-4" style={{ color: "rgba(255,253,246,0.65)" }}>
                  Up to {fmt(breakEvenAnnual)}
                </td>
                <td className="py-2.5 text-right" style={{ color: "rgba(255,253,246,0.5)" }}>
                  0% (break-even)
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(162,140,117,0.08)" }}>
                <td className="py-2.5 pr-4" style={{ color: "rgba(255,253,246,0.65)" }}>
                  {fmt(breakEvenAnnual)} – {fmt(t1Cap)}
                </td>
                <td className="py-2.5 text-right font-medium" style={{ color: "#a28c75" }}>
                  5%
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(162,140,117,0.08)" }}>
                <td className="py-2.5 pr-4" style={{ color: "rgba(255,253,246,0.65)" }}>
                  {fmt(t1Cap)} – {fmt(t2Cap)}
                </td>
                <td className="py-2.5 text-right font-medium" style={{ color: "#a28c75" }}>
                  7%
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4" style={{ color: "rgba(255,253,246,0.65)" }}>
                  Above {fmt(t2Cap)}
                </td>
                <td className="py-2.5 text-right font-medium" style={{ color: "#a28c75" }}>
                  10%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* State law disclaimer */}
      <div
        className="rounded-lg border p-4 flex items-start gap-3 mb-8"
        style={{ background: "rgba(162,140,117,0.05)", borderColor: "rgba(162,140,117,0.18)" }}
      >
        <AlertCircle size={15} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
          Every state regulates how a medical practice can compensate providers differently —
          including fee-splitting rules that can restrict paying a licensed provider a percentage
          of service revenue. Check your state medical board&apos;s rules, or talk to a healthcare
          attorney, before finalizing any commission structure.
        </p>
      </div>

      {/* Test it with a real production number */}
      <div className="rounded-xl border p-6 md:p-7" style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}>
        <h3 className="font-display text-lg font-light mb-4" style={{ color: "#fffdf6" }}>
          See what a provider would earn
        </h3>
        <Field label="Actual or projected annual production ($)">
          <input
            type="number"
            placeholder="e.g. 420000"
            value={actualProduction}
            onChange={(e) => setActualProduction(e.target.value)}
            className="w-full max-w-xs text-sm px-3 py-2 rounded-lg border outline-none"
            style={inputStyle}
          />
        </Field>

        {production > 0 && (
          <div className="mt-6">
            {production <= breakEvenAnnual ? (
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                At {fmt(production)} in production, this provider hasn&apos;t reached their{" "}
                {fmt(breakEvenAnnual)} break-even line yet — no commission due, and the role is
                running at a {fmt(breakEvenAnnual - production)} shortfall for the year.
              </p>
            ) : (
              <>
                <div className="space-y-1.5 mb-4">
                  {breakdown.map((b) => (
                    <div key={b.label} className="flex items-center justify-between text-sm">
                      <span style={{ color: "rgba(255,253,246,0.55)" }}>
                        {b.label} on {fmt(b.amount)}
                      </span>
                      <span style={{ color: "#a28c75" }}>{fmt(b.pay)}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <StatBox label="Total commission earned" value={fmt(totalCommission)} accent />
                  <StatBox label="Total compensation (base + benefits + commission)" value={fmt(allIn + totalCommission)} />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
