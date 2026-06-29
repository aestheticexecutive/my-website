import Link from "next/link";
import { ArrowLeft, CalendarDays, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Med Spa Event Planner | Aesthetic Executive",
  description:
    "Interactive event planning checklist for med spa events — pre-event to post-event follow-up. Track every to-do with status, notes, and color-coded progress.",
};

const phases = [
  {
    num: "01",
    tag: "Phase 1",
    tagColor: "#a28c75",
    tagBg: "rgba(162,140,117,0.12)",
    title: "Pre-Event Planning",
    sub: "4–6+ Weeks Out",
    body: "13 sections covering everything from locking in your date and defining revenue goals, to designing promotional materials, staffing roles, POS prep, decor, and giveaway logistics.",
    count: "75 items",
  },
  {
    num: "02",
    tag: "Phase 2",
    tagColor: "#a5b4fc",
    tagBg: "rgba(99,102,241,0.1)",
    title: "Day-Of Event",
    sub: "",
    body: "Setup checklist, final team prep, a full walkthrough confirmation, and in-event actions to ensure every guest checks in, gets a consult, and is guided to checkout.",
    count: "26 items",
  },
  {
    num: "03",
    tag: "Phase 3",
    tagColor: "#5eead4",
    tagBg: "rgba(20,184,166,0.1)",
    title: "Post-Event Follow-Up",
    sub: "",
    body: "Audience segmentation, follow-up campaign sequences for no-shows, attended-but-didn't-buy, and purchasers. Plus internal tracking and team debrief.",
    count: "22 items",
  },
];

const features = [
  "123 checklist items across 3 phases",
  "Mark items Done, Pending, or N/A",
  "Add notes to any checklist item",
  "Color-coded progress: green / amber / gray",
  "Progress bar updates live",
  "Create and manage multiple events",
  "Event name, date, time & notes",
  "Saves automatically in your browser",
];

export default function EventPlanningPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      {/* Hero */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(162,140,117,0.12)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.75) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-14">
          <Link
            href="/members/resources/marketing"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-opacity hover:opacity-70"
            style={{ color: "rgba(162,140,117,0.65)" }}
          >
            <ArrowLeft size={13} />
            Marketing Resources
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <CalendarDays size={16} style={{ color: "#a28c75" }} />
            </div>
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(162,140,117,0.65)" }}
            >
              Marketing Resources · Events
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Med Spa Event Planner
          </h1>
          <p
            className="text-base leading-relaxed max-w-2xl mb-8"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            An interactive checklist tool covering every stage of your event — from locking in a
            date to post-event follow-up. Create events, track to-dos, mark progress, and add
            notes. 123 items across 3 phases, saved right in your browser.
          </p>

          <a
            href="/tools/event-planner.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #3d0614 100%)",
              border: "1px solid rgba(162,140,117,0.35)",
              color: "#a28c75",
            }}
          >
            Open Event Planner
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">

        {/* How it works */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              How It Works
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                step: "01",
                title: "Preview the checklist",
                body: "Before creating an event, browse all 123 items organized by phase and section — so you know exactly what's coming.",
              },
              {
                step: "02",
                title: "Create your event",
                body: "Add your event name, date, time, and any high-level notes. The full checklist is automatically attached.",
              },
              {
                step: "03",
                title: "Track every item",
                body: "Mark each item Done, Pending, or N/A. Add notes to any item. Watch the color-coded progress bar update live.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
                  borderColor: "rgba(162,140,117,0.18)",
                }}
              >
                <div
                  className="font-display text-3xl font-light mb-3"
                  style={{ color: "rgba(162,140,117,0.22)" }}
                >
                  {s.step}
                </div>
                <h3
                  className="font-display text-base font-light mb-2"
                  style={{ color: "#fffdf6" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* Status legend */}
          <div
            className="rounded-2xl border p-6 md:p-7"
            style={{
              background: "rgba(162,140,117,0.04)",
              borderColor: "rgba(162,140,117,0.12)",
            }}
          >
            <p
              className="text-xs tracking-[0.22em] uppercase mb-5"
              style={{ color: "rgba(162,140,117,0.5)" }}
            >
              Item Statuses
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Done",
                  color: "#86efac",
                  bg: "rgba(34,197,94,0.13)",
                  border: "rgba(34,197,94,0.24)",
                  desc: "Task is complete",
                },
                {
                  label: "Pending",
                  color: "#fcd34d",
                  bg: "rgba(245,158,11,0.13)",
                  border: "rgba(245,158,11,0.24)",
                  desc: "In progress or waiting",
                },
                {
                  label: "To Do",
                  color: "rgba(255,253,246,0.28)",
                  bg: "rgba(162,140,117,0.07)",
                  border: "rgba(162,140,117,0.1)",
                  desc: "Not yet started",
                },
                {
                  label: "N/A",
                  color: "#9ca3af",
                  bg: "rgba(75,85,99,0.18)",
                  border: "rgba(75,85,99,0.28)",
                  desc: "Not applicable to this event",
                },
              ].map((st) => (
                <div key={st.label} className="flex flex-col items-start gap-2">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ color: st.color, background: st.bg, borderColor: st.border }}
                  >
                    {st.label}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,253,246,0.38)" }}>
                    {st.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The 3 phases */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              What&apos;s Inside
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="space-y-4">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className="rounded-xl border p-6 flex gap-6 items-start"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.1)",
                }}
              >
                <div className="flex-shrink-0 pt-1">
                  <span
                    className="font-display text-3xl font-light block leading-none"
                    style={{ color: "rgba(162,140,117,0.18)" }}
                  >
                    {phase.num}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium tracking-wide border"
                      style={{
                        color: phase.tagColor,
                        background: phase.tagBg,
                        borderColor: phase.tagColor + "40",
                      }}
                    >
                      {phase.tag}
                    </span>
                    <h3
                      className="font-display text-lg font-light"
                      style={{ color: "#fffdf6" }}
                    >
                      {phase.title}
                    </h3>
                    {phase.sub && (
                      <span
                        className="text-xs"
                        style={{ color: "rgba(255,253,246,0.3)" }}
                      >
                        {phase.sub}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "rgba(255,253,246,0.42)" }}
                  >
                    {phase.body}
                  </p>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "rgba(162,140,117,0.55)" }}
                  >
                    {phase.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features + CTA */}
        <div
          className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="flex-1">
            <h3
              className="font-display text-2xl font-light mb-4"
              style={{ color: "#fffdf6" }}
            >
              Everything in the planner
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <span style={{ color: "#a28c75", flexShrink: 0 }}>·</span>
                  <span className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-3 md:pt-8">
            <a
              href="/tools/event-planner.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 whitespace-nowrap"
              style={{
                background: "rgba(162,140,117,0.15)",
                border: "1px solid rgba(162,140,117,0.35)",
                color: "#a28c75",
              }}
            >
              Open Event Planner
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
