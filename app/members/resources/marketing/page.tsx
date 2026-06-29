import Link from "next/link";
import { ArrowLeft, Megaphone, Download, ExternalLink, Users, BookOpen, Handshake, Building2, Share2, Search, Camera, CalendarDays } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Resources | Aesthetic Executive",
};

const resources = [
  {
    title: "Patient Acquisition Funnel Template",
    type: "Template",
    description:
      "Map your full patient journey from first touchpoint to booked appointment. Includes channel attribution and conversion benchmarks for aesthetic practices.",
  },
  {
    title: "Social Media Content Calendar",
    type: "Template",
    description:
      "90-day content planning spreadsheet with post types, captions prompts, and hashtag strategy tailored for medical aesthetics.",
  },
  {
    title: "Google Ads Setup Guide for Med Spas",
    type: "Guide",
    description:
      "Step-by-step walkthrough for launching your first Google Search campaign, including keyword strategy, negative keywords, and conversion tracking setup.",
  },
  {
    title: "Before & After Photography Standards",
    type: "Checklist",
    description:
      "Standardized protocols for lighting, angles, patient positioning, and consent — so your before/after photos are consistent, compliant, and compelling.",
  },
  {
    title: "Email Campaign Sequences",
    type: "Template",
    description:
      "Five ready-to-use email sequences: new patient welcome, post-treatment follow-up, reactivation, seasonal promotions, and referral request.",
  },
  {
    title: "Competitive Analysis Worksheet",
    type: "Tool",
    description:
      "Structured framework for auditing competitors in your market — pricing, services, online presence, positioning — so you can differentiate strategically.",
  },
  {
    title: "Brand Voice & Messaging Guide",
    type: "Guide",
    description:
      "How to define and document your practice's unique voice, tone, and key messages. Includes templates for brand pillars and elevator pitches.",
  },
  {
    title: "Review Generation SOP",
    type: "Checklist",
    description:
      "A repeatable system for timing review requests, choosing the right channels, and responding to both positive and negative feedback professionally.",
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

export default function MarketingResourcesPage() {
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
              <Megaphone size={18} style={{ color: "#a28c75" }} />
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
            Marketing
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            Social media strategy, paid advertising, content planning, brand
            positioning, and patient acquisition systems — built for aesthetic practices.
          </p>
        </div>
      </div>

      {/* ── SEO & Online Visibility ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              SEO &amp; Online Visibility
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div
            className="rounded-xl border p-7 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}
                  >
                    <Search size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    Guide + AI Tool
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  Get found by more patients on Google — in plain English.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  A complete guide to how Google ranks your practice, the 10 factors that determine
                  your visibility, and an AI-powered analyzer that reads your website and tells you
                  exactly what to fix — no web developer required.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/members/resources/marketing/seo-guide"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                    style={{ background: "#a28c75", color: "#0c0004" }}
                  >
                    <BookOpen size={12} />
                    Read the Guide
                  </Link>
                  <a
                    href="/tools/seo-analyzer.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-70"
                    style={{ background: "transparent", color: "#a28c75", border: "1px solid rgba(162,140,117,0.3)" }}
                  >
                    <ExternalLink size={12} />
                    Open AI Analyzer
                  </a>
                </div>
              </div>

              {/* Right — feature chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "SEO Made Simple", desc: "Why it matters, what patients search, and how Google decides who to show" },
                  { label: "10-Factor Audit", desc: "The exact checklist for what your website needs to rank for local searches" },
                  { label: "AI Website Scan", desc: "Enter your URL — AI checks all 10 factors and explains what to fix" },
                  { label: "Quick Wins", desc: "6 changes you can make today without a web developer" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Search size={12} style={{ color: "#a28c75" }} />
                      <span className="text-xs font-medium tracking-wide" style={{ color: "#fffdf6" }}>
                        {feat.label}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Photography ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Before &amp; After Photography
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div
            className="rounded-xl border p-7 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}
                  >
                    <Camera size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    Photography Guide
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  How to capture photos that actually showcase your results.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  Not just taking before-and-afters — taking them well. A complete protocol
                  covering lighting, consistent angles, patient preparation, camera settings,
                  image labeling, and HIPAA-compliant consent. Every variable locked down so
                  the only thing that changes is the result.
                </p>

                <Link
                  href="/members/resources/marketing/before-after-photos"
                  className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{ background: "#a28c75", color: "#0c0004" }}
                >
                  <BookOpen size={12} />
                  Read the Guide
                </Link>
              </div>

              {/* Right — feature chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Lighting Protocol", desc: "Natural light vs. ring light, why to avoid flash, and consistent setup instructions" },
                  { label: "Angle Standards", desc: "The 5 angles to capture every time — front, profiles, and 45-degree views" },
                  { label: "Patient Prep", desc: "No makeup, hair back, neutral clothing — what to require before every shoot" },
                  { label: "Consent & Compliance", desc: "HIPAA-compliant photo consent, privacy, and secure storage requirements" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Camera size={12} style={{ color: "#a28c75" }} />
                      <span className="text-xs font-medium tracking-wide" style={{ color: "#fffdf6" }}>
                        {feat.label}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Event Planning ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Event Planning
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div
            className="rounded-xl border p-7 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}
                  >
                    <CalendarDays size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    Interactive Checklist Tool
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  Plan your event from start to finish — with every to-do tracked.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  123-item interactive checklist covering pre-event planning, day-of execution,
                  and post-event follow-up. Create events, mark items Done, Pending, or N/A,
                  add notes to each task, and watch your color-coded progress bar update live.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/members/resources/marketing/event-planning"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                    style={{ background: "#a28c75", color: "#0c0004" }}
                  >
                    <BookOpen size={12} />
                    Learn More
                  </Link>
                  <a
                    href="/tools/event-planner.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-70"
                    style={{ background: "transparent", color: "#a28c75", border: "1px solid rgba(162,140,117,0.3)" }}
                  >
                    <ExternalLink size={12} />
                    Open Planner
                  </a>
                </div>
              </div>

              {/* Right — feature chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Pre-Event (75 items)", desc: "13 sections: strategy, marketing, staffing, POS prep, decor, giveaways, and more" },
                  { label: "Day-Of (26 items)", desc: "Setup, team prep, walkthrough checklist, and in-event execution tasks" },
                  { label: "Post-Event (22 items)", desc: "Audience segmentation, follow-up campaigns, ROI tracking, and team debrief" },
                  { label: "Color-Coded Progress", desc: "Green = done · Amber = pending · Gray = N/A — see your status at a glance" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarDays size={12} style={{ color: "#a28c75" }} />
                      <span className="text-xs font-medium tracking-wide" style={{ color: "#fffdf6" }}>
                        {feat.label}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

      {/* ── Social Media ── */}
      <div
        className="border-t border-b"
        style={{ borderColor: "rgba(162,140,117,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Social Media
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>
          <p className="text-sm leading-relaxed mb-7 max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            Strategy, content frameworks, format guides, and the common mistakes that hold most
            practices back — everything you need to build a consistent content engine.
          </p>
          <Link
            href="/members/resources/marketing/social-media"
            className="group inline-flex items-start gap-5 rounded-2xl border p-7 transition-all duration-300 hover:border-[#a28c75]/35 w-full md:max-w-xl"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Share2 size={20} style={{ color: "#a28c75" }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>
                  Social Media Best Practices
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.8)",
                  }}
                >
                  Guide
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.45)" }}>
                The 5 P&apos;s, push vs pull marketing, five content categories, post anatomy, content formats,
                common mistakes, weekly schedule, content ideas, and a pre-post checklist.
              </p>
              <span
                className="text-xs tracking-[0.15em] uppercase flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "#a28c75" }}
              >
                <ExternalLink size={11} />
                Read Guide →
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* ── Local Partnerships ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">

        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Local Partnerships
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
          Two distinct partnership models — a structured referral program with individual service providers,
          and a community collaboration approach with larger local businesses. Both include full outreach
          templates, scripts, and relationship management guides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Referral Partner Program card */}
          <Link
            href="/members/resources/marketing/referral-partners"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="p-7 flex flex-col h-full gap-4">
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(162,140,117,0.12)",
                    border: "1px solid rgba(162,140,117,0.25)",
                  }}
                >
                  <Handshake size={20} style={{ color: "#a28c75" }} />
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide flex-shrink-0"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.8)",
                  }}
                >
                  Guide
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-light mb-2" style={{ color: "#fffdf6" }}>
                  Referral Partner Program
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.45)" }}>
                  Build a structured &ldquo;Give $50, Get $50&rdquo; referral program with hairstylists,
                  lash artists, real estate agents, and other individual service providers. Includes
                  program setup, outreach templates, onboarding process, and check-in scripts.
                </p>
                <ul className="flex flex-col gap-1.5">
                  {["Give $50 / Get $50 model", "Physical & digital referral cards", "Outreach DM, email & phone scripts", "Onboarding & relationship maintenance"].map((feat) => (
                    <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.6)" }}>
                      <span style={{ color: "#a28c75" }}>·</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase"
                style={{ color: "rgba(162,140,117,0.65)" }}
              >
                Read Guide
                <ExternalLink size={11} />
              </span>
            </div>
          </Link>

          {/* Community Partnership card */}
          <Link
            href="/members/resources/marketing/community-partnerships"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="p-7 flex flex-col h-full gap-4">
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(162,140,117,0.12)",
                    border: "1px solid rgba(162,140,117,0.25)",
                  }}
                >
                  <Building2 size={20} style={{ color: "#a28c75" }} />
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide flex-shrink-0"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.8)",
                  }}
                >
                  Guide
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-light mb-2" style={{ color: "#fffdf6" }}>
                  Strategic Community Partnerships
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.45)" }}>
                  Build cross-promotional relationships with gyms, yoga studios, boutique retailers,
                  country clubs, and wellness centers. Community collaboration marketing — focused on
                  brand visibility, audience sharing, and organic lead generation.
                </p>
                <ul className="flex flex-col gap-1.5">
                  {["Lobby pop-ups & interactive setups", "Social media cross-promotion", "Lead generation strategy", "Outreach DM, email & phone scripts"].map((feat) => (
                    <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.6)" }}>
                      <span style={{ color: "#a28c75" }}>·</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase"
                style={{ color: "rgba(162,140,117,0.65)" }}
              >
                Read Guide
                <ExternalLink size={11} />
              </span>
            </div>
          </Link>

        </div>
      </div>

      {/* ── Brand Kit ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Brand Kit
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        {/* Feature card */}
        <Link
          href="/tools/brand-kit-builder.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40 mb-5"
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
              <BookOpen size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Brand Kit Builder
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
                Document your brand&apos;s complete identity in one place — mission, vision, values, color
                palette (with live swatches), typography, brand voice, tone words, target client, and
                experience standards. Export a beautifully formatted brand kit document, styled in your
                own brand colors, ready to hand to your marketing agency, social media manager, or new hire.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["Color palette with live swatches", "Brand voice & tone", "Target client profile", "Exportable PDF in your brand colors"].map((feat) => (
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

        {/* Guide card */}
        <Link
          href="/members/resources/marketing/brand-kit"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "rgba(162,140,117,0.03)",
            borderColor: "rgba(162,140,117,0.13)",
          }}
        >
          <div className="p-7 flex flex-col md:flex-row md:items-center gap-5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.2)",
              }}
            >
              <BookOpen size={18} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                  Why Your Brand Kit Matters
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
                Why an intentional brand matters, how it shows up across every patient touchpoint, and
                what goes into a complete brand kit — before you start building yours.
              </p>
            </div>
            <span
              className="flex-shrink-0 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg"
              style={{
                background: "rgba(162,140,117,0.08)",
                border: "1px solid rgba(162,140,117,0.2)",
                color: "rgba(162,140,117,0.7)",
              }}
            >
              Read
              <ExternalLink size={11} />
            </span>
          </div>
        </Link>
      </div>

      {/* ── Target Clientele & Brand Identity ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Target Clientele &amp; Brand Identity
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        {/* Feature card */}
        <Link
          href="/tools/ideal-client-builder.html"
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
              <Users size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Ideal Client Builder
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
                Build three detailed ideal client personas — demographics, lifestyle, experience priorities,
                treatment goals, and how they find you. Then define your brand personality, voice, promise,
                and experience. Export a clean, professional document to share with your marketing agency,
                social media manager, or copywriter.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["3 client personas", "Brand personality & voice", "Brand promise & experience", "Export for agencies"].map((feat) => (
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

    </div>
  );
}
