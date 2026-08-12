import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Smile,
  Award,
  Target,
  Bell,
  Compass,
  GraduationCap,
  ExternalLink,
  NotebookPen,
  Clock,
  Repeat,
  ListChecks,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Meeting Agenda | Aesthetic Executive",
};

const agendaItems = [
  {
    icon: Smile,
    title: "Icebreaker",
    prompt: "",
    why: "Opens the meeting on a human note before diving into business. A 2-minute icebreaker warms the room, builds psychological safety, and makes people far more likely to actually speak up during the rest of the meeting — not just sit and listen.",
  },
  {
    icon: Award,
    title: "Wins & Challenges of the Prior Month",
    prompt: "Everyone will turn in their wins and challenges from the prior month and anything relevant to discuss with the team will be covered.",
    why: "Creates two-way accountability instead of a one-way status report. Wins get visible recognition — which drives morale and retention — while challenges surface while they're still small, instead of six weeks later when they've become a real problem.",
  },
  {
    icon: Target,
    title: "Goal Tracking Updates",
    prompt: "Give updates on how we are tracking on goals.",
    why: "Keeps the entire team anchored to the same numbers instead of everyone operating in their own lane. Saying a goal out loud in front of the team creates gentle peer accountability, and drift gets caught while there's still time to course-correct.",
  },
  {
    icon: Bell,
    title: "Updates, Reminders & Announcements",
    prompt: "If you have updates, reminders, questions, concerns, announcements, etc… please come prepared with them.",
    why: "One reliable channel for operational information so nothing depends on a hallway conversation or gets buried in someone's inbox. Protects consistency across shifts, roles, and whoever happened to be working that day.",
  },
  {
    icon: Compass,
    title: "Monthly Focus",
    prompt: "Everyone should come prepared with their main focus of the coming month.",
    why: "Forces prioritization instead of reactive busyness. Each person leaves with one clear \"main thing\" — not a to-do list — and it hands you a natural, built-in agenda item to circle back to next month under Wins & Challenges.",
  },
  {
    icon: GraduationCap,
    title: "Business Development / Continued Training",
    prompt: "",
    why: "Signals that the practice invests in growth, not just output. Keeps clinical and sales skills sharp, and gives the team something to look forward to beyond the routine of day-to-day operations.",
  },
];

const runningTips = [
  {
    icon: Clock,
    title: "Time-box every section",
    body: "Give each agenda item a rough limit and hold to it. A meeting with six focused sections in 45 minutes beats one open-ended hour that only gets through half the agenda.",
  },
  {
    icon: NotebookPen,
    title: "Assign a notetaker",
    body: "Rotate who's responsible for capturing the meeting, or use a shared tool everyone can see. Notes that only live in one person's head are notes that get lost.",
  },
  {
    icon: ListChecks,
    title: "End with owners, not just discussion",
    body: "Before you close, go around and confirm who owns each follow-up and by when. A meeting that ends in decisions, not just conversation, is the difference between real progress and a repeat conversation next month.",
  },
  {
    icon: Repeat,
    title: "Keep the cadence consistent",
    body: "Same day, same time, every month. Consistency is what turns this from \"a meeting we should really have\" into a habit the team plans around.",
  },
];

export default function StaffMeetingAgendaPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
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
              <Users size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Team Meetings
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Staff Meeting Agenda
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            A simple, repeatable six-part agenda for your recurring team meeting — built to surface real
            information, keep everyone pointed at the same goals, and get the whole team on the same page
            without the meeting sprawling into an hour and a half.
          </p>
        </div>
      </div>

      {/* Why this structure works */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
            Why this structure works
          </p>
          <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
            One agenda, four jobs done at once
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            A good recurring team meeting has to do more than just fill the calendar. This structure is built
            to do four things every single time: build genuine connection (Icebreaker), create honest
            accountability (Wins &amp; Challenges, Goal Tracking), protect operational consistency (Updates
            &amp; Announcements), and keep the team moving forward with intention (Monthly Focus, Business
            Development). Run it consistently and it stops feeling like a meeting and starts feeling like the
            heartbeat of how your practice operates.
          </p>
        </div>
      </div>

      {/* 6 agenda items */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            6 agenda items
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          What to cover, and why it matters
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
          Run through these in order. Each one earns its spot on the agenda for a specific reason — together
          they make sure nothing important falls through the cracks between meetings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {agendaItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border p-7 flex flex-col gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl font-light flex-shrink-0" style={{ color: "rgba(162,140,117,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                  >
                    <Icon size={16} style={{ color: "#a28c75" }} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-light leading-snug mb-1" style={{ color: "#fffdf6" }}>
                      {item.title}
                    </h3>
                    {item.prompt && (
                      <p className="text-xs leading-relaxed italic" style={{ color: "rgba(162,140,117,0.55)" }}>
                        &ldquo;{item.prompt}&rdquo;
                      </p>
                    )}
                  </div>
                </div>
                <div style={{ height: "1px", background: "rgba(162,140,117,0.08)" }} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                  {item.why}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Running it well */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Execution
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Running it well
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
          The agenda is the easy part. These four habits are what make the meeting actually worth everyone's time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {runningTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
                className="rounded-xl border p-6 flex items-start gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{tip.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>{tip.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA to the tool */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Link
          href="/members/resources/staff/meeting-notes"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <NotebookPen size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Put it to work
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Run this agenda and keep every meeting's notes in one place
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                The Meeting Notes tool comes pre-loaded with these six sections — customize them to fit your
                team, then log notes for every meeting with a name and date so you can always look back and
                prepare for what&apos;s next.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Meeting Notes
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
