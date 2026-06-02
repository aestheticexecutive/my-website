"use client";

import { useState, useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Plus,
  X,
  ChevronDown,
  Users,
  Save,
  Check,
  CheckCircle2,
  StickyNote,
  Trash2,
} from "lucide-react";

// ── KPI definitions ──────────────────────────────────────────────────────────

type KpiDef = {
  id: string;
  name: string;
  benchmark: string;
  prefix: string;
  suffix: string;
  higherBetter: boolean;
};

type Category = { id: string; label: string; kpis: KpiDef[] };

const KPI_CATEGORIES: Category[] = [
  {
    id: "conversion",
    label: "Conversion",
    kpis: [
      { id: "impression-to-lead",   name: "Impression to Lead",           benchmark: "Meta: 0.8–2% · Google: 2–5% · Landing Page: 20–30%", prefix: "", suffix: "%",    higherBetter: true  },
      { id: "lead-to-consult",      name: "Lead to Consult",              benchmark: "40–70%",                                             prefix: "", suffix: "%",    higherBetter: true  },
      { id: "consult-to-procedure", name: "Consult to Procedure",         benchmark: "60–80%",                                             prefix: "", suffix: "%",    higherBetter: true  },
    ],
  },
  {
    id: "retention",
    label: "Retention",
    kpis: [
      { id: "rebooking-rate",          name: "Rebooking Rate",                   benchmark: "80%",                          prefix: "", suffix: "%",    higherBetter: true  },
      { id: "churn-rate",              name: "Churn Rate",                       benchmark: "< 50%",                        prefix: "", suffix: "%",    higherBetter: false },
      { id: "reactivation-rate",       name: "Reactivation Rate",                benchmark: "10–20%",                       prefix: "", suffix: "%",    higherBetter: true  },
      { id: "membership-renewal-rate", name: "Membership Renewal Rate",          benchmark: "65–80%",                       prefix: "", suffix: "%",    higherBetter: true  },
      { id: "return-visit-rate",       name: "Return Visit Rate",                benchmark: "60–75%",                       prefix: "", suffix: "%",    higherBetter: true  },
      { id: "retention-6mo",           name: "6-Month Retention Rate",           benchmark: "50–65%",                       prefix: "", suffix: "%",    higherBetter: true  },
      { id: "retention-12mo",          name: "12-Month Retention Rate",          benchmark: "35–50%",                       prefix: "", suffix: "%",    higherBetter: true  },
      { id: "visit-frequency",         name: "Frequency of Visits per Patient",  benchmark: "3–5x per year",                prefix: "", suffix: "x/yr", higherBetter: true  },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    kpis: [
      { id: "add-on-rate",        name: "Add-On Service Rate",       benchmark: "15–30%",                                              prefix: "",  suffix: "%",   higherBetter: true },
      { id: "avg-invoice",        name: "Average Invoice Value",     benchmark: "$500–$700",                                           prefix: "$", suffix: "",    higherBetter: true },
      { id: "product-attachment", name: "Product Attachment Rate",   benchmark: "20–30%",                                              prefix: "",  suffix: "%",   higherBetter: true },
      { id: "retail-sales",       name: "Total Retail Sales",        benchmark: "5–10% of total revenue",                              prefix: "",  suffix: "%",   higherBetter: true },
      { id: "revenue-per-hour",   name: "Revenue Per Hour",          benchmark: "Clinician: $600–$1,000 · Esthetician: $200–$450",    prefix: "$", suffix: "/hr", higherBetter: true },
      { id: "utilization-rate",   name: "Utilization Rate",          benchmark: "80%+",                                                prefix: "",  suffix: "%",   higherBetter: true },
    ],
  },
];

// ── Types ────────────────────────────────────────────────────────────────────

type KpiEntry = {
  id: string;
  value: string;
  teamTag: string;
  notes: string;
};

type MonthData = Record<string, KpiEntry[]>;

type UserKpiData = {
  teams: string[];
  months: Record<string, MonthData>;
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function genId(): string {
  return Math.random().toString(36).slice(2, 11);
}

function getCurrentMonthKey(): string {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}`;
}

function getPrevMonthKey(key: string): string {
  const [y, m] = key.split("-").map(Number);
  return m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, "0")}`;
}

function formatMonthLabel(key: string): string {
  const [y, m] = key.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function getLast13Months(): string[] {
  const n = new Date();
  return Array.from({ length: 13 }, (_, i) => {
    const d = new Date(n.getFullYear(), n.getMonth() - i, 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  });
}

function calcChange(
  curr: string,
  prev: string,
  higherBetter: boolean
): { label: string; good: boolean; neutral: boolean } | null {
  const c = parseFloat(curr);
  const p = parseFloat(prev);
  if (isNaN(c) || isNaN(p) || p === 0) return null;
  const pct = ((c - p) / Math.abs(p)) * 100;
  if (Math.abs(pct) < 0.05) return { label: "No change", good: true, neutral: true };
  const up = pct > 0;
  return { label: `${up ? "+" : ""}${pct.toFixed(1)}%`, good: higherBetter ? up : !up, neutral: false };
}

// Always returns an array — guards against old single-object format in localStorage
function toEntries(val: unknown): KpiEntry[] {
  if (Array.isArray(val)) return val;
  return [];
}

function fmtValue(kpi: KpiDef, val: string): string {
  if (!val) return "—";
  return `${kpi.prefix}${val}${kpi.suffix}`;
}

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function kpiHasData(kpiId: string, monthData: MonthData): boolean {
  return toEntries(monthData[kpiId]).some((e) => e.value.trim() !== "");
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function KpiTrackerPage() {
  const { user } = useUser();
  const [data, setData] = useState<UserKpiData>({ teams: [], months: {} });
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonthKey());
  const [compareMonth, setCompareMonth] = useState(getPrevMonthKey(getCurrentMonthKey()));
  const [view, setView] = useState<"entry" | "compare">("entry");
  const [newTeam, setNewTeam] = useState("");
  const [openNotes, setOpenNotes] = useState<Set<string>>(new Set());
  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0); // forces relative-time refresh

  const storageKey = user ? `ae_kpi_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData(parsed);
        if (parsed._savedAt) setLastSaved(parsed._savedAt);
      }
    } catch {}
  }, [storageKey]);

  // Auto-save debounced
  useEffect(() => {
    if (!storageKey) return;
    const t = setTimeout(() => {
      const now = new Date().toISOString();
      localStorage.setItem(storageKey, JSON.stringify({ ...data, _savedAt: now }));
      setLastSaved(now);
    }, 800);
    return () => clearTimeout(t);
  }, [data, storageKey]);

  // Refresh relative time display every 30s
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 30000);
    return () => clearInterval(t);
  }, []);

  const handleSave = useCallback(() => {
    if (!storageKey) return;
    const now = new Date().toISOString();
    localStorage.setItem(storageKey, JSON.stringify({ ...data, _savedAt: now }));
    setLastSaved(now);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }, [storageKey, data]);

  // ── Entry operations ──

  function addEntry(kpiId: string) {
    setData((prev) => {
      const existing = toEntries(prev.months[selectedMonth]?.[kpiId]);
      return {
        ...prev,
        months: {
          ...prev.months,
          [selectedMonth]: {
            ...prev.months[selectedMonth],
            [kpiId]: [...existing, { id: genId(), value: "", teamTag: "", notes: "" }],
          },
        },
      };
    });
  }

  function updateEntry(kpiId: string, entryId: string, field: keyof Omit<KpiEntry, "id">, value: string) {
    setData((prev) => {
      const entries = toEntries(prev.months[selectedMonth]?.[kpiId]);
      return {
        ...prev,
        months: {
          ...prev.months,
          [selectedMonth]: {
            ...prev.months[selectedMonth],
            [kpiId]: entries.map((e) => (e.id === entryId ? { ...e, [field]: value } : e)),
          },
        },
      };
    });
  }

  function removeEntry(kpiId: string, entryId: string) {
    setData((prev) => {
      const entries = toEntries(prev.months[selectedMonth]?.[kpiId]);
      return {
        ...prev,
        months: {
          ...prev.months,
          [selectedMonth]: {
            ...prev.months[selectedMonth],
            [kpiId]: entries.filter((e) => e.id !== entryId),
          },
        },
      };
    });
  }

  function addTeam() {
    const t = newTeam.trim();
    if (!t || data.teams.includes(t)) return;
    setData((prev) => ({ ...prev, teams: [...prev.teams, t] }));
    setNewTeam("");
  }

  function removeTeam(t: string) {
    setData((prev) => ({ ...prev, teams: prev.teams.filter((x) => x !== t) }));
  }

  function toggleNotes(uid: string) {
    setOpenNotes((prev) => {
      const next = new Set(prev);
      next.has(uid) ? next.delete(uid) : next.add(uid);
      return next;
    });
  }

  const months = getLast13Months();
  const currentData: MonthData = data.months[selectedMonth] ?? {};
  const prevData: MonthData = data.months[getPrevMonthKey(selectedMonth)] ?? {};
  const compareData: MonthData = data.months[compareMonth] ?? {};

  // Shared inline styles
  const inputStyle: React.CSSProperties = { background: "rgba(12,0,4,0.8)", borderColor: "rgba(162,140,117,0.2)", color: "#fffdf6" };
  const cardBg: React.CSSProperties = { background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" };

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="bg-[#0c0004] min-h-screen pb-24">

      {/* Sticky sub-header */}
      <div className="sticky top-16 z-10 border-b" style={{ background: "rgba(10,0,3,0.96)", backdropFilter: "blur(16px)", borderColor: "rgba(162,140,117,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs">
            <Link href="/members/resources/finance" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={12} /> Finance
            </Link>
            <span style={{ color: "rgba(162,140,117,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,253,246,0.7)" }}>KPI Tracker</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            {/* View toggle */}
            <div className="flex rounded-lg border overflow-hidden" style={{ borderColor: "rgba(162,140,117,0.2)" }}>
              {(["entry", "compare"] as const).map((v) => (
                <button key={v} onClick={() => setView(v)} className="px-3 py-1.5 text-xs tracking-wide transition-colors"
                  style={{ background: view === v ? "rgba(162,140,117,0.18)" : "transparent", color: view === v ? "#fffdf6" : "rgba(255,253,246,0.35)" }}>
                  {v === "entry" ? "Data Entry" : "Compare Months"}
                </button>
              ))}
            </div>

            {/* Month picker */}
            <div className="relative">
              <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}
                className="appearance-none text-xs px-3 py-1.5 pr-7 rounded-lg border cursor-pointer" style={inputStyle}>
                {months.map((m) => <option key={m} value={m}>{formatMonthLabel(m)}</option>)}
              </select>
              <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(162,140,117,0.5)" }} />
            </div>

            {/* Save status */}
            <div className="flex items-center gap-2">
              {lastSaved && !savedFlash && (
                <span className="text-xs hidden sm:block" style={{ color: "rgba(162,140,117,0.4)" }}>
                  Auto-saved {relativeTime(lastSaved)}
                </span>
              )}
              <button onClick={handleSave} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all"
                style={{ background: savedFlash ? "rgba(162,140,117,0.2)" : "transparent", borderColor: "rgba(162,140,117,0.25)", color: savedFlash ? "#a28c75" : "rgba(162,140,117,0.55)" }}>
                {savedFlash ? <Check size={12} /> : <Save size={12} />}
                {savedFlash ? "Saved!" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10">

        {/* Page header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Finance & Business Performance</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>KPI Tracker</h1>
          <p className="text-sm max-w-xl leading-relaxed mb-8" style={{ color: "rgba(255,253,246,0.4)" }}>
            Track each KPI by individual team member or team — add multiple entries per metric to compare performance across your practice.
          </p>

          {/* Progress summary */}
          {(() => {
            const allKpis = KPI_CATEGORIES.flatMap((c) => c.kpis);
            const filled = allKpis.filter((k) => kpiHasData(k.id, currentData)).length;
            const total = allKpis.length;
            const pct = Math.round((filled / total) * 100);
            return (
              <div className="rounded-xl border p-5 flex flex-col sm:flex-row sm:items-center gap-5"
                style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.12)" }}>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-3xl font-light" style={{ color: filled > 0 ? "#fffdf6" : "rgba(255,253,246,0.3)" }}>{filled}</span>
                    <span className="text-sm" style={{ color: "rgba(255,253,246,0.3)" }}>/ {total} KPIs tracked for</span>
                    <span className="text-sm font-medium" style={{ color: "rgba(162,140,117,0.8)" }}>{formatMonthLabel(selectedMonth)}</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,253,246,0.06)" }}>
                    <div className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, background: filled === total ? "#7ecf7e" : filled > 0 ? "#a28c75" : "transparent" }} />
                  </div>
                </div>
                {filled === 0 ? (
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.25)" }}>No data entered yet — scroll down to start</p>
                ) : filled === total ? (
                  <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#7ecf7e" }}>
                    <CheckCircle2 size={14} /> All KPIs tracked
                  </span>
                ) : (
                  <p className="text-xs" style={{ color: "rgba(162,140,117,0.5)" }}>{total - filled} KPIs still need data</p>
                )}
              </div>
            );
          })()}
        </div>

        {/* Team management */}
        <div className="rounded-xl border p-6 mb-10" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center gap-2 mb-1">
            <Users size={14} style={{ color: "#a28c75" }} />
            <h2 className="text-sm font-medium" style={{ color: "#fffdf6" }}>Team Members & Teams</h2>
          </div>
          <p className="text-xs mb-5" style={{ color: "rgba(255,253,246,0.35)" }}>
            Add names or team labels here, then tag them against each KPI entry below.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.teams.length === 0 && (
              <span className="text-xs italic" style={{ color: "rgba(255,253,246,0.2)" }}>No team members added yet.</span>
            )}
            {data.teams.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}>
                {t}
                <button onClick={() => removeTeam(t)} className="opacity-50 hover:opacity-100 transition-opacity"><X size={11} /></button>
              </span>
            ))}
          </div>
          <div className="flex gap-2 max-w-sm">
            <input type="text" placeholder="e.g. Sarah, Front Desk, Clinical Team" value={newTeam}
              onChange={(e) => setNewTeam(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addTeam()}
              className="flex-1 text-xs px-4 py-2 rounded-lg border outline-none" style={inputStyle} />
            <button onClick={addTeam} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors"
              style={{ background: "rgba(162,140,117,0.1)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
              <Plus size={12} /> Add
            </button>
          </div>
        </div>

        {/* ════════════ DATA ENTRY VIEW ════════════ */}
        {view === "entry" && (
          <div className="space-y-14">
            {KPI_CATEGORIES.map((cat) => (
              <div key={cat.id}>
                {(() => {
                  const catFilled = cat.kpis.filter((k) => kpiHasData(k.id, currentData)).length;
                  return (
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>{cat.label}</h2>
                      <span className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: catFilled === cat.kpis.length ? "rgba(126,207,126,0.12)" : catFilled > 0 ? "rgba(162,140,117,0.1)" : "rgba(255,253,246,0.04)",
                          color: catFilled === cat.kpis.length ? "#7ecf7e" : catFilled > 0 ? "rgba(162,140,117,0.7)" : "rgba(255,253,246,0.2)",
                        }}>
                        {catFilled}/{cat.kpis.length} tracked
                      </span>
                      <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
                    </div>
                  );
                })()}

                <div className="space-y-4">
                  {cat.kpis.map((kpi) => {
                    const entries: KpiEntry[] = toEntries(currentData[kpi.id]);
                    const prevEntries: KpiEntry[] = toEntries(prevData[kpi.id]);
                    const hasData = entries.some((e) => e.value.trim() !== "");

                    return (
                      <div key={kpi.id} className="rounded-xl border overflow-hidden transition-colors"
                        style={{ ...cardBg, borderColor: hasData ? "rgba(162,140,117,0.28)" : "rgba(162,140,117,0.08)" }}>

                        {/* KPI header */}
                        <div className="px-5 pt-5 pb-4 flex items-start justify-between gap-4 border-b"
                          style={{ borderColor: "rgba(162,140,117,0.08)", background: hasData ? "rgba(162,140,117,0.04)" : "transparent" }}>
                          <div className="flex items-start gap-3">
                            {/* Filled / empty dot */}
                            <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0 transition-colors"
                              style={{ background: hasData ? "#a28c75" : "rgba(255,253,246,0.1)" }} />
                            <div>
                              <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{kpi.name}</p>
                              <p className="text-xs" style={{ color: "rgba(162,140,117,0.55)" }}>Industry avg: {kpi.benchmark}</p>
                            </div>
                          </div>
                          {hasData ? (
                            <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                              style={{ background: "rgba(162,140,117,0.12)", color: "#a28c75", border: "1px solid rgba(162,140,117,0.2)" }}>
                              <Check size={10} />
                              {entries.filter((e) => e.value.trim()).length} {entries.filter((e) => e.value.trim()).length === 1 ? "entry" : "entries"} saved
                            </span>
                          ) : (
                            <span className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                              style={{ background: "rgba(255,253,246,0.04)", color: "rgba(255,253,246,0.2)", border: "1px solid rgba(255,253,246,0.06)" }}>
                              No data
                            </span>
                          )}
                        </div>

                        {/* Entries */}
                        <div className="divide-y" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                          {entries.length === 0 && (
                            <div className="px-5 py-4">
                              <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.2)" }}>
                                No entries yet. Add one below — you can track this KPI separately for each team member or team.
                              </p>
                            </div>
                          )}

                          {entries.map((entry, idx) => {
                            // Find matching prev entry by teamTag (case-insensitive)
                            const prevMatch = entry.teamTag
                              ? prevEntries.find((p) => p.teamTag.toLowerCase() === entry.teamTag.toLowerCase())
                              : prevEntries[idx];
                            const change = entry.value && prevMatch?.value
                              ? calcChange(entry.value, prevMatch.value, kpi.higherBetter)
                              : null;
                            const noteKey = `${kpi.id}-${entry.id}`;
                            const notesOpen = openNotes.has(noteKey);

                            return (
                              <div key={entry.id} className="px-5 py-4" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                                <div className="flex flex-col md:flex-row md:items-center gap-3">
                                  {/* Entry label */}
                                  <span className="text-xs w-4 flex-shrink-0 text-center" style={{ color: "rgba(162,140,117,0.4)" }}>{idx + 1}</span>

                                  {/* Value */}
                                  <div className="flex items-center gap-1.5 flex-shrink-0">
                                    {kpi.prefix && <span className="text-sm" style={{ color: "rgba(255,253,246,0.3)" }}>{kpi.prefix}</span>}
                                    <input type="number" step="any" placeholder="—" value={entry.value}
                                      onChange={(e) => updateEntry(kpi.id, entry.id, "value", e.target.value)}
                                      className="w-28 text-sm text-right px-3 py-2 rounded-lg border outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                      style={inputStyle} />
                                    {kpi.suffix && <span className="text-xs" style={{ color: "rgba(255,253,246,0.3)" }}>{kpi.suffix}</span>}
                                  </div>

                                  {/* Team tag */}
                                  <div className="relative flex-shrink-0">
                                    <select value={entry.teamTag} onChange={(e) => updateEntry(kpi.id, entry.id, "teamTag", e.target.value)}
                                      className="appearance-none text-xs px-3 py-2 pr-7 rounded-lg border cursor-pointer w-full md:w-40"
                                      style={{ ...inputStyle, color: entry.teamTag ? "#a28c75" : "rgba(255,253,246,0.25)" }}>
                                      <option value="">No tag</option>
                                      {data.teams.map((t) => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                    <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(162,140,117,0.45)" }} />
                                  </div>

                                  {/* MoM change */}
                                  <div className="flex-shrink-0 w-28">
                                    {change ? (
                                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
                                        style={{
                                          background: change.neutral ? "rgba(255,253,246,0.06)" : change.good ? "rgba(90,190,90,0.12)" : "rgba(200,70,70,0.12)",
                                          color: change.neutral ? "rgba(255,253,246,0.4)" : change.good ? "#7ecf7e" : "#e07878",
                                        }}>
                                        {!change.neutral && (change.good ? <TrendingUp size={11} /> : <TrendingDown size={11} />)}
                                        {change.label}
                                      </span>
                                    ) : (
                                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.15)" }}>
                                        {prevEntries.length > 0 ? "Enter value" : "No prior data"}
                                      </span>
                                    )}
                                  </div>

                                  {/* Actions */}
                                  <div className="flex items-center gap-3 ml-auto flex-shrink-0">
                                    <button onClick={() => toggleNotes(noteKey)} className="flex items-center gap-1 text-xs transition-opacity hover:opacity-80"
                                      style={{ color: notesOpen ? "#a28c75" : "rgba(162,140,117,0.4)" }}>
                                      <StickyNote size={12} />
                                      <span className="hidden sm:inline">{notesOpen ? "Hide" : "Notes"}</span>
                                    </button>
                                    <button onClick={() => removeEntry(kpi.id, entry.id)} className="opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
                                      <Trash2 size={13} />
                                    </button>
                                  </div>
                                </div>

                                {/* Notes */}
                                {notesOpen && (
                                  <textarea value={entry.notes} onChange={(e) => updateEntry(kpi.id, entry.id, "notes", e.target.value)}
                                    placeholder={"How can you pull this data?\nWhat does this data tell you?\nAdditional notes..."}
                                    rows={3} className="mt-3 w-full text-xs px-4 py-3 rounded-lg border outline-none resize-none leading-relaxed"
                                    style={inputStyle} />
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Add entry button */}
                        <div className="px-5 py-3 border-t" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                          <button onClick={() => addEntry(kpi.id)}
                            className="flex items-center gap-2 text-xs transition-opacity hover:opacity-80"
                            style={{ color: "rgba(162,140,117,0.55)" }}>
                            <Plus size={13} />
                            Add {entries.length > 0 ? "another entry" : "entry"}
                            {entries.length === 0 && <span style={{ color: "rgba(255,253,246,0.2)" }}>— track per team member or team</span>}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ════════════ COMPARE VIEW ════════════ */}
        {view === "compare" && (
          <div>
            {/* Month pickers */}
            <div className="flex flex-wrap items-center gap-3 mb-10 p-5 rounded-xl border" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              <span className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>Comparing</span>
              <div className="relative">
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}
                  className="appearance-none text-xs px-3 py-2 pr-7 rounded-lg border cursor-pointer font-medium"
                  style={{ ...inputStyle, borderColor: "rgba(162,140,117,0.35)" }}>
                  {months.map((m) => <option key={m} value={m}>{formatMonthLabel(m)}</option>)}
                </select>
                <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(162,140,117,0.5)" }} />
              </div>
              <span className="text-xs" style={{ color: "rgba(255,253,246,0.3)" }}>vs.</span>
              <div className="relative">
                <select value={compareMonth} onChange={(e) => setCompareMonth(e.target.value)}
                  className="appearance-none text-xs px-3 py-2 pr-7 rounded-lg border cursor-pointer" style={inputStyle}>
                  {months.map((m) => <option key={m} value={m}>{formatMonthLabel(m)}</option>)}
                </select>
                <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(162,140,117,0.5)" }} />
              </div>
              <span className="text-xs ml-auto hidden sm:block" style={{ color: "rgba(255,253,246,0.2)" }}>
                Entries matched by team tag · Green = improvement · Red = decline
              </span>
            </div>

            {KPI_CATEGORIES.map((cat) => (
              <div key={cat.id} className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>{cat.label}</h2>
                  <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
                </div>

                <div className="rounded-xl border overflow-hidden overflow-x-auto" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
                  {/* Table header */}
                  <div className="grid text-xs tracking-[0.12em] uppercase px-5 py-3"
                    style={{ gridTemplateColumns: "1fr 90px 120px 120px 90px", background: "rgba(162,140,117,0.06)", borderBottom: "1px solid rgba(162,140,117,0.1)", color: "rgba(162,140,117,0.6)", minWidth: "520px" }}>
                    <span>KPI</span>
                    <span>Tag</span>
                    <span className="text-right">{formatMonthLabel(selectedMonth).split(" ")[0]}</span>
                    <span className="text-right">{formatMonthLabel(compareMonth).split(" ")[0]}</span>
                    <span className="text-center">Change</span>
                  </div>

                  {cat.kpis.map((kpi, ki) => {
                    const aEntries: KpiEntry[] = toEntries(currentData[kpi.id]);
                    const bEntries: KpiEntry[] = toEntries(compareData[kpi.id]);

                    // Collect all unique tags across both months
                    const allTags = Array.from(
                      new Set([
                        ...aEntries.map((e) => e.teamTag || "__none__"),
                        ...bEntries.map((e) => e.teamTag || "__none__"),
                      ])
                    );

                    // If no data at all, show a single empty row
                    const rows =
                      allTags.length > 0
                        ? allTags
                        : ["__empty__"];

                    return rows.map((tag, ri) => {
                      if (tag === "__empty__") {
                        return (
                          <div key={`${kpi.id}-empty`} className="grid items-center px-5 py-4"
                            style={{ gridTemplateColumns: "1fr 90px 120px 120px 90px", background: ki % 2 === 0 ? "rgba(20,0,8,0.5)" : "rgba(12,0,4,0.5)", minWidth: "520px" }}>
                            <p className="text-sm" style={{ color: "#fffdf6" }}>{kpi.name}</p>
                            <span /><span /><span />
                            <span className="text-xs text-center" style={{ color: "rgba(255,253,246,0.18)" }}>—</span>
                          </div>
                        );
                      }

                      const aEntry = tag === "__none__"
                        ? aEntries.find((e) => !e.teamTag)
                        : aEntries.find((e) => e.teamTag.toLowerCase() === tag.toLowerCase());
                      const bEntry = tag === "__none__"
                        ? bEntries.find((e) => !e.teamTag)
                        : bEntries.find((e) => e.teamTag.toLowerCase() === tag.toLowerCase());

                      const change = aEntry?.value && bEntry?.value
                        ? calcChange(aEntry.value, bEntry.value, kpi.higherBetter)
                        : null;

                      const isFirst = ri === 0;
                      const bgRow = ki % 2 === 0 ? "rgba(20,0,8,0.5)" : "rgba(12,0,4,0.5)";

                      return (
                        <div key={`${kpi.id}-${tag}`} className="grid items-center px-5 py-3.5"
                          style={{ gridTemplateColumns: "1fr 90px 120px 120px 90px", background: bgRow, borderTop: !isFirst ? "1px solid rgba(162,140,117,0.05)" : undefined, minWidth: "520px" }}>
                          {/* KPI name — only on first row for this KPI */}
                          <div>
                            {isFirst ? (
                              <p className="text-sm" style={{ color: "#fffdf6" }}>{kpi.name}</p>
                            ) : (
                              <div className="ml-3 w-px h-4 rounded-full" style={{ background: "rgba(162,140,117,0.15)" }} />
                            )}
                          </div>

                          {/* Tag pill */}
                          <div>
                            {tag !== "__none__" ? (
                              <span className="inline-block text-xs px-2 py-0.5 rounded-full truncate max-w-full"
                                style={{ background: "rgba(162,140,117,0.1)", color: "rgba(162,140,117,0.7)" }}>
                                {tag}
                              </span>
                            ) : (
                              <span className="text-xs italic" style={{ color: "rgba(255,253,246,0.2)" }}>Untagged</span>
                            )}
                          </div>

                          {/* Selected month value */}
                          <p className="text-sm font-medium text-right" style={{ color: aEntry?.value ? "#fffdf6" : "rgba(255,253,246,0.2)" }}>
                            {fmtValue(kpi, aEntry?.value ?? "")}
                          </p>

                          {/* Compare month value */}
                          <p className="text-sm text-right" style={{ color: bEntry?.value ? "rgba(255,253,246,0.55)" : "rgba(255,253,246,0.2)" }}>
                            {fmtValue(kpi, bEntry?.value ?? "")}
                          </p>

                          {/* Change */}
                          <div className="flex justify-center">
                            {change ? (
                              <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
                                style={{
                                  background: change.neutral ? "rgba(255,253,246,0.06)" : change.good ? "rgba(90,190,90,0.12)" : "rgba(200,70,70,0.12)",
                                  color: change.neutral ? "rgba(255,253,246,0.4)" : change.good ? "#7ecf7e" : "#e07878",
                                }}>
                                {!change.neutral && (change.good ? <TrendingUp size={10} /> : <TrendingDown size={10} />)}
                                {change.label}
                              </span>
                            ) : (
                              <span className="text-xs" style={{ color: "rgba(255,253,246,0.18)" }}>—</span>
                            )}
                          </div>
                        </div>
                      );
                    });
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
