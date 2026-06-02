import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { FileText, Video, BookOpen, ArrowRight, TrendingUp, Clock } from "lucide-react";
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
    count: "150+ templates",
  },
  {
    href: "/members/webinars",
    icon: Video,
    title: "Webinars",
    description: "Upcoming sessions and recorded library",
    count: "80+ recordings",
  },
  {
    href: "/members/resources",
    icon: BookOpen,
    title: "Resources",
    description: "Guides, checklists, and articles",
    count: "200+ resources",
  },
];

const recentActivity = [
  {
    type: "template",
    title: "Staff Performance Review Template",
    date: "Added this week",
    icon: FileText,
  },
  {
    type: "webinar",
    title: "Scaling to Multiple Locations: What No One Tells You",
    date: "Live: June 12, 2:00 PM ET",
    icon: Video,
  },
  {
    type: "resource",
    title: "2025 Aesthetic Industry Compensation Guide",
    date: "Published May 2025",
    icon: BookOpen,
  },
  {
    type: "template",
    title: "Monthly Financial KPI Dashboard",
    date: "Added this week",
    icon: FileText,
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
              <p className="text-sm text-warm-600 mb-3">{link.description}</p>
              <span className="text-xs text-gold-600 font-medium tracking-wide">
                {link.count}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Stats + Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="font-display text-xl font-medium text-warm-900">
            Your Library
          </h2>
          {[
            { label: "Templates Available", value: "150+", icon: FileText },
            { label: "Hours of Webinar Content", value: "120+", icon: TrendingUp },
            { label: "Resources Published", value: "200+", icon: BookOpen },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white border border-warm-200 rounded-xl px-6 py-5 flex items-center gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-warm-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-warm-600" />
                </div>
                <div>
                  <p className="font-display text-2xl font-light text-warm-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-warm-500">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent activity */}
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-medium text-warm-900 mb-4">
            Recently Added
          </h2>
          <div className="bg-white border border-warm-200 rounded-xl divide-y divide-warm-100">
            {recentActivity.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="px-6 py-5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-gold-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-warm-900 leading-snug">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Clock size={12} className="text-warm-400" />
                      <p className="text-xs text-warm-500">{item.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
