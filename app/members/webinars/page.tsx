import { Calendar, Clock, Play, Video, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars | Aesthetic Executive",
};

const upcoming = [
  {
    title: "Scaling to Multiple Locations: What No One Tells You",
    speaker: "Alexandra Reed, CEO",
    date: "June 12, 2025",
    time: "2:00 PM ET",
    duration: "75 min",
    description:
      "A candid conversation on the operational, financial, and cultural realities of opening a second (or third) location. Includes a live Q&A.",
    spots: 34,
  },
  {
    title: "Building Your Retail Revenue: From 0 to $8K/month",
    speaker: "Priya Nair, Head of Content",
    date: "June 26, 2025",
    time: "1:00 PM ET",
    duration: "60 min",
    description:
      "The exact playbook for transforming your retail shelf from an afterthought to a meaningful revenue stream. Includes product selection, staff training, and display strategies.",
    spots: 62,
  },
];

const recorded = [
  {
    title: "Pricing Your Services for Profitability (Not Comparison)",
    speaker: "Alexandra Reed",
    duration: "68 min",
    month: "May 2025",
    views: 412,
  },
  {
    title: "The Legal Framework Every Aesthetic Practice Needs",
    speaker: "Guest: Jordan Hayes, Healthcare Attorney",
    duration: "90 min",
    month: "April 2025",
    views: 538,
  },
  {
    title: "Hiring and Retaining Top Aesthetic Providers",
    speaker: "Priya Nair",
    duration: "55 min",
    month: "April 2025",
    views: 387,
  },
  {
    title: "EMR Selection and Implementation for MedSpas",
    speaker: "Dr. Marcus Chen",
    duration: "72 min",
    month: "March 2025",
    views: 296,
  },
  {
    title: "Mastering the Patient Consultation to Close",
    speaker: "Guest: Renée Abbot, Sales Trainer",
    duration: "60 min",
    month: "March 2025",
    views: 601,
  },
  {
    title: "Google Ads for Aesthetic Practices: A Practical Guide",
    speaker: "Guest: Taylor Kim, Digital Marketing",
    duration: "80 min",
    month: "February 2025",
    views: 455,
  },
  {
    title: "Financial Health Check: Understanding Your Practice Numbers",
    speaker: "Alexandra Reed",
    duration: "65 min",
    month: "February 2025",
    views: 340,
  },
  {
    title: "Building a Loyal Patient Base Through Membership Programs",
    speaker: "Priya Nair",
    duration: "55 min",
    month: "January 2025",
    views: 489,
  },
];

export default function WebinarsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs text-warm-500 tracking-widest uppercase mb-2">
          Member Library
        </p>
        <h1 className="font-display text-4xl font-light text-warm-900">
          Webinars
        </h1>
        <p className="text-warm-600 mt-1.5">
          Live sessions and a growing archive of expert-led training.
        </p>
      </div>

      {/* Upcoming */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="font-display text-2xl font-medium text-warm-900">
            Upcoming Live Sessions
          </h2>
          <Badge variant="gold">{upcoming.length} scheduled</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {upcoming.map((webinar) => (
            <div
              key={webinar.title}
              className="bg-white border border-gold-200 rounded-xl p-7"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-xs text-gold-600 font-medium tracking-widest uppercase">
                  Live Upcoming
                </span>
              </div>

              <h3 className="font-display text-xl font-medium text-warm-900 mb-1.5 leading-snug">
                {webinar.title}
              </h3>
              <p className="text-sm text-gold-600 mb-3">{webinar.speaker}</p>
              <p className="text-sm text-warm-600 leading-relaxed mb-5">
                {webinar.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-warm-500 mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-warm-400" />
                  {webinar.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-warm-400" />
                  {webinar.time} · {webinar.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={14} className="text-warm-400" />
                  {webinar.spots} spots left
                </span>
              </div>

              <button className="h-10 px-6 bg-warm-900 text-cream text-sm font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center gap-2">
                Register Now
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recorded archive */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <h2 className="font-display text-2xl font-medium text-warm-900">
            Recorded Archive
          </h2>
          <Badge variant="neutral">{recorded.length}+ recordings</Badge>
        </div>

        <div className="bg-white border border-warm-200 rounded-xl divide-y divide-warm-100">
          {recorded.map((webinar) => (
            <div
              key={webinar.title}
              className="px-6 py-5 flex items-center gap-5 hover:bg-warm-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-warm-100 border border-warm-200 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-100 group-hover:border-gold-200 transition-colors">
                <Video size={16} className="text-warm-500 group-hover:text-gold-600 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-warm-900 leading-snug">
                  {webinar.title}
                </p>
                <p className="text-xs text-warm-500 mt-0.5">{webinar.speaker}</p>
              </div>
              <div className="flex items-center gap-6 text-xs text-warm-400 flex-shrink-0">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {webinar.duration}
                </span>
                <span className="hidden sm:block">{webinar.month}</span>
                <span className="hidden sm:flex items-center gap-1">
                  <Users size={12} />
                  {webinar.views}
                </span>
              </div>
              <button className="flex-shrink-0 w-9 h-9 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center hover:bg-gold-100 transition-colors ml-2">
                <Play size={14} className="text-gold-600 ml-0.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
