import Link from "next/link";
import {
  ArrowLeft,
  Megaphone,
  Package,
  DollarSign,
  MapPin,
  Users,
  BookOpen,
  MessageSquare,
  Heart,
  Star,
  Bookmark,
  Play,
  LayoutGrid,
  Monitor,
  Clock,
  Zap,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Calendar,
  Target,
  Share2,
  Eye,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Best Practices | Aesthetic Executive",
};

// ── Data ──────────────────────────────────────────────────────────────────────

const whyGoals = [
  { icon: TrendingUp, label: "Build Trust", detail: "Every post is a trust-building touchpoint before a patient ever books." },
  { icon: BookOpen, label: "Educate", detail: "Teach patients what your treatments do and why they need them." },
  { icon: Star, label: "Establish Authority", detail: "Position your practice as the expert in your market." },
  { icon: Eye, label: "Stay Top-of-Mind", detail: "Visible practices get called first when patients are ready to book." },
  { icon: MessageSquare, label: "Generate Consultations", detail: "Convert curiosity into booked appointments." },
  { icon: Target, label: "Acquire Patients", detail: "Turn followers into paying, loyal patients." },
];

const fivePs = [
  {
    label: "Product",
    icon: Package,
    description: "What services are you offering? Before creating content, know exactly what problem each treatment solves and who it's for.",
    items: ["Botox", "Morpheus8", "Laser Hair Removal", "Weight Loss Programs", "Facials", "Skin Care"],
    questions: ["What problems does this service solve?", "Why is it different?", "Who is it for?"],
  },
  {
    label: "Price",
    icon: DollarSign,
    description: "Your pricing should align with market demand, your brand positioning, competition, and desired profitability.",
    insight: "Patients often choose providers based on trust, expertise, experience, and results — not because they are the cheapest. Avoid competing solely on price.",
    items: [],
    questions: [],
  },
  {
    label: "Place",
    icon: MapPin,
    description: "Where can patients find you? Every channel is an opportunity. Make it easy for patients to learn, contact you, schedule, and purchase.",
    items: ["Website", "Instagram", "Facebook", "TikTok", "Google Business Profile", "Email Marketing", "Events", "Referral Programs"],
    questions: [],
  },
  {
    label: "Promotion",
    icon: Megaphone,
    description: "This is how you communicate your value to the market.",
    items: ["Social media", "Email marketing", "Text marketing", "Google Ads", "Meta Ads", "Influencer collaborations", "Referral programs"],
    questions: [],
  },
  {
    label: "People",
    icon: Users,
    description: "Your team is your brand. Patients buy from people they trust. Show the humans behind your practice.",
    items: ["Providers", "Staff personalities", "Practice culture", "Ongoing education", "Behind-the-scenes moments"],
    insight: "People connect with people — not logos, not stock photos.",
    questions: [],
  },
];

const contentCategories = [
  {
    label: "Educational",
    icon: BookOpen,
    purpose: "Build trust and authority.",
    accent: "#a28c75",
    bg: "rgba(162,140,117,0.08)",
    border: "rgba(162,140,117,0.2)",
    formats: ["Treatment explanations", "Myths vs facts", "Skin care tips", "Recovery timelines", "What to expect"],
    hooks: ["Why your Botox isn't lasting", "What causes hyperpigmentation?", "Does Morpheus8 tighten skin?", "Is laser hair removal permanent?"],
  },
  {
    label: "Engaging",
    icon: MessageSquare,
    purpose: "Increase interaction.",
    accent: "#c8b3a3",
    bg: "rgba(200,179,163,0.07)",
    border: "rgba(200,179,163,0.18)",
    formats: ["Polls", "Quizzes", "This-or-that", "Q&A sessions", "Ask Me Anything"],
    hooks: ["Lip filler or lip flip?", "Morpheus8 or Microneedling?", "What's your biggest skin concern?"],
  },
  {
    label: "Inspiring",
    icon: Heart,
    purpose: "Create emotional connection.",
    accent: "#d4c5b8",
    bg: "rgba(212,197,184,0.07)",
    border: "rgba(212,197,184,0.18)",
    formats: ["Patient journeys", "Testimonials", "Before-and-afters", "Success stories"],
    hooks: ["Patient lost 80 pounds — here's what she did next.", "Real Morpheus8 transformation.", "Her skin at 52 vs 42."],
  },
  {
    label: "Entertaining",
    icon: Star,
    purpose: "Increase reach.",
    accent: "#b89e8a",
    bg: "rgba(184,158,138,0.07)",
    border: "rgba(184,158,138,0.18)",
    formats: ["Trends", "Memes", "Team videos", "Relatable humor"],
    hooks: ["Things med spa providers hear every day.", "What patients think happens during Botox.", "POV: you just discovered Morpheus8."],
  },
  {
    label: "Promotional",
    icon: Bookmark,
    purpose: "Drive bookings.",
    accent: "#a28c75",
    bg: "rgba(162,140,117,0.08)",
    border: "rgba(162,140,117,0.2)",
    formats: ["Special offers", "Events", "Product launches", "Membership enrollment"],
    hooks: ["Summer Laser Hair Removal Special", "VIP Event Registration", "Membership Enrollment — spots limited"],
  },
];

const contentFormats = [
  {
    label: "Reels",
    badge: "Highest Reach",
    badgeBg: "rgba(34,197,94,0.1)",
    badgeBorder: "rgba(34,197,94,0.25)",
    badgeColor: "rgba(34,197,94,0.9)",
    icon: Play,
    bestFor: ["Education", "Trends", "Before-and-afters", "FAQs"],
    examples: ["Treatment walkthroughs", "Day in the life", "Provider tips", "Patient transformations"],
    goal: "Reach new audiences.",
  },
  {
    label: "Carousels",
    badge: "Saves & Shares",
    badgeBg: "rgba(162,140,117,0.1)",
    badgeBorder: "rgba(162,140,117,0.25)",
    badgeColor: "#a28c75",
    icon: LayoutGrid,
    bestFor: ["Step-by-step education", "Myths vs facts", "Treatment breakdowns"],
    examples: ["5 Things To Know Before Botox", "Morpheus8 Recovery Timeline", "Laser Hair Removal FAQ"],
    goal: "Increase saves and shares.",
  },
  {
    label: "Single Images",
    badge: "Brand Reinforcement",
    badgeBg: "rgba(200,179,163,0.1)",
    badgeBorder: "rgba(200,179,163,0.2)",
    badgeColor: "#c8b3a3",
    icon: Monitor,
    bestFor: ["Announcements", "Quotes", "Promotions", "Events"],
    examples: ["New treatment announcement", "Team quote", "Monthly special"],
    goal: "Reinforce branding.",
  },
  {
    label: "Stories",
    badge: "Daily Touchpoint",
    badgeBg: "rgba(184,158,138,0.1)",
    badgeBorder: "rgba(184,158,138,0.2)",
    badgeColor: "#b89e8a",
    icon: Clock,
    bestFor: ["Daily engagement", "Polls", "Behind-the-scenes", "Last-minute openings"],
    examples: ["Staff poll", "Behind-the-scenes treatment prep", "Quick provider tip"],
    goal: "Stay top-of-mind.",
  },
];

const mistakes = [
  {
    label: "Posting Without a Clear Offer",
    detail: "People need a reason to take action. Every post should point toward something — a consultation, a result, an idea.",
  },
  {
    label: "No Call-to-Action",
    detail: "Never assume people know what to do next. Tell them exactly: comment, DM, book, save, or share.",
  },
  {
    label: "Only Posting Treatments",
    detail: "Patients buy from brands they trust. Mix in team content, educational content, and patient stories — not just service promotions.",
  },
  {
    label: "No Follow-Up System",
    detail: "If someone comments, messages, or clicks — you need a process. Use CRM automations, text workflows, and lead nurturing sequences.",
  },
  {
    label: "Inconsistency",
    detail: "Posting randomly creates inconsistent results. Consistency builds authority. Show up on schedule, every week, without exception.",
  },
];

const schedule = [
  { label: "3–5 Reels", cadence: "Per week", detail: "Educational and engaging. Your primary reach driver for new audiences." },
  { label: "1–2 Carousels", cadence: "Per week", detail: "Detailed educational content. Drives saves and shares — the highest-value signals." },
  { label: "Daily Stories", cadence: "Every day", detail: "Behind-the-scenes, polls, patient interactions. The engine that keeps your practice visible." },
  { label: "1 Promotional Post", cadence: "Per week", detail: "Offer, event, consultation, membership, or special. One clear call-to-action." },
];

const contentIdeas: Record<string, string[]> = {
  Educational: [
    "Why everyone's talking about microneedling",
    "Botox vs filler — what's the difference?",
    "What causes under-eye circles?",
    "The truth about collagen loss",
    "What to expect after laser hair removal",
  ],
  Results: [
    "Before-and-after transformations",
    "Patient success stories",
    "Treatment journey posts",
  ],
  Team: [
    "Meet our providers",
    "A day in the clinic",
    "Team favorites",
    "Employee spotlights",
  ],
  Products: [
    "Product of the month",
    "Morning skincare routine",
    "Active ingredients explained",
  ],
  Promotional: [
    "Membership benefits",
    "Seasonal specials",
    "Event invitations",
    "Referral programs",
  ],
};

const prePostChecklist = [
  "Does this provide value to our audience?",
  "Is there a strong hook in the first line or frame?",
  "Is it easy to understand at a glance?",
  "Does it build trust in our practice?",
  "Is there a clear call-to-action?",
  "Does it align with our brand voice and aesthetic?",
  "Does it support a specific business goal?",
];

const finalSteps = [
  "Educate patients before they ever book",
  "Build the trust that precedes every consultation",
  "Establish clinical expertise in your market",
  "Stay visible between patient visits",
  "Create conversations that lead to bookings",
  "Generate consultations from organic content",
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SocialMediaPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(162,140,117,0.12)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.75) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-14">
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
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Share2 size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Marketing Resources
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Social Media Best Practices
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            A practical guide to consistent growth, brand awareness, and patient acquisition
            for aesthetic practices — covering strategy, content frameworks, formats, and the
            mistakes that hold most practices back.
          </p>

          {/* Tool CTA */}
          <div className="mt-8">
            <a
              href="/tools/social-media-planner.html"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{
                background: "rgba(162,140,117,0.14)",
                border: "1px solid rgba(162,140,117,0.3)",
                color: "#a28c75",
              }}
            >
              <Share2 size={15} />
              <span className="text-sm font-medium tracking-wide">Open Social Media Planner</span>
              <ExternalLink size={12} style={{ opacity: 0.6 }} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── Why Social Media ── */}
        <section>
          <div className="flex items-center gap-4 mb-4">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              The Goal
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-2xl border p-8 md:p-10 mb-8"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <p className="font-display text-2xl font-light mb-3" style={{ color: "#fffdf6" }}>
              Social media is one of the most powerful patient acquisition channels available to aesthetic practices.
            </p>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
              The goal is not to get likes or followers. The goal is to build a patient acquisition
              engine. The most successful practices understand that social media is part of their overall
              marketing ecosystem — not a standalone strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyGoals.map((goal) => (
              <div
                key={goal.label}
                className="rounded-xl border p-5 flex items-start gap-4"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <goal.icon size={15} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <p className="font-display text-base font-light mb-1" style={{ color: "#fffdf6" }}>
                    {goal.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                    {goal.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── The 5 P's ── */}
        <section>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Marketing Foundation
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light mb-3" style={{ color: "#fffdf6" }}>
            The 5 P&rsquo;s
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            Before creating content, ensure your marketing strategy is built on this foundation.
            Each P is a lens for understanding and communicating your practice.
          </p>

          <div className="space-y-4">
            {fivePs.map((p, idx) => (
              <div
                key={p.label}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(162,140,117,0.13)" }}
              >
                <div
                  className="flex items-center gap-4 px-6 py-4 border-b"
                  style={{
                    background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                    borderColor: "rgba(162,140,117,0.14)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}
                  >
                    <p.icon size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="font-display text-3xl font-light leading-none"
                      style={{ color: "rgba(162,140,117,0.2)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>
                      {p.label}
                    </h3>
                  </div>
                </div>

                <div
                  className="px-6 py-5"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.55)" }}>
                        {p.description}
                      </p>
                      {"insight" in p && p.insight && (
                        <div
                          className="rounded-lg p-3"
                          style={{
                            background: "rgba(162,140,117,0.06)",
                            border: "1px solid rgba(162,140,117,0.12)",
                            borderLeft: "3px solid rgba(162,140,117,0.3)",
                          }}
                        >
                          <p className="text-xs leading-relaxed italic" style={{ color: "rgba(255,253,246,0.45)" }}>
                            {p.insight}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-4">
                      {p.items.length > 0 && (
                        <div>
                          <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                            Examples
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {p.items.map((item) => (
                              <span
                                key={item}
                                className="text-xs px-2.5 py-1 rounded-full"
                                style={{
                                  background: "rgba(162,140,117,0.08)",
                                  border: "1px solid rgba(162,140,117,0.15)",
                                  color: "rgba(162,140,117,0.8)",
                                }}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {p.questions.length > 0 && (
                        <div>
                          <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                            Questions to Ask
                          </p>
                          <ul className="space-y-1.5">
                            {p.questions.map((q) => (
                              <li
                                key={q}
                                className="text-xs flex items-start gap-2"
                                style={{ color: "rgba(255,253,246,0.45)" }}
                              >
                                <span style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }}>·</span>
                                {q}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Push vs Pull ── */}
        <section>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Marketing Types
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light mb-3" style={{ color: "#fffdf6" }}>
            Push vs Pull Marketing
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            The best practices use both — but in the right ratio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {/* Push */}
            <div
              className="rounded-xl border p-6"
              style={{
                background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
                borderColor: "rgba(162,140,117,0.18)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}
                >
                  <Zap size={14} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <p className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>Push Marketing</p>
                  <p className="text-xs" style={{ color: "rgba(162,140,117,0.7)" }}>&ldquo;Buy This Now&rdquo;</p>
                </div>
              </div>
              <p className="text-xs mb-4" style={{ color: "rgba(255,253,246,0.4)" }}>
                Goal: Generate immediate action.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Promotional posts", "Special offers", "Sales campaigns", "Event invitations", "Text campaigns"].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(162,140,117,0.08)",
                      border: "1px solid rgba(162,140,117,0.15)",
                      color: "rgba(162,140,117,0.75)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Pull */}
            <div
              className="rounded-xl border p-6"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.12)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <BookOpen size={14} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <p className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>Pull Marketing</p>
                  <p className="text-xs" style={{ color: "rgba(162,140,117,0.7)" }}>&ldquo;Discover With Us&rdquo;</p>
                </div>
              </div>
              <p className="text-xs mb-4" style={{ color: "rgba(255,253,246,0.4)" }}>
                Goal: Build long-term trust and authority.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Educational reels", "Blogs", "FAQs", "Treatment explanations", "Before-and-afters", "Patient stories"].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(162,140,117,0.06)",
                      border: "1px solid rgba(162,140,117,0.12)",
                      color: "rgba(162,140,117,0.65)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 80/20 balance */}
          <div
            className="rounded-xl border p-6"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
              borderLeft: "3px solid rgba(162,140,117,0.45)",
            }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
              Recommended Balance
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Visual bar */}
              <div className="flex-1">
                <div className="flex rounded-lg overflow-hidden h-8 mb-2">
                  <div
                    className="flex items-center justify-center text-xs font-medium"
                    style={{ width: "80%", background: "rgba(162,140,117,0.25)", color: "rgba(162,140,117,0.9)" }}
                  >
                    80% Pull
                  </div>
                  <div
                    className="flex items-center justify-center text-xs font-medium"
                    style={{ width: "20%", background: "rgba(162,140,117,0.45)", color: "#fffdf6" }}
                  >
                    20%
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.35)" }}>
                    Education · Trust-building · Storytelling · Authority
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.35)" }}>Push</p>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mt-4" style={{ color: "rgba(255,253,246,0.45)" }}>
              Practices that constantly sell often experience lower engagement and weaker brand loyalty.
              Lead with value — the bookings follow.
            </p>
          </div>
        </section>

        {/* ── Five Content Categories ── */}
        <section>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Content Strategy
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light mb-3" style={{ color: "#fffdf6" }}>
            Five Content Categories
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            Every practice needs content across all five categories. An imbalanced content mix
            is one of the most common reasons practices plateau.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {contentCategories.map((cat, idx) => (
              <div
                key={cat.label}
                className="rounded-xl border overflow-hidden flex flex-col"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="flex items-center gap-3 px-5 py-4 border-b"
                  style={{
                    background: cat.bg,
                    borderColor: cat.border,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,0,0,0.12)", border: `1px solid ${cat.border}` }}
                  >
                    <cat.icon size={14} style={{ color: cat.accent }} />
                  </div>
                  <div>
                    <p className="font-display text-base font-light" style={{ color: "#fffdf6" }}>
                      {cat.label}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {cat.purpose}
                    </p>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                      Formats
                    </p>
                    <ul className="space-y-1">
                      {cat.formats.map((f) => (
                        <li key={f} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                          <span style={{ color: "rgba(162,140,117,0.45)" }}>·</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                      Example Topics
                    </p>
                    <ul className="space-y-1">
                      {cat.hooks.map((h) => (
                        <li
                          key={h}
                          className="text-xs leading-snug px-2.5 py-1.5 rounded-lg"
                          style={{
                            background: "rgba(162,140,117,0.05)",
                            border: "1px solid rgba(162,140,117,0.08)",
                            color: "rgba(255,253,246,0.5)",
                            fontStyle: "italic",
                          }}
                        >
                          &ldquo;{h}&rdquo;
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* 60/30/10 rule card */}
            <div
              className="rounded-xl border p-5 flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.2)",
              }}
            >
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
                  The 60 / 30 / 10 Rule
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.4)" }}>
                  A simple content distribution strategy. Most practices do the opposite.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { pct: "60%", label: "Educational", sub: "Teach. Build authority." },
                  { pct: "30%", label: "Relationship Building", sub: "Entertain and connect." },
                  { pct: "10%", label: "Promotional", sub: "Sell." },
                ].map((item) => (
                  <div key={item.pct} className="flex items-center gap-3">
                    <span
                      className="text-lg font-light font-display flex-shrink-0 w-12"
                      style={{ color: "#a28c75" }}
                    >
                      {item.pct}
                    </span>
                    <div>
                      <p className="text-sm leading-none" style={{ color: "#fffdf6" }}>{item.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.35)" }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Content Formats ── */}
        <section>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Content Formats
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light mb-8" style={{ color: "#fffdf6" }}>
            Best Content Formats
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {contentFormats.map((fmt) => (
              <div
                key={fmt.label}
                className="rounded-xl border overflow-hidden"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="flex items-center justify-between gap-4 px-5 py-4 border-b"
                  style={{
                    background: "rgba(47,4,16,0.5)",
                    borderColor: "rgba(162,140,117,0.12)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                    >
                      <fmt.icon size={14} style={{ color: "#a28c75" }} />
                    </div>
                    <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                      {fmt.label}
                    </h3>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{
                      background: fmt.badgeBg,
                      border: `1px solid ${fmt.badgeBorder}`,
                      color: fmt.badgeColor,
                    }}
                  >
                    {fmt.badge}
                  </span>
                </div>

                <div className="p-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                      Best For
                    </p>
                    <ul className="space-y-1.5">
                      {fmt.bestFor.map((b) => (
                        <li key={b} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                          <span style={{ color: "rgba(162,140,117,0.4)" }}>·</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                      Examples
                    </p>
                    <ul className="space-y-1.5">
                      {fmt.examples.map((e) => (
                        <li key={e} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                          <span style={{ color: "rgba(162,140,117,0.4)" }}>·</span> {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="col-span-2 pt-3 border-t"
                    style={{ borderColor: "rgba(162,140,117,0.1)" }}
                  >
                    <p className="text-xs" style={{ color: "rgba(162,140,117,0.65)" }}>
                      Goal: {fmt.goal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Anatomy of a High-Performing Post ── */}
        <section>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Post Structure
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light mb-3" style={{ color: "#fffdf6" }}>
            Anatomy of a High-Performing Post
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            Every post — Reel, carousel, or caption — should include these three elements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Hook */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
                borderColor: "rgba(162,140,117,0.2)",
              }}
            >
              <div
                className="px-5 py-4 border-b flex items-center gap-3"
                style={{ borderColor: "rgba(162,140,117,0.15)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}
                >
                  <Zap size={14} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.6)" }}>Step 01</p>
                  <p className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>Hook</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Capture attention immediately. You have one line.
                </p>
                <div className="space-y-2">
                  {[
                    "Most people are getting this treatment at the wrong time...",
                    "This is why your Botox isn't lasting...",
                    "Nobody tells you this before lip filler...",
                    "If you're in your 30s and not doing this yet...",
                  ].map((h) => (
                    <p
                      key={h}
                      className="text-xs px-3 py-2 rounded-lg italic"
                      style={{
                        background: "rgba(162,140,117,0.06)",
                        border: "1px solid rgba(162,140,117,0.1)",
                        color: "rgba(255,253,246,0.5)",
                      }}
                    >
                      &ldquo;{h}&rdquo;
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Value */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.12)",
              }}
            >
              <div
                className="px-5 py-4 border-b flex items-center gap-3"
                style={{ borderColor: "rgba(162,140,117,0.1)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.08)", border: "1px solid rgba(162,140,117,0.15)" }}
                >
                  <Star size={14} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>Step 02</p>
                  <p className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>Value</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Teach something useful. Make the audience better for having seen your post.
                </p>
                <div className="space-y-2">
                  {[
                    { q: "Why?", a: "Give them the context" },
                    { q: "How?", a: "Give them the insight" },
                    { q: "What next?", a: "Give them the action" },
                  ].map((item) => (
                    <div
                      key={item.q}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg"
                      style={{
                        background: "rgba(162,140,117,0.05)",
                        border: "1px solid rgba(162,140,117,0.09)",
                      }}
                    >
                      <span className="text-xs font-medium flex-shrink-0" style={{ color: "#a28c75" }}>{item.q}</span>
                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>{item.a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
                borderColor: "rgba(162,140,117,0.2)",
              }}
            >
              <div
                className="px-5 py-4 border-b flex items-center gap-3"
                style={{ borderColor: "rgba(162,140,117,0.15)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}
                >
                  <Target size={14} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.6)" }}>Step 03</p>
                  <p className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>Call-to-Action</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Tell people exactly what to do next. Never leave them guessing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Comment \"INFO\"",
                    "Send us a DM",
                    "Book a consultation",
                    "Save this post",
                    "Share with a friend",
                    "Follow for more tips",
                  ].map((cta) => (
                    <span
                      key={cta}
                      className="text-xs px-2.5 py-1.5 rounded-lg"
                      style={{
                        background: "rgba(162,140,117,0.09)",
                        border: "1px solid rgba(162,140,117,0.15)",
                        color: "rgba(162,140,117,0.8)",
                      }}
                    >
                      {cta}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Common Mistakes ── */}
        <section>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              What to Avoid
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light mb-8" style={{ color: "#fffdf6" }}>
            Common Social Media Mistakes
          </h2>

          <div className="space-y-3">
            {mistakes.map((m, idx) => (
              <div
                key={m.label}
                className="rounded-xl border p-5 flex items-start gap-5"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.1)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.18)",
                  }}
                >
                  <AlertCircle size={15} style={{ color: "rgba(239,68,68,0.7)" }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs tracking-[0.2em]" style={{ color: "rgba(162,140,117,0.4)" }}>
                      Mistake {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-base font-light" style={{ color: "#fffdf6" }}>
                      {m.label}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Posting Schedule ── */}
        <section>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Consistency Framework
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light mb-8" style={{ color: "#fffdf6" }}>
            Recommended Weekly Posting Schedule
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {schedule.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border p-5 flex items-start gap-4"
                style={{
                  background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.16)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Calendar size={14} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>{item.label}</p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(162,140,117,0.1)",
                        border: "1px solid rgba(162,140,117,0.2)",
                        color: "rgba(162,140,117,0.75)",
                      }}
                    >
                      {item.cadence}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Content Ideas ── */}
        <section>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Content Bank
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light mb-3" style={{ color: "#fffdf6" }}>
            Content Ideas for Med Spas
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            Use these when you&apos;re stuck. Each one can be adapted into a Reel, carousel, or Story.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(contentIdeas).map(([category, ideas]) => (
              <div
                key={category}
                className="rounded-xl border p-5"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.11)",
                }}
              >
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-4 pb-3 border-b"
                  style={{
                    color: "#a28c75",
                    borderColor: "rgba(162,140,117,0.12)",
                  }}
                >
                  {category}
                </p>
                <ul className="space-y-2">
                  {ideas.map((idea) => (
                    <li
                      key={idea}
                      className="flex items-start gap-2.5 text-sm leading-snug"
                      style={{ color: "rgba(255,253,246,0.5)" }}
                    >
                      <span style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0, marginTop: 2 }}>·</span>
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pre-Post Checklist ── */}
        <section>
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Before You Post
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light mb-8" style={{ color: "#fffdf6" }}>
            Social Media Success Checklist
          </h2>

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div
              className="px-6 py-4 border-b flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
                borderColor: "rgba(162,140,117,0.14)",
              }}
            >
              <RefreshCw size={15} style={{ color: "#a28c75" }} />
              <p className="font-display text-base font-light" style={{ color: "#fffdf6" }}>
                Run through this before every post
              </p>
            </div>
            <div
              style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
            >
              {prePostChecklist.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 px-6 py-4"
                  style={{
                    borderBottom: i < prePostChecklist.length - 1 ? "1px solid rgba(162,140,117,0.07)" : undefined,
                  }}
                >
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(162,140,117,0.08)",
                      border: "1px solid rgba(162,140,117,0.2)",
                    }}
                  >
                    <CheckCircle size={12} style={{ color: "rgba(162,140,117,0.6)" }} />
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,253,246,0.6)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final Takeaway ── */}
        <section>
          <div
            className="rounded-2xl border p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.22)",
            }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(162,140,117,0.6)" }}>
              The Bottom Line
            </p>
            <h2 className="font-display text-3xl font-light mb-4" style={{ color: "#fffdf6" }}>
              The most successful practices don&apos;t use social media to sell treatments.
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
              When you consistently provide value, patients begin to view your practice as the expert —
              and bookings naturally follow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {finalSteps.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(162,140,117,0.06)",
                    border: "1px solid rgba(162,140,117,0.12)",
                  }}
                >
                  <span
                    className="text-xs font-light flex-shrink-0"
                    style={{ color: "rgba(162,140,117,0.5)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Back nav ── */}
        <div className="pt-4">
          <Link
            href="/members/resources/marketing"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            <ArrowLeft size={12} />
            Back to Marketing Resources
          </Link>
        </div>

      </div>
    </div>
  );
}
