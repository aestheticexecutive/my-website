import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Headphones,
  BookOpen,
  PenLine,
  Zap,
  ExternalLink,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12-Week Leadership Development | Aesthetic Executive",
};

/* ─── Types ─────────────────────────────────────────────────────── */
type ResourceType = "watch" | "listen" | "read";
type ActionType = "reflect" | "apply";

type Resource = {
  type: ResourceType;
  source: string;
  title: string;
  author?: string;
  note?: string;
  link?: string;
  linkLabel?: string;
};

type Week = {
  week: number;
  title: string;
  tags: string[];
  resources: Resource[];
  action: { type: ActionType; prompt: string };
};

/* ─── Resource styling ──────────────────────────────────────────── */
const resourceMeta: Record<ResourceType, { icon: React.ComponentType<{ size: number; style?: React.CSSProperties }>; label: string; color: string; bg: string; border: string }> = {
  watch:  { icon: Play,       label: "Watch",  color: "#7eb8f0", bg: "rgba(126,184,240,0.07)", border: "rgba(126,184,240,0.18)" },
  listen: { icon: Headphones, label: "Listen", color: "#b8a0e8", bg: "rgba(184,160,232,0.07)", border: "rgba(184,160,232,0.18)" },
  read:   { icon: BookOpen,   label: "Read",   color: "#a28c75", bg: "rgba(162,140,117,0.07)", border: "rgba(162,140,117,0.18)" },
};

const actionMeta: Record<ActionType, { icon: React.ComponentType<{ size: number; style?: React.CSSProperties }>; label: string; color: string; bg: string; border: string }> = {
  reflect: { icon: PenLine, label: "Reflect", color: "#8fc9a8", bg: "rgba(143,201,168,0.06)", border: "rgba(143,201,168,0.14)" },
  apply:   { icon: Zap,     label: "Apply",   color: "#d4a853", bg: "rgba(212,168,83,0.06)",  border: "rgba(212,168,83,0.14)"  },
};

const journalPrompts = [
  "What did I learn this week?",
  "How did I apply it?",
  "What challenged me?",
  "What insight do I want to carry forward?",
];

/* ─── Course data ────────────────────────────────────────────────── */
const weeks: Week[] = [
  {
    week: 1,
    title: "Define Your Leadership Philosophy",
    tags: ["Watch", "Read", "Reflect"],
    resources: [
      {
        type: "watch",
        source: "TED Talk",
        title: 'How Great Leaders Inspire Action',
        author: "Simon Sinek",
        note: 'The famous "Start With Why" talk — 18 min',
        link: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action",
        linkLabel: "Watch on TED",
      },
      {
        type: "read",
        source: "Book",
        title: "Start With Why",
        author: "Simon Sinek",
        note: "Introduction + Chapter 1",
        link: "https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447",
        linkLabel: "Find on Amazon",
      },
    ],
    action: {
      type: "reflect",
      prompt: 'Write your personal leadership "why" and how it influences your daily actions as a practice owner.',
    },
  },
  {
    week: 2,
    title: "Leading with Courage and Vulnerability",
    tags: ["Listen", "Read", "Reflect"],
    resources: [
      {
        type: "listen",
        source: "Dare to Lead Podcast",
        title: "Brené with Dr. Sarah Lewis on Creative Resilience",
        author: "Brené Brown",
        link: "https://brenebrown.com/podcast/brene-with-dr-sarah-lewis-on-creative-resilience/",
        linkLabel: "Listen to Episode",
      },
      {
        type: "read",
        source: "Book",
        title: "Dare to Lead",
        author: "Brené Brown",
        note: "Chapters 1–2",
        link: "https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520",
        linkLabel: "Find on Amazon",
      },
    ],
    action: {
      type: "reflect",
      prompt: "Identify one area where showing more vulnerability — with your team or a direct report — could build trust or strengthen the relationship.",
    },
  },
  {
    week: 3,
    title: "Emotional Intelligence in Leadership",
    tags: ["Listen", "Read", "Apply"],
    resources: [
      {
        type: "listen",
        source: "HBR IdeaCast",
        title: "4 Business Ideas That Changed the World: Emotional Intelligence",
        note: "Search episode title on the HBR IdeaCast feed",
        link: "https://hbr.org/podcast/ideacast",
        linkLabel: "Browse HBR IdeaCast",
      },
      {
        type: "read",
        source: "Book + Article",
        title: 'Dare to Lead (Ch. 3) + "What Makes a Leader?"',
        author: "Brené Brown + Daniel Goleman",
        note: "Read Chapter 3 of Dare to Lead, then Goleman's foundational HBR article on emotional intelligence",
        link: "https://hbr.org/2004/01/what-makes-a-leader",
        linkLabel: "Read Goleman Article on HBR",
      },
    ],
    action: {
      type: "apply",
      prompt: "In one charged or difficult conversation this week, consciously pause before responding. Notice your emotional state and choose your reaction rather than reacting automatically.",
    },
  },
  {
    week: 4,
    title: "Building High-Performing Teams",
    tags: ["Listen", "Read", "Reflect"],
    resources: [
      {
        type: "listen",
        source: "EntreLeadership Podcast",
        title: "Patrick Lencioni on the Ideal Team Player",
        note: "Search the episode title on the EntreLeadership feed",
        link: "https://www.ramseysolutions.com/business/the-entreleadership-podcast",
        linkLabel: "Browse EntreLeadership",
      },
      {
        type: "read",
        source: "Book",
        title: "The Advantage",
        author: "Patrick Lencioni",
        note: "Chapters 1–3",
        link: "https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0470941529",
        linkLabel: "Find on Amazon",
      },
    ],
    action: {
      type: "reflect",
      prompt: "Honestly assess the current levels of trust and collaboration on your team. Where are the gaps, and what is contributing to them?",
    },
  },
  {
    week: 5,
    title: "Radical Candor and Difficult Conversations",
    tags: ["Listen", "Read", "Apply"],
    resources: [
      {
        type: "listen",
        source: "Craig Groeschel Leadership Podcast",
        title: "Radical Candor with Kim Scott",
        note: "Search the episode title on the podcast feed",
        link: "https://www.life.church/leadershippodcast/",
        linkLabel: "Browse Podcast",
      },
      {
        type: "read",
        source: "Book",
        title: "Radical Candor",
        author: "Kim Scott",
        note: "Chapters 1–3",
        link: "https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375",
        linkLabel: "Find on Amazon",
      },
    ],
    action: {
      type: "apply",
      prompt: "Identify one person on your team who needs honest, caring feedback you have been avoiding. Deliver it this week — care personally, challenge directly.",
    },
  },
  {
    week: 6,
    title: "Midpoint Reflection and Catch-Up",
    tags: ["Reflect", "Optional"],
    resources: [
      {
        type: "read",
        source: "HBR",
        title: "Browse an article related to your current leadership challenge",
        note: "This is an open week — choose what is most relevant to where you are right now",
        link: "https://hbr.org/topic/leadership",
        linkLabel: "Browse HBR Leadership",
      },
    ],
    action: {
      type: "reflect",
      prompt: "Review your journal entries from weeks 1–5. What patterns do you notice? What has changed in how you lead? What still needs work? Use this week to catch up on any unfinished reading.",
    },
  },
  {
    week: 7,
    title: "Empowerment and Decentralized Leadership",
    tags: ["Watch", "Read", "Apply"],
    resources: [
      {
        type: "watch",
        source: "YouTube — Leadership Nudge Series",
        title: "Leadership Nudge Videos",
        author: "L. David Marquet",
        note: "Short, practical videos (2–5 min each) — watch 3 to 5 that resonate",
        link: "https://www.youtube.com/@davidmarquet",
        linkLabel: "Watch on YouTube",
      },
      {
        type: "read",
        source: "Book",
        title: "Turn the Ship Around!",
        author: "L. David Marquet",
        note: "Chapters 1–4",
        link: "https://www.amazon.com/Turn-Ship-Around-Turning-Followers/dp/1591846404",
        linkLabel: "Find on Amazon",
      },
    ],
    action: {
      type: "apply",
      prompt: "This week, fully delegate one decision you would normally make yourself. Resist the urge to rescue it. Observe the process and outcome without intervening.",
    },
  },
  {
    week: 8,
    title: "Multiplying Talent",
    tags: ["Listen", "Read", "Reflect"],
    resources: [
      {
        type: "listen",
        source: "Craig Groeschel Leadership Podcast",
        title: "Are You an Accidental Diminisher?",
        note: "Search the episode title on the podcast feed",
        link: "https://www.life.church/leadershippodcast/",
        linkLabel: "Browse Podcast",
      },
      {
        type: "read",
        source: "Book",
        title: "Multipliers",
        author: "Liz Wiseman",
        note: "Introduction through Chapter 3",
        link: "https://www.amazon.com/Multipliers-Revised-Updated-Leaders-Everyone/dp/0062699172",
        linkLabel: "Find on Amazon",
      },
    ],
    action: {
      type: "reflect",
      prompt: "Be honest: are you a multiplier or a diminisher right now? Identify 1–2 specific habits that are shrinking the people around you — and name one you will change this month.",
    },
  },
  {
    week: 9,
    title: "Hiring and Culture Fit",
    tags: ["Listen", "Read", "Apply"],
    resources: [
      {
        type: "listen",
        source: "EntreLeadership Podcast",
        title: "The Ideal Team Player",
        author: "Patrick Lencioni",
        note: "Search the episode title on the podcast feed",
        link: "https://www.ramseysolutions.com/business/the-entreleadership-podcast",
        linkLabel: "Browse EntreLeadership",
      },
      {
        type: "read",
        source: "Book",
        title: "The Ideal Team Player",
        author: "Patrick Lencioni",
        link: "https://www.amazon.com/Ideal-Team-Player-Recognize-Cultivate/dp/1119209595",
        linkLabel: "Find on Amazon",
      },
    ],
    action: {
      type: "apply",
      prompt: "Audit your current hiring process. At which steps is culture fit actually being assessed — and where is it being ignored? Identify one concrete change to make.",
    },
  },
  {
    week: 10,
    title: "Leading Through Change",
    tags: ["Listen", "Read", "Reflect"],
    resources: [
      {
        type: "listen",
        source: "HBR IdeaCast",
        title: "Leading in Times of Crisis",
        note: "Search the episode title on the HBR IdeaCast feed",
        link: "https://hbr.org/podcast/ideacast",
        linkLabel: "Browse HBR IdeaCast",
      },
      {
        type: "read",
        source: "HBR",
        title: "Managing Change — browse for an article matching your current challenge",
        note: "Choose an article that speaks directly to a change you are navigating right now",
        link: "https://hbr.org/topic/change-management",
        linkLabel: "Browse HBR on Change",
      },
    ],
    action: {
      type: "reflect",
      prompt: "What kind of change leader are you currently? Do you over-communicate or under-communicate during transitions? What do you want to improve before you lead the next one?",
    },
  },
  {
    week: 11,
    title: "Accountability with Grace",
    tags: ["Listen", "Read", "Apply"],
    resources: [
      {
        type: "listen",
        source: "Craig Groeschel Leadership Podcast",
        title: "Creating Accountability in the Workplace",
        note: "Search the episode title on the podcast feed",
        link: "https://www.life.church/leadershippodcast/",
        linkLabel: "Browse Podcast",
      },
      {
        type: "read",
        source: "Book",
        title: "Radical Candor",
        author: "Kim Scott",
        note: "Chapters 4–6 (continued from Week 5)",
        link: "https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375",
        linkLabel: "Find on Amazon",
      },
    ],
    action: {
      type: "apply",
      prompt: "Design one system or recurring ritual that makes accountability on your team visible, specific, and consistent — without making it punitive or fear-based.",
    },
  },
  {
    week: 12,
    title: "Define Your Leadership Legacy",
    tags: ["Listen", "Read", "Reflect"],
    resources: [
      {
        type: "listen",
        source: "Dare to Lead Podcast",
        title: "Brené with President Barack Obama",
        author: "Brené Brown",
        link: "https://brenebrown.com/podcast/brene-with-president-barack-obama/",
        linkLabel: "Listen to Episode",
      },
      {
        type: "read",
        source: "Book",
        title: "Leaders Eat Last",
        author: "Simon Sinek",
        note: "Or the final chapters of Dare to Lead — your choice",
        link: "https://www.amazon.com/Leaders-Eat-Last-Together-Others/dp/1591848016",
        linkLabel: "Find on Amazon",
      },
    ],
    action: {
      type: "reflect",
      prompt: "Ten years from now, what do you want your team members to say about what it was like to work with you? Write your leadership legacy statement — then name one thing you need to start doing differently today.",
    },
  },
];

const books = [
  { title: "Start With Why",      author: "Simon Sinek",       usedWeeks: [1],       link: "https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447" },
  { title: "Dare to Lead",        author: "Brené Brown",       usedWeeks: [2, 3, 12], link: "https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520" },
  { title: "The Advantage",       author: "Patrick Lencioni",  usedWeeks: [4, 10],   link: "https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0470941529" },
  { title: "Radical Candor",      author: "Kim Scott",         usedWeeks: [5, 11],   link: "https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375" },
  { title: "Turn the Ship Around!", author: "L. David Marquet", usedWeeks: [7],      link: "https://www.amazon.com/Turn-Ship-Around-Turning-Followers/dp/1591846404" },
  { title: "Multipliers",         author: "Liz Wiseman",       usedWeeks: [8],       link: "https://www.amazon.com/Multipliers-Revised-Updated-Leaders-Everyone/dp/0062699172" },
  { title: "The Ideal Team Player", author: "Patrick Lencioni", usedWeeks: [9],      link: "https://www.amazon.com/Ideal-Team-Player-Recognize-Cultivate/dp/1119209595" },
  { title: "Leaders Eat Last",    author: "Simon Sinek",       usedWeeks: [12],      link: "https://www.amazon.com/Leaders-Eat-Last-Together-Others/dp/1591848016" },
];

/* ─── Page ───────────────────────────────────────────────────────── */
export default function LeadershipCoursePage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* Accordion CSS */}
      <style>{`
        details.week-card > summary { list-style: none; }
        details.week-card > summary::-webkit-details-marker { display: none; }
        details.week-card > summary::marker { display: none; }
        details.week-card .wk-chevron { transition: transform 0.25s ease; }
        details.week-card[open] .wk-chevron { transform: rotate(180deg); }
        details.week-card[open] > summary { border-bottom: 1px solid rgba(162,140,117,0.1); }
      `}</style>

      {/* Hero */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link
            href="/members/resources/staff"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} /> Staff Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <GraduationCap size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Leadership Program
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            12-Week Leadership Development
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            A self-paced curriculum built around the best books, podcasts, and ideas in modern leadership — with weekly reflections and actions designed for aesthetic practice owners.
          </p>
        </div>
      </div>

      {/* Course overview */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.2)" }}
        >
          {[
            { label: "Duration", value: "12 weeks", sub: "~1–2 hours per week" },
            { label: "Format", value: "Self-paced", sub: "Watch · Listen · Read · Reflect" },
            { label: "Includes", value: "8 books", sub: "Plus TED talks, HBR articles, and podcasts" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs tracking-[0.22em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.5)" }}>{item.label}</p>
              <p className="font-display text-2xl font-light mb-1" style={{ color: "#fffdf6" }}>{item.value}</p>
              <p className="text-xs" style={{ color: "rgba(255,253,246,0.38)" }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Journal template callout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div
          className="rounded-xl border px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-5"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.12)" }}
        >
          <PenLine size={16} className="flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }} />
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.5)" }}>
              Weekly Journal — same 4 questions every week
            </p>
            <p className="text-sm" style={{ color: "rgba(255,253,246,0.4)" }}>
              What did I learn this week?&nbsp;&nbsp;·&nbsp;&nbsp;
              How did I apply it?&nbsp;&nbsp;·&nbsp;&nbsp;
              What challenged me?&nbsp;&nbsp;·&nbsp;&nbsp;
              What insight do I want to carry forward?
            </p>
          </div>
        </div>
      </div>

      {/* Weeks */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            The curriculum
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>

        <div className="flex flex-col gap-3">
          {weeks.map((wk) => {
            const ActionIcon = actionMeta[wk.action.type].icon;
            return (
              <details
                key={wk.week}
                className="week-card rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(162,140,117,0.13)" }}
                {...(wk.week === 1 ? { open: true } : {})}
              >
                {/* Summary row */}
                <summary
                  className="cursor-pointer select-none"
                  style={{ background: "linear-gradient(135deg, #140008 0%, #0c0004 100%)" }}
                >
                  <div className="px-6 py-5 flex items-center gap-4">
                    {/* Week number */}
                    <span
                      className="font-display text-2xl font-light flex-shrink-0 w-8 text-right"
                      style={{ color: "rgba(162,140,117,0.28)" }}
                    >
                      {String(wk.week).padStart(2, "0")}
                    </span>

                    {/* Title + tags */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>
                        {wk.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {wk.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded"
                            style={{ color: "rgba(162,140,117,0.55)", background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.14)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Chevron */}
                    <div
                      className="wk-chevron w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.15)" }}
                    >
                      <ChevronDown size={13} style={{ color: "#a28c75" }} />
                    </div>
                  </div>
                </summary>

                {/* Expanded content */}
                <div style={{ background: "linear-gradient(180deg, #0f0006 0%, #0c0004 100%)" }}>
                  <div className="px-6 py-6 flex flex-col gap-4">

                    {/* Resources */}
                    {wk.resources.map((res, i) => {
                      const meta = resourceMeta[res.type];
                      const ResIcon = meta.icon;
                      return (
                        <div
                          key={i}
                          className="rounded-xl border p-4 flex flex-col sm:flex-row sm:items-start gap-4"
                          style={{ background: meta.bg, borderColor: meta.border }}
                        >
                          <div className="flex items-center gap-2 sm:pt-0.5 flex-shrink-0">
                            <ResIcon size={13} style={{ color: meta.color }} />
                            <span
                              className="text-xs font-medium tracking-[0.14em] uppercase"
                              style={{ color: meta.color }}
                            >
                              {meta.label}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-light leading-snug" style={{ color: "#fffdf6" }}>
                              {res.title}
                              {res.author && (
                                <span style={{ color: "rgba(255,253,246,0.45)" }}> — {res.author}</span>
                              )}
                            </p>
                            {res.source && (
                              <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.3)" }}>
                                {res.source}
                              </p>
                            )}
                            {res.note && (
                              <p className="text-xs mt-1 italic" style={{ color: "rgba(255,253,246,0.35)" }}>
                                {res.note}
                              </p>
                            )}
                          </div>
                          {res.link && (
                            <a
                              href={res.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs tracking-[0.12em] uppercase px-3 py-1.5 rounded-lg flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
                              style={{ background: "rgba(255,253,246,0.06)", border: "1px solid rgba(255,253,246,0.1)", color: "rgba(255,253,246,0.5)" }}
                            >
                              {res.linkLabel}
                              <ExternalLink size={10} />
                            </a>
                          )}
                        </div>
                      );
                    })}

                    {/* Action */}
                    <div
                      className="rounded-xl border p-4"
                      style={{ background: actionMeta[wk.action.type].bg, borderColor: actionMeta[wk.action.type].border }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <ActionIcon size={13} style={{ color: actionMeta[wk.action.type].color }} />
                        <span
                          className="text-xs font-medium tracking-[0.14em] uppercase"
                          style={{ color: actionMeta[wk.action.type].color }}
                        >
                          {actionMeta[wk.action.type].label}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
                        {wk.action.prompt}
                      </p>
                    </div>

                    {/* Journal template */}
                    <div
                      className="rounded-lg px-4 py-3 flex flex-wrap gap-x-6 gap-y-1"
                      style={{ background: "rgba(162,140,117,0.03)", border: "1px solid rgba(162,140,117,0.08)" }}
                    >
                      <p className="text-xs tracking-[0.18em] uppercase w-full mb-1" style={{ color: "rgba(162,140,117,0.35)" }}>
                        Weekly journal
                      </p>
                      {journalPrompts.map((q, i) => (
                        <span key={i} className="text-xs italic" style={{ color: "rgba(255,253,246,0.25)" }}>
                          {q}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </div>

      {/* Books referenced */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Reading list
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          All 8 books in this course
        </h2>
        <p className="text-sm mb-8 max-w-xl leading-relaxed" style={{ color: "rgba(255,253,246,0.38)" }}>
          You can start acquiring these before you begin the course. Each one is worth owning.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {books.map((book) => (
            <a
              key={book.title}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border p-5 flex flex-col gap-3 no-underline transition-all duration-200"
              style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <BookOpen size={14} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-light leading-snug mb-1" style={{ color: "#fffdf6" }}>
                  {book.title}
                </p>
                <p className="text-xs" style={{ color: "rgba(255,253,246,0.38)" }}>
                  {book.author}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-1 flex-wrap">
                  {book.usedWeeks.map((w) => (
                    <span
                      key={w}
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{ color: "rgba(162,140,117,0.5)", background: "rgba(162,140,117,0.08)", border: "1px solid rgba(162,140,117,0.13)" }}
                    >
                      Wk {w}
                    </span>
                  ))}
                </div>
                <ExternalLink size={11} style={{ color: "rgba(162,140,117,0.35)" }} className="flex-shrink-0 group-hover:opacity-80" />
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
