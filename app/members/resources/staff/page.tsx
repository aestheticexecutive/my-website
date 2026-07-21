import Link from "next/link";
import { ArrowLeft, Users, Download, ExternalLink, Wand2, ClipboardList, Star, ChevronDown, Sparkles, Target, Heart, GraduationCap, Activity, FolderOpen, CalendarDays, Headphones, TrendingUp, DollarSign, Phone, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Resources | Aesthetic Executive",
};

const resources = [
  {
    title: "Job Description Templates",
    type: "Template",
    description:
      "Ready-to-use job descriptions for Injector/NP, Medical Aesthetician, Patient Care Coordinator, Practice Manager, and Front Desk — customizable for your practice.",
  },
  {
    title: "90-Day Onboarding Checklist",
    type: "Checklist",
    description:
      "Structured onboarding plan for new hires covering orientation, training milestones, check-in cadence, and 30/60/90-day performance expectations.",
  },
  {
    title: "Performance Review Template",
    type: "Template",
    description:
      "Semi-annual performance review framework for aesthetic practice staff — including goal-setting, competency ratings, and development planning sections.",
  },
  {
    title: "Staff Meeting Agenda Template",
    type: "Template",
    description:
      "A repeatable agenda structure for weekly and monthly team meetings that keeps sessions focused, productive, and aligned with practice goals.",
  },
  {
    title: "Compensation Benchmarking Guide",
    type: "Guide",
    description:
      "2025 salary and commission benchmarks for every role in an aesthetic practice — by region, experience level, and practice size.",
  },
  {
    title: "Culture & Values Workshop Guide",
    type: "Guide",
    description:
      "Step-by-step facilitation guide for running a team values workshop — to define your culture, build buy-in, and create a shared language for how you work together.",
  },
  {
    title: "Corrective Action Documentation Template",
    type: "Template",
    description:
      "Professionally structured documentation for verbal warnings, written warnings, and performance improvement plans — designed to protect your practice legally.",
  },
  {
    title: "Retention Strategy Playbook",
    type: "Guide",
    description:
      "Proven strategies for retaining top-performing aesthetic staff — covering compensation structure, recognition, growth pathways, and culture investments.",
  },
];

const typeMeta: Record<string, { color: string; bg: string; border: string; action: string }> = {
  Template: {
    color: "#a28c75",
    bg: "rgba(162,140,117,0.1)",
    border: "rgba(162,140,117,0.25)",
    action: "Download",
  },
  Guide: {
    color: "#c8b3a3",
    bg: "rgba(200,179,163,0.08)",
    border: "rgba(200,179,163,0.2)",
    action: "View",
  },
  Checklist: {
    color: "#d4c5b8",
    bg: "rgba(212,197,184,0.08)",
    border: "rgba(212,197,184,0.18)",
    action: "Download",
  },
  Tool: {
    color: "#b89e8a",
    bg: "rgba(184,158,138,0.08)",
    border: "rgba(184,158,138,0.2)",
    action: "Open",
  },
};

export default function StaffResourcesPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      {/* Hero header */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-12">
          {/* Breadcrumb */}
          <Link
            href="/members/resources"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            All Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Users size={18} style={{ color: "#a28c75" }} />
            </div>
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#a28c75" }}
            >
              Member Library
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Staff
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            Hiring, onboarding, performance management, compensation benchmarking,
            and team culture — because your people are your practice.
          </p>
        </div>
      </div>

      {/* Resource grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <p
          className="text-xs tracking-[0.25em] uppercase mb-8"
          style={{ color: "rgba(162,140,117,0.5)" }}
        >
          {resources.length} resources available
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((resource) => {
            const meta = typeMeta[resource.type];
            const ActionIcon = meta.action === "Download" ? Download : ExternalLink;
            return (
              <div
                key={resource.title}
                className="group rounded-xl border p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide flex-shrink-0"
                    style={{
                      color: meta.color,
                      background: meta.bg,
                      border: `1px solid ${meta.border}`,
                    }}
                  >
                    {resource.type}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{
                      background: "rgba(162,140,117,0.1)",
                      border: "1px solid rgba(162,140,117,0.2)",
                    }}
                  >
                    <ActionIcon size={13} style={{ color: "#a28c75" }} />
                  </div>
                </div>

                <div>
                  <h3
                    className="font-display text-lg font-light mb-2 leading-snug"
                    style={{ color: "#fffdf6" }}
                  >
                    {resource.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,253,246,0.45)" }}
                  >
                    {resource.description}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <button
                    className="text-xs tracking-[0.15em] uppercase flex items-center gap-1.5 transition-colors duration-200 hover:opacity-80"
                    style={{ color: "rgba(162,140,117,0.65)" }}
                  >
                    <ActionIcon size={11} />
                    {meta.action} — Coming Soon
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Job Listing Templates ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Job Listing Templates
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        {/* Generator feature card */}
        <Link
          href="/tools/job-post-generator.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Wand2 size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Job Post Generator
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.15)",
                    border: "1px solid rgba(162,140,117,0.3)",
                    color: "#a28c75",
                  }}
                >
                  AI Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Answer a few questions about your practice and the role — get a complete,
                polished, industry-specific job post in seconds. Covers 7 roles including
                Injector, Practice Manager, Patient Coordinator, and more.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["7 role types", "4-step wizard", "3 tone options", "Copy-ready output"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Interviewing Guide ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Interviewing Guide
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        {/* Generator feature card */}
        <Link
          href="/tools/interview-guide-generator.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <ClipboardList size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Interview Guide Generator
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.15)",
                    border: "1px solid rgba(162,140,117,0.3)",
                    color: "#a28c75",
                  }}
                >
                  AI Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Generate a complete three-stage interview guide built on the MBI framework —
                covering Zoom screen, in-person deep dive, and working interview with owner close.
                Surfaces skill, attitude, and passion in every candidate.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["MBI framework", "3-stage process", "Role-specific questions", "Scoring rubrics"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Core Values ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Culture &amp; Values
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        {/* Generator feature card */}
        <Link
          href="/tools/core-values-generator.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Sparkles size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Core Values Generator
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.15)",
                    border: "1px solid rgba(162,140,117,0.3)",
                    color: "#a28c75",
                  }}
                >
                  AI Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Answer reflective questions about your best moments, your rockstar team members, and what you won&apos;t tolerate — then AI distills your authentic core values with memorable names, real definitions, and in-action behaviors.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["4-step guided exercise", "Based on real behaviors", "4–6 values generated", "Print & save ready"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>

        {/* Living Your Values guide card */}
        <Link
          href="/members/resources/staff/embed-values"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40 mt-5"
          style={{
            background: "rgba(162,140,117,0.03)",
            borderColor: "rgba(162,140,117,0.13)",
          }}
        >
          <div className="p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-6">

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.2)",
              }}
            >
              <Heart size={20} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>
                  Living Your Values
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.75)",
                  }}
                >
                  Guide
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                7 activation areas — hiring, daily ops, recognition, meetings, visual reminders, performance reviews, and patient experience — with specific, actionable examples for each.
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.08)",
                  border: "1px solid rgba(162,140,117,0.2)",
                  color: "rgba(162,140,117,0.7)",
                }}
              >
                Read Guide
                <ExternalLink size={11} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Mission Statement ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Mission Statement
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        {/* Generator feature card */}
        <Link
          href="/tools/mission-statement-generator.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Target size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Mission Statement Generator
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.15)",
                    border: "1px solid rgba(162,140,117,0.3)",
                    color: "#a28c75",
                  }}
                >
                  AI Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Answer reflective questions about your purpose, your patients, and what makes you different — then AI drafts three distinct mission statement options. Choose your favorite, polish it, and make it yours.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["4-step guided workshop", "3 statement options", "Choose & refine step", "Print & save ready"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Employee Evaluations ── */}
      <style>{`
        details.eval-accordion > summary { list-style: none; }
        details.eval-accordion > summary::-webkit-details-marker { display: none; }
        details.eval-accordion > summary::marker { display: none; }
        details.eval-accordion .eval-chevron { transition: transform 0.25s ease; }
        details.eval-accordion[open] .eval-chevron { transform: rotate(180deg); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <details
          className="eval-accordion rounded-2xl border overflow-hidden"
          style={{ borderColor: "rgba(162,140,117,0.18)" }}
        >
          {/* ── Collapsed summary row ── */}
          <summary
            className="cursor-pointer select-none"
            style={{ background: "linear-gradient(135deg, #1a000c 0%, #0c0004 100%)" }}
          >
            <div className="px-8 py-6 flex items-center gap-5">
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(162,140,117,0.1)",
                  border: "1px solid rgba(162,140,117,0.22)",
                }}
              >
                <Star size={18} style={{ color: "#a28c75" }} />
              </div>

              {/* Title + tagline */}
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-2xl font-light leading-tight" style={{ color: "#fffdf6" }}>
                  Employee Evaluations
                </h2>
                <p className="text-xs mt-0.5" style={{ color: "rgba(162,140,117,0.6)" }}>
                  Structured review process with role-specific, editable forms
                </p>
              </div>

              {/* Badge + chevron */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span
                  className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                  style={{
                    color: "#a28c75",
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                  }}
                >
                  3 Forms
                </span>
                <div
                  className="eval-chevron w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(162,140,117,0.08)",
                    border: "1px solid rgba(162,140,117,0.18)",
                  }}
                >
                  <ChevronDown size={14} style={{ color: "#a28c75" }} />
                </div>
              </div>
            </div>
          </summary>

          {/* ── Expanded content ── */}
          <div
            style={{
              background: "linear-gradient(180deg, #110006 0%, #0c0004 100%)",
              borderTop: "1px solid rgba(162,140,117,0.1)",
            }}
          >
            <div className="px-8 py-10 space-y-12">

              {/* How It Works */}
              <div>
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-6"
                  style={{ color: "rgba(162,140,117,0.5)" }}
                >
                  How It Works
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      step: "01",
                      title: "Employee Self-Evaluation",
                      body: "The employee completes their own evaluation form first — rating their performance on each competency independently, before any employer input. This surfaces their own perspective and encourages ownership.",
                    },
                    {
                      step: "02",
                      title: "Employer Evaluation",
                      body: "The supervisor or practice owner completes the same evaluation form independently, rating the same competencies without being influenced by the employee's scores. Keeps both assessments honest.",
                    },
                    {
                      step: "03",
                      title: "Review Meeting Together",
                      body: "Both parties meet to compare scores side-by-side, discuss any gaps, review the prior period's goals and whether they were achieved, and collaboratively set new goals for the next review cycle.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="rounded-xl border p-6"
                      style={{
                        background: "rgba(162,140,117,0.04)",
                        borderColor: "rgba(162,140,117,0.12)",
                      }}
                    >
                      <span
                        className="font-display text-3xl font-light block mb-3"
                        style={{ color: "rgba(162,140,117,0.3)" }}
                      >
                        {item.step}
                      </span>
                      <h4
                        className="font-display text-base font-light mb-2 leading-snug"
                        style={{ color: "#fffdf6" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cadence + Rating Scale — side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Cadence */}
                <div
                  className="rounded-xl border p-6"
                  style={{
                    background: "rgba(162,140,117,0.04)",
                    borderColor: "rgba(162,140,117,0.12)",
                  }}
                >
                  <p
                    className="text-xs tracking-[0.25em] uppercase mb-3"
                    style={{ color: "rgba(162,140,117,0.5)" }}
                  >
                    Suggested Cadence
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
                    Run formal evaluations <span style={{ color: "#fffdf6" }}>twice per year</span> — once
                    mid-year and once at year-end. Supplement with brief quarterly check-ins to keep
                    goals on track between reviews.
                  </p>
                </div>

                {/* Rating Scale */}
                <div
                  className="rounded-xl border p-6"
                  style={{
                    background: "rgba(162,140,117,0.04)",
                    borderColor: "rgba(162,140,117,0.12)",
                  }}
                >
                  <p
                    className="text-xs tracking-[0.25em] uppercase mb-3"
                    style={{ color: "rgba(162,140,117,0.5)" }}
                  >
                    Rating Scale (1–5)
                  </p>
                  <ul className="space-y-1">
                    {[
                      ["5", "Exceptional — consistently exceeds expectations"],
                      ["4", "Proficient — frequently exceeds expectations"],
                      ["3", "Meets expectations — solid and reliable"],
                      ["2", "Developing — occasionally meets expectations"],
                      ["1", "Unsatisfactory — requires immediate improvement"],
                    ].map(([score, label]) => (
                      <li key={score} className="flex items-baseline gap-2 text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>
                        <span
                          className="font-medium flex-shrink-0"
                          style={{ color: "#a28c75", width: "12px", display: "inline-block" }}
                        >
                          {score}
                        </span>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Download Forms */}
              <div>
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-6"
                  style={{ color: "rgba(162,140,117,0.5)" }}
                >
                  Downloadable Evaluation Forms
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      role: "Patient Care Coordinator",
                      filename: "Patient-Care-Coordinator-Evaluation.docx",
                      desc: "Service quality, communication, scheduling, patient experience, and administrative competencies.",
                    },
                    {
                      role: "Med Spa Manager",
                      filename: "Med-Spa-Manager-Evaluation.docx",
                      desc: "Leadership, operations, revenue management, team development, and compliance competencies.",
                    },
                    {
                      role: "Provider / Injector",
                      filename: "Provider-Injector-Evaluation.docx",
                      desc: "Clinical skill, patient consultation, safety protocol, treatment outcomes, and professional development.",
                    },
                  ].map((form) => (
                    <a
                      key={form.filename}
                      href={`/downloads/${form.filename}`}
                      download
                      className="group rounded-xl border p-5 flex flex-col gap-3 transition-all duration-300 no-underline"
                      style={{
                        background: "linear-gradient(145deg, #1a000c 0%, #0c0004 100%)",
                        borderColor: "rgba(162,140,117,0.15)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium tracking-wide"
                          style={{
                            color: "#a28c75",
                            background: "rgba(162,140,117,0.1)",
                            border: "1px solid rgba(162,140,117,0.2)",
                          }}
                        >
                          .docx
                        </span>
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{
                            background: "rgba(162,140,117,0.1)",
                            border: "1px solid rgba(162,140,117,0.2)",
                          }}
                        >
                          <Download size={12} style={{ color: "#a28c75" }} />
                        </div>
                      </div>
                      <div>
                        <h4
                          className="font-display text-base font-light mb-1 leading-snug"
                          style={{ color: "#fffdf6" }}
                        >
                          {form.role}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                          {form.desc}
                        </p>
                      </div>
                      <div className="mt-auto pt-1">
                        <span
                          className="text-xs tracking-[0.15em] uppercase flex items-center gap-1.5"
                          style={{ color: "rgba(162,140,117,0.6)" }}
                        >
                          <Download size={10} />
                          Download Form
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-xs mt-4" style={{ color: "rgba(255,253,246,0.3)" }}>
                  All forms are fully editable Word documents — customize competencies, scoring weights,
                  and branding to fit your practice.
                </p>
              </div>

            </div>
          </div>
        </details>
      </div>

      {/* ── Leadership Development ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Leadership Development
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <Link
          href="/members/resources/staff/leadership-course"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <GraduationCap size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  12-Week Leadership Development
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.75)",
                  }}
                >
                  Course
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                A self-paced curriculum built around 8 essential leadership books, TED talks, and podcasts — with weekly reflections and real actions to apply at your practice. One week at a time.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["12 weeks self-paced", "8 books with links", "TED · Podcasts · HBR", "Weekly journal prompts"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                View Course
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Team Health & Satisfaction ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Team Health &amp; Satisfaction
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <Link
          href="/tools/team-satisfaction.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Activity size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Team Health Assessment
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.15)",
                    border: "1px solid rgba(162,140,117,0.3)",
                    color: "#a28c75",
                  }}
                >
                  AI Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Rate your team across 8 key areas — trust, communication, role clarity, recognition, work-life balance, and more. Get a snapshot of where your team thrives and where to focus next, with a built-in strategy builder and history tracking to see your progress over time.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["8-area assessment", "1–5 rating scale", "Strategy builder", "Assessment history"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Management Structure ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Management Structure
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <Link
          href="/tools/management-structure.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <CalendarDays size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Management Structure Builder
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.15)",
                    border: "1px solid rgba(162,140,117,0.3)",
                    color: "#a28c75",
                  }}
                >
                  Interactive Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Build your personal responsibility library — name each role, assign a frequency, add notes — then drag and drop every responsibility onto a full monthly calendar so you can see exactly what your month looks like before it starts.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["Responsibility library", "Drag-and-drop calendar", "5 frequency types", "Monthly planning view"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Staff Training ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Staff Training
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <Link
          href="/members/resources/staff/escalated-customer-service"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Headphones size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Handling Escalated Clients
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.75)",
                  }}
                >
                  Training
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.06)",
                    border: "1px solid rgba(162,140,117,0.15)",
                    color: "rgba(162,140,117,0.6)",
                  }}
                >
                  Front of House
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                How to de-escalate difficult clients, navigate refund requests, follow the chain of command, and resolve concerns using the 7-step LEAP FWD framework. Covers all three concern types with real scripts, warnings, and a full role-play example.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["LEAP FWD 7-step method", "3 concern types", "Refund policy guidance", "Role-play exercise"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                View Training
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/members/resources/staff/patient-financing"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40 mt-5"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <DollarSign size={24} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Presenting Patient Financing
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.75)",
                  }}
                >
                  Training
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.06)",
                    border: "1px solid rgba(162,140,117,0.15)",
                    color: "rgba(162,140,117,0.6)",
                  }}
                >
                  Sales Support
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                How to introduce financing options confidently — without it feeling like a pitch. Covers a 6-step talk track, word-for-word scripts, responses to every common patient question, and a customizable partner comparison table your team can fill in with your actual providers.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["6-step talk track", "Word-for-word scripts", "9 FAQ responses", "Customizable comparison"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                View Training
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/members/resources/staff/sales-process"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40 mt-5"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <TrendingUp size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  The Art of the Consult
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.75)",
                  }}
                >
                  Training
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.06)",
                    border: "1px solid rgba(162,140,117,0.15)",
                    color: "rgba(162,140,117,0.6)",
                  }}
                >
                  Sales Process
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Complete conversion playbook covering every stage from first inquiry to closed treatment plan. Includes the 7-touch outreach sequence, word-for-word scripts, 5 objection responses, the candidacy doubt technique, and a 4-touch post-consult follow-up timeline.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["6-stage playbook", "Word-for-word scripts", "Objection handling", "4-touch follow-up"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                View Training
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/members/resources/staff/phone-call-mastery"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40 mt-5"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Phone size={24} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Phone Call Mastery
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.75)",
                  }}
                >
                  Training
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.06)",
                    border: "1px solid rgba(162,140,117,0.15)",
                    color: "rgba(162,140,117,0.6)",
                  }}
                >
                  Front of House
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.06)",
                    border: "1px solid rgba(162,140,117,0.15)",
                    color: "rgba(162,140,117,0.6)",
                  }}
                >
                  Part 1 of 2
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                A 10-step framework for turning every inbound call into a booked, confident patient. Covers a signature greeting, discovery questions, the Signature Consultation close, pre-visit confirmation calls, the critical question, and a word-for-word provider introduction text.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["10-step call framework", "Word-for-word scripts", "Treatment question handling", "Pre-visit prep"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                View Training
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/members/resources/staff/front-desk-sales"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40 mt-5"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <ShoppingBag size={24} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  In-Office Sales Mastery
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.75)",
                  }}
                >
                  Training
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.06)",
                    border: "1px solid rgba(162,140,117,0.15)",
                    color: "rgba(162,140,117,0.6)",
                  }}
                >
                  Front of House
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.06)",
                    border: "1px solid rgba(162,140,117,0.15)",
                    color: "rgba(162,140,117,0.6)",
                  }}
                >
                  Part 2 of 2
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Cross-selling framework and word-for-word scripts for Morpheus8, Lumecca, Forma, and Vasculaze — plus the in-person arrival experience for new vs. established patients, and the confidence & trust foundation that makes all of it land.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["4 device scripts", "Arrival experience guide", "New vs. established patients", "Confidence & trust framework"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.25)",
                  color: "#a28c75",
                }}
              >
                View Training
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Employee File Guide ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Employee File Management
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <Link
          href="/members/resources/staff/employee-files"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "rgba(162,140,117,0.03)",
            borderColor: "rgba(162,140,117,0.13)",
          }}
        >
          <div className="p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-6">

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.2)",
              }}
            >
              <FolderOpen size={20} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>
                  Employee File Guide
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.75)",
                  }}
                >
                  Guide
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                The 6 required file categories, what goes in each, what must be stored separately (medical, I-9, investigations), retention schedules, compliance traps, and a maintenance plan — with everything you need to stay audit-ready.
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.08)",
                  border: "1px solid rgba(162,140,117,0.2)",
                  color: "rgba(162,140,117,0.7)",
                }}
              >
                Read Guide
                <ExternalLink size={11} />
              </span>
            </div>
          </div>
        </Link>
      </div>

    </div>
  );
}
