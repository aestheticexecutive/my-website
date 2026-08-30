import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { FileText, Video, BookOpen, ArrowRight, Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Aesthetic Executive",
};

const quickLinks = [
  {
    href: "/members/templates",
    icon: FileText,
    title: "Templates",
    description: "Browse and download business templates",
  },
  {
    href: "/members/webinars",
    icon: Video,
    title: "Webinars",
    description: "Upcoming sessions and recorded library",
  },
  {
    href: "/members/resources",
    icon: BookOpen,
    title: "Resources",
    description: "Guides, checklists, and articles",
  },
];

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName || "Member";

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Welcome header */}
      <div className="mb-10">
        <p className="text-xs text-warm-500 tracking-widest uppercase mb-2">
          Member Dashboard
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-warm-900">
          Welcome back, {firstName}
        </h1>
        <p className="text-warm-600 mt-2">
          Your library is ready. Here&apos;s what&apos;s new.
        </p>
      </div>

      {/* Roadmap feature */}
      <Link
        href="/members/roadmap"
        className="group relative overflow-hidden flex flex-col sm:flex-row sm:items-center gap-6 rounded-xl p-7 sm:p-8 mb-8 border border-gold-200 transition-all duration-200 hover:shadow-md"
        style={{ background: "linear-gradient(135deg, #faf7f4 0%, #f0e8e0 100%)" }}
      >
        <div className="w-14 h-14 rounded-2xl bg-white border border-gold-200 flex items-center justify-center flex-shrink-0">
          <Compass size={26} className="text-gold-600" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-gold-600 tracking-widest uppercase mb-1.5 font-medium">Where Should I Start?</p>
          <h2 className="font-display text-2xl font-light text-warm-900 mb-1.5">
            Get a personalized path through the library
          </h2>
          <p className="text-sm text-warm-600 max-w-xl">
            Answer 4 quick questions about your practice, and we&apos;ll put together a roadmap through
            every guide, tool, and template — in the order that actually makes sense for you.
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-warm-900 text-cream text-sm font-medium tracking-wide group-hover:bg-warm-800 transition-colors">
            Take the Assessment
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </Link>

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white border border-warm-200 rounded-xl p-7 hover:border-gold-300 hover:shadow-sm transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
                  <Icon size={20} className="text-gold-600" />
                </div>
                <ArrowRight
                  size={16}
                  className="text-warm-400 group-hover:text-warm-700 group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <h2 className="font-display text-xl font-medium text-warm-900 mb-1">
                {link.title}
              </h2>
              <p className="text-sm text-warm-600">{link.description}</p>
            </Link>
          );
        })}
      </div>

    </div>
  );
}
