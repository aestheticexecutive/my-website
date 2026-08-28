"use client";

import React, { useEffect, useCallback, useMemo, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  ArrowLeft,
  Gem,
  Save,
  Check,
  Copy,
  Trash2,
  Plus,
  Target,
  Wallet,
  ExternalLink,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Scenario {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;

  avgTicket: string;
  visitsPerYear: string;
  retentionRate: string;

  targetRatio: string;
  actualCac: string;

  notes: string;
}

interface StoreData {
  scenarios: Scenario[];
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
    avgTicket: "",
    visitsPerYear: "",
    retentionRate: "",
    targetRatio: "3",
    actualCac: "",
    notes: "",
  };
}

function defaultData(): StoreData {
  return { scenarios: [] };
}

// ── Model ────────────────────────────────────────────────────────────────────

function clampedRetention(s: Scenario): number {
  const r = parseNum(s.retentionRate) / 100;
  return Math.min(0.95, Math.max(0, r));
}

function expectedLifespanYears(s: Scenario): number {
  const r = clampedRetention(s);
  return 1 / (1 - r);
}

function ltv(s: Scenario): number {
  return parseNum(s.avgTicket) * parseNum(s.visitsPerYear) * expectedLifespanYears(s);
}

function maxRecommendedCac(s: Scenario): number {
  const ratio = parseNum(s.targetRatio) || 3;
  return ltv(s) / ratio;
}

function breakEvenCac(s: Scenario): number {
  return ltv(s);
}

function actualRatio(s: Scenario): number | null {
  const cac = parseNum(s.actualCac);
  if (cac <= 0) return null;
  const v = ltv(s);
  return v > 0 ? v / cac : 0;
}

function scenarioSummary(s: Scenario): string {
  const v = ltv(s);
  if (v <= 0) return "Add your numbers to see LTV and a recommended acquisition budget";
  return `LTV: ${formatMoney(v)} · Max recommended CAC: ${formatMoney(maxRecommendedCac(s))}`;
}

// ── Shared UI bits ───────────────────────────────────────────────────────────

const inputStyle = { background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" };

function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
  hint?: string;
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
            paddingRight: suffix ? "2.4rem" : "0.75rem",
          }}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "rgba(255,253,246,0.35)" }}>
            {suffix}
          </span>
        )}
      </div>
      {hint && (
        <p className="text-xs leading-relaxed mt-1.5" style={{ color: "rgba(255,253,246,0.35)" }}>
          {hint}
        </p>
      )}
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

// ── Component ────────────────────────────────────────────────────────────────

export default function LtvCacCalculatorPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>(defaultData());
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  const storageKey = user ? `ae_ltv_cac_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.scenarios)) {
          const scenarios: Scenario[] = parsed.scenarios.map((s: Partial<Scenario> & Record<string, unknown>) => ({
            ...defaultScenario(""),
            ...s,
          }));
          setData({ scenarios });
        }
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

  const handleSave = useCallback(() => {
    if (!storageKey) return;
    const now = new Date().toISOString();
    localStorage.setItem(storageKey, JSON.stringify({ ...data, _savedAt: now }));
    setLastSaved(now);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }, [storageKey, data]);

  // ── Scenario CRUD ──

  function createScenario() {
    const s = defaultScenario(newName.trim() || "Average Patient");
    setData((prev) => ({ scenarios: [s, ...prev.scenarios] }));
    setActiveId(s.id);
    setView("editor");
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
  }
  function startRename(s: Scenario) {
    setRenamingId(s.id);
    setRenameValue(s.name);
  }
  function commitRename() {
    if (renamingId) {
      updateField(renamingId, "name", renameValue.trim() || "Untitled Scenario");
    }
    setRenamingId(null);
  }

  function updateField<K extends keyof Scenario>(id: string, field: K, value: Scenario[K]) {
    setData((prev) => ({
      scenarios: prev.scenarios.map((s) => (s.id === id ? { ...s, [field]: value, updatedAt: new Date().toISOString() } : s)),
    }));
  }

  const active = data.scenarios.find((s) => s.id === activeId) ?? null;
  const sortedScenarios = [...data.scenarios].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));

  const lifespan = useMemo(() => (active ? expectedLifespanYears(active) : 0), [active]);
  const scenarioLtv = active ? ltv(active) : 0;
  const maxCac = active ? maxRecommendedCac(active) : 0;
  const breakEven = active ? breakEvenCac(active) : 0;
  const ratio = active ? actualRatio(active) : null;
  const targetRatioNum = active ? parseNum(active.targetRatio) || 3 : 3;

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
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Client LTV &amp; Acquisition Cost Calculator</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.5)" }}>
            Turn retention rate, visit frequency, and average ticket into one number — what a
            patient is actually worth over their time with you — then see exactly how much you can
            afford to spend acquiring one. Save a scenario per patient segment or channel to compare
            side by side.
          </p>

          {/* New scenario */}
          {creating ? (
            <div className="rounded-xl p-6 mb-12" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
              <TextField label="Name this scenario" value={newName} onChange={setNewName} placeholder="e.g. Average Patient, Injectable-Only, Membership Patient..." />
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
                <Gem size={20} style={{ color: "#a28c75" }} />
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Scenario</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Model a patient segment or acquisition channel — create as many as you want to compare.</p>
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
                    <Gem size={17} style={{ color: "#a28c75" }} />
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

  let readout: { label: string; tone: "good" | "mid" | "bad" } | null = null;
  if (ratio !== null) {
    if (ratio >= targetRatioNum) {
      readout = { label: "Healthy — you're acquiring patients efficiently relative to their lifetime value.", tone: "good" };
    } else if (ratio > 1) {
      readout = { label: "Above break-even, but below your target ratio — there's room to tighten acquisition cost or grow patient lifetime value.", tone: "mid" };
    } else {
      readout = { label: "At or below break-even — you're spending as much or more to acquire a patient as they're worth over their lifetime with you.", tone: "bad" };
    }
  }
  const toneColor = readout?.tone === "good" ? "#7fbf8f" : readout?.tone === "mid" ? "#a28c75" : "#e0918f";

  return (
    <div className="min-h-screen" style={{ background: "#170009" }}>
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 pt-8 pb-6">
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

          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Finance · LTV &amp; CAC</p>
          <h1 className="font-display text-3xl md:text-4xl font-light" style={{ color: "#fffdf6" }}>{s.name}</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 space-y-10">
        {/* Patient value inputs */}
        <div>
          <SectionHeading
            title="Patient value inputs"
            sub="What a patient spends per visit, how often they come back, and what share of patients return year over year."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <NumberField label="Average ticket per visit" prefix="$" value={s.avgTicket} onChange={(v) => updateField(s.id, "avgTicket", v)} />
            <NumberField label="Average visits per year" value={s.visitsPerYear} onChange={(v) => updateField(s.id, "visitsPerYear", v)} />
            <NumberField
              label="Annual retention rate"
              suffix="%"
              value={s.retentionRate}
              onChange={(v) => updateField(s.id, "retentionRate", v)}
              hint="% of patients who return again within a year. Capped at 95% for a realistic lifetime estimate."
            />
          </div>
          <StatCard label="Expected Patient Lifespan" value={`${lifespan.toFixed(1)} years`} />
        </div>

        {/* LTV result */}
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)", borderColor: "rgba(162,140,117,0.2)" }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
            The result
          </p>
          <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>
            Estimated Patient Lifetime Value
          </h2>
          <p className="font-display text-4xl font-light mb-3" style={{ color: "#a28c75" }}>{formatMoney(scenarioLtv)}</p>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.55)" }}>
            {formatMoney(parseNum(s.avgTicket))} per visit × {parseNum(s.visitsPerYear) || 0} visits/year × {lifespan.toFixed(1)} expected years = {formatMoney(scenarioLtv)} over the patient&apos;s time with you.
          </p>
        </div>

        {/* Acquisition budget */}
        <div>
          <SectionHeading
            title="What you can afford to spend"
            sub="A common benchmark for service businesses is a 3:1 LTV-to-CAC ratio — enough margin left over to cover overhead, marketing, and real profit. Adjust it to fit your own margins."
          />
          <div className="max-w-xs mb-6">
            <NumberField label="Target LTV : CAC ratio" suffix=": 1" value={s.targetRatio} onChange={(v) => updateField(s.id, "targetRatio", v)} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard label={`Recommended Max Acquisition Cost (${targetRatioNum}:1)`} value={formatMoney(maxCac)} accent />
            <StatCard label="Break-Even Acquisition Cost (1:1 — never exceed)" value={formatMoney(breakEven)} />
          </div>
        </div>

        {/* Compare actual spend */}
        <div className="rounded-xl border p-6 md:p-7" style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}>
          <SectionHeading
            title="Compare your actual spend"
            sub="Total marketing spend ÷ new patients acquired over the same period gives you a real, working cost-per-acquisition to test against the numbers above."
          />
          <div className="max-w-xs mb-6">
            <NumberField label="Actual / estimated cost to acquire one patient" prefix="$" value={s.actualCac} onChange={(v) => updateField(s.id, "actualCac", v)} />
          </div>

          {ratio !== null && readout && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
              <StatCard label="Your Actual LTV : CAC Ratio" value={`${ratio.toFixed(1)} : 1`} accent />
              <div className="rounded-xl border p-5" style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.14)" }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-1.5" style={{ color: "rgba(162,140,117,0.6)" }}>Read on this</p>
                <p className="text-sm leading-relaxed" style={{ color: toneColor }}>{readout.label}</p>
              </div>
            </div>
          )}
        </div>

        {/* Notes */}
        <div>
          <SectionHeading title="Notes" />
          <textarea
            value={s.notes}
            onChange={(e) => updateField(s.id, "notes", e.target.value)}
            placeholder="Which channel or segment this scenario represents, assumptions, or anything else worth remembering..."
            rows={3}
            className="w-full text-sm rounded-lg px-3 py-2.5 outline-none resize-none"
            style={inputStyle}
          />
        </div>

        {/* CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link
            href="/members/resources/finance/kpi-tracker"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="p-7 flex items-center gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <Wallet size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>KPI Tracker</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Track new-lead and new-patient counts monthly to keep your actual CAC current.</p>
              </div>
              <ExternalLink size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }} />
            </div>
          </Link>
          <Link
            href="/members/resources/marketing/marketing-strategy-tool"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="p-7 flex items-center gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <Target size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Marketing Strategy Builder</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Set channel-by-channel spend against the budget this scenario says you can afford.</p>
              </div>
              <ExternalLink size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
