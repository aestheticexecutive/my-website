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
  Stethoscope,
  Headphones,
  FilePlus2,
  Save,
  Check,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface ChecklistItem {
  id: string;
  label: string;
}

interface ChecklistSection {
  id: string;
  label: string;
  kind?: "standard" | "service";
  items: ChecklistItem[];
}

type Role = "Provider" | "Support Staff" | "Custom";

interface OnboardingChecklist {
  id: string;
  name: string;
  newHireName: string;
  role: Role;
  accentColor: string;
  sections: ChecklistSection[];
  createdAt: string;
}

interface StoreData {
  checklists: OnboardingChecklist[];
}

// ── Default template content ────────────────────────────────────────────────

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

function itemsFrom(labels: string[]): ChecklistItem[] {
  return labels.map((label) => ({ id: uid(), label }));
}

const employmentPolicyLabels = [
  "Values",
  "Org Chart",
  "Work Schedule (Arrival Expectations, Schedule Optimization, Lunches, Overall Schedule)",
  "Requesting Time Off / PTO",
  "Last-Minute Call-Offs / Tardiness Due to Illness or Emergency",
  "Paid Holidays",
  "Insurance (Health, Vision, Dental)",
  "401(k)",
  "Staff Treatment Program",
  "Commission / Bonus Policy",
  "Payroll / Pay Dates",
  "Performance Reviews",
  "Dress Code",
  "Emergency Protocols",
  "HIPAA Certification",
  "OSHA Training",
  "Compliance",
];

const providerPolicyLabels = [
  "Memberships",
  "Imaging System",
  "Centrifuge",
  "Lab Process",
  "PRP",
  "Rewards Programs",
  "Financing Options",
  "Consult Process",
  "Office Procedure Process",
  "Follow-Up Process",
  "Documentation",
  "Photography",
  "Scheduling",
  "Viewing the Patient's Chart",
  "Billing",
  "Phone / Messaging Systems",
  "Internal Communication Systems",
];

const supportStaffPolicyLabels = [
  "Opening Duties",
  "Closing Duties",
  "Appointment Preparation",
  "Check In / Out Process",
  "Scheduling Appointments",
  "Rewards Programs",
  "Memberships",
  "Financing",
  "Navigating the Scheduling Tool",
  "Billing",
  "Navigating a Patient Chart",
  "Creating a Membership",
  "Selling a Gift Card",
  "Shipping Out a Product",
  "Customer Service Expectations Over the Phone",
  "Customer Service Expectations In Person",
  "Managing Incoming Texts / Emails",
  "Internal Messaging System",
];

function servicesSection(): ChecklistSection {
  return {
    id: uid(),
    label: "Services & Procedures Training",
    kind: "service",
    items: itemsFrom(["Botox", "Filler", "Chemical Peel"]),
  };
}
function employmentSection(): ChecklistSection {
  return { id: uid(), label: "Employment Policies", items: itemsFrom(employmentPolicyLabels) };
}
function providerPolicySection(): ChecklistSection {
  return { id: uid(), label: "Policies, Technology & Documentation", items: itemsFrom(providerPolicyLabels) };
}
function supportStaffPolicySection(): ChecklistSection {
  return { id: uid(), label: "Policies, Technology & Documentation", items: itemsFrom(supportStaffPolicyLabels) };
}

function newChecklist(role: Role): OnboardingChecklist {
  const sections: ChecklistSection[] =
    role === "Provider"
      ? [servicesSection(), providerPolicySection(), employmentSection()]
      : role === "Support Staff"
      ? [servicesSection(), supportStaffPolicySection(), employmentSection()]
      : [{ id: uid(), label: "Section 1", items: [] }];
  return {
    id: uid(),
    name: role === "Custom" ? "New Onboarding Checklist" : `${role} Onboarding`,
    newHireName: "",
    role,
    accentColor: "#4a0018",
    sections,
    createdAt: new Date().toISOString(),
  };
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

function itemCount(c: OnboardingChecklist): number {
  return c.sections.reduce((sum, s) => sum + s.items.length, 0);
}

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

// ── Component ────────────────────────────────────────────────────────────────

export default function OnboardingChecklistPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>({ checklists: [] });
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [editingField, setEditingField] = useState<string | null>(null); // `${scope}:${id}`

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_onboarding_checklists_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({ checklists: Array.isArray(parsed.checklists) ? parsed.checklists : [] });
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

  // ── Checklist-level CRUD ──

  function createChecklist(role: Role) {
    const c = newChecklist(role);
    setData((prev) => ({ checklists: [c, ...prev.checklists] }));
    setActiveId(c.id);
    setView("editor");
    setActiveTab("edit");
  }
  function duplicateChecklist(id: string) {
    setData((prev) => {
      const src = prev.checklists.find((c) => c.id === id);
      if (!src) return prev;
      const copy: OnboardingChecklist = {
        ...src,
        id: uid(),
        name: `${src.name} (Copy)`,
        createdAt: new Date().toISOString(),
        sections: src.sections.map((s) => ({ ...s, id: uid(), items: s.items.map((it) => ({ ...it, id: uid() })) })),
      };
      return { checklists: [copy, ...prev.checklists] };
    });
  }
  function deleteChecklist(id: string) {
    setData((prev) => ({ checklists: prev.checklists.filter((c) => c.id !== id) }));
    if (activeId === id) {
      setActiveId(null);
      setView("list");
    }
  }
  function openChecklist(id: string) {
    setActiveId(id);
    setView("editor");
    setActiveTab("edit");
  }
  function updateChecklist(id: string, field: "name" | "newHireName" | "accentColor", value: string) {
    setData((prev) => ({ checklists: prev.checklists.map((c) => (c.id === id ? { ...c, [field]: value } : c)) }));
  }

  // ── Section / item CRUD (operate on the active checklist) ──

  function addSection(checklistId: string) {
    const newId = uid();
    setData((prev) => ({
      checklists: prev.checklists.map((c) =>
        c.id === checklistId ? { ...c, sections: [...c.sections, { id: newId, label: "New Section", items: [] }] } : c
      ),
    }));
    setEditingField(`section:${newId}`);
  }
  function updateSectionLabel(checklistId: string, sectionId: string, label: string) {
    setData((prev) => ({
      checklists: prev.checklists.map((c) =>
        c.id === checklistId ? { ...c, sections: c.sections.map((s) => (s.id === sectionId ? { ...s, label } : s)) } : c
      ),
    }));
  }
  function deleteSection(checklistId: string, sectionId: string) {
    setData((prev) => ({
      checklists: prev.checklists.map((c) => (c.id === checklistId ? { ...c, sections: c.sections.filter((s) => s.id !== sectionId) } : c)),
    }));
  }
  function addItem(checklistId: string, sectionId: string) {
    const newId = uid();
    setData((prev) => ({
      checklists: prev.checklists.map((c) =>
        c.id === checklistId
          ? { ...c, sections: c.sections.map((s) => (s.id === sectionId ? { ...s, items: [...s.items, { id: newId, label: "New criteria" }] } : s)) }
          : c
      ),
    }));
    setEditingField(`item:${newId}`);
  }
  function updateItemLabel(checklistId: string, sectionId: string, itemId: string, label: string) {
    setData((prev) => ({
      checklists: prev.checklists.map((c) =>
        c.id === checklistId
          ? { ...c, sections: c.sections.map((s) => (s.id === sectionId ? { ...s, items: s.items.map((it) => (it.id === itemId ? { ...it, label } : it)) } : s)) }
          : c
      ),
    }));
  }
  function deleteItem(checklistId: string, sectionId: string, itemId: string) {
    setData((prev) => ({
      checklists: prev.checklists.map((c) =>
        c.id === checklistId ? { ...c, sections: c.sections.map((s) => (s.id === sectionId ? { ...s, items: s.items.filter((it) => it.id !== itemId) } : s)) } : c
      ),
    }));
  }

  const active = data.checklists.find((c) => c.id === activeId) ?? null;
  const sortedChecklists = [...data.checklists].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const roleBadgeIcon: Record<Role, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
    Provider: Stethoscope,
    "Support Staff": Headphones,
    Custom: FilePlus2,
  };

  // ── Render ───────────────────────────────────────────────────────────────

  if (view === "list" || !active) {
    return (
      <div className="min-h-screen" style={{ background: "#0c0004" }}>
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
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Onboarding Checklist Builder</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.4)" }}>
            Start from a Provider or Support Staff template, customize the criteria, and save as many named onboarding checklists as you need. Every checklist prints as a clean, sign-off-ready document.
          </p>

          {/* New checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <button onClick={() => createChecklist("Provider")} className="rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40"
              style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
              <Stethoscope size={20} style={{ color: "#a28c75" }} className="mb-3" />
              <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>New Provider Checklist</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>Pre-loaded with services, clinical systems, and employment policy criteria.</p>
            </button>
            <button onClick={() => createChecklist("Support Staff")} className="rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40"
              style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
              <Headphones size={20} style={{ color: "#a28c75" }} className="mb-3" />
              <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>New Support Staff Checklist</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>Pre-loaded with front-of-house systems and employment policy criteria.</p>
            </button>
            <button onClick={() => createChecklist("Custom")} className="rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.13)" }}>
              <FilePlus2 size={20} style={{ color: "#a28c75" }} className="mb-3" />
              <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>New Blank Checklist</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>Start from scratch and build your own sections and criteria.</p>
            </button>
          </div>

          {/* Saved checklists */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>My Onboarding Checklists</h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          {sortedChecklists.length === 0 ? (
            <div className="rounded-xl border p-10 text-center" style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.35)" }}>No checklists saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedChecklists.map((c) => {
                const RoleIcon = roleBadgeIcon[c.role];
                return (
                  <div key={c.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                    style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                    >
                      <RoleIcon size={17} style={{ color: "#a28c75" }} />
                    </div>
                    <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openChecklist(c.id)}>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{c.name}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: "rgba(162,140,117,0.75)" }}>
                          {c.role}
                        </span>
                      </div>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.35)" }}>
                        {c.newHireName.trim() ? `${c.newHireName} · ` : ""}{c.sections.length} section{c.sections.length === 1 ? "" : "s"} · {itemCount(c)} criteria · Created {formatDate(c.createdAt)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button onClick={() => openChecklist(c.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                        Open
                      </button>
                      <button onClick={() => duplicateChecklist(c.id)} title="Duplicate" className="p-2 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                        <Copy size={14} />
                      </button>
                      <button onClick={() => deleteChecklist(c.id)} title="Delete" className="p-2 opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
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
          #onboarding-print-preview, #onboarding-print-preview * { visibility: visible; }
          #onboarding-print-preview {
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
        {/* Header */}
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center gap-4 min-w-0">
            <button onClick={() => { setView("list"); setActiveId(null); }} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70 flex-shrink-0" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              My Checklists
            </button>
            <span style={{ color: "rgba(162,140,117,0.2)" }}>·</span>
            <span className="text-sm truncate" style={{ color: "rgba(255,253,246,0.5)" }}>{active.name}</span>
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
            style={{ width: "100%", maxWidth: "420px", borderRight: "1px solid rgba(162,140,117,0.1)", background: "#0c0004" }}>
            <div className="p-5 space-y-6">
              {/* Checklist details */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Checklist Details</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Checklist Name</label>
                    <input type="text" value={active.name} onChange={(e) => updateChecklist(active.id, "name", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>New Hire Name <span style={{ color: "rgba(255,253,246,0.25)" }}>(optional)</span></label>
                    <input type="text" value={active.newHireName} onChange={(e) => updateChecklist(active.id, "newHireName", e.target.value)} placeholder="e.g. Jamie Rivera"
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                </div>
              </section>

              {/* Accent color */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Accent Color</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {colorPresets.map((preset) => (
                    <button key={preset.value} onClick={() => updateChecklist(active.id, "accentColor", preset.value)} title={preset.label}
                      className="w-8 h-8 rounded-lg transition-all duration-150"
                      style={{ background: preset.value, outline: active.accentColor === preset.value ? "2px solid #a28c75" : "2px solid transparent", outlineOffset: "2px" }} />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>Custom:</label>
                  <input type="color" value={active.accentColor} onChange={(e) => updateChecklist(active.id, "accentColor", e.target.value)}
                    className="w-10 h-8 rounded cursor-pointer" style={{ border: "1px solid rgba(162,140,117,0.2)", background: "transparent", padding: "2px" }} />
                  <span className="text-xs font-mono" style={{ color: "rgba(255,253,246,0.35)" }}>{active.accentColor}</span>
                </div>
              </section>

              {/* Sections & criteria */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Sections &amp; Criteria</p>
                <div className="space-y-4">
                  {active.sections.map((section) => (
                    <div key={section.id} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
                      <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: "rgba(162,140,117,0.07)" }}>
                        {editingField === `section:${section.id}` ? (
                          <input autoFocus type="text" value={section.label} onChange={(e) => updateSectionLabel(active.id, section.id, e.target.value)}
                            onBlur={() => setEditingField(null)} onKeyDown={(e) => e.key === "Enter" && setEditingField(null)}
                            className="flex-1 text-xs font-medium bg-transparent outline-none" style={{ color: "#fffdf6" }} />
                        ) : (
                          <span className="flex-1 text-xs font-medium cursor-text" style={{ color: "#fffdf6" }} onClick={() => setEditingField(`section:${section.id}`)}>
                            {section.label}
                          </span>
                        )}
                        <button onClick={() => deleteSection(active.id, section.id)} className="flex-shrink-0 transition-opacity hover:opacity-70 p-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                          <Trash2 size={12} />
                        </button>
                      </div>

                      <div className="py-1.5 px-3 space-y-0.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                        {section.items.length === 0 && (
                          <p className="text-xs italic py-1.5" style={{ color: "rgba(255,253,246,0.2)" }}>
                            {section.kind === "service" ? "No services yet." : "No criteria yet."}
                          </p>
                        )}
                        {section.items.map((item) => (
                          <div key={item.id} className="flex items-start gap-2 py-1.5 group">
                            {editingField === `item:${item.id}` ? (
                              <input autoFocus type="text" value={item.label} onChange={(e) => updateItemLabel(active.id, section.id, item.id, e.target.value)}
                                onBlur={() => setEditingField(null)} onKeyDown={(e) => e.key === "Enter" && setEditingField(null)}
                                className="flex-1 text-xs bg-transparent outline-none border-b" style={{ color: "#fffdf6", borderColor: "rgba(162,140,117,0.4)" }} />
                            ) : (
                              <span className="flex-1 text-xs leading-relaxed cursor-text" style={{ color: "rgba(255,253,246,0.65)" }} onClick={() => setEditingField(`item:${item.id}`)}>
                                {item.label}
                              </span>
                            )}
                            <button onClick={() => deleteItem(active.id, section.id, item.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" style={{ color: "rgba(162,140,117,0.4)" }}>
                              <Trash2 size={11} />
                            </button>
                          </div>
                        ))}
                        <button onClick={() => addItem(active.id, section.id)} className="flex items-center gap-1.5 text-xs mt-1.5 py-1 transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.55)" }}>
                          <Plus size={11} />
                          {section.kind === "service" ? "Add service" : "Add criteria"}
                        </button>
                      </div>
                    </div>
                  ))}

                  <button onClick={() => addSection(active.id)} className="flex items-center gap-2 text-xs w-full py-2.5 rounded-lg transition-all duration-150 hover:opacity-80"
                    style={{ border: "1px dashed rgba(162,140,117,0.25)", color: "rgba(162,140,117,0.5)" }}>
                    <Plus size={12} />
                    Add section
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* Preview panel */}
          <div className={`flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`} style={{ background: "#e8e0d8" }}>
            <div className="flex items-center justify-between px-6 py-3 no-print" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Live Preview — this is how your checklist will print</span>
              <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: active.accentColor, color: "#fffdf6" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div id="onboarding-print-preview" style={{ background: "white", width: "100%", maxWidth: "740px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "10.5pt" }}>
                {/* Header */}
                <div style={{ borderBottom: `4px solid ${active.accentColor}`, padding: "28px 36px 20px" }}>
                  <div style={{ fontSize: "20pt", fontWeight: "bold", color: active.accentColor, letterSpacing: "0.02em", lineHeight: 1.2, fontFamily: "Arial, sans-serif" }}>
                    {active.newHireName.trim() || "New Hire Name: ______________"}
                  </div>
                  <div style={{ fontSize: "10pt", color: "#555", marginTop: "8px", fontFamily: "Arial, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {active.role !== "Custom" ? `${active.role} Onboarding Checklist` : "Onboarding Checklist"}
                  </div>
                  {active.name && (
                    <div style={{ fontSize: "8.5pt", color: "#888", marginTop: "4px" }}>{active.name}</div>
                  )}
                </div>

                {/* Sections */}
                {active.sections.map((section, secIdx) => {
                  if (section.items.length === 0) return null;
                  return (
                    <div key={section.id} style={{ padding: secIdx === 0 ? "20px 36px 0" : "28px 36px 0" }}>
                      <div style={{ fontSize: "12pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.04em", marginBottom: "8px" }}>
                        {section.label}
                      </div>
                      {section.kind === "service" ? (
                        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                          <colgroup>
                            <col style={{ width: "22%" }} />
                            <col style={{ width: "17%" }} />
                            <col style={{ width: "17%" }} />
                            <col style={{ width: "14%" }} />
                            <col style={{ width: "8%" }} />
                            <col style={{ width: "11%" }} />
                            <col style={{ width: "11%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th style={{ padding: "8px 6px 8px 0", textAlign: "left", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.06em", borderBottom: `2px solid ${active.accentColor}` }}>SERVICE / PROCEDURE</th>
                              <th style={{ padding: "8px 6px", textAlign: "left", fontSize: "6.8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.03em", borderBottom: `2px solid ${active.accentColor}` }}>CURRENT LEVEL<br />(New Hire)</th>
                              <th style={{ padding: "8px 6px", textAlign: "left", fontSize: "6.8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.03em", borderBottom: `2px solid ${active.accentColor}` }}>TARGET LEVEL<br />(Practice)</th>
                              <th style={{ padding: "8px 6px", textAlign: "left", fontSize: "7pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.04em", borderBottom: `2px solid ${active.accentColor}` }}>TARGET DATE</th>
                              <th style={{ padding: "8px 4px", textAlign: "center", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.04em", borderBottom: `2px solid ${active.accentColor}` }}>DONE</th>
                              <th style={{ padding: "8px 6px", textAlign: "left", fontSize: "6.8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.03em", borderBottom: `2px solid ${active.accentColor}` }}>N.H. INITIALS</th>
                              <th style={{ padding: "8px 0 8px 6px", textAlign: "left", fontSize: "6.8pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.03em", borderBottom: `2px solid ${active.accentColor}` }}>TRAINER INITIALS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.items.map((item, iIdx) => (
                              <tr key={item.id} style={{ background: iIdx % 2 === 0 ? "transparent" : "#f9f7f5" }}>
                                <td style={{ padding: "7px 6px 7px 0", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                                  <span style={{ fontSize: "9pt", lineHeight: 1.35, color: "#2a2a2a" }}>{item.label}</span>
                                </td>
                                <td style={{ padding: "7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                  <div style={{ borderBottom: "1px solid #999", height: "12px" }} />
                                </td>
                                <td style={{ padding: "7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                  <div style={{ borderBottom: "1px solid #999", height: "12px" }} />
                                </td>
                                <td style={{ padding: "7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                  <div style={{ borderBottom: "1px solid #999", height: "12px" }} />
                                </td>
                                <td style={{ padding: "7px 4px", borderBottom: "1px solid #eee", verticalAlign: "top", textAlign: "center" }}>
                                  <span style={{ display: "inline-block", width: "12px", height: "12px", border: `1.5px solid ${active.accentColor}`, borderRadius: "2px", marginTop: "2px" }} />
                                </td>
                                <td style={{ padding: "7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                  <div style={{ borderBottom: "1px solid #999", height: "12px" }} />
                                </td>
                                <td style={{ padding: "7px 0 7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                  <div style={{ borderBottom: "1px solid #999", height: "12px" }} />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                          <colgroup>
                            <col style={{ width: "34%" }} />
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "8%" }} />
                            <col style={{ width: "14%" }} />
                            <col style={{ width: "12%" }} />
                            <col style={{ width: "12%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th style={{ padding: "8px 8px 8px 0", textAlign: "left", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.06em", borderBottom: `2px solid ${active.accentColor}` }}>CRITERIA</th>
                              <th style={{ padding: "8px 6px", textAlign: "left", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.06em", borderBottom: `2px solid ${active.accentColor}` }}>TRAINED BY</th>
                              <th style={{ padding: "8px 4px", textAlign: "center", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.04em", borderBottom: `2px solid ${active.accentColor}` }}>DONE</th>
                              <th style={{ padding: "8px 6px", textAlign: "left", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.06em", borderBottom: `2px solid ${active.accentColor}` }}>DATE</th>
                              <th style={{ padding: "8px 6px", textAlign: "left", fontSize: "7pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.04em", borderBottom: `2px solid ${active.accentColor}` }}>N.H. INITIALS</th>
                              <th style={{ padding: "8px 0 8px 6px", textAlign: "left", fontSize: "7pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.04em", borderBottom: `2px solid ${active.accentColor}` }}>TRAINER INITIALS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.items.map((item, iIdx) => (
                              <tr key={item.id} style={{ background: iIdx % 2 === 0 ? "transparent" : "#f9f7f5" }}>
                                <td style={{ padding: "7px 8px 7px 0", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                                  <span style={{ fontSize: "9pt", lineHeight: 1.35, color: "#2a2a2a" }}>{item.label}</span>
                                </td>
                                <td style={{ padding: "7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                  <div style={{ borderBottom: "1px solid #999", height: "12px" }} />
                                </td>
                                <td style={{ padding: "7px 4px", borderBottom: "1px solid #eee", verticalAlign: "top", textAlign: "center" }}>
                                  <span style={{ display: "inline-block", width: "12px", height: "12px", border: `1.5px solid ${active.accentColor}`, borderRadius: "2px", marginTop: "2px" }} />
                                </td>
                                <td style={{ padding: "7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                  <div style={{ borderBottom: "1px solid #999", height: "12px" }} />
                                </td>
                                <td style={{ padding: "7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                  <div style={{ borderBottom: "1px solid #999", height: "12px" }} />
                                </td>
                                <td style={{ padding: "7px 0 7px 6px", borderBottom: "1px solid #eee", verticalAlign: "bottom" }}>
                                  <div style={{ borderBottom: "1px solid #999", height: "12px" }} />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  );
                })}

                {active.sections.every((s) => s.items.length === 0) && (
                  <div style={{ padding: "40px 36px", textAlign: "center", color: "#999", fontSize: "9.5pt" }}>
                    Add criteria to a section to see it here.
                  </div>
                )}

                <div style={{ height: "28px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
