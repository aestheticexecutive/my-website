"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Printer, Eye, Settings2, ToggleLeft, ToggleRight, Save, Check } from "lucide-react";
import { useServerSyncedState } from "@/lib/useServerSyncedState";

// ── Types ──────────────────────────────────────────────────────────────────

type Frequency = "daily" | "weekly" | "monthly" | "custom";

interface ChecklistItem {
  id: string;
  label: string;
  enabled: boolean;
  frequency: Frequency;
  customFrequency: string;
}

interface ChecklistSection {
  id: "opening" | "closing";
  label: string;
  items: ChecklistItem[];
}

// ── Default checklist data ──────────────────────────────────────────────────

const defaultSections: ChecklistSection[] = [
  {
    id: "opening",
    label: "Opening Duties",
    items: [
      { id: "o1", label: "Disarm security system and unlock all entry doors", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o2", label: "Turn on lights, music, and exterior signage", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o3", label: "Set thermostat to comfortable temperature", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o4", label: "Power on front desk computer, POS, and phone system", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o5", label: "Check voicemail and respond to overnight messages", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o6", label: "Review today's schedule for VIPs, new patients, or special prep needs", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o7", label: "Restock reception area (water, coffee, menus)", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o8", label: "Sanitize reception desk and waiting area surfaces", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o9", label: "Open treatment rooms and confirm linens/disposables are stocked", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o10", label: "Power on and calibrate treatment devices/lasers per protocol", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o11", label: "Confirm controlled substances log matches inventory", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o12", label: "Check restrooms are clean and stocked", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "o13", label: "Restock retail displays and check for low inventory", enabled: true, frequency: "weekly", customFrequency: "" },
      { id: "o14", label: "Test emergency kit and AED accessibility", enabled: true, frequency: "monthly", customFrequency: "" },
    ],
  },
  {
    id: "closing",
    label: "Closing Duties",
    items: [
      { id: "c1", label: "Confirm all patients checked out and rooms are empty", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c2", label: "Reconcile cash drawer and close out POS system", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c3", label: "Secure controlled substances and lock safe", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c4", label: "Clean and disinfect treatment rooms and equipment", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c5", label: "Restock treatment rooms for tomorrow", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c6", label: "Power down devices/lasers per manufacturer protocol", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c7", label: "Empty trash and replace liners in all rooms", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c8", label: "Wipe down reception desk and waiting area", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c9", label: "Review tomorrow's schedule and flag any prep needs", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c10", label: "File or scan end-of-day paperwork and consent forms", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c11", label: "Lock all exterior doors and windows", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c12", label: "Set security alarm", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c13", label: "Turn off lights, music, and signage", enabled: true, frequency: "daily", customFrequency: "" },
      { id: "c14", label: "Deep clean floors", enabled: true, frequency: "weekly", customFrequency: "" },
    ],
  },
];

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

const frequencyOptions: { value: Frequency; label: string }[] = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "custom", label: "Custom" },
];

// ── Helpers ────────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function frequencyLabel(item: ChecklistItem): string {
  if (item.frequency === "custom") return item.customFrequency.trim() || "Custom";
  return frequencyOptions.find((f) => f.value === item.frequency)?.label ?? "Daily";
}

function isValidSections(val: unknown): val is ChecklistSection[] {
  return (
    Array.isArray(val) &&
    val.length > 0 &&
    val.every((s) => s && typeof s === "object" && Array.isArray((s as { items?: unknown }).items))
  );
}

// ── Server-synced data shape ─────────────────────────────────────────────────

interface ChecklistData {
  practiceName: string;
  tagline: string;
  footerNote: string;
  accentColor: string;
  sections: ChecklistSection[];
}

const defaultChecklistData: ChecklistData = {
  practiceName: "Your Practice Name",
  tagline: "",
  footerNote: "Report any incomplete items to the Practice Manager immediately.",
  accentColor: "#4a0018",
  sections: defaultSections,
};

function migrateChecklistData(raw: unknown): ChecklistData {
  const parsed = (raw ?? {}) as Record<string, unknown>;
  return {
    practiceName: typeof parsed.practiceName === "string" ? parsed.practiceName : defaultChecklistData.practiceName,
    tagline: typeof parsed.tagline === "string" ? parsed.tagline : defaultChecklistData.tagline,
    footerNote: typeof parsed.footerNote === "string" ? parsed.footerNote : defaultChecklistData.footerNote,
    accentColor: typeof parsed.accentColor === "string" ? parsed.accentColor : defaultChecklistData.accentColor,
    sections: isValidSections(parsed.sections) ? parsed.sections : defaultChecklistData.sections,
  };
}

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

// ── Component ──────────────────────────────────────────────────────────────

export default function OpeningClosingChecklistPage() {
  const { data, setData, status, lastSaved, saveNow } = useServerSyncedState<ChecklistData>(
    "checklist",
    defaultChecklistData,
    migrateChecklistData
  );

  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [practiceName, setPracticeName] = useState(defaultChecklistData.practiceName);
  const [tagline, setTagline] = useState(defaultChecklistData.tagline);
  const [footerNote, setFooterNote] = useState(defaultChecklistData.footerNote);
  const [accentColor, setAccentColor] = useState(defaultChecklistData.accentColor);
  const [sections, setSections] = useState<ChecklistSection[]>(defaultChecklistData.sections);

  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [savedFlash, setSavedFlash] = useState(false);
  const [, setTick] = useState(0);

  // Seed the editable fields from the server-synced data exactly once, the
  // first time loading finishes (not on every subsequent data change, since
  // this page pushes its own edits back into `data` below).
  const hasSeededRef = useRef(false);
  useEffect(() => {
    if (status === "loading" || hasSeededRef.current) return;
    setPracticeName(data.practiceName);
    setTagline(data.tagline);
    setFooterNote(data.footerNote);
    setAccentColor(data.accentColor);
    setSections(data.sections);
    hasSeededRef.current = true;
  }, [status, data]);

  // Push edits back into the server-synced blob (the hook debounces the
  // actual save), once seeded.
  useEffect(() => {
    if (!hasSeededRef.current) return;
    setData({ practiceName, tagline, footerNote, accentColor, sections });
  }, [practiceName, tagline, footerNote, accentColor, sections, setData]);

  // Refresh relative time display every 30s
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 30000);
    return () => clearInterval(t);
  }, []);

  const handleSave = useCallback(() => {
    saveNow();
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }, [saveNow]);

  const toggleItem = useCallback((sectionId: string, itemId: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, items: s.items.map((item) => (item.id === itemId ? { ...item, enabled: !item.enabled } : item)) }
          : s
      )
    );
  }, []);

  const updateItemLabel = useCallback((sectionId: string, itemId: string, label: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, items: s.items.map((item) => (item.id === itemId ? { ...item, label } : item)) }
          : s
      )
    );
  }, []);

  const updateItemFrequency = useCallback((sectionId: string, itemId: string, frequency: Frequency) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, items: s.items.map((item) => (item.id === itemId ? { ...item, frequency } : item)) }
          : s
      )
    );
  }, []);

  const updateItemCustomFrequency = useCallback((sectionId: string, itemId: string, customFrequency: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, items: s.items.map((item) => (item.id === itemId ? { ...item, customFrequency } : item)) }
          : s
      )
    );
  }, []);

  const deleteItem = useCallback((sectionId: string, itemId: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId ? { ...s, items: s.items.filter((item) => item.id !== itemId) } : s
      )
    );
  }, []);

  const addItem = useCallback((sectionId: string) => {
    const newId = uid();
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, items: [...s.items, { id: newId, label: "New duty", enabled: true, frequency: "daily", customFrequency: "" }] }
          : s
      )
    );
    setEditingItemId(newId);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* Print-only global styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #checklist-print-preview, #checklist-print-preview * { visibility: visible; }
          #checklist-print-preview {
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

        {/* ── HEADER ── */}
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center gap-4">
            <Link href="/members/resources/operations" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              Operations
            </Link>
            <span style={{ color: "rgba(162,140,117,0.2)" }}>·</span>
            <span className="text-sm" style={{ color: "rgba(255,253,246,0.6)" }}>Opening & Closing Checklist Builder</span>
          </div>
          <div className="flex items-center gap-3">
            {lastSaved && !savedFlash && (
              <span className="text-xs hidden sm:block" style={{ color: "rgba(162,140,117,0.4)" }}>
                Auto-saved {relativeTime(lastSaved)}
              </span>
            )}
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-all"
              style={{ background: savedFlash ? "rgba(162,140,117,0.2)" : "transparent", borderColor: "rgba(162,140,117,0.25)", color: savedFlash ? "#a28c75" : "rgba(162,140,117,0.55)" }}
            >
              {savedFlash ? <Check size={12} /> : <Save size={12} />}
              {savedFlash ? "Saved!" : "Save"}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ background: accentColor, color: "#fffdf6", border: "none" }}
            >
              <Printer size={13} />
              Print / Save PDF
            </button>
          </div>
        </div>

        {/* ── MOBILE TABS ── */}
        <div className="md:hidden flex border-b no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          {(["edit", "preview"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-3 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-colors"
              style={{
                color: activeTab === tab ? "#a28c75" : "rgba(255,253,246,0.35)",
                borderBottom: activeTab === tab ? `2px solid #a28c75` : "2px solid transparent",
              }}
            >
              {tab === "edit" ? <Settings2 size={12} /> : <Eye size={12} />}
              {tab === "edit" ? "Customize" : "Preview"}
            </button>
          ))}
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="flex h-[calc(100vh-73px)] md:h-[calc(100vh-73px)] overflow-hidden">

          {/* ═══ EDITOR PANEL ═══ */}
          <div
            className={`overflow-y-auto flex-shrink-0 no-print ${activeTab === "edit" ? "flex" : "hidden"} md:flex flex-col`}
            style={{ width: "100%", maxWidth: "400px", borderRight: "1px solid rgba(162,140,117,0.1)", background: "#170009" }}
          >
            <div className="p-5 space-y-6">

              {/* Practice Branding */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Practice Branding</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Practice Name</label>
                    <input
                      type="text"
                      value={practiceName}
                      onChange={(e) => setPracticeName(e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none"
                      style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Tagline <span style={{ color: "rgba(255,253,246,0.32)" }}>(optional)</span></label>
                    <input
                      type="text"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      placeholder="e.g., Where Beauty Meets Expertise"
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30"
                      style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Footer Note <span style={{ color: "rgba(255,253,246,0.32)" }}>(optional)</span></label>
                    <textarea
                      value={footerNote}
                      onChange={(e) => setFooterNote(e.target.value)}
                      rows={2}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none resize-none"
                      style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }}
                    />
                  </div>
                </div>
              </section>

              {/* Accent Color */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Accent Color</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {colorPresets.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => setAccentColor(preset.value)}
                      title={preset.label}
                      className="w-8 h-8 rounded-lg transition-all duration-150"
                      style={{
                        background: preset.value,
                        outline: accentColor === preset.value ? "2px solid #a28c75" : "2px solid transparent",
                        outlineOffset: "2px",
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>Custom:</label>
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-10 h-8 rounded cursor-pointer"
                    style={{ border: "1px solid rgba(162,140,117,0.2)", background: "transparent", padding: "2px" }}
                  />
                  <span className="text-xs font-mono" style={{ color: "rgba(255,253,246,0.45)" }}>{accentColor}</span>
                </div>
              </section>

              {/* Sections */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Duties & Frequency</p>
                <div className="space-y-4">
                  {sections.map((section) => (
                    <div key={section.id} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                      {/* Section header row */}
                      <div className="px-3 py-2.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                        <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{section.label}</span>
                      </div>

                      {/* Items */}
                      <div className="py-1.5 px-3 space-y-2.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                        {section.items.map((item) => (
                          <div key={item.id} className="py-1 group border-b last:border-b-0" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                            <div className="flex items-start gap-2">
                              <button onClick={() => toggleItem(section.id, item.id)} className="flex-shrink-0 mt-0.5 transition-opacity hover:opacity-70">
                                {item.enabled
                                  ? <ToggleRight size={14} style={{ color: "#a28c75" }} />
                                  : <ToggleLeft size={14} style={{ color: "rgba(162,140,117,0.25)" }} />}
                              </button>
                              {editingItemId === item.id ? (
                                <input
                                  autoFocus
                                  type="text"
                                  value={item.label}
                                  onChange={(e) => updateItemLabel(section.id, item.id, e.target.value)}
                                  onBlur={() => setEditingItemId(null)}
                                  onKeyDown={(e) => { if (e.key === "Enter") setEditingItemId(null); }}
                                  className="flex-1 text-xs bg-transparent outline-none border-b"
                                  style={{ color: "#fffdf6", borderColor: "rgba(162,140,117,0.4)" }}
                                />
                              ) : (
                                <span
                                  className="flex-1 text-xs leading-relaxed cursor-text"
                                  style={{ color: item.enabled ? "rgba(255,253,246,0.65)" : "rgba(255,253,246,0.25)" }}
                                  onClick={() => setEditingItemId(item.id)}
                                >
                                  {item.label}
                                </span>
                              )}
                              <button
                                onClick={() => deleteItem(section.id, item.id)}
                                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5"
                                style={{ color: "rgba(162,140,117,0.4)" }}
                              >
                                <Trash2 size={11} />
                              </button>
                            </div>

                            {/* Frequency row */}
                            <div className="flex items-center gap-2 pl-5 mt-1.5 flex-wrap">
                              <span className="text-[9px] uppercase tracking-wide flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>Frequency</span>
                              <select
                                value={item.frequency}
                                onChange={(e) => updateItemFrequency(section.id, item.id, e.target.value as Frequency)}
                                className="text-[11px] rounded px-2 py-1 outline-none cursor-pointer flex-shrink-0"
                                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: "#a28c75" }}
                              >
                                {frequencyOptions.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                              </select>
                              {item.frequency === "custom" && (
                                <input
                                  type="text"
                                  value={item.customFrequency}
                                  onChange={(e) => updateItemCustomFrequency(section.id, item.id, e.target.value)}
                                  placeholder="e.g. Every 90 days"
                                  className="flex-1 min-w-[110px] text-[11px] rounded px-2 py-1 outline-none"
                                  style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }}
                                />
                              )}
                            </div>
                          </div>
                        ))}
                        <button
                          onClick={() => addItem(section.id)}
                          className="flex items-center gap-1.5 text-xs mt-1.5 py-1 transition-opacity hover:opacity-80"
                          style={{ color: "rgba(162,140,117,0.55)" }}
                        >
                          <Plus size={11} />
                          Add duty
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>

          {/* ═══ PREVIEW PANEL ═══ */}
          <div
            className={`flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`}
            style={{ background: "#e8e0d8" }}
          >
            {/* Screen preview label */}
            <div className="flex items-center justify-between px-6 py-3 no-print" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Live Preview — this is how your checklist will print</span>
              <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: accentColor, color: "#fffdf6" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            {/* ── THE ACTUAL CHECKLIST (this is what prints) ── */}
            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div
                id="checklist-print-preview"
                style={{
                  background: "white",
                  width: "100%",
                  maxWidth: "720px",
                  minHeight: "980px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                  fontFamily: "Georgia, serif",
                  color: "#1a1a1a",
                  fontSize: "10.5pt",
                }}
              >
                {/* Header */}
                <div style={{ borderBottom: `4px solid ${accentColor}`, padding: "28px 36px 20px" }}>
                  <div style={{ fontSize: "20pt", fontWeight: "bold", color: accentColor, letterSpacing: "0.02em", lineHeight: 1.2, fontFamily: "Arial, sans-serif" }}>
                    {practiceName}
                  </div>
                  {tagline && (
                    <div style={{ fontSize: "9pt", color: "#666", marginTop: "4px", letterSpacing: "0.05em" }}>
                      {tagline}
                    </div>
                  )}
                  <div style={{ fontSize: "10pt", color: "#555", marginTop: "10px", fontFamily: "Arial, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Opening &amp; Closing Checklist
                  </div>
                </div>

                {/* Sections */}
                {sections.map((section, secIdx) => {
                  const enabledItems = section.items.filter((item) => item.enabled);
                  if (enabledItems.length === 0) return null;
                  return (
                    <div key={section.id} style={{ padding: secIdx === 0 ? "20px 36px 0" : "28px 36px 0" }}>
                      <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: accentColor, letterSpacing: "0.04em", marginBottom: "8px" }}>
                        {section.label}
                      </div>
                      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                        <colgroup>
                          <col style={{ width: "7%" }} />
                          <col style={{ width: "51%" }} />
                          <col style={{ width: "21%" }} />
                          <col style={{ width: "21%" }} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th style={{ padding: "8px 6px 8px 0", borderBottom: `2px solid ${accentColor}` }} />
                            <th style={{ padding: "8px 10px 8px 0", textAlign: "left", fontSize: "8.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.08em", borderBottom: `2px solid ${accentColor}` }}>
                              TASK
                            </th>
                            <th style={{ padding: "8px 6px", textAlign: "center", fontSize: "8.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: accentColor, letterSpacing: "0.06em", borderBottom: `2px solid ${accentColor}` }}>
                              INITIALS
                            </th>
                            <th style={{ padding: "8px 6px", textAlign: "center", fontSize: "8.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: accentColor, letterSpacing: "0.06em", borderBottom: `2px solid ${accentColor}` }}>
                              DATE
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {enabledItems.map((item, iIdx) => (
                            <tr key={item.id} style={{ background: iIdx % 2 === 0 ? "transparent" : "#f9f7f5" }}>
                              <td style={{ padding: "7px 6px 7px 0", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                                <span style={{ display: "inline-block", width: "13px", height: "13px", border: `1.5px solid ${accentColor}`, borderRadius: "2px", marginTop: "2px" }} />
                              </td>
                              <td style={{ padding: "7px 10px 7px 0", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                                <div style={{ fontSize: "9.5pt", lineHeight: 1.4, color: "#2a2a2a" }}>{item.label}</div>
                                <div style={{ fontSize: "7pt", color: accentColor, fontFamily: "Arial, sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px" }}>
                                  {frequencyLabel(item)}
                                </div>
                              </td>
                              <td style={{ padding: "7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                <div style={{ borderBottom: "1px solid #999", height: "13px" }} />
                              </td>
                              <td style={{ padding: "7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                <div style={{ borderBottom: "1px solid #999", height: "13px" }} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                })}

                {/* Footer */}
                {footerNote && (
                  <div style={{ padding: "20px 36px 28px", borderTop: `2px solid ${accentColor}`, marginTop: "24px" }}>
                    <p style={{ fontSize: "8.5pt", color: "#666", lineHeight: 1.5, fontStyle: "italic" }}>{footerNote}</p>
                  </div>
                )}
                {!footerNote && (
                  <div style={{ height: "28px" }} />
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
