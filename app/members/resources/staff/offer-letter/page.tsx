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
  Mail,
  FileSignature,
  Save,
  Check,
  RefreshCw,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface BenefitItem {
  id: string;
  label: string;
}

interface OfferLetter {
  id: string;
  name: string;
  accentColor: string;

  companyName: string;
  companyAddress: string;
  companyPhone: string;
  offerDate: string;

  candidateName: string;
  candidateAddress: string;

  jobTitle: string;
  department: string;
  reportsTo: string;
  employmentType: string;
  exemptStatus: string;
  startDate: string;
  schedule: string;
  workLocation: string;

  compensationAmount: string;
  compensationType: string;
  payFrequency: string;

  benefits: BenefitItem[];
  contingencyText: string;
  expirationDate: string;

  signerName: string;
  signerTitle: string;

  letterBody: string;
  createdAt: string;
}

interface StoreData {
  letters: OfferLetter[];
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

function benefitsFrom(labels: string[]): BenefitItem[] {
  return labels.map((label) => ({ id: uid(), label }));
}

const defaultBenefitLabels = [
  "Health, Dental & Vision Insurance",
  "Paid Time Off (PTO)",
  "Paid Holidays",
  "401(k) Retirement Plan",
  "Employee Treatment & Product Discounts",
  "Continuing Education Support",
];

const defaultContingencyText =
  "Employment with [Company Name] is at-will, meaning either you or the practice may terminate the employment relationship at any time, for any reason, with or without cause or notice. This offer is contingent upon successful completion of a background check and any other conditions required by law or company policy, and does not constitute a contract for a specific term of employment.";

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function formatDateInput(iso: string): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

function formatDateShort(iso: string): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

function firstName(full: string): string {
  const trimmed = full.trim();
  if (!trimmed) return "";
  return trimmed.split(/\s+/)[0];
}

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function generateLetterBody(o: OfferLetter): string {
  const company = o.companyName.trim() || "[Company Name]";
  const candidate = o.candidateName.trim() || "[Candidate Name]";
  const greetingName = firstName(o.candidateName) || "[Candidate Name]";
  const jobTitle = o.jobTitle.trim() || "[Job Title]";
  const department = o.department.trim() || "[Department]";
  const reportsTo = o.reportsTo.trim() || "[Manager Name]";
  const employmentType = o.employmentType.trim() || "[Full-Time / Part-Time]";
  const exemptStatus = o.exemptStatus.trim() || "[Exempt / Non-Exempt]";
  const startDate = formatDateInput(o.startDate) || "[Start Date]";
  const schedule = o.schedule.trim() || "[Work Schedule]";
  const workLocation = o.workLocation.trim() || "[Work Location]";
  const compAmount = o.compensationAmount.trim() || "[Compensation Amount]";
  const compType = o.compensationType.trim() || "[per year / per hour]";
  const payFrequency = o.payFrequency.trim() || "[Pay Frequency]";
  const expirationDate = formatDateInput(o.expirationDate) || "[Acceptance Deadline]";
  const signerName = o.signerName.trim() || "[Signer Name]";
  const signerTitle = o.signerTitle.trim() || "[Signer Title]";
  const contingency = (o.contingencyText.trim() || defaultContingencyText).replaceAll("[Company Name]", company);

  const benefitsList = o.benefits.length
    ? o.benefits.map((b) => `  •  ${b.label}`).join("\n")
    : "  •  [No benefits listed]";

  return [
    company,
    o.companyAddress.trim(),
    o.companyPhone.trim(),
    "",
    formatDateInput(o.offerDate) || "[Date]",
    "",
    candidate,
    o.candidateAddress.trim(),
    "",
    `Dear ${greetingName},`,
    "",
    `We are pleased to offer you the position of ${jobTitle} with ${company}, reporting to ${reportsTo} in our ${department} department. We are excited about the possibility of you joining our team and believe your skills and experience will be a great asset to our practice.`,
    "",
    "POSITION DETAILS",
    `Your anticipated start date is ${startDate}. This is a ${employmentType}, ${exemptStatus} position. Your typical work schedule will be ${schedule}, based at ${workLocation}.`,
    "",
    "COMPENSATION",
    `Your starting compensation will be ${compAmount} ${compType}, paid ${payFrequency}, subject to applicable withholdings and deductions.`,
    "",
    "BENEFITS",
    `As a ${employmentType.toLowerCase().includes("part") ? "part-time" : "full-time"} employee, you will be eligible for the following benefits, subject to the terms of the applicable plans:`,
    benefitsList,
    "",
    "EMPLOYMENT TERMS",
    contingency,
    "",
    "ACCEPTANCE",
    `Please indicate your acceptance of this offer by signing and returning a copy of this letter by ${expirationDate}. We are looking forward to the possibility of you joining ${company}.`,
    "",
    "Sincerely,",
    "",
    "",
    signerName,
    signerTitle,
    company,
    "",
    "",
    "ACCEPTANCE OF OFFER",
    "",
    `I, ${candidate}, accept the position of ${jobTitle} as outlined above.`,
    "",
    "",
    "Signature: ______________________________          Date: ______________",
  ]
    .filter((line, idx, arr) => !(line === "" && arr[idx - 1] === "" && arr[idx + 1] === "" ))
    .join("\n");
}

function newOfferLetter(): OfferLetter {
  const base: OfferLetter = {
    id: uid(),
    name: "New Offer Letter",
    accentColor: "#4a0018",
    companyName: "",
    companyAddress: "",
    companyPhone: "",
    offerDate: todayISO(),
    candidateName: "",
    candidateAddress: "",
    jobTitle: "",
    department: "",
    reportsTo: "",
    employmentType: "Full-Time",
    exemptStatus: "Non-Exempt",
    startDate: "",
    schedule: "",
    workLocation: "",
    compensationAmount: "",
    compensationType: "per year",
    payFrequency: "bi-weekly",
    benefits: benefitsFrom(defaultBenefitLabels),
    contingencyText: defaultContingencyText,
    expirationDate: "",
    signerName: "",
    signerTitle: "",
    letterBody: "",
    createdAt: new Date().toISOString(),
  };
  base.letterBody = generateLetterBody(base);
  return base;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function OfferLetterPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>({ letters: [] });
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [editingField, setEditingField] = useState<string | null>(null);

  const [savedFlash, setSavedFlash] = useState(false);
  const [copiedFlash, setCopiedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_offer_letters_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({ letters: Array.isArray(parsed.letters) ? parsed.letters : [] });
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

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedFlash(true);
      setTimeout(() => setCopiedFlash(false), 2200);
    });
  }, []);

  // ── Record-level CRUD ──

  function createOfferLetter() {
    const o = newOfferLetter();
    setData((prev) => ({ letters: [o, ...prev.letters] }));
    setActiveId(o.id);
    setView("editor");
    setActiveTab("edit");
  }
  function duplicateOfferLetter(id: string) {
    setData((prev) => {
      const src = prev.letters.find((o) => o.id === id);
      if (!src) return prev;
      const copy: OfferLetter = {
        ...src,
        id: uid(),
        name: `${src.name} (Copy)`,
        createdAt: new Date().toISOString(),
        benefits: src.benefits.map((b) => ({ ...b, id: uid() })),
      };
      return { letters: [copy, ...prev.letters] };
    });
  }
  function deleteOfferLetter(id: string) {
    setData((prev) => ({ letters: prev.letters.filter((o) => o.id !== id) }));
    if (activeId === id) {
      setActiveId(null);
      setView("list");
    }
  }
  function openOfferLetter(id: string) {
    setActiveId(id);
    setView("editor");
    setActiveTab("edit");
  }
  function updateField<K extends keyof OfferLetter>(id: string, field: K, value: OfferLetter[K]) {
    setData((prev) => ({ letters: prev.letters.map((o) => (o.id === id ? { ...o, [field]: value } : o)) }));
  }
  function regenerateLetter(id: string) {
    setData((prev) => ({
      letters: prev.letters.map((o) => (o.id === id ? { ...o, letterBody: generateLetterBody(o) } : o)),
    }));
  }

  // ── Benefits list CRUD ──

  function addBenefit(id: string) {
    const newId = uid();
    setData((prev) => ({
      letters: prev.letters.map((o) => (o.id === id ? { ...o, benefits: [...o.benefits, { id: newId, label: "New benefit" }] } : o)),
    }));
    setEditingField(`benefit:${newId}`);
  }
  function updateBenefitLabel(id: string, benefitId: string, label: string) {
    setData((prev) => ({
      letters: prev.letters.map((o) => (o.id === id ? { ...o, benefits: o.benefits.map((b) => (b.id === benefitId ? { ...b, label } : b)) } : o)),
    }));
  }
  function deleteBenefit(id: string, benefitId: string) {
    setData((prev) => ({
      letters: prev.letters.map((o) => (o.id === id ? { ...o, benefits: o.benefits.filter((b) => b.id !== benefitId) } : o)),
    }));
  }

  const active = data.letters.find((o) => o.id === activeId) ?? null;
  const sortedLetters = [...data.letters].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  // ── Render ───────────────────────────────────────────────────────────────

  if (view === "list" || !active) {
    return (
      <div className="min-h-screen" style={{ background: "#170009" }}>
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 flex-wrap" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <Link href="/members/resources/staff" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70" style={{ color: "rgba(162,140,117,0.6)" }}>
            <ArrowLeft size={13} />
            Staff
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
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Staff</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Offer Letter Builder</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.5)" }}>
            A complete employment offer letter template — fill in the details specific to a candidate, edit the final copy however you like, then save it as a PDF or copy it straight into an email.
          </p>

          {/* New offer letter */}
          <button onClick={createOfferLetter} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
            style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
            <div className="flex items-center gap-4">
              <FileSignature size={20} style={{ color: "#a28c75" }} />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Offer Letter</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Standard offer letter content, pre-filled with placeholders for whatever you haven&apos;t entered yet.</p>
              </div>
            </div>
          </button>

          {/* Saved offer letters */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Saved Offer Letters</h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          {sortedLetters.length === 0 ? (
            <div className="rounded-xl border p-10 text-center" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>No offer letters saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedLetters.map((o) => (
                <div key={o.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                    <FileSignature size={17} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openOfferLetter(o.id)}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{o.name}</p>
                      {o.jobTitle.trim() && (
                        <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: "rgba(162,140,117,0.75)" }}>
                          {o.jobTitle}
                        </span>
                      )}
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {o.candidateName.trim() ? `${o.candidateName} · ` : ""}{formatDateShort(o.startDate) ? `Starts ${formatDateShort(o.startDate)} · ` : ""}Created {formatDateShort(o.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => openOfferLetter(o.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                      Open
                    </button>
                    <button onClick={() => duplicateOfferLetter(o.id)} title="Duplicate" className="p-2 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                      <Copy size={14} />
                    </button>
                    <button onClick={() => deleteOfferLetter(o.id)} title="Delete" className="p-2 opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
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
          #offer-print-preview, #offer-print-preview * { visibility: visible; }
          #offer-print-preview {
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
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 no-print flex-wrap" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center gap-4 min-w-0">
            <button onClick={() => { setView("list"); setActiveId(null); }} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70 flex-shrink-0" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              My Offer Letters
            </button>
            <span style={{ color: "rgba(162,140,117,0.2)" }}>·</span>
            <span className="text-sm truncate" style={{ color: "rgba(255,253,246,0.6)" }}>{active.name}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {lastSaved && !savedFlash && (
              <span className="text-xs hidden lg:block" style={{ color: "rgba(162,140,117,0.4)" }}>Auto-saved {relativeTime(lastSaved)}</span>
            )}
            <button onClick={handleSave} className="hidden sm:flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-all"
              style={{ background: savedFlash ? "rgba(162,140,117,0.2)" : "transparent", borderColor: "rgba(162,140,117,0.25)", color: savedFlash ? "#a28c75" : "rgba(162,140,117,0.55)" }}>
              {savedFlash ? <Check size={12} /> : <Save size={12} />}
              {savedFlash ? "Saved!" : "Save"}
            </button>
            <button onClick={() => handleCopy(active.letterBody)} className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-all"
              style={{ background: copiedFlash ? "rgba(162,140,117,0.2)" : "transparent", borderColor: "rgba(162,140,117,0.25)", color: copiedFlash ? "#a28c75" : "rgba(162,140,117,0.55)" }}>
              {copiedFlash ? <Check size={12} /> : <Mail size={12} />}
              {copiedFlash ? "Copied!" : "Copy for Email"}
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
              {tab === "edit" ? "Customize" : "Final Copy"}
            </button>
          ))}
        </div>

        {/* Main layout */}
        <div className="flex h-[calc(100vh-73px)] md:h-[calc(100vh-73px)] overflow-hidden">
          {/* Editor panel */}
          <div className={`overflow-y-auto flex-shrink-0 no-print ${activeTab === "edit" ? "flex" : "hidden"} md:flex flex-col`}
            style={{ width: "100%", maxWidth: "440px", borderRight: "1px solid rgba(162,140,117,0.1)", background: "#170009" }}>
            <div className="p-5 space-y-6">
              {/* Record details */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Record Name</p>
                <input type="text" value={active.name} onChange={(e) => updateField(active.id, "name", e.target.value)}
                  className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
              </section>

              {/* Accent color */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Accent Color</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {colorPresets.map((preset) => (
                    <button key={preset.value} onClick={() => updateField(active.id, "accentColor", preset.value)} title={preset.label}
                      className="w-8 h-8 rounded-lg transition-all duration-150"
                      style={{ background: preset.value, outline: active.accentColor === preset.value ? "2px solid #a28c75" : "2px solid transparent", outlineOffset: "2px" }} />
                  ))}
                </div>
              </section>

              {/* Company info */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Company Info</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Company / Practice Name</label>
                    <input type="text" value={active.companyName} onChange={(e) => updateField(active.id, "companyName", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Address</label>
                    <input type="text" value={active.companyAddress} onChange={(e) => updateField(active.id, "companyAddress", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Phone</label>
                      <input type="text" value={active.companyPhone} onChange={(e) => updateField(active.id, "companyPhone", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Letter Date</label>
                      <input type="date" value={active.offerDate} onChange={(e) => updateField(active.id, "offerDate", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                    </div>
                  </div>
                </div>
              </section>

              {/* Candidate info */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Candidate Info</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Candidate Name</label>
                    <input type="text" value={active.candidateName} onChange={(e) => updateField(active.id, "candidateName", e.target.value)} placeholder="e.g. Jamie Rivera"
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Candidate Address <span style={{ color: "rgba(255,253,246,0.32)" }}>(optional)</span></label>
                    <input type="text" value={active.candidateAddress} onChange={(e) => updateField(active.id, "candidateAddress", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                </div>
              </section>

              {/* Position details */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Position Details</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Job Title</label>
                      <input type="text" value={active.jobTitle} onChange={(e) => updateField(active.id, "jobTitle", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Department</label>
                      <input type="text" value={active.department} onChange={(e) => updateField(active.id, "department", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Reports To</label>
                    <input type="text" value={active.reportsTo} onChange={(e) => updateField(active.id, "reportsTo", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Employment Type</label>
                      <select value={active.employmentType} onChange={(e) => updateField(active.id, "employmentType", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }}>
                        <option style={{ color: "#000" }}>Full-Time</option>
                        <option style={{ color: "#000" }}>Part-Time</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Exempt Status</label>
                      <select value={active.exemptStatus} onChange={(e) => updateField(active.id, "exemptStatus", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }}>
                        <option style={{ color: "#000" }}>Exempt</option>
                        <option style={{ color: "#000" }}>Non-Exempt</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Start Date</label>
                    <input type="date" value={active.startDate} onChange={(e) => updateField(active.id, "startDate", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Work Schedule</label>
                    <input type="text" value={active.schedule} onChange={(e) => updateField(active.id, "schedule", e.target.value)} placeholder="e.g. Monday–Friday, 8:00am–5:00pm"
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Work Location</label>
                    <input type="text" value={active.workLocation} onChange={(e) => updateField(active.id, "workLocation", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                </div>
              </section>

              {/* Compensation */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Compensation</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Amount</label>
                      <input type="text" value={active.compensationAmount} onChange={(e) => updateField(active.id, "compensationAmount", e.target.value)} placeholder="e.g. $65,000"
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Basis</label>
                      <select value={active.compensationType} onChange={(e) => updateField(active.id, "compensationType", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }}>
                        <option style={{ color: "#000" }}>per year</option>
                        <option style={{ color: "#000" }}>per hour</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Pay Frequency</label>
                    <input type="text" value={active.payFrequency} onChange={(e) => updateField(active.id, "payFrequency", e.target.value)} placeholder="e.g. bi-weekly"
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Benefits</p>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="py-1.5 px-3 space-y-0.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.benefits.map((b) => (
                      <div key={b.id} className="flex items-start gap-2 py-1.5 group">
                        {editingField === `benefit:${b.id}` ? (
                          <input autoFocus type="text" value={b.label} onChange={(e) => updateBenefitLabel(active.id, b.id, e.target.value)}
                            onBlur={() => setEditingField(null)} onKeyDown={(e) => e.key === "Enter" && setEditingField(null)}
                            className="flex-1 text-xs bg-transparent outline-none border-b" style={{ color: "#fffdf6", borderColor: "rgba(162,140,117,0.4)" }} />
                        ) : (
                          <span className="flex-1 text-xs leading-relaxed cursor-text" style={{ color: "rgba(255,253,246,0.75)" }} onClick={() => setEditingField(`benefit:${b.id}`)}>
                            {b.label}
                          </span>
                        )}
                        <button onClick={() => deleteBenefit(active.id, b.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                          <Trash2 size={11} />
                        </button>
                      </div>
                    ))}
                    <button onClick={() => addBenefit(active.id)} className="flex items-center gap-1.5 text-xs mt-1.5 py-1 transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.55)" }}>
                      <Plus size={11} />
                      Add benefit
                    </button>
                  </div>
                </div>
              </section>

              {/* Employment terms */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Employment Terms</p>
                <textarea value={active.contingencyText} onChange={(e) => updateField(active.id, "contingencyText", e.target.value)} rows={4}
                  className="w-full text-xs rounded-lg px-3 py-2.5 outline-none resize-none leading-relaxed" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
              </section>

              {/* Acceptance + signer */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Acceptance &amp; Signer</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Acceptance Deadline</label>
                    <input type="date" value={active.expirationDate} onChange={(e) => updateField(active.id, "expirationDate", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Signer Name</label>
                      <input type="text" value={active.signerName} onChange={(e) => updateField(active.id, "signerName", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.5)" }}>Signer Title</label>
                      <input type="text" value={active.signerTitle} onChange={(e) => updateField(active.id, "signerTitle", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                    </div>
                  </div>
                </div>
              </section>

              {/* Regenerate */}
              <section>
                <button onClick={() => regenerateLetter(active.id)} className="w-full flex items-center justify-center gap-2 text-xs py-3 rounded-lg border transition-all duration-150 hover:opacity-80"
                  style={{ border: "1px dashed rgba(162,140,117,0.3)", color: "rgba(162,140,117,0.75)" }}>
                  <RefreshCw size={12} />
                  Regenerate Final Copy From These Fields
                </button>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                  This rebuilds the letter on the right from the fields above and overwrites any manual edits you&apos;ve made to it.
                </p>
              </section>
            </div>
          </div>

          {/* Preview / final copy panel */}
          <div className={`print-preview-pane flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`} style={{ background: "#e8e0d8" }}>
            <div className="flex items-center justify-between px-6 py-3 no-print gap-3 flex-wrap" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Final Copy — edit freely, this is exactly what prints &amp; copies</span>
              <div className="flex items-center gap-2">
                <button onClick={() => handleCopy(active.letterBody)} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: "rgba(0,0,0,0.15)", color: "#2a2a2a" }}>
                  {copiedFlash ? <Check size={11} /> : <Mail size={11} />}
                  {copiedFlash ? "Copied!" : "Copy for Email"}
                </button>
                <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: active.accentColor, color: "#fffdf6" }}>
                  <Printer size={11} />
                  Print / Save PDF
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div id="offer-print-preview" style={{ background: "white", width: "100%", maxWidth: "740px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)" }}>
                <textarea
                  value={active.letterBody}
                  onChange={(e) => updateField(active.id, "letterBody", e.target.value)}
                  spellCheck={true}
                  className="w-full outline-none border-none resize-none"
                  style={{
                    background: "white",
                    color: "#1a1a1a",
                    fontFamily: "Georgia, serif",
                    fontSize: "10.5pt",
                    lineHeight: 1.7,
                    whiteSpace: "pre-wrap",
                    padding: "48px 56px",
                    minHeight: "980px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
