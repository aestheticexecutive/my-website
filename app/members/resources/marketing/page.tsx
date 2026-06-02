import Link from "next/link";
import { ArrowLeft, Megaphone, Download, ExternalLink } from "lucide-react";
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
    </div>
  );
}
