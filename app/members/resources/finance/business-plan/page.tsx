"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useServerSyncedState } from "@/lib/useServerSyncedState";
import {
  ArrowLeft,
  Trash2,
  Printer,
  Eye,
  Settings2,
  Copy,
  Milestone,
  Save,
  Check,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type Horizon = "oneYear" | "fiveYear" | "tenYear";

interface HorizonGoal {
  goal: string;
  action1: string;
  action2: string;
  action3: string;
}

interface HorizonRevenue {
  revenue: string;
  profit: string;
}

interface HorizonStaffing {
  staffing: string;
  space: string;
}

const marketFactorOrder = [
  "competitorGrowth",
  "changingRegulations",
  "economicConditions",
  "seasonalTrends",
  "technologyAdvances",
] as const;
type MarketFactor = (typeof marketFactorOrder)[number];

interface BusinessPlan {
  id: string;
  name: string;
  dateCompleted: string;
  completedBy: string;
  accentColor: string;
  vision: Record<Horizon, string>;
  revenue: Record<Horizon, HorizonRevenue>;
  goals: Record<Horizon, HorizonGoal>;
  staffing: Record<Horizon, HorizonStaffing>;
  marketImpacts: Record<MarketFactor, Record<Horizon, string>>;
  review: Record<Horizon, string>;
  createdAt: string;
}

interface StoreData {
  plans: BusinessPlan[];
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

const horizonOrder: Horizon[] = ["oneYear", "fiveYear", "tenYear"];

const horizonMeta: Record<Horizon, { label: string; sub: string }> = {
  oneYear: { label: "1 Year", sub: "Near-term" },
  fiveYear: { label: "5 Year", sub: "Mid-term" },
  tenYear: { label: "10 Year", sub: "Long-term" },
};

const marketFactorLabels: Record<MarketFactor, string> = {
  competitorGrowth: "Competitor growth",
  changingRegulations: "Changing regulations",
  economicConditions: "Economic conditions",
  seasonalTrends: "Seasonal trends",
  technologyAdvances: "Technology advances",
};

function uid() {
  return Math.random().toString(36).slice(2, 11);
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function newPlan(): BusinessPlan {
  const emptyGoal = (): HorizonGoal => ({ goal: "", action1: "", action2: "", action3: "" });
  const emptyRevenue = (): HorizonRevenue => ({ revenue: "", profit: "" });
  const emptyStaffing = (): HorizonStaffing => ({ staffing: "", space: "" });
  const emptyImpacts = (): Record<Horizon, string> => ({ oneYear: "", fiveYear: "", tenYear: "" });
  return {
    id: uid(),
    name: "1, 5, and 10-Year Business Plan",
    dateCompleted: todayISO(),
    completedBy: "",
    accentColor: "#4a0018",
    vision: { oneYear: "", fiveYear: "", tenYear: "" },
    revenue: { oneYear: emptyRevenue(), fiveYear: emptyRevenue(), tenYear: emptyRevenue() },
    goals: { oneYear: emptyGoal(), fiveYear: emptyGoal(), tenYear: emptyGoal() },
    staffing: { oneYear: emptyStaffing(), fiveYear: emptyStaffing(), tenYear: emptyStaffing() },
    marketImpacts: {
      competitorGrowth: emptyImpacts(),
      changingRegulations: emptyImpacts(),
      economicConditions: emptyImpacts(),
      seasonalTrends: emptyImpacts(),
      technologyAdvances: emptyImpacts(),
    },
    review: { oneYear: "Revisit every 3 months", fiveYear: "Revisit annually", tenYear: "Revisit every 2 years" },
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

function filledCount(p: BusinessPlan): { filled: number; total: number } {
  const fields: string[] = [];
  horizonOrder.forEach((h) => {
    fields.push(p.vision[h]);
    fields.push(p.revenue[h].revenue, p.revenue[h].profit);
    fields.push(p.goals[h].goal, p.goals[h].action1, p.goals[h].action2, p.goals[h].action3);
    fields.push(p.staffing[h].staffing, p.staffing[h].space);
  });
  marketFactorOrder.forEach((f) => {
    horizonOrder.forEach((h) => fields.push(p.marketImpacts[f][h]));
  });
  const filled = fields.filter((v) => v.trim().length > 0).length;
  return { filled, total: fields.length };
}

// ── Migration ────────────────────────────────────────────────────────────────

function migrateBusinessPlanData(raw: unknown): StoreData {
  const parsed = (raw ?? {}) as Record<string, unknown>;
  return { plans: Array.isArray(parsed.plans) ? (parsed.plans as BusinessPlan[]) : [] };
}

// ── Component ────────────────────────────────────────────────────────────────

export default function BusinessPlanPage() {
  const { data, setData, lastSaved, saveNow } = useServerSyncedState<StoreData>(
    "business_plans",
    { plans: [] },
    migrateBusinessPlanData
  );
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

  const [savedFlash, setSavedFlash] = useState(false);
  const [, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 30000);
    return () => clearInterval(t);
  }, []);

  const handleSave = useCallback(() => {
    saveNow();
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }, [saveNow]);

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
      const copy: BusinessPlan = {
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
  function updateField<K extends keyof BusinessPlan>(id: string, field: K, value: BusinessPlan[K]) {
    setData((prev) => ({ plans: prev.plans.map((p) => (p.id === id ? { ...p, [field]: value } : p)) }));
  }

  // ── Nested-field updaters ──

  function updateVision(id: string, horizon: Horizon, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) => (p.id === id ? { ...p, vision: { ...p.vision, [horizon]: value } } : p)),
    }));
  }
  function updateRevenue(id: string, horizon: Horizon, field: keyof HorizonRevenue, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) =>
        p.id === id ? { ...p, revenue: { ...p.revenue, [horizon]: { ...p.revenue[horizon], [field]: value } } } : p
      ),
    }));
  }
  function updateGoal(id: string, horizon: Horizon, field: keyof HorizonGoal, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) =>
        p.id === id ? { ...p, goals: { ...p.goals, [horizon]: { ...p.goals[horizon], [field]: value } } } : p
      ),
    }));
  }
  function updateStaffing(id: string, horizon: Horizon, field: keyof HorizonStaffing, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) =>
        p.id === id ? { ...p, staffing: { ...p.staffing, [horizon]: { ...p.staffing[horizon], [field]: value } } } : p
      ),
    }));
  }
  function updateMarketImpact(id: string, factor: MarketFactor, horizon: Horizon, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) =>
        p.id === id
          ? { ...p, marketImpacts: { ...p.marketImpacts, [factor]: { ...p.marketImpacts[factor], [horizon]: value } } }
          : p
      ),
    }));
  }
  function updateReview(id: string, horizon: Horizon, value: string) {
    setData((prev) => ({
      plans: prev.plans.map((p) => (p.id === id ? { ...p, review: { ...p.review, [horizon]: value } } : p)),
    }));
  }

  const active = data.plans.find((p) => p.id === activeId) ?? null;
  const sortedPlans = [...data.plans].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const inputStyle = { background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" };

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
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Business Plan Tool</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.5)" }}>
            Build your vision, revenue milestones, goals, staffing forecast, and market-risk plan across your
            1, 5, and 10-year horizons — then print it or save it to revisit on its own review cadence.
          </p>

          {/* New plan */}
          <button onClick={createPlan} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
            style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
            <div className="flex items-center gap-4">
              <Milestone size={20} style={{ color: "#a28c75" }} />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Business Plan</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Starts fresh, pre-loaded with the standard review cadence — rename it however fits your practice.</p>
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
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>No business plans saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedPlans.map((p) => {
                const { filled, total } = filledCount(p);
                return (
                  <div key={p.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                    style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                      <Milestone size={17} style={{ color: "#a28c75" }} />
                    </div>
                    <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openPlan(p.id)}>
                      <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{p.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>
                        {filled}/{total} fields completed · Created {formatDateShort(p.createdAt)}
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
                );
              })}
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
          #biz-plan-print-preview, #biz-plan-print-preview * { visibility: visible; }
          #biz-plan-print-preview {
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

              {/* Step 1: Vision */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 1 · Vision</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Where do you want your practice to be at each horizon?
                </p>
                <div className="space-y-3">
                  {horizonOrder.map((h) => (
                    <div key={h}>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>{horizonMeta[h].label} Vision</label>
                      <textarea rows={2} value={active.vision[h]} onChange={(e) => updateVision(active.id, h, e.target.value)}
                        placeholder="Describe your practice at this horizon..."
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none resize-none placeholder:opacity-30" style={inputStyle} />
                    </div>
                  ))}
                </div>
              </section>

              {/* Step 2: Revenue & Profit Milestones */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 2 · Revenue &amp; Profit Milestones</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Estimate target revenue and profit (or margin %) at each stage.
                </p>
                <div className="space-y-3">
                  {horizonOrder.map((h) => (
                    <div key={h} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                      <div className="px-3 py-1.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                        <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{horizonMeta[h].label} Target</span>
                      </div>
                      <div className="p-3 grid grid-cols-2 gap-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                        <div>
                          <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Revenue</label>
                          <input type="text" value={active.revenue[h].revenue} onChange={(e) => updateRevenue(active.id, h, "revenue", e.target.value)}
                            placeholder="$" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        </div>
                        <div>
                          <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Profit / Margin</label>
                          <input type="text" value={active.revenue[h].profit} onChange={(e) => updateRevenue(active.id, h, "profit", e.target.value)}
                            placeholder="$ or %" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Step 3: Goals & Actions */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 3 · Goals &amp; Actions</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  One major goal per horizon, broken into 3 short-term action steps.
                </p>
                <div className="space-y-3">
                  {horizonOrder.map((h) => (
                    <div key={h} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                      <div className="px-3 py-1.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                        <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{horizonMeta[h].label} Goal</span>
                      </div>
                      <div className="p-3 space-y-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                        <input type="text" value={active.goals[h].goal} onChange={(e) => updateGoal(active.id, h, "goal", e.target.value)}
                          placeholder="The major goal..." className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        {(["action1", "action2", "action3"] as const).map((field, i) => (
                          <input key={field} type="text" value={active.goals[h][field]} onChange={(e) => updateGoal(active.id, h, field, e.target.value)}
                            placeholder={`Action ${i + 1}...`} className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Step 4: Staffing & Space */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 4 · Staffing &amp; Space</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  What team and physical footprint does each horizon require?
                </p>
                <div className="space-y-3">
                  {horizonOrder.map((h) => (
                    <div key={h} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                      <div className="px-3 py-1.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                        <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{horizonMeta[h].label} Needs</span>
                      </div>
                      <div className="p-3 space-y-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                        <div>
                          <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Staffing Needs</label>
                          <input type="text" value={active.staffing[h].staffing} onChange={(e) => updateStaffing(active.id, h, "staffing", e.target.value)}
                            className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        </div>
                        <div>
                          <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Space / Facility Needs</label>
                          <input type="text" value={active.staffing[h].space} onChange={(e) => updateStaffing(active.id, h, "space", e.target.value)}
                            className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Step 5: Market Shifts & Seasonality */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 5 · Market Shifts &amp; Seasonality</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  How could each factor impact you at each stage, and what&apos;s your plan?
                </p>
                <div className="space-y-3">
                  {marketFactorOrder.map((f) => (
                    <div key={f} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                      <div className="px-3 py-1.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                        <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{marketFactorLabels[f]}</span>
                      </div>
                      <div className="p-3 grid grid-cols-3 gap-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                        {horizonOrder.map((h) => (
                          <div key={h}>
                            <label className="text-[9px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>{horizonMeta[h].sub}</label>
                            <input type="text" value={active.marketImpacts[f][h]} onChange={(e) => updateMarketImpact(active.id, f, h, e.target.value)}
                              className="w-full text-xs rounded px-1.5 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Step 6: Review & Adjust */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 6 · Review &amp; Adjust</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Schedule a review of your plan.
                </p>
                <div className="space-y-2">
                  {horizonOrder.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <label className="text-xs flex-shrink-0 w-20" style={{ color: "rgba(255,253,246,0.5)" }}>{horizonMeta[h].label}</label>
                      <input type="text" value={active.review[h]} onChange={(e) => updateReview(active.id, h, e.target.value)}
                        className="flex-1 text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                    </div>
                  ))}
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
              <div id="biz-plan-print-preview" style={{ background: "white", width: "100%", maxWidth: "780px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "9.5pt" }}>
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

                {/* Vision */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Vision
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
                    {horizonOrder.map((h) => (
                      <div key={h} style={{ padding: "8px 12px", border: "1px solid #eee" }}>
                        <div style={{ fontSize: "9pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", marginBottom: "4px" }}>
                          {horizonMeta[h].label}
                        </div>
                        <div style={{ fontSize: "8.5pt", lineHeight: 1.6, color: active.vision[h] ? "#333" : "#ccc" }}>
                          {active.vision[h] || "(not set)"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue & Profit Milestones */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Revenue &amp; Profit Milestones
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Horizon</td>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Target Revenue</td>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Target Profit / Margin</td>
                      </tr>
                    </thead>
                    <tbody>
                      {horizonOrder.map((h) => (
                        <tr key={h}>
                          <td style={{ padding: "5px 8px", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>{horizonMeta[h].label}</td>
                          <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.revenue[h].revenue ? "#333" : "#ccc" }}>{active.revenue[h].revenue || "—"}</td>
                          <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.revenue[h].profit ? "#333" : "#ccc" }}>{active.revenue[h].profit || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Goals & Actions */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Goals &amp; Actions
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
                    {horizonOrder.map((h) => (
                      <div key={h} style={{ padding: "8px 12px", border: "1px solid #eee" }}>
                        <div style={{ fontSize: "9pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", marginBottom: "2px" }}>
                          {horizonMeta[h].label}
                        </div>
                        <div style={{ fontSize: "8.5pt", fontStyle: "italic", marginBottom: "6px", color: active.goals[h].goal ? "#333" : "#ccc" }}>
                          {active.goals[h].goal || "(no goal set)"}
                        </div>
                        <ol style={{ margin: 0, paddingLeft: "14px" }}>
                          {[active.goals[h].action1, active.goals[h].action2, active.goals[h].action3].map((a, i) => (
                            <li key={i} style={{ fontSize: "8pt", lineHeight: 1.6, color: a ? "#333" : "#ccc" }}>{a || "—"}</li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Staffing & Space */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Staffing &amp; Space
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Horizon</td>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Staffing Needs</td>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Space / Facility Needs</td>
                      </tr>
                    </thead>
                    <tbody>
                      {horizonOrder.map((h) => (
                        <tr key={h}>
                          <td style={{ padding: "5px 8px", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>{horizonMeta[h].label}</td>
                          <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.staffing[h].staffing ? "#333" : "#ccc" }}>{active.staffing[h].staffing || "—"}</td>
                          <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.staffing[h].space ? "#333" : "#ccc" }}>{active.staffing[h].space || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Market Shifts & Seasonality */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Market Shifts &amp; Seasonality
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <colgroup>
                      <col style={{ width: "28%" }} />
                      <col style={{ width: "24%" }} />
                      <col style={{ width: "24%" }} />
                      <col style={{ width: "24%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Factor</td>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>1 Yr Impact &amp; Plan</td>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>5 Yr Impact &amp; Plan</td>
                        <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>10 Yr Impact &amp; Plan</td>
                      </tr>
                    </thead>
                    <tbody>
                      {marketFactorOrder.map((f) => (
                        <tr key={f}>
                          <td style={{ padding: "5px 8px", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{marketFactorLabels[f]}</td>
                          {horizonOrder.map((h) => (
                            <td key={h} style={{ padding: "5px 8px", fontSize: "8pt", borderBottom: "1px solid #eee", verticalAlign: "top", color: active.marketImpacts[f][h] ? "#333" : "#ccc" }}>
                              {active.marketImpacts[f][h] || "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Review & Adjust */}
                <div style={{ padding: "18px 32px 24px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Review &amp; Adjust
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                      {horizonOrder.map((h) => (
                        <tr key={h}>
                          <td style={{ padding: "5px 8px 5px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee", width: "20%" }}>{horizonMeta[h].label} Plan</td>
                          <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.review[h] ? "#333" : "#ccc" }}>{active.review[h] || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
