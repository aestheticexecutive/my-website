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
  Award,
  Save,
  Check,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface BulletItem {
  id: string;
  text: string;
}

interface OpportunityRow {
  id: string;
  program: string;
  opportunity: string;
  actionPlan: string;
}

interface TrackingRow {
  id: string;
  metric: string;
  howTracked: string;
  reviewFrequency: string;
}

const promotionChannelOrder = [
  "consults",
  "website",
  "emailBlasts",
  "officeSignage",
  "checkoutScripting",
] as const;
type PromotionChannel = (typeof promotionChannelOrder)[number];

const promotionChannelLabels: Record<PromotionChannel, string> = {
  consults: "Mentioned during consults",
  website: "Featured on website",
  emailBlasts: "Included in email blasts",
  officeSignage: "Visible in office signage",
  checkoutScripting: "Part of check-out scripting",
};

interface MembershipAudit {
  id: string;
  name: string;
  dateCompleted: string;
  completedBy: string;
  accentColor: string;
  inHouseMembers: string;
  pctOfPatientBase: string;
  allePatients: string;
  aspirePatients: string;
  evolusPatients: string;
  revaPatients: string;
  targetGoals: string;
  membershipBenefits: BulletItem[];
  membershipWhy: string;
  rewardsBenefits: BulletItem[];
  promotionChannels: Record<PromotionChannel, boolean>;
  whatsWorking: string;
  whatsMissing: string;
  opportunities: OpportunityRow[];
  tracking: TrackingRow[];
  trainingPlan: string;
  incentivePlan: string;
  emailCampaigns: string;
  socialPosts: string;
  websiteUpdates: string;
  inOfficePromos: string;
  nextReviewDate: string;
  evaluationNotes: string;
  createdAt: string;
}

interface StoreData {
  audits: MembershipAudit[];
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

function newAudit(): MembershipAudit {
  return {
    id: uid(),
    name: "Membership + Rewards Program Audit",
    dateCompleted: todayISO(),
    completedBy: "",
    accentColor: "#4a0018",
    inHouseMembers: "",
    pctOfPatientBase: "",
    allePatients: "",
    aspirePatients: "",
    evolusPatients: "",
    revaPatients: "",
    targetGoals: "",
    membershipBenefits: [],
    membershipWhy: "",
    rewardsBenefits: [],
    promotionChannels: {
      consults: false,
      website: false,
      emailBlasts: false,
      officeSignage: false,
      checkoutScripting: false,
    },
    whatsWorking: "",
    whatsMissing: "",
    opportunities: [
      { id: uid(), program: "In-house membership", opportunity: "Better explain ROI in consults", actionPlan: "Create script, train team" },
      { id: uid(), program: "In-house membership", opportunity: "Feature in email & social media", actionPlan: "Monthly post + email campaign" },
      { id: uid(), program: "In-house membership", opportunity: "Promote via front desk at checkout", actionPlan: "Incentivize team for sign-ups" },
      { id: uid(), program: "Rewards Programs", opportunity: "Sign up every eligible patient", actionPlan: "Make enrollment part of intake" },
      { id: uid(), program: "Rewards Programs", opportunity: "Educate patients on point use", actionPlan: "Quick reference guide at checkout" },
      { id: uid(), program: "Rewards Programs", opportunity: "Promote manufacturer promos (e.g., double points)", actionPlan: "Include in blasts + in-office signage" },
    ],
    tracking: [
      { id: uid(), metric: "New membership sign-ups", howTracked: "POS or CRM", reviewFrequency: "Monthly" },
      { id: uid(), metric: "Active members retained", howTracked: "POS or CRM", reviewFrequency: "Monthly" },
      { id: uid(), metric: "% of Rewards Programs patients", howTracked: "Chart audit / CRM", reviewFrequency: "Quarterly" },
      { id: uid(), metric: "Rewards Programs points redeemed", howTracked: "Provider reporting / CRM", reviewFrequency: "Quarterly" },
    ],
    trainingPlan: "",
    incentivePlan: "",
    emailCampaigns: "",
    socialPosts: "",
    websiteUpdates: "",
    inOfficePromos: "",
    nextReviewDate: "",
    evaluationNotes: "",
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

// ── Component ────────────────────────────────────────────────────────────────

export default function MembershipRewardsAuditPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>({ audits: [] });
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [membershipDraft, setMembershipDraft] = useState("");
  const [rewardsDraft, setRewardsDraft] = useState("");

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_membership_audits_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({ audits: Array.isArray(parsed.audits) ? parsed.audits : [] });
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

  // ── Audit-level CRUD ──

  function createAudit() {
    const a = newAudit();
    setData((prev) => ({ audits: [a, ...prev.audits] }));
    setActiveId(a.id);
    setView("editor");
    setActiveTab("edit");
  }
  function duplicateAudit(id: string) {
    setData((prev) => {
      const src = prev.audits.find((a) => a.id === id);
      if (!src) return prev;
      const copy: MembershipAudit = {
        ...JSON.parse(JSON.stringify(src)),
        id: uid(),
        name: `${src.name} (Copy)`,
        createdAt: new Date().toISOString(),
      };
      return { audits: [copy, ...prev.audits] };
    });
  }
  function deleteAudit(id: string) {
    setData((prev) => ({ audits: prev.audits.filter((a) => a.id !== id) }));
    if (activeId === id) {
      setActiveId(null);
      setView("list");
    }
  }
  function openAudit(id: string) {
    setActiveId(id);
    setView("editor");
    setActiveTab("edit");
  }
  function updateField<K extends keyof MembershipAudit>(id: string, field: K, value: MembershipAudit[K]) {
    setData((prev) => ({ audits: prev.audits.map((a) => (a.id === id ? { ...a, [field]: value } : a)) }));
  }

  // ── Bullet list CRUD (membership / rewards benefits) ──

  function addBullet(auditId: string, field: "membershipBenefits" | "rewardsBenefits", text: string) {
    if (!text.trim()) return;
    const item: BulletItem = { id: uid(), text: text.trim() };
    setData((prev) => ({
      audits: prev.audits.map((a) => (a.id === auditId ? { ...a, [field]: [...a[field], item] } : a)),
    }));
  }
  function deleteBullet(auditId: string, field: "membershipBenefits" | "rewardsBenefits", itemId: string) {
    setData((prev) => ({
      audits: prev.audits.map((a) => (a.id === auditId ? { ...a, [field]: a[field].filter((it) => it.id !== itemId) } : a)),
    }));
  }

  // ── Promotion channel toggle ──

  function toggleChannel(auditId: string, channel: PromotionChannel) {
    setData((prev) => ({
      audits: prev.audits.map((a) =>
        a.id === auditId
          ? { ...a, promotionChannels: { ...a.promotionChannels, [channel]: !a.promotionChannels[channel] } }
          : a
      ),
    }));
  }

  // ── Opportunity table CRUD ──

  function addOpportunity(auditId: string) {
    const row: OpportunityRow = { id: uid(), program: "", opportunity: "", actionPlan: "" };
    setData((prev) => ({
      audits: prev.audits.map((a) => (a.id === auditId ? { ...a, opportunities: [...a.opportunities, row] } : a)),
    }));
  }
  function updateOpportunity(auditId: string, rowId: string, field: keyof Omit<OpportunityRow, "id">, value: string) {
    setData((prev) => ({
      audits: prev.audits.map((a) =>
        a.id === auditId
          ? { ...a, opportunities: a.opportunities.map((r) => (r.id === rowId ? { ...r, [field]: value } : r)) }
          : a
      ),
    }));
  }
  function deleteOpportunity(auditId: string, rowId: string) {
    setData((prev) => ({
      audits: prev.audits.map((a) => (a.id === auditId ? { ...a, opportunities: a.opportunities.filter((r) => r.id !== rowId) } : a)),
    }));
  }

  // ── Tracking table CRUD ──

  function addTracking(auditId: string) {
    const row: TrackingRow = { id: uid(), metric: "", howTracked: "", reviewFrequency: "" };
    setData((prev) => ({
      audits: prev.audits.map((a) => (a.id === auditId ? { ...a, tracking: [...a.tracking, row] } : a)),
    }));
  }
  function updateTracking(auditId: string, rowId: string, field: keyof Omit<TrackingRow, "id">, value: string) {
    setData((prev) => ({
      audits: prev.audits.map((a) =>
        a.id === auditId ? { ...a, tracking: a.tracking.map((r) => (r.id === rowId ? { ...r, [field]: value } : r)) } : a
      ),
    }));
  }
  function deleteTracking(auditId: string, rowId: string) {
    setData((prev) => ({
      audits: prev.audits.map((a) => (a.id === auditId ? { ...a, tracking: a.tracking.filter((r) => r.id !== rowId) } : a)),
    }));
  }

  const active = data.audits.find((a) => a.id === activeId) ?? null;
  const sortedAudits = [...data.audits].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const inputStyle = { background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" };

  // ── Render ───────────────────────────────────────────────────────────────

  if (view === "list" || !active) {
    return (
      <div className="min-h-screen" style={{ background: "#170009" }}>
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 flex-wrap" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <Link href="/members/resources/marketing" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70" style={{ color: "rgba(162,140,117,0.6)" }}>
            <ArrowLeft size={13} />
            Marketing
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
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Marketing</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Membership + Rewards Audit Tool</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.5)" }}>
            Audit your current in-house membership and rewards program numbers, assess your promotion
            efforts, and build a real action and tracking plan — pre-loaded with the source template&apos;s
            example opportunities and metrics.
          </p>

          {/* New audit */}
          <button onClick={createAudit} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
            style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
            <div className="flex items-center gap-4">
              <Award size={20} style={{ color: "#a28c75" }} />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Audit</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Starts pre-loaded with example opportunities and tracking metrics — edit or delete anything.</p>
              </div>
            </div>
          </button>

          {/* Saved audits */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Saved Audits</h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          {sortedAudits.length === 0 ? (
            <div className="rounded-xl border p-10 text-center" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>No audits saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedAudits.map((a) => (
                <div key={a.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                    <Award size={17} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openAudit(a.id)}>
                    <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{a.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {a.opportunities.length} opportunities · {a.tracking.length} metrics tracked · Created {formatDateShort(a.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => openAudit(a.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                      Open
                    </button>
                    <button onClick={() => duplicateAudit(a.id)} title="Duplicate" className="p-2 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                      <Copy size={14} />
                    </button>
                    <button onClick={() => deleteAudit(a.id)} title="Delete" className="p-2 opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
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
          #membership-print-preview, #membership-print-preview * { visibility: visible; }
          #membership-print-preview {
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
              My Audits
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
              {/* Audit details */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Audit Details</p>
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
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 1 · Audit Current Usage</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Your current numbers, honestly.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>In-House Members</label>
                    <input type="text" value={active.inHouseMembers} onChange={(e) => updateField(active.id, "inHouseMembers", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>% of Patient Base</label>
                    <input type="text" value={active.pctOfPatientBase} onChange={(e) => updateField(active.id, "pctOfPatientBase", e.target.value)}
                      placeholder="%" className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Allē Patients</label>
                    <input type="text" value={active.allePatients} onChange={(e) => updateField(active.id, "allePatients", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Aspire Patients</label>
                    <input type="text" value={active.aspirePatients} onChange={(e) => updateField(active.id, "aspirePatients", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Evolus Patients</label>
                    <input type="text" value={active.evolusPatients} onChange={(e) => updateField(active.id, "evolusPatients", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Reva Patients</label>
                    <input type="text" value={active.revaPatients} onChange={(e) => updateField(active.id, "revaPatients", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                </div>
                <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Where should these numbers be?</label>
                <textarea rows={2} value={active.targetGoals} onChange={(e) => updateField(active.id, "targetGoals", e.target.value)}
                  className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none" style={inputStyle} />
              </section>

              {/* Step 2: Value Proposition */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 2 · Value Proposition</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Key benefits and why patients should want each program.
                </p>
                <div className="rounded-xl overflow-hidden mb-3" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="px-3 py-1.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                    <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>In-House Membership Benefits</span>
                  </div>
                  <div className="p-3 space-y-1" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.membershipBenefits.length === 0 && (
                      <p className="text-xs italic py-1" style={{ color: "rgba(255,253,246,0.28)" }}>e.g. monthly savings, included services, exclusive offers</p>
                    )}
                    {active.membershipBenefits.map((it) => (
                      <div key={it.id} className="flex items-start gap-2 py-1 group">
                        <span className="flex-1 text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.75)" }}>{it.text}</span>
                        <button onClick={() => deleteBullet(active.id, "membershipBenefits", it.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                          <Trash2 size={11} />
                        </button>
                      </div>
                    ))}
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <input type="text" value={membershipDraft} onChange={(e) => setMembershipDraft(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addBullet(active.id, "membershipBenefits", membershipDraft); setMembershipDraft(""); } }}
                        placeholder="Add a benefit..." className="flex-1 text-xs bg-transparent outline-none placeholder:opacity-30 py-1" style={{ color: "#fffdf6" }} />
                      <button onClick={() => { addBullet(active.id, "membershipBenefits", membershipDraft); setMembershipDraft(""); }} className="flex-shrink-0 p-1 rounded transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.65)" }}>
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                </div>
                <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Why patients should want it</label>
                <textarea rows={2} value={active.membershipWhy} onChange={(e) => updateField(active.id, "membershipWhy", e.target.value)}
                  className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none mb-3" style={inputStyle} />

                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="px-3 py-1.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                    <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>Rewards Programs Benefits</span>
                  </div>
                  <div className="p-3 space-y-1" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.rewardsBenefits.length === 0 && (
                      <p className="text-xs italic py-1" style={{ color: "rgba(255,253,246,0.28)" }}>e.g. points for discounts, free products, double points promos</p>
                    )}
                    {active.rewardsBenefits.map((it) => (
                      <div key={it.id} className="flex items-start gap-2 py-1 group">
                        <span className="flex-1 text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.75)" }}>{it.text}</span>
                        <button onClick={() => deleteBullet(active.id, "rewardsBenefits", it.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                          <Trash2 size={11} />
                        </button>
                      </div>
                    ))}
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <input type="text" value={rewardsDraft} onChange={(e) => setRewardsDraft(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addBullet(active.id, "rewardsBenefits", rewardsDraft); setRewardsDraft(""); } }}
                        placeholder="Add a benefit..." className="flex-1 text-xs bg-transparent outline-none placeholder:opacity-30 py-1" style={{ color: "#fffdf6" }} />
                      <button onClick={() => { addBullet(active.id, "rewardsBenefits", rewardsDraft); setRewardsDraft(""); }} className="flex-shrink-0 p-1 rounded transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.65)" }}>
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step 3: Promotion assessment */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 3 · Promotion Assessment</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  How are these programs currently promoted?
                </p>
                <div className="rounded-xl overflow-hidden mb-3" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="p-3 space-y-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {promotionChannelOrder.map((c) => (
                      <label key={c} className="flex items-center gap-2.5 cursor-pointer">
                        <input type="checkbox" checked={active.promotionChannels[c]} onChange={() => toggleChannel(active.id, c)}
                          className="w-3.5 h-3.5 accent-[#a28c75]" />
                        <span className="text-xs" style={{ color: "rgba(255,253,246,0.75)" }}>{promotionChannelLabels[c]}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>What&apos;s working</label>
                    <textarea rows={2} value={active.whatsWorking} onChange={(e) => updateField(active.id, "whatsWorking", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>What&apos;s missing / inconsistent</label>
                    <textarea rows={2} value={active.whatsMissing} onChange={(e) => updateField(active.id, "whatsMissing", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none" style={inputStyle} />
                  </div>
                </div>
              </section>

              {/* Step 4: Opportunities */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 4 · Brainstorm Opportunities</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  Pre-loaded with example rows — edit, delete, or add your own.
                </p>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                  <div className="p-3 space-y-2.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                    {active.opportunities.length === 0 && (
                      <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.28)" }}>No opportunities yet.</p>
                    )}
                    {active.opportunities.map((row) => (
                      <div key={row.id} className="space-y-1.5 pb-2.5 border-b last:border-b-0" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                        <div className="flex items-center gap-1.5">
                          <input type="text" value={row.program} onChange={(e) => updateOpportunity(active.id, row.id, "program", e.target.value)} placeholder="Program"
                            className="flex-1 text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                          <button onClick={() => deleteOpportunity(active.id, row.id)} className="flex-shrink-0" style={{ color: "rgba(162,140,117,0.4)" }}>
                            <Trash2 size={12} />
                          </button>
                        </div>
                        <input type="text" value={row.opportunity} onChange={(e) => updateOpportunity(active.id, row.id, "opportunity", e.target.value)} placeholder="Opportunity"
                          className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                        <input type="text" value={row.actionPlan} onChange={(e) => updateOpportunity(active.id, row.id, "actionPlan", e.target.value)} placeholder="Action plan"
                          className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                      </div>
                    ))}
                    <button onClick={() => addOpportunity(active.id)} className="flex items-center gap-1.5 text-xs pt-1 transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.55)" }}>
                      <Plus size={11} />
                      Add opportunity
                    </button>
                  </div>
                </div>
              </section>

              {/* Step 5: Tracking plan */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 5 · Tracking Plan</p>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.4)" }}>
                  What you&apos;ll monitor, how, and how often.
                </p>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
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
              </section>

              {/* Step 6: Train & Incentivize */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 6 · Train &amp; Incentivize</p>
                <div className="space-y-2">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>How will you train the team?</label>
                    <textarea rows={2} value={active.trainingPlan} onChange={(e) => updateField(active.id, "trainingPlan", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>How will you recognize / reward staff?</label>
                    <textarea rows={2} value={active.incentivePlan} onChange={(e) => updateField(active.id, "incentivePlan", e.target.value)}
                      placeholder="e.g. bonus for X new members per month, shout-outs for top promoters"
                      className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                </div>
              </section>

              {/* Step 7: Marketing calendar */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 7 · Build Into Marketing</p>
                <div className="space-y-2">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Email campaigns</label>
                    <input type="text" value={active.emailCampaigns} onChange={(e) => updateField(active.id, "emailCampaigns", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Social media posts</label>
                    <input type="text" value={active.socialPosts} onChange={(e) => updateField(active.id, "socialPosts", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Website updates</label>
                    <input type="text" value={active.websiteUpdates} onChange={(e) => updateField(active.id, "websiteUpdates", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>In-office promos</label>
                    <input type="text" value={active.inOfficePromos} onChange={(e) => updateField(active.id, "inOfficePromos", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={inputStyle} />
                  </div>
                </div>
              </section>

              {/* Step 8: Review cycle */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Step 8 · Review &amp; Improve</p>
                <div className="space-y-2">
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>Next review date</label>
                    <input type="date" value={active.nextReviewDate} onChange={(e) => updateField(active.id, "nextReviewDate", e.target.value)}
                      className="w-full text-xs rounded px-2 py-1.5 outline-none" style={{ ...inputStyle, colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.45)" }}>What will you evaluate?</label>
                    <textarea rows={2} value={active.evaluationNotes} onChange={(e) => updateField(active.id, "evaluationNotes", e.target.value)}
                      placeholder="e.g. sign-ups, usage rates, revenue impact"
                      className="w-full text-xs rounded px-2 py-1.5 outline-none resize-none placeholder:opacity-30" style={inputStyle} />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Preview panel */}
          <div className={`print-preview-pane flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`} style={{ background: "#e8e0d8" }}>
            <div className="flex items-center justify-between px-6 py-3 no-print" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Live Preview — this is how your audit will print</span>
              <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: active.accentColor, color: "#fffdf6" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div id="membership-print-preview" style={{ background: "white", width: "100%", maxWidth: "780px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "9.5pt" }}>
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

                {/* Step 1: Audit numbers */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Current Usage
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "8px" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>In-house members</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.inHouseMembers ? "#333" : "#ccc" }}>{active.inHouseMembers || "—"}</td>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>% of patient base</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.pctOfPatientBase ? "#333" : "#ccc" }}>{active.pctOfPatientBase || "—"}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>Allē patients</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.allePatients ? "#333" : "#ccc" }}>{active.allePatients || "—"}</td>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>Aspire patients</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.aspirePatients ? "#333" : "#ccc" }}>{active.aspirePatients || "—"}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>Evolus patients</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.evolusPatients ? "#333" : "#ccc" }}>{active.evolusPatients || "—"}</td>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>Reva patients</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.revaPatients ? "#333" : "#ccc" }}>{active.revaPatients || "—"}</td>
                      </tr>
                    </tbody>
                  </table>
                  {active.targetGoals.trim() && (
                    <div style={{ fontSize: "8.5pt", color: "#555" }}><strong>Target:</strong> {active.targetGoals}</div>
                  )}
                </div>

                {/* Step 2: Value proposition */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Value Proposition
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
                    <div style={{ padding: "8px 12px", border: "1px solid #eee" }}>
                      <div style={{ fontSize: "9pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", marginBottom: "4px" }}>In-House Membership</div>
                      {active.membershipBenefits.length === 0 ? (
                        <div style={{ fontSize: "8.5pt", color: "#ccc" }}>(none listed)</div>
                      ) : (
                        <ul style={{ margin: 0, paddingLeft: "14px" }}>
                          {active.membershipBenefits.map((it) => (
                            <li key={it.id} style={{ fontSize: "8.5pt", lineHeight: 1.6 }}>{it.text}</li>
                          ))}
                        </ul>
                      )}
                      {active.membershipWhy.trim() && (
                        <div style={{ fontSize: "8pt", color: "#555", marginTop: "6px", fontStyle: "italic" }}>{active.membershipWhy}</div>
                      )}
                    </div>
                    <div style={{ padding: "8px 12px", border: "1px solid #eee" }}>
                      <div style={{ fontSize: "9pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", marginBottom: "4px" }}>Rewards Programs</div>
                      {active.rewardsBenefits.length === 0 ? (
                        <div style={{ fontSize: "8.5pt", color: "#ccc" }}>(none listed)</div>
                      ) : (
                        <ul style={{ margin: 0, paddingLeft: "14px" }}>
                          {active.rewardsBenefits.map((it) => (
                            <li key={it.id} style={{ fontSize: "8.5pt", lineHeight: 1.6 }}>{it.text}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step 3: Promotion assessment */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Promotion Assessment
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 18px", marginBottom: "8px" }}>
                    {promotionChannelOrder.map((c) => (
                      <div key={c} style={{ fontSize: "8.5pt", color: active.promotionChannels[c] ? "#1a1a1a" : "#ccc" }}>
                        {active.promotionChannels[c] ? "☑" : "☐"} {promotionChannelLabels[c]}
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "#333" }}><strong>What&apos;s working:</strong> {active.whatsWorking || "—"}</div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginTop: "4px" }}><strong>What&apos;s missing:</strong> {active.whatsMissing || "—"}</div>
                </div>

                {/* Step 4: Opportunities */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Opportunities &amp; Action Plan
                  </div>
                  {active.opportunities.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>No opportunities added yet.</div>
                  ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          <td style={{ padding: "4px 8px 4px 0", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Program</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Opportunity</td>
                          <td style={{ padding: "4px 8px", fontSize: "8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Action Plan</td>
                        </tr>
                      </thead>
                      <tbody>
                        {active.opportunities.map((row) => (
                          <tr key={row.id}>
                            <td style={{ padding: "5px 8px 5px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.program || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.opportunity || "—"}</td>
                            <td style={{ padding: "5px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{row.actionPlan || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* Step 5: Tracking plan */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Tracking Plan
                  </div>
                  {active.tracking.length === 0 ? (
                    <div style={{ fontSize: "8.5pt", color: "#ccc" }}>No metrics added yet.</div>
                  ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
                </div>

                {/* Step 6: Train & Incentivize */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Train &amp; Incentivize the Team
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "#333" }}><strong>Training plan:</strong> {active.trainingPlan || "—"}</div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginTop: "4px" }}><strong>Recognition / incentive:</strong> {active.incentivePlan || "—"}</div>
                </div>

                {/* Step 7: Marketing calendar */}
                <div style={{ padding: "18px 32px 4px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Built Into Marketing
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee", width: "30%" }}>Email campaigns</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.emailCampaigns ? "#333" : "#ccc" }}>{active.emailCampaigns || "—"}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>Social media posts</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.socialPosts ? "#333" : "#ccc" }}>{active.socialPosts || "—"}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>Website updates</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.websiteUpdates ? "#333" : "#ccc" }}>{active.websiteUpdates || "—"}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "4px 8px 4px 0", fontSize: "8.5pt", fontWeight: "bold", borderBottom: "1px solid #eee" }}>In-office promos</td>
                        <td style={{ padding: "4px 8px", fontSize: "8.5pt", borderBottom: "1px solid #eee", color: active.inOfficePromos ? "#333" : "#ccc" }}>{active.inOfficePromos || "—"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Step 8: Review cycle */}
                <div style={{ padding: "18px 32px 24px", breakInside: "avoid" }}>
                  <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", marginBottom: "10px" }}>
                    Review &amp; Improve
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "#333" }}><strong>Next review date:</strong> {formatDateShort(active.nextReviewDate) || "—"}</div>
                  <div style={{ fontSize: "8.5pt", color: "#333", marginTop: "4px" }}><strong>What to evaluate:</strong> {active.evaluationNotes || "—"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
