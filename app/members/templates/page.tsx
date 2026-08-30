import Link from "next/link";
import { Download, FileText, Search, ExternalLink, Compass, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates | Aesthetic Executive",
};

const categories = [
  "All",
  "HR & Staffing",
  "Finance",
  "Legal & Compliance",
  "Operations",
  "Marketing",
];

const templates: {
  title: string;
  category: string;
  description: string;
  format: string;
  updated: string;
  href?: string;
}[] = [
  {
    title: "Interview Scorecard",
    category: "HR & Staffing",
    description:
      "A candidate rating rubric built on the MBI framework — skill, attitude, passion — plus communication and reliability, with an overall recommendation section.",
    format: "DOCX",
    updated: "August 2026",
    href: "/downloads/ae-interview-scorecard.docx",
  },
  {
    title: "Team Directory / Org Chart",
    category: "HR & Staffing",
    description:
      "A simple roster — name, role, department, who reports to whom, contact info, and start date — for the whole team.",
    format: "XLSX",
    updated: "August 2026",
    href: "/downloads/ae-team-directory.xlsx",
  },
  {
    title: "Room & Equipment Turnover Checklist",
    category: "Operations",
    description:
      "A per-room reset checklist for between every patient and end-of-day, plus a daily turnover log.",
    format: "DOCX",
    updated: "August 2026",
    href: "/downloads/ae-room-equipment-turnover-checklist.docx",
  },
  {
    title: "Equipment Maintenance Log",
    category: "Operations",
    description:
      "A per-device service history with the next service due date calculated automatically from the service interval.",
    format: "XLSX",
    updated: "August 2026",
    href: "/downloads/ae-equipment-maintenance-log.xlsx",
  },
  {
    title: "Vendor Price Comparison Worksheet",
    category: "Finance",
    description:
      "A side-by-side grid for comparing up to three vendor quotes — effective cost per unit calculates automatically from price plus amortized shipping.",
    format: "XLSX",
    updated: "August 2026",
    href: "/downloads/ae-vendor-price-comparison-worksheet.xlsx",
  },
  {
    title: "Annual Subscription & Renewal Calendar",
    category: "Finance",
    description:
      "Every recurring cost in one place, with an auto-calculating cancel-by date and a live days-until-renewal count.",
    format: "XLSX",
    updated: "August 2026",
    href: "/downloads/ae-subscription-renewal-calendar.xlsx",
  },
  {
    title: "Partnership / Referral Outreach One-Sheet",
    category: "Marketing",
    description:
      "A leave-behind fact sheet for pitching a referral or cross-promotion partnership to a local business.",
    format: "DOCX",
    updated: "August 2026",
    href: "/downloads/ae-partnership-outreach-one-sheet.docx",
  },
  {
    title: "Testimonial Collection Sheet",
    category: "Marketing",
    description:
      "A quick worksheet for capturing a patient's spoken testimonial right after a great visit.",
    format: "DOCX",
    updated: "August 2026",
    href: "/downloads/ae-testimonial-collection-sheet.docx",
  },
  {
    title: "Peer Shoutout / Recognition Card",
    category: "HR & Staffing",
    description:
      "A printable card version of the shoutout format from the Peer Recognition Program Guide — 4 per page, ready to cut apart and hand out or post on a board.",
    format: "DOCX",
    updated: "August 2026",
    href: "/downloads/ae-peer-shoutout-card.docx",
  },
  {
    title: "Stay Interview Notes Template",
    category: "HR & Staffing",
    description:
      "A structured one-pager for the stay-interview conversations from the Staff Retention Guide — the four questions, a follow-up actions table, and space for notes.",
    format: "DOCX",
    updated: "August 2026",
    href: "/downloads/ae-stay-interview-notes.docx",
  },
  {
    title: "New Hire Welcome Packet",
    category: "HR & Staffing",
    description:
      "A friendlier complement to the Onboarding Checklist Builder — parking, dress code, who's who, key contacts, and a first-week checklist.",
    format: "DOCX",
    updated: "August 2026",
    href: "/downloads/ae-new-hire-welcome-packet.docx",
  },
  {
    title: "Vendor Contact & Reorder Sheet",
    category: "Operations",
    description:
      "One master list of every vendor — contact info, order method, lead time, and an auto-calculating next expected reorder date. An offline companion to the Inventory Management System.",
    format: "XLSX",
    updated: "August 2026",
    href: "/downloads/ae-vendor-contact-reorder-sheet.xlsx",
  },
  {
    title: "Daily Cash Drawer Reconciliation Log",
    category: "Operations",
    description:
      "A running log for counting the front-desk cash drawer — opening float, cash sales, and payouts auto-calculate the expected close, with an over/short line for each day.",
    format: "XLSX",
    updated: "August 2026",
    href: "/downloads/ae-cash-drawer-reconciliation-log.xlsx",
  },
  {
    title: "Event RSVP Tracking Sheet",
    category: "Marketing",
    description:
      "Track attendee RSVPs, contact information, and attendance for practice events, open houses, and treatment nights. Ready to use out of the box.",
    format: "XLSX",
    updated: "July 2025",
    href: "/templates/event-rsvp-sheet.xlsx",
  },
  {
    title: "Employee Social Media Policy",
    category: "HR & Staffing",
    description:
      "Customizable social media policy for employees to review and sign. Covers professional representation, content ownership, HIPAA compliance, brand standards, and conduct expectations.",
    format: "DOCX",
    updated: "July 2025",
    href: "/templates/employee-social-media-policy.docx",
  },
  {
    title: "Monthly & Annual P&L Template",
    category: "Finance",
    description:
      "Four-tab Excel workbook built for aesthetic practices. All formulas pre-built — enter your numbers and it calculates gross margin, payroll %, net profit, and nine KPI metrics automatically.",
    format: "XLSX",
    updated: "July 2025",
    href: "/downloads/ae-pl-template.xlsx",
  },
  {
    title: "Cash Flow Forecast Template",
    category: "Finance",
    description:
      "12-month and 13-week Excel cash flow forecast, pre-built with formulas and a working example. Enter your beginning balance and expected inflows/outflows — running totals, net cash flow, and ending balance calculate automatically, with a minimum-reserve cushion line to flag tight periods.",
    format: "XLSX",
    updated: "August 2026",
    href: "/downloads/ae-cash-flow-forecast-template.xlsx",
  },
  {
    title: "Treatment Profitability Template",
    category: "Finance",
    description:
      "Three-tab Excel workbook pre-loaded with 15 common treatments. Formulas calculate profit and margin automatically, with conditional color coding and a monthly profit contribution tab.",
    format: "XLSX",
    updated: "July 2025",
    href: "/downloads/ae-treatment-profitability.xlsx",
  },
  {
    title: "Patient Care Coordinator Evaluation Form",
    category: "HR & Staffing",
    description:
      "Role-specific performance evaluation covering service quality, communication, scheduling, patient experience, and administrative competencies.",
    format: "DOCX",
    updated: "July 2025",
    href: "/downloads/Patient-Care-Coordinator-Evaluation.docx",
  },
  {
    title: "Med Spa Manager Evaluation Form",
    category: "HR & Staffing",
    description:
      "Role-specific performance evaluation covering leadership, operations, revenue management, team development, and compliance competencies.",
    format: "DOCX",
    updated: "July 2025",
    href: "/downloads/Med-Spa-Manager-Evaluation.docx",
  },
  {
    title: "Provider / Injector Evaluation Form",
    category: "HR & Staffing",
    description:
      "Role-specific performance evaluation covering clinical skill, patient consultation, safety protocol, treatment outcomes, and professional development.",
    format: "DOCX",
    updated: "July 2025",
    href: "/downloads/Provider-Injector-Evaluation.docx",
  },
  {
    title: "Strategic Community Partnerships Guide",
    category: "Marketing",
    description:
      "The full Community Partnerships playbook as a shareable Word doc — cross-promotional relationship building with gyms, wellness studios, boutique retailers, and country clubs.",
    format: "DOCX",
    updated: "July 2025",
    href: "/templates/community-partnerships.docx",
  },
  {
    title: "Patient Referral Program Guide",
    category: "Marketing",
    description:
      "The full 12-step patient referral program playbook as a shareable Word doc — program structure, referral cards, team scripts, and seasonal promotions.",
    format: "DOCX",
    updated: "July 2025",
    href: "/templates/patient-referral-program.docx",
  },
  {
    title: "Referral Partner Program Guide",
    category: "Marketing",
    description:
      "The full Referral Partner Program playbook as a shareable Word doc — the Give $50/Get $50 model, outreach templates, and onboarding scripts.",
    format: "DOCX",
    updated: "July 2025",
    href: "/templates/referral-partner-program.docx",
  },
  {
    title: "Offer Letter Builder",
    category: "HR & Staffing",
    description:
      "A complete employment offer letter with every standard section already written — fill in the details for a candidate, edit the final copy, then save as a PDF or copy it straight into an email.",
    format: "Tool",
    updated: "August 2026",
    href: "/members/resources/staff/offer-letter",
  },
];

const formatColors: Record<string, string> = {
  DOCX: "bg-blue-50 text-blue-700 border-blue-100",
  XLSX: "bg-emerald-50 text-emerald-700 border-emerald-100",
  PDF: "bg-red-50 text-red-700 border-red-100",
  Tool: "bg-gold-50 text-gold-700 border-gold-200",
};

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs text-warm-500 tracking-widest uppercase mb-2">
          Member Library
        </p>
        <h1 className="font-display text-4xl font-light text-warm-900">
          Business Templates
        </h1>
        <p className="text-warm-600 mt-1.5">
          Ready-to-use templates built for aesthetic practices.
        </p>
      </div>

      {/* Roadmap prompt */}
      <Link
        href="/members/roadmap"
        className="group flex items-center gap-4 bg-white border border-warm-200 rounded-xl px-5 py-4 mb-6 hover:border-gold-300 hover:shadow-sm transition-all duration-200"
      >
        <div className="w-9 h-9 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center flex-shrink-0">
          <Compass size={16} className="text-gold-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-warm-900">Not sure where to start?</p>
          <p className="text-xs text-warm-600">Answer 4 quick questions for a personalized path through everything here.</p>
        </div>
        <ArrowRight size={15} className="flex-shrink-0 text-warm-400 group-hover:text-warm-700 group-hover:translate-x-0.5 transition-all" />
      </Link>

      {/* Search + filter bar */}
      <div className="bg-white border border-warm-200 rounded-xl px-5 py-4 mb-6 flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 flex-1 min-w-48">
          <Search size={16} className="text-warm-400" />
          <input
            type="text"
            placeholder="Search templates…"
            className="w-full text-sm text-warm-900 placeholder:text-warm-400 outline-none bg-transparent"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`h-7 px-3 rounded-full text-xs font-medium tracking-wide transition-colors ${
                cat === "All"
                  ? "bg-warm-900 text-cream"
                  : "bg-warm-100 text-warm-600 hover:bg-warm-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Templates grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {templates.map((template) => (
          <div
            key={template.title}
            className="bg-white border border-warm-200 rounded-xl p-6 flex flex-col hover:border-gold-300 hover:shadow-sm transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
                <FileText size={16} className="text-gold-600" />
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${formatColors[template.format]}`}
              >
                {template.format}
              </span>
            </div>

            <h3 className="font-display text-lg font-medium text-warm-900 mb-2 leading-snug">
              {template.title}
            </h3>
            <p className="text-xs text-gold-600 tracking-widest uppercase mb-3">
              {template.category}
            </p>
            <p className="text-sm text-warm-600 leading-relaxed flex-1 mb-5">
              {template.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-warm-400">
                Updated {template.updated}
              </span>
              {template.format === "Tool" && template.href ? (
                <Link
                  href={template.href}
                  className="h-8 px-4 bg-warm-900 text-cream text-xs font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center gap-1.5"
                >
                  <ExternalLink size={13} />
                  Open Tool
                </Link>
              ) : template.href ? (
                <a
                  href={template.href}
                  download
                  className="h-8 px-4 bg-warm-900 text-cream text-xs font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center gap-1.5"
                >
                  <Download size={13} />
                  Download
                </a>
              ) : (
                <button className="h-8 px-4 bg-warm-900 text-cream text-xs font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center gap-1.5">
                  <Download size={13} />
                  Download
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
