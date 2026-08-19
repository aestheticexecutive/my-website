"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  Save,
  Check,
  Clock,
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
  Camera,
  Heart,
  Users,
  Tag,
  MessageCircle,
  Star,
  Wrench,
} from "lucide-react";

// ── Catalog ──────────────────────────────────────────────────────────────────

interface CatalogItem {
  id: string;
  text: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  blurb: string;
  items: CatalogItem[];
}

const CATEGORIES: Category[] = [
  {
    id: "content",
    label: "Content & Social Proof",
    icon: Camera,
    blurb: "Every post, video, or story builds trust before a patient ever calls.",
    items: [
      { id: "content-1", text: "Record a short video walking a viewer through what an actual treatment session looks like, start to finish" },
      { id: "content-2", text: "Share a results photo and use the caption to explain, in plain language, what made that outcome possible" },
      { id: "content-3", text: "Go live and spend five minutes answering the single question you get asked most often" },
      { id: "content-4", text: "Build a multi-slide story that reveals a result gradually, using photos you already have consent to share" },
      { id: "content-5", text: "Film a quick myth-busting clip tackling the misconception that keeps hesitant patients from booking" },
      { id: "content-6", text: "Draft one caption per service on your menu in a single sitting, then schedule the whole batch at once" },
      { id: "content-7", text: "Build a pinned post that answers your five most repeated patient questions in one place" },
      { id: "content-8", text: "Introduce each piece of equipment in your treatment room with its own short video" },
      { id: "content-9", text: "Plan a three-part post series: what a treatment is, who it's for, and what results to expect" },
      { id: "content-10", text: "Build anticipation with a countdown post leading into an offer you're launching this week" },
      { id: "content-11", text: "Turn a patient's own words into a simple quote graphic and post it" },
      { id: "content-12", text: "Design a spotlight graphic naming this month's featured treatment" },
      { id: "content-13", text: "Record yourself directly answering \"is this treatment right for me\" — it's the question everyone's silently asking" },
      { id: "content-14", text: "Design a matching highlight cover for every treatment category on your profile" },
      { id: "content-15", text: "Draft a caption for a side-by-side before/after and schedule it to post during peak activity hours" },
    ],
  },
  {
    id: "winback",
    label: "Patient Win-Back",
    icon: Heart,
    blurb: "Reactivating a patient who already trusts you costs far less than earning a new one.",
    items: [
      { id: "winback-1", text: "Pull a list of patients who've gone quiet for two months or more and personally call five of them" },
      { id: "winback-2", text: "Text anyone who finished a full treatment series but never came back for a maintenance visit" },
      { id: "winback-3", text: "Send a warm check-in email to patients whose results are likely due for a refresh" },
      { id: "winback-4", text: "Find patients who started a series but stopped after one visit, and call to find out why" },
      { id: "winback-5", text: "Text everyone who consulted but never booked, and open the door back up" },
      { id: "winback-6", text: "Call patients sitting on unused prepaid sessions before those sessions expire" },
      { id: "winback-7", text: "Reach out to single-service patients and offer a free consult for a complementary treatment" },
      { id: "winback-8", text: "Send your most loyal patients a small, time-limited thank-you offer to re-engage them" },
      { id: "winback-9", text: "Text patients who asked about something during their last visit but never followed through" },
      { id: "winback-10", text: "Pull the patients you know would be great candidates for a specific treatment and invite them directly" },
      { id: "winback-11", text: "Circle back to patients who left a glowing review and ask if they know anyone who'd love your work" },
      { id: "winback-12", text: "Call patients a month after treatment to check in on results and get their next visit booked" },
      { id: "winback-13", text: "Write a three-email sequence aimed at patients who haven't been in for half a year or more" },
      { id: "winback-14", text: "Message patients who just finished their first series about what a logical next step looks like" },
      { id: "winback-15", text: "Text single-service patients and introduce the treatment that naturally pairs with what they already had done" },
    ],
  },
  {
    id: "pipeline",
    label: "New Patient Pipeline",
    icon: Users,
    blurb: "Build the visibility and relationships that bring people to your door.",
    items: [
      { id: "pipeline-1", text: "Refresh your Google Business Profile — new photos, current service list, and whatever you're promoting" },
      { id: "pipeline-2", text: "Personally text five recent happy patients and ask for a Google review — never a mass blast" },
      { id: "pipeline-3", text: "Write and publish one blog post answering what a local patient should know before booking a specific treatment" },
      { id: "pipeline-4", text: "Identify three local medical providers and draft a short pitch proposing a referral relationship" },
      { id: "pipeline-5", text: "Post something genuinely useful in a local community group — skip the sales pitch entirely" },
      { id: "pipeline-6", text: "Research upcoming local wellness or bridal events and register your practice for one" },
      { id: "pipeline-7", text: "Build a short welcome email sequence that introduces new patients to your top few services" },
      { id: "pipeline-8", text: "Design a simple refer-a-friend offer and personally text it to your ten best patients" },
      { id: "pipeline-9", text: "Draft a partnership pitch to a nearby gym, studio, or salon whose clients overlap with yours" },
      { id: "pipeline-10", text: "Find a local wellness creator whose audience fits, and message them a collaboration idea" },
      { id: "pipeline-11", text: "Put a small ad budget behind your best-performing post, targeted to your local area" },
      { id: "pipeline-12", text: "Rewrite your homepage headline and call-to-action to point at your most-booked service" },
      { id: "pipeline-13", text: "Submit your practice to a few local \"best of\" lists or wellness directories you haven't tried yet" },
      { id: "pipeline-14", text: "Build a short free guide or quiz that captures an email address in exchange for something useful" },
      { id: "pipeline-15", text: "Launch or refresh a search ad aimed at your top treatment paired with your city name" },
    ],
  },
  {
    id: "promos",
    label: "Promotions & Offers",
    icon: Tag,
    blurb: "A well-timed, clearly-bounded offer can fill open slots almost immediately.",
    items: [
      { id: "promos-1", text: "Build a 48-hour flash offer and text it straight to your patient list today" },
      { id: "promos-2", text: "Bundle two complementary treatments into a seasonal package at a modest discount" },
      { id: "promos-3", text: "Create a limited founding-patient rate for a service you're relaunching or pushing this month" },
      { id: "promos-4", text: "Launch a bring-a-friend event next week where both patients get a discount" },
      { id: "promos-5", text: "Send a last-chance email reminding patients about a package or offer that's about to expire" },
      { id: "promos-6", text: "Price a full treatment series to reward patients who commit upfront instead of paying per visit" },
      { id: "promos-7", text: "Run a gift card promotion with a bonus perk attached during a seasonal window" },
      { id: "promos-8", text: "Plan an appreciation evening — live demos, exclusive pricing, same-day bookings" },
      { id: "promos-9", text: "Draft an open-house event combining free consultations, live demonstrations, and a time-limited offer" },
      { id: "promos-10", text: "Price an entry-level service low enough to get hesitant patients through the door" },
      { id: "promos-11", text: "Design a body-contouring package aimed at patients who've recently lost significant weight" },
      { id: "promos-12", text: "Stack complementary body treatments into one combined package" },
      { id: "promos-13", text: "Plan a pop-up appearance at a local studio or boutique where people can book on the spot" },
      { id: "promos-14", text: "Draft a proper launch campaign for a service you added months ago but never really promoted" },
      { id: "promos-15", text: "Create a referral reward where sending three new patients earns a free service" },
    ],
  },
  {
    id: "consult",
    label: "Consultation & Sales Readiness",
    icon: MessageCircle,
    blurb: "The room where a curious visitor either becomes a booked patient, or walks away.",
    items: [
      { id: "consult-1", text: "Write out — and actually rehearse — your consultation talking points for your three most-booked services" },
      { id: "consult-2", text: "Build a one-page guide mapping common concerns to the treatment that addresses them and the result to expect" },
      { id: "consult-3", text: "Map out a treatment pathway for each of your core patient types" },
      { id: "consult-4", text: "Write out solid answers to the ten objections you hear most — cost, pain, downtime, results, timing" },
      { id: "consult-5", text: "Map out, for every service you offer, what the natural next recommendation should be" },
      { id: "consult-6", text: "Practice explaining your signature treatment so clearly you can do it in three sentences" },
      { id: "consult-7", text: "Design a simple visual menu that connects a concern to a treatment to an expected outcome" },
      { id: "consult-8", text: "Coach the front desk on how to mention a second treatment at checkout without it feeling like a pitch" },
      { id: "consult-9", text: "Create an incentive that rewards patients who book the same day they consult" },
      { id: "consult-10", text: "Build a follow-up email that recaps the consult plan and makes booking one click away" },
      { id: "consult-11", text: "Write a go-to response for the \"how much does this cost\" question you get in DMs constantly" },
      { id: "consult-12", text: "Pull your last ten consultations, calculate your actual conversion rate, and find where people dropped off" },
      { id: "consult-13", text: "Write a one-page description of what the patient experience actually feels like for each device you use" },
      { id: "consult-14", text: "Write a natural way to bring up financing options that doesn't feel like an afterthought" },
      { id: "consult-15", text: "Practice a smooth, non-awkward way to ask for a card on file to hold a consultation" },
    ],
  },
  {
    id: "reputation",
    label: "Reputation & Authority",
    icon: Star,
    blurb: "Build the trust that gets you chosen before a patient ever meets you.",
    items: [
      { id: "reputation-1", text: "Write down why you actually started this practice, and turn it into a post or blog entry" },
      { id: "reputation-2", text: "Record a short video introducing yourself and how you think about aesthetics" },
      { id: "reputation-3", text: "Pitch yourself as a guest expert to a local podcast, radio spot, or morning show" },
      { id: "reputation-4", text: "Draft a press release announcing a new service or piece of equipment you've recently added" },
      { id: "reputation-5", text: "Build a one-page practice overview you can hand to referral partners or submit to directories" },
      { id: "reputation-6", text: "Pull your strongest reviews together into a dedicated testimonials page on your site" },
      { id: "reputation-7", text: "Create an educational carousel breaking down a concern your services actually solve" },
      { id: "reputation-8", text: "Write a short article on where the industry is headed, and post it somewhere that builds your authority" },
      { id: "reputation-9", text: "Reach out to a local magazine, blog, or publication and pitch yourself for a feature" },
      { id: "reputation-10", text: "Start a recurring series that explains the actual science behind one of your treatments, in plain language" },
    ],
  },
  {
    id: "systems",
    label: "Team & Systems Readiness",
    icon: Wrench,
    blurb: "A practice that runs smoothly converts more of the demand it already has.",
    items: [
      { id: "systems-1", text: "Run a 15-minute huddle to review yesterday's numbers and set today's goal" },
      { id: "systems-2", text: "Restock and organize a treatment room so it's fully ready for the next booked patient" },
      { id: "systems-3", text: "Update your no-show and cancellation policy script and make sure the whole team can recite it" },
      { id: "systems-4", text: "Audit your appointment book for the next two weeks and call to confirm any unconfirmed slots" },
      { id: "systems-5", text: "Walk through your checkout process as a mystery patient and note anything that feels clunky" },
      { id: "systems-6", text: "Clean and inventory your retail display, then reorder anything running low" },
      { id: "systems-7", text: "Review a recent patient complaint or concern and turn it into a team training moment" },
      { id: "systems-8", text: "Update a treatment consent form or intake question that's been outdated for a while" },
      { id: "systems-9", text: "Shadow a teammate handling a phone call and give them one specific piece of feedback" },
      { id: "systems-10", text: "Rebuild your cancellation waitlist process so open slots get filled automatically" },
      { id: "systems-11", text: "Practice your no-show follow-up script as a team, out loud, until it feels natural" },
      { id: "systems-12", text: "Review last month's schedule for recurring gap patterns and adjust hours or staffing" },
      { id: "systems-13", text: "Create a one-page cheat sheet of your top 3 services for new hires to reference during calls" },
      { id: "systems-14", text: "Test your booking link and online scheduler from a patient's point of view for friction points" },
      { id: "systems-15", text: "Set a 90-day goal for one metric — rebooking rate, retail attach rate — and write the first action step" },
    ],
  },
];

const TOTAL_ITEMS = CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

// ── Types ────────────────────────────────────────────────────────────────────

interface CompletionEntry {
  id: string;
  date: string;
  note: string;
}

type CompletionMap = Record<string, CompletionEntry[]>;

interface StoreData {
  completions: CompletionMap;
}

function uid() {
  return Math.random().toString(36).slice(2, 11);
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
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

function latestDate(entries: CompletionEntry[]): string | null {
  if (entries.length === 0) return null;
  return entries.reduce((max, e) => (e.date > max ? e.date : max), entries[0].date);
}

function daysAgo(iso: string): number {
  const then = parseLocalDate(iso).getTime();
  return Math.floor((Date.now() - then) / (1000 * 60 * 60 * 24));
}

// ── Component ────────────────────────────────────────────────────────────────

export default function DowntimeRevenueTrackerPage() {
  const { user } = useUser();
  const [completions, setCompletions] = useState<CompletionMap>({});
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({ [CATEGORIES[0].id]: true });
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [draftDate, setDraftDate] = useState<Record<string, string>>({});
  const [draftNote, setDraftNote] = useState<Record<string, string>>({});

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_downtime_tracker_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed: StoreData & { _savedAt?: string } = JSON.parse(raw);
        setCompletions(parsed.completions && typeof parsed.completions === "object" ? parsed.completions : {});
        if (parsed._savedAt) setLastSaved(parsed._savedAt);
      }
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey) return;
    const t = setTimeout(() => {
      const now = new Date().toISOString();
      localStorage.setItem(storageKey, JSON.stringify({ completions, _savedAt: now }));
      setLastSaved(now);
    }, 800);
    return () => clearTimeout(t);
  }, [completions, storageKey]);

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 30000);
    return () => clearInterval(t);
  }, []);

  const handleSave = useCallback(() => {
    if (!storageKey) return;
    const now = new Date().toISOString();
    localStorage.setItem(storageKey, JSON.stringify({ completions, _savedAt: now }));
    setLastSaved(now);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }, [storageKey, completions]);

  const handlePrint = () => window.print();

  function toggleCategory(id: string) {
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  }
  function expandAll() {
    setOpenCategories(Object.fromEntries(CATEGORIES.map((c) => [c.id, true])));
  }
  function collapseAll() {
    setOpenCategories({});
  }
  function toggleItem(id: string) {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
    setDraftDate((prev) => (prev[id] ? prev : { ...prev, [id]: todayISO() }));
  }

  function logCompletion(itemId: string) {
    const date = draftDate[itemId] || todayISO();
    const note = (draftNote[itemId] || "").trim();
    const entry: CompletionEntry = { id: uid(), date, note };
    setCompletions((prev) => ({ ...prev, [itemId]: [...(prev[itemId] || []), entry] }));
    setDraftNote((prev) => ({ ...prev, [itemId]: "" }));
  }

  function deleteEntry(itemId: string, entryId: string) {
    setCompletions((prev) => ({ ...prev, [itemId]: (prev[itemId] || []).filter((e) => e.id !== entryId) }));
  }

  const stats = useMemo(() => {
    let loggedAtLeastOnce = 0;
    let loggedLast30 = 0;
    for (const cat of CATEGORIES) {
      for (const item of cat.items) {
        const entries = completions[item.id] || [];
        if (entries.length > 0) {
          loggedAtLeastOnce++;
          const latest = latestDate(entries);
          if (latest && daysAgo(latest) <= 30) loggedLast30++;
        }
      }
    }
    return { loggedAtLeastOnce, loggedLast30 };
  }, [completions]);

  const inputStyle = { background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" };

  return (
    <>
      <style>{`
        #downtime-print-doc { display: none; }
        @media print {
          body * { visibility: hidden; }
          #downtime-print-doc, #downtime-print-doc * { visibility: visible; }
          #downtime-print-doc {
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
        <div className="border-b px-6 md:px-10 py-6 no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <Link href="/members/resources/operations" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70" style={{ color: "rgba(162,140,117,0.6)" }}>
              <ArrowLeft size={13} />
              Operations
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
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ background: "#a28c75", color: "#0c0004", border: "none" }}
              >
                <Printer size={13} />
                Print Checklist
              </button>
            </div>
          </div>

          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>Operations</p>
          <h1 className="font-display text-3xl md:text-4xl font-light mb-3" style={{ color: "#fffdf6" }}>Downtime Revenue Tracker</h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.4)" }}>
            100 revenue actions across 7 areas. Log a completion with a date and a note any
            time your team does one — and log it again the next time it's worth repeating.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "rgba(162,140,117,0.5)" }}>Logged at least once</p>
              <p className="text-xl font-medium" style={{ color: "#fffdf6" }}>{stats.loggedAtLeastOnce} <span className="text-sm font-normal" style={{ color: "rgba(255,253,246,0.4)" }}>/ {TOTAL_ITEMS}</span></p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "rgba(162,140,117,0.5)" }}>Logged in the last 30 days</p>
              <p className="text-xl font-medium" style={{ color: "#fffdf6" }}>{stats.loggedLast30}</p>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <button onClick={expandAll} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "transparent", borderColor: "rgba(162,140,117,0.25)", color: "rgba(162,140,117,0.65)" }}>
                Expand all
              </button>
              <button onClick={collapseAll} className="text-xs px-3 py-1.5 rounded-lg border transition-colors" style={{ background: "transparent", borderColor: "rgba(162,140,117,0.25)", color: "rgba(162,140,117,0.65)" }}>
                Collapse all
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 no-print">
          <div className="space-y-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isOpen = !!openCategories[cat.id];
              const loggedCount = cat.items.filter((it) => (completions[it.id] || []).length > 0).length;
              return (
                <div key={cat.id} className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(162,140,117,0.15)" }}>
                  <button onClick={() => toggleCategory(cat.id)} className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors"
                    style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}>
                      <Icon size={15} style={{ color: "#a28c75" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>{cat.label}</h2>
                        <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: "rgba(162,140,117,0.75)" }}>
                          {loggedCount} / {cat.items.length} logged
                        </span>
                      </div>
                      <p className="text-xs mt-0.5 hidden sm:block" style={{ color: "rgba(255,253,246,0.35)" }}>{cat.blurb}</p>
                    </div>
                    {isOpen ? <ChevronUp size={16} style={{ color: "rgba(162,140,117,0.6)" }} /> : <ChevronDown size={16} style={{ color: "rgba(162,140,117,0.6)" }} />}
                  </button>

                  {isOpen && (
                    <div style={{ background: "#0c0004" }}>
                      {cat.items.map((item, i) => {
                        const entries = completions[item.id] || [];
                        const latest = latestDate(entries);
                        const isItemOpen = !!openItems[item.id];
                        return (
                          <div key={item.id} className="border-t" style={{ borderColor: "rgba(162,140,117,0.08)" }}>
                            <button onClick={() => toggleItem(item.id)} className="w-full flex items-start gap-3 px-5 py-3.5 text-left transition-colors hover:bg-white/[0.02]">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-semibold"
                                style={{ background: entries.length > 0 ? "#a28c75" : "rgba(162,140,117,0.1)", color: entries.length > 0 ? "#0c0004" : "rgba(162,140,117,0.6)" }}>
                                {i + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.75)" }}>{item.text}</p>
                                <p className="text-xs mt-1" style={{ color: latest ? "#a28c75" : "rgba(255,253,246,0.3)" }}>
                                  {latest ? `Last done ${formatDateShort(latest)}${entries.length > 1 ? ` · ${entries.length} times logged` : ""}` : "Not logged yet"}
                                </p>
                              </div>
                              {isItemOpen ? <ChevronUp size={14} style={{ color: "rgba(162,140,117,0.5)", marginTop: "4px" }} /> : <ChevronDown size={14} style={{ color: "rgba(162,140,117,0.5)", marginTop: "4px" }} />}
                            </button>

                            {isItemOpen && (
                              <div className="px-5 pb-4 pl-14">
                                <div className="rounded-lg p-3 space-y-2" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                                  <div className="flex gap-2 items-end flex-wrap">
                                    <div>
                                      <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.4)" }}>Date completed</label>
                                      <input type="date" value={draftDate[item.id] || todayISO()} onChange={(e) => setDraftDate((prev) => ({ ...prev, [item.id]: e.target.value }))}
                                        className="text-xs rounded px-2 py-1.5 outline-none" style={{ ...inputStyle, colorScheme: "dark" }} />
                                    </div>
                                    <div className="flex-1 min-w-[160px]">
                                      <label className="text-[10px] mb-1 block" style={{ color: "rgba(255,253,246,0.4)" }}>Note (optional)</label>
                                      <input type="text" value={draftNote[item.id] || ""} onChange={(e) => setDraftNote((prev) => ({ ...prev, [item.id]: e.target.value }))}
                                        placeholder="Any details worth remembering..." className="w-full text-xs rounded px-2 py-1.5 outline-none placeholder:opacity-30" style={inputStyle} />
                                    </div>
                                    <button onClick={() => logCompletion(item.id)} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-opacity hover:opacity-90 flex-shrink-0"
                                      style={{ background: "#a28c75", color: "#0c0004" }}>
                                      <Plus size={12} />
                                      Log completion
                                    </button>
                                  </div>

                                  {entries.length > 0 && (
                                    <div className="pt-2 space-y-1.5 border-t" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
                                      {[...entries].sort((a, b) => (a.date < b.date ? 1 : -1)).map((entry) => (
                                        <div key={entry.id} className="flex items-start gap-2 group">
                                          <span className="text-xs flex-shrink-0" style={{ color: "#a28c75" }}>{formatDateShort(entry.date)}</span>
                                          <span className="text-xs flex-1" style={{ color: "rgba(255,253,246,0.5)" }}>{entry.note || "—"}</span>
                                          <button onClick={() => deleteEntry(item.id, entry.id)} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "rgba(162,140,117,0.4)" }}>
                                            <Trash2 size={11} />
                                          </button>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
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
      </div>

      {/* Print-only document */}
      <div id="downtime-print-doc" style={{ fontFamily: "Georgia, serif", color: "#1a1a1a", fontSize: "9.5pt" }}>
        <div style={{ borderBottom: "4px solid #4a0018", padding: "24px 32px 16px" }}>
          <div style={{ fontSize: "17pt", fontWeight: "bold", color: "#4a0018", letterSpacing: "0.02em", fontFamily: "Arial, sans-serif" }}>
            Downtime Revenue Checklist
          </div>
          <div style={{ fontSize: "8.5pt", color: "#555", marginTop: "8px", fontFamily: "Arial, sans-serif" }}>
            {TOTAL_ITEMS} actions across {CATEGORIES.length} areas · Printed {formatDateShort(todayISO())}
          </div>
        </div>
        {CATEGORIES.map((cat) => (
          <div key={cat.id} style={{ padding: "16px 32px 4px" }}>
            <div style={{ fontSize: "11pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#4a0018", letterSpacing: "0.03em", marginBottom: "8px" }}>
              {cat.label}
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <colgroup>
                <col style={{ width: "44%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "40%" }} />
              </colgroup>
              <thead>
                <tr>
                  <td style={{ padding: "3px 6px 3px 0", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Action</td>
                  <td style={{ padding: "3px 6px", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Date</td>
                  <td style={{ padding: "3px 6px", fontSize: "7.5pt", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "#999", borderBottom: "1px solid #ddd" }}>Notes</td>
                </tr>
              </thead>
              <tbody>
                {cat.items.map((item) => {
                  const entries = completions[item.id] || [];
                  const latest = latestDate(entries);
                  const latestEntry = entries.find((e) => e.date === latest);
                  return (
                    <tr key={item.id} style={{ pageBreakInside: "avoid" }}>
                      <td style={{ padding: "4px 6px 4px 0", fontSize: "8pt", borderBottom: "1px solid #eee", verticalAlign: "top" }}>{item.text}</td>
                      <td style={{ padding: "4px 6px", fontSize: "8pt", borderBottom: "1px solid #eee", verticalAlign: "top", color: latest ? "#333" : "#ccc" }}>{latest ? formatDateShort(latest) : "________"}</td>
                      <td style={{ padding: "4px 6px", fontSize: "8pt", borderBottom: "1px solid #eee", verticalAlign: "top", color: latestEntry?.note ? "#333" : "#ccc" }}>{latestEntry?.note || "________________"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}
