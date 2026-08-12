import Link from "next/link";
import { ArrowLeft, Settings, Download, ExternalLink, Search, FileText, ClipboardList, Percent, ListChecks, Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Resources | Aesthetic Executive",
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

      {/* ── Daily Operations Checklists ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-12">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Daily Operations Checklists
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <Link
          href="/members/resources/operations/opening-closing-checklist"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <ListChecks size={24} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Opening & Closing Checklist Builder
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.3)", color: "#a28c75" }}
                >
                  Interactive Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Pre-loaded with common MedSpa opening and closing duties — toggle them on or off, edit the wording, add your own, and set how often each one needs to happen. Print a branded checklist with a checkbox, initials line, and date line for every task.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["28 pre-loaded duties", "Daily / weekly / monthly / custom", "Custom branding & color", "Print / save as PDF"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Inventory ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-12">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Inventory
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <Link
          href="/members/resources/operations/inventory-management"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Package size={24} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Inventory Management System
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.3)", color: "#a28c75" }}
                >
                  Interactive Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Track products by category, vendor, unit, and cost. Log physical counts and incoming stock, see your on-site dollar value update live, and get red/yellow highlights the moment an item hits or drops below its par level.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["Par-level alerts", "Live on-site $ value", "Units & $ utilized by period", "Stock count + receiving log"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Patient Intake Form ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-12">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Patient Forms
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <Link
          href="/members/resources/operations/intake-form-builder"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <ClipboardList size={24} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Patient Intake Form Builder
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.3)", color: "#a28c75" }}
                >
                  Interactive Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Build a branded patient intake form in minutes. Enter your practice name, choose your accent color, toggle or edit the 34 pre-loaded concern questions across 4 sections, add your own items, and print or save as a PDF — ready to hand to patients on day one.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["34 pre-loaded questions", "4 editable sections", "Custom branding & color", "Print / save as PDF"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/members/resources/operations/treatment-plan-builder"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40 mt-5"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <FileText size={24} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Treatment Plan Builder
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.3)", color: "#a28c75" }}
                >
                  Interactive Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Build a branded, print-ready treatment plan in minutes. Add up to 6 treatment blocks with sessions, pricing, concerns, and downtime — plus a home care product table and additional notes section. Fill it in for a specific patient or leave fields blank for a reusable template.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["Up to 6 treatment blocks", "Home care product table", "Custom branding & color", "Print / save as PDF"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Consultation Tracking ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-12">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
            Consultation Tracking
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
        </div>

        <Link
          href="/members/resources/operations/consultation-conversion-tracker"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Percent size={24} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Consultation Conversion Tracker
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                  style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.3)", color: "#a28c75" }}
                >
                  Interactive Tool
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                Log consultations by provider and service type — how many purchased and how many didn't — then run reports for any date range to see conversion rates broken down by provider and by consult type, with a notes log to capture context behind the numbers.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {["Log by provider & type", "Custom date-range reports", "Provider & type conversion rates", "Dated notes log"].map((feat) => (
                  <li key={feat} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(162,140,117,0.65)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
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
