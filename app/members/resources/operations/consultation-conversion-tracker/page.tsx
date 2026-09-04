"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useServerSyncedState } from "@/lib/useServerSyncedState";
import {
  ArrowLeft,
  Plus,
  X,
  ChevronDown,
  Users,
  Save,
  Check,
  StickyNote,
  Trash2,
  BarChart3,
  Calendar,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type ConsultEntry = {
  id: string;
  date: string; // YYYY-MM-DD
  provider: string;
  consultType: string;
  purchased: string; // numeric string
  notPurchased: string; // numeric string
};

type NoteEntry = {
  id: string;
  date: string; // YYYY-MM-DD — the period this note refers to
  text: string;
};

type TrackerData = {
  providers: string[];
  consultTypes: string[];
  entries: ConsultEntry[];
  notes: NoteEntry[];
};

type Preset = "thisMonth" | "lastMonth" | "thisQuarter" | "ytd" | "allTime" | "custom";

const DEFAULT_CONSULT_TYPES = [
  "Injectables (Botox/Filler)",
  "Laser & Skin Treatments",
  "Body Contouring",
  "Surgical Consult",
  "Membership / Package",
  "Skincare / Facial",
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function genId(): string {
  return Math.random().toString(36).slice(2, 11);
}

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function startOfMonthISO(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-01`;
}

function endOfMonthISO(d: Date): string {
  const last = new Date(d.getFullYear(), d.getMonth() + 1, 0);
  return `${last.getFullYear()}-${pad(last.getMonth() + 1)}-${pad(last.getDate())}`;
}

function formatDateLabel(iso: string): string {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return "—";
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatRangeLabel(start: string, end: string): string {
  if (!start && !end) return "All time";
  return `${formatDateLabel(start)} – ${formatDateLabel(end)}`;
}

function getPresetRange(preset: Preset): { start: string; end: string } {
  const now = new Date();
  switch (preset) {
    case "thisMonth":
      return { start: startOfMonthISO(now), end: todayISO() };
    case "lastMonth": {
      const lm = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      return { start: startOfMonthISO(lm), end: endOfMonthISO(lm) };
    }
    case "thisQuarter": {
      const qStart = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1);
      return { start: startOfMonthISO(qStart), end: todayISO() };
    }
    case "ytd":
      return { start: `${now.getFullYear()}-01-01`, end: todayISO() };
    case "allTime":
      return { start: "", end: "" };
    default:
      return { start: "", end: "" };
  }
}

function inRange(dateIso: string, start: string, end: string): boolean {
  if (!dateIso) return false;
  if (start && dateIso < start) return false;
  if (end && dateIso > end) return false;
  return true;
}

function num(val: string): number {
  const n = parseInt(val, 10);
  return isNaN(n) ? 0 : n;
}

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

type GroupStat = { name: string; total: number; purchased: number; notPurchased: number; rate: number };

function computeGroupStats(entries: ConsultEntry[], keyFn: (e: ConsultEntry) => string): GroupStat[] {
  const map = new Map<string, { purchased: number; notPurchased: number }>();
  entries.forEach((e) => {
    const key = keyFn(e).trim() || "Unspecified";
    const cur = map.get(key) ?? { purchased: 0, notPurchased: 0 };
    cur.purchased += num(e.purchased);
    cur.notPurchased += num(e.notPurchased);
    map.set(key, cur);
  });
  return Array.from(map.entries())
    .map(([name, v]) => {
      const total = v.purchased + v.notPurchased;
      return { name, total, purchased: v.purchased, notPurchased: v.notPurchased, rate: total > 0 ? (v.purchased / total) * 100 : 0 };
    })
    .filter((g) => g.total > 0)
    .sort((a, b) => b.rate - a.rate || b.total - a.total);
}

// ── Migration ────────────────────────────────────────────────────────────────

function migrateTrackerData(raw: unknown): TrackerData {
  const parsed = (raw ?? {}) as Partial<Record<keyof TrackerData, unknown>>;
  return {
    providers: Array.isArray(parsed.providers) ? (parsed.providers as string[]) : [],
    consultTypes: Array.isArray(parsed.consultTypes) ? (parsed.consultTypes as string[]) : DEFAULT_CONSULT_TYPES,
    entries: Array.isArray(parsed.entries) ? (parsed.entries as ConsultEntry[]) : [],
    notes: Array.isArray(parsed.notes) ? (parsed.notes as NoteEntry[]) : [],
  };
}

// ── Component ────────────────────────────────────────────────────────────────

export default function ConsultationConversionTrackerPage() {
  const { data, setData, lastSaved, saveNow } = useServerSyncedState<TrackerData>(
    "consult_tracker",
    { providers: [], consultTypes: DEFAULT_CONSULT_TYPES, entries: [], notes: [] },
    migrateTrackerData
  );
  const [view, setView] = useState<"log" | "report">("log");
  const [newProvider, setNewProvider] = useState("");
  const [newType, setNewType] = useState("");
  const [savedFlash, setSavedFlash] = useState(false);
  const [, setTick] = useState(0);

  const [preset, setPreset] = useState<Preset>("thisMonth");
  const [rangeStart, setRangeStart] = useState<string>(getPresetRange("thisMonth").start);
  const [rangeEnd, setRangeEnd] = useState<string>(getPresetRange("thisMonth").end);

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 30000);
    return () => clearInterval(t);
  }, []);

  const handleSave = useCallback(() => {
    saveNow();
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }, [saveNow]);

  // ── Providers / types ──

  function addProvider() {
    const p = newProvider.trim();
    if (!p || data.providers.includes(p)) return;
    setData((prev) => ({ ...prev, providers: [...prev.providers, p] }));
    setNewProvider("");
  }
  function removeProvider(p: string) {
    setData((prev) => ({ ...prev, providers: prev.providers.filter((x) => x !== p) }));
  }
  function addConsultType() {
    const t = newType.trim();
    if (!t || data.consultTypes.includes(t)) return;
    setData((prev) => ({ ...prev, consultTypes: [...prev.consultTypes, t] }));
    setNewType("");
  }
  function removeConsultType(t: string) {
    setData((prev) => ({ ...prev, consultTypes: prev.consultTypes.filter((x) => x !== t) }));
  }

  // ── Entries ──

  function addEntry() {
    setData((prev) => ({
      ...prev,
      entries: [{ id: genId(), date: todayISO(), provider: "", consultType: "", purchased: "", notPurchased: "" }, ...prev.entries],
    }));
  }
  function updateEntry(id: string, field: keyof Omit<ConsultEntry, "id">, value: string) {
    setData((prev) => ({ ...prev, entries: prev.entries.map((e) => (e.id === id ? { ...e, [field]: value } : e)) }));
  }
  function removeEntry(id: string) {
    setData((prev) => ({ ...prev, entries: prev.entries.filter((e) => e.id !== id) }));
  }

  // ── Notes ──

  function addNote() {
    setData((prev) => ({ ...prev, notes: [{ id: genId(), date: todayISO(), text: "" }, ...prev.notes] }));
  }
  function updateNote(id: string, field: keyof Omit<NoteEntry, "id">, value: string) {
    setData((prev) => ({ ...prev, notes: prev.notes.map((n) => (n.id === id ? { ...n, [field]: value } : n)) }));
  }
  function removeNote(id: string) {
    setData((prev) => ({ ...prev, notes: prev.notes.filter((n) => n.id !== id) }));
  }

  function applyPreset(p: Preset) {
    setPreset(p);
    if (p === "custom") return;
    const r = getPresetRange(p);
    setRangeStart(r.start);
    setRangeEnd(r.end);
  }

  // ── Derived report data ──

  const filteredEntries = data.entries.filter((e) => inRange(e.date, rangeStart, rangeEnd));
  const filteredNotes = data.notes
    .filter((n) => inRange(n.date, rangeStart, rangeEnd))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const overall = filteredEntries.reduce(
    (acc, e) => ({ purchased: acc.purchased + num(e.purchased), notPurchased: acc.notPurchased + num(e.notPurchased) }),
    { purchased: 0, notPurchased: 0 }
  );
  const overallTotal = overall.purchased + overall.notPurchased;
  const overallRate = overallTotal > 0 ? (overall.purchased / overallTotal) * 100 : 0;

  const byProvider = computeGroupStats(filteredEntries, (e) => e.provider);
  const byType = computeGroupStats(filteredEntries, (e) => e.consultType);

  const sortedEntries = [...data.entries].sort((a, b) => (a.date < b.date ? 1 : -1));

  // Shared inline styles
  const inputStyle: React.CSSProperties = { background: "rgba(12,0,4,0.8)", borderColor: "rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" };
  const cardBg: React.CSSProperties = { background: "linear-gradient(145deg, #140008 0%, #170009 100%)" };

  const presetOptions: { id: Preset; label: string }[] = [
    { id: "thisMonth", label: "This Month" },
    { id: "lastMonth", label: "Last Month" },
    { id: "thisQuarter", label: "This Quarter" },
    { id: "ytd", label: "Year to Date" },
    { id: "allTime", label: "All Time" },
  ];

  return (
    <div className="bg-[#170009] min-h-screen pb-24">
      {/* Sticky sub-header */}
      <div className="sticky top-16 z-10 border-b" style={{ background: "rgba(10,0,3,0.96)", backdropFilter: "blur(16px)", borderColor: "rgba(162,140,117,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs">
            <Link href="/members/resources/operations" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={12} /> Operations
            </Link>
            <span style={{ color: "rgba(162,140,117,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,253,246,0.78)" }}>Consultation Conversion Tracker</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            <div className="flex rounded-lg border overflow-hidden" style={{ borderColor: "rgba(162,140,117,0.2)" }}>
              {(["log", "report"] as const).map((v) => (
                <button key={v} onClick={() => setView(v)} className="px-3 py-1.5 text-xs tracking-wide transition-colors"
                  style={{ background: view === v ? "rgba(162,140,117,0.18)" : "transparent", color: view === v ? "#fffdf6" : "rgba(255,253,246,0.35)" }}>
                  {v === "log" ? "Log Consultations" : "Reports"}
                </button>
              ))}
            </div>

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
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Operations</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Consultation Conversion Tracker</h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            Log consultations by provider and service type, then run reports for any date range to see conversion rates and track notes on what drove the numbers.
          </p>
        </div>

        {/* ════════════ LOG VIEW ════════════ */}
        {view === "log" && (
          <div className="space-y-10">
            {/* Providers */}
            <div className="rounded-xl border p-6" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              <div className="flex items-center gap-2 mb-1">
                <Users size={14} style={{ color: "#a28c75" }} />
                <h2 className="text-sm font-medium" style={{ color: "#fffdf6" }}>Providers</h2>
              </div>
              <p className="text-xs mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                Add each provider who runs consultations — you&apos;ll select from this list when logging entries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {data.providers.length === 0 && (
                  <span className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No providers added yet.</span>
                )}
                {data.providers.map((p) => (
                  <span key={p} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}>
                    {p}
                    <button onClick={() => removeProvider(p)} className="opacity-50 hover:opacity-100 transition-opacity"><X size={11} /></button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2 max-w-sm">
                <input type="text" placeholder="e.g. Dr. Patel, Sarah (RN)" value={newProvider}
                  onChange={(e) => setNewProvider(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addProvider()}
                  className="flex-1 text-xs px-4 py-2 rounded-lg border outline-none" style={inputStyle} />
                <button onClick={addProvider} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors"
                  style={{ background: "rgba(162,140,117,0.1)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                  <Plus size={12} /> Add
                </button>
              </div>
            </div>

            {/* Consultation Types */}
            <div className="rounded-xl border p-6" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              <div className="flex items-center gap-2 mb-1">
                <BarChart3 size={14} style={{ color: "#a28c75" }} />
                <h2 className="text-sm font-medium" style={{ color: "#fffdf6" }}>Consultation Types</h2>
              </div>
              <p className="text-xs mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                Pre-loaded with common categories — edit, remove, or add your own service types.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {data.consultTypes.length === 0 && (
                  <span className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No consultation types added yet.</span>
                )}
                {data.consultTypes.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}>
                    {t}
                    <button onClick={() => removeConsultType(t)} className="opacity-50 hover:opacity-100 transition-opacity"><X size={11} /></button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2 max-w-sm">
                <input type="text" placeholder="e.g. Weight Loss Consult" value={newType}
                  onChange={(e) => setNewType(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addConsultType()}
                  className="flex-1 text-xs px-4 py-2 rounded-lg border outline-none" style={inputStyle} />
                <button onClick={addConsultType} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors"
                  style={{ background: "rgba(162,140,117,0.1)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                  <Plus size={12} /> Add
                </button>
              </div>
            </div>

            {/* Consultation Log */}
            <div className="rounded-xl border overflow-hidden" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              <div className="px-6 pt-6 pb-4 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>Consultation Log</h2>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>
                    One row per provider + service type combination for a given day. Enter how many purchased and how many didn&apos;t.
                  </p>
                </div>
                <button onClick={addEntry} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                  <Plus size={12} /> Add Consultation
                </button>
              </div>

              {sortedEntries.length === 0 ? (
                <div className="px-6 py-8">
                  <p className="text-xs italic text-center" style={{ color: "rgba(255,253,246,0.28)" }}>
                    No consultations logged yet. Click &quot;Add Consultation&quot; to start tracking.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  {/* Column header */}
                  <div className="grid gap-3 px-6 py-2.5 text-xs tracking-[0.12em] uppercase"
                    style={{ gridTemplateColumns: "150px 1fr 1fr 100px 130px 70px 32px", minWidth: "820px", background: "rgba(162,140,117,0.06)", borderTop: "1px solid rgba(162,140,117,0.1)", borderBottom: "1px solid rgba(162,140,117,0.1)", color: "rgba(162,140,117,0.6)" }}>
                    <span>Date</span>
                    <span>Provider</span>
                    <span>Consult Type</span>
                    <span className="text-right">Purchased</span>
                    <span className="text-right">Did Not Purchase</span>
                    <span className="text-right">Rate</span>
                    <span />
                  </div>

                  <div className="divide-y" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                    {sortedEntries.map((entry) => {
                      const total = num(entry.purchased) + num(entry.notPurchased);
                      const rate = total > 0 ? (num(entry.purchased) / total) * 100 : null;
                      return (
                        <div key={entry.id} className="grid gap-3 px-6 py-4 items-center"
                          style={{ gridTemplateColumns: "150px 1fr 1fr 100px 130px 70px 32px", minWidth: "820px" }}>
                          <input type="date" value={entry.date} onChange={(e) => updateEntry(entry.id, "date", e.target.value)}
                            className="w-full text-xs px-3 py-2 rounded-lg border outline-none" style={inputStyle} />

                          <div className="relative">
                            <select value={entry.provider} onChange={(e) => updateEntry(entry.id, "provider", e.target.value)}
                              className="appearance-none w-full text-xs px-3 py-2 pr-7 rounded-lg border cursor-pointer"
                              style={{ ...inputStyle, color: entry.provider ? "#fffdf6" : "rgba(255,253,246,0.25)" }}>
                              <option value="">Select provider</option>
                              {data.providers.map((p) => <option key={p} value={p}>{p}</option>)}
                            </select>
                            <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(162,140,117,0.45)" }} />
                          </div>

                          <div className="relative">
                            <select value={entry.consultType} onChange={(e) => updateEntry(entry.id, "consultType", e.target.value)}
                              className="appearance-none w-full text-xs px-3 py-2 pr-7 rounded-lg border cursor-pointer"
                              style={{ ...inputStyle, color: entry.consultType ? "#fffdf6" : "rgba(255,253,246,0.25)" }}>
                              <option value="">Select type</option>
                              {data.consultTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                            <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(162,140,117,0.45)" }} />
                          </div>

                          <input type="number" min={0} step={1} placeholder="0" value={entry.purchased}
                            onChange={(e) => updateEntry(entry.id, "purchased", e.target.value)}
                            className="w-full text-xs text-right px-3 py-2 rounded-lg border outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            style={inputStyle} />

                          <input type="number" min={0} step={1} placeholder="0" value={entry.notPurchased}
                            onChange={(e) => updateEntry(entry.id, "notPurchased", e.target.value)}
                            className="w-full text-xs text-right px-3 py-2 rounded-lg border outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            style={inputStyle} />

                          <div className="text-right">
                            {rate !== null ? (
                              <span className="text-xs font-medium" style={{ color: "#a28c75" }}>{rate.toFixed(0)}%</span>
                            ) : (
                              <span className="text-xs" style={{ color: "rgba(255,253,246,0.22)" }}>—</span>
                            )}
                          </div>

                          <div className="flex justify-center">
                            <button onClick={() => removeEntry(entry.id)} className="opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Notes */}
            <div className="rounded-xl border overflow-hidden" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              <div className="px-6 pt-6 pb-4 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <StickyNote size={14} style={{ color: "#a28c75" }} />
                  <div>
                    <h2 className="text-sm font-medium" style={{ color: "#fffdf6" }}>Notes</h2>
                    <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>
                      Attach a note to any date — e.g. explain why June&apos;s conversion rate was what it was. Notes show up in reports covering that date.
                    </p>
                  </div>
                </div>
                <button onClick={addNote} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                  <Plus size={12} /> Add Note
                </button>
              </div>

              <div className="divide-y" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                {data.notes.length === 0 && (
                  <div className="px-6 py-8">
                    <p className="text-xs italic text-center" style={{ color: "rgba(255,253,246,0.28)" }}>No notes yet.</p>
                  </div>
                )}
                {[...data.notes].sort((a, b) => (a.date < b.date ? 1 : -1)).map((note) => (
                  <div key={note.id} className="px-6 py-4 flex flex-col sm:flex-row gap-3">
                    <input type="date" value={note.date} onChange={(e) => updateNote(note.id, "date", e.target.value)}
                      className="w-full sm:w-36 flex-shrink-0 text-xs px-3 py-2 rounded-lg border outline-none" style={inputStyle} />
                    <textarea value={note.text} onChange={(e) => updateNote(note.id, "text", e.target.value)}
                      placeholder="What happened this period? Any context for the numbers..."
                      rows={2} className="flex-1 text-xs px-4 py-3 rounded-lg border outline-none resize-none leading-relaxed" style={inputStyle} />
                    <button onClick={() => removeNote(note.id)} className="opacity-40 hover:opacity-80 transition-opacity flex-shrink-0 self-start sm:self-center" style={{ color: "#e07878" }}>
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ════════════ REPORT VIEW ════════════ */}
        {view === "report" && (
          <div>
            {/* Date range filter */}
            <div className="rounded-xl border p-5 mb-8" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={13} style={{ color: "#a28c75" }} />
                <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>Date Range</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {presetOptions.map((p) => (
                  <button key={p.id} onClick={() => applyPreset(p.id)}
                    className="text-xs px-3 py-1.5 rounded-lg border transition-colors"
                    style={{
                      background: preset === p.id ? "rgba(162,140,117,0.18)" : "transparent",
                      borderColor: preset === p.id ? "rgba(162,140,117,0.4)" : "rgba(162,140,117,0.2)",
                      color: preset === p.id ? "#fffdf6" : "rgba(162,140,117,0.6)",
                    }}>
                    {p.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>From</span>
                  <input type="date" value={rangeStart} onChange={(e) => { setRangeStart(e.target.value); setPreset("custom"); }}
                    className="text-xs px-3 py-2 rounded-lg border outline-none" style={inputStyle} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>To</span>
                  <input type="date" value={rangeEnd} onChange={(e) => { setRangeEnd(e.target.value); setPreset("custom"); }}
                    className="text-xs px-3 py-2 rounded-lg border outline-none" style={inputStyle} />
                </div>
                <span className="text-xs ml-auto" style={{ color: "rgba(162,140,117,0.5)" }}>{formatRangeLabel(rangeStart, rangeEnd)}</span>
              </div>
            </div>

            {/* Summary tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="rounded-xl border p-6" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>Total Consultations</p>
                <p className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>{overallTotal}</p>
              </div>
              <div className="rounded-xl border p-6" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>Purchased</p>
                <p className="font-display text-3xl font-light" style={{ color: "#7ecf7e" }}>{overall.purchased}</p>
              </div>
              <div className="rounded-xl border p-6" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>Conversion Rate</p>
                <p className="font-display text-3xl font-light" style={{ color: "#a28c75" }}>{overallTotal > 0 ? `${overallRate.toFixed(1)}%` : "—"}</p>
              </div>
            </div>

            {overallTotal === 0 ? (
              <div className="rounded-xl border p-10 text-center mb-10" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                <p className="text-sm" style={{ color: "rgba(255,253,246,0.4)" }}>No consultations logged in this date range.</p>
              </div>
            ) : (
              <>
                {/* By Provider */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>By Provider</h2>
                    <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
                  </div>
                  <GroupTable rows={byProvider} label="Provider" />
                </div>

                {/* By Consult Type */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>By Consultation Type</h2>
                    <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
                  </div>
                  <GroupTable rows={byType} label="Consultation Type" />
                </div>
              </>
            )}

            {/* Notes for period */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Notes for This Period</h2>
                <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
                <button onClick={() => setView("log")} className="text-xs flex-shrink-0 hover:opacity-80 transition-opacity" style={{ color: "rgba(162,140,117,0.6)" }}>
                  + Add a note
                </button>
              </div>
              {filteredNotes.length === 0 ? (
                <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No notes logged for this date range.</p>
              ) : (
                <div className="space-y-3">
                  {filteredNotes.map((note) => (
                    <div key={note.id} className="rounded-xl border p-5 flex flex-col sm:flex-row gap-3" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                      <span className="text-xs font-medium flex-shrink-0 sm:w-28" style={{ color: "#a28c75" }}>{formatDateLabel(note.date)}</span>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.75)" }}>{note.text || <span className="italic" style={{ color: "rgba(255,253,246,0.28)" }}>Empty note</span>}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Report table ─────────────────────────────────────────────────────────────

function GroupTable({ rows, label }: { rows: GroupStat[]; label: string }) {
  const maxRate = Math.max(...rows.map((r) => r.rate), 1);
  return (
    <div className="rounded-xl border overflow-hidden overflow-x-auto" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
      <div className="grid text-xs tracking-[0.12em] uppercase px-5 py-3"
        style={{ gridTemplateColumns: "1fr 90px 100px 130px 200px", background: "rgba(162,140,117,0.06)", borderBottom: "1px solid rgba(162,140,117,0.1)", color: "rgba(162,140,117,0.6)", minWidth: "600px" }}>
        <span>{label}</span>
        <span className="text-right">Total</span>
        <span className="text-right">Purchased</span>
        <span className="text-right">Did Not Purchase</span>
        <span className="text-right">Conversion Rate</span>
      </div>
      {rows.map((r, i) => (
        <div key={r.name} className="grid items-center px-5 py-4"
          style={{ gridTemplateColumns: "1fr 90px 100px 130px 200px", background: i % 2 === 0 ? "rgba(20,0,8,0.5)" : "rgba(12,0,4,0.5)", minWidth: "600px", borderTop: i > 0 ? "1px solid rgba(162,140,117,0.05)" : undefined }}>
          <p className="text-sm" style={{ color: "#fffdf6" }}>{r.name}</p>
          <p className="text-sm text-right" style={{ color: "rgba(255,253,246,0.65)" }}>{r.total}</p>
          <p className="text-sm text-right" style={{ color: "#7ecf7e" }}>{r.purchased}</p>
          <p className="text-sm text-right" style={{ color: "#e07878" }}>{r.notPurchased}</p>
          <div className="flex items-center gap-3 justify-end">
            <div className="h-1.5 flex-1 max-w-[90px] rounded-full overflow-hidden" style={{ background: "rgba(255,253,246,0.06)" }}>
              <div className="h-full rounded-full" style={{ width: `${(r.rate / maxRate) * 100}%`, background: "#a28c75" }} />
            </div>
            <span className="text-sm font-medium w-12 text-right" style={{ color: "#fffdf6" }}>{r.rate.toFixed(0)}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
