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
  FileWarning,
  Save,
  Check,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface CheckItem {
  id: string;
  label: string;
  checked: boolean;
}

interface CheckGroup {
  items: CheckItem[];
}

type GroupKey = "warningLevel" | "violations" | "disciplinaryActions";

interface WriteUp {
  id: string;
  name: string;
  accentColor: string;
  employeeName: string;
  formDate: string;
  warningLevel: CheckGroup;
  warningLevelOther: string;
  previousDisciplineDate: string;
  warningCount: string;
  introText: string;
  violations: CheckGroup;
  violationsOther: string;
  dateOfViolation: string;
  violationStatement: string;
  supervisorName: string;
  supervisorDate: string;
  supervisorPosition: string;
  disciplinaryActions: CheckGroup;
  disciplinaryOther: string;
  correctiveActions: string;
  followUpDate: string;
  rectifyDaysChecked: boolean;
  rectifyDays: string;
  rectifyImmediateChecked: boolean;
  employeeSignDate: string;
  employeeRefused: boolean;
  supervisorSignDate2: string;
  createdAt: string;
}

interface StoreData {
  writeUps: WriteUp[];
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

function checkGroupFrom(labels: string[]): CheckGroup {
  return { items: labels.map((label) => ({ id: uid(), label, checked: false })) };
}

const defaultWarningLevelLabels = ["First Warning", "Second Warning", "Other"];

const defaultViolationLabels = [
  "Attendance",
  "Conduct",
  "Harassment",
  "Misrepresentation of Company Values",
  "Falsification of Documentation",
  "Failure to Follow Procedure",
  "Failure to Meet Performance Standards",
  "Violation of Policy",
  "Other",
];

const defaultDisciplinaryLabels = ["Verbal Warning", "Written Warning", "Sent Home Without Pay", "Termination", "Other"];

const defaultIntroText =
  "This written warning serves to address ongoing concerns regarding your conduct and performance. It is important to emphasize the seriousness of these issues so that you can take immediate corrective action. Please note that this warning/write-up will be placed in your personnel file.";

const defaultAckText =
  "The above has been discussed with me by my supervisor. I understand the contents and acknowledge and understand the corrective action required. I also acknowledge and understand the potential consequences of noncompliance.";

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function newWriteUp(): WriteUp {
  return {
    id: uid(),
    name: "New Write-Up",
    accentColor: "#4a0018",
    employeeName: "",
    formDate: todayISO(),
    warningLevel: checkGroupFrom(defaultWarningLevelLabels),
    warningLevelOther: "",
    previousDisciplineDate: "",
    warningCount: "",
    introText: defaultIntroText,
    violations: checkGroupFrom(defaultViolationLabels),
    violationsOther: "",
    dateOfViolation: "",
    violationStatement: "",
    supervisorName: "",
    supervisorDate: "",
    supervisorPosition: "",
    disciplinaryActions: checkGroupFrom(defaultDisciplinaryLabels),
    disciplinaryOther: "",
    correctiveActions: "",
    followUpDate: "",
    rectifyDaysChecked: false,
    rectifyDays: "",
    rectifyImmediateChecked: false,
    employeeSignDate: "",
    employeeRefused: false,
    supervisorSignDate2: "",
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

function formatDateInput(iso: string): string {
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

// ── Reusable checkbox-group editor (Warning Level / Violations / Disciplinary Action) ──

function CheckGroupEditor({
  title,
  group,
  otherValue,
  otherLabel,
  editingField,
  setEditingField,
  onAddItem,
  onUpdateLabel,
  onToggle,
  onDeleteItem,
  onOtherChange,
}: {
  title: string;
  group: CheckGroup;
  otherValue: string;
  otherLabel: string;
  editingField: string | null;
  setEditingField: (v: string | null) => void;
  onAddItem: () => void;
  onUpdateLabel: (itemId: string, label: string) => void;
  onToggle: (itemId: string) => void;
  onDeleteItem: (itemId: string) => void;
  onOtherChange: (v: string) => void;
}) {
  return (
    <section>
      <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>{title}</p>
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.14)" }}>
        <div className="py-1.5 px-3 space-y-0.5" style={{ background: "rgba(0,0,0,0.15)" }}>
          {group.items.map((item) => (
            <div key={item.id} className="flex items-center gap-2 py-1.5 group">
              <button onClick={() => onToggle(item.id)} className="flex-shrink-0 flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ width: 14, height: 14, borderRadius: 3, border: "1.5px solid #a28c75", background: item.checked ? "#a28c75" : "transparent" }}>
                {item.checked && <Check size={10} style={{ color: "#0c0004" }} />}
              </button>
              {editingField === `item:${item.id}` ? (
                <input autoFocus type="text" value={item.label} onChange={(e) => onUpdateLabel(item.id, e.target.value)}
                  onBlur={() => setEditingField(null)} onKeyDown={(e) => e.key === "Enter" && setEditingField(null)}
                  className="flex-1 text-xs bg-transparent outline-none border-b" style={{ color: "#fffdf6", borderColor: "rgba(162,140,117,0.4)" }} />
              ) : (
                <span className="flex-1 text-xs leading-relaxed cursor-text" style={{ color: "rgba(255,253,246,0.65)" }} onClick={() => setEditingField(`item:${item.id}`)}>
                  {item.label}
                </span>
              )}
              <button onClick={() => onDeleteItem(item.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "rgba(162,140,117,0.4)" }}>
                <Trash2 size={11} />
              </button>
            </div>
          ))}
          <button onClick={onAddItem} className="flex items-center gap-1.5 text-xs mt-1.5 py-1 transition-opacity hover:opacity-80" style={{ color: "rgba(162,140,117,0.55)" }}>
            <Plus size={11} />
            Add option
          </button>
        </div>
        <div className="px-3 py-2.5" style={{ borderTop: "1px solid rgba(162,140,117,0.1)" }}>
          <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.35)" }}>{otherLabel}</label>
          <input type="text" value={otherValue} onChange={(e) => onOtherChange(e.target.value)} placeholder="Specify if applicable..."
            className="w-full text-xs rounded-lg px-2.5 py-2 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
        </div>
      </div>
    </section>
  );
}

// ── Print-preview checkbox row (read-only, reflects saved state) ──

function PrintCheckRow({ group, accentColor, columns = 1 }: { group: CheckGroup; accentColor: string; columns?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, columnGap: "18px", rowGap: "5px" }}>
      {group.items.map((item) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "11px", height: "11px", flexShrink: 0, border: `1.5px solid ${accentColor}`, borderRadius: "2px", background: item.checked ? accentColor : "transparent" }}>
            {item.checked && <span style={{ color: "white", fontSize: "8px", lineHeight: 1, fontWeight: "bold" }}>✓</span>}
          </span>
          <span style={{ fontSize: "9pt", color: "#2a2a2a" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export default function EmployeeWriteUpFormPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>({ writeUps: [] });
  const [view, setView] = useState<"list" | "editor">("list");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [editingField, setEditingField] = useState<string | null>(null);

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_employee_writeups_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({ writeUps: Array.isArray(parsed.writeUps) ? parsed.writeUps : [] });
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

  // ── Record-level CRUD ──

  function createWriteUp() {
    const w = newWriteUp();
    setData((prev) => ({ writeUps: [w, ...prev.writeUps] }));
    setActiveId(w.id);
    setView("editor");
    setActiveTab("edit");
  }
  function duplicateWriteUp(id: string) {
    setData((prev) => {
      const src = prev.writeUps.find((w) => w.id === id);
      if (!src) return prev;
      const copy: WriteUp = {
        ...src,
        id: uid(),
        name: `${src.name} (Copy)`,
        createdAt: new Date().toISOString(),
        warningLevel: { items: src.warningLevel.items.map((it) => ({ ...it, id: uid() })) },
        violations: { items: src.violations.items.map((it) => ({ ...it, id: uid() })) },
        disciplinaryActions: { items: src.disciplinaryActions.items.map((it) => ({ ...it, id: uid() })) },
      };
      return { writeUps: [copy, ...prev.writeUps] };
    });
  }
  function deleteWriteUp(id: string) {
    setData((prev) => ({ writeUps: prev.writeUps.filter((w) => w.id !== id) }));
    if (activeId === id) {
      setActiveId(null);
      setView("list");
    }
  }
  function openWriteUp(id: string) {
    setActiveId(id);
    setView("editor");
    setActiveTab("edit");
  }
  function updateField<K extends keyof WriteUp>(id: string, field: K, value: WriteUp[K]) {
    setData((prev) => ({ writeUps: prev.writeUps.map((w) => (w.id === id ? { ...w, [field]: value } : w)) }));
  }

  // ── Checkbox-group item CRUD (operates on the active write-up) ──

  function addGroupItem(writeUpId: string, groupKey: GroupKey) {
    const newId = uid();
    setData((prev) => ({
      writeUps: prev.writeUps.map((w) => (w.id === writeUpId ? { ...w, [groupKey]: { items: [...w[groupKey].items, { id: newId, label: "New option", checked: false }] } } : w)),
    }));
    setEditingField(`item:${newId}`);
  }
  function updateGroupItemLabel(writeUpId: string, groupKey: GroupKey, itemId: string, label: string) {
    setData((prev) => ({
      writeUps: prev.writeUps.map((w) => (w.id === writeUpId ? { ...w, [groupKey]: { items: w[groupKey].items.map((it) => (it.id === itemId ? { ...it, label } : it)) } } : w)),
    }));
  }
  function toggleGroupItem(writeUpId: string, groupKey: GroupKey, itemId: string) {
    setData((prev) => ({
      writeUps: prev.writeUps.map((w) => (w.id === writeUpId ? { ...w, [groupKey]: { items: w[groupKey].items.map((it) => (it.id === itemId ? { ...it, checked: !it.checked } : it)) } } : w)),
    }));
  }
  function deleteGroupItem(writeUpId: string, groupKey: GroupKey, itemId: string) {
    setData((prev) => ({
      writeUps: prev.writeUps.map((w) => (w.id === writeUpId ? { ...w, [groupKey]: { items: w[groupKey].items.filter((it) => it.id !== itemId) } } : w)),
    }));
  }

  const active = data.writeUps.find((w) => w.id === activeId) ?? null;
  const sortedWriteUps = [...data.writeUps].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  function warningBadge(w: WriteUp): string {
    const checked = w.warningLevel.items.find((it) => it.checked);
    return checked ? checked.label : "Not set";
  }

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
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Employee Write-Up Form</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,253,246,0.4)" }}>
            A structured, editable write-up template — customize the warning levels, violation categories, and disciplinary actions to fit your practice, fill it out, and save every incident as a named, dated record you can print for signature.
          </p>

          {/* New write-up */}
          <button onClick={createWriteUp} className="w-full sm:w-auto rounded-xl border p-6 text-left transition-all duration-200 hover:border-[#a28c75]/40 mb-12"
            style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.15)" }}>
            <div className="flex items-center gap-4">
              <FileWarning size={20} style={{ color: "#a28c75" }} />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>New Employee Write-Up</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>Start from the standard template — editable violation and disciplinary action options.</p>
              </div>
            </div>
          </button>

          {/* Saved write-ups */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Saved Write-Ups</h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          {sortedWriteUps.length === 0 ? (
            <div className="rounded-xl border p-10 text-center" style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.35)" }}>No write-ups saved yet — create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedWriteUps.map((w) => (
                <div key={w.id} className="rounded-xl border p-5 flex items-center gap-4 flex-wrap sm:flex-nowrap"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                    <FileWarning size={17} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openWriteUp(w.id)}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{w.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: "rgba(162,140,117,0.75)" }}>
                        {warningBadge(w)}
                      </span>
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.35)" }}>
                      {w.employeeName.trim() ? `${w.employeeName} · ` : ""}{formatDateInput(w.formDate) || "No date set"} · Created {formatDate(w.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => openWriteUp(w.id)} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                      Open
                    </button>
                    <button onClick={() => duplicateWriteUp(w.id)} title="Duplicate" className="p-2 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                      <Copy size={14} />
                    </button>
                    <button onClick={() => deleteWriteUp(w.id)} title="Delete" className="p-2 opacity-40 hover:opacity-80 transition-opacity" style={{ color: "#e07878" }}>
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
          #writeup-print-preview, #writeup-print-preview * { visibility: visible; }
          #writeup-print-preview {
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

      <div className="min-h-screen" style={{ background: "#0c0004" }}>
        {/* Header */}
        <div className="border-b px-6 md:px-10 py-6 flex items-center justify-between gap-4 no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center gap-4 min-w-0">
            <button onClick={() => { setView("list"); setActiveId(null); }} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70 flex-shrink-0" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              My Write-Ups
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
            style={{ width: "100%", maxWidth: "440px", borderRight: "1px solid rgba(162,140,117,0.1)", background: "#0c0004" }}>
            <div className="p-5 space-y-6">
              {/* Record details */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Record Details</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Record Name</label>
                    <input type="text" value={active.name} onChange={(e) => updateField(active.id, "name", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Employee Name</label>
                    <input type="text" value={active.employeeName} onChange={(e) => updateField(active.id, "employeeName", e.target.value)} placeholder="e.g. Jamie Rivera"
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Date</label>
                    <input type="date" value={active.formDate} onChange={(e) => updateField(active.id, "formDate", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                  </div>
                </div>
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
                <div className="flex items-center gap-2">
                  <label className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>Custom:</label>
                  <input type="color" value={active.accentColor} onChange={(e) => updateField(active.id, "accentColor", e.target.value)}
                    className="w-10 h-8 rounded cursor-pointer" style={{ border: "1px solid rgba(162,140,117,0.2)", background: "transparent", padding: "2px" }} />
                  <span className="text-xs font-mono" style={{ color: "rgba(255,253,246,0.35)" }}>{active.accentColor}</span>
                </div>
              </section>

              {/* Warning level */}
              <CheckGroupEditor
                title="Warning Level"
                group={active.warningLevel}
                otherValue={active.warningLevelOther}
                otherLabel="If Other, specify"
                editingField={editingField}
                setEditingField={setEditingField}
                onAddItem={() => addGroupItem(active.id, "warningLevel")}
                onUpdateLabel={(itemId, label) => updateGroupItemLabel(active.id, "warningLevel", itemId, label)}
                onToggle={(itemId) => toggleGroupItem(active.id, "warningLevel", itemId)}
                onDeleteItem={(itemId) => deleteGroupItem(active.id, "warningLevel", itemId)}
                onOtherChange={(v) => updateField(active.id, "warningLevelOther", v)}
              />

              {/* Prior discipline */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Prior Discipline</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Previous Discipline Meeting Date <span style={{ color: "rgba(255,253,246,0.25)" }}>(optional)</span></label>
                    <input type="date" value={active.previousDisciplineDate} onChange={(e) => updateField(active.id, "previousDisciplineDate", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>This warning is the ___ time on this issue</label>
                    <input type="text" value={active.warningCount} onChange={(e) => updateField(active.id, "warningCount", e.target.value)} placeholder="e.g. 2nd"
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                </div>
              </section>

              {/* Intro statement */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Opening Statement</p>
                <textarea value={active.introText} onChange={(e) => updateField(active.id, "introText", e.target.value)} rows={4}
                  className="w-full text-xs rounded-lg px-3 py-2.5 outline-none resize-none leading-relaxed" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
              </section>

              {/* Violations */}
              <CheckGroupEditor
                title="Violation Categories"
                group={active.violations}
                otherValue={active.violationsOther}
                otherLabel="If Other, specify"
                editingField={editingField}
                setEditingField={setEditingField}
                onAddItem={() => addGroupItem(active.id, "violations")}
                onUpdateLabel={(itemId, label) => updateGroupItemLabel(active.id, "violations", itemId, label)}
                onToggle={(itemId) => toggleGroupItem(active.id, "violations", itemId)}
                onDeleteItem={(itemId) => deleteGroupItem(active.id, "violations", itemId)}
                onOtherChange={(v) => updateField(active.id, "violationsOther", v)}
              />

              {/* Violation statement */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Violation Statement</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Date of Violation</label>
                    <input type="date" value={active.dateOfViolation} onChange={(e) => updateField(active.id, "dateOfViolation", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Describe what happened — be specific and factual <span style={{ color: "rgba(255,253,246,0.25)" }}>(attach supporting docs separately)</span></label>
                    <textarea value={active.violationStatement} onChange={(e) => updateField(active.id, "violationStatement", e.target.value)} rows={5} placeholder="What happened, when, and who was involved..."
                      className="w-full text-xs rounded-lg px-3 py-2.5 outline-none resize-none leading-relaxed placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                </div>
              </section>

              {/* Supervisor issuing */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Supervisor Issuing Action</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Name</label>
                    <input type="text" value={active.supervisorName} onChange={(e) => updateField(active.id, "supervisorName", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Date</label>
                      <input type="date" value={active.supervisorDate} onChange={(e) => updateField(active.id, "supervisorDate", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                    </div>
                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Position</label>
                      <input type="text" value={active.supervisorPosition} onChange={(e) => updateField(active.id, "supervisorPosition", e.target.value)}
                        className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                    </div>
                  </div>
                </div>
              </section>

              {/* Disciplinary action */}
              <CheckGroupEditor
                title="Disciplinary Action"
                group={active.disciplinaryActions}
                otherValue={active.disciplinaryOther}
                otherLabel="If Other, specify"
                editingField={editingField}
                setEditingField={setEditingField}
                onAddItem={() => addGroupItem(active.id, "disciplinaryActions")}
                onUpdateLabel={(itemId, label) => updateGroupItemLabel(active.id, "disciplinaryActions", itemId, label)}
                onToggle={(itemId) => toggleGroupItem(active.id, "disciplinaryActions", itemId)}
                onDeleteItem={(itemId) => deleteGroupItem(active.id, "disciplinaryActions", itemId)}
                onOtherChange={(v) => updateField(active.id, "disciplinaryOther", v)}
              />

              {/* Corrective action */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Corrective Action(s) to be Taken</p>
                <div className="space-y-3">
                  <textarea value={active.correctiveActions} onChange={(e) => updateField(active.id, "correctiveActions", e.target.value)} rows={4} placeholder="Corrective actions and timeframe..."
                    className="w-full text-xs rounded-lg px-3 py-2.5 outline-none resize-none leading-relaxed placeholder:opacity-30" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} />
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Follow-Up Meeting Date</label>
                    <input type="date" value={active.followUpDate} onChange={(e) => updateField(active.id, "followUpDate", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                  </div>
                </div>
              </section>

              {/* Repercussion of warning */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Repercussion of Warning</p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <button onClick={() => updateField(active.id, "rectifyDaysChecked", !active.rectifyDaysChecked)} className="flex-shrink-0 flex items-center justify-center transition-opacity hover:opacity-80"
                      style={{ width: 14, height: 14, borderRadius: 3, border: "1.5px solid #a28c75", background: active.rectifyDaysChecked ? "#a28c75" : "transparent" }}>
                      {active.rectifyDaysChecked && <Check size={10} style={{ color: "#0c0004" }} />}
                    </button>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>I understand I have</span>
                    <input type="text" value={active.rectifyDays} onChange={(e) => updateField(active.id, "rectifyDays", e.target.value)} placeholder="__" style={{ width: "44px", background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" }} className="text-xs rounded px-2 py-1 outline-none text-center" />
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>days to rectify</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button onClick={() => updateField(active.id, "rectifyImmediateChecked", !active.rectifyImmediateChecked)} className="flex-shrink-0 flex items-center justify-center transition-opacity hover:opacity-80"
                      style={{ width: 14, height: 14, borderRadius: 3, border: "1.5px solid #a28c75", background: active.rectifyImmediateChecked ? "#a28c75" : "transparent" }}>
                      {active.rectifyImmediateChecked && <Check size={10} style={{ color: "#0c0004" }} />}
                    </button>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>Action must be taken immediately</span>
                  </div>
                </div>
              </section>

              {/* Signatures */}
              <section>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Signatures</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Employee Signature Date</label>
                    <input type="date" value={active.employeeSignDate} onChange={(e) => updateField(active.id, "employeeSignDate", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button onClick={() => updateField(active.id, "employeeRefused", !active.employeeRefused)} className="flex-shrink-0 flex items-center justify-center transition-opacity hover:opacity-80"
                      style={{ width: 14, height: 14, borderRadius: 3, border: "1.5px solid #a28c75", background: active.employeeRefused ? "#a28c75" : "transparent" }}>
                      {active.employeeRefused && <Check size={10} style={{ color: "#0c0004" }} />}
                    </button>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>Employee refused to sign this form</span>
                  </div>
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "rgba(255,253,246,0.4)" }}>Supervisor Signature Date</label>
                    <input type="date" value={active.supervisorSignDate2} onChange={(e) => updateField(active.id, "supervisorSignDate2", e.target.value)}
                      className="w-full text-sm rounded-lg px-3 py-2.5 outline-none" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" }} />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Preview panel */}
          <div className={`print-preview-pane flex-1 overflow-y-auto ${activeTab === "preview" ? "flex" : "hidden"} md:flex flex-col`} style={{ background: "#e8e0d8" }}>
            <div className="flex items-center justify-between px-6 py-3 no-print" style={{ background: "rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <span className="text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>Live Preview — this is how your write-up will print</span>
              <button onClick={handlePrint} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-150 hover:opacity-80" style={{ background: active.accentColor, color: "#fffdf6" }}>
                <Printer size={11} />
                Print / Save PDF
              </button>
            </div>

            <div className="flex-1 flex items-start justify-center py-8 px-4">
              <div id="writeup-print-preview" style={{ background: "white", width: "100%", maxWidth: "740px", minHeight: "980px", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "10pt" }}>
                {/* Header */}
                <div style={{ borderBottom: `4px solid ${active.accentColor}`, padding: "26px 36px 18px" }}>
                  <div style={{ fontSize: "18pt", fontWeight: "bold", color: active.accentColor, letterSpacing: "0.04em", fontFamily: "Arial, sans-serif" }}>
                    EMPLOYEE WRITE-UP FORM
                  </div>
                  <div style={{ display: "flex", gap: "36px", marginTop: "12px", fontFamily: "Arial, sans-serif" }}>
                    <div style={{ fontSize: "10.5pt", color: "#1a1a1a" }}>
                      <span style={{ color: "#888", fontSize: "8pt", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "2px" }}>Employee</span>
                      {active.employeeName.trim() || <span style={{ display: "inline-block", borderBottom: "1px solid #999", width: "180px", height: "12px" }} />}
                    </div>
                    <div style={{ fontSize: "10.5pt", color: "#1a1a1a" }}>
                      <span style={{ color: "#888", fontSize: "8pt", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "2px" }}>Date</span>
                      {formatDateInput(active.formDate) || <span style={{ display: "inline-block", borderBottom: "1px solid #999", width: "100px", height: "12px" }} />}
                    </div>
                  </div>
                </div>

                <div style={{ padding: "18px 36px 0" }}>
                  {/* Warning level */}
                  <PrintCheckRow group={active.warningLevel} accentColor={active.accentColor} columns={3} />
                  {active.warningLevelOther.trim() && (
                    <div style={{ fontSize: "8.5pt", color: "#555", marginTop: "4px" }}>Other: {active.warningLevelOther}</div>
                  )}
                  <div style={{ display: "flex", gap: "28px", marginTop: "10px", flexWrap: "wrap" }}>
                    <div style={{ fontSize: "8.5pt", color: "#555" }}>
                      Previous discipline meeting: <span style={{ color: "#1a1a1a" }}>{formatDateInput(active.previousDisciplineDate) || "N/A"}</span>
                    </div>
                    <div style={{ fontSize: "8.5pt", color: "#555" }}>
                      This warning is the <span style={{ color: "#1a1a1a", fontWeight: "bold" }}>{active.warningCount || "___"}</span> time on this issue.
                    </div>
                  </div>

                  <div style={{ fontSize: "9pt", lineHeight: 1.55, color: "#333", marginTop: "14px", paddingBottom: "14px", borderBottom: "1px solid #eee" }}>
                    {active.introText}
                  </div>

                  {/* Violations */}
                  <div style={{ fontSize: "11.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", margin: "16px 0 8px" }}>Violations</div>
                  <PrintCheckRow group={active.violations} accentColor={active.accentColor} columns={2} />
                  {active.violationsOther.trim() && (
                    <div style={{ fontSize: "8.5pt", color: "#555", marginTop: "4px" }}>Other: {active.violationsOther}</div>
                  )}

                  {/* Violation statement */}
                  <div style={{ fontSize: "11.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", margin: "18px 0 6px" }}>Violation Statement</div>
                  <div style={{ fontSize: "8.5pt", color: "#555", marginBottom: "8px" }}>
                    Date of Violation: <span style={{ color: "#1a1a1a" }}>{formatDateInput(active.dateOfViolation) || "____________"}</span>
                  </div>
                  <div style={{ fontSize: "9.5pt", lineHeight: 1.7, color: "#1a1a1a", minHeight: "60px", whiteSpace: "pre-wrap", border: "1px solid #eee", borderRadius: "4px", padding: "10px 12px" }}>
                    {active.violationStatement.trim() || <span style={{ color: "#bbb" }}>(no statement entered)</span>}
                  </div>

                  {/* Supervisor issuing */}
                  <div style={{ display: "flex", gap: "24px", marginTop: "16px", paddingBottom: "14px", borderBottom: "1px solid #eee" }}>
                    <div style={{ flex: 2 }}>
                      <div style={{ borderBottom: "1px solid #999", minHeight: "16px", fontSize: "9pt", paddingBottom: "2px" }}>{active.supervisorName}</div>
                      <div style={{ fontSize: "7.5pt", color: "#888", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Signed by Supervisor Issuing Action</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ borderBottom: "1px solid #999", minHeight: "16px", fontSize: "9pt", paddingBottom: "2px" }}>{formatDateInput(active.supervisorDate)}</div>
                      <div style={{ fontSize: "7.5pt", color: "#888", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Date</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ borderBottom: "1px solid #999", minHeight: "16px", fontSize: "9pt", paddingBottom: "2px" }}>{active.supervisorPosition}</div>
                      <div style={{ fontSize: "7.5pt", color: "#888", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Position</div>
                    </div>
                  </div>

                  {/* Disciplinary action */}
                  <div style={{ fontSize: "11.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", margin: "16px 0 8px" }}>Disciplinary Action</div>
                  <PrintCheckRow group={active.disciplinaryActions} accentColor={active.accentColor} columns={3} />
                  {active.disciplinaryOther.trim() && (
                    <div style={{ fontSize: "8.5pt", color: "#555", marginTop: "4px" }}>Other: {active.disciplinaryOther}</div>
                  )}

                  {/* Corrective action */}
                  <div style={{ fontSize: "11.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", margin: "18px 0 8px" }}>Corrective Action(s) to be Taken</div>
                  <div style={{ fontSize: "9.5pt", lineHeight: 1.7, color: "#1a1a1a", minHeight: "50px", whiteSpace: "pre-wrap", border: "1px solid #eee", borderRadius: "4px", padding: "10px 12px", marginBottom: "8px" }}>
                    {active.correctiveActions.trim() || <span style={{ color: "#bbb" }}>(no corrective actions entered)</span>}
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "#555" }}>
                    Follow-up meeting: <span style={{ color: "#1a1a1a" }}>{formatDateInput(active.followUpDate) || "____________"}</span>
                  </div>

                  {/* Repercussion */}
                  <div style={{ fontSize: "11.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", margin: "18px 0 8px" }}>Repercussion of Warning</div>
                  <div style={{ fontSize: "9pt", lineHeight: 1.55, color: "#333", marginBottom: "10px" }}>{defaultAckText}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "11px", height: "11px", flexShrink: 0, border: `1.5px solid ${active.accentColor}`, borderRadius: "2px", background: active.rectifyDaysChecked ? active.accentColor : "transparent" }}>
                        {active.rectifyDaysChecked && <span style={{ color: "white", fontSize: "8px", fontWeight: "bold" }}>✓</span>}
                      </span>
                      <span style={{ fontSize: "9pt", color: "#2a2a2a" }}>I understand that I have {active.rectifyDays || "_____"} days to rectify this behavior.</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "11px", height: "11px", flexShrink: 0, border: `1.5px solid ${active.accentColor}`, borderRadius: "2px", background: active.rectifyImmediateChecked ? active.accentColor : "transparent" }}>
                        {active.rectifyImmediateChecked && <span style={{ color: "white", fontSize: "8px", fontWeight: "bold" }}>✓</span>}
                      </span>
                      <span style={{ fontSize: "9pt", color: "#2a2a2a" }}>I understand that action to rectify this behavior needs to be taken immediately.</span>
                    </div>
                  </div>

                  {/* Signatures */}
                  <div style={{ fontSize: "11.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: active.accentColor, letterSpacing: "0.03em", margin: "4px 0 10px" }}>Signatures</div>
                  <div style={{ display: "flex", gap: "24px", marginBottom: "8px" }}>
                    <div style={{ flex: 2 }}>
                      <div style={{ borderBottom: "1px solid #999", minHeight: "16px", fontSize: "9pt", paddingBottom: "2px" }}>{active.employeeName}</div>
                      <div style={{ fontSize: "7.5pt", color: "#888", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Employee Signature</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ borderBottom: "1px solid #999", minHeight: "16px", fontSize: "9pt", paddingBottom: "2px" }}>{formatDateInput(active.employeeSignDate)}</div>
                      <div style={{ fontSize: "7.5pt", color: "#888", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Date</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "11px", height: "11px", flexShrink: 0, border: `1.5px solid ${active.accentColor}`, borderRadius: "2px", background: active.employeeRefused ? active.accentColor : "transparent" }}>
                      {active.employeeRefused && <span style={{ color: "white", fontSize: "8px", fontWeight: "bold" }}>✓</span>}
                    </span>
                    <span style={{ fontSize: "8.5pt", color: "#555" }}>Employee refused to sign this form and all attached documentation</span>
                  </div>
                  <div style={{ display: "flex", gap: "24px", marginBottom: "24px" }}>
                    <div style={{ flex: 2 }}>
                      <div style={{ borderBottom: "1px solid #999", minHeight: "16px", fontSize: "9pt", paddingBottom: "2px" }}>{active.supervisorName}</div>
                      <div style={{ fontSize: "7.5pt", color: "#888", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Supervisor Signature</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ borderBottom: "1px solid #999", minHeight: "16px", fontSize: "9pt", paddingBottom: "2px" }}>{formatDateInput(active.supervisorSignDate2)}</div>
                      <div style={{ fontSize: "7.5pt", color: "#888", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Date</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
