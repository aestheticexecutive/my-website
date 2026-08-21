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
  ShoppingBag,
  Save,
  Check,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface BulletItem {
  id: string;
  text: string;
}

interface JourneyRow {
  id: string;
  stage: string;
  opportunity: string;
  actionPlan: string;
}

interface TrainingRow {
  id: string;
  topic: string;
  plan: string;
  notes: string;
}

interface TrackingRow {
  id: string;
  metric: string;
  howTracked: string;
  reviewFrequency: string;
}

interface CrossSellPlan {
  id: string;
  name: string;
  dateCompleted: string;
  completedBy: string;
  accentColor: string;
  combos: BulletItem[];
  pctAddOn: string;
  whatsWorking: string;
  whatsFallingShort: string;
  rightTiming: boolean;
  confidentBenefit: boolean;
  journey: JourneyRow[];
  toolsToBuild: BulletItem[];
  training: TrainingRow[];
  goals: BulletItem[];
  tracking: TrackingRow[];
  reviewDate: string;
  reviewAssess: string;
  createdAt: string;
}

interface StoreData {
  plans: CrossSellPlan[];
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

function newPlan(): CrossSellPlan {
  return {
    id: uid(),
    name: "Cross-Selling Plan",
    dateCompleted: todayISO(),
    completedBy: "",
    accentColor: "#4a0018",
    combos: [],
    pctAddOn: "",
    whatsWorking: "",
    whatsFallingShort: "",
    rightTiming: false,
    confidentBenefit: false,
    journey: [
      { id: uid(), stage: "Consultation", opportunity: "Recommend combo treatments", actionPlan: "Train on bundled protocols" },
      { id: uid(), stage: "During treatment", opportunity: "Offer add-ons", actionPlan: "Create script for provider to suggest" },
      { id: uid(), stage: "At checkout", opportunity: "Suggest retail to extend results", actionPlan: "Front desk training" },
      { id: uid(), stage: "Follow-up / aftercare", opportunity: "Encourage ongoing plan / membership", actionPlan: "Automated emails or texts" },
    ],
    toolsToBuild: [],
    training: [
      { id: uid(), topic: "How to identify needs", plan: "Monthly team meeting", notes: "Use case studies" },
      { id: uid(), topic: "How to present add-ons without being pushy", plan: "Role play scenarios", notes: "Focus on patient benefit" },
      { id: uid(), topic: "Retail product education", plan: "Vendor or in-house training", notes: "Demo products" },
      { id: uid(), topic: "How to use cross-sell cheat sheet", plan: "Huddle review", notes: "Update regularly" },
    ],
    goals: [],
    tracking: [
      { id: uid(), metric: "Cross-sell % (retail + service add-ons)", howTracked: "POS / CRM", reviewFrequency: "Monthly" },
      { id: uid(), metric: "Top cross-sellers (by team member)", howTracked: "POS / CRM", reviewFrequency: "Monthly" },
      { id: uid(), metric: "Combo package bookings", howTracked: "Scheduling software", reviewFrequency: "Monthly" },
    ],
    reviewDate: "",
    reviewAssess: "",
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

type BulletField = "combos" | "toolsToBuild" | "goals";

// ── Component ────────────────────────────────────────────────────────────────

export default function CrossSellingToolPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>({ plans: [] });
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [drafts, setDrafts] = useState<Record<BulletField, string>>({ combos: "", toolsToBuild: "", goals: "" });

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_cross_sell_plans_${user.id}` : null;

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
      const copy: CrossSellPlan = {
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
  function updateField<K extends keyof CrossSellPlan>(id: string, field: K, value: CrossSellPlan[K]) {
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

  // ── Journey table CRUD ──

  function addJourney(planId: string) {
    const row: JourneyRow = { id: uid(), stage: "", opportunity: "", actionPlan: "" };
    setData((prev) => ({ plans: prev.plans.map((p) => (p.id === planId ? { ...p, journey: [...p.journey, row] } : p)) }));
  }
  function updateJourney(planId: string, rowId: string, field: keyof Omit<JourneyRow, "id">, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) =>
        p.id === planId ? { ...p, journey: p.journey.map((r) => (r.id === rowId ? { ...r, [field]: value } : r)) } : p
      ),
    }));
  }
  function deleteJourney(planId: string, rowId: string) {
    setData((prev) => ({ plans: prev.plans.map((p) => (p.id === planId ? { ...p, journey: p.journey.filter((r) => r.id !== rowId) } : p)) }));
  }

  // ── Training table CRUD ──

  function addTraining(planId: string) {
    const row: TrainingRow = { id: uid(), topic: "", plan: "", notes: "" };
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

  // ── Tracking table CRUD ──

  function addTracking(planId: string) {
    const row: TrackingRow = { id: uid(), metric: "", howTracked: "", reviewFrequency: "" };
    setData((prev) => ({ plans: prev.plans.map((p) => (p.id === planId ? { ...p, tracking: [...p.tracking, row] } : p)) }));
  }
  function updateTracking(planId: string, rowId: string, field: keyof Omit<TrackingRow, "id">, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) =>
        p.id === planId ? { ...p, tracking: p.tracking.map((r) => (r.id === rowId ? { ...r, [field]: value } : r)) } : p
      ),
    }));
  }
  function deleteTracking(planId: string, rowId: string) {
    setData((prev) => ({ plans: prev.plans.map((p) => (p.id === planId ? { ...p, tracking: p.tracking.filter((r) => r.id !== rowId) } : p)) }));
  }

  const active = data.plans.find((p) => p.id === activeId) ?? null;
  const sortedPlans = [...data.plans].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const inputStyle = { background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" };

  function renderBulletSection(planId: string, field: BulletField, label: string, placeholder: string, hint?: string) {
    if (!active) return null;
    const items = active[field];
    return (
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
        <div className="px-3 py-1.5" style={{ background: "rgba(162,140,117,0.07)" }}>
          <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{label}</span>
        </div>
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
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Cross-Selling Tool</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.5)" }}>
            Brainstorm your combos, audit current performance, map cross-sell moments across the
            patient journey, and build a real training and tracking plan — pre-loaded with the
            source template&apos;s example journey stages, training topics, and metrics.
          </p>

          {/* New plan */}
          <button onClick={createPlan} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
            style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
            <div className="flex items-center gap-4">
              <ShoppingBag size={20} style={{ color: "#a28c75" }} />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Cross-Selling Plan</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Starts pre-loaded with example journey stages, training topics, and tracking metrics — edit or delete anything.</p>
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
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>No cross-selling plans saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedPlans.map((p) => (
                <div key={p.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                    <ShoppingBag size={17} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openPlan(p.id)}>
                    <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {p.combos.length} combos · {p.journey.length} journey stages · Created {formatDateShort(p.createdAt)}
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
          #cross-sell-print-preview, #cross-sell-print-preview * { visibility: visible; }
          #cross-sell-print-preview {
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

              {/* Step 1: Define combos */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 1 · Define Your Cross-Sells</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  e.g. Botox + skincare, Hydrafacial after laser, body contouring + skin tightening package, monthly facial membership after a facial
                </p>
                {renderBulletSection(active.id, "combos", "Your Top Cross-Selling Combos", "Add a combo...", "No combos added yet.")}
              </section>

              {/* Step 2: Audit */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 2 · Audit Current Performance</p>
                <div className="space-y-2 mb-3">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>% of patients who add a retail item, add-on, or service</label>
                    <input type="text" value={active.pctAddOn} onChange={(e) => updateField(active.id, "pctAddOn", e.target.value)}
                      placeholder="% (estimate if needed)" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>What's working</label>
                    <textarea rows={2} value={active.whatsWorking} onChange={(e) => updateField(active.id, "whatsWorking", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Where it's falling short</label>
                    <textarea rows={2} value={active.whatsFallingShort} onChange={(e) => updateField(active.id, "whatsFallingShort", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none" style={inputStyle} />
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="p-3 space-y-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                    <p className="text-[10px] uppercase tracking-wide mb-1" style={{ color: "rgba(255,253,246,0.45)" }}>Observe or secret shop</p>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" checked={active.rightTiming} onChange={() => updateField(active.id, "rightTiming", !active.rightTiming)} className="w-3.5 h-3.5 accent-[#a28c75]" />
                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.75)" }}>Recommendations are made at the right times (consult, checkout, follow-up)</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" checked={active.confidentBenefit} onChange={() => updateField(active.id, "confidentBenefit", !active.confidentBenefit)} className="w-3.5 h-3.5 accent-[#a28c75]" />
                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.75)" }}>They're made with confidence and patient benefit in mind</span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Step 3: Patient journey */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 3 · Cross-Selling Points in the Journey</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Pre-loaded with the 4 example stages — edit, delete, or add your own.
                </p>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="p-3 space-y-2.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.journey.length === 0 && (
                      <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No stages yet.</p>
                    )}
                    {active.journey.map((row) => (
                      <div key={row.id} className="space-y-1.5 pb-2.5 border-b last:border-b-0" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                        <div className="flex items-center gap-1.5">
                          <input type="text" value={row.stage} onChange={(e) => updateJourney(active.id, row.id, "stage", e.target.value)} placeholder="Stage"
                            className="flex-1 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                          <button onClick={() => deleteJourney(active.id, row.id)} className="flex-shrink-0" style={{ color: "rgba(162,140,117,0.4)" }}>
                            <Trash2 size={12} />
                          </button>
                        </div>
                        <input type="text" value={row.opportunity} onChange={(e) => updateJourney(active.id, row.id, "opportunity", e.target.value)} placeholder="Cross-sell opportunity"
                          className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        <input type="text" value={row.actionPlan} onChange={(e) => updateJourney(active.id, row.id, "actionPlan", e.target.value)} placeholder="Action plan"
                          className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                      </div>
                    ))}
                    <button onClick={() => addJourney(active.id)} className="flex items-center gap-1.5 text-xs pt-1 transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.55)" }}>
                      <Plus size={11} />
                      Add stage
                    </button>
                  </div>
                </div>
              </section>

              {/* Step 4: Tools to build */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 4 · Develop Cross-Selling Tools</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  e.g. cheat sheet of pairings, scripts, bundled service menus, retail displays, team incentives
                </p>
                {renderBulletSection(active.id, "toolsToBuild", "Your Tools to Build", "Add a tool...", "No tools added yet.")}
              </section>

              {/* Step 5: Train + role play */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 5 · Train + Role Play</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Pre-loaded with the 4 example topics — edit, delete, or add your own.
                </p>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="p-3 space-y-2.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.training.length === 0 && (
                      <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No training topics yet.</p>
                    )}
                    {active.training.map((row) => (
                      <div key={row.id} className="space-y-1.5 pb-2.5 border-b last:border-b-0" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                        <div className="flex items-center gap-1.5">
                          <input type="text" value={row.topic} onChange={(e) => updateTraining(active.id, row.id, "topic", e.target.value)} placeholder="Topic"
                            className="flex-1 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                          <button onClick={() => deleteTraining(active.id, row.id)} className="flex-shrink-0" style={{ color: "rgba(162,140,117,0.4)" }}>
                            <Trash2 size={12} />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <input type="text" value={row.plan} onChange={(e) => updateTraining(active.id, row.id, "plan", e.target.value)} placeholder="Training plan"
                            className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                          <input type="text" value={row.notes} onChange={(e) => updateTraining(active.id, row.id, "notes", e.target.value)} placeholder="Notes"
                            className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        </div>
                      </div>
                    ))}
                    <button onClick={() => addTraining(active.id)} className="flex items-center gap-1.5 text-xs pt-1 transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.55)" }}>
                      <Plus size={11} />
                      Add topic
                    </button>
                  </div>
                </div>
              </section>

              {/* Step 6: Goals */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 6 · Set Cross-Sell Goals</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  e.g. X% of visits include a retail purchase, X% of Botox patients add skincare, X% of consults result in combo booking
                </p>
                {renderBulletSection(active.id, "goals", "Your Cross-Sell Goals", "Add a goal...", "No goals added yet.")}
              </section>

              {/* Step 7: Track + adjust */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 7 · Track + Adjust</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Pre-loaded with the 3 example metrics — edit, delete, or add your own.
                </p>
                <div className="rounded-xl overflow-hidden mb-3" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="p-3 space-y-2.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.tracking.length === 0 && (
                      <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No metrics yet.</p>
                    )}
                    {active.tracking.map((row) => (
                      <div key={row.id} className="space-y-1.5 pb-2.5 border-b last:border-b-0" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                        <div className="flex items-center gap-1.5">
                          <input type="text" value={row.metric} onChange={(e) => updateTracking(active.id, row.id, "metric", e.target.value)} placeholder="Metric"
                            className="flex-1 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                          <button onClick={() => deleteTracking(active.id, row.id)} className="flex-shrink-0" style={{ color: "rgba(162,140,117,0.4)" }}>
                            <Trash2 size={12} />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <input type="text" value={row.howTracked} onChange={(e) => updateTracking(active.id, row.id, "howTracked", e.target.value)} placeholder="How tracked"
                            className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                          <input type="text" value={row.reviewFrequency} onChange={(e) => updateTracking(active.id, row.id, "reviewFrequency", e.target.value)} placeholder="Review frequency"
                            className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        </div>
                      </div>
                    ))}
                    <button onClick={() => addTracking(active.id)} className="flex items-center gap-1.5 text-xs pt-1 transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.55)" }}>
                      <Plus size={11} />
                      Add metric
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Review meeting date</label>
                    <input type="date" value={active.reviewDate} onChange={(e) => updateField(active.id, "reviewDate", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={{ ...inputStyle, colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>What will you assess?</label>
                    <input type="text" value={active.reviewAssess} onChange={(e) => updateField(active.id, "reviewAssess", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                </div>
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
              <div id="cross-sell-print-preview" style={{ background: "white", width: "100%", maxWidth: "780px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "9.5pt" }}>
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

                {/* Step 1: Combos */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Top Cross-Selling Combos
                  </div>
                  {active.combos.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>(none listed)</div>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: "16px" }}>
                      {active.combos.map((it) => (
                        <li key={it.id} style={{ fontSize: "9pt", lineHeight: 1.6 }}>{it.text}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Step 2: Audit */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Current Performance
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginBottom: "6px" }}>
                    <strong>% of patients with add-on:</strong> {active.pctAddOn || "—"}
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginBottom: "4px" }}><strong>What's working:</strong> {active.whatsWorking || "—"}</div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginBottom: "8px" }}><strong>Falling short:</strong> {active.whatsFallingShort || "—"}</div>
                  <div style={{ fontSize: "8.5pt", color: active.rightTiming ? "#1a1a1a" : "#ccc" }}>{active.rightTiming ? "☑" : "☐"} Recommendations made at the right times</div>
                  <div style={{ fontSize: "8.5pt", color: active.confidentBenefit ? "#1a1a1a" : "#ccc" }}>{active.confidentBenefit ? "☑" : "☐"} Made with confidence and patient benefit in mind</div>
                </div>

                {/* Step 3: Journey */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Cross-Selling Points in the Patient Journey
                  </div>
                  {active.journey.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>No stages added yet.</div>
                  ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          <td style={{ padding: "4px 8px 4px 0", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Stage</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Cross-Sell Opportunity</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Action Plan</td>
                        </tr>
                      </thead>
                      <tbody>
                        {active.journey.map((row) => (
                          <tr key={row.id}>
                            <td style={{ padding: "5px 8px 5px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.stage || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.opportunity || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.actionPlan || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* Step 4: Tools */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Cross-Selling Tools to Build
                  </div>
                  {active.toolsToBuild.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>(none listed)</div>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: "16px" }}>
                      {active.toolsToBuild.map((it) => (
                        <li key={it.id} style={{ fontSize: "9pt", lineHeight: 1.6 }}>{it.text}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Step 5: Training */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Train + Role Play
                  </div>
                  {active.training.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>No training topics added yet.</div>
                  ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          <td style={{ padding: "4px 8px 4px 0", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Topic</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Training Plan</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Notes</td>
                        </tr>
                      </thead>
                      <tbody>
                        {active.training.map((row) => (
                          <tr key={row.id}>
                            <td style={{ padding: "5px 8px 5px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.topic || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.plan || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.notes || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* Step 6: Goals */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Cross-Sell Goals
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

                {/* Step 7: Tracking */}
                <div style={{ padding: "18px 32px 24px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Track + Adjust
                  </div>
                  {active.tracking.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>No metrics added yet.</div>
                  ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "10px" }}>
                      <thead>
                        <tr>
                          <td style={{ padding: "4px 8px 4px 0", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Metric</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>How Tracked</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Review Frequency</td>
                        </tr>
                      </thead>
                      <tbody>
                        {active.tracking.map((row) => (
                          <tr key={row.id}>
                            <td style={{ padding: "5px 8px 5px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>{row.metric || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee" }}>{row.howTracked || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee" }}>{row.reviewFrequency || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  <div style={{ fontSize: "8.5pt", color: "#333" }}><strong>Review meeting date:</strong> {formatDateShort(active.reviewDate) || "—"}</div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginTop: "4px" }}><strong>What to assess:</strong> {active.reviewAssess || "—"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
