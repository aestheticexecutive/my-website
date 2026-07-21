import Link from "next/link";
import { ArrowLeft, Megaphone, Download, ExternalLink, Users, BookOpen, Handshake, Building2, Share2, Search, Camera, CalendarDays, MapPin, Star, MessageSquare, Globe, FileText, Mail, Zap, TrendingUp } from "lucide-react";
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

      {/* ── Landing Pages ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Treatment Landing Pages
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
                    <Globe size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    SEO + Conversion Playbook
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  Build treatment pages that rank in Google and turn visits into booked consultations.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  A visual playbook covering page structure, SEO fundamentals, conversion architecture,
                  and the metrics that tell you if it&apos;s working. Includes a page anatomy wireframe, Google
                  SERP mockup, objection cards, form design, and a 15-point launch checklist.
                </p>

                <Link
                  href="/members/resources/marketing/landing-pages"
                  className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{ background: "#a28c75", color: "#0c0004" }}
                >
                  <BookOpen size={12} />
                  Read the Playbook
                </Link>
              </div>

              {/* Right — feature chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Page Anatomy Diagram", desc: "Visual wireframe showing where every element lives — from hero to form — and why" },
                  { label: "SEO Foundation", desc: "URL structure, title tags, heading hierarchy, E-E-A-T content depth, and local signals" },
                  { label: "Conversion Architecture", desc: "Above-the-fold language, trust signals, objection cards, and form friction fixes" },
                  { label: "Performance Benchmarks", desc: "6 metrics with targets — conversion rate, bounce rate, load speed, and more" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Globe size={12} style={{ color: "#a28c75" }} />
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

      {/* ── Google Business Profile ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Google Business Profile
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
                    <MapPin size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    SOP + Checklist
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  The complete playbook for ranking in Google&apos;s Local Map Pack.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  A full standard operating procedure covering every element of your Google Business Profile —
                  from initial setup through ongoing maintenance. Includes the monthly checklist your team
                  can execute without guessing.
                </p>

                <Link
                  href="/members/resources/marketing/google-business-profile"
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
                  { label: "Profile Setup SOP", desc: "Every field, category choice, description structure, and attribute that affects ranking" },
                  { label: "Services & Products", desc: "How to split services into individual entries to multiply your search appearances" },
                  { label: "Photos, Videos & Posts", desc: "Weekly upload targets, content ideas, and post types with frequency guidance" },
                  { label: "Monthly Checklist", desc: "14-item recurring checklist — posts, photos, reviews, hours, insights, and more" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={12} style={{ color: "#a28c75" }} />
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

      {/* ── Google Reviews ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Google Reviews
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
                    <MessageSquare size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    Strategy Guide
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  A practical system for collecting reviews consistently — without it ever feeling awkward.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  Why Google reviews are one of your most powerful free marketing tools, how to identify
                  the right patient to ask, a word-for-word conversation script, how to automate the process,
                  and how to build a team culture that makes asking part of every checkout.
                </p>

                <Link
                  href="/members/resources/marketing/google-reviews"
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
                  { label: "The Ask Script", desc: "A 3-step word-for-word conversation that makes asking feel natural at checkout" },
                  { label: "Who to Ask", desc: "How to read the signals that tell you a patient is ready to leave a glowing review" },
                  { label: "Automation Flow", desc: "Post-appointment text routing: satisfied patients to Google, concerns to internal feedback" },
                  { label: "Team & Culture", desc: "How to incentivize staff, track monthly goals, and make reviews part of your practice culture" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare size={12} style={{ color: "#a28c75" }} />
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

      {/* ── Monthly Features ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Monthly Features
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
                    <Star size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    Strategy Guide + Interactive Tool
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  How to plan monthly features that grow revenue without discounting.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  A complete strategy guide covering brand positioning, how to choose the right treatment,
                  leading with value over discounts, seasonal planning, operational uses, and how to measure
                  what works. Plus an interactive marketing calendar to plan and track your entire year.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/members/resources/marketing/monthly-features"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                    style={{ background: "#a28c75", color: "#0c0004" }}
                  >
                    <BookOpen size={12} />
                    Read the Guide
                  </Link>
                  <a
                    href="/tools/promo-calendar.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-70"
                    style={{ background: "transparent", color: "#a28c75", border: "1px solid rgba(162,140,117,0.3)" }}
                  >
                    <ExternalLink size={12} />
                    Open Calendar
                  </a>
                </div>
              </div>

              {/* Right — feature chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Brand Positioning", desc: "Use elevated language — Feature and Spotlight instead of Sale and Promotion" },
                  { label: "Value Over Discounts", desc: "12 value-add ideas that protect your pricing while improving patient outcomes" },
                  { label: "Seasonal Strategy", desc: "Treatment recommendations mapped to patient demand throughout the year" },
                  { label: "Promo Calendar Tool", desc: "Add features, campaigns, events — with notes and performance metrics per entry" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={12} style={{ color: "#a28c75" }} />
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

      {/* ── Blog Strategy ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Blog Strategy
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
                    <FileText size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    Content Strategy Guide
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  How to turn your website into a patient-generating machine with consistent blog content.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  Why blogging is one of the highest-ROI marketing moves a practice can make, what to write
                  about, how to structure every post for Google, a visual blog anatomy diagram, per-post
                  checklist, repurposing playbook, and the content cluster strategy that builds long-term authority.
                </p>

                <Link
                  href="/members/resources/marketing/blog-strategy"
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
                  { label: "5 Topic Categories", desc: "Treatment questions, comparisons, concern-based, seasonal, and local SEO post types" },
                  { label: "Blog Post Anatomy", desc: "Visual diagram of the 5-section structure that Google rewards and patients actually read" },
                  { label: "Per-Post Checklist", desc: "12-point checklist to run through before publishing — keywords, links, CTA, and meta" },
                  { label: "Repurposing Playbook", desc: "How one blog post becomes 8 pieces of content across social, email, GBP, and video" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FileText size={12} style={{ color: "#a28c75" }} />
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

      {/* ── Email & Text Marketing ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Email &amp; Text Marketing
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
                    <Mail size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    Retention Strategy Guide
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  Send the right message to the right patient at the right time.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  How to use email and text marketing to increase retention, reactivate lapsed patients,
                  and fill your schedule — including 15 automated campaigns to set up once, the 80/20 content
                  rule, email vs. text channel strategy, and key metrics to track.
                </p>

                <Link
                  href="/members/resources/marketing/email-text-marketing"
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
                  { label: "Email vs. Text", desc: "When to use each channel — depth and education vs. urgency and immediate action" },
                  { label: "15 Automated Campaigns", desc: "Welcome series, reactivation, maintenance reminders, birthday, reviews, and more" },
                  { label: "Segmentation Strategy", desc: "Full database vs. targeted segments — who gets what and why it matters for open rates" },
                  { label: "The 80/20 Rule", desc: "80% education, 20% promotion — the content split that keeps patients engaged and buying" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Mail size={12} style={{ color: "#a28c75" }} />
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

      {/* ── Automated Campaigns ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Automated Campaigns
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
                    <Zap size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    Automation Playbook
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  15 campaigns that run 24/7 — nurturing, retaining, and reactivating patients automatically.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  The complete breakdown of every automated campaign your practice should have running —
                  each with a clear objective, trigger, recommended content, and channel strategy. Set up
                  once and let your marketing work around the clock.
                </p>

                <Link
                  href="/members/resources/marketing/automated-campaigns"
                  className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{ background: "#a28c75", color: "#0c0004" }}
                >
                  <BookOpen size={12} />
                  View All 15 Campaigns
                </Link>
              </div>

              {/* Right — feature chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Acquisition Campaigns", desc: "Welcome series, consultation follow-up, abandoned consultation, and treatment interest drip" },
                  { label: "Retention Campaigns", desc: "Maintenance reminders, birthday, review request, and post-treatment care sequences" },
                  { label: "Reactivation Campaigns", desc: "Win back patients who haven't visited in 6–18 months with personalized re-engagement" },
                  { label: "Revenue Campaigns", desc: "New treatment launches, VIP offers, events, retail replenishment, and referral programs" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={12} style={{ color: "#a28c75" }} />
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

      {/* ── Meta Ads ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Meta Ads
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
                    <TrendingUp size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide"
                    style={{ color: "#c8b3a3", background: "rgba(200,179,163,0.08)", border: "1px solid rgba(200,179,163,0.2)" }}
                  >
                    Paid Advertising Guide
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  A practical guide to profitable Facebook and Instagram advertising.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  How Meta ads actually work for aesthetic practices — budget guidance, which treatments
                  to advertise, creative do&apos;s and don&apos;ts, lead forms vs. DMs, landing page rules,
                  testing strategy, key metrics, and a 9-point campaign launch checklist.
                </p>

                <Link
                  href="/members/resources/marketing/meta-ads"
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
                  { label: "Stop the Scroll", desc: "Why interruption-based platforms require a different approach than search — and how to win at it" },
                  { label: "Creative Do's & Don'ts", desc: "Side-by-side comparison of what performs and what kills conversion rate on Facebook and Instagram" },
                  { label: "Lead Forms vs. DMs", desc: "When to use each lead capture method and which treatments each one works best for" },
                  { label: "Metrics & Launch Checklist", desc: "8 KPIs to track from spend through lifetime value, plus a 9-point pre-launch checklist" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={12} style={{ color: "#a28c75" }} />
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

      {/* ── Google Ads ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Google Ads
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
                    Paid Advertising Guide
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light mb-3 leading-snug" style={{ color: "#fffdf6" }}>
                  Capture patients who are already searching — and turn clicks into consultations.
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
                  How to build profitable Google Search campaigns — keyword tiers, negative keywords,
                  branded campaign protection, Quality Score, landing page rules, 12 metrics to track,
                  common mistakes, and when Google Ads may not be worth it for your market.
                </p>

                <Link
                  href="/members/resources/marketing/google-ads"
                  className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{ background: "#a28c75", color: "#0c0004" }}
                >
                  <BookOpen size={12} />
                  Read the Guide
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "3-Tier Keyword Strategy", desc: "Treatment-specific, location-based, and concern-based — when to use each and what to expect" },
                  { label: "Quality Score Explained", desc: "How Google scores your ads and why higher scores mean lower cost per click" },
                  { label: "Negative Keywords", desc: "The search terms that waste budget every day — and how to block them immediately" },
                  { label: "When Google Ads May Not Work", desc: "5 conditions that signal your market or practice isn't ready for paid search" },
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
