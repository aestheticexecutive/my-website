"use client";

import { useState, useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  X,
  ChevronDown,
  ChevronRight,
  Save,
  Check,
  Trash2,
  Package,
  ClipboardCheck,
  PackagePlus,
  Calendar,
  AlertTriangle,
  Download,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  vendor: string;
  unit: string;
  cost: string; // per-unit cost, numeric string
  parLevel: string; // numeric string
}

interface CountEntry {
  id: string;
  date: string; // YYYY-MM-DD
  counts: Record<string, string>; // itemId -> counted quantity
}

interface ReceiptEntry {
  id: string;
  date: string; // YYYY-MM-DD
  itemId: string;
  quantity: string;
  note: string;
}

interface InventoryData {
  items: InventoryItem[];
  counts: CountEntry[];
  receipts: ReceiptEntry[];
}

type Preset = "thisMonth" | "lastMonth" | "thisQuarter" | "ytd" | "allTime" | "custom";

// ── Helpers ──────────────────────────────────────────────────────────────────

function genId(): string {
  return Math.random().toString(36).slice(2, 11);
}

function num(val: string): number {
  const n = parseFloat(val);
  return isNaN(n) ? 0 : n;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
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

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtUnits(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

function csvEscape(val: string): string {
  const s = String(val ?? "");
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function downloadCSV(filename: string, rows: (string | number)[][]) {
  const csv = rows.map((row) => row.map((cell) => csvEscape(String(cell))).join(",")).join("\r\n");
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

// On-hand quantity for an item, computed from the most recent physical count
// at/before `cutoff` (baseline) plus any receipts logged after that count.
function onHand(itemId: string, cutoff: string, inclusive: boolean, counts: CountEntry[], receipts: ReceiptEntry[]): number {
  const withinCutoff = (d: string) => (inclusive ? d <= cutoff : d < cutoff);
  const relevantCounts = counts
    .filter((c) => withinCutoff(c.date) && c.counts[itemId] !== undefined && c.counts[itemId].trim() !== "")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  const baseline = relevantCounts[0];
  const baselineQty = baseline ? num(baseline.counts[itemId]) : 0;
  const baselineDate = baseline ? baseline.date : null;
  const receiptsSum = receipts
    .filter((r) => r.itemId === itemId && withinCutoff(r.date) && (!baselineDate || r.date > baselineDate))
    .reduce((sum, r) => sum + num(r.quantity), 0);
  return baselineQty + receiptsSum;
}

function currentOnHand(itemId: string, counts: CountEntry[], receipts: ReceiptEntry[]): number {
  return onHand(itemId, todayISO(), true, counts, receipts);
}

interface Utilization {
  opening: number;
  received: number;
  closing: number;
  usedUnits: number;
}

function computeUtilization(itemId: string, start: string, end: string, counts: CountEntry[], receipts: ReceiptEntry[]): Utilization {
  // Opening includes anything dated exactly on `start` (a count or receipt logged
  // that day anchors the period's beginning); `received` then only counts receipts
  // strictly after `start` so nothing is double-counted between the two.
  const opening = start ? onHand(itemId, start, true, counts, receipts) : 0;
  const closing = onHand(itemId, end || todayISO(), true, counts, receipts);
  const received = receipts
    .filter((r) => r.itemId === itemId && (!start || r.date > start) && (!end || r.date <= end))
    .reduce((sum, r) => sum + num(r.quantity), 0);
  const usedUnits = Math.max(0, opening + received - closing);
  return { opening, received, closing, usedUnits };
}

// ── Component ────────────────────────────────────────────────────────────────

export default function InventoryManagementPage() {
  const { user } = useUser();
  const [view, setView] = useState<"items" | "activity" | "reports">("items");
  const [data, setData] = useState<InventoryData>({ items: [], counts: [], receipts: [] });
  const [editingField, setEditingField] = useState<string | null>(null); // `${itemId}:${field}`

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  // Log Activity state
  const [countDate, setCountDate] = useState(todayISO());
  const [countDraft, setCountDraft] = useState<Record<string, string>>({});
  const [expandedCountId, setExpandedCountId] = useState<string | null>(null);

  // Reports state
  const [preset, setPreset] = useState<Preset>("thisMonth");
  const [rangeStart, setRangeStart] = useState<string>(getPresetRange("thisMonth").start);
  const [rangeEnd, setRangeEnd] = useState<string>(getPresetRange("thisMonth").end);

  const storageKey = user ? `ae_inventory_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({
          items: Array.isArray(parsed.items) ? parsed.items : [],
          counts: Array.isArray(parsed.counts) ? parsed.counts : [],
          receipts: Array.isArray(parsed.receipts) ? parsed.receipts : [],
        });
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

  // ── Item CRUD ──

  function addItem() {
    const id = genId();
    setData((prev) => ({ ...prev, items: [...prev.items, { id, name: "New Item", category: "", vendor: "", unit: "each", cost: "", parLevel: "" }] }));
    setEditingField(`${id}:name`);
  }
  function updateItem(id: string, field: keyof Omit<InventoryItem, "id">, value: string) {
    setData((prev) => ({ ...prev, items: prev.items.map((it) => (it.id === id ? { ...it, [field]: value } : it)) }));
  }
  function deleteItem(id: string) {
    setData((prev) => ({
      ...prev,
      items: prev.items.filter((it) => it.id !== id),
      counts: prev.counts.map((c) => {
        const { [id]: _removed, ...rest } = c.counts;
        return { ...c, counts: rest };
      }),
      receipts: prev.receipts.filter((r) => r.itemId !== id),
    }));
  }

  // ── Counts ──

  function saveCount() {
    if (Object.values(countDraft).every((v) => !v || v.trim() === "")) return;
    setData((prev) => ({ ...prev, counts: [{ id: genId(), date: countDate, counts: countDraft }, ...prev.counts] }));
    setCountDraft({});
    setCountDate(todayISO());
  }
  function deleteCount(id: string) {
    setData((prev) => ({ ...prev, counts: prev.counts.filter((c) => c.id !== id) }));
  }

  // ── Receipts ──

  function addReceipt() {
    setData((prev) => ({ ...prev, receipts: [{ id: genId(), date: todayISO(), itemId: prev.items[0]?.id ?? "", quantity: "", note: "" }, ...prev.receipts] }));
  }
  function updateReceipt(id: string, field: keyof Omit<ReceiptEntry, "id">, value: string) {
    setData((prev) => ({ ...prev, receipts: prev.receipts.map((r) => (r.id === id ? { ...r, [field]: value } : r)) }));
  }
  function deleteReceipt(id: string) {
    setData((prev) => ({ ...prev, receipts: prev.receipts.filter((r) => r.id !== id) }));
  }

  function applyPreset(p: Preset) {
    setPreset(p);
    if (p === "custom") return;
    const r = getPresetRange(p);
    setRangeStart(r.start);
    setRangeEnd(r.end);
  }

  // ── Derived ──

  const totalValue = data.items.reduce((sum, it) => sum + currentOnHand(it.id, data.counts, data.receipts) * num(it.cost), 0);

  const utilizationRows = data.items
    .map((it) => {
      const u = computeUtilization(it.id, rangeStart, rangeEnd, data.counts, data.receipts);
      return { item: it, ...u, usedDollars: u.usedUnits * num(it.cost) };
    })
    .filter((r) => r.usedUnits > 0 || r.received > 0)
    .sort((a, b) => b.usedDollars - a.usedDollars);

  const totalUsedUnits = utilizationRows.reduce((s, r) => s + r.usedUnits, 0);
  const totalUsedDollars = utilizationRows.reduce((s, r) => s + r.usedDollars, 0);

  const belowParItems = data.items.filter((it) => {
    if (!it.parLevel.trim()) return false;
    return currentOnHand(it.id, data.counts, data.receipts) < num(it.parLevel);
  });
  const atParItems = data.items.filter((it) => {
    if (!it.parLevel.trim()) return false;
    return currentOnHand(it.id, data.counts, data.receipts) === num(it.parLevel);
  });

  const sortedCounts = [...data.counts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const sortedReceipts = [...data.receipts].sort((a, b) => (a.date < b.date ? 1 : -1));

  // Distinct values already typed in, offered as suggestions for future items
  const knownCategories = Array.from(new Set(data.items.map((it) => it.category.trim()).filter(Boolean))).sort();
  const knownVendors = Array.from(new Set(data.items.map((it) => it.vendor.trim()).filter(Boolean))).sort();
  const knownUnits = Array.from(new Set(data.items.map((it) => it.unit.trim()).filter(Boolean))).sort();

  function exportReportCSV() {
    const rows: (string | number)[][] = [
      ["Inventory Report"],
      ["Period", formatRangeLabel(rangeStart, rangeEnd)],
      ["Generated", formatDateLabel(todayISO())],
      [],
      ["Current Inventory Value On-Site", fmtCurrency(totalValue)],
      ["Units Utilized (Period)", fmtUnits(totalUsedUnits)],
      ["Dollars Utilized (Period)", fmtCurrency(totalUsedDollars)],
      [],
      ["Item", "Category", "Vendor", "Unit", "Opening", "Received", "Closing", "Used (Units)", "Used ($)"],
      ...utilizationRows.map((r) => [
        r.item.name,
        r.item.category,
        r.item.vendor,
        r.item.unit,
        fmtUnits(r.opening),
        fmtUnits(r.received),
        fmtUnits(r.closing),
        fmtUnits(r.usedUnits),
        r.usedDollars.toFixed(2),
      ]),
    ];
    const suffix = rangeStart || rangeEnd ? `${rangeStart || "start"}_to_${rangeEnd || "now"}` : "all-time";
    downloadCSV(`inventory-report_${suffix}.csv`, rows);
  }

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

  function statusFor(item: InventoryItem): "below" | "at" | "ok" | "none" {
    if (!item.parLevel.trim()) return "none";
    const oh = currentOnHand(item.id, data.counts, data.receipts);
    const par = num(item.parLevel);
    if (oh < par) return "below";
    if (oh === par) return "at";
    return "ok";
  }

  const statusColors: Record<string, { bg: string; border: string; text: string }> = {
    below: { bg: "rgba(200,70,70,0.12)", border: "rgba(200,70,70,0.4)", text: "#e07878" },
    at: { bg: "rgba(224,184,74,0.12)", border: "rgba(224,184,74,0.4)", text: "#e0b84a" },
    ok: { bg: "transparent", border: "rgba(162,140,117,0.08)", text: "rgba(255,253,246,0.55)" },
    none: { bg: "transparent", border: "rgba(162,140,117,0.08)", text: "rgba(255,253,246,0.3)" },
  };

  return (
    <div className="bg-[#170009] min-h-screen pb-24">
      {/* Shared autocomplete suggestions for Category / Vendor / Unit — populated from items already entered */}
      <datalist id="inv-categories">{knownCategories.map((c) => <option key={c} value={c} />)}</datalist>
      <datalist id="inv-vendors">{knownVendors.map((v) => <option key={v} value={v} />)}</datalist>
      <datalist id="inv-units">{knownUnits.map((u) => <option key={u} value={u} />)}</datalist>

      {/* Sticky sub-header */}
      <div className="sticky top-16 z-10 border-b" style={{ background: "rgba(10,0,3,0.96)", backdropFilter: "blur(16px)", borderColor: "rgba(162,140,117,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs">
            <Link href="/members/resources/operations" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={12} /> Operations
            </Link>
            <span style={{ color: "rgba(162,140,117,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,253,246,0.78)" }}>Inventory Management System</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            <div className="flex rounded-lg border overflow-hidden" style={{ borderColor: "rgba(162,140,117,0.2)" }}>
              {(["items", "activity", "reports"] as const).map((v) => (
                <button key={v} onClick={() => setView(v)} className="px-3 py-1.5 text-xs tracking-wide transition-colors"
                  style={{ background: view === v ? "rgba(162,140,117,0.18)" : "transparent", color: view === v ? "#fffdf6" : "rgba(255,253,246,0.35)" }}>
                  {v === "items" ? "Items" : v === "activity" ? "Log Activity" : "Reports"}
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
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Inventory Management System</h1>
          <p className="text-sm max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            Track product inventory by category, vendor, and cost. Log physical counts and incoming stock, watch your on-site dollar value in real time, and see par-level alerts the moment supply runs low.
          </p>

          {(belowParItems.length > 0 || atParItems.length > 0) && view !== "items" && (
            <div className="mt-6 flex flex-wrap gap-3">
              {belowParItems.length > 0 && (
                <button onClick={() => setView("items")} className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border transition-opacity hover:opacity-80"
                  style={{ background: statusColors.below.bg, borderColor: statusColors.below.border, color: statusColors.below.text }}>
                  <AlertTriangle size={12} />
                  {belowParItems.length} item{belowParItems.length === 1 ? "" : "s"} below par
                </button>
              )}
              {atParItems.length > 0 && (
                <button onClick={() => setView("items")} className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border transition-opacity hover:opacity-80"
                  style={{ background: statusColors.at.bg, borderColor: statusColors.at.border, color: statusColors.at.text }}>
                  <AlertTriangle size={12} />
                  {atParItems.length} item{atParItems.length === 1 ? "" : "s"} at par
                </button>
              )}
            </div>
          )}
        </div>

        {/* ════════════ ITEMS VIEW ════════════ */}
        {view === "items" && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>
                {data.items.length} item{data.items.length === 1 ? "" : "s"} tracked · Yellow = at par level · Red = below par level
              </p>
              <button onClick={addItem} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                <Plus size={12} /> Add Item
              </button>
            </div>

            <div className="rounded-xl border overflow-hidden" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              {data.items.length === 0 ? (
                <div className="px-6 py-10">
                  <p className="text-xs italic text-center" style={{ color: "rgba(255,253,246,0.28)" }}>
                    No items yet. Click &quot;Add Item&quot; to start building your inventory catalog.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="grid gap-3 px-6 py-2.5 text-xs tracking-[0.1em] uppercase"
                    style={{ gridTemplateColumns: "1fr 110px 110px 80px 90px 90px 100px 110px 32px", minWidth: "1080px", background: "rgba(162,140,117,0.06)", borderBottom: "1px solid rgba(162,140,117,0.1)", color: "rgba(162,140,117,0.6)" }}>
                    <span>Item</span>
                    <span>Category</span>
                    <span>Vendor</span>
                    <span>Unit</span>
                    <span className="text-right">Cost</span>
                    <span className="text-right">Par</span>
                    <span className="text-right">On Hand</span>
                    <span className="text-right">Value</span>
                    <span />
                  </div>

                  <div className="divide-y" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                    {data.items.map((item) => {
                      const status = statusFor(item);
                      const colors = statusColors[status];
                      const oh = currentOnHand(item.id, data.counts, data.receipts);
                      const value = oh * num(item.cost);
                      return (
                        <div key={item.id} className="grid gap-3 px-6 py-3.5 items-center"
                          style={{ gridTemplateColumns: "1fr 110px 110px 80px 90px 90px 100px 110px 32px", minWidth: "1080px", background: colors.bg, borderLeft: status === "below" || status === "at" ? `3px solid ${colors.border}` : "3px solid transparent" }}>
                          {editingField === `${item.id}:name` ? (
                            <input autoFocus type="text" value={item.name} onChange={(e) => updateItem(item.id, "name", e.target.value)}
                              onBlur={() => setEditingField(null)} onKeyDown={(e) => e.key === "Enter" && setEditingField(null)}
                              className="text-sm bg-transparent outline-none border-b" style={{ color: "#fffdf6", borderColor: "rgba(162,140,117,0.4)" }} />
                          ) : (
                            <span className="text-sm cursor-text truncate" style={{ color: "#fffdf6" }} onClick={() => setEditingField(`${item.id}:name`)}>
                              {item.name || <span className="italic" style={{ color: "rgba(255,253,246,0.32)" }}>Unnamed item</span>}
                            </span>
                          )}
                          <input type="text" list="inv-categories" placeholder="—" value={item.category} onChange={(e) => updateItem(item.id, "category", e.target.value)}
                            className="text-xs px-2 py-1.5 rounded-lg border outline-none w-full" style={inputStyle} />
                          <input type="text" list="inv-vendors" placeholder="—" value={item.vendor} onChange={(e) => updateItem(item.id, "vendor", e.target.value)}
                            className="text-xs px-2 py-1.5 rounded-lg border outline-none w-full" style={inputStyle} />
                          <input type="text" list="inv-units" placeholder="each" value={item.unit} onChange={(e) => updateItem(item.id, "unit", e.target.value)}
                            className="text-xs px-2 py-1.5 rounded-lg border outline-none w-full" style={inputStyle} />
                          <div className="flex items-center gap-1">
                            <span className="text-xs flex-shrink-0" style={{ color: "rgba(255,253,246,0.4)" }}>$</span>
                            <input type="number" min={0} step="0.01" placeholder="0.00" value={item.cost} onChange={(e) => updateItem(item.id, "cost", e.target.value)}
                              className="text-xs text-right px-2 py-1.5 rounded-lg border outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" style={inputStyle} />
                          </div>
                          <input type="number" min={0} step="1" placeholder="—" value={item.parLevel} onChange={(e) => updateItem(item.id, "parLevel", e.target.value)}
                            className="text-xs text-right px-2 py-1.5 rounded-lg border outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" style={inputStyle} />
                          <span className="text-sm text-right font-medium" style={{ color: colors.text !== statusColors.ok.text && colors.text !== statusColors.none.text ? colors.text : "#fffdf6" }}>
                            {fmtUnits(oh)} <span className="text-[10px]" style={{ color: "rgba(255,253,246,0.4)" }}>{item.unit}</span>
                          </span>
                          <span className="text-sm text-right" style={{ color: "rgba(255,253,246,0.65)" }}>{fmtCurrency(value)}</span>
                          <button onClick={() => deleteItem(item.id)} className="opacity-40 hover:opacity-80 transition-opacity flex justify-center" style={{ color: "#e07878" }}>
                            <Trash2 size={13} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ════════════ LOG ACTIVITY VIEW ════════════ */}
        {view === "activity" && (
          <div className="space-y-10">
            {data.items.length === 0 ? (
              <div className="rounded-xl border p-10 text-center" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                <p className="text-sm mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>Add items to your catalog before logging counts or receiving stock.</p>
                <button onClick={() => setView("items")} className="text-xs px-4 py-2 rounded-lg border" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                  Go to Items
                </button>
              </div>
            ) : (
              <>
                {/* Record a Count */}
                <div className="rounded-xl border overflow-hidden" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="px-6 pt-6 pb-4 flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <ClipboardCheck size={14} style={{ color: "#a28c75" }} />
                      <div>
                        <h2 className="text-sm font-medium" style={{ color: "#fffdf6" }}>Record a Count</h2>
                        <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>Enter the counted quantity for every item as of a date — this becomes the new on-hand baseline.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Calendar size={12} style={{ color: "rgba(162,140,117,0.5)" }} />
                      <input type="date" value={countDate} onChange={(e) => setCountDate(e.target.value)}
                        className="text-xs px-3 py-2 rounded-lg border outline-none" style={inputStyle} />
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <div className="grid gap-3 px-6 py-2.5 text-xs tracking-[0.1em] uppercase" style={{ gridTemplateColumns: "1fr 100px 140px", minWidth: "480px", background: "rgba(162,140,117,0.06)", borderTop: "1px solid rgba(162,140,117,0.1)", borderBottom: "1px solid rgba(162,140,117,0.1)", color: "rgba(162,140,117,0.6)" }}>
                      <span>Item</span>
                      <span className="text-right">Current</span>
                      <span className="text-right">New Count</span>
                    </div>
                    <div className="divide-y" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                      {data.items.map((item) => (
                        <div key={item.id} className="grid gap-3 px-6 py-3 items-center" style={{ gridTemplateColumns: "1fr 100px 140px", minWidth: "480px" }}>
                          <span className="text-sm" style={{ color: "#fffdf6" }}>{item.name} <span className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>({item.unit})</span></span>
                          <span className="text-xs text-right" style={{ color: "rgba(255,253,246,0.5)" }}>{fmtUnits(currentOnHand(item.id, data.counts, data.receipts))}</span>
                          <input type="number" min={0} step="1" placeholder="—" value={countDraft[item.id] ?? ""}
                            onChange={(e) => setCountDraft((prev) => ({ ...prev, [item.id]: e.target.value }))}
                            className="text-xs text-right px-3 py-2 rounded-lg border outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" style={inputStyle} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                    <button onClick={saveCount} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors"
                      style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                      <ClipboardCheck size={12} /> Save Count for {formatDateLabel(countDate)}
                    </button>
                  </div>
                </div>

                {/* Count history */}
                {sortedCounts.length > 0 && (
                  <div className="rounded-xl border overflow-hidden" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                    <div className="px-6 pt-6 pb-4">
                      <h2 className="text-sm font-medium" style={{ color: "#fffdf6" }}>Count History</h2>
                    </div>
                    <div className="divide-y" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                      {sortedCounts.map((c) => {
                        const itemsCounted = Object.entries(c.counts).filter(([, v]) => v.trim() !== "");
                        const expanded = expandedCountId === c.id;
                        return (
                          <div key={c.id} className="px-6 py-3.5">
                            <div className="flex items-center justify-between gap-3">
                              <button onClick={() => setExpandedCountId(expanded ? null : c.id)} className="flex items-center gap-2 text-left">
                                {expanded ? <ChevronDown size={13} style={{ color: "rgba(162,140,117,0.5)" }} /> : <ChevronRight size={13} style={{ color: "rgba(162,140,117,0.5)" }} />}
                                <span className="text-sm font-medium" style={{ color: "#a28c75" }}>{formatDateLabel(c.date)}</span>
                                <span className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>{itemsCounted.length} item{itemsCounted.length === 1 ? "" : "s"} counted</span>
                              </button>
                              <button onClick={() => deleteCount(c.id)} className="opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
                                <Trash2 size={13} />
                              </button>
                            </div>
                            {expanded && (
                              <div className="mt-3 ml-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {itemsCounted.map(([itemId, qty]) => {
                                  const item = data.items.find((it) => it.id === itemId);
                                  return (
                                    <div key={itemId} className="text-xs px-3 py-2 rounded-lg" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}>
                                      <span style={{ color: "rgba(255,253,246,0.7)" }}>{item?.name ?? "Deleted item"}</span>
                                      <span className="float-right font-medium" style={{ color: "#fffdf6" }}>{qty}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Receive Stock */}
                <div className="rounded-xl border overflow-hidden" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="px-6 pt-6 pb-4 flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <PackagePlus size={14} style={{ color: "#a28c75" }} />
                      <div>
                        <h2 className="text-sm font-medium" style={{ color: "#fffdf6" }}>Receive Stock</h2>
                        <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>Log new stock as it arrives from orders — it's added to on-hand immediately.</p>
                      </div>
                    </div>
                    <button onClick={addReceipt} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors flex-shrink-0"
                      style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                      <Plus size={12} /> Add Receipt
                    </button>
                  </div>

                  {sortedReceipts.length === 0 ? (
                    <div className="px-6 py-8">
                      <p className="text-xs italic text-center" style={{ color: "rgba(255,253,246,0.28)" }}>No stock received yet.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <div className="grid gap-3 px-6 py-2.5 text-xs tracking-[0.1em] uppercase" style={{ gridTemplateColumns: "130px 1fr 100px 1fr 32px", minWidth: "680px", background: "rgba(162,140,117,0.06)", borderTop: "1px solid rgba(162,140,117,0.1)", borderBottom: "1px solid rgba(162,140,117,0.1)", color: "rgba(162,140,117,0.6)" }}>
                        <span>Date</span>
                        <span>Item</span>
                        <span className="text-right">Quantity</span>
                        <span>Note</span>
                        <span />
                      </div>
                      <div className="divide-y" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                        {sortedReceipts.map((r) => (
                          <div key={r.id} className="grid gap-3 px-6 py-3 items-center" style={{ gridTemplateColumns: "130px 1fr 100px 1fr 32px", minWidth: "680px" }}>
                            <input type="date" value={r.date} onChange={(e) => updateReceipt(r.id, "date", e.target.value)}
                              className="text-xs px-3 py-2 rounded-lg border outline-none" style={inputStyle} />
                            <div className="relative">
                              <select value={r.itemId} onChange={(e) => updateReceipt(r.id, "itemId", e.target.value)}
                                className="appearance-none w-full text-xs px-3 py-2 pr-7 rounded-lg border cursor-pointer" style={inputStyle}>
                                {data.items.map((it) => <option key={it.id} value={it.id}>{it.name}</option>)}
                              </select>
                              <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(162,140,117,0.45)" }} />
                            </div>
                            <input type="number" min={0} step="1" placeholder="0" value={r.quantity} onChange={(e) => updateReceipt(r.id, "quantity", e.target.value)}
                              className="text-xs text-right px-3 py-2 rounded-lg border outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" style={inputStyle} />
                            <input type="text" placeholder="e.g. PO #1042" value={r.note} onChange={(e) => updateReceipt(r.id, "note", e.target.value)}
                              className="text-xs px-3 py-2 rounded-lg border outline-none" style={inputStyle} />
                            <button onClick={() => deleteReceipt(r.id)} className="opacity-40 hover:opacity-80 transition-opacity flex justify-center" style={{ color: "#e07878" }}>
                              <Trash2 size={13} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {/* ════════════ REPORTS VIEW ════════════ */}
        {view === "reports" && (
          <div>
            <div className="flex justify-end mb-4">
              <button onClick={exportReportCSV} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors"
                style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                <Download size={12} /> Export CSV
              </button>
            </div>

            {/* Current value */}
            <div className="rounded-xl border p-6 mb-8" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>Current Inventory Value On-Site</p>
              <p className="font-display text-4xl font-light" style={{ color: "#fffdf6" }}>{fmtCurrency(totalValue)}</p>
              <p className="text-xs mt-2" style={{ color: "rgba(255,253,246,0.4)" }}>Live — based on current on-hand quantity × cost across {data.items.length} item{data.items.length === 1 ? "" : "s"}.</p>
            </div>

            {/* Date range filter */}
            <div className="rounded-xl border p-5 mb-8" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={13} style={{ color: "#a28c75" }} />
                <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>Utilization Period</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {presetOptions.map((p) => (
                  <button key={p.id} onClick={() => applyPreset(p.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors"
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
              <p className="text-xs mt-3" style={{ color: "rgba(255,253,246,0.32)" }}>
                Usage is revealed by physical counts — log a count at the end of this period for the most accurate numbers.
              </p>
            </div>

            {/* Summary tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="rounded-xl border p-6" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>Units Utilized</p>
                <p className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>{fmtUnits(totalUsedUnits)}</p>
              </div>
              <div className="rounded-xl border p-6" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>Dollars Utilized</p>
                <p className="font-display text-3xl font-light" style={{ color: "#a28c75" }}>{fmtCurrency(totalUsedDollars)}</p>
              </div>
            </div>

            {/* By item */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Utilization by Item</h2>
                <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
              </div>
              {utilizationRows.length === 0 ? (
                <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No usage or receipts recorded for this period.</p>
              ) : (
                <div className="rounded-xl border overflow-hidden overflow-x-auto" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="grid text-xs tracking-[0.1em] uppercase px-5 py-3"
                    style={{ gridTemplateColumns: "1fr 110px 110px 110px 110px 120px", background: "rgba(162,140,117,0.06)", borderBottom: "1px solid rgba(162,140,117,0.1)", color: "rgba(162,140,117,0.6)", minWidth: "700px" }}>
                    <span>Item</span>
                    <span className="text-right">Opening</span>
                    <span className="text-right">Received</span>
                    <span className="text-right">Closing</span>
                    <span className="text-right">Used (Units)</span>
                    <span className="text-right">Used ($)</span>
                  </div>
                  {utilizationRows.map((r, i) => (
                    <div key={r.item.id} className="grid items-center px-5 py-3.5" style={{ gridTemplateColumns: "1fr 110px 110px 110px 110px 120px", background: i % 2 === 0 ? "rgba(20,0,8,0.5)" : "rgba(12,0,4,0.5)", minWidth: "700px", borderTop: i > 0 ? "1px solid rgba(162,140,117,0.05)" : undefined }}>
                      <p className="text-sm" style={{ color: "#fffdf6" }}>{r.item.name}</p>
                      <p className="text-sm text-right" style={{ color: "rgba(255,253,246,0.6)" }}>{fmtUnits(r.opening)}</p>
                      <p className="text-sm text-right" style={{ color: "#7ecf7e" }}>+{fmtUnits(r.received)}</p>
                      <p className="text-sm text-right" style={{ color: "rgba(255,253,246,0.6)" }}>{fmtUnits(r.closing)}</p>
                      <p className="text-sm text-right font-medium" style={{ color: "#fffdf6" }}>{fmtUnits(r.usedUnits)}</p>
                      <p className="text-sm text-right font-medium" style={{ color: "#a28c75" }}>{fmtCurrency(r.usedDollars)}</p>
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
