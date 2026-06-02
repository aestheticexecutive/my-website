import { Download, FileText, Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
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
  "Clinical",
];

const templates = [
  {
    title: "Employee Offer Letter Template",
    category: "HR & Staffing",
    description:
      "Professionally formatted offer letter for clinical and administrative staff. Fully customizable with offer terms, start date, and role details.",
    format: "DOCX",
    updated: "May 2025",
  },
  {
    title: "Staff Performance Review Form",
    category: "HR & Staffing",
    description:
      "Structured 90-day and annual performance review template covering clinical skills, patient satisfaction, and professional development.",
    format: "DOCX",
    updated: "May 2025",
  },
  {
    title: "Monthly Financial KPI Dashboard",
    category: "Finance",
    description:
      "Excel model tracking revenue per provider, average ticket value, retail %, appointment fill rate, and 12-month trend charts.",
    format: "XLSX",
    updated: "April 2025",
  },
  {
    title: "Practice Startup Budget Model",
    category: "Finance",
    description:
      "Comprehensive startup budget covering equipment, buildout, licensing, staffing, and marketing with 3-year revenue projections.",
    format: "XLSX",
    updated: "March 2025",
  },
  {
    title: "Patient Consent Form — Neurotoxin",
    category: "Legal & Compliance",
    description:
      "Legally reviewed consent form for neurotoxin treatments. Covers risks, alternatives, and post-care responsibilities.",
    format: "PDF",
    updated: "April 2025",
  },
  {
    title: "Patient Consent Form — Filler",
    category: "Legal & Compliance",
    description:
      "Comprehensive consent form for dermal filler treatments including vascular occlusion risk disclosure and emergency protocol.",
    format: "PDF",
    updated: "April 2025",
  },
  {
    title: "Service Menu & Price List",
    category: "Marketing",
    description:
      "Elegant, print-ready service menu template. Organized by treatment category with space for descriptions and pricing tiers.",
    format: "DOCX",
    updated: "March 2025",
  },
  {
    title: "Social Media Content Calendar",
    category: "Marketing",
    description:
      "90-day content calendar with post ideas, captions, hashtag groups, and optimal posting times for aesthetic practices.",
    format: "XLSX",
    updated: "May 2025",
  },
  {
    title: "New Provider Onboarding Checklist",
    category: "Operations",
    description:
      "30/60/90-day onboarding checklist for injectors and aesthetic providers covering clinical, administrative, and culture milestones.",
    format: "DOCX",
    updated: "April 2025",
  },
  {
    title: "Vendor Comparison Worksheet",
    category: "Operations",
    description:
      "Side-by-side comparison tool for evaluating product vendors, device vendors, and service providers with scoring criteria.",
    format: "XLSX",
    updated: "February 2025",
  },
  {
    title: "Treatment Protocol: Skin Care Analysis",
    category: "Clinical",
    description:
      "Standardized patient skin analysis framework for new patient consultations. Covers Fitzpatrick type, concerns, and initial treatment planning.",
    format: "DOCX",
    updated: "March 2025",
  },
  {
    title: "HIPAA Privacy Policy Template",
    category: "Legal & Compliance",
    description:
      "Attorney-reviewed HIPAA-compliant privacy policy template for aesthetic practices. Ready to customize with your practice details.",
    format: "DOCX",
    updated: "January 2025",
  },
];

const formatColors: Record<string, string> = {
  DOCX: "bg-blue-50 text-blue-700 border-blue-100",
  XLSX: "bg-emerald-50 text-emerald-700 border-emerald-100",
  PDF: "bg-red-50 text-red-700 border-red-100",
};

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs text-warm-500 tracking-widest uppercase mb-2">
              Member Library
            </p>
            <h1 className="font-display text-4xl font-light text-warm-900">
              Business Templates
            </h1>
            <p className="text-warm-600 mt-1.5">
              150+ ready-to-use templates built for aesthetic practices.
            </p>
          </div>
          <Badge variant="gold">150+ Templates</Badge>
        </div>
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
              <button className="h-8 px-4 bg-warm-900 text-cream text-xs font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center gap-1.5">
                <Download size={13} />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
