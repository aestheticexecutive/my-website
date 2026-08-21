import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Camera,
  Heart,
  Users,
  Tag,
  MessageCircle,
  Star,
  Wrench,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turning Downtime Into Revenue Guide | Aesthetic Executive",
};

const categories = [
  {
    icon: Camera,
    title: "Content & Social Proof",
    body: "Every post, video, or story is a small, free advertisement running while you're busy with something else — it builds trust before a patient ever picks up the phone.",
    approach: "Batch it. Don't create one piece of content per slow moment — use a quiet stretch to film or write several pieces at once, then schedule them across the week so something goes out even on your busiest days.",
  },
  {
    icon: Heart,
    title: "Patient Win-Back",
    body: "Bringing back a patient who already trusts your practice costs far less time and money than earning a brand-new one from scratch.",
    approach: "Keep the list short and personal. Five calls or texts done well beats fifty sent as a mass blast. Lead with genuine care — a real check-in, not a hard sell.",
  },
  {
    icon: Users,
    title: "New Patient Pipeline",
    body: "These actions build the visibility and relationships that bring people to your door without waiting on ad spend to do all the work.",
    approach: "Pick one channel and actually finish it, rather than starting five acquisition ideas and completing none. One finished partnership pitch beats ten half-written ones.",
  },
  {
    icon: Tag,
    title: "Promotions & Offers",
    body: "A well-timed, clearly-bounded offer can fill open slots almost immediately — but only if it goes out while those slots are still open.",
    approach: "Set a real deadline and hold to it. An offer that's \"ongoing\" creates no urgency; a 48-hour window does.",
  },
  {
    icon: MessageCircle,
    title: "Consultation & Sales Readiness",
    body: "This is where a curious visitor either becomes a booked patient or walks away — the words used in that room are worth more per minute than almost anything else you do.",
    approach: "Practice out loud, not just on paper. A script that only exists in a document doesn't change what actually gets said in the room.",
  },
  {
    icon: Star,
    title: "Reputation & Authority",
    body: "This builds the kind of trust that shows up before a patient ever meets you — the trust that gets you chosen over a competitor with a similar price and menu.",
    approach: "Think consistency over time, not a single viral moment. One press mention or podcast appearance rarely moves the needle alone — a steady drumbeat of visibility does.",
  },
  {
    icon: Wrench,
    title: "Team & Systems Readiness",
    body: "A practice that runs smoothly converts more of the demand it already has — every dropped ball at checkout or unclear script quietly costs bookings.",
    approach: "Use slow time to fix the thing you've been meaning to fix for weeks, not the thing that feels urgent today. Downtime is exactly when process work actually gets done.",
  },
];

const tips = [
  {
    title: "Pick one thing you'll actually do today",
    body: "A list of 100 possibilities is inspiring and paralyzing in equal measure. Don't try to work the whole list — just do the one action that fits the next 20 minutes.",
  },
  {
    title: "Decide who owns quiet-hour actions before the slow day arrives",
    body: "\"Do something useful when it's slow\" only works if someone actually feels responsible for it. Assign it the same way you'd assign any other task.",
  },
  {
    title: "Log what you do",
    body: "A completed action nobody tracks doesn't compound. Recording the date and a quick note is what turns a one-off effort into a pattern you can actually see.",
  },
  {
    title: "Revisit the same actions on purpose",
    body: "Almost nothing on this list is one-and-done. A win-back call, a fresh promo, a sharpened script — all worth repeating on a schedule, not just whenever you remember.",
  },
];

export default function DowntimeRevenueGuidePage() {
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
            href="/members/resources/operations"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Operations Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Clock size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Revenue Systems
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            100 Ways to Turn Downtime Into Revenue
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            A slow afternoon doesn&apos;t have to be wasted time. This is a working list of
            concrete, specific actions across seven areas of your practice — each one
            capable of driving a booking, a review, or a returning patient — sorted so
            you always know what to reach for the next time the schedule opens up.
          </p>
        </div>
      </div>

      {/* Why it matters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
            Why it matters
          </p>
          <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
            Idle time is the cheapest growth you're not using
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            An open hour on the schedule costs you nothing extra — no ad spend, no added
            payroll, no new overhead. What it costs is opportunity, if it just passes by.
            The practices that consistently outgrow their competitors aren&apos;t working
            harder during busy weeks; they&apos;ve built a habit of using their slow ones.
            This list exists so that habit doesn&apos;t depend on anyone remembering what
            to do in the moment.
          </p>
        </div>
      </div>

      {/* The 7 categories */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            The framework
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Seven areas, 100 specific actions
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          What each area actually does for your practice, and the best way to approach it
          when you sit down to use it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-xl border p-6 flex flex-col gap-3"
                style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                  >
                    <Icon size={16} style={{ color: "#a28c75" }} />
                  </div>
                  <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>{cat.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{cat.body}</p>
                <div className="pt-2 border-t" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
                  <p className="text-[10px] uppercase tracking-wide mb-1.5" style={{ color: "rgba(162,140,117,0.55)" }}>Best way to approach it</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.52)" }}>{cat.approach}</p>
                </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border p-6"
              style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{tip.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.52)" }}>{tip.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA to the tool */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Link
          href="/members/resources/operations/downtime-revenue-tracker"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <Clock size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Put it to work
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Open the Downtime Revenue Tracker
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                All 100 actions, organized into the seven areas above. Your team can log
                completions with a date and a note, and mark the same action done again
                the next time it's worth repeating.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Tracker
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
