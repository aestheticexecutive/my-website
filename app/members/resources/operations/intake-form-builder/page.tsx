"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Printer, Eye, Settings2, ToggleLeft, ToggleRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

interface FormItem {
  id: string;
  label: string;
  enabled: boolean;
}

interface FormSection {
  id: string;
  label: string;
  enabled: boolean;
  items: FormItem[];
}

// ── Default form data from original intake form ────────────────────────────

const defaultSections: FormSection[] = [
  {
    id: "facial",
    label: "Facial & Skin",
    enabled: true,
    items: [
      { id: "f1", label: "Fine lines and wrinkles on your face", enabled: true },
      { id: "f2", label: "Loss of facial volume or definition (e.g., cheeks, jawline, lips)", enabled: true },
      { id: "f3", label: "Desire to add facial volume (e.g., cheeks, jawline, lips)", enabled: true },
      { id: "f4", label: "Sagging or loose skin on your face or neck", enabled: true },
      { id: "f5", label: "Uneven skin tone, dark spots, or pigmentation issues", enabled: true },
      { id: "f6", label: "Redness or rosacea (persistent redness on your face)", enabled: true },
      { id: "f7", label: "Melasma", enabled: true },
      { id: "f8", label: "Acne or acne scars", enabled: true },
      { id: "f9", label: "Enlarged pores", enabled: true },
      { id: "f10", label: "Dull or dry skin", enabled: true },
    ],
  },
  {
    id: "body",
    label: "Body",
    enabled: true,
    items: [
      { id: "b1", label: "Stubborn fat that doesn't respond to diet or exercise", enabled: true },
      { id: "b2", label: "Difficult time losing weight", enabled: true },
      { id: "b3", label: "Cellulite on thighs, buttocks, or other areas", enabled: true },
      { id: "b4", label: "Loose or sagging skin on your body", enabled: true },
      { id: "b5", label: "Lack of muscle tone or definition", enabled: true },
      { id: "b6", label: "Scars or stretch marks you'd like to minimize", enabled: true },
      { id: "b7", label: "Unwanted tattoo(s)", enabled: true },
      { id: "b8", label: "Spider veins", enabled: true },
    ],
  },
  {
    id: "hair",
    label: "Hair",
    enabled: true,
    items: [
      { id: "h1", label: "Hair thinning or hair loss", enabled: true },
      { id: "h2", label: "Unwanted facial or body hair", enabled: true },
    ],
  },
  {
    id: "wellness",
    label: "Wellness & Hormones",
    enabled: true,
    items: [
      { id: "w1", label: "Physical exhaustion (fatigue, lack of energy, stamina or motivation)", enabled: true },
      { id: "w2", label: "Sleep problems (difficulty falling asleep or sleeping through the night)", enabled: true },
      { id: "w3", label: "Irritability (mood swings, feeling aggressive, angers easily)", enabled: true },
      { id: "w4", label: "Anxiety (feeling overwhelmed, feeling panicky, or feeling nervous)", enabled: true },
      { id: "w5", label: "Decline in drive or interest (loss of 'zest for life,' feeling down or sad)", enabled: true },
      { id: "w6", label: "Joint pain, muscle weakness, poor recovery after exercise", enabled: true },
      { id: "w7", label: "Difficulties with memory or concentration", enabled: true },
      { id: "w8", label: "Sexual desire or performance (reduced or diminished)", enabled: true },
      { id: "w9", label: "Erectile changes (erectile dysfunction, weaker erections)", enabled: true },
      { id: "w10", label: "Sweating (night sweats or increased episodes of sweating)", enabled: true },
      { id: "w11", label: "Vaginal dryness or difficulty with sexual intercourse", enabled: true },
      { id: "w12", label: "Urinary incontinence", enabled: true },
      { id: "w13", label: "Concerns about reduced vaginal tightness", enabled: true },
      { id: "w14", label: "Hot flashes", enabled: true },
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

// ── Helpers ────────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

// ── Component ──────────────────────────────────────────────────────────────

export default function IntakeFormBuilderPage() {
  // Editor state
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [practiceName, setPracticeName] = useState("Your Practice Name");
  const [tagline, setTagline] = useState("");
  const [footerNote, setFooterNote] = useState("Thank you for completing this form. Your provider will review it with you during your consultation.");
  const [accentColor, setAccentColor] = useState("#4a0018");
  const [showSectionHeaders, setShowSectionHeaders] = useState(true);
  const [sections, setSections] = useState<FormSection[]>(defaultSections);

  // Item editing state
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  // Section & item helpers
  const toggleSection = useCallback((sectionId: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === sectionId ? { ...s, enabled: !s.enabled } : s))
    );
  }, []);

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
          ? { ...s, items: [...s.items, { id: newId, label: "New item", enabled: true }] }
          : s
      )
    );
    setEditingItemId(newId);
  }, []);

  const addSection = useCallback(() => {
    const newId = uid();
    setSections((prev) => [
      ...prev,
      { id: newId, label: "New Section", enabled: true, items: [] },
    ]);
  }, []);

  const updateSectionLabel = useCallback((sectionId: string, label: string) => {
    setSections((prev) => prev.map((s) => (s.id === sectionId ? { ...s, label } : s)));
  }, []);

  const deleteSection = useCallback((sectionId: string) => {
    setSections((prev) => prev.filter((s) => s.id !== sectionId));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const enabledSections = sections.filter((s) => s.enabled);

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* Print-only global styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #intake-print-preview, #intake-print-preview * { visibility: visible; }
          #intake-print-preview {
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

        {/* ── HEADER ── */}
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center gap-4">
            <Link href="/members/resources/operations" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              Operations
            </Link>
            <span style={{ color: "rgba(162,140,117,0.2)" }}>·</span>
            <span className="text-sm" style={{ color: "rgba(255,253,246,0.5)" }}>Patient Intake Form Builder</span>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{ background: accentColor, color: "#fffdf6", border: "none" }}
          >
            <Printer size={13} />
            Print / Save PDF
          </button>
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
            style={{ width: "100%", maxWidth: "380px", borderRight: "1px solid rgba(162,140,117,0.1)", background: "#0c0004" }}
          >
            <div className="p-5 space-y-6">

              {/* Practice Branding */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Practice Branding</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Practice Name</label>
                    <input
                      type="text"
                      value={practiceName}
                      onChange={(e) => setPracticeName(e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none"
                      style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Tagline <span style={{ color: "rgba(255,253,246,0.25)" }}>(optional)</span></label>
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
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Footer Note <span style={{ color: "rgba(255,253,246,0.25)" }}>(optional)</span></label>
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
                  <label className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>Custom:</label>
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-10 h-8 rounded cursor-pointer"
                    style={{ border: "1px solid rgba(162,140,117,0.2)", background: "transparent", padding: "2px" }}
                  />
                  <span className="text-xs font-mono" style={{ color: "rgba(255,253,246,0.35)" }}>{accentColor}</span>
                </div>
              </section>

              {/* Section headers toggle */}
              <section>
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.6)" }}>Show Section Headers</p>
                  <button onClick={() => setShowSectionHeaders((v) => !v)} className="transition-opacity hover:opacity-80">
                    {showSectionHeaders
                      ? <ToggleRight size={22} style={{ color: "#a28c75" }} />
                      : <ToggleLeft size={22} style={{ color: "rgba(162,140,117,0.35)" }} />}
                  </button>
                </div>
                <p className="text-xs mt-1" style={{ color: "rgba(255,253,246,0.3)" }}>Section labels print as dividers between groups of questions.</p>
              </section>

              {/* Sections */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Form Sections & Questions</p>
                <div className="space-y-4">
                  {sections.map((section) => (
                    <div key={section.id} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                      {/* Section header row */}
                      <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                        <button onClick={() => toggleSection(section.id)} className="flex-shrink-0 transition-opacity hover:opacity-70">
                          {section.enabled
                            ? <ToggleRight size={18} style={{ color: "#a28c75" }} />
                            : <ToggleLeft size={18} style={{ color: "rgba(162,140,117,0.3)" }} />}
                        </button>
                        <input
                          type="text"
                          value={section.label}
                          onChange={(e) => updateSectionLabel(section.id, e.target.value)}
                          className="flex-1 text-xs font-medium bg-transparent outline-none"
                          style={{ color: section.enabled ? "#fffdf6" : "rgba(255,253,246,0.3)" }}
                        />
                        <button
                          onClick={() => deleteSection(section.id)}
                          className="flex-shrink-0 transition-opacity hover:opacity-70 p-0.5"
                          style={{ color: "rgba(162,140,117,0.4)" }}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>

                      {/* Items */}
                      {section.enabled && (
                        <div className="py-1.5 px-3 space-y-0.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                          {section.items.map((item) => (
                            <div key={item.id} className="flex items-start gap-2 py-1.5 group">
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
                          ))}
                          <button
                            onClick={() => addItem(section.id)}
                            className="flex items-center gap-1.5 text-xs mt-1.5 py-1 transition-opacity hover:opacity-80"
                            style={{ color: "rgba(162,140,117,0.55)" }}
                          >
                            <Plus size={11} />
                            Add question
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  <button
                    onClick={addSection}
                    className="flex items-center gap-2 text-xs w-full py-2.5 rounded-lg transition-all duration-150 hover:opacity-80"
                    style={{ border: "1px dashed rgba(162,140,117,0.25)", color: "rgba(162,140,117,0.5)" }}
                  >
                    <Plus size={12} />
                    Add section
                  </button>
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
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Live Preview — this is how your form will print</span>
              <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: accentColor, color: "#fffdf6" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            {/* ── THE ACTUAL FORM (this is what prints) ── */}
            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div
                id="intake-print-preview"
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
                {/* Form header */}
                <div style={{ borderBottom: `4px solid ${accentColor}`, padding: "28px 36px 20px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px" }}>
                    <div>
                      <div style={{ fontSize: "20pt", fontWeight: "bold", color: accentColor, letterSpacing: "0.02em", lineHeight: 1.2, fontFamily: "Arial, sans-serif" }}>
                        {practiceName}
                      </div>
                      {tagline && (
                        <div style={{ fontSize: "9pt", color: "#666", marginTop: "4px", letterSpacing: "0.05em" }}>
                          {tagline}
                        </div>
                      )}
                    </div>
                    <div style={{ textAlign: "right", fontSize: "9pt", color: "#555" }}>
                      <div style={{ marginBottom: "6px" }}>
                        <span style={{ fontWeight: "bold" }}>FULL NAME:&nbsp;</span>
                        <span style={{ borderBottom: "1px solid #999", display: "inline-block", width: "180px" }}>&nbsp;</span>
                      </div>
                      <div>
                        <span style={{ fontWeight: "bold" }}>DATE:&nbsp;</span>
                        <span style={{ borderBottom: "1px solid #999", display: "inline-block", width: "110px" }}>&nbsp;</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table header */}
                <div style={{ padding: "0 36px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                    <colgroup>
                      <col style={{ width: "80%" }} />
                      <col style={{ width: "10%" }} />
                      <col style={{ width: "10%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th style={{ padding: "10px 10px 10px 0", textAlign: "left", fontSize: "9pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.08em", borderBottom: `2px solid ${accentColor}` }}>
                          DO YOU EXPERIENCE...
                        </th>
                        <th style={{ padding: "10px 4px", textAlign: "center", fontSize: "9pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: accentColor, letterSpacing: "0.06em", borderBottom: `2px solid ${accentColor}` }}>
                          YES
                        </th>
                        <th style={{ padding: "10px 4px", textAlign: "center", fontSize: "9pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: accentColor, letterSpacing: "0.06em", borderBottom: `2px solid ${accentColor}` }}>
                          NO
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {enabledSections.map((section, sIdx) => (
                        <React.Fragment key={section.id}>
                          {showSectionHeaders && (
                            <tr>
                              <td
                                colSpan={3}
                                style={{
                                  padding: sIdx > 0 ? "10px 0 4px" : "8px 0 4px",
                                  fontSize: "8pt",
                                  fontFamily: "Arial, sans-serif",
                                  fontWeight: "bold",
                                  letterSpacing: "0.12em",
                                  textTransform: "uppercase",
                                  color: accentColor,
                                  borderTop: sIdx > 0 ? `1px solid ${accentColor}22` : undefined,
                                }}
                              >
                                {section.label}
                              </td>
                            </tr>
                          )}
                          {section.items.filter((item) => item.enabled).map((item, iIdx) => (
                            <tr key={item.id} style={{ background: iIdx % 2 === 0 ? "transparent" : "#f9f7f5" }}>
                              <td style={{ padding: "5px 10px 5px 0", fontSize: "9.5pt", lineHeight: 1.4, color: "#2a2a2a", borderBottom: "1px solid #eee" }}>
                                {item.label}
                              </td>
                              <td style={{ padding: "5px 4px", textAlign: "center", borderBottom: "1px solid #eee" }}>
                                <span style={{ display: "inline-block", width: "16px", height: "16px", border: `1.5px solid ${accentColor}`, borderRadius: "2px" }} />
                              </td>
                              <td style={{ padding: "5px 4px", textAlign: "center", borderBottom: "1px solid #eee" }}>
                                <span style={{ display: "inline-block", width: "16px", height: "16px", border: "1.5px solid #bbb", borderRadius: "2px" }} />
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Footer */}
                {footerNote && (
                  <div style={{ padding: "20px 36px 28px", borderTop: `2px solid ${accentColor}`, marginTop: "16px" }}>
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
