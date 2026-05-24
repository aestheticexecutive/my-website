import { BookOpen, ExternalLink, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Aesthetic Executive",
};

const categories = [
  "All",
  "Compliance",
  "Business Strategy",
  "Marketing",
  "HR & Culture",
  "Finance",
  "Technology",
];

const resources = [
  {
    title: "2025 Aesthetic Industry Compensation Guide",
    category: "HR & Culture",
    type: "Guide",
    readTime: "12 min read",
    date: "May 2025",
    description:
      "Comprehensive salary ranges and compensation structures for injectors, aestheticians, front desk, and management roles by region and practice type.",
    featured: true,
  },
  {
    title: "FDA Oversight of Aesthetic Treatments: What You Need to Know",
    category: "Compliance",
    type: "Article",
    readTime: "8 min read",
    date: "April 2025",
    description:
      "Clear breakdown of FDA jurisdiction over neurotoxins, fillers, devices, and compounded products — and what it means for your day-to-day operations.",
    featured: false,
  },
  {
    title: "State-by-State Scope of Practice Reference",
    category: "Compliance",
    type: "Reference",
    readTime: "Ongoing",
    date: "April 2025",
    description:
      "Living document tracking which states permit RNs, APRNs, PAs, and MDs to perform various aesthetic procedures, updated quarterly.",
    featured: false,
  },
  {
    title: "The Complete Guide to Practice Valuation",
    category: "Business Strategy",
    type: "Guide",
    readTime: "20 min read",
    date: "March 2025",
    description:
      "How aesthetic practices are valued for acquisition, partnership, or financing. Covers EBITDA multiples, intangibles, and preparation steps.",
    featured: true,
  },
  {
    title: "Instagram vs. TikTok for Aesthetic Practices in 2025",
    category: "Marketing",
    type: "Article",
    readTime: "7 min read",
    date: "March 2025",
    description:
      "Data-backed comparison of platform performance for med spa marketing, with strategic recommendations based on practice stage and target demographic.",
    featured: false,
  },
  {
    title: "Membership Program Pricing Calculator",
    category: "Finance",
    type: "Tool",
    readTime: "Interactive",
    date: "February 2025",
    description:
      "Enter your treatment menu and volume, and see recommended membership tiers, pricing, and projected monthly recurring revenue impact.",
    featured: false,
  },
  {
    title: "Selecting and Implementing an EMR for Your Aesthetic Practice",
    category: "Technology",
    type: "Guide",
    readTime: "15 min read",
    date: "February 2025",
    description:
      "Comparison of leading aesthetic EMR platforms (Aesthetic Record, Nextech, Zenoti, etc.) with selection criteria and implementation checklist.",
    featured: false,
  },
  {
    title: "Culture Building Playbook for Small Aesthetic Teams",
    category: "HR & Culture",
    type: "Playbook",
    readTime: "25 min read",
    date: "January 2025",
    description:
      "Practical strategies for building a cohesive team culture in a 2–10 person aesthetic practice, including onboarding rituals, feedback cadence, and retention levers.",
    featured: false,
  },
  {
    title: "Understanding Your Profit Margin by Treatment Type",
    category: "Finance",
    type: "Article",
    readTime: "10 min read",
    date: "January 2025",
    description:
      "Break-even analysis and margin benchmarks for neurotoxin, filler, laser, and skincare services — so you can optimize your service mix intentionally.",
    featured: false,
  },
];

const typeColors: Record<string, string> = {
  Guide: "bg-blue-50 text-blue-700 border-blue-100",
  Article: "bg-purple-50 text-purple-700 border-purple-100",
  Reference: "bg-amber-50 text-amber-700 border-amber-100",
  Tool: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Playbook: "bg-rose-50 text-rose-700 border-rose-100",
};

export default function ResourcesPage() {
  const featured = resources.filter((r) => r.featured);
  const regular = resources.filter((r) => !r.featured);

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
              Resources
            </h1>
            <p className="text-warm-600 mt-1.5">
              Guides, articles, tools, and references — curated for aesthetic practice leaders.
            </p>
          </div>
          <Badge variant="neutral">200+ Resources</Badge>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Featured resources */}
      {featured.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-xl font-medium text-warm-900 mb-4">
            Featured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((resource) => (
              <div
                key={resource.title}
                className="bg-warm-900 rounded-xl p-8 flex flex-col group cursor-pointer hover:bg-warm-800 transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-lg bg-gold-400/20 border border-gold-400/30 flex items-center justify-center">
                    <BookOpen size={16} className="text-gold-400" />
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-warm-500 group-hover:text-warm-300 transition-colors"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${typeColors[resource.type]}`}
                  >
                    {resource.type}
                  </span>
                  <span className="text-xs text-warm-500 tracking-widest uppercase">
                    {resource.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-cream mb-2 leading-snug">
                  {resource.title}
                </h3>
                <p className="text-sm text-warm-400 leading-relaxed flex-1 mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-warm-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {resource.readTime}
                  </span>
                  <span>{resource.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All resources */}
      <section>
        <h2 className="font-display text-xl font-medium text-warm-900 mb-4">
          All Resources
        </h2>
        <div className="bg-white border border-warm-200 rounded-xl divide-y divide-warm-100">
          {regular.map((resource) => (
            <div
              key={resource.title}
              className="px-6 py-6 flex items-start gap-5 hover:bg-warm-50 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-100 transition-colors mt-0.5">
                <BookOpen size={16} className="text-gold-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${typeColors[resource.type]}`}
                  >
                    {resource.type}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-warm-500">
                    <Tag size={11} />
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-warm-900 leading-snug mb-1">
                  {resource.title}
                </h3>
                <p className="text-xs text-warm-600 leading-relaxed line-clamp-2">
                  {resource.description}
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-warm-400">
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {resource.readTime}
                  </span>
                  <span>{resource.date}</span>
                </div>
              </div>
              <ExternalLink
                size={14}
                className="text-warm-300 group-hover:text-warm-600 transition-colors flex-shrink-0 mt-1"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
