import Link from "next/link";
import { ArrowLeft, Settings, Download, ExternalLink, Search, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Resources | Aesthetic Executive",
};

const resources = [
  {
    title: "New Patient Intake SOP",
    type: "Checklist",
    description:
      "End-to-end checklist covering every step from booking confirmation to chart creation, medical history review, and pre-treatment preparation.",
  },
  {
    title: "Daily Opening & Closing Checklist",
    type: "Checklist",
    description:
      "Comprehensive opening and closing procedures for front desk and treatment staff — including equipment checks, cash reconciliation, and scheduling prep.",
  },
  {
    title: "Appointment Scheduling Best Practices",
    type: "Guide",
    description:
      "How to structure your schedule for maximum revenue per hour, minimize no-shows, and protect time for high-value appointments.",
  },
  {
    title: "Inventory Management System",
    type: "Template",
    description:
      "Spreadsheet system for tracking product inventory, reorder points, expiration dates, and cost of goods across all treatment categories.",
  },
  {
    title: "Treatment Room Setup Standards",
    type: "Checklist",
    description:
      "Room-by-room setup standards for cleanliness, supply stocking, equipment positioning, and patient experience consistency.",
  },
  {
    title: "Patient Complaint Resolution SOP",
    type: "Guide",
    description:
      "Step-by-step protocol for handling patient dissatisfaction — from first contact to resolution documentation — while protecting the practice and relationship.",
  },
  {
    title: "Vendor Contract Template",
    type: "Template",
    description:
      "Customizable contract template for product vendors, equipment suppliers, and service providers. Includes key terms to negotiate and red flags to watch for.",
  },
  {
    title: "Practice Operations Manual Outline",
    type: "Template",
    description:
      "A structured framework for building your practice's master operations manual — covering policies, procedures, roles, and emergency protocols.",
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

export default function OperationsResourcesPage() {
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
              <Settings size={18} style={{ color: "#a28c75" }} />
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
            Operations
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            SOPs, workflow optimization, scheduling systems, vendor management,
            and day-to-day practice operations — built to run a tight ship.
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

      {/* ── Secret Shopping ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Secret Shopping
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        {/* Interactive log — feature card */}
        <Link
          href="/tools/secret-shopper-log.html"
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
              <Search size={24} style={{ color: "#a28c75" }} />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Secret Shopper Log
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
                Log every secret shop in one place — own practice or competitor. Fill in all 9
                sections of the questionnaire, upload photos of forms or signage, add notes, and
                track your overall score across every visit. Your full competitive intelligence library,
                always at hand.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["9-section questionnaire", "Photo uploads", "1–10 scoring", "Shop history log"].map((feat) => (
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

        {/* Two smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Guide card */}
          <Link
            href="/members/resources/operations/secret-shopping"
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
                <FileText size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                  <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                    Why Secret Shop?
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
                  The strategy behind secret shopping — why to shop yourself, why to shop
                  competitors, cadence, how to debrief findings, and what to do with the results.
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

          {/* Printable questionnaire card */}
          <Link
            href="/tools/secret-shopper-questionnaire.html"
            target="_blank"
            rel="noopener noreferrer"
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
                <Download size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                  <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                    Printable Questionnaire
                  </h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                    style={{
                      background: "rgba(162,140,117,0.1)",
                      border: "1px solid rgba(162,140,117,0.22)",
                      color: "rgba(162,140,117,0.75)",
                    }}
                  >
                    Print / PDF
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                  All 9 sections with write-in lines and scoring boxes — formatted for print.
                  Take it on a shop, fill it in by hand, then log your answers and photos digitally.
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
                Print
                <ExternalLink size={11} />
              </span>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}
