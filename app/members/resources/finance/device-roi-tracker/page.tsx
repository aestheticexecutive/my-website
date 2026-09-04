"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { useServerSyncedState } from "@/lib/useServerSyncedState";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Printer,
  Eye,
  Settings2,
  Copy,
  Gauge,
  Save,
  Check,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type PaymentType = "full" | "financed";
type CostCategory = "warranty" | "servicing" | "parts" | "other";
type RevenuePeriod = "monthly" | "quarterly" | "annual";

interface CostEntry {
  id: string;
  date: string;
  category: CostCategory;
  amount: string;
  note: string;
}

interface RevenueEntry {
  id: string;
  date: string;
  amount: string;
  note: string;
}

interface Device {
  id: string;
  name: string;
  purchaseDate: string;
  accentColor: string;
  paymentType: PaymentType;
  fullPaymentAmount: string;
  downPayment: string;
  monthlyPayment: string;
  termMonths: string;
  costs: CostEntry[];
  revenuePeriod: RevenuePeriod;
  revenues: RevenueEntry[];
  payoffGoalDate: string;
  roiGoalPercent: string;
  createdAt: string;
}

interface StoreData {
  devices: Device[];
}

// ── Defaults / constants ────────────────────────────────────────────────────

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

const CATEGORY_LABELS: Record<CostCategory, string> = {
  warranty: "Warranty",
  servicing: "Servicing",
  parts: "Parts / Replacement",
  other: "Other",
};

const REVENUE_PLACEHOLDER: Record<RevenuePeriod, string> = {
  monthly: "e.g. March 2026",
  quarterly: "e.g. Q1 2026",
  annual: "e.g. 2026",
};

function uid() {
  return Math.random().toString(36).slice(2, 11);
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function newDevice(): Device {
  return {
    id: uid(),
    name: "New Device",
    purchaseDate: todayISO(),
    accentColor: "#4a0018",
    paymentType: "full",
    fullPaymentAmount: "",
    downPayment: "",
    monthlyPayment: "",
    termMonths: "",
    costs: [],
    revenuePeriod: "monthly",
    revenues: [],
    payoffGoalDate: "",
    roiGoalPercent: "",
    createdAt: new Date().toISOString(),
  };
}

// ── Money / date helpers ─────────────────────────────────────────────────────

function parseMoney(s: string): number {
  const n = parseFloat(String(s).replace(/[^0-9.-]/g, ""));
  return isNaN(n) ? 0 : n;
}

function formatMoney(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
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

function monthsBetween(a: Date, b: Date): number {
  const days = (b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24);
  return days / 30.44;
}

function addMonthsToDate(d: Date, months: number): Date {
  return new Date(d.getTime() + months * 30.44 * 24 * 60 * 60 * 1000);
}

// ── Stats computation ────────────────────────────────────────────────────────

interface DeviceStats {
  deviceBaseCost: number;
  totalCosts: number;
  totalInvested: number;
  totalRevenue: number;
  netPosition: number;
  roiPercent: number;
  percentRecovered: number;
  isBreakEven: boolean;
  breakEvenEntryDate: string | null;
  monthsElapsed: number;
  avgMonthlyRevenue: number;
  projectedBreakEvenDate: Date | null;
  paceStatus: "ahead" | "behind" | "on" | null;
  paceDiffMonths: number | null;
  neededMonthlyForGoal: number | null;
  goalPassed: boolean;
  roiGoalTargetRevenue: number | null;
  roiGoalReached: boolean;
  projectedROIGoalDate: Date | null;
}

function computeStats(device: Device): DeviceStats {
  const deviceBaseCost =
    device.paymentType === "full"
      ? parseMoney(device.fullPaymentAmount)
      : parseMoney(device.downPayment) + parseMoney(device.monthlyPayment) * parseMoney(device.termMonths);

  const totalCosts = device.costs.reduce((sum, c) => sum + parseMoney(c.amount), 0);
  const totalInvested = deviceBaseCost + totalCosts;
  const totalRevenue = device.revenues.reduce((sum, r) => sum + parseMoney(r.amount), 0);
  const netPosition = totalRevenue - totalInvested;
  const roiPercent = totalInvested > 0 ? (netPosition / totalInvested) * 100 : 0;
  const percentRecovered = totalInvested > 0 ? Math.min(100, (totalRevenue / totalInvested) * 100) : 0;
  const isBreakEven = totalInvested > 0 && totalRevenue >= totalInvested;

  let breakEvenEntryDate: string | null = null;
  if (isBreakEven && device.revenues.length > 0) {
    const sorted = [...device.revenues].sort((a, b) => (a.date < b.date ? -1 : 1));
    let cumulative = 0;
    for (const r of sorted) {
      cumulative += parseMoney(r.amount);
      if (cumulative >= totalInvested) {
        breakEvenEntryDate = r.date;
        break;
      }
    }
  }

  const today = new Date();
  const purchase = device.purchaseDate ? parseLocalDate(device.purchaseDate) : today;
  const monthsElapsed = Math.max(0.1, monthsBetween(purchase, today));
  const avgMonthlyRevenue = totalRevenue / monthsElapsed;

  let projectedBreakEvenDate: Date | null = null;
  if (!isBreakEven && avgMonthlyRevenue > 0) {
    const remaining = totalInvested - totalRevenue;
    const monthsToGo = remaining / avgMonthlyRevenue;
    projectedBreakEvenDate = addMonthsToDate(today, monthsToGo);
  }

  let paceStatus: "ahead" | "behind" | "on" | null = null;
  let paceDiffMonths: number | null = null;
  if (!isBreakEven && projectedBreakEvenDate && device.payoffGoalDate) {
    const goalDate = parseLocalDate(device.payoffGoalDate);
    const diff = monthsBetween(goalDate, projectedBreakEvenDate);
    paceDiffMonths = Math.abs(diff);
    if (diff > 0.5) paceStatus = "behind";
    else if (diff < -0.5) paceStatus = "ahead";
    else paceStatus = "on";
  }

  let neededMonthlyForGoal: number | null = null;
  let goalPassed = false;
  if (!isBreakEven && device.payoffGoalDate) {
    const goalDate = parseLocalDate(device.payoffGoalDate);
    const monthsUntilGoal = monthsBetween(today, goalDate);
    if (monthsUntilGoal <= 0) {
      goalPassed = true;
    } else {
      const remaining = totalInvested - totalRevenue;
      neededMonthlyForGoal = remaining / monthsUntilGoal;
    }
  }

  let roiGoalTargetRevenue: number | null = null;
  let roiGoalReached = false;
  let projectedROIGoalDate: Date | null = null;
  const roiGoalPct = parseMoney(device.roiGoalPercent);
  if (roiGoalPct > 0 && totalInvested > 0) {
    roiGoalTargetRevenue = totalInvested * (1 + roiGoalPct / 100);
    roiGoalReached = totalRevenue >= roiGoalTargetRevenue;
    if (!roiGoalReached && avgMonthlyRevenue > 0) {
      const remaining = roiGoalTargetRevenue - totalRevenue;
      const monthsToGo = remaining / avgMonthlyRevenue;
      projectedROIGoalDate = addMonthsToDate(today, monthsToGo);
    }
  }

  return {
    deviceBaseCost,
    totalCosts,
    totalInvested,
    totalRevenue,
    netPosition,
    roiPercent,
    percentRecovered,
    isBreakEven,
    breakEvenEntryDate,
    monthsElapsed,
    avgMonthlyRevenue,
    projectedBreakEvenDate,
    paceStatus,
    paceDiffMonths,
    neededMonthlyForGoal,
    goalPassed,
    roiGoalTargetRevenue,
    roiGoalReached,
    projectedROIGoalDate,
  };
}

// ── Migration ────────────────────────────────────────────────────────────────

function migrateDeviceRoiData(raw: unknown): StoreData {
  const parsed = (raw ?? {}) as Record<string, unknown>;
  return { devices: Array.isArray(parsed.devices) ? (parsed.devices as Device[]) : [] };
}

// ── Component ────────────────────────────────────────────────────────────────

export default function DeviceRoiTrackerPage() {
  const { data, setData, lastSaved, saveNow } = useServerSyncedState<StoreData>(
    "device_roi",
    { devices: [] },
    migrateDeviceRoiData
  );
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

  const [costDraft, setCostDraft] = useState<{ date: string; category: CostCategory; amount: string; note: string }>({
    date: todayISO(),
    category: "servicing",
    amount: "",
    note: "",
  });
  const [revenueDraft, setRevenueDraft] = useState<{ date: string; amount: string; note: string }>({
    date: todayISO(),
    amount: "",
    note: "",
  });

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

  // ── Device-level CRUD ──

  function createDevice() {
    const d = newDevice();
    setData((prev) => ({ devices: [d, ...prev.devices] }));
    setActiveId(d.id);
    setView("editor");
    setActiveTab("edit");
  }
  function duplicateDevice(id: string) {
    setData((prev) => {
      const src = prev.devices.find((d) => d.id === id);
      if (!src) return prev;
      const copy: Device = {
        ...JSON.parse(JSON.stringify(src)),
        id: uid(),
        name: `${src.name} (Copy)`,
        createdAt: new Date().toISOString(),
      };
      return { devices: [copy, ...prev.devices] };
    });
  }
  function deleteDevice(id: string) {
    setData((prev) => ({ devices: prev.devices.filter((d) => d.id !== id) }));
    if (activeId === id) {
      setActiveId(null);
      setView("list");
    }
  }
  function openDevice(id: string) {
    setActiveId(id);
    setView("editor");
    setActiveTab("edit");
  }
  function updateField<K extends keyof Device>(id: string, field: K, value: Device[K]) {
    setData((prev) => ({ devices: prev.devices.map((d) => (d.id === id ? { ...d, [field]: value } : d)) }));
  }

  // ── Cost log CRUD ──

  function addCost(deviceId: string) {
    if (!costDraft.amount.trim()) return;
    const entry: CostEntry = { id: uid(), ...costDraft };
    setData((prev) => ({ devices: prev.devices.map((d) => (d.id === deviceId ? { ...d, costs: [...d.costs, entry] } : d)) }));
    setCostDraft({ date: todayISO(), category: "servicing", amount: "", note: "" });
  }
  function deleteCost(deviceId: string, id: string) {
    setData((prev) => ({ devices: prev.devices.map((d) => (d.id === deviceId ? { ...d, costs: d.costs.filter((c) => c.id !== id) } : d)) }));
  }

  // ── Revenue log CRUD ──

  function addRevenue(deviceId: string) {
    if (!revenueDraft.amount.trim()) return;
    const entry: RevenueEntry = { id: uid(), ...revenueDraft };
    setData((prev) => ({ devices: prev.devices.map((d) => (d.id === deviceId ? { ...d, revenues: [...d.revenues, entry] } : d)) }));
    setRevenueDraft({ date: todayISO(), amount: "", note: "" });
  }
  function deleteRevenue(deviceId: string, id: string) {
    setData((prev) => ({ devices: prev.devices.map((d) => (d.id === deviceId ? { ...d, revenues: d.revenues.filter((r) => r.id !== id) } : d)) }));
  }

  const active = data.devices.find((d) => d.id === activeId) ?? null;
  const sortedDevices = [...data.devices].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  const activeStats = useMemo(() => (active ? computeStats(active) : null), [active]);

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
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Device ROI Tracker</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.5)" }}>
            Track what each device actually costs — purchase or financing, plus ongoing warranty,
            servicing, and parts — against the revenue it generates. See your real ROI, your
            break-even progress, and whether you&apos;re on pace to hit your payoff goal.
          </p>

          {/* New device */}
          <button onClick={createDevice} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
            style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
            <div className="flex items-center gap-4">
              <Gauge size={20} style={{ color: "#a28c75" }} />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Device</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Track purchase cost, ongoing costs, revenue, and payoff pace for one device.</p>
              </div>
            </div>
          </button>

          {/* Saved devices */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Your Devices</h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          {sortedDevices.length === 0 ? (
            <div className="rounded-xl border p-10 text-center" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>No devices tracked yet — add one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedDevices.map((d) => {
                const stats = computeStats(d);
                return (
                  <div key={d.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                    style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                      <Gauge size={17} style={{ color: "#a28c75" }} />
                    </div>
                    <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openDevice(d.id)}>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{d.name}</p>
                        {stats.totalInvested > 0 && (
                          <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: stats.isBreakEven ? "#7db870" : "rgba(162,140,117,0.75)" }}>
                            {stats.isBreakEven ? "Broke even" : `${Math.round(stats.percentRecovered)}% recovered`}
                          </span>
                        )}
                      </div>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>
                        {stats.totalInvested > 0 ? `${formatMoney(stats.totalRevenue)} of ${formatMoney(stats.totalInvested)} invested` : "No cost entered yet"} · Purchased {formatDateShort(d.purchaseDate)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button onClick={() => openDevice(d.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                        Open
                      </button>
                      <button onClick={() => duplicateDevice(d.id)} title="Duplicate" className="p-2 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                        <Copy size={14} />
                      </button>
                      <button onClick={() => deleteDevice(d.id)} title="Delete" className="p-2 opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
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

  const stats = activeStats!;

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .print-preview-pane { display: block !important; }
          #device-roi-print-preview, #device-roi-print-preview * { visibility: visible; }
          #device-roi-print-preview {
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
              My Devices
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
              {tab === "edit" ? "Customize" : "Results"}
            </button>
          ))}
        </div>

        {/* Main layout */}
        <div className="flex h-[calc(100vh-73px)] md:h-[calc(100vh-73px)] overflow-hidden">
          {/* Editor panel */}
          <div className={`overflow-y-auto flex-shrink-0 no-print ${activeTab === "edit" ? "flex" : "hidden"} md:flex flex-col`}
            style={{ width: "100%", maxWidth: "460px", borderRight: "1px solid rgba(162,140,117,0.1)", background: "#170009" }}>
            <div className="p-5 space-y-6">
              {/* Device details */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Device Details</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Device Name</label>
                    <input type="text" value={active.name} onChange={(e) => updateField(active.id, "name", e.target.value)}
                      placeholder="e.g. Laser Device #1" className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Purchase Date</label>
                    <input type="date" value={active.purchaseDate} onChange={(e) => updateField(active.id, "purchaseDate", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ ...inputStyle, colorScheme: "dark" }} />
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

              {/* Purchase & Financing */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Purchase &amp; Financing</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Choose how the device was paid for so we can calculate the full cost, interest included.
                </p>
                <div className="flex gap-1.5 mb-3">
                  {(["full", "financed"] as const).map((opt) => (
                    <button key={opt} onClick={() => updateField(active.id, "paymentType", opt)}
                      className="flex-1 text-xs py-2 rounded transition-colors"
                      style={{
                        background: active.paymentType === opt ? "rgba(162,140,117,0.25)" : "rgba(162,140,117,0.07)",
                        border: `1px solid ${active.paymentType === opt ? "#a28c75" : "rgba(162,140,117,0.2)"}`,
                        color: active.paymentType === opt ? "#fffdf6" : "rgba(255,253,246,0.5)",
                      }}>
                      {opt === "full" ? "Paid in Full" : "Financed"}
                    </button>
                  ))}
                </div>

                {active.paymentType === "full" ? (
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Full Payment Amount</label>
                    <input type="text" value={active.fullPaymentAmount} onChange={(e) => updateField(active.id, "fullPaymentAmount", e.target.value)}
                      placeholder="$" className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-[10px] leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>Leave down payment at $0 if you&apos;re financing the entire cost with monthly payments only.</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Down Payment</label>
                        <input type="text" value={active.downPayment} onChange={(e) => updateField(active.id, "downPayment", e.target.value)}
                          placeholder="$0" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                      </div>
                      <div>
                        <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Monthly Payment</label>
                        <input type="text" value={active.monthlyPayment} onChange={(e) => updateField(active.id, "monthlyPayment", e.target.value)}
                          placeholder="$" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Term (months)</label>
                      <input type="text" value={active.termMonths} onChange={(e) => updateField(active.id, "termMonths", e.target.value)}
                        placeholder="e.g. 36" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                    </div>
                  </div>
                )}
                <div className="mt-3 rounded-lg px-3 py-2.5" style={{ background: "rgba(162,140,117,0.08)", border: "1px solid rgba(162,140,117,0.15)" }}>
                  <p className="text-[10px] uppercase tracking-wide" style={{ color: "rgba(162,140,117,0.55)" }}>Total device cost, incl. financing</p>
                  <p className="text-base font-medium" style={{ color: "#fffdf6" }}>{formatMoney(stats.deviceBaseCost)}</p>
                </div>
              </section>

              {/* Ongoing costs */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Ongoing Costs</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Warranties, servicing, and replacement parts — logged as they happen.
                </p>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="p-3 space-y-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.costs.length === 0 && (
                      <p className="text-xs italic py-1" style={{ color: "rgba(255,253,246,0.28)" }}>No costs logged yet.</p>
                    )}
                    {[...active.costs].sort((a, b) => (a.date < b.date ? 1 : -1)).map((c) => (
                      <div key={c.id} className="flex items-start gap-2 group py-1 border-b last:border-b-0" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{formatMoney(parseMoney(c.amount))}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "rgba(162,140,117,0.1)", color: "rgba(162,140,117,0.7)" }}>{CATEGORY_LABELS[c.category]}</span>
                            <span className="text-[10px]" style={{ color: "rgba(255,253,246,0.4)" }}>{formatDateShort(c.date)}</span>
                          </div>
                          {c.note && <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.5)" }}>{c.note}</p>}
                        </div>
                        <button onClick={() => deleteCost(active.id, c.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                          <Trash2 size={11} />
                        </button>
                      </div>
                    ))}
                    <div className="pt-1.5 space-y-1.5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <input type="date" value={costDraft.date} onChange={(e) => setCostDraft((p) => ({ ...p, date: e.target.value }))}
                          className="text-xs rounded px-2 py-1.5 outline-none" style={{ ...inputStyle, colorScheme: "dark" }} />
                        <select value={costDraft.category} onChange={(e) => setCostDraft((p) => ({ ...p, category: e.target.value as CostCategory }))}
                          className="text-xs rounded px-2 py-1.5 outline-none" style={inputStyle}>
                          {(Object.keys(CATEGORY_LABELS) as CostCategory[]).map((k) => (
                            <option key={k} value={k} style={{ background: "#1a000c" }}>{CATEGORY_LABELS[k]}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <input type="text" value={costDraft.amount} onChange={(e) => setCostDraft((p) => ({ ...p, amount: e.target.value }))}
                          placeholder="$ amount" className="w-24 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        <input type="text" value={costDraft.note} onChange={(e) => setCostDraft((p) => ({ ...p, note: e.target.value }))}
                          onKeyDown={(e) => { if (e.key === "Enter") addCost(active.id); }}
                          placeholder="Note (optional)" className="flex-1 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        <button onClick={() => addCost(active.id)} className="flex-shrink-0 p-1.5 rounded transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.65)" }}>
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Revenue log */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Revenue From This Device</p>
                <p className="text-[11px] leading-relaxed mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Log revenue as it comes in — monthly, quarterly, or annually.
                </p>
                <div className="flex gap-1.5 mb-3">
                  {(["monthly", "quarterly", "annual"] as const).map((opt) => (
                    <button key={opt} onClick={() => updateField(active.id, "revenuePeriod", opt)}
                      className="flex-1 text-xs py-1.5 rounded capitalize transition-colors"
                      style={{
                        background: active.revenuePeriod === opt ? "rgba(162,140,117,0.25)" : "rgba(162,140,117,0.07)",
                        border: `1px solid ${active.revenuePeriod === opt ? "#a28c75" : "rgba(162,140,117,0.2)"}`,
                        color: active.revenuePeriod === opt ? "#fffdf6" : "rgba(255,253,246,0.5)",
                      }}>
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="p-3 space-y-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.revenues.length === 0 && (
                      <p className="text-xs italic py-1" style={{ color: "rgba(255,253,246,0.28)" }}>No revenue logged yet.</p>
                    )}
                    {[...active.revenues].sort((a, b) => (a.date < b.date ? 1 : -1)).map((r) => (
                      <div key={r.id} className="flex items-start gap-2 group py-1 border-b last:border-b-0" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{formatMoney(parseMoney(r.amount))}</span>
                            <span className="text-[10px]" style={{ color: "rgba(255,253,246,0.4)" }}>{formatDateShort(r.date)}</span>
                          </div>
                          {r.note && <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.5)" }}>{r.note}</p>}
                        </div>
                        <button onClick={() => deleteRevenue(active.id, r.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                          <Trash2 size={11} />
                        </button>
                      </div>
                    ))}
                    <div className="pt-1.5 space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <input type="date" value={revenueDraft.date} onChange={(e) => setRevenueDraft((p) => ({ ...p, date: e.target.value }))}
                          className="text-xs rounded px-2 py-1.5 outline-none" style={{ ...inputStyle, colorScheme: "dark" }} />
                        <input type="text" value={revenueDraft.amount} onChange={(e) => setRevenueDraft((p) => ({ ...p, amount: e.target.value }))}
                          placeholder="$ amount" className="w-24 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <input type="text" value={revenueDraft.note} onChange={(e) => setRevenueDraft((p) => ({ ...p, note: e.target.value }))}
                          onKeyDown={(e) => { if (e.key === "Enter") addRevenue(active.id); }}
                          placeholder={REVENUE_PLACEHOLDER[active.revenuePeriod]} className="flex-1 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        <button onClick={() => addRevenue(active.id)} className="flex-shrink-0 p-1.5 rounded transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.65)" }}>
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Goals */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Payoff &amp; ROI Goals</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Set a target payoff date and, optionally, a target ROI to track your pace against.
                </p>
                <div className="space-y-2">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Target Payoff Date</label>
                    <input type="date" value={active.payoffGoalDate} onChange={(e) => updateField(active.id, "payoffGoalDate", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={{ ...inputStyle, colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Target ROI % (optional, beyond break-even)</label>
                    <input type="text" value={active.roiGoalPercent} onChange={(e) => updateField(active.id, "roiGoalPercent", e.target.value)}
                      placeholder="e.g. 50" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Results / Preview panel */}
          <div className={`print-preview-pane flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`} style={{ background: "#e8e0d8" }}>
            <div className="flex items-center justify-between px-6 py-3 no-print" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Live Results — updates as you enter data</span>
              <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: active.accentColor, color: "#fffdf6" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div id="device-roi-print-preview" style={{ background: "white", width: "100%", maxWidth: "780px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "9.5pt" }}>
                {/* Header */}
                <div style={{ borderBottom: `4px solid ${active.accentColor}`, padding: "24px 32px 16px" }}>
                  <div style={{ fontSize: "17pt", fontWeight: "bold", color: active.accentColor, letterSpacing: "0.02em", fontFamily: "Arial, sans-serif" }}>
                    {active.name} — ROI Report
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "#555", marginTop: "8px", fontFamily: "Arial, sans-serif" }}>
                    Purchased {formatDateShort(active.purchaseDate) || "—"} · {active.paymentType === "full" ? "Paid in full" : "Financed"}
                  </div>
                </div>

                {/* Stat cards */}
                <div style={{ padding: "20px 32px 4px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px" }}>
                    {[
                      { label: "Total Invested", val: formatMoney(stats.totalInvested) },
                      { label: "Total Revenue", val: formatMoney(stats.totalRevenue) },
                      { label: "Net Position", val: (stats.netPosition >= 0 ? "+" : "") + formatMoney(stats.netPosition) },
                      { label: "ROI", val: `${stats.roiPercent >= 0 ? "+" : ""}${stats.roiPercent.toFixed(1)}%` },
                    ].map((s) => (
                      <div key={s.label} style={{ border: "1px solid #eee", borderRadius: "8px", padding: "10px 12px" }}>
                        <div style={{ fontSize: "7pt", fontFamily: "Arial, sans-serif", textTransform: "uppercase", letterSpacing: "0.05em", color: "#999" }}>{s.label}</div>
                        <div style={{ fontSize: "13pt", fontWeight: "bold", color: "#1a1a1a", marginTop: "2px" }}>{s.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div style={{ marginTop: "16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8pt", fontFamily: "Arial, sans-serif", color: "#666", marginBottom: "4px" }}>
                      <span>{Math.round(stats.percentRecovered)}% of investment recovered</span>
                      <span>{stats.isBreakEven ? "Break-even reached" : formatMoney(Math.max(0, stats.totalInvested - stats.totalRevenue)) + " remaining"}</span>
                    </div>
                    <div style={{ height: "10px", borderRadius: "5px", background: "#eee", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${stats.percentRecovered}%`, background: active.accentColor, borderRadius: "5px" }} />
                    </div>
                  </div>
                </div>

                {/* Cost breakdown */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "11pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "8px" }}>
                    Investment Breakdown
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", borderBottom: "1px solid #eee" }}>Device cost (incl. financing)</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", textAlign: "right" }}>{formatMoney(stats.deviceBaseCost)}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", borderBottom: "1px solid #eee" }}>Ongoing costs ({active.costs.length} logged)</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", textAlign: "right" }}>{formatMoney(stats.totalCosts)}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold" }}>Total Invested</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", fontWeight: "bold", textAlign: "right" }}>{formatMoney(stats.totalInvested)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pacing */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "11pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "8px" }}>
                    Payoff Pace
                  </div>
                  {stats.isBreakEven ? (
                    <div style={{ fontSize: "8.5pt", color: "#333" }}>
                      ✓ Break-even reached{stats.breakEvenEntryDate ? ` around ${formatDateShort(stats.breakEvenEntryDate)}` : ""}.
                    </div>
                  ) : stats.avgMonthlyRevenue > 0 && stats.projectedBreakEvenDate ? (
                    <>
                      <div style={{ fontSize: "8.5pt", color: "#333", marginBottom: "4px" }}>
                        At your current average pace ({formatMoney(stats.avgMonthlyRevenue)}/mo), projected break-even: <strong>{stats.projectedBreakEvenDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</strong>
                      </div>
                      {active.payoffGoalDate && stats.paceStatus && (
                        <div style={{ fontSize: "8.5pt", color: stats.paceStatus === "behind" ? "#a04040" : "#2f7a3f" }}>
                          {stats.paceStatus === "ahead" && `Ahead of your ${formatDateShort(active.payoffGoalDate)} goal by about ${stats.paceDiffMonths?.toFixed(1)} months.`}
                          {stats.paceStatus === "behind" && `Behind your ${formatDateShort(active.payoffGoalDate)} goal by about ${stats.paceDiffMonths?.toFixed(1)} months.`}
                          {stats.paceStatus === "on" && `Right on pace for your ${formatDateShort(active.payoffGoalDate)} goal.`}
                        </div>
                      )}
                    </>
                  ) : (
                    <div style={{ fontSize: "8.5pt", color: "#999" }}>Log at least one revenue entry to see your break-even projection.</div>
                  )}
                  {active.payoffGoalDate && !stats.isBreakEven && stats.goalPassed && (
                    <div style={{ fontSize: "8.5pt", color: "#a04040", marginTop: "4px" }}>Your target payoff date of {formatDateShort(active.payoffGoalDate)} has already passed.</div>
                  )}
                  {active.payoffGoalDate && !stats.isBreakEven && stats.neededMonthlyForGoal !== null && (
                    <div style={{ fontSize: "8.5pt", color: "#333", marginTop: "4px" }}>
                      To hit your {formatDateShort(active.payoffGoalDate)} goal, you need to average {formatMoney(stats.neededMonthlyForGoal)}/mo from here.
                    </div>
                  )}
                  {stats.roiGoalTargetRevenue !== null && (
                    <div style={{ fontSize: "8.5pt", color: "#333", marginTop: "8px" }}>
                      {stats.roiGoalReached
                        ? `✓ Target ROI of ${active.roiGoalPercent}% reached (needed ${formatMoney(stats.roiGoalTargetRevenue)} in revenue).`
                        : stats.projectedROIGoalDate
                        ? `Projected to hit your ${active.roiGoalPercent}% ROI goal around ${stats.projectedROIGoalDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}.`
                        : `Needs ${formatMoney(stats.roiGoalTargetRevenue)} total revenue to hit your ${active.roiGoalPercent}% ROI goal — log revenue to see a projected date.`}
                    </div>
                  )}
                </div>

                {/* Ongoing costs table */}
                {active.costs.length > 0 && (
                  <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                    <div style={{ fontSize: "11pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "8px" }}>
                      Ongoing Cost Log
                    </div>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          <td style={{ padding: "3px 6px 3px 0", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Date</td>
                          <td style={{ padding: "3px 6px", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Category</td>
                          <td style={{ padding: "3px 6px", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Amount</td>
                          <td style={{ padding: "3px 6px", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Note</td>
                        </tr>
                      </thead>
                      <tbody>
                        {[...active.costs].sort((a, b) => (a.date < b.date ? -1 : 1)).map((c) => (
                          <tr key={c.id}>
                            <td style={{ padding: "4px 6px 4px 0", fontSize: "8pt", borderBottom: "1px solid #eee" }}>{formatDateShort(c.date)}</td>
                            <td style={{ padding: "4px 6px", fontSize: "8pt", borderBottom: "1px solid #eee" }}>{CATEGORY_LABELS[c.category]}</td>
                            <td style={{ padding: "4px 6px", fontSize: "8pt", borderBottom: "1px solid #eee" }}>{formatMoney(parseMoney(c.amount))}</td>
                            <td style={{ padding: "4px 6px", fontSize: "8pt", borderBottom: "1px solid #eee", color: c.note ? "#333" : "#ccc" }}>{c.note || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Revenue table */}
                {active.revenues.length > 0 && (
                  <div style={{ padding: "18px 32px 24px", breakInside: "avoid" }}>
                    <div style={{ fontSize: "11pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "8px" }}>
                      Revenue Log
                    </div>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          <td style={{ padding: "3px 6px 3px 0", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Date</td>
                          <td style={{ padding: "3px 6px", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Amount</td>
                          <td style={{ padding: "3px 6px", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Note</td>
                        </tr>
                      </thead>
                      <tbody>
                        {[...active.revenues].sort((a, b) => (a.date < b.date ? -1 : 1)).map((r) => (
                          <tr key={r.id}>
                            <td style={{ padding: "4px 6px 4px 0", fontSize: "8pt", borderBottom: "1px solid #eee" }}>{formatDateShort(r.date)}</td>
                            <td style={{ padding: "4px 6px", fontSize: "8pt", borderBottom: "1px solid #eee" }}>{formatMoney(parseMoney(r.amount))}</td>
                            <td style={{ padding: "4px 6px", fontSize: "8pt", borderBottom: "1px solid #eee", color: r.note ? "#333" : "#ccc" }}>{r.note || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
