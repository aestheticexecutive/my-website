import Link from "next/link";
import {
  ArrowLeft,
  HeartHandshake,
  TrendingDown,
  Repeat,
  CalendarClock,
  Users2,
  GraduationCap,
  Palmtree,
  CalendarCheck,
  ShieldAlert,
  Scale,
  ClipboardList,
  Coffee,
  Eye,
  MessageCircle,
  ExternalLink,
  Download,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Retention & Burnout Prevention Guide | Aesthetic Executive",
};

interface Principle {
  icon: typeof Users2;
  title: string;
  body: string;
}

const schedulingPrinciples: Principle[] = [
  {
    icon: Repeat,
    title: "Build a shift-swap system with guardrails",
    body: "Let staff trade shifts directly with each other within set rules — matching qualification and coverage minimums — instead of routing every change through a manager. It removes friction without removing control.",
  },
  {
    icon: CalendarClock,
    title: "Post the schedule 2–4 weeks out",
    body: "Advance notice is one of the cheapest retention levers you have. A last-minute schedule is one of the most common quiet triggers for burnout and turnover in this industry — people can't plan a life around a calendar that changes on them.",
  },
  {
    icon: HeartHandshake,
    title: "Offer real flexibility where you can",
    body: "Compressed 4-day weeks, staggered start times, a standing half-day off — not every role or season can flex, but wherever it's genuinely possible, it's one of the strongest differentiators in a tight hiring market.",
  },
  {
    icon: GraduationCap,
    title: "Cross-train enough people to make flexibility possible",
    body: "Flexibility without cross-training just shifts the burnout onto whoever's left covering. The more roles a few key people can fill, the more slack the whole schedule has.",
  },
];

const ptoPrinciples: Principle[] = [
  {
    icon: CalendarCheck,
    title: "Choose an accrual model that fits your team size",
    body: "Fixed annual days, per-pay-period accrual, or unlimited-with-a-stated-minimum each have real tradeoffs. Unlimited PTO without a required minimum often results in people taking less time off, not more — nobody wants to be the one who used the most.",
  },
  {
    icon: ShieldAlert,
    title: "Set clear notice windows and blackout dates",
    body: "Protect your busiest stretches — holidays, a major promotion — with defined notice requirements instead of an unwritten rule everyone has to guess at.",
  },
  {
    icon: Palmtree,
    title: "Decide your rollover policy deliberately",
    body: "Some rollover reduces the December scramble to use it all before it disappears. Too much rollover creates a growing liability on your books. Pick a cap on purpose, not by accident.",
  },
  {
    icon: HeartHandshake,
    title: "Make sure PTO is actually usable",
    body: "A policy on paper nobody feels safe using isn't a benefit — it's a source of quiet resentment. If people aren't actually taking their time, that's a culture signal worth investigating before it shows up as a resignation.",
  },
];

const workloadPrinciples: Principle[] = [
  {
    icon: Coffee,
    title: "Build recovery time into provider schedules",
    body: "Back-to-back high-volume injectable days with no lighter day in between is a fast track to physical fatigue and decision fatigue — both of which show up in patient experience before anyone says a word.",
  },
  {
    icon: Scale,
    title: "Set realistic production targets, not aspirational ones",
    body: "A target that only pencils out if a provider skips lunch every day for a month isn't a target — it's a countdown to a resignation letter. Weigh any production goal against what the Compensation & Commission Structure Guide's break-even math actually requires, not what would be nice to hit.",
  },
  {
    icon: ClipboardList,
    title: "Protect non-billable time on the calendar",
    body: "Charting, restocking, team huddles need their own slot — not \"whenever there's a gap.\" Squeezing admin work into the cracks of a full schedule is how a normal day turns into a 10-hour one.",
  },
  {
    icon: Repeat,
    title: "Rotate the hardest shifts and duties",
    body: "Closing shifts, the most demanding patients, the most tedious admin task — if the same person always draws the short straw, resentment builds even when nothing else about the job has changed.",
  },
];

const warningSigns = [
  "Rising call-outs, late arrivals, or last-minute schedule change requests",
  "A visible drop in patient satisfaction or reviews tied to a specific team member",
  "Disengagement in team meetings from someone who used to speak up",
  "A sudden decline in retail attach, enrollment, or rebooking numbers from a former top performer",
  "Visible impatience with patients or teammates that's out of character",
];

const stayQuestions = [
  "What makes you want to stay here right now?",
  "What would make you consider leaving?",
  "What's one thing we could change that would make your week easier?",
  "Do you feel like you have room to grow here — and do you know what that path looks like?",
];

export default function RetentionBurnoutGuidePage() {
  return (
    <div className="bg-[#170009] min-h-screen">
      {/* Hero header */}
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
            <ArrowLeft size={13} />
            Staff Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <HeartHandshake size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Team &amp; Culture
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Staff Retention &amp; Burnout Prevention
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            Turnover is one of the most expensive line items a practice never sees on its P&amp;L.
            Scheduling flexibility, thoughtful PTO design, and real workload balance are the three
            levers that keep good people from quietly deciding to leave.
          </p>
        </div>
      </div>

      {/* Why it matters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)", borderColor: "rgba(162,140,117,0.2)" }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <TrendingDown size={18} style={{ color: "#a28c75" }} />
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
                Why it matters
              </p>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
                The cost of losing someone is never just their salary
              </h2>
              <p className="text-sm leading-relaxed max-w-3xl mb-4" style={{ color: "rgba(255,253,246,0.6)" }}>
                When a good employee leaves, the practice doesn&apos;t just lose their production —
                it absorbs every piece of what replacing them actually costs:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {[
                  "Recruiting time and cost to source and interview a replacement",
                  "Real training hours from whoever onboards the new hire",
                  "An empty or under-producing chair during the hiring gap",
                  "The new hire's own ramp-up period before they're fully productive",
                  "Lost patient continuity — rebooking risk when a familiar face disappears",
                  "A morale hit on the team left covering the gap",
                ].map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: "rgba(255,253,246,0.65)" }}>
                    <span style={{ color: "#a28c75", flexShrink: 0 }}>·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scheduling flexibility */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14 pt-10">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Lever one
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Scheduling flexibility
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Few things burn people out faster than feeling like they have no control over their own
          time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {schedulingPrinciples.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-xl border p-7 flex flex-col gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* PTO design */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Lever two
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          PTO design
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          The policy matters less than whether people actually feel free to use it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ptoPrinciples.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-xl border p-7 flex flex-col gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{p.body}</p>
              </div>
            );
          })}
        </div>

        <div
          className="rounded-lg border p-5 flex items-start gap-3 mt-5"
          style={{ background: "rgba(162,140,117,0.05)", borderColor: "rgba(162,140,117,0.18)" }}
        >
          <ShieldAlert size={15} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
            PTO accrual rules, use-it-or-lose-it legality, and required break laws vary meaningfully
            by state — some states prohibit forfeiting accrued time entirely. Check your state labor
            department&apos;s rules, or talk to an employment attorney, before finalizing your policy.
          </p>
        </div>
      </div>

      {/* Workload balance */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Lever three
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Workload balance
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          A schedule that&apos;s technically full isn&apos;t the same thing as a schedule that&apos;s
          sustainable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {workloadPrinciples.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-xl border p-7 flex flex-col gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Warning signs & stay interviews */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Catching it early
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Warning signs &amp; stay interviews
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          By the time someone hands in a two-week notice, the decision was usually made weeks ago.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div
            className="rounded-2xl border p-7 md:p-8"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye size={17} style={{ color: "#a28c75" }} />
              <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>Watch for these signs</h3>
            </div>
            <ul className="space-y-2">
              {warningSigns.map((sign) => (
                <li key={sign} className="text-sm flex items-start gap-2 leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                  <span style={{ color: "#a28c75", flexShrink: 0 }}>·</span> {sign}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl border p-7 md:p-8"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle size={17} style={{ color: "#a28c75" }} />
              <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>Run stay interviews, not just exit interviews</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.6)" }}>
              A regular, proactive 1:1 check-in — before anyone&apos;s thinking about leaving —
              surfaces problems while there&apos;s still time to fix them. Four questions worth
              asking on repeat:
            </p>
            <ul className="space-y-2">
              {stayQuestions.map((q) => (
                <li key={q} className="text-sm italic flex items-start gap-2 leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>
                  <span style={{ color: "#a28c75", flexShrink: 0 }}>&ldquo;</span> {q}
                </li>
              ))}
            </ul>
            <a
              href="/downloads/ae-stay-interview-notes.docx"
              download
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase mt-5 hover:opacity-80 transition-opacity"
              style={{ color: "#a28c75" }}
            >
              <Download size={12} />
              Download the Stay Interview Notes template (.docx)
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link
            href="/tools/team-satisfaction.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="p-7 flex items-center gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <HeartHandshake size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Team Health Assessment</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Rate your team across 8 key areas — trust, communication, recognition — with a strategy builder and history tracking.</p>
              </div>
              <ExternalLink size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }} />
            </div>
          </Link>
          <Link
            href="/members/resources/staff/meeting-notes"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="p-7 flex items-center gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <ClipboardList size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Meeting Notes</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Log stay-interview conversations and follow-ups under a name and date, right alongside your regular team meetings.</p>
              </div>
              <ExternalLink size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
