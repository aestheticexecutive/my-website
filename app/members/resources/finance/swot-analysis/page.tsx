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
  Compass,
  Save,
  Check,
  Star,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface SwotItem {
  id: string;
  text: string;
  priority: boolean;
}

interface ActionRow {
  id: string;
  item: string;
  actionStep: string;
}

type Quadrant = "strengths" | "weaknesses" | "opportunities" | "threats";

interface SwotAnalysis {
  id: string;
  name: string;
  focus: string;
  quarter: string;
  dateCompleted: string;
  completedBy: string;
  accentColor: string;
  strengths: SwotItem[];
  weaknesses: SwotItem[];
  opportunities: SwotItem[];
  threats: SwotItem[];
  actions: Record<Quadrant, ActionRow[]>;
  createdAt: string;
}

interface StoreData {
  analyses: SwotAnalysis[];
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

const quadrantMeta: Record<Quadrant, { label: string; tag: string; questions: string[]; actionLabel: string; actionVerb: string }> = {
  strengths: {
    label: "Strengths",
    tag: "Internal, Positive",
    questions: [
      "What advantages does your med spa have?",
      "What do patients love about you?",
      "What unique resources or capabilities do you have?",
    ],
    actionLabel: "Strengths to Leverage",
    actionVerb: "leverage",
  },
  weaknesses: {
    label: "Weaknesses",
    tag: "Internal, Negative",
    questions: [
      "What areas need improvement?",
      "What complaints or issues do you face?",
      "Where are you lacking resources, skills, or systems?",
    ],
    actionLabel: "Weaknesses to Address",
    actionVerb: "address",
  },
  opportunities: {
    label: "Opportunities",
    tag: "External, Positive",
    questions: [
      "What trends can you take advantage of?",
      "Are there new services or markets to explore?",
    ],
    actionLabel: "Opportunities to Seize",
    actionVerb: "seize",
  },
  threats: {
    label: "Threats",
    tag: "External, Negative",
    questions: [
      "What external risks could hurt your business?",
      "What competitors, regulations, or economic changes concern you?",
    ],
    actionLabel: "Threats to Mitigate",
    actionVerb: "mitigate",
  },
};

const quadrantOrder: Quadrant[] = ["strengths", "weaknesses", "opportunities", "threats"];

function uid() {
  return Math.random().toString(36).slice(2, 11);
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function currentQuarterLabel(): string {
  const d = new Date();
  const q = Math.floor(d.getMonth() / 3) + 1;
  return `Q${q} ${d.getFullYear()}`;
}

function newAnalysis(): SwotAnalysis {
  return {
    id: uid(),
    name: `${currentQuarterLabel()} SWOT Analysis`,
    focus: "",
    quarter: currentQuarterLabel(),
    dateCompleted: todayISO(),
    completedBy: "",
    accentColor: "#4a0018",
    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: [],
    actions: { strengths: [], weaknesses: [], opportunities: [], threats: [] },
    createdAt: new Date().toISOString(),
  };
}

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

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SwotAnalysisPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>({ analyses: [] });
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [itemDrafts, setItemDrafts] = useState<Record<Quadrant, string>>({ strengths: "", weaknesses: "", opportunities: "", threats: "" });

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_swot_analyses_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({ analyses: Array.isArray(parsed.analyses) ? parsed.analyses : [] });
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

  // ── Analysis-level CRUD ──

  function createAnalysis() {
    const a = newAnalysis();
    setData((prev) => ({ analyses: [a, ...prev.analyses] }));
    setActiveId(a.id);
    setView("editor");
    setActiveTab("edit");
  }
  function duplicateAnalysis(id: string) {
    setData((prev) => {
      const src = prev.analyses.find((a) => a.id === id);
      if (!src) return prev;
      const remapItems = (items: SwotItem[]) => items.map((it) => ({ ...it, id: uid() }));
      const remapActions = (rows: ActionRow[]) => rows.map((r) => ({ ...r, id: uid() }));
      const copy: SwotAnalysis = {
        ...src,
        id: uid(),
        name: `${src.name} (Copy)`,
        createdAt: new Date().toISOString(),
        strengths: remapItems(src.strengths),
        weaknesses: remapItems(src.weaknesses),
        opportunities: remapItems(src.opportunities),
        threats: remapItems(src.threats),
        actions: {
          strengths: remapActions(src.actions.strengths),
          weaknesses: remapActions(src.actions.weaknesses),
          opportunities: remapActions(src.actions.opportunities),
          threats: remapActions(src.actions.threats),
        },
      };
      return { analyses: [copy, ...prev.analyses] };
    });
  }
  function deleteAnalysis(id: string) {
    setData((prev) => ({ analyses: prev.analyses.filter((a) => a.id !== id) }));
    if (activeId === id) {
      setActiveId(null);
      setView("list");
    }
  }
  function openAnalysis(id: string) {
    setActiveId(id);
    setView("editor");
    setActiveTab("edit");
  }
  function updateField<K extends keyof SwotAnalysis>(id: string, field: K, value: SwotAnalysis[K]) {
    setData((prev) => ({ analyses: prev.analyses.map((a) => (a.id === id ? { ...a, [field]: value } : a)) }));
  }

  // ── Quadrant item CRUD ──

  function addItem(analysisId: string, quadrant: Quadrant) {
    const text = itemDrafts[quadrant].trim();
    if (!text) return;
    const item: SwotItem = { id: uid(), text, priority: false };
    setData((prev) => ({
      analyses: prev.analyses.map((a) => (a.id === analysisId ? { ...a, [quadrant]: [...a[quadrant], item] } : a)),
    }));
    setItemDrafts((prev) => ({ ...prev, [quadrant]: "" }));
  }
  function toggleItemPriority(analysisId: string, quadrant: Quadrant, itemId: string) {
    setData((prev) => ({
      analyses: prev.analyses.map((a) =>
        a.id === analysisId ? { ...a, [quadrant]: a[quadrant].map((it) => (it.id === itemId ? { ...it, priority: !it.priority } : it)) } : a
      ),
    }));
  }
  function deleteItem(analysisId: string, quadrant: Quadrant, itemId: string) {
    setData((prev) => ({
      analyses: prev.analyses.map((a) => (a.id === analysisId ? { ...a, [quadrant]: a[quadrant].filter((it) => it.id !== itemId) } : a)),
    }));
  }

  // ── Action plan CRUD ──

  function addActionRow(analysisId: string, quadrant: Quadrant) {
    const row: ActionRow = { id: uid(), item: "", actionStep: "" };
    setData((prev) => ({
      analyses: prev.analyses.map((a) => (a.id === analysisId ? { ...a, actions: { ...a.actions, [quadrant]: [...a.actions[quadrant], row] } } : a)),
    }));
  }
  function updateActionRow(analysisId: string, quadrant: Quadrant, rowId: string, field: "item" | "actionStep", value: string) {
    setData((prev) => ({
      analyses: prev.analyses.map((a) =>
        a.id === analysisId
          ? { ...a, actions: { ...a.actions, [quadrant]: a.actions[quadrant].map((r) => (r.id === rowId ? { ...r, [field]: value } : r)) } }
          : a
      ),
    }));
  }
  function deleteActionRow(analysisId: string, quadrant: Quadrant, rowId: string) {
    setData((prev) => ({
      analyses: prev.analyses.map((a) =>
        a.id === analysisId ? { ...a, actions: { ...a.actions, [quadrant]: a.actions[quadrant].filter((r) => r.id !== rowId) } } : a
      ),
    }));
  }

  const active = data.analyses.find((a) => a.id === activeId) ?? null;
  const sortedAnalyses = [...data.analyses].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  function itemCount(a: SwotAnalysis): number {
    return a.strengths.length + a.weaknesses.length + a.opportunities.length + a.threats.length;
  }

  // ── Render ───────────────────────────────────────────────────────────────

  if (view === "list" || !active) {
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
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>SWOT Analysis Tool</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.5)" }}>
            Work through your Strengths, Weaknesses, Opportunities, and Threats, flag your top priorities, and build a 30-day action plan — then print it or save it under this quarter&apos;s name to compare against next quarter.
          </p>

          {/* New analysis */}
          <button onClick={createAnalysis} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
            style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
            <div className="flex items-center gap-4">
              <Compass size={20} style={{ color: "#a28c75" }} />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New SWOT Analysis</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Starts fresh for {currentQuarterLabel()} — rename it however fits your practice.</p>
              </div>
            </div>
          </button>

          {/* Saved analyses */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Saved Analyses</h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          {sortedAnalyses.length === 0 ? (
            <div className="rounded-xl border p-10 text-center" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>No SWOT analyses saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedAnalyses.map((a) => (
                <div key={a.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                    <Compass size={17} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openAnalysis(a.id)}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{a.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: "rgba(162,140,117,0.75)" }}>
                        {a.quarter}
                      </span>
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {a.focus.trim() ? `${a.focus} · ` : ""}{itemCount(a)} items · Created {formatDateShort(a.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => openAnalysis(a.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                      Open
                    </button>
                    <button onClick={() => duplicateAnalysis(a.id)} title="Duplicate" className="p-2 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                      <Copy size={14} />
                    </button>
                    <button onClick={() => deleteAnalysis(a.id)} title="Delete" className="p-2 opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
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
          #swot-print-preview, #swot-print-preview * { visibility: visible; }
          #swot-print-preview {
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

      <div className="min-h-screen" style={{ background: "#170009" }}>
        {/* Header */}
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center gap-4 min-w-0">
            <button onClick={() => { setView("list"); setActiveId(null); }} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70 flex-shrink-0" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              My Analyses
            </button>
            <span style={{ color: "rgba(162,140,117,0.2)" }}>·</span>
            <span className="text-sm truncate" style={{ color: "rgba(255,253,246,0.6)" }}>{active.name}</span>
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
              {tab === "edit" ? "Customize" : "Preview"}
            </button>
          ))}
        </div>

        {/* Main layout */}
        <div className="flex h-[calc(100vh-73px)] md:h-[calc(100vh-73px)] overflow-hidden">
          {/* Editor panel */}
          <div className={`overflow-y-auto flex-shrink-0 no-print ${activeTab === "edit" ? "flex" : "hidden"} md:flex flex-col`}
            style={{ width: "100%", maxWidth: "460px", borderRight: "1px solid rgba(162,140,117,0.1)", background: "#170009" }}>
            <div className="p-5 space-y-6">
              {/* Analysis details */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Analysis Details</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Name</label>
                    <input type="text" value={active.name} onChange={(e) => updateField(active.id, "name", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Focus of This SWOT</label>
                    <input type="text" value={active.focus} onChange={(e) => updateField(active.id, "focus", e.target.value)} placeholder="e.g. Entire practice, a location, a service line, a new initiative"
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Quarter</label>
                      <input type="text" value={active.quarter} onChange={(e) => updateField(active.id, "quarter", e.target.value)} placeholder="e.g. Q1 2026"
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Date Completed</label>
                      <input type="date" value={active.dateCompleted} onChange={(e) => updateField(active.id, "dateCompleted", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Completed By</label>
                    <input type="text" value={active.completedBy} onChange={(e) => updateField(active.id, "completedBy", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                </div>
              </section>

              {/* Accent color */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Accent Color</p>
                <div className="flex flex-wrap gap-2">
                  {colorPresets.map((preset) => (
                    <button key={preset.value} onClick={() => updateField(active.id, "accentColor", preset.value)} title={preset.label}
                      className="w-8 h-8 rounded-lg transition-all duration-150"
                      style={{ background: preset.value, outline: active.accentColor === preset.value ? "2px solid #a28c75" : "2px solid transparent", outlineOffset: "2px" }} />
                  ))}
                </div>
              </section>

              {/* Quadrants */}
              {quadrantOrder.map((quadrant) => {
                const meta = quadrantMeta[quadrant];
                const items = active[quadrant];
                return (
                  <section key={quadrant}>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>{meta.label}</p>
                    <p className="text-[10px] italic mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>{meta.tag}</p>
                    <ul className="mb-2 space-y-0.5">
                      {meta.questions.map((q) => (
                        <li key={q} className="text-[11px] leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>· {q}</li>
                      ))}
                    </ul>
                    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                      <div className="py-1.5 px-3 space-y-0.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                        {items.length === 0 && (
                          <p className="text-xs italic py-1.5" style={{ color: "rgba(255,253,246,0.28)" }}>No {meta.label.toLowerCase()} listed yet.</p>
                        )}
                        {items.map((it) => (
                          <div key={it.id} className="flex items-start gap-2 py-1.5 group">
                            <button onClick={() => toggleItemPriority(active.id, quadrant, it.id)} className="flex-shrink-0 mt-0.5 transition-opacity hover:opacity-80" title="Mark as top priority">
                              <Star size={13} fill={it.priority ? "#e0b84a" : "none"} style={{ color: it.priority ? "#e0b84a" : "rgba(162,140,117,0.4)" }} />
                            </button>
                            <span className="flex-1 text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.75)" }}>{it.text}</span>
                            <button onClick={() => deleteItem(active.id, quadrant, it.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                              <Trash2 size={11} />
                            </button>
                          </div>
                        ))}
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <input type="text" value={itemDrafts[quadrant]} onChange={(e) => setItemDrafts((prev) => ({ ...prev, [quadrant]: e.target.value }))}
                            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addItem(active.id, quadrant); } }}
                            placeholder={`Add a ${meta.label.slice(0, -1).toLowerCase()}...`}
                            className="flex-1 text-xs bg-transparent outline-none placeholder:opacity-30 py-1" style={{ color: "#fffdf6" }} />
                          <button onClick={() => addItem(active.id, quadrant)} className="flex-shrink-0 p-1 rounded transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.65)" }}>
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}

              {/* Action plan */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Action Plan</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Star your top 2–3 items in each quadrant above, then write one action to take on each in the next 30 days.
                </p>
                <div className="space-y-4">
                  {quadrantOrder.map((quadrant) => {
                    const meta = quadrantMeta[quadrant];
                    const rows = active.actions[quadrant];
                    return (
                      <div key={quadrant} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                        <div className="px-3 py-2" style={{ background: "rgba(162,140,117,0.07)" }}>
                          <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{meta.actionLabel}</span>
                        </div>
                        <div className="p-3 space-y-2.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                          {rows.length === 0 && (
                            <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No actions yet.</p>
                          )}
                          {rows.map((row) => (
                            <div key={row.id} className="space-y-1.5 pb-2.5 border-b last:border-b-0" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                              <div className="flex items-center gap-1.5">
                                <input type="text" value={row.item} onChange={(e) => updateActionRow(active.id, quadrant, row.id, "item", e.target.value)} placeholder={`Which ${meta.label.slice(0, -1).toLowerCase()}?`}
                                  className="flex-1 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                                <button onClick={() => deleteActionRow(active.id, quadrant, row.id)} className="flex-shrink-0" style={{ color: "rgba(162,140,117,0.4)" }}>
                                  <Trash2 size={12} />
                                </button>
                              </div>
                              <input type="text" value={row.actionStep} onChange={(e) => updateActionRow(active.id, quadrant, row.id, "actionStep", e.target.value)} placeholder={`Action step to ${meta.actionVerb} it...`}
                                className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                            </div>
                          ))}
                          <button onClick={() => addActionRow(active.id, quadrant)} className="flex items-center gap-1.5 text-xs pt-1 transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.55)" }}>
                            <Plus size={11} />
                            Add action
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>

          {/* Preview panel */}
          <div className={`print-preview-pane flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`} style={{ background: "#e8e0d8" }}>
            <div className="flex items-center justify-between px-6 py-3 no-print" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Live Preview — this is how your SWOT will print</span>
              <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: active.accentColor, color: "#fffdf6" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div id="swot-print-preview" style={{ background: "white", width: "100%", maxWidth: "780px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "9.5pt" }}>
                {/* Header */}
                <div style={{ borderBottom: `4px solid ${active.accentColor}`, padding: "24px 32px 16px" }}>
                  <div style={{ fontSize: "17pt", fontWeight: "bold", color: active.accentColor, letterSpacing: "0.02em", fontFamily: "Arial, sans-serif" }}>
                    {active.name}
                  </div>
                  <div style={{ display: "flex", gap: "24px", marginTop: "8px", flexWrap: "wrap", fontFamily: "Arial, sans-serif", fontSize: "8.5pt", color: "#555" }}>
                    {active.focus.trim() && <span>Focus: {active.focus}</span>}
                    <span>Quarter: {active.quarter || "—"}</span>
                    <span>Date: {formatDateShort(active.dateCompleted) || "—"}</span>
                    {active.completedBy.trim() && <span>Completed by: {active.completedBy}</span>}
                  </div>
                </div>

                {/* 2x2 Matrix */}
                <div style={{ padding: "18px 32px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
                  {quadrantOrder.map((quadrant) => {
                    const meta = quadrantMeta[quadrant];
                    const items = active[quadrant];
                    return (
                      <div key={quadrant} style={{ padding: "10px 14px", border: "1px solid #eee" }}>
                        <div style={{ fontSize: "10.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor }}>
                          {meta.label} <span style={{ fontSize: "7.5pt", fontWeight: "normal", color: "#999" }}>({meta.tag})</span>
                        </div>
                        <div style={{ fontSize: "7.5pt", color: "#999", fontStyle: "italic", marginTop: "3px", marginBottom: "8px", lineHeight: 1.5 }}>
                          {meta.questions.join(" · ")}
                        </div>
                        {items.length === 0 ? (
                          <div style={{ fontSize: "8.5pt", color: "#ccc" }}>(none listed)</div>
                        ) : (
                          <ol style={{ margin: 0, paddingLeft: "16px" }}>
                            {items.map((it) => (
                              <li key={it.id} style={{ fontSize: "9pt", lineHeight: 1.6, color: it.priority ? "#1a1a1a" : "#333", fontWeight: it.priority ? "bold" : "normal" }}>
                                {it.text}{it.priority ? " ★" : ""}
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Action plan */}
                <div style={{ padding: "20px 32px 24px" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "4px" }}>
                    Action Plan
                  </div>
                  <div style={{ fontSize: "8pt", color: "#999", marginBottom: "10px" }}>One action for each top-priority item, over the next 30 days.</div>
                  {quadrantOrder.map((quadrant) => {
                    const meta = quadrantMeta[quadrant];
                    const rows = active.actions[quadrant];
                    if (rows.length === 0) return null;
                    return (
                      <div key={quadrant} style={{ marginBottom: "12px" }}>
                        <div style={{ fontSize: "9pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", marginBottom: "4px" }}>{meta.actionLabel}</div>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                          <colgroup>
                            <col style={{ width: "35%" }} />
                            <col style={{ width: "65%" }} />
                          </colgroup>
                          <tbody>
                            {rows.map((row) => (
                              <tr key={row.id}>
                                <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.item || "—"}</td>
                                <td style={{ padding: "4px 0", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.actionStep || "—"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  })}
                  {quadrantOrder.every((q) => active.actions[q].length === 0) && (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>No action items added yet.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
