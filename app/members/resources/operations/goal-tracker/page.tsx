"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Printer,
  Eye,
  Settings2,
  Copy,
  Target,
  Save,
  Check,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface ProgressEntry {
  id: string;
  date: string;
  currentValue: number;
  businessDaysRemaining: number;
}

type Cadence = "Daily" | "Weekly";

interface Goal {
  id: string;
  label: string;
  unit: string;
  targetValue: number;
  manualCadence: Cadence;
  manualTarget: number;
  notes: string;
  entries: ProgressEntry[];
}

interface GoalStack {
  id: string;
  name: string;
  teamMember: string;
  startDate: string;
  endDate: string;
  accentColor: string;
  goals: Goal[];
  createdAt: string;
}

interface StoreData {
  stacks: GoalStack[];
}

// ── Defaults ─────────────────────────────────────────────────────────────────

const colorPresets = [
  { label: "Burgundy", value: "#4a0018" },
  { label: "Navy", value: "#1e2a4a" },
  { label: "Forest", value: "#1f3d2f" },
  { label: "Slate", value: "#3d5a80" },
  { label: "Rose", value: "#8b4055" },
  { label: "Plum", value: "#4a1d6b" },
  { label: "Charcoal", value: "#2c2c2c" },
  { label: "Teal", value: "#0f4e5e" },
];

function uid() {
  return Math.random().toString(36).slice(2, 11);
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function monthEndISO(): string {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).toISOString().slice(0, 10);
}

function newGoal(label = "New Goal"): Goal {
  return {
    id: uid(),
    label,
    unit: "$",
    targetValue: 0,
    manualCadence: "Daily",
    manualTarget: 0,
    notes: "",
    entries: [],
  };
}

function newStack(): GoalStack {
  return {
    id: uid(),
    name: "New Goal Stack",
    teamMember: "",
    startDate: todayISO(),
    endDate: monthEndISO(),
    accentColor: "#4a0018",
    goals: [newGoal("Monthly Treatment Revenue")],
    createdAt: new Date().toISOString(),
  };
}

// Plain "YYYY-MM-DD" strings (from <input type="date">) parse as UTC midnight,
// which rolls back a day once toLocaleDateString applies a timezone behind UTC.
// Only full ISO timestamps (createdAt) should parse as-is.
function parseLocalDate(iso: string): Date {
  return iso.includes("T") ? new Date(iso) : new Date(`${iso}T00:00:00`);
}

function formatDateShort(iso: string): string {
  if (!iso) return "";
  try {
    return parseLocalDate(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

function formatDateMed(iso: string): string {
  if (!iso) return "";
  try {
    return parseLocalDate(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
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

function formatNumber(n: number, unit: string): string {
  const rounded = Math.round(n * 100) / 100;
  if (unit === "$") return `$${rounded.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
  if (unit === "%") return `${rounded.toLocaleString("en-US", { maximumFractionDigits: 2 })}%`;
  return `${rounded.toLocaleString("en-US", { maximumFractionDigits: 2 })} ${unit}`;
}

function isPercentGoal(goal: Goal): boolean {
  return goal.unit.trim() === "%";
}

function sortedEntriesAsc(goal: Goal): ProgressEntry[] {
  return [...goal.entries].sort((a, b) => (a.date < b.date ? -1 : 1));
}

function latestEntry(goal: Goal): ProgressEntry | null {
  const sorted = sortedEntriesAsc(goal);
  return sorted.length ? sorted[sorted.length - 1] : null;
}

// Cumulative goals ($ / units / patients): remaining = target - current,
// pace needed per business day = remaining ÷ days left.
//
// Percentage goals (unit === "%"): the target is an AVERAGE the whole period
// needs to hit, not a running total — logging 72% on day 7 of 20 doesn't mean
// 8% is "remaining." Instead we back out how many business days have already
// elapsed (the gap between the first log's "days remaining" and the latest
// log's "days remaining"), then solve for the average still needed across the
// days left so the whole-period average lands on target:
//   requiredAvg = (target × totalDays − avgSoFar × daysElapsed) ÷ daysLeft
function goalStats(goal: Goal) {
  const businessDaysLeft = latestEntry(goal)?.businessDaysRemaining ?? null;

  if (isPercentGoal(goal)) {
    const sorted = sortedEntriesAsc(goal);
    const first = sorted[0] ?? null;
    const latest = sorted[sorted.length - 1] ?? null;
    const avgSoFar = latest?.currentValue ?? 0;
    const daysElapsed = first && latest && first.id !== latest.id
      ? Math.max(0, first.businessDaysRemaining - latest.businessDaysRemaining)
      : 0;
    const totalDays = businessDaysLeft !== null ? daysElapsed + businessDaysLeft : null;
    const requiredAvg =
      businessDaysLeft && businessDaysLeft > 0 && totalDays
        ? (goal.targetValue * totalDays - avgSoFar * daysElapsed) / businessDaysLeft
        : null;
    const onPaceOrAhead =
      businessDaysLeft !== null && businessDaysLeft <= 0
        ? avgSoFar >= goal.targetValue
        : requiredAvg !== null && requiredAvg <= avgSoFar;
    return { isPercent: true as const, current: avgSoFar, remaining: null, businessDaysLeft, daysElapsed, paceNeeded: requiredAvg, onPaceOrAhead };
  }

  const current = latestEntry(goal)?.currentValue ?? 0;
  const remaining = goal.targetValue - current;
  const paceNeeded = businessDaysLeft && businessDaysLeft > 0 ? remaining / businessDaysLeft : null;
  const onPaceOrAhead = remaining <= 0;
  return { isPercent: false as const, current, remaining, businessDaysLeft, daysElapsed: null as number | null, paceNeeded, onPaceOrAhead };
}

// ── Component ────────────────────────────────────────────────────────────────

export default function GoalTrackerPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>({ stacks: [] });
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [editingField, setEditingField] = useState<string | null>(null);
  const [entryDrafts, setEntryDrafts] = useState<Record<string, { date: string; value: string; days: string }>>({});

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_goal_stacks_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({ stacks: Array.isArray(parsed.stacks) ? parsed.stacks : [] });
        if (parsed._savedAt) setLastSaved(parsed._savedAt);
      }
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey) return;
    const t = setTimeout(() => {
      const now = new Date().toISOString();
      localStorage.setItem(storageKey, JSON.stringify({ ...data, _savedAt: now }));
      setLastSaved(now);
    }, 800);
    return () => clearTimeout(t);
  }, [data, storageKey]);

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

  const handlePrint = () => window.print();

  // ── Stack CRUD ──

  function createStack() {
    const s = newStack();
    setData((prev) => ({ stacks: [s, ...prev.stacks] }));
    setActiveId(s.id);
    setView("editor");
    setActiveTab("edit");
  }
  function duplicateStack(id: string) {
    setData((prev) => {
      const src = prev.stacks.find((s) => s.id === id);
      if (!src) return prev;
      const copy: GoalStack = {
        ...src,
        id: uid(),
        name: `${src.name} (Copy)`,
        createdAt: new Date().toISOString(),
        goals: src.goals.map((g) => ({ ...g, id: uid(), entries: g.entries.map((e) => ({ ...e, id: uid() })) })),
      };
      return { stacks: [copy, ...prev.stacks] };
    });
  }
  function deleteStack(id: string) {
    setData((prev) => ({ stacks: prev.stacks.filter((s) => s.id !== id) }));
    if (activeId === id) {
      setActiveId(null);
      setView("list");
    }
  }
  function openStack(id: string) {
    setActiveId(id);
    setView("editor");
    setActiveTab("edit");
  }
  function updateStackField<K extends keyof GoalStack>(id: string, field: K, value: GoalStack[K]) {
    setData((prev) => ({ stacks: prev.stacks.map((s) => (s.id === id ? { ...s, [field]: value } : s)) }));
  }

  // ── Goal CRUD ──

  function addGoal(stackId: string) {
    const g = newGoal();
    setData((prev) => ({ stacks: prev.stacks.map((s) => (s.id === stackId ? { ...s, goals: [...s.goals, g] } : s)) }));
    setEditingField(`goal:${g.id}`);
  }
  function updateGoalField<K extends keyof Goal>(stackId: string, goalId: string, field: K, value: Goal[K]) {
    setData((prev) => ({
      stacks: prev.stacks.map((s) =>
        s.id === stackId ? { ...s, goals: s.goals.map((g) => (g.id === goalId ? { ...g, [field]: value } : g)) } : s
      ),
    }));
  }
  function deleteGoal(stackId: string, goalId: string) {
    setData((prev) => ({ stacks: prev.stacks.map((s) => (s.id === stackId ? { ...s, goals: s.goals.filter((g) => g.id !== goalId) } : s)) }));
  }

  // ── Progress entry CRUD ──

  function addEntry(stackId: string, goalId: string) {
    const draft = entryDrafts[goalId];
    if (!draft || !draft.date || draft.value.trim() === "") return;
    const entry: ProgressEntry = {
      id: uid(),
      date: draft.date,
      currentValue: parseFloat(draft.value) || 0,
      businessDaysRemaining: parseFloat(draft.days) || 0,
    };
    setData((prev) => ({
      stacks: prev.stacks.map((s) =>
        s.id === stackId ? { ...s, goals: s.goals.map((g) => (g.id === goalId ? { ...g, entries: [...g.entries, entry] } : g)) } : s
      ),
    }));
    setEntryDrafts((prev) => ({ ...prev, [goalId]: { date: todayISO(), value: "", days: "" } }));
  }
  function deleteEntry(stackId: string, goalId: string, entryId: string) {
    setData((prev) => ({
      stacks: prev.stacks.map((s) =>
        s.id === stackId
          ? { ...s, goals: s.goals.map((g) => (g.id === goalId ? { ...g, entries: g.entries.filter((e) => e.id !== entryId) } : g)) }
          : s
      ),
    }));
  }

  function getDraft(goalId: string) {
    return entryDrafts[goalId] ?? { date: todayISO(), value: "", days: "" };
  }
  function setDraft(goalId: string, field: "date" | "value" | "days", value: string) {
    setEntryDrafts((prev) => ({ ...prev, [goalId]: { ...getDraft(goalId), [field]: value } }));
  }

  const active = data.stacks.find((s) => s.id === activeId) ?? null;
  const sortedStacks = [...data.stacks].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  // ── Render ───────────────────────────────────────────────────────────────

  if (view === "list" || !active) {
    return (
      <div className="min-h-screen" style={{ background: "#0c0004" }}>
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 flex-wrap" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <Link href="/members/resources/operations" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70" style={{ color: "rgba(162,140,117,0.6)" }}>
            <ArrowLeft size={13} />
            Operations
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
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Operations</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Goal Tracker</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.4)" }}>
            Set goals for a period, log progress as you go, and see exactly how far off pace you are — and what you need to hit per business day to still get there. Print a worksheet for the team to fill in by hand, then log it back in.
          </p>

          {/* New goal stack */}
          <button onClick={createStack} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
            style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
            <div className="flex items-center gap-4">
              <Target size={20} style={{ color: "#a28c75" }} />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Goal Stack</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>Set goals for a person, team, or the whole practice over a date range.</p>
              </div>
            </div>
          </button>

          {/* Saved stacks */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Saved Goal Stacks</h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          {sortedStacks.length === 0 ? (
            <div className="rounded-xl border p-10 text-center" style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.35)" }}>No goal stacks saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedStacks.map((s) => (
                <div key={s.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                    <Target size={17} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openStack(s.id)}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{s.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: "rgba(162,140,117,0.75)" }}>
                        {s.goals.length} goal{s.goals.length === 1 ? "" : "s"}
                      </span>
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.35)" }}>
                      {s.teamMember.trim() ? `${s.teamMember} · ` : ""}{formatDateShort(s.startDate)} – {formatDateShort(s.endDate)} · Created {formatDateShort(s.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => openStack(s.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                      Open
                    </button>
                    <button onClick={() => duplicateStack(s.id)} title="Duplicate" className="p-2 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                      <Copy size={14} />
                    </button>
                    <button onClick={() => deleteStack(s.id)} title="Delete" className="p-2 opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
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

  // ── EDITOR ───────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .print-preview-pane { display: block !important; }
          #goal-print-preview, #goal-print-preview * { visibility: visible; }
          #goal-print-preview {
            display: block !important;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0;
            margin: 0;
          }
        }
      `}</style>

      <div className="min-h-screen" style={{ background: "#0c0004" }}>
        {/* Header */}
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center gap-4 min-w-0">
            <button onClick={() => { setView("list"); setActiveId(null); }} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70 flex-shrink-0" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              My Goal Stacks
            </button>
            <span style={{ color: "rgba(162,140,117,0.2)" }}>·</span>
            <span className="text-sm truncate" style={{ color: "rgba(255,253,246,0.5)" }}>{active.name}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {lastSaved && !savedFlash && (
              <span className="text-xs hidden md:block" style={{ color: "rgba(162,140,117,0.4)" }}>Auto-saved {relativeTime(lastSaved)}</span>
            )}
            <button onClick={handleSave} className="hidden sm:flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-all"
              style={{ background: savedFlash ? "rgba(162,140,117,0.2)" : "transparent", borderColor: "rgba(162,140,117,0.25)", color: savedFlash ? "#a28c75" : "rgba(162,140,117,0.55)" }}>
              {savedFlash ? <Check size={12} /> : <Save size={12} />}
              {savedFlash ? "Saved!" : "Save"}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ background: active.accentColor, color: "#fffdf6", border: "none" }}
            >
              <Printer size={13} />
              Print / Save PDF
            </button>
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden flex border-b no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          {(["edit", "preview"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="flex-1 py-3 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-colors"
              style={{ color: activeTab === tab ? "#a28c75" : "rgba(255,253,246,0.35)", borderBottom: activeTab === tab ? "2px solid #a28c75" : "2px solid transparent" }}>
              {tab === "edit" ? <Settings2 size={12} /> : <Eye size={12} />}
              {tab === "edit" ? "Customize" : "Worksheet"}
            </button>
          ))}
        </div>

        {/* Main layout */}
        <div className="flex h-[calc(100vh-73px)] md:h-[calc(100vh-73px)] overflow-hidden">
          {/* Editor panel */}
          <div className={`overflow-y-auto flex-shrink-0 no-print ${activeTab === "edit" ? "flex" : "hidden"} md:flex flex-col`}
            style={{ width: "100%", maxWidth: "460px", borderRight: "1px solid rgba(162,140,117,0.1)", background: "#0c0004" }}>
            <div className="p-5 space-y-6">
              {/* Stack details */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Stack Details</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Stack Name</label>
                    <input type="text" value={active.name} onChange={(e) => updateStackField(active.id, "name", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Team Member <span style={{ color: "rgba(255,253,246,0.25)" }}>(optional)</span></label>
                    <input type="text" value={active.teamMember} onChange={(e) => updateStackField(active.id, "teamMember", e.target.value)} placeholder="e.g. Jamie Rivera, or leave blank for practice-wide"
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Start Date</label>
                      <input type="date" value={active.startDate} onChange={(e) => updateStackField(active.id, "startDate", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>End Date</label>
                      <input type="date" value={active.endDate} onChange={(e) => updateStackField(active.id, "endDate", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                    </div>
                  </div>
                </div>
              </section>

              {/* Accent color */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Accent Color</p>
                <div className="flex flex-wrap gap-2">
                  {colorPresets.map((preset) => (
                    <button key={preset.value} onClick={() => updateStackField(active.id, "accentColor", preset.value)} title={preset.label}
                      className="w-8 h-8 rounded-lg transition-all duration-150"
                      style={{ background: preset.value, outline: active.accentColor === preset.value ? "2px solid #a28c75" : "2px solid transparent", outlineOffset: "2px" }} />
                  ))}
                </div>
              </section>

              {/* Goals */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.6)" }}>Goals</p>
                  <button onClick={() => addGoal(active.id)} className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <Plus size={12} />
                    Add goal
                  </button>
                </div>

                <div className="space-y-5">
                  {active.goals.map((goal) => {
                    const stats = goalStats(goal);
                    const draft = getDraft(goal.id);
                    const sortedEntries = [...goal.entries].sort((a, b) => (a.date < b.date ? 1 : -1));
                    return (
                      <div key={goal.id} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                        {/* Header */}
                        <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                          {editingField === `goal:${goal.id}` ? (
                            <input autoFocus type="text" value={goal.label} onChange={(e) => updateGoalField(active.id, goal.id, "label", e.target.value)}
                              onBlur={() => setEditingField(null)} onKeyDown={(e) => e.key === "Enter" && setEditingField(null)}
                              className="flex-1 text-xs font-medium bg-transparent outline-none" style={{ color: "#fffdf6" }} />
                          ) : (
                            <span className="flex-1 text-xs font-medium cursor-text" style={{ color: "#fffdf6" }} onClick={() => setEditingField(`goal:${goal.id}`)}>
                              {goal.label}
                            </span>
                          )}
                          <button onClick={() => deleteGoal(active.id, goal.id)} className="flex-shrink-0 transition-opacity hover:opacity-70 p-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                            <Trash2 size={12} />
                          </button>
                        </div>

                        <div className="p-3 space-y-3" style={{ background: "rgba(0,0,0,0.15)" }}>
                          {/* Target + unit */}
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-xs mb-1 block" style={{ color: "rgba(255,253,246,0.35)" }}>Target for Period</label>
                              <input type="number" value={goal.targetValue || ""} onChange={(e) => updateGoalField(active.id, goal.id, "targetValue", parseFloat(e.target.value) || 0)}
                                className="w-full text-xs rounded-lg px-2.5 py-2 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                            </div>
                            <div>
                              <label className="text-xs mb-1 block" style={{ color: "rgba(255,253,246,0.35)" }}>Unit</label>
                              <input type="text" value={goal.unit} onChange={(e) => updateGoalField(active.id, goal.id, "unit", e.target.value)} placeholder="$, units, patients..."
                                className="w-full text-xs rounded-lg px-2.5 py-2 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                            </div>
                          </div>

                          {/* Manual daily/weekly goal */}
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-xs mb-1 block" style={{ color: "rgba(255,253,246,0.35)" }}>Manual Goal Cadence</label>
                              <select value={goal.manualCadence} onChange={(e) => updateGoalField(active.id, goal.id, "manualCadence", e.target.value as Cadence)}
                                className="w-full text-xs rounded-lg px-2.5 py-2 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }}>
                                <option style={{ color: "#000" }}>Daily</option>
                                <option style={{ color: "#000" }}>Weekly</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-xs mb-1 block" style={{ color: "rgba(255,253,246,0.35)" }}>{goal.manualCadence} Goal</label>
                              <input type="number" value={goal.manualTarget || ""} onChange={(e) => updateGoalField(active.id, goal.id, "manualTarget", parseFloat(e.target.value) || 0)}
                                className="w-full text-xs rounded-lg px-2.5 py-2 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                            </div>
                          </div>

                          {/* Computed stats */}
                          <div className="rounded-lg p-2.5 grid grid-cols-2 gap-x-2 gap-y-1.5" style={{ background: "rgba(162,140,117,0.06)" }}>
                            <div>
                              <p className="text-[10px] uppercase tracking-wide" style={{ color: "rgba(255,253,246,0.3)" }}>{stats.isPercent ? "Average So Far" : "Current"}</p>
                              <p className="text-xs font-medium" style={{ color: "#fffdf6" }}>{formatNumber(stats.current, goal.unit)}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wide" style={{ color: "rgba(255,253,246,0.3)" }}>{stats.isPercent ? "Target Average" : "Remaining"}</p>
                              {stats.isPercent ? (
                                <p className="text-xs font-medium" style={{ color: "#fffdf6" }}>{formatNumber(goal.targetValue, goal.unit)}</p>
                              ) : (
                                <p className="text-xs font-medium" style={{ color: stats.onPaceOrAhead ? "#7ecf7e" : "#fffdf6" }}>{stats.onPaceOrAhead ? "Goal met!" : formatNumber(stats.remaining ?? 0, goal.unit)}</p>
                              )}
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wide" style={{ color: "rgba(255,253,246,0.3)" }}>Business Days Left</p>
                              <p className="text-xs font-medium" style={{ color: "#fffdf6" }}>{stats.businessDaysLeft ?? "—"}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wide" style={{ color: "rgba(255,253,246,0.3)" }}>{stats.isPercent ? "Avg Needed Going Forward" : "Pace Needed / Day"}</p>
                              <p className="text-xs font-medium" style={{ color: stats.isPercent && stats.onPaceOrAhead ? "#7ecf7e" : "#e0b84a" }}>
                                {stats.isPercent
                                  ? stats.businessDaysLeft !== null && stats.businessDaysLeft <= 0
                                    ? (stats.onPaceOrAhead ? "Goal met!" : "Period ended")
                                    : stats.paceNeeded !== null
                                    ? formatNumber(stats.paceNeeded, goal.unit)
                                    : "Enter days left"
                                  : stats.onPaceOrAhead
                                  ? "—"
                                  : stats.paceNeeded !== null
                                  ? formatNumber(stats.paceNeeded, goal.unit)
                                  : "Enter days left"}
                              </p>
                            </div>
                          </div>

                          {/* Notes */}
                          <div>
                            <label className="text-xs mb-1 block" style={{ color: "rgba(255,253,246,0.35)" }}>Notes</label>
                            <textarea value={goal.notes} onChange={(e) => updateGoalField(active.id, goal.id, "notes", e.target.value)} rows={2} placeholder="Context, exceptions, why a number moved..."
                              className="w-full text-xs rounded-lg px-2.5 py-2 outline-none resize-none leading-relaxed placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                          </div>

                          {/* Progress log */}
                          <div>
                            <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.35)" }}>Progress Log</label>
                            {sortedEntries.length > 0 && (
                              <div className="space-y-1 mb-2">
                                {sortedEntries.map((e) => (
                                  <div key={e.id} className="flex items-center gap-2 text-xs group" style={{ color: "rgba(255,253,246,0.6)" }}>
                                    <span className="w-14 flex-shrink-0" style={{ color: "rgba(255,253,246,0.4)" }}>{formatDateMed(e.date)}</span>
                                    <span className="flex-1">{formatNumber(e.currentValue, goal.unit)} · {e.businessDaysRemaining} day{e.businessDaysRemaining === 1 ? "" : "s"} left</span>
                                    <button onClick={() => deleteEntry(active.id, goal.id, e.id)} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: "rgba(162,140,117,0.4)" }}>
                                      <Trash2 size={10} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                            <div className="flex items-center gap-1.5">
                              <input type="date" value={draft.date} onChange={(e) => setDraft(goal.id, "date", e.target.value)}
                                className="text-xs rounded px-1.5 py-1.5 outline-none flex-shrink-0" style={{ width: "108px", background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                              <input type="number" value={draft.value} onChange={(e) => setDraft(goal.id, "value", e.target.value)} placeholder="Total"
                                className="text-xs rounded px-1.5 py-1.5 outline-none flex-1 min-w-0 placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                              <input type="number" value={draft.days} onChange={(e) => setDraft(goal.id, "days", e.target.value)} placeholder="Days left"
                                className="text-xs rounded px-1.5 py-1.5 outline-none flex-1 min-w-0 placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                              <button onClick={() => addEntry(active.id, goal.id)} className="flex-shrink-0 p-1.5 rounded transition-opacity hover:opacity-80" style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75" }}>
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {active.goals.length === 0 && (
                    <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.25)" }}>No goals yet — add one above.</p>
                  )}
                </div>
              </section>
            </div>
          </div>

          {/* Preview / worksheet panel */}
          <div className={`print-preview-pane flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`} style={{ background: "#e8e0d8" }}>
            <div className="flex items-center justify-between px-6 py-3 no-print" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Live Preview — this is how your worksheet will print</span>
              <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: active.accentColor, color: "#fffdf6" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div id="goal-print-preview" style={{ background: "white", width: "100%", maxWidth: "740px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "10pt" }}>
                {/* Header */}
                <div style={{ borderBottom: `4px solid ${active.accentColor}`, padding: "26px 36px 18px" }}>
                  <div style={{ fontSize: "18pt", fontWeight: "bold", color: active.accentColor, letterSpacing: "0.03em", fontFamily: "Arial, sans-serif" }}>
                    {active.name}
                  </div>
                  <div style={{ display: "flex", gap: "28px", marginTop: "8px", fontFamily: "Arial, sans-serif", fontSize: "9pt", color: "#555" }}>
                    {active.teamMember.trim() && <span>{active.teamMember}</span>}
                    <span>{formatDateShort(active.startDate)} – {formatDateShort(active.endDate)}</span>
                  </div>
                </div>

                <div style={{ padding: "20px 36px 0" }}>
                  {active.goals.map((goal, idx) => {
                    const stats = goalStats(goal);
                    return (
                      <div key={goal.id} style={{ marginBottom: "22px", paddingBottom: "18px", borderBottom: idx === active.goals.length - 1 ? "none" : "1px solid #eee" }}>
                        <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.02em", marginBottom: "6px" }}>
                          {goal.label} <span style={{ fontSize: "9pt", fontWeight: "normal", color: "#888" }}>({goal.unit})</span>
                        </div>

                        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "8px" }}>
                          <tbody>
                            <tr>
                              <td style={{ padding: "4px 12px 4px 0", fontSize: "8pt", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stats.isPercent ? "Target Avg" : "Target"}</td>
                              <td style={{ padding: "4px 12px 4px 0", fontSize: "8pt", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stats.isPercent ? "Avg So Far" : "Current"}</td>
                              <td style={{ padding: "4px 12px 4px 0", fontSize: "8pt", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stats.isPercent ? "Biz Days Elapsed" : "Remaining"}</td>
                              <td style={{ padding: "4px 12px 4px 0", fontSize: "8pt", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>Biz Days Left</td>
                              <td style={{ padding: "4px 0", fontSize: "8pt", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stats.isPercent ? "Avg Needed Going Forward" : "Pace Needed / Day"}</td>
                            </tr>
                            <tr>
                              <td style={{ padding: "2px 12px 2px 0", fontSize: "10pt", fontWeight: "bold" }}>{formatNumber(goal.targetValue, goal.unit)}</td>
                              <td style={{ padding: "2px 12px 2px 0", fontSize: "10pt" }}>{formatNumber(stats.current, goal.unit)}</td>
                              {stats.isPercent ? (
                                <td style={{ padding: "2px 12px 2px 0", fontSize: "10pt" }}>{stats.daysElapsed ?? "—"}</td>
                              ) : (
                                <td style={{ padding: "2px 12px 2px 0", fontSize: "10pt", color: stats.onPaceOrAhead ? "#2e7d32" : "#1a1a1a" }}>{stats.onPaceOrAhead ? "Met" : formatNumber(stats.remaining ?? 0, goal.unit)}</td>
                              )}
                              <td style={{ padding: "2px 12px 2px 0", fontSize: "10pt" }}>{stats.businessDaysLeft ?? "—"}</td>
                              <td style={{ padding: "2px 0", fontSize: "10pt", fontWeight: "bold", color: stats.isPercent && stats.onPaceOrAhead ? "#2e7d32" : active.accentColor }}>
                                {stats.isPercent
                                  ? stats.businessDaysLeft !== null && stats.businessDaysLeft <= 0
                                    ? (stats.onPaceOrAhead ? "Met" : "Period ended")
                                    : stats.paceNeeded !== null
                                    ? formatNumber(stats.paceNeeded, goal.unit)
                                    : "—"
                                  : stats.onPaceOrAhead
                                  ? "—"
                                  : stats.paceNeeded !== null
                                  ? formatNumber(stats.paceNeeded, goal.unit)
                                  : "—"}
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div style={{ fontSize: "8.5pt", color: "#555", marginBottom: "8px" }}>
                          Manually set {goal.manualCadence.toLowerCase()} goal: <span style={{ color: "#1a1a1a", fontWeight: "bold" }}>{formatNumber(goal.manualTarget, goal.unit)}</span>
                        </div>

                        {goal.notes.trim() && (
                          <div style={{ fontSize: "8.5pt", color: "#555", fontStyle: "italic", marginBottom: "10px" }}>
                            Notes: {goal.notes}
                          </div>
                        )}

                        {/* Fill-in log for team member */}
                        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                          <colgroup>
                            <col style={{ width: "22%" }} />
                            <col style={{ width: "26%" }} />
                            <col style={{ width: "26%" }} />
                            <col style={{ width: "26%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th style={{ padding: "6px 6px 6px 0", textAlign: "left", fontSize: "7pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.05em", borderBottom: `1.5px solid ${active.accentColor}` }}>DATE</th>
                              <th style={{ padding: "6px", textAlign: "left", fontSize: "7pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.05em", borderBottom: `1.5px solid ${active.accentColor}` }}>NEW TOTAL</th>
                              <th style={{ padding: "6px", textAlign: "left", fontSize: "7pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.05em", borderBottom: `1.5px solid ${active.accentColor}` }}>BIZ DAYS LEFT</th>
                              <th style={{ padding: "6px 0", textAlign: "left", fontSize: "7pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.05em", borderBottom: `1.5px solid ${active.accentColor}` }}>INITIALS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[0, 1, 2, 3].map((i) => (
                              <tr key={i}>
                                <td style={{ padding: "9px 6px 9px 0", borderBottom: "1px solid #eee" }}>&nbsp;</td>
                                <td style={{ padding: "9px 6px", borderBottom: "1px solid #eee" }}>&nbsp;</td>
                                <td style={{ padding: "9px 6px", borderBottom: "1px solid #eee" }}>&nbsp;</td>
                                <td style={{ padding: "9px 0", borderBottom: "1px solid #eee" }}>&nbsp;</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  })}

                  {active.goals.length === 0 && (
                    <div style={{ padding: "40px 0", textAlign: "center", color: "#999", fontSize: "9.5pt" }}>
                      Add a goal to see it here.
                    </div>
                  )}
                </div>

                <div style={{ height: "28px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
