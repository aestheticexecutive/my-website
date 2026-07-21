import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15 Automated Campaigns Every Med Spa Should Have | Aesthetic Executive",
  description:
    "The 15 automated campaigns that consistently generate higher retention, more appointments, and increased revenue — set up once and run 24/7.",
};

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-display text-2xl md:text-3xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
        {label}
      </h2>
      <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
    </div>
  );
}

function ChannelBadge({ type }: { type: "email" | "text" | "primary" | "support" }) {
  const styles = {
    email: { bg: "rgba(200,160,80,0.12)", border: "rgba(200,160,80,0.28)", color: "#c8a050", label: "📧 Email" },
    text: { bg: "rgba(100,160,220,0.1)", border: "rgba(100,160,220,0.25)", color: "#7aabcf", label: "💬 Text" },
    primary: { bg: "rgba(162,140,117,0.12)", border: "rgba(162,140,117,0.28)", color: "#a28c75", label: "Primary" },
    support: { bg: "rgba(162,140,117,0.05)", border: "rgba(162,140,117,0.15)", color: "rgba(162,140,117,0.6)", label: "Support" },
  };
  const s = styles[type];
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium"
      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
    >
      {s.label}
    </span>
  );
}

const campaigns = [
  {
    num: "01",
    icon: "👋",
    label: "Welcome Series",
    group: "Acquisition",
    objective: "Build trust and convert new leads",
    trigger: "New lead or subscriber",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Introduce the practice, providers, and philosophy",
      "Highlight popular treatments with photos and results",
      "Share financing options and before & after photos",
      "Include patient testimonials",
      "End with a clear invitation to book a consultation",
    ],
  },
  {
    num: "02",
    icon: "📋",
    label: "Consultation Follow-Up",
    group: "Acquisition",
    objective: "Convert undecided consultations into booked treatments",
    trigger: "Consultation completed without booking",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Address the most common objections head-on",
      "Answer frequently asked questions about the treatment",
      "Share patient success stories and results",
      "Explain financing options in plain terms",
      "Include a clear, frictionless booking CTA",
    ],
  },
  {
    num: "03",
    icon: "💉",
    label: "Treatment Interest Drip",
    group: "Acquisition",
    objective: "Continue the sales conversation after the visit",
    trigger: "Patient expresses interest but does not purchase",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Educational emails over several weeks covering the treatment",
      "Ideal candidacy — who it works best for",
      "FAQs, recovery, and what to expect",
      "Before & after results gallery",
      "A value-added offer to create a reason to act",
    ],
  },
  {
    num: "04",
    icon: "😴",
    label: "Inactive Patient Reactivation",
    group: "Reactivation",
    objective: "Bring inactive patients back into the practice",
    trigger: "No visit in 6–18 months",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Personalized message acknowledging the gap",
      "Highlight new services added since their last visit",
      "Invite them back — make it easy, not awkward",
      "Offer a complimentary consultation or monthly feature",
      "Keep the tone warm, not salesy",
    ],
  },
  {
    num: "05",
    icon: "🗓️",
    label: "Maintenance Reminder",
    group: "Retention",
    objective: "Increase recurring revenue and retention",
    trigger: "Based on expected treatment longevity",
    channels: "Email + Text",
    emailPrimary: false,
    content: [
      "Botox and neurotoxin: remind at 3–4 month intervals",
      "Dermal fillers: remind at 9–12 month intervals",
      "Laser hair removal: remind for maintenance sessions",
      "Morpheus8: remind for annual or bi-annual maintenance",
      "Skincare replenishment when product runs low",
    ],
  },
  {
    num: "06",
    icon: "🎂",
    label: "Birthday Campaign",
    group: "Retention",
    objective: "Strengthen relationships and encourage repeat visits",
    trigger: "Patient birthday",
    channels: "Email + Text",
    emailPrimary: false,
    content: [
      "Personalized birthday message — use their first name",
      "Exclusive birthday offer valid for a limited time",
      "Keep the tone celebratory, not transactional",
      "Direct link to book while the offer is top of mind",
    ],
  },
  {
    num: "07",
    icon: "⭐",
    label: "Review Request",
    group: "Retention",
    objective: "Increase online reviews and social proof",
    trigger: "24–48 hours after treatment",
    channels: "Email + Text",
    emailPrimary: false,
    content: [
      "Ask while the experience is still fresh",
      "Keep the message warm and genuine — not robotic",
      "Provide a direct link to your Google review page",
      "Make it one tap or one click to complete",
      "Route any concerns to an internal feedback form instead",
    ],
  },
  {
    num: "08",
    icon: "🩺",
    label: "Post-Treatment Care",
    group: "Retention",
    objective: "Improve outcomes and patient satisfaction",
    trigger: "Immediately after treatment",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Aftercare instructions specific to the treatment received",
      "Recovery timeline — what to expect day by day",
      "FAQs for the first 48–72 hours",
      "What to avoid and why",
      "Contact information for concerns or questions",
    ],
  },
  {
    num: "09",
    icon: "📅",
    label: "Abandoned Consultation",
    group: "Acquisition",
    objective: "Recover lost opportunities",
    trigger: "Consultation requested but never scheduled",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Reduce friction by answering their likely hesitations",
      "Share social proof — patient stories and reviews",
      "Remind them what the consultation includes",
      "Provide an easy, low-barrier scheduling link",
      "Offer flexibility — virtual consults if available",
    ],
  },
  {
    num: "10",
    icon: "✨",
    label: "New Treatment Launch",
    group: "Revenue",
    objective: "Drive awareness and early adoption",
    trigger: "Launch of a new service",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Teaser email 2–3 weeks before launch to build anticipation",
      "Education email: what it is, how it works, who it's for",
      "FAQ email covering candidacy, recovery, and results",
      "Launch announcement with early booking CTA",
      "Patient story or provider introduction to build credibility",
    ],
  },
  {
    num: "11",
    icon: "🌟",
    label: "Monthly Feature Campaign",
    group: "Revenue",
    objective: "Increase utilization of priority services",
    trigger: "Monthly (scheduled)",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Spotlight one treatment or service each month",
      "Educational content on the treatment and ideal candidates",
      "Before & after imagery to demonstrate results",
      "One clear, compelling call-to-action",
      "Position as a spotlight, not a sale",
    ],
  },
  {
    num: "12",
    icon: "💎",
    label: "VIP & Membership Campaign",
    group: "Revenue",
    objective: "Reward loyalty and increase lifetime value",
    trigger: "Membership enrollment or VIP segmentation",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Exclusive early access to new treatments or events",
      "Value-added offers not available to the general list",
      "Appreciation messaging — make them feel seen",
      "Invitations to member-only events or consultations",
      "Loyalty rewards and milestone recognition",
    ],
  },
  {
    num: "13",
    icon: "🎉",
    label: "Event Promotion",
    group: "Revenue",
    objective: "Maximize attendance and event sales",
    trigger: "Practice event (open house, treatment night, etc.)",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Save-the-date email 3–4 weeks before the event",
      "Details email: agenda, treatments, specials, RSVP",
      "1-week reminder with urgency and RSVP link",
      "Day-before or morning-of text reminder",
      "Post-event follow-up with any remaining offers",
    ],
  },
  {
    num: "14",
    icon: "🧴",
    label: "Retail Replenishment",
    group: "Revenue",
    objective: "Increase retail revenue and product compliance",
    trigger: "Estimated product usage timeline",
    channels: "Email + Text",
    emailPrimary: false,
    content: [
      "Notify patients when they're likely running low",
      "Make reordering easy — one-click link to purchase",
      "Remind them why the product matters for their results",
      "Pair with a complementary product recommendation",
    ],
  },
  {
    num: "15",
    icon: "🤝",
    label: "Referral Campaign",
    group: "Revenue",
    objective: "Generate qualified new patients",
    trigger: "Ongoing (triggered after positive interactions)",
    channels: "Primarily email, supported by text reminders",
    emailPrimary: true,
    content: [
      "Ask your happiest patients — time it after a great outcome",
      "Explain what the referral program offers both parties",
      "Make referring easy — a shareable link, card, or code",
      "Remind quarterly so the program stays top of mind",
      "Reward both the referrer and the new patient",
    ],
  },
];

const groups = [
  { label: "Acquisition", color: "#7aabcf", bg: "rgba(100,160,220,0.1)", border: "rgba(100,160,220,0.22)" },
  { label: "Retention", color: "#7db870", bg: "rgba(120,180,120,0.08)", border: "rgba(120,180,120,0.2)" },
  { label: "Reactivation", color: "#c8a050", bg: "rgba(200,160,80,0.08)", border: "rgba(200,160,80,0.2)" },
  { label: "Revenue", color: "#a28c75", bg: "rgba(162,140,117,0.08)", border: "rgba(162,140,117,0.2)" },
];

const groupStyle = (g: string) => groups.find((x) => x.label === g) ?? groups[3];

export default function AutomatedCampaignsPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link
            href="/members/resources/marketing"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Marketing Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Zap size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Marketing Resources · Automation
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            15 Automated Campaigns
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            Set up once. Run 24/7. These campaigns consistently generate higher retention,
            more appointments, and increased revenue — without your team manually following
            up with every single patient.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── WHY AUTOMATION ── */}
        <div
          className="rounded-2xl p-7"
          style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.22)" }}
        >
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Why automation matters</p>
          <p className="font-display text-xl md:text-2xl font-light leading-relaxed mb-4" style={{ color: "#fffdf6" }}>
            Every patient receives timely, relevant communication — without relying on your team to remember.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "🔁", label: "Higher Retention" },
              { icon: "📅", label: "More Appointments" },
              { icon: "💰", label: "Increased Revenue" },
              { icon: "⏱️", label: "Less Manual Work" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg px-4 py-3 flex items-center gap-2.5" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.15)" }}>
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs font-medium" style={{ color: "#fffdf6" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── QUICK SCAN ── */}
        <div>
          <SectionLabel label="All 15 Campaigns at a Glance" />

          {/* Group legend */}
          <div className="flex flex-wrap gap-2 mb-6">
            {groups.map((g) => (
              <span
                key={g.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: g.bg, border: `1px solid ${g.border}`, color: g.color }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: g.color }} />
                {g.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {campaigns.map((c) => {
              const g = groupStyle(c.group);
              return (
                <a
                  key={c.num}
                  href={`#campaign-${c.num}`}
                  className="rounded-xl p-4 flex flex-col gap-2 transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: g.bg, border: `1px solid ${g.border}`, textDecoration: "none" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{c.icon}</span>
                    <span className="text-xs font-medium" style={{ color: "rgba(255,253,246,0.3)" }}>{c.num}</span>
                  </div>
                  <p className="text-xs font-medium leading-snug" style={{ color: "#fffdf6" }}>{c.label}</p>
                  <span className="text-xs" style={{ color: g.color }}>{c.group}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* ── CAMPAIGN CARDS ── */}
        <div>
          <SectionLabel label="Campaign Breakdown" />
          <div className="space-y-6">
            {campaigns.map((c) => {
              const g = groupStyle(c.group);
              return (
                <div
                  id={`campaign-${c.num}`}
                  key={c.num}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: `1px solid ${g.border}` }}
                >
                  {/* Card header */}
                  <div
                    className="px-7 py-5 flex items-center justify-between gap-4"
                    style={{ background: g.bg, borderBottom: `1px solid ${g.border}` }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{c.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-medium" style={{ color: g.color }}>
                            {c.num} · {c.group}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>
                          {c.label}
                        </h3>
                      </div>
                    </div>
                    {/* Channel tags */}
                    <div className="flex-shrink-0 flex items-center gap-2 flex-wrap justify-end">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium" style={{ background: "rgba(200,160,80,0.12)", border: "1px solid rgba(200,160,80,0.28)", color: "#c8a050" }}>
                        📧 {c.emailPrimary ? "Primary" : "Supported"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium" style={{ background: "rgba(100,160,220,0.09)", border: "1px solid rgba(100,160,220,0.22)", color: "#7aabcf" }}>
                        💬 {c.emailPrimary ? "Support" : "Primary"}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-7 py-6 grid grid-cols-1 md:grid-cols-3 gap-6" style={{ background: "rgba(0,0,0,0.25)" }}>

                    {/* Objective */}
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>Objective</p>
                      <p className="text-sm font-medium leading-snug" style={{ color: "#fffdf6" }}>{c.objective}</p>
                    </div>

                    {/* Trigger */}
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>Trigger</p>
                      <div className="flex items-start gap-2">
                        <span className="text-sm flex-shrink-0" style={{ color: g.color }}>⚡</span>
                        <p className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.75)" }}>{c.trigger}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>Recommended Content</p>
                      <ul className="space-y-1.5">
                        {c.content.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: g.color }} />
                            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── IMPLEMENTATION TIPS ── */}
        <div>
          <SectionLabel label="Implementation Tips" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "👤",
                label: "Personalize every campaign",
                desc: "Use the patient's first name, treatment history, concerns, and provider name wherever possible. Generic messages get ignored.",
              },
              {
                icon: "🎯",
                label: "One clear CTA per message",
                desc: "Every email and text should ask for exactly one action. Multiple asks dilute conversion — patients do nothing when given too many options.",
              },
              {
                icon: "📊",
                label: "Segment your database",
                desc: "Don't send every campaign to everyone. Maintenance reminders go to Botox patients. Reactivation goes to 6-month inactives. Relevance drives results.",
              },
              {
                icon: "📈",
                label: "Track the right metrics",
                desc: "Open rate, click-through rate, conversion rate, appointments booked, and revenue generated. If you can't measure it, you can't improve it.",
              },
              {
                icon: "🔄",
                label: "Review and optimize quarterly",
                desc: "Automations aren't fire-and-forget forever. Review performance quarterly and update subject lines, content, and offers based on what's working.",
              },
              {
                icon: "⚡",
                label: "Start with the highest-impact five",
                desc: "If you're starting from scratch, prioritize: Welcome Series, Consultation Follow-Up, Maintenance Reminder, Review Request, and Inactive Reactivation.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5 flex items-start gap-4"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CHANNEL GUIDE ── */}
        <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
          <h2 className="font-display text-2xl font-light mb-6" style={{ color: "#fffdf6" }}>Quick Channel Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl p-5" style={{ background: "rgba(200,160,80,0.07)", border: "1px solid rgba(200,160,80,0.2)" }}>
              <p className="text-xs font-medium mb-3" style={{ color: "#c8a050" }}>📧 Email as Primary Channel</p>
              <div className="flex flex-wrap gap-1.5">
                {["Welcome Series", "Consultation Follow-Up", "Treatment Interest Drip", "Inactive Reactivation", "Post-Treatment Care", "Abandoned Consultation", "New Treatment Launch", "Monthly Feature", "VIP & Membership", "Event Promotion", "Referral Campaign"].map((n) => (
                  <span key={n} className="inline-flex text-xs px-2 py-1 rounded" style={{ background: "rgba(200,160,80,0.1)", color: "rgba(255,253,246,0.6)" }}>{n}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-5" style={{ background: "rgba(100,160,220,0.07)", border: "1px solid rgba(100,160,220,0.18)" }}>
              <p className="text-xs font-medium mb-3" style={{ color: "#7aabcf" }}>📧 + 💬 Email & Text Both Primary</p>
              <div className="flex flex-wrap gap-1.5">
                {["Maintenance Reminder", "Birthday Campaign", "Review Request", "Retail Replenishment"].map((n) => (
                  <span key={n} className="inline-flex text-xs px-2 py-1 rounded" style={{ background: "rgba(100,160,220,0.08)", color: "rgba(255,253,246,0.6)" }}>{n}</span>
                ))}
              </div>
              <p className="text-xs mt-4 leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                These campaigns rely on immediacy. Email delivers depth; text drives the action.
              </p>
            </div>
          </div>
        </div>

        {/* ── FINAL TAKEAWAY ── */}
        <div className="rounded-2xl p-8" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.18)" }}>
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>The bottom line</p>
          <p className="font-display text-xl font-light leading-relaxed" style={{ color: "#fffdf6" }}>
            A thoughtfully built automation system works around the clock.
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "rgba(255,253,246,0.6)" }}>
            Nurturing leads, educating patients, increasing retention, and generating consistent revenue —
            without requiring your team to manually follow up with every patient. Build these 15 campaigns
            and your marketing runs even when you&apos;re not.
          </p>
        </div>

      </div>
    </div>
  );
}
