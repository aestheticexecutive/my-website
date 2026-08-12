import Link from "next/link";
import { Download, FileText, Search, ExternalLink } from "lucide-react";
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
