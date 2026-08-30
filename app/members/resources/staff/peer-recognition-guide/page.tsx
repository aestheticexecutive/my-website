import Link from "next/link";
import {
  ArrowLeft,
  Award,
  Sparkles,
  MessageSquareHeart,
  Megaphone,
  Repeat,
  Vote,
  Gift,
  ShieldAlert,
  ExternalLink,
  Heart,
  NotebookPen,
  Download,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peer Recognition Program Guide | Aesthetic Executive",
};

const shoutoutPrinciples = [
  {
    icon: MessageSquareHeart,
    title: "Make it easy to give",
    body: "A shared channel, a physical board by the break room, or a 30-second form — the lower the friction, the more often it actually happens. If giving recognition takes real effort, it stops after the first excited week.",
  },
  {
    icon: Sparkles,
    title: "Tie it to specific behavior, not generic praise",
    body: "\"Great job\" reinforces nothing. \"You stayed late to walk a nervous first-time patient through what to expect — that's exactly what patient-first looks like\" tells the whole team what actually earns recognition here.",
  },
  {
    icon: Megaphone,
    title: "Make it visible",
    body: "A shoutout read out loud in a team meeting or posted where everyone sees it does more work than the same words said privately. Public recognition reinforces the standard for everyone watching, not just the person receiving it.",
  },
  {
    icon: Repeat,
    title: "Give it a standing home in your rhythm",
    body: "A shoutout segment with no fixed moment to happen in quietly disappears within a month. Attach it to something that already recurs — the first five minutes of your regular staff meeting is the easiest place to put it.",
  },
];

const eotmSteps = [
  {
    num: "1",
    title: "Open nominations to everyone, not just managers",
    body: "Anyone can nominate anyone — front desk can nominate a provider, a provider can nominate front desk. Use the same specific-behavior format as a shoutout: what they did, and why it mattered.",
  },
  {
    num: "2",
    title: "Set criteria tied to your actual values, not just effort",
    body: "\"Worked the most hours\" rewards burnout. Criteria pulled from your core values — the same ones from the Living Your Values guide — keep the award reinforcing the culture you actually want, not just raw output.",
  },
  {
    num: "3",
    title: "Decide who picks, and keep it consistent",
    body: "A manager decision, a small rotating committee, or a team-wide vote all work — the method matters less than using the same one every month, so the process feels fair instead of arbitrary.",
  },
  {
    num: "4",
    title: "Make the reward visible, not just monetary",
    body: "A gift card is nice; a wall plaque, a written note read aloud, first pick of next month's schedule, or a reserved parking spot often lands harder because everyone sees it and knows what it means.",
  },
  {
    num: "5",
    title: "Announce it the same way, every month",
    body: "A recognition program that only sometimes happens reads as arbitrary. Put the announcement on the same meeting agenda item every time, so the team can count on it.",
  },
];

const pitfalls = [
  "Recognition given inconsistently or rarely starts to feel performative instead of genuine.",
  "The same one or two people winning every time quietly tells everyone else the process isn't really open — rotate eligibility or factor in recent wins.",
  "Vague praise (\"good job,\" \"nice work\") doesn't reinforce any specific behavior worth repeating.",
  "Recognition that only comes from managers misses most of what peers actually see day to day — the person who calmed an anxious patient in the waiting room, the coworker who covered a shift with no notice.",
  "A promised reward that doesn't materialize does more damage to trust than never promising one at all.",
];

export default function PeerRecognitionGuidePage() {
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
              <Award size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Team &amp; Culture
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Peer Recognition Program
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            A specific, actionable system for two layers of recognition — everyday peer shoutouts
            and a structured monthly award — so the good work your team already does day to day
            actually gets seen, said out loud, and repeated.
          </p>
        </div>
      </div>

      {/* Why this is different from Living Your Values */}
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
              <Heart size={18} style={{ color: "#a28c75" }} />
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
                A mechanism, not a mission
              </p>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
                Values tell you what matters. Recognition proves you meant it.
              </h2>
              <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.6)" }}>
                The{" "}
                <Link href="/members/resources/staff/embed-values" className="underline hover:opacity-80" style={{ color: "#a28c75" }}>
                  Living Your Values guide
                </Link>{" "}
                covers the full picture of embedding culture — hiring, meetings, performance
                reviews, and more. This guide is one specific piece of that picture, built out in
                full: the actual mechanics of a recognition system, from the daily shoutout to the
                monthly award. Money isn&apos;t what makes people feel valued most of the time —
                specific, timely, public recognition often does more for retention than a bonus
                ever will, and it costs almost nothing to run.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Peer shoutouts */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14 pt-10">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Layer one — daily
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Peer-to-peer shoutouts
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          The frequent, informal layer — small enough to happen every week without becoming a
          production.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {shoutoutPrinciples.map((p) => {
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
          className="rounded-xl border p-6 md:p-7 mt-5"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.55)" }}>
            A simple format to start with
          </p>
          <p className="text-sm leading-relaxed italic" style={{ color: "rgba(255,253,246,0.65)" }}>
            &ldquo;I want to recognize <strong style={{ color: "#fffdf6", fontStyle: "normal" }}>[name]</strong> for{" "}
            <strong style={{ color: "#fffdf6", fontStyle: "normal" }}>[specific thing they did]</strong>, because{" "}
            <strong style={{ color: "#fffdf6", fontStyle: "normal" }}>[why it mattered].</strong>&rdquo;
          </p>
        </div>

        <a
          href="/downloads/ae-peer-shoutout-card.docx"
          download
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40 mt-5"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-7 flex items-center gap-5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
            >
              <Download size={18} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Peer Shoutout / Recognition Card</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>A printable version of this exact format — 4 cards per page, ready to cut apart and hand out or post on a board.</p>
            </div>
            <span
              className="flex-shrink-0 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg"
              style={{ background: "rgba(162,140,117,0.08)", border: "1px solid rgba(162,140,117,0.2)", color: "rgba(162,140,117,0.7)" }}
            >
              .docx
            </span>
          </div>
        </a>
      </div>

      {/* Employee of the month */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Layer two — monthly
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Structured employee of the month
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          A bigger, more visible moment on top of the daily shoutouts — built on a fair,
          repeatable process, not a manager&apos;s gut feeling.
        </p>

        <div className="space-y-4">
          {eotmSteps.map((step) => (
            <div
              key={step.num}
              className="rounded-xl border p-6 flex items-start gap-5"
              style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-display text-sm"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.3)", color: "#a28c75" }}
              >
                {step.num}
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <div
            className="rounded-xl border p-6 flex items-start gap-4"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <Vote size={17} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Selection methods that work</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>Manager decision from nominations, a small rotating committee, or a full team vote — any of these is fair as long as it&apos;s the same one every month.</p>
            </div>
          </div>
          <div
            className="rounded-xl border p-6 flex items-start gap-4"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <Gift size={17} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Reward ideas beyond cash</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>A wall plaque, a handwritten note read aloud, first pick of next month&apos;s schedule, a reserved parking spot, or a small gift card — mix status rewards with the occasional tangible one.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pitfalls */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <ShieldAlert size={18} style={{ color: "#a28c75" }} />
            <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>
              What makes a recognition program backfire
            </h2>
          </div>
          <ul className="space-y-2.5">
            {pitfalls.map((p) => (
              <li key={p} className="text-sm flex items-start gap-2.5 leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                <span style={{ color: "#a28c75", flexShrink: 0 }}>·</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link
            href="/members/resources/staff/staff-meeting-agenda"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="p-7 flex items-center gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <Megaphone size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Staff Meeting Agenda</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Give shoutouts a standing home by building them into your regular meeting structure.</p>
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
                <NotebookPen size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Meeting Notes</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Log each month&apos;s shoutouts and employee-of-the-month pick right alongside your regular meeting notes.</p>
              </div>
              <ExternalLink size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
