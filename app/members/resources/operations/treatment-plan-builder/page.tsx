"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Printer,
  Eye,
  Settings2,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

interface Treatment {
  id: string;
  name: string;
  sessions: string;
  price: string;
  concerns: string;
  downtime: string;
  notes: string;
}

interface Product {
  id: string;
  name: string;
  timing: "AM" | "PM" | "AM + PM";
  notes: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function blank(val: string, fallback: string) {
  return val.trim() || fallback;
}

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

function emptyTreatment(): Treatment {
  return { id: uid(), name: "", sessions: "", price: "", concerns: "", downtime: "", notes: "" };
}

function emptyProduct(): Product {
  return { id: uid(), name: "", timing: "AM + PM", notes: "" };
}

// ── Sub-components ─────────────────────────────────────────────────────────

function EditorField({
  label,
  value,
  onChange,
  placeholder,
  multiline,
  small,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
  small?: boolean;
}) {
  const base: React.CSSProperties = {
    background: "rgba(162,140,117,0.07)",
    border: "1px solid rgba(162,140,117,0.2)",
    color: "#fffdf6",
    borderRadius: "8px",
    padding: small ? "6px 10px" : "8px 12px",
    fontSize: small ? "12px" : "13px",
    width: "100%",
    outline: "none",
    resize: multiline ? "vertical" : undefined,
  };
  return (
    <div>
      <label style={{ fontSize: "11px", color: "rgba(255,253,246,0.4)", display: "block", marginBottom: "4px" }}>
        {label}
      </label>
      {multiline ? (
        <textarea rows={2} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} style={{ ...base, minHeight: "52px" }} />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} style={base} />
      )}
    </div>
  );
}

// ── Print line helper for preview ──────────────────────────────────────────

function PrintLine({ label, value, placeholder }: { label: string; value: string; placeholder: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
      <span style={{ fontSize: "8.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", whiteSpace: "nowrap", color: "#333" }}>
        {label}:
      </span>
      <span
        style={{
          flex: 1,
          borderBottom: "1px solid #bbb",
          minWidth: "80px",
          fontSize: "9.5pt",
          color: value.trim() ? "#1a1a1a" : "#aaa",
          fontFamily: "Georgia, serif",
          paddingBottom: "1px",
          fontStyle: value.trim() ? "normal" : "italic",
        }}
      >
        {value.trim() || placeholder}
      </span>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function TreatmentPlanBuilderPage() {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

  // Branding
  const [practiceName, setPracticeName] = useState("Your Practice Name");
  const [tagline, setTagline] = useState("");
  const [accentColor, setAccentColor] = useState("#4a0018");

  // Patient info
  const [patientName, setPatientName] = useState("");
  const [dob, setDob] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [planDate, setPlanDate] = useState("");

  // Treatments
  const [treatments, setTreatments] = useState<Treatment[]>([
    emptyTreatment(),
    emptyTreatment(),
    emptyTreatment(),
  ]);

  // Home care products
  const [products, setProducts] = useState<Product[]>([
    emptyProduct(),
    emptyProduct(),
    emptyProduct(),
  ]);

  // Additional notes
  const [additionalNotes, setAdditionalNotes] = useState("");

  // ── Treatment handlers ──
  const updateTreatment = useCallback(
    (id: string, field: keyof Treatment, value: string) => {
      setTreatments((prev) =>
        prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
      );
    },
    []
  );

  const addTreatment = useCallback(() => {
    setTreatments((prev) => [...prev, emptyTreatment()]);
  }, []);

  const removeTreatment = useCallback((id: string) => {
    setTreatments((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const moveTreatment = useCallback((id: string, dir: -1 | 1) => {
    setTreatments((prev) => {
      const idx = prev.findIndex((t) => t.id === id);
      if (idx + dir < 0 || idx + dir >= prev.length) return prev;
      const next = [...prev];
      [next[idx], next[idx + dir]] = [next[idx + dir], next[idx]];
      return next;
    });
  }, []);

  // ── Product handlers ──
  const updateProduct = useCallback(
    (id: string, field: keyof Product, value: string) => {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, [field]: value as Product[typeof field] } : p
        )
      );
    },
    []
  );

  const addProduct = useCallback(() => {
    setProducts((prev) => [...prev, emptyProduct()]);
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const handlePrint = () => window.print();

  // ── Shared card/button styles ──────────────────────────────────────────

  const sectionLabel = (text: string) => (
    <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(162,140,117,0.6)", marginBottom: "12px" }}>
      {text}
    </p>
  );

  const editorCard = { background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.14)", borderRadius: "12px", padding: "14px", marginBottom: "10px" };

  // ── RENDER ────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #treatment-print-preview, #treatment-print-preview * { visibility: visible; }
          #treatment-print-preview {
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            padding: 0; margin: 0;
          }
        }
      `}</style>

      <div className="min-h-screen" style={{ background: "#0c0004" }}>

        {/* ── HEADER ── */}
        <div className="no-print border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center gap-4">
            <Link href="/members/resources/operations" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              Operations
            </Link>
            <span style={{ color: "rgba(162,140,117,0.2)" }}>·</span>
            <span className="text-sm" style={{ color: "rgba(255,253,246,0.5)" }}>Treatment Plan Builder</span>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all hover:opacity-90"
            style={{ background: accentColor, color: "#fffdf6" }}
          >
            <Printer size={13} />
            Print / Save PDF
          </button>
        </div>

        {/* ── MOBILE TABS ── */}
        <div className="md:hidden no-print flex border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          {(["edit", "preview"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-3 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-colors"
              style={{
                color: activeTab === tab ? "#a28c75" : "rgba(255,253,246,0.35)",
                borderBottom: activeTab === tab ? "2px solid #a28c75" : "2px solid transparent",
              }}
            >
              {tab === "edit" ? <Settings2 size={12} /> : <Eye size={12} />}
              {tab === "edit" ? "Customize" : "Preview"}
            </button>
          ))}
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="flex overflow-hidden" style={{ height: "calc(100vh - 73px)" }}>

          {/* ═══ EDITOR PANEL ═══ */}
          <div
            className={`no-print overflow-y-auto flex-shrink-0 ${activeTab === "edit" ? "flex" : "hidden"} md:flex flex-col`}
            style={{ width: "100%", maxWidth: "400px", borderRight: "1px solid rgba(162,140,117,0.1)", background: "#0c0004" }}
          >
            <div className="p-5 space-y-6">

              {/* Branding */}
              <section>
                {sectionLabel("Practice Branding")}
                <div className="space-y-3">
                  <EditorField label="Practice Name" value={practiceName} onChange={setPracticeName} />
                  <EditorField label="Tagline (optional)" value={tagline} onChange={setTagline} placeholder="e.g., Personalized Aesthetic Medicine" />
                </div>
              </section>

              {/* Color */}
              <section>
                {sectionLabel("Accent Color")}
                <div className="flex flex-wrap gap-2 mb-3">
                  {colorPresets.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => setAccentColor(preset.value)}
                      title={preset.label}
                      style={{
                        width: "30px", height: "30px", borderRadius: "8px",
                        background: preset.value,
                        outline: accentColor === preset.value ? "2px solid #a28c75" : "2px solid transparent",
                        outlineOffset: "2px",
                      }}
                    />
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "11px", color: "rgba(255,253,246,0.4)" }}>Custom:</span>
                  <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} style={{ width: "40px", height: "30px", border: "1px solid rgba(162,140,117,0.2)", borderRadius: "6px", background: "transparent", cursor: "pointer", padding: "2px" }} />
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "rgba(255,253,246,0.35)" }}>{accentColor}</span>
                </div>
              </section>

              {/* Patient info */}
              <section>
                {sectionLabel("Patient Details")}
                <p style={{ fontSize: "11px", color: "rgba(255,253,246,0.3)", marginBottom: "10px" }}>Fill in to create a completed plan — or leave blank for a reusable blank template.</p>
                <div className="space-y-3">
                  <EditorField label="Patient Name" value={patientName} onChange={setPatientName} placeholder="Leave blank for template line" />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    <EditorField label="Date of Birth" value={dob} onChange={setDob} placeholder="MM/DD/YYYY" small />
                    <EditorField label="Date" value={planDate} onChange={setPlanDate} placeholder="MM/DD/YYYY" small />
                  </div>
                  <EditorField label="Created By (Provider)" value={createdBy} onChange={setCreatedBy} placeholder="Provider name" />
                </div>
              </section>

              {/* Treatments */}
              <section>
                {sectionLabel(`Treatments (${treatments.length})`)}
                <div className="space-y-3">
                  {treatments.map((t, idx) => (
                    <div key={t.id} style={editorCard}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                        <span style={{ fontSize: "11px", color: "rgba(162,140,117,0.7)", fontWeight: 600 }}>Treatment {idx + 1}</span>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <button onClick={() => moveTreatment(t.id, -1)} disabled={idx === 0} style={{ color: idx === 0 ? "rgba(162,140,117,0.2)" : "rgba(162,140,117,0.55)", cursor: idx === 0 ? "default" : "pointer" }}>
                            <ChevronUp size={13} />
                          </button>
                          <button onClick={() => moveTreatment(t.id, 1)} disabled={idx === treatments.length - 1} style={{ color: idx === treatments.length - 1 ? "rgba(162,140,117,0.2)" : "rgba(162,140,117,0.55)", cursor: idx === treatments.length - 1 ? "default" : "pointer" }}>
                            <ChevronDown size={13} />
                          </button>
                          <button onClick={() => removeTreatment(t.id)} style={{ color: "rgba(162,140,117,0.4)", marginLeft: "4px" }}>
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2.5">
                        <EditorField label="Treatment Name" value={t.name} onChange={(v) => updateTreatment(t.id, "name", v)} placeholder="e.g., Morpheus8" small />
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                          <EditorField label="Sessions" value={t.sessions} onChange={(v) => updateTreatment(t.id, "sessions", v)} placeholder="e.g., 3" small />
                          <EditorField label="Price" value={t.price} onChange={(v) => updateTreatment(t.id, "price", v)} placeholder="e.g., $1,200" small />
                        </div>
                        <EditorField label="Concerns Targeted" value={t.concerns} onChange={(v) => updateTreatment(t.id, "concerns", v)} placeholder="e.g., Skin laxity, fine lines" small />
                        <EditorField label="Downtime" value={t.downtime} onChange={(v) => updateTreatment(t.id, "downtime", v)} placeholder="e.g., 3-5 days" small />
                        <EditorField label="Notes" value={t.notes} onChange={(v) => updateTreatment(t.id, "notes", v)} placeholder="Additional notes for patient" multiline />
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addTreatment}
                    style={{ width: "100%", border: "1px dashed rgba(162,140,117,0.25)", borderRadius: "10px", padding: "9px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "11px", color: "rgba(162,140,117,0.5)", cursor: "pointer" }}
                  >
                    <Plus size={12} />
                    Add Treatment
                  </button>
                </div>
              </section>

              {/* Home Care */}
              <section>
                {sectionLabel(`Home Care Products (${products.length})`)}
                <div className="space-y-2">
                  {products.map((p, idx) => (
                    <div key={p.id} style={{ ...editorCard, marginBottom: "6px", padding: "10px 12px" }}>
                      <div style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                        <div style={{ flex: 1 }}>
                          <input
                            type="text"
                            value={p.name}
                            onChange={(e) => updateProduct(p.id, "name", e.target.value)}
                            placeholder={`Product ${idx + 1} name`}
                            style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.18)", color: "#fffdf6", borderRadius: "6px", padding: "5px 9px", fontSize: "11px", width: "100%", outline: "none" }}
                          />
                        </div>
                        <select
                          value={p.timing}
                          onChange={(e) => updateProduct(p.id, "timing", e.target.value)}
                          style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", borderRadius: "6px", padding: "5px 7px", fontSize: "11px", flexShrink: 0, cursor: "pointer", outline: "none" }}
                        >
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                          <option value="AM + PM">AM + PM</option>
                        </select>
                        <button onClick={() => removeProduct(p.id)} style={{ color: "rgba(162,140,117,0.35)", flexShrink: 0, marginTop: "4px" }}>
                          <Trash2 size={12} />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={p.notes}
                        onChange={(e) => updateProduct(p.id, "notes", e.target.value)}
                        placeholder="Usage notes (optional)"
                        style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)", color: "rgba(255,253,246,0.7)", borderRadius: "6px", padding: "4px 9px", fontSize: "11px", width: "100%", outline: "none", marginTop: "6px" }}
                      />
                    </div>
                  ))}
                  <button
                    onClick={addProduct}
                    style={{ width: "100%", border: "1px dashed rgba(162,140,117,0.25)", borderRadius: "10px", padding: "9px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "11px", color: "rgba(162,140,117,0.5)", cursor: "pointer" }}
                  >
                    <Plus size={12} />
                    Add Product
                  </button>
                </div>
              </section>

              {/* Additional notes */}
              <section>
                {sectionLabel("Additional Notes & Package Options")}
                <textarea
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  rows={4}
                  placeholder="Package details, special instructions, follow-up schedule, etc."
                  style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", borderRadius: "8px", padding: "10px 12px", fontSize: "13px", width: "100%", outline: "none", resize: "vertical" }}
                />
              </section>

            </div>
          </div>

          {/* ═══ PREVIEW PANEL ═══ */}
          <div
            className={`flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`}
            style={{ background: "#e8e0d8" }}
          >
            {/* Preview bar */}
            <div className="no-print flex items-center justify-between px-6 py-3" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.4)" }}>Live Preview — this is how your form will print</span>
              <button onClick={handlePrint} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", padding: "6px 12px", borderRadius: "6px", background: accentColor, color: "#fffdf6", cursor: "pointer" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            {/* ── THE ACTUAL FORM ── */}
            <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "32px 16px" }}>
              <div
                id="treatment-print-preview"
                style={{
                  background: "white",
                  width: "100%",
                  maxWidth: "720px",
                  minHeight: "1000px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                  fontFamily: "Georgia, serif",
                  color: "#1a1a1a",
                  fontSize: "10.5pt",
                  overflow: "hidden",
                }}
              >
                {/* ── HEADER ── */}
                <div style={{ borderBottom: `4px solid ${accentColor}`, padding: "28px 40px 20px" }}>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
                    <div>
                      <div style={{ fontSize: "22pt", fontWeight: "bold", color: accentColor, fontFamily: "Arial, sans-serif", lineHeight: 1.1, letterSpacing: "0.01em" }}>
                        {blank(practiceName, "Your Practice Name")}
                      </div>
                      {tagline && (
                        <div style={{ fontSize: "8.5pt", color: "#777", marginTop: "3px", letterSpacing: "0.06em" }}>
                          {tagline}
                        </div>
                      )}
                    </div>
                    <div style={{ fontSize: "14pt", fontStyle: "italic", color: accentColor, fontFamily: "Georgia, serif", letterSpacing: "0.02em", textAlign: "right", lineHeight: 1.2 }}>
                      the treatment plan
                    </div>
                  </div>
                </div>

                {/* ── PATIENT INFO ── */}
                <div style={{ padding: "18px 40px 14px", borderBottom: `1px solid ${accentColor}22` }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 32px" }}>
                    <PrintLine label="Name" value={patientName} placeholder="________________________" />
                    <PrintLine label="DOB" value={dob} placeholder="________________________" />
                    <PrintLine label="Created by" value={createdBy} placeholder="________________________" />
                    <PrintLine label="Date" value={planDate} placeholder="________________________" />
                  </div>
                </div>

                {/* ── TREATMENTS ── */}
                <div style={{ padding: "0 40px" }}>
                  {treatments.map((t, idx) => (
                    <div key={t.id} style={{ borderBottom: `1px solid ${accentColor}18`, paddingTop: "14px", paddingBottom: "12px" }}>
                      {/* Treatment row header */}
                      <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "6px" }}>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: "8pt", fontWeight: "bold", color: accentColor, fontFamily: "Arial, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginRight: "6px" }}>
                            Treatment {idx + 1}
                          </span>
                          <span
                            style={{
                              fontSize: "10.5pt",
                              borderBottom: "1px solid #bbb",
                              display: "inline-block",
                              minWidth: "180px",
                              color: t.name.trim() ? "#1a1a1a" : "#aaa",
                              fontStyle: t.name.trim() ? "normal" : "italic",
                              paddingBottom: "1px",
                            }}
                          >
                            {t.name.trim() || "treatment name"}
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "20px", flexShrink: 0 }}>
                          <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
                            <span style={{ fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#444" }}>Sessions:</span>
                            <span style={{ borderBottom: "1px solid #bbb", minWidth: "48px", fontSize: "9.5pt", color: t.sessions.trim() ? "#1a1a1a" : "#aaa", fontStyle: t.sessions.trim() ? "normal" : "italic", paddingBottom: "1px", display: "inline-block" }}>
                              {t.sessions.trim() || "__"}
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
                            <span style={{ fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#444" }}>Price:</span>
                            <span style={{ borderBottom: "1px solid #bbb", minWidth: "72px", fontSize: "9.5pt", color: t.price.trim() ? "#1a1a1a" : "#aaa", fontStyle: t.price.trim() ? "normal" : "italic", paddingBottom: "1px", display: "inline-block" }}>
                              {t.price.trim() || "________"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <PrintLine label="Concerns being targeted" value={t.concerns} placeholder="________________________________________________________________________________________" />
                      <PrintLine label="Downtime" value={t.downtime} placeholder="________________________________________________________________________________________" />
                      <PrintLine label="Notes" value={t.notes} placeholder="________________________________________________________________________________________" />
                    </div>
                  ))}
                </div>

                {/* ── HOME CARE ── */}
                {products.length > 0 && (
                  <div style={{ padding: "14px 40px 0" }}>
                    <div style={{ fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", color: accentColor, marginBottom: "8px" }}>
                      Home Care
                    </div>
                    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <colgroup>
                        <col style={{ width: "45%" }} />
                        <col style={{ width: "15%" }} />
                        <col style={{ width: "40%" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th style={{ fontSize: "7.5pt", fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#555", textAlign: "left", borderBottom: `1.5px solid ${accentColor}`, paddingBottom: "4px", letterSpacing: "0.08em" }}>PRODUCT</th>
                          <th style={{ fontSize: "7.5pt", fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#555", textAlign: "center", borderBottom: `1.5px solid ${accentColor}`, paddingBottom: "4px", letterSpacing: "0.08em" }}>WHEN</th>
                          <th style={{ fontSize: "7.5pt", fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#555", textAlign: "left", borderBottom: `1.5px solid ${accentColor}`, paddingBottom: "4px", letterSpacing: "0.08em", paddingLeft: "8px" }}>NOTES</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((p, idx) => (
                          <tr key={p.id} style={{ background: idx % 2 === 1 ? "#f9f7f5" : "transparent" }}>
                            <td style={{ padding: "5px 6px 5px 0", fontSize: "9.5pt", borderBottom: "1px solid #eee", color: p.name.trim() ? "#1a1a1a" : "#ccc", fontStyle: p.name.trim() ? "normal" : "italic" }}>
                              {p.name.trim() || "___________________________"}
                            </td>
                            <td style={{ padding: "5px 4px", fontSize: "8.5pt", textAlign: "center", borderBottom: "1px solid #eee", fontFamily: "Arial, sans-serif", color: accentColor, fontWeight: "bold" }}>
                              {p.timing}
                            </td>
                            <td style={{ padding: "5px 0 5px 8px", fontSize: "9pt", borderBottom: "1px solid #eee", color: p.notes.trim() ? "#333" : "#ccc", fontStyle: p.notes.trim() ? "normal" : "italic" }}>
                              {p.notes.trim() || "___________________________"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* ── ADDITIONAL NOTES ── */}
                <div style={{ padding: "16px 40px 36px" }}>
                  <div style={{ fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", color: accentColor, marginBottom: "8px" }}>
                    Additional Notes, Package Options & More
                  </div>
                  {additionalNotes.trim() ? (
                    <p style={{ fontSize: "9.5pt", lineHeight: 1.6, color: "#2a2a2a" }}>{additionalNotes}</p>
                  ) : (
                    <div>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} style={{ borderBottom: "1px solid #d0d0d0", height: "22px", marginBottom: "4px" }} />
                      ))}
                    </div>
                  )}
                </div>

                {/* ── FOOTER ── */}
                <div style={{ borderTop: `3px solid ${accentColor}`, padding: "10px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "8pt", color: "#aaa", fontFamily: "Arial, sans-serif", letterSpacing: "0.06em" }}>
                    {blank(practiceName, "")}
                  </span>
                  <span style={{ fontSize: "8pt", color: "#aaa", fontFamily: "Arial, sans-serif", fontStyle: "italic" }}>
                    the treatment plan
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
