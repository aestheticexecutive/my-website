"use client";

import React, { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { useServerSyncedState } from "@/lib/useServerSyncedState";
import {
  ArrowLeft,
  Building2,
  Save,
  Check,
  Copy,
  Trash2,
  Plus,
  X,
  Settings2,
  Users,
  TrendingUp,
  LineChart as LineChartIcon,
  AlertCircle,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type Tab = "setup" | "staffing" | "revenue" | "results";

interface StaffPosition {
  id: string;
  role: string;
  monthlyCost: string;
  startMonth: string;
}

interface Scenario {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;

  timelineMonths: string;

  // One-time startup costs
  buildout: string;
  equipment: string;
  furnitureFixtures: string;
  initialInventory: string;
  licensingPermits: string;
  workingCapitalReserve: string;
  otherStartupCosts: string;

  // Financing
  useFinancing: boolean;
  loanAmount: string;
  interestRate: string;
  loanTermYears: string;
  cashInvested: string;

  // Fixed monthly overhead once open
  rent: string;
  utilities: string;
  insurance: string;
  softwareSubscriptions: string;
  ongoingMarketing: string;
  otherFixedMonthly: string;

  // Variable cost
  cogsPercent: string;

  // Staffing ramp
  staff: StaffPosition[];

  // Revenue ramp
  month1Revenue: string;
  maturityRevenue: string;
  monthsToMaturity: string;

  notes: string;
}

interface StoreData {
  scenarios: Scenario[];
}

interface MonthRow {
  month: number;
  revenue: number;
  cogs: number;
  payroll: number;
  fixedOverhead: number;
  loanPayment: number;
  totalExpenses: number;
  netCashFlow: number;
  cumulativeCashFlow: number;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function uid(): string {
  return Math.random().toString(36).slice(2, 11);
}

function parseNum(v: string): number {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

function formatMoney(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatDateShort(iso: string): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function defaultScenario(name: string): Scenario {
  const now = new Date().toISOString();
  return {
    id: uid(),
    name,
    createdAt: now,
    updatedAt: now,
    timelineMonths: "24",
    buildout: "",
    equipment: "",
    furnitureFixtures: "",
    initialInventory: "",
    licensingPermits: "",
    workingCapitalReserve: "",
    otherStartupCosts: "",
    useFinancing: false,
    loanAmount: "",
    interestRate: "",
    loanTermYears: "",
    cashInvested: "",
    rent: "",
    utilities: "",
    insurance: "",
    softwareSubscriptions: "",
    ongoingMarketing: "",
    otherFixedMonthly: "",
    cogsPercent: "",
    staff: [],
    month1Revenue: "",
    maturityRevenue: "",
    monthsToMaturity: "12",
    notes: "",
  };
}

function defaultData(): StoreData {
  return { scenarios: [] };
}

// ── Migration ────────────────────────────────────────────────────────────────

function migrateExpansionFeasibilityData(raw: unknown): StoreData {
  const parsed = (raw ?? {}) as Record<string, unknown>;
  if (Array.isArray(parsed.scenarios)) {
    const scenarios: Scenario[] = (parsed.scenarios as (Partial<Scenario> & Record<string, unknown>)[]).map((s) => ({
      ...defaultScenario(""),
      ...s,
      staff: Array.isArray(s.staff) ? (s.staff as StaffPosition[]) : [],
    }));
    return { scenarios };
  }
  return defaultData();
}

// ── Financial model ──────────────────────────────────────────────────────────

function totalStartupCost(s: Scenario): number {
  return (
    parseNum(s.buildout) +
    parseNum(s.equipment) +
    parseNum(s.furnitureFixtures) +
    parseNum(s.initialInventory) +
    parseNum(s.licensingPermits) +
    parseNum(s.workingCapitalReserve) +
    parseNum(s.otherStartupCosts)
  );
}

function totalFixedMonthly(s: Scenario): number {
  return (
    parseNum(s.rent) +
    parseNum(s.utilities) +
    parseNum(s.insurance) +
    parseNum(s.softwareSubscriptions) +
    parseNum(s.ongoingMarketing) +
    parseNum(s.otherFixedMonthly)
  );
}

function monthlyLoanPayment(s: Scenario): number {
  if (!s.useFinancing) return 0;
  const principal = parseNum(s.loanAmount);
  const annualRate = parseNum(s.interestRate);
  const years = parseNum(s.loanTermYears);
  const n = Math.round(years * 12);
  if (principal <= 0 || n <= 0) return 0;
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / n;
  const pow = Math.pow(1 + r, n);
  return (principal * r * pow) / (pow - 1);
}

function initialCashOutlay(s: Scenario): number {
  return s.useFinancing ? parseNum(s.cashInvested) : totalStartupCost(s);
}

function revenueForMonth(month: number, s: Scenario): number {
  const m1 = parseNum(s.month1Revenue);
  const maturity = parseNum(s.maturityRevenue);
  const rampMonths = Math.max(1, parseNum(s.monthsToMaturity) || 1);
  if (rampMonths <= 1 || month >= rampMonths) return maturity;
  const t = (month - 1) / (rampMonths - 1);
  return m1 + (maturity - m1) * t;
}

function payrollForMonth(month: number, s: Scenario): number {
  return s.staff.reduce((sum, p) => {
    const start = Math.max(1, parseNum(p.startMonth) || 1);
    return month >= start ? sum + parseNum(p.monthlyCost) : sum;
  }, 0);
}

function buildTimeline(s: Scenario): MonthRow[] {
  const n = Math.max(1, Math.round(parseNum(s.timelineMonths)) || 24);
  const fixed = totalFixedMonthly(s);
  const loanPmt = monthlyLoanPayment(s);
  const cogsPct = parseNum(s.cogsPercent) / 100;
  const rows: MonthRow[] = [];
  let cumulative = -initialCashOutlay(s);
  for (let m = 1; m <= n; m++) {
    const revenue = revenueForMonth(m, s);
    const cogs = revenue * cogsPct;
    const payroll = payrollForMonth(m, s);
    const totalExpenses = cogs + payroll + fixed + loanPmt;
    const netCashFlow = revenue - totalExpenses;
    cumulative += netCashFlow;
    rows.push({
      month: m,
      revenue,
      cogs,
      payroll,
      fixedOverhead: fixed,
      loanPayment: loanPmt,
      totalExpenses,
      netCashFlow,
      cumulativeCashFlow: cumulative,
    });
  }
  return rows;
}

function findBreakEvenMonth(rows: MonthRow[]): number | null {
  const row = rows.find((r) => r.netCashFlow > 0);
  return row ? row.month : null;
}

function findPayoffMonth(rows: MonthRow[]): number | null {
  const row = rows.find((r) => r.cumulativeCashFlow >= 0);
  return row ? row.month : null;
}

function peakCapitalRequired(rows: MonthRow[], initialOutlay: number): number {
  const values = [-initialOutlay, ...rows.map((r) => r.cumulativeCashFlow)];
  const minVal = Math.min(...values);
  return minVal < 0 ? -minVal : 0;
}

function scenarioSummary(s: Scenario): string {
  const rows = buildTimeline(s);
  const be = findBreakEvenMonth(rows);
  const payoff = findPayoffMonth(rows);
  if (!be && totalStartupCost(s) === 0 && parseNum(s.maturityRevenue) === 0) {
    return "Add your numbers to see a break-even timeline";
  }
  const parts: string[] = [];
  parts.push(be ? `Break-even: Month ${be}` : "Doesn't break even in this timeline");
  parts.push(payoff ? `Full payback: Month ${payoff}` : "Not paid back in this timeline");
  return parts.join(" · ");
}

// ── Shared UI bits ───────────────────────────────────────────────────────────

const inputStyle = { background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" };

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-5">
      <h3 className="font-display text-lg font-light mb-1" style={{ color: "#fffdf6" }}>
        {title}
      </h3>
      {sub && (
        <p className="text-xs leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "rgba(255,253,246,0.35)" }}>
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className="w-full h-10 rounded-lg text-sm outline-none"
          style={{
            ...inputStyle,
            paddingLeft: prefix ? "1.6rem" : "0.75rem",
            paddingRight: suffix ? "2rem" : "0.75rem",
          }}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "rgba(255,253,246,0.35)" }}>
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function TextField({ label, value, onChange, placeholder }: { label?: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      {label && (
        <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-10 px-3 rounded-lg text-sm outline-none"
        style={inputStyle}
      />
    </div>
  );
}

function StatCard({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
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

const CHART_COLORS = ["#3987e5", "#d95926", "#199e70"];

interface ChartSeries {
  name: string;
  color: string;
  points: { t: number; value: number }[];
}

function TimelineChart({ series }: { series: ChartSeries[] }) {
  const allPoints = series.flatMap((s) => s.points);
  if (allPoints.length === 0) return null;
  const tMin = Math.min(...allPoints.map((p) => p.t));
  const tMax = Math.max(...allPoints.map((p) => p.t));
  const vMax = Math.max(...allPoints.map((p) => p.value), 0);
  const vMin = Math.min(...allPoints.map((p) => p.value), 0);
  const w = 640;
  const h = 260;
  const padT = 24;
  const padB = 30;
  const padL = 14;
  const padR = 14;
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;
  const range = vMax - vMin || 1;

  function xFor(t: number) {
    return tMax === tMin ? padL + chartW / 2 : padL + ((t - tMin) / (tMax - tMin)) * chartW;
  }
  function yFor(v: number) {
    return padT + chartH - ((v - vMin) / range) * chartH;
  }
  const zeroY = yFor(0);
  const showZeroLine = vMin < 0 && vMax > 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>{formatMoney(vMax)}</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label="Chart of financial values over time">
        {showZeroLine && (
          <line x1={padL} y1={zeroY} x2={w - padR} y2={zeroY} stroke="rgba(255,253,246,0.3)" strokeWidth={1} strokeDasharray="4 3" />
        )}
        {!showZeroLine && (
          <line x1={padL} y1={padT + chartH} x2={w - padR} y2={padT + chartH} stroke="rgba(255,253,246,0.15)" strokeWidth={1} />
        )}
        {series.map((s) => (
          <polyline
            key={s.name}
            fill="none"
            stroke={s.color}
            strokeWidth={2}
            points={s.points.map((p) => `${xFor(p.t)},${yFor(p.value)}`).join(" ")}
          />
        ))}
      </svg>
      <div className="flex items-center justify-between mt-1">
        <span className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>{formatMoney(vMin)}</span>
      </div>
      {series.length > 1 && (
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
          {series.map((s) => (
            <div key={s.name} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
              <span className="text-xs" style={{ color: "rgba(255,253,246,0.6)" }}>{s.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

const TABS: { key: Tab; label: string; icon: typeof Settings2 }[] = [
  { key: "setup", label: "Setup", icon: Settings2 },
  { key: "staffing", label: "Staffing Ramp", icon: Users },
  { key: "revenue", label: "Revenue Ramp", icon: TrendingUp },
  { key: "results", label: "Results", icon: LineChartIcon },
];

export default function ExpansionFeasibilityPage() {
  const { data, setData, lastSaved, saveNow } = useServerSyncedState<StoreData>(
    "expansion_feasibility",
    defaultData(),
    migrateExpansionFeasibilityData
  );
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [tab, setTab] = useState<Tab>("setup");

  const [savedFlash, setSavedFlash] = useState(false);

  const handleSave = useCallback(() => {
    saveNow();
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }, [saveNow]);

  // ── Scenario CRUD ──

  function createScenario() {
    const s = defaultScenario(newName.trim() || "New Location");
    setData((prev) => ({ scenarios: [s, ...prev.scenarios] }));
    setActiveId(s.id);
    setView("editor");
    setTab("setup");
    setCreating(false);
    setNewName("");
  }
  function duplicateScenario(id: string) {
    setData((prev) => {
      const src = prev.scenarios.find((s) => s.id === id);
      if (!src) return prev;
      const now = new Date().toISOString();
      const copy: Scenario = { ...JSON.parse(JSON.stringify(src)), id: uid(), name: `${src.name} (Copy)`, createdAt: now, updatedAt: now };
      return { scenarios: [copy, ...prev.scenarios] };
    });
  }
  function deleteScenario(id: string) {
    setData((prev) => ({ scenarios: prev.scenarios.filter((s) => s.id !== id) }));
    if (activeId === id) {
      setActiveId(null);
      setView("list");
    }
  }
  function openScenario(id: string) {
    setActiveId(id);
    setView("editor");
    setTab("setup");
  }
  function startRename(s: Scenario) {
    setRenamingId(s.id);
    setRenameValue(s.name);
  }
  function commitRename() {
    if (renamingId) {
      updateField(renamingId, "name", renameValue.trim() || "Untitled Location");
    }
    setRenamingId(null);
  }

  function updateField<K extends keyof Scenario>(id: string, field: K, value: Scenario[K]) {
    setData((prev) => ({
      scenarios: prev.scenarios.map((s) => (s.id === id ? { ...s, [field]: value, updatedAt: new Date().toISOString() } : s)),
    }));
  }

  function addStaff(id: string) {
    setData((prev) => ({
      scenarios: prev.scenarios.map((s) =>
        s.id === id
          ? { ...s, staff: [...s.staff, { id: uid(), role: "", monthlyCost: "", startMonth: "1" }], updatedAt: new Date().toISOString() }
          : s
      ),
    }));
  }
  function updateStaff(id: string, staffId: string, field: keyof StaffPosition, value: string) {
    setData((prev) => ({
      scenarios: prev.scenarios.map((s) =>
        s.id === id
          ? { ...s, staff: s.staff.map((p) => (p.id === staffId ? { ...p, [field]: value } : p)), updatedAt: new Date().toISOString() }
          : s
      ),
    }));
  }
  function removeStaff(id: string, staffId: string) {
    setData((prev) => ({
      scenarios: prev.scenarios.map((s) =>
        s.id === id ? { ...s, staff: s.staff.filter((p) => p.id !== staffId), updatedAt: new Date().toISOString() } : s
      ),
    }));
  }

  const active = data.scenarios.find((s) => s.id === activeId) ?? null;
  const sortedScenarios = [...data.scenarios].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));

  const timeline = useMemo(() => (active ? buildTimeline(active) : []), [active]);
  const startupTotal = active ? totalStartupCost(active) : 0;
  const fixedTotal = active ? totalFixedMonthly(active) : 0;
  const loanPmt = active ? monthlyLoanPayment(active) : 0;
  const outlay = active ? initialCashOutlay(active) : 0;
  const breakEvenMonth = findBreakEvenMonth(timeline);
  const payoffMonth = findPayoffMonth(timeline);
  const peakCapital = peakCapitalRequired(timeline, outlay);
  const fullyStaffedMonth = active && active.staff.length > 0 ? Math.max(...active.staff.map((p) => Math.max(1, parseNum(p.startMonth) || 1))) : null;
  const fullPayroll = active ? active.staff.reduce((sum, p) => sum + parseNum(p.monthlyCost), 0) : 0;

  const showEditor = view === "editor" && !!active;

  // ── LIST VIEW ──

  if (!showEditor) {
    return (
      <div className="min-h-screen" style={{ background: "#170009" }}>
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 flex-wrap" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <Link href="/members/resources/finance" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70" style={{ color: "rgba(162,140,117,0.6)" }}>
            <ArrowLeft size={13} />
            Finance
          </Link>
          <div className="flex items-center gap-2">
            {lastSaved && !savedFlash && (
              <span className="text-xs hidden sm:block" style={{ color: "rgba(162,140,117,0.4)" }}>Auto-saved {relativeTime(lastSaved)}</span>
            )}
            <button onClick={handleSave} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all"
              style={{ background: savedFlash ? "rgba(162,140,117,0.2)" : "transparent", borderColor: "rgba(162,140,117,0.25)", color: savedFlash ? "#a28c75" : "rgba(162,140,117,0.55)" }}>
              {savedFlash ? <Check size={12} /> : <Save size={12} />}
              {savedFlash ? "Saved!" : "Save"}
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Finance &amp; Business Performance</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Second Location Feasibility Model</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.5)" }}>
            Model a new location before you sign a lease — startup investment, financing, a realistic
            staffing ramp, and a revenue ramp — and see exactly when it breaks even, when it pays back
            what you put in, and the most cash you&apos;ll need to have on hand to get there. Pairs with
            your <Link href="/members/resources/finance/business-plan" className="underline hover:opacity-80" style={{ color: "#a28c75" }}>Business Plan Tool</Link>.
          </p>

          {/* New scenario */}
          {creating ? (
            <div className="rounded-xl p-6 mb-12" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
              <TextField label="Name this location / scenario" value={newName} onChange={setNewName} placeholder="e.g. Downtown Location, Westside Expansion..." />
              <div className="flex gap-3 mt-4">
                <button onClick={createScenario} disabled={!newName.trim()}
                  className="inline-flex items-center gap-2 px-5 h-11 rounded text-xs font-medium tracking-[0.15em] uppercase transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: "#a28c75", color: "#170009" }}>
                  <Plus size={14} />
                  Create Scenario
                </button>
                <button onClick={() => { setCreating(false); setNewName(""); }}
                  className="inline-flex items-center gap-2 px-5 h-11 rounded text-xs font-medium tracking-[0.15em] uppercase transition-all"
                  style={{ background: "transparent", color: "rgba(255,253,246,0.5)", border: "1px solid rgba(162,140,117,0.2)" }}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button onClick={() => setCreating(true)} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
              style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
              <div className="flex items-center gap-4">
                <Building2 size={20} style={{ color: "#a28c75" }} />
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Location Scenario</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Model a specific location, size, or timeline — create as many scenarios as you want to compare.</p>
                </div>
              </div>
            </button>
          )}

          {/* Saved scenarios */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Saved Scenarios</h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          {sortedScenarios.length === 0 ? (
            <div className="rounded-xl border p-10 text-center" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>No scenarios saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedScenarios.map((s) => (
                <div key={s.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                    <Building2 size={17} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    {renamingId === s.id ? (
                      <input
                        autoFocus
                        value={renameValue}
                        onChange={(e) => setRenameValue(e.target.value)}
                        onBlur={commitRename}
                        onKeyDown={(e) => { if (e.key === "Enter") commitRename(); if (e.key === "Escape") setRenamingId(null); }}
                        className="text-sm px-2 py-1 rounded outline-none w-full max-w-xs"
                        style={inputStyle}
                      />
                    ) : (
                      <p className="text-sm font-medium truncate cursor-pointer" onClick={() => openScenario(s.id)} style={{ color: "#fffdf6" }}>{s.name}</p>
                    )}
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {scenarioSummary(s)} · Updated {formatDateShort(s.updatedAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => openScenario(s.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                      Open
                    </button>
                    <button onClick={() => startRename(s)} title="Rename" className="p-2 opacity-50 hover:opacity-90 transition-opacity text-xs" style={{ color: "#a28c75" }}>
                      Rename
                    </button>
                    <button onClick={() => duplicateScenario(s.id)} title="Duplicate" className="p-2 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                      <Copy size={14} />
                    </button>
                    <button onClick={() => deleteScenario(s.id)} title="Delete" className="p-2 opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── EDITOR ──

  const s = active as Scenario;

  return (
    <div className="min-h-screen" style={{ background: "#170009" }}>
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-8 pb-6">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <button onClick={() => { setView("list"); setActiveId(null); }} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              My Scenarios
            </button>
            <div className="flex items-center gap-2">
              {lastSaved && !savedFlash && (
                <span className="text-xs hidden md:block" style={{ color: "rgba(162,140,117,0.4)" }}>Auto-saved {relativeTime(lastSaved)}</span>
              )}
              <button onClick={handleSave} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all"
                style={{ background: savedFlash ? "rgba(162,140,117,0.2)" : "transparent", borderColor: "rgba(162,140,117,0.25)", color: savedFlash ? "#a28c75" : "rgba(162,140,117,0.55)" }}>
                {savedFlash ? <Check size={12} /> : <Save size={12} />}
                {savedFlash ? "Saved!" : "Save"}
              </button>
            </div>
          </div>

          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Finance · Expansion Model</p>
          <h1 className="font-display text-3xl md:text-4xl font-light mb-6" style={{ color: "#fffdf6" }}>{s.name}</h1>

          <div className="flex flex-wrap gap-2">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = tab === t.key;
              return (
                <button key={t.key} onClick={() => setTab(t.key)}
                  className="inline-flex items-center gap-2 px-4 h-10 rounded-lg text-sm font-medium tracking-wide transition-all"
                  style={{
                    background: isActive ? "#a28c75" : "rgba(162,140,117,0.08)",
                    color: isActive ? "#170009" : "rgba(255,253,246,0.6)",
                    border: `1px solid ${isActive ? "#a28c75" : "rgba(162,140,117,0.2)"}`,
                  }}>
                  <Icon size={14} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        {/* ═══════════ SETUP ═══════════ */}
        {tab === "setup" && (
          <div className="space-y-10">
            <div>
              <SectionHeading title="Startup investment (one-time)" sub="Everything it costs to open the doors, before a single patient walks in." />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <NumberField label="Buildout & construction" prefix="$" value={s.buildout} onChange={(v) => updateField(s.id, "buildout", v)} />
                <NumberField label="Equipment & devices" prefix="$" value={s.equipment} onChange={(v) => updateField(s.id, "equipment", v)} />
                <NumberField label="Furniture & fixtures" prefix="$" value={s.furnitureFixtures} onChange={(v) => updateField(s.id, "furnitureFixtures", v)} />
                <NumberField label="Initial inventory & supplies" prefix="$" value={s.initialInventory} onChange={(v) => updateField(s.id, "initialInventory", v)} />
                <NumberField label="Licensing & permits" prefix="$" value={s.licensingPermits} onChange={(v) => updateField(s.id, "licensingPermits", v)} />
                <NumberField label="Working capital reserve" prefix="$" value={s.workingCapitalReserve} onChange={(v) => updateField(s.id, "workingCapitalReserve", v)} />
                <NumberField label="Other one-time costs" prefix="$" value={s.otherStartupCosts} onChange={(v) => updateField(s.id, "otherStartupCosts", v)} />
              </div>
              <StatCard label="Total Startup Investment" value={formatMoney(startupTotal)} accent />
            </div>

            <div>
              <SectionHeading title="Financing" sub="If part of this is financed, the loan payment becomes a fixed monthly cost — and only your cash portion counts as the initial outlay." />
              <label className="inline-flex items-center gap-2.5 mb-5 cursor-pointer">
                <input type="checkbox" checked={s.useFinancing} onChange={(e) => updateField(s.id, "useFinancing", e.target.checked)} className="w-4 h-4 accent-[#a28c75]" />
                <span className="text-sm" style={{ color: "rgba(255,253,246,0.7)" }}>This location will be partly financed (loan)</span>
              </label>
              {s.useFinancing ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <NumberField label="Loan amount" prefix="$" value={s.loanAmount} onChange={(v) => updateField(s.id, "loanAmount", v)} />
                    <NumberField label="Interest rate" suffix="%" value={s.interestRate} onChange={(v) => updateField(s.id, "interestRate", v)} />
                    <NumberField label="Loan term" suffix="yrs" value={s.loanTermYears} onChange={(v) => updateField(s.id, "loanTermYears", v)} />
                    <NumberField label="Cash invested (down payment)" prefix="$" value={s.cashInvested} onChange={(v) => updateField(s.id, "cashInvested", v)} />
                  </div>
                  <StatCard label="Monthly Loan Payment" value={formatMoney(loanPmt)} />
                </>
              ) : (
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                  Self-funding the full {formatMoney(startupTotal)} startup investment from cash on hand.
                </p>
              )}
            </div>

            <div>
              <SectionHeading title="Fixed monthly overhead" sub="Costs the new location carries every month regardless of patient volume." />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <NumberField label="Rent & facility lease" prefix="$" value={s.rent} onChange={(v) => updateField(s.id, "rent", v)} />
                <NumberField label="Utilities" prefix="$" value={s.utilities} onChange={(v) => updateField(s.id, "utilities", v)} />
                <NumberField label="Insurance" prefix="$" value={s.insurance} onChange={(v) => updateField(s.id, "insurance", v)} />
                <NumberField label="Software & subscriptions" prefix="$" value={s.softwareSubscriptions} onChange={(v) => updateField(s.id, "softwareSubscriptions", v)} />
                <NumberField label="Ongoing marketing" prefix="$" value={s.ongoingMarketing} onChange={(v) => updateField(s.id, "ongoingMarketing", v)} />
                <NumberField label="Other fixed monthly" prefix="$" value={s.otherFixedMonthly} onChange={(v) => updateField(s.id, "otherFixedMonthly", v)} />
              </div>
              <StatCard label="Total Fixed Monthly Overhead" value={formatMoney(fixedTotal)} />
            </div>

            <div>
              <SectionHeading title="Variable cost & timeline" sub="Product/supply cost scales with revenue, unlike the fixed overhead above." />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <NumberField label="Product & supply cost" suffix="% of revenue" value={s.cogsPercent} onChange={(v) => updateField(s.id, "cogsPercent", v)} />
                <NumberField label="Months to model" suffix="months" value={s.timelineMonths} onChange={(v) => updateField(s.id, "timelineMonths", v)} />
              </div>
            </div>

            <div>
              <SectionHeading title="Notes" />
              <textarea
                value={s.notes}
                onChange={(e) => updateField(s.id, "notes", e.target.value)}
                placeholder="Location address, assumptions, or anything else worth remembering about this scenario..."
                rows={3}
                className="w-full text-sm rounded-lg px-3 py-2.5 outline-none resize-none"
                style={inputStyle}
              />
            </div>
          </div>
        )}

        {/* ═══════════ STAFFING RAMP ═══════════ */}
        {tab === "staffing" && (
          <div>
            <SectionHeading
              title="Staffing ramp"
              sub="Add each position with its all-in monthly cost (base, benefits, taxes — the same 'all-in' concept from the Compensation Guide) and the month it starts. Payroll for any month is the sum of every position already on staff by then."
            />
            <div className="space-y-3 mb-6">
              {s.staff.length === 0 && (
                <p className="text-sm" style={{ color: "rgba(255,253,246,0.4)" }}>No positions added yet — add your first one below.</p>
              )}
              {s.staff.map((p) => (
                <div key={p.id} className="rounded-xl border p-4 grid grid-cols-1 sm:grid-cols-[1fr_180px_140px_auto] gap-3 items-end"
                  style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.14)" }}>
                  <TextField label="Role" value={p.role} onChange={(v) => updateStaff(s.id, p.id, "role", v)} placeholder="e.g. Lead Injector" />
                  <NumberField label="All-in monthly cost" prefix="$" value={p.monthlyCost} onChange={(v) => updateStaff(s.id, p.id, "monthlyCost", v)} />
                  <NumberField label="Start month" value={p.startMonth} onChange={(v) => updateStaff(s.id, p.id, "startMonth", v)} />
                  <button onClick={() => removeStaff(s.id, p.id)} className="h-10 w-10 flex items-center justify-center rounded-lg opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#e07878" }}>
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            <button onClick={() => addStaff(s.id)} className="inline-flex items-center gap-2 px-4 h-10 rounded-lg text-xs font-medium tracking-[0.1em] uppercase transition-all mb-8"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}>
              <Plus size={13} />
              Add Position
            </button>

            {s.staff.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatCard label="Full Monthly Payroll (once fully staffed)" value={formatMoney(fullPayroll)} />
                <StatCard label="Fully Staffed By" value={fullyStaffedMonth ? `Month ${fullyStaffedMonth}` : "—"} />
              </div>
            )}
          </div>
        )}

        {/* ═══════════ REVENUE RAMP ═══════════ */}
        {tab === "revenue" && (
          <div>
            <SectionHeading
              title="Revenue ramp"
              sub="New locations rarely open at full volume. Set a realistic Month 1 revenue and the steady-state revenue you expect once the location matures, and this ramps linearly between them."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <NumberField label="Month 1 revenue" prefix="$" value={s.month1Revenue} onChange={(v) => updateField(s.id, "month1Revenue", v)} />
              <NumberField label="Revenue at maturity" prefix="$" value={s.maturityRevenue} onChange={(v) => updateField(s.id, "maturityRevenue", v)} />
              <NumberField label="Months to reach maturity" value={s.monthsToMaturity} onChange={(v) => updateField(s.id, "monthsToMaturity", v)} />
            </div>
            <div className="rounded-xl border p-6" style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.14)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Projected Revenue Ramp</p>
              <TimelineChart series={[{ name: "Revenue", color: CHART_COLORS[0], points: timeline.map((r) => ({ t: r.month, value: r.revenue })) }]} />
            </div>
          </div>
        )}

        {/* ═══════════ RESULTS ═══════════ */}
        {tab === "results" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Total Startup Investment" value={formatMoney(startupTotal)} />
              <StatCard label="Initial Cash Outlay" value={formatMoney(outlay)} />
              <StatCard label="Monthly Break-Even" value={breakEvenMonth ? `Month ${breakEvenMonth}` : "Not reached"} accent />
              <StatCard label="Full Payback" value={payoffMonth ? `Month ${payoffMonth}` : "Not reached"} accent />
            </div>

            <div className="rounded-xl border p-6" style={{ background: "rgba(162,140,117,0.06)", borderColor: "rgba(162,140,117,0.25)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-1.5" style={{ color: "rgba(162,140,117,0.6)" }}>Peak Capital Required</p>
              <p className="font-display text-3xl font-light mb-2" style={{ color: "#a28c75" }}>{formatMoney(peakCapital)}</p>
              <p className="text-xs leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
                The most cash this location will ever be underwater — your initial outlay plus every month
                of operating losses before it turns the corner. This is the real number to have access to
                (savings, credit line, or reserve), not just the startup investment above.
              </p>
            </div>

            <div className="rounded-xl border p-6" style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.14)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Revenue vs. Total Expenses</p>
              <TimelineChart
                series={[
                  { name: "Revenue", color: CHART_COLORS[0], points: timeline.map((r) => ({ t: r.month, value: r.revenue })) },
                  { name: "Total Expenses", color: CHART_COLORS[1], points: timeline.map((r) => ({ t: r.month, value: r.totalExpenses })) },
                ]}
              />
            </div>

            <div className="rounded-xl border p-6" style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.14)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Cumulative Cash Flow</p>
              <TimelineChart series={[{ name: "Cumulative Cash Flow", color: CHART_COLORS[2], points: timeline.map((r) => ({ t: r.month, value: r.cumulativeCashFlow })) }]} />
            </div>

            <div className="rounded-xl border overflow-hidden" style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.14)" }}>
              <p className="text-xs tracking-[0.15em] uppercase p-6 pb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Month-by-Month Detail</p>
              <div className="overflow-x-auto px-6 pb-6">
                <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(162,140,117,0.2)" }}>
                      {["Month", "Revenue", "COGS", "Payroll", "Fixed OH", "Loan Pmt", "Total Exp", "Net CF", "Cumulative"].map((h) => (
                        <th key={h} className="text-right py-2 px-2 font-normal tracking-[0.05em] uppercase whitespace-nowrap" style={{ color: "rgba(162,140,117,0.55)" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeline.map((r) => (
                      <tr key={r.month} style={{ borderBottom: "1px solid rgba(162,140,117,0.06)" }}>
                        <td className="text-right py-1.5 px-2" style={{ color: "rgba(255,253,246,0.5)" }}>{r.month}</td>
                        <td className="text-right py-1.5 px-2" style={{ color: "rgba(255,253,246,0.7)" }}>{formatMoney(r.revenue)}</td>
                        <td className="text-right py-1.5 px-2" style={{ color: "rgba(255,253,246,0.5)" }}>{formatMoney(r.cogs)}</td>
                        <td className="text-right py-1.5 px-2" style={{ color: "rgba(255,253,246,0.5)" }}>{formatMoney(r.payroll)}</td>
                        <td className="text-right py-1.5 px-2" style={{ color: "rgba(255,253,246,0.5)" }}>{formatMoney(r.fixedOverhead)}</td>
                        <td className="text-right py-1.5 px-2" style={{ color: "rgba(255,253,246,0.5)" }}>{formatMoney(r.loanPayment)}</td>
                        <td className="text-right py-1.5 px-2" style={{ color: "rgba(255,253,246,0.6)" }}>{formatMoney(r.totalExpenses)}</td>
                        <td className="text-right py-1.5 px-2 font-medium" style={{ color: r.netCashFlow >= 0 ? "#7fbf8f" : "#e0918f" }}>{formatMoney(r.netCashFlow)}</td>
                        <td className="text-right py-1.5 px-2 font-medium" style={{ color: r.cumulativeCashFlow >= 0 ? "#a28c75" : "rgba(255,253,246,0.7)" }}>{formatMoney(r.cumulativeCashFlow)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-lg border p-4 flex items-start gap-3" style={{ background: "rgba(162,140,117,0.05)", borderColor: "rgba(162,140,117,0.18)" }}>
              <AlertCircle size={15} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
                This is a planning model built on the assumptions you enter — it isn&apos;t a loan
                pre-approval or a substitute for underwriting. Run it with conservative, realistic, and
                optimistic revenue ramps before committing to a lease.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
