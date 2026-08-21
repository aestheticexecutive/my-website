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
  Headset,
  Save,
  Check,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface BulletItem {
  id: string;
  text: string;
}

const powerAreaOrder = ["revenue", "patientExperience", "efficiency", "marketing"] as const;
type PowerArea = (typeof powerAreaOrder)[number];

const powerAreaLabels: Record<PowerArea, string> = {
  revenue: "Revenue",
  patientExperience: "Patient Experience",
  efficiency: "Efficiency",
  marketing: "Marketing",
};

type GapAnswer = "" | "Yes" | "No";

interface PowerAreaEntry {
  contribution: string;
  gap: GapAnswer;
}

interface TrainingRow {
  id: string;
  initiative: string;
  implementation: string;
  notes: string;
}

interface FrontDeskPlan {
  id: string;
  name: string;
  dateCompleted: string;
  completedBy: string;
  accentColor: string;
  responsibilities: BulletItem[];
  strengths: string;
  opportunities: string;
  powerAreas: Record<PowerArea, PowerAreaEntry>;
  mysteryShopInsights: string;
  goals: BulletItem[];
  training: TrainingRow[];
  whatToTrack: string;
  reviewCadence: string;
  celebratePlan: string;
  rewardIdeas: BulletItem[];
  createdAt: string;
}

interface StoreData {
  plans: FrontDeskPlan[];
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

function newPlan(): FrontDeskPlan {
  return {
    id: uid(),
    name: "Front Desk Power Plan",
    dateCompleted: todayISO(),
    completedBy: "",
    accentColor: "#4a0018",
    responsibilities: [],
    strengths: "",
    opportunities: "",
    powerAreas: {
      revenue: { contribution: "Upsell add-ons, retail, membership sign-ups", gap: "" },
      patientExperience: { contribution: "Personalize greetings, manage flow", gap: "" },
      efficiency: { contribution: "Reduce no-shows, fill schedule gaps", gap: "" },
      marketing: { contribution: "Collect reviews, promote packages", gap: "" },
    },
    mysteryShopInsights: "",
    goals: [],
    training: [
      { id: uid(), initiative: "Create upsell / rebooking scripts", implementation: "Train during team meeting", notes: "Include role-play" },
      { id: uid(), initiative: "Teach retail recommendations", implementation: "Demo products, set goals", notes: "Reward top performer" },
      { id: uid(), initiative: "Review request process", implementation: "Script + signage at checkout", notes: "Make it part of checkout" },
      { id: uid(), initiative: "Schedule management tactics", implementation: "Show how to fill gaps", notes: "Use daily huddle" },
    ],
    whatToTrack: "",
    reviewCadence: "",
    celebratePlan: "",
    rewardIdeas: [],
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

type BulletField = "responsibilities" | "goals" | "rewardIdeas";

// ── Component ────────────────────────────────────────────────────────────────

export default function FrontDeskToolPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>({ plans: [] });
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [drafts, setDrafts] = useState<Record<BulletField, string>>({ responsibilities: "", goals: "", rewardIdeas: "" });

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_front_desk_plans_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({ plans: Array.isArray(parsed.plans) ? parsed.plans : [] });
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

  // ── Plan-level CRUD ──

  function createPlan() {
    const p = newPlan();
    setData((prev) => ({ plans: [p, ...prev.plans] }));
    setActiveId(p.id);
    setView("editor");
    setActiveTab("edit");
  }
  function duplicatePlan(id: string) {
    setData((prev) => {
      const src = prev.plans.find((p) => p.id === id);
      if (!src) return prev;
      const copy: FrontDeskPlan = {
        ...JSON.parse(JSON.stringify(src)),
        id: uid(),
        name: `${src.name} (Copy)`,
        createdAt: new Date().toISOString(),
      };
      return { plans: [copy, ...prev.plans] };
    });
  }
  function deletePlan(id: string) {
    setData((prev) => ({ plans: prev.plans.filter((p) => p.id !== id) }));
    if (activeId === id) {
      setActiveId(null);
      setView("list");
    }
  }
  function openPlan(id: string) {
    setActiveId(id);
    setView("editor");
    setActiveTab("edit");
  }
  function updateField<K extends keyof FrontDeskPlan>(id: string, field: K, value: FrontDeskPlan[K]) {
    setData((prev) => ({ plans: prev.plans.map((p) => (p.id === id ? { ...p, [field]: value } : p)) }));
  }

  // ── Bullet list CRUD ──

  function addBullet(planId: string, field: BulletField, text: string) {
    if (!text.trim()) return;
    const item: BulletItem = { id: uid(), text: text.trim() };
    setData((prev) => ({
      plans: prev.plans.map((p) => (p.id === planId ? { ...p, [field]: [...p[field], item] } : p)),
    }));
  }
  function deleteBullet(planId: string, field: BulletField, itemId: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) => (p.id === planId ? { ...p, [field]: p[field].filter((it) => it.id !== itemId) } : p)),
    }));
  }

  // ── Power area updates ──

  function updatePowerArea(planId: string, area: PowerArea, field: keyof PowerAreaEntry, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) =>
        p.id === planId
          ? { ...p, powerAreas: { ...p.powerAreas, [area]: { ...p.powerAreas[area], [field]: value } } }
          : p
      ),
    }));
  }

  // ── Training table CRUD ──

  function addTraining(planId: string) {
    const row: TrainingRow = { id: uid(), initiative: "", implementation: "", notes: "" };
    setData((prev) => ({ plans: prev.plans.map((p) => (p.id === planId ? { ...p, training: [...p.training, row] } : p)) }));
  }
  function updateTraining(planId: string, rowId: string, field: keyof Omit<TrainingRow, "id">, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) =>
        p.id === planId ? { ...p, training: p.training.map((r) => (r.id === rowId ? { ...r, [field]: value } : r)) } : p
      ),
    }));
  }
  function deleteTraining(planId: string, rowId: string) {
    setData((prev) => ({ plans: prev.plans.map((p) => (p.id === planId ? { ...p, training: p.training.filter((r) => r.id !== rowId) } : p)) }));
  }

  const active = data.plans.find((p) => p.id === activeId) ?? null;
  const sortedPlans = [...data.plans].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const inputStyle = { background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" };

  function renderBulletSection(planId: string, field: BulletField, placeholder: string, hint?: string) {
    if (!active) return null;
    const items = active[field];
    return (
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
        <div className="p-3 space-y-1" style={{ background: "rgba(0,0,0,0.15)" }}>
          {items.length === 0 && hint && (
            <p className="text-xs italic py-1" style={{ color: "rgba(255,253,246,0.28)" }}>{hint}</p>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex items-start gap-2 py-1 group">
              <span className="flex-1 text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.75)" }}>{it.text}</span>
              <button onClick={() => deleteBullet(planId, field, it.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                <Trash2 size={11} />
              </button>
            </div>
          ))}
          <div className="flex items-center gap-1.5 mt-1.5">
            <input type="text" value={drafts[field]} onChange={(e) => setDrafts((prev) => ({ ...prev, [field]: e.target.value }))}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addBullet(planId, field, drafts[field]); setDrafts((prev) => ({ ...prev, [field]: "" })); } }}
              placeholder={placeholder} className="flex-1 text-xs bg-transparent outline-none placeholder:opacity-30 py-1" style={{ color: "#fffdf6" }} />
            <button onClick={() => { addBullet(planId, field, drafts[field]); setDrafts((prev) => ({ ...prev, [field]: "" })); }} className="flex-shrink-0 p-1 rounded transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.65)" }}>
              <Plus size={13} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render ───────────────────────────────────────────────────────────────

  if (view === "list" || !active) {
    return (
      <div className="min-h-screen" style={{ background: "#170009" }}>
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
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Front Desk Power Tool</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.5)" }}>
            Audit current front desk responsibilities, define the power potential across revenue,
            experience, efficiency, and marketing, mystery shop the experience, and build a real
            training and reward plan — pre-loaded with the source template&apos;s example
            contributions and training initiatives.
          </p>

          {/* New plan */}
          <button onClick={createPlan} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
            style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
            <div className="flex items-center gap-4">
              <Headset size={20} style={{ color: "#a28c75" }} />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Front Desk Plan</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Starts pre-loaded with example power-area contributions and training initiatives — edit or delete anything.</p>
              </div>
            </div>
          </button>

          {/* Saved plans */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Saved Plans</h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          {sortedPlans.length === 0 ? (
            <div className="rounded-xl border p-10 text-center" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>No front desk plans saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedPlans.map((p) => (
                <div key={p.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                    <Headset size={17} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openPlan(p.id)}>
                    <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {p.responsibilities.length} responsibilities · {p.training.length} training initiatives · Created {formatDateShort(p.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => openPlan(p.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                      Open
                    </button>
                    <button onClick={() => duplicatePlan(p.id)} title="Duplicate" className="p-2 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                      <Copy size={14} />
                    </button>
                    <button onClick={() => deletePlan(p.id)} title="Delete" className="p-2 opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
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
          #front-desk-print-preview, #front-desk-print-preview * { visibility: visible; }
          #front-desk-print-preview {
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
              My Plans
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
              {/* Plan details */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Plan Details</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Name</label>
                    <input type="text" value={active.name} onChange={(e) => updateField(active.id, "name", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={inputStyle} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Date Completed</label>
                      <input type="date" value={active.dateCompleted} onChange={(e) => updateField(active.id, "dateCompleted", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ ...inputStyle, colorScheme: "dark" }} />
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Completed By</label>
                      <input type="text" value={active.completedBy} onChange={(e) => updateField(active.id, "completedBy", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={inputStyle} />
                    </div>
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

              {/* Step 1: Audit */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 1 · Audit Current Roles + Impact</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  e.g. greeting & check-in, upselling add-ons or retail, booking future appointments, handling payments, managing scheduling gaps
                </p>
                {renderBulletSection(active.id, "responsibilities", "Add a responsibility...", "No responsibilities added yet.")}
                <div className="space-y-2 mt-3">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Strengths</label>
                    <textarea rows={2} value={active.strengths} onChange={(e) => updateField(active.id, "strengths", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Opportunities</label>
                    <textarea rows={2} value={active.opportunities} onChange={(e) => updateField(active.id, "opportunities", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none" style={inputStyle} />
                  </div>
                </div>
              </section>

              {/* Step 2: Power potential */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 2 · Front Desk Power Potential</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Pre-loaded with example contributions per area — edit and flag where the current gap is.
                </p>
                <div className="space-y-2.5">
                  {powerAreaOrder.map((area) => {
                    const entry = active.powerAreas[area];
                    return (
                      <div key={area} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                        <div className="px-3 py-1.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                          <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{powerAreaLabels[area]}</span>
                        </div>
                        <div className="p-3 space-y-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                          <div>
                            <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>How front desk could contribute</label>
                            <input type="text" value={entry.contribution} onChange={(e) => updatePowerArea(active.id, area, "contribution", e.target.value)}
                              className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                          </div>
                          <div>
                            <label className="text-[10px] mb-1.5 block" style={{ color: "rgba(255,253,246,0.45)" }}>Current gap?</label>
                            <div className="flex gap-1.5">
                              {(["Yes", "No"] as const).map((opt) => (
                                <button key={opt} onClick={() => updatePowerArea(active.id, area, "gap", entry.gap === opt ? "" : opt)}
                                  className="flex-1 text-xs py-1.5 rounded transition-colors"
                                  style={{
                                    background: entry.gap === opt ? "rgba(162,140,117,0.25)" : "rgba(162,140,117,0.07)",
                                    border: `1px solid ${entry.gap === opt ? "#a28c75" : "rgba(162,140,117,0.2)"}`,
                                    color: entry.gap === opt ? "#fffdf6" : "rgba(255,253,246,0.5)",
                                  }}>
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Step 3: Mystery shop */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 3 · Mystery Shop the Experience</p>
                <ul className="mb-2 space-y-0.5">
                  {["How welcoming is the greeting?", "How well do they explain services or guide booking?", "Are upsells offered naturally?", "Is follow-up clear?"].map((q) => (
                    <li key={q} className="text-[11px] leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>· {q}</li>
                  ))}
                </ul>
                <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Key insights</label>
                <textarea rows={3} value={active.mysteryShopInsights} onChange={(e) => updateField(active.id, "mysteryShopInsights", e.target.value)}
                  className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none" style={inputStyle} />
              </section>

              {/* Step 4: Goals */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 4 · Set Clear Front Desk Goals</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  e.g. upsell rate X%, rebooking rate X%, X reviews collected per month, X% inquiry-to-consult conversion
                </p>
                {renderBulletSection(active.id, "goals", "Add a goal...", "No goals added yet.")}
              </section>

              {/* Step 5: Training plan */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 5 · Empowerment &amp; Training Plan</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Pre-loaded with the 4 example initiatives — edit, delete, or add your own.
                </p>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="p-3 space-y-2.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.training.length === 0 && (
                      <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No initiatives yet.</p>
                    )}
                    {active.training.map((row) => (
                      <div key={row.id} className="space-y-1.5 pb-2.5 border-b last:border-b-0" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                        <div className="flex items-center gap-1.5">
                          <input type="text" value={row.initiative} onChange={(e) => updateTraining(active.id, row.id, "initiative", e.target.value)} placeholder="Initiative"
                            className="flex-1 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                          <button onClick={() => deleteTraining(active.id, row.id)} className="flex-shrink-0" style={{ color: "rgba(162,140,117,0.4)" }}>
                            <Trash2 size={12} />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <input type="text" value={row.implementation} onChange={(e) => updateTraining(active.id, row.id, "implementation", e.target.value)} placeholder="How you'll implement"
                            className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                          <input type="text" value={row.notes} onChange={(e) => updateTraining(active.id, row.id, "notes", e.target.value)} placeholder="Notes"
                            className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        </div>
                      </div>
                    ))}
                    <button onClick={() => addTraining(active.id)} className="flex items-center gap-1.5 text-xs pt-1 transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.55)" }}>
                      <Plus size={11} />
                      Add initiative
                    </button>
                  </div>
                </div>
              </section>

              {/* Step 6: Tracking + feedback */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 6 · Tracking + Feedback System</p>
                <div className="space-y-2">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>What you'll track</label>
                    <input type="text" value={active.whatToTrack} onChange={(e) => updateField(active.id, "whatToTrack", e.target.value)}
                      placeholder="e.g. rebooking %, upsell revenue, reviews" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>How often you'll review</label>
                    <input type="text" value={active.reviewCadence} onChange={(e) => updateField(active.id, "reviewCadence", e.target.value)}
                      placeholder="e.g. weekly huddles, monthly 1:1s" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>How you'll celebrate wins + coach gaps</label>
                    <textarea rows={2} value={active.celebratePlan} onChange={(e) => updateField(active.id, "celebratePlan", e.target.value)}
                      placeholder="e.g. incentives, positive feedback" className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                </div>
              </section>

              {/* Step 7: Recognize + reward */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 7 · Recognize + Reward</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  e.g. monthly bonus for hitting upsell targets, shout-out in team meetings, gift card or spa service reward
                </p>
                {renderBulletSection(active.id, "rewardIdeas", "Add an idea...", "No reward ideas added yet.")}
              </section>
            </div>
          </div>

          {/* Preview panel */}
          <div className={`print-preview-pane flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`} style={{ background: "#e8e0d8" }}>
            <div className="flex items-center justify-between px-6 py-3 no-print" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Live Preview — this is how your plan will print</span>
              <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: active.accentColor, color: "#fffdf6" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div id="front-desk-print-preview" style={{ background: "white", width: "100%", maxWidth: "780px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "9.5pt" }}>
                {/* Header */}
                <div style={{ borderBottom: `4px solid ${active.accentColor}`, padding: "24px 32px 16px" }}>
                  <div style={{ fontSize: "17pt", fontWeight: "bold", color: active.accentColor, letterSpacing: "0.02em", fontFamily: "Arial, sans-serif" }}>
                    {active.name}
                  </div>
                  <div style={{ display: "flex", gap: "24px", marginTop: "8px", flexWrap: "wrap", fontFamily: "Arial, sans-serif", fontSize: "8.5pt", color: "#555" }}>
                    <span>Date: {formatDateShort(active.dateCompleted) || "—"}</span>
                    {active.completedBy.trim() && <span>Completed by: {active.completedBy}</span>}
                  </div>
                </div>

                {/* Step 1: Audit */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Current Front Desk Responsibilities
                  </div>
                  {active.responsibilities.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>(none listed)</div>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: "16px", marginBottom: "8px" }}>
                      {active.responsibilities.map((it) => (
                        <li key={it.id} style={{ fontSize: "9pt", lineHeight: 1.6 }}>{it.text}</li>
                      ))}
                    </ul>
                  )}
                  <div style={{ fontSize: "8.5pt", color: "#333", marginTop: "6px" }}><strong>Strengths:</strong> {active.strengths || "—"}</div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginTop: "4px" }}><strong>Opportunities:</strong> {active.opportunities || "—"}</div>
                </div>

                {/* Step 2: Power potential */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Front Desk Power Potential
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Area</td>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>How Front Desk Could Contribute</td>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Current Gap?</td>
                      </tr>
                    </thead>
                    <tbody>
                      {powerAreaOrder.map((area) => {
                        const entry = active.powerAreas[area];
                        return (
                          <tr key={area}>
                            <td style={{ padding: "5px 8px 5px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{powerAreaLabels[area]}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{entry.contribution || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top", color: entry.gap ? "#1a1a1a" : "#ccc" }}>{entry.gap || "—"}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Step 3: Mystery shop */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Mystery Shop Insights
                  </div>
                  <div style={{ fontSize: "8.5pt", color: active.mysteryShopInsights ? "#333" : "#ccc" }}>{active.mysteryShopInsights || "(no insights recorded yet)"}</div>
                </div>

                {/* Step 4: Goals */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Front Desk Goals
                  </div>
                  {active.goals.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>(none listed)</div>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: "16px" }}>
                      {active.goals.map((it) => (
                        <li key={it.id} style={{ fontSize: "9pt", lineHeight: 1.6 }}>{it.text}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Step 5: Training */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Empowerment &amp; Training Plan
                  </div>
                  {active.training.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>No initiatives added yet.</div>
                  ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          <td style={{ padding: "4px 8px 4px 0", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Initiative</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>How You&apos;ll Implement</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Notes</td>
                        </tr>
                      </thead>
                      <tbody>
                        {active.training.map((row) => (
                          <tr key={row.id}>
                            <td style={{ padding: "5px 8px 5px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.initiative || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.implementation || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.notes || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* Step 6: Tracking + feedback */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Tracking + Feedback System
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginBottom: "4px" }}><strong>What you&apos;ll track:</strong> {active.whatToTrack || "—"}</div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginBottom: "4px" }}><strong>Review cadence:</strong> {active.reviewCadence || "—"}</div>
                  <div style={{ fontSize: "8.5pt", color: "#333" }}><strong>Celebrate wins / coach gaps:</strong> {active.celebratePlan || "—"}</div>
                </div>

                {/* Step 7: Recognize + reward */}
                <div style={{ padding: "18px 32px 24px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Recognize + Reward
                  </div>
                  {active.rewardIdeas.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>(none listed)</div>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: "16px" }}>
                      {active.rewardIdeas.map((it) => (
                        <li key={it.id} style={{ fontSize: "9pt", lineHeight: 1.6 }}>{it.text}</li>
                      ))}
                    </ul>
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
