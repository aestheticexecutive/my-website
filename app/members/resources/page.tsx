import Link from "next/link";
import { Megaphone, Settings, TrendingUp, Users, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Aesthetic Executive",
};

const sections = [
  {
    href: "/members/resources/marketing",
    icon: Megaphone,
    label: "Marketing",
    description:
      "Social media strategy, paid advertising, content planning, brand positioning, and patient acquisition systems.",
    accent: "#a28c75",
  },
  {
    href: "/members/resources/operations",
    icon: Settings,
    label: "Operations",
    description:
      "SOPs, workflow optimization, scheduling systems, vendor management, and day-to-day practice operations.",
    accent: "#a28c75",
  },
  {
    href: "/members/resources/finance",
    icon: TrendingUp,
    label: "Finance & Business Performance",
    description:
      "Revenue tracking, pricing strategy, profitability analysis, budgeting, and KPI dashboards.",
    accent: "#a28c75",
  },
  {
    href: "/members/resources/staff",
    icon: Users,
    label: "Staff",
    description:
      "Hiring, onboarding, performance management, compensation benchmarking, and team culture building.",
    accent: "#a28c75",
  },
];

export default function ResourcesHubPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(47,4,16,0.9) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(162,140,117,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: "#a28c75" }}
          >
            Member Library
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-light mb-5 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Resources
          </h1>
          <p
            className="text-base md:text-lg max-w-xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.55)" }}
          >
            Premium guides, templates, and tools — organized by the areas that
            matter most to your practice.
          </p>

          {/* Divider */}
          <div
            className="mt-10 h-px w-24"
            style={{ background: "rgba(162,140,117,0.35)" }}
          />
        </div>
      </div>

      {/* Section cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(145deg, #1a0009 0%, #0f0006 100%)",
                  borderColor: "rgba(162,140,117,0.15)",
                  minHeight: "300px",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(47,4,16,0.8) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(162,140,117,0.35)",
                  }}
                />

                <div className="relative p-8 flex flex-col h-full">
                  {/* Top row: icon + arrow */}
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                      style={{
                        background: "rgba(162,140,117,0.12)",
                        border: "1px solid rgba(162,140,117,0.25)",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: "#a28c75" }}
                      />
                    </div>
                    <ArrowRight
                      size={18}
                      className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: "rgba(162,140,117,0.5)" }}
                    />
                  </div>

                  {/* Label */}
                  <h2
                    className="font-display text-2xl font-light mb-3 leading-snug"
                    style={{ color: "#fffdf6" }}
                  >
                    {section.label}
                  </h2>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(255,253,246,0.5)" }}
                  >
                    {section.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
