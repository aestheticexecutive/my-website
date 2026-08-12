"use client";

import { useState, useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Save,
  Check,
  Trash2,
  ListChecks,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface AgendaSection {
  id: string;
  label: string;
}

interface MeetingEntry {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  content: Record<string, string>; // sectionId -> notes
}

interface MeetingNotesData {
  sections: AgendaSection[];
  meetings: MeetingEntry[];
}

const defaultSections: AgendaSection[] = [
  { id: "icebreaker", label: "Icebreaker" },
  { id: "wins-challenges", label: "Wins & Challenges of the Prior Month" },
  { id: "goal-tracking", label: "Goal Tracking Updates" },
  { id: "updates-announcements", label: "Updates, Reminders & Announcements" },
  { id: "monthly-focus", label: "Monthly Focus" },
  { id: "business-development", label: "Business Development / Continued Training" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function genId(): string {
  return Math.random().toString(36).slice(2, 11);
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function formatDateLabel(iso: string): string {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return "—";
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function emptyContentFor(sections: AgendaSection[]): Record<string, string> {
  const content: Record<string, string> = {};
  sections.forEach((s) => { content[s.id] = ""; });
  return content;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function MeetingNotesPage() {
  const { user } = useUser();
  const [view, setView] = useState<"notes" | "sections">("notes");
  const [data, setData] = useState<MeetingNotesData>({ sections: defaultSections, meetings: [] });
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
  const [expandedMeetingId, setExpandedMeetingId] = useState<string | null>(null);

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_meeting_notes_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({
          sections: Array.isArray(parsed.sections) && parsed.sections.length > 0 ? parsed.sections : defaultSections,
          meetings: Array.isArray(parsed.meetings) ? parsed.meetings : [],
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

  // ── Sections ──

  function addSection() {
    const id = genId();
    setData((prev) => ({ ...prev, sections: [...prev.sections, { id, label: "New Section" }] }));
    setEditingSectionId(id);
  }
  function updateSectionLabel(id: string, label: string) {
    setData((prev) => ({ ...prev, sections: prev.sections.map((s) => (s.id === id ? { ...s, label } : s)) }));
  }
  function deleteSection(id: string) {
    setData((prev) => ({ ...prev, sections: prev.sections.filter((s) => s.id !== id) }));
  }
  function moveSection(id: string, dir: -1 | 1) {
    setData((prev) => {
      const idx = prev.sections.findIndex((s) => s.id === id);
      const swapWith = idx + dir;
      if (idx === -1 || swapWith < 0 || swapWith >= prev.sections.length) return prev;
      const next = [...prev.sections];
      [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
      return { ...prev, sections: next };
    });
  }

  // ── Meetings ──

  function addMeeting() {
    const id = genId();
    setData((prev) => ({
      ...prev,
      meetings: [{ id, date: todayISO(), title: "", content: emptyContentFor(prev.sections) }, ...prev.meetings],
    }));
    setExpandedMeetingId(id);
    setView("notes");
  }
  function updateMeeting(id: string, field: "date" | "title", value: string) {
    setData((prev) => ({ ...prev, meetings: prev.meetings.map((m) => (m.id === id ? { ...m, [field]: value } : m)) }));
  }
  function updateMeetingContent(id: string, sectionId: string, value: string) {
    setData((prev) => ({
      ...prev,
      meetings: prev.meetings.map((m) => (m.id === id ? { ...m, content: { ...m.content, [sectionId]: value } } : m)),
    }));
  }
  function deleteMeeting(id: string) {
    setData((prev) => ({ ...prev, meetings: prev.meetings.filter((m) => m.id !== id) }));
    if (expandedMeetingId === id) setExpandedMeetingId(null);
  }

  const sortedMeetings = [...data.meetings].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  // Shared inline styles
  const inputStyle: React.CSSProperties = { background: "rgba(12,0,4,0.8)", borderColor: "rgba(162,140,117,0.2)", color: "#fffdf6", colorScheme: "dark" };
  const cardBg: React.CSSProperties = { background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" };

  return (
    <div className="bg-[#0c0004] min-h-screen pb-24">
      {/* Sticky sub-header */}
      <div className="sticky top-16 z-10 border-b" style={{ background: "rgba(10,0,3,0.96)", backdropFilter: "blur(16px)", borderColor: "rgba(162,140,117,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs">
            <Link href="/members/resources/staff" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={12} /> Staff
            </Link>
            <span style={{ color: "rgba(162,140,117,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,253,246,0.7)" }}>Meeting Notes</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            <div className="flex rounded-lg border overflow-hidden" style={{ borderColor: "rgba(162,140,117,0.2)" }}>
              {(["notes", "sections"] as const).map((v) => (
                <button key={v} onClick={() => setView(v)} className="px-3 py-1.5 text-xs tracking-wide transition-colors"
                  style={{ background: view === v ? "rgba(162,140,117,0.18)" : "transparent", color: view === v ? "#fffdf6" : "rgba(255,253,246,0.35)" }}>
                  {v === "notes" ? "Meeting Notes" : "Agenda Sections"}
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
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Staff</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>Meeting Notes</h1>
          <p className="text-sm max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
            Pre-loaded with the recommended staff meeting agenda — customize the sections, then log notes for every meeting with a name and date so you can look back on past meetings and prepare for what&apos;s next.
          </p>
        </div>

        {/* ════════════ MEETING NOTES VIEW ════════════ */}
        {view === "notes" && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <p className="text-xs" style={{ color: "rgba(255,253,246,0.35)" }}>
                {data.meetings.length} meeting{data.meetings.length === 1 ? "" : "s"} logged
              </p>
              <button onClick={addMeeting} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                <Plus size={12} /> New Meeting
              </button>
            </div>

            {sortedMeetings.length === 0 ? (
              <div className="rounded-xl border p-10 text-center" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                <p className="text-sm" style={{ color: "rgba(255,253,246,0.35)" }}>No meetings logged yet. Click &quot;New Meeting&quot; to start your first one.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedMeetings.map((m) => {
                  const expanded = expandedMeetingId === m.id;
                  const filledCount = data.sections.filter((s) => (m.content[s.id] || "").trim() !== "").length;
                  const orphanEntries = Object.entries(m.content).filter(([sid, val]) => !data.sections.some((s) => s.id === sid) && val.trim() !== "");

                  return (
                    <div key={m.id} className="rounded-xl border overflow-hidden" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
                      <div className="px-6 py-4 flex items-center justify-between gap-3 cursor-pointer" onClick={() => setExpandedMeetingId(expanded ? null : m.id)}>
                        <div className="flex items-center gap-3 min-w-0">
                          {expanded ? <ChevronDown size={14} style={{ color: "rgba(162,140,117,0.5)" }} /> : <ChevronRight size={14} style={{ color: "rgba(162,140,117,0.5)" }} />}
                          <div className="min-w-0">
                            <p className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>
                              {m.title.trim() || <span className="italic" style={{ color: "rgba(255,253,246,0.3)" }}>Untitled Meeting</span>}
                            </p>
                            <p className="text-xs" style={{ color: "rgba(162,140,117,0.6)" }}>
                              {formatDateLabel(m.date)} · {filledCount}/{data.sections.length} sections filled
                            </p>
                          </div>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); deleteMeeting(m.id); }} className="opacity-40 hover:opacity-80 transition-opacity flex-shrink-0" style={{ color: "#e07878" }}>
                          <Trash2 size={13} />
                        </button>
                      </div>

                      {expanded && (
                        <div className="px-6 pb-6 pt-2 border-t" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 mt-4">
                            <div>
                              <label className="text-[10px] uppercase tracking-wide block mb-1.5" style={{ color: "rgba(162,140,117,0.5)" }}>Meeting Name</label>
                              <input type="text" placeholder="e.g. August Team Meeting" value={m.title} onChange={(e) => updateMeeting(m.id, "title", e.target.value)}
                                className="w-full text-sm px-3 py-2 rounded-lg border outline-none" style={inputStyle} />
                            </div>
                            <div>
                              <label className="text-[10px] uppercase tracking-wide block mb-1.5" style={{ color: "rgba(162,140,117,0.5)" }}>Date</label>
                              <input type="date" value={m.date} onChange={(e) => updateMeeting(m.id, "date", e.target.value)}
                                className="w-full text-sm px-3 py-2 rounded-lg border outline-none" style={inputStyle} />
                            </div>
                          </div>

                          {data.sections.length === 0 ? (
                            <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.2)" }}>No agenda sections defined — add some under &quot;Agenda Sections&quot;.</p>
                          ) : (
                            <div className="space-y-5">
                              {data.sections.map((s) => (
                                <div key={s.id}>
                                  <label className="text-xs font-medium block mb-1.5" style={{ color: "#a28c75" }}>{s.label}</label>
                                  <textarea rows={4} value={m.content[s.id] ?? ""} onChange={(e) => updateMeetingContent(m.id, s.id, e.target.value)}
                                    placeholder="Notes..." className="w-full text-sm px-4 py-3 rounded-lg border outline-none resize-none leading-relaxed" style={inputStyle} />
                                </div>
                              ))}
                            </div>
                          )}

                          {orphanEntries.length > 0 && (
                            <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                              <p className="text-xs mb-3" style={{ color: "rgba(255,253,246,0.3)" }}>Notes from sections since removed from the template:</p>
                              <div className="space-y-4">
                                {orphanEntries.map(([sid, val]) => (
                                  <p key={sid} className="text-sm whitespace-pre-wrap leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{val}</p>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ════════════ AGENDA SECTIONS VIEW ════════════ */}
        {view === "sections" && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <p className="text-xs" style={{ color: "rgba(255,253,246,0.35)" }}>
                {data.sections.length} section{data.sections.length === 1 ? "" : "s"} · This is the template every new meeting starts with.
              </p>
              <button onClick={addSection} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border transition-colors flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.12)", borderColor: "rgba(162,140,117,0.3)", color: "#a28c75" }}>
                <Plus size={12} /> Add Section
              </button>
            </div>

            <div className="rounded-xl border overflow-hidden" style={{ ...cardBg, borderColor: "rgba(162,140,117,0.12)" }}>
              {data.sections.length === 0 ? (
                <div className="px-6 py-10">
                  <p className="text-xs italic text-center" style={{ color: "rgba(255,253,246,0.2)" }}>No sections yet. Click &quot;Add Section&quot; to build your agenda.</p>
                </div>
              ) : (
                <div className="divide-y" style={{ borderColor: "rgba(162,140,117,0.06)" }}>
                  {data.sections.map((s, i) => (
                    <div key={s.id} className="flex items-center gap-3 px-6 py-3.5">
                      <div className="flex flex-col gap-0.5 flex-shrink-0">
                        <button disabled={i === 0} onClick={() => moveSection(s.id, -1)} className="disabled:opacity-20 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                          <ChevronUp size={13} />
                        </button>
                        <button disabled={i === data.sections.length - 1} onClick={() => moveSection(s.id, 1)} className="disabled:opacity-20 opacity-50 hover:opacity-90 transition-opacity" style={{ color: "#a28c75" }}>
                          <ChevronDown size={13} />
                        </button>
                      </div>
                      <span className="text-xs w-5 flex-shrink-0 text-center" style={{ color: "rgba(162,140,117,0.4)" }}>{i + 1}</span>
                      {editingSectionId === s.id ? (
                        <input autoFocus type="text" value={s.label} onChange={(e) => updateSectionLabel(s.id, e.target.value)}
                          onBlur={() => setEditingSectionId(null)} onKeyDown={(e) => e.key === "Enter" && setEditingSectionId(null)}
                          className="flex-1 text-sm bg-transparent outline-none border-b" style={{ color: "#fffdf6", borderColor: "rgba(162,140,117,0.4)" }} />
                      ) : (
                        <span className="flex-1 text-sm cursor-text" style={{ color: "#fffdf6" }} onClick={() => setEditingSectionId(s.id)}>
                          {s.label || <span className="italic" style={{ color: "rgba(255,253,246,0.25)" }}>Untitled section</span>}
                        </span>
                      )}
                      <button onClick={() => deleteSection(s.id)} className="opacity-40 hover:opacity-80 transition-opacity flex-shrink-0" style={{ color: "#e07878" }}>
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border p-4" style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.12)" }}>
              <ListChecks size={14} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.6)" }} />
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                Changes here apply to future meetings. If you remove a section, notes already written under it are kept with the meeting and still shown when you look back — they just won&apos;t appear on new meetings.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
