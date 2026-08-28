import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  CalendarClock,
  ShieldCheck,
  ListPlus,
  AlertTriangle,
  MessageSquare,
  CreditCard,
  Repeat,
  Bell,
  ExternalLink,
  Gem,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scheduling & Capacity Optimization Guide | Aesthetic Executive",
};

const blockPrinciples = [
  {
    icon: Gem,
    title: "Protect prime time for high-margin services",
    body: "Reserve your best hours — after-work slots, Saturday mornings, whenever your demand is highest — for the services with the best margin: injectables, laser packages, device treatments. Don't let a $60 dermaplane fill the 5pm slot a $1,200 filler appointment could have taken.",
  },
  {
    icon: Clock,
    title: "Size the block to the real service, not the calendar default",
    body: "A new-patient injectable consult needs more room than a return Botox touch-up. Build distinct block lengths per service type instead of a single default appointment slot — undersized blocks create the double-booked, running-behind days that burn out a front desk.",
  },
  {
    icon: Repeat,
    title: "Batch similar services together",
    body: "Grouping same-type appointments — all laser in a morning block, all injectables in an afternoon block — cuts room turnover time and lets a provider stay in one clinical mode instead of context-switching all day.",
  },
  {
    icon: CalendarClock,
    title: "Release blocks on a rolling window",
    body: "Hold premium blocks for your best patients or highest-value services up to a set window (e.g., 5–7 days out), then release anything unbooked to general availability so it doesn't sit empty.",
  },
];

const noShowSteps = [
  {
    num: "1",
    title: "Put the policy in writing — and in front of the patient before they book",
    body: "State the cancellation window (typically 24–48 hours), the fee, and any card-on-file requirement in your booking confirmation and consent paperwork. A policy nobody read isn't a policy — it's a surprise.",
  },
  {
    num: "2",
    title: "Require a card on file or a deposit for high-value appointments",
    body: "For injectable consults, package treatments, or anything over a set dollar threshold, require a card on file (or a deposit applied to the service) at the time of booking. This is what actually gives the policy teeth.",
  },
  {
    num: "3",
    title: "Tier the fee to the notice given",
    body: "A common structure: no fee outside 48 hours, 50% of service value inside 48 hours, full fee or forfeited deposit for a same-day no-show. Tiering keeps the policy from feeling punitive for a patient with a real conflict.",
  },
  {
    num: "4",
    title: "Enforce it the same way, every time",
    body: "A policy applied inconsistently trains your best patients that it doesn't really apply to them — and trains your team to avoid an awkward conversation instead of holding the line. Give the front desk a script and back them up.",
  },
  {
    num: "5",
    title: "Automate the reminder cadence",
    body: "Most no-shows aren't defiance, they're forgetting. A text or email at 48 hours, then 24 hours, then 2 hours out catches the majority of would-be no-shows before they ever become one.",
  },
];

const waitlistSteps = [
  {
    icon: ListPlus,
    title: "Keep a standing waitlist by service and provider",
    body: "Don't rely on memory. A simple running list — patient, service wanted, preferred provider, date flexibility — turns a cancellation from a scramble into a two-minute fill.",
  },
  {
    icon: Bell,
    title: "Text the list the moment a slot opens",
    body: "First-to-respond gets the slot. A group or sequential text blast fills a same-day cancellation far faster than working the phones one call at a time.",
  },
  {
    icon: MessageSquare,
    title: "Ask every patient if they want to be on it",
    body: "At checkout, for anyone who tried to book a slot that wasn't available: \"Want me to text you if something opens up sooner?\" Most say yes — and it's the easiest waitlist growth you'll ever do.",
  },
  {
    icon: ShieldCheck,
    title: "Overbook only where the data supports it",
    body: "If a specific provider, day, or appointment type runs a predictably high no-show rate, a small, deliberate overbook can protect against empty chairs — but do it by the numbers, not by habit, or you'll create the exact double-booked chaos you're trying to avoid.",
  },
];

export default function SchedulingCapacityGuidePage() {
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
              <CalendarClock size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Capacity &amp; Chair Time
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Scheduling &amp; Capacity Optimization
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            An empty chair is lost revenue you can never get back — not discounted, not deferred,
            gone. Block-scheduling your highest-margin services, a no-show policy with real teeth,
            and a waitlist that actually gets worked are the three levers that keep chairs full
            without ever running a sale.
          </p>
        </div>
      </div>

      {/* Why it matters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)", borderColor: "rgba(162,140,117,0.2)" }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
            Why it matters
          </p>
          <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
            Capacity is inventory — treat it like one
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            A retail shelf that&apos;s empty for an hour costs you that hour&apos;s sales. A treatment
            chair that&apos;s empty for an hour costs you the same thing — except a chair only has
            so many hours in a day, and every one that goes unbooked, no-showed, or filled with the
            wrong service is capacity you can never recover. The fix isn&apos;t working longer hours
            or discounting to fill gaps — it&apos;s designing the schedule itself so the right service
            lands in the right slot, and the slots that open up unexpectedly get filled fast.
          </p>
        </div>
      </div>

      {/* Block scheduling */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14 pt-10">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Part one
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Block-scheduling high-margin services
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Not every slot on the calendar is worth the same amount. Design the schedule so your best
          hours default to your best services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blockPrinciples.map((p) => {
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
            Where to start
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            Pull your true margin per service from the{" "}
            <Link href="/members/resources/finance/treatment-profitability" className="underline hover:opacity-80" style={{ color: "#a28c75" }}>
              Treatment Profitability Analyzer
            </Link>{" "}
            before you rebuild the schedule — margin, not just price, is what should decide which
            services get first claim on your best hours.
          </p>
        </div>
      </div>

      {/* No-show policy */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Part two
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          No-show &amp; cancellation policy design
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          A policy only works if it&apos;s written down, communicated up front, and enforced the
          same way for everyone.
        </p>

        <div className="space-y-4">
          {noShowSteps.map((step) => (
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

        <div
          className="rounded-xl border p-6 md:p-7 mt-5 flex items-start gap-4"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <CreditCard size={18} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            <strong style={{ color: "#fffdf6" }}>A sample tiered structure to start from:</strong> no
            fee for cancellations outside 48 hours · 50% of service value for cancellations inside 48
            hours · full fee (or forfeited deposit) for a same-day no-show. Adjust the windows and
            percentages to your patient base and your booking software&apos;s capabilities.
          </p>
        </div>
      </div>

      {/* Waitlist systems */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Part three
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Waitlist systems that actually fill chairs
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Even the best cancellation policy still leaves gaps — a good waitlist is what turns those
          gaps back into revenue within minutes, not days.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {waitlistSteps.map((w) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="rounded-xl border p-6 flex items-start gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{w.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.52)" }}>{w.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* A note on caution */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div
          className="rounded-lg border p-5 flex items-start gap-3"
          style={{ background: "rgba(162,140,117,0.05)", borderColor: "rgba(162,140,117,0.18)" }}
        >
          <AlertTriangle size={16} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
            All three levers work together, not in isolation. A tight cancellation policy without a
            waitlist just turns a no-show into an empty chair with a fee attached. Block-scheduling
            without tracking real margin just protects the wrong slots. Build them as one system.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link
            href="/members/resources/operations/front-desk-tool"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="p-7 flex items-center gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <ShieldCheck size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>Front Desk Power Tool</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Build the training and reward plan that gets a waitlist system actually worked, every day.</p>
              </div>
              <ExternalLink size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }} />
            </div>
          </Link>
          <Link
            href="/members/resources/finance/kpi-tracker"
            className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
            style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div className="p-7 flex items-center gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <Clock size={18} style={{ color: "#a28c75" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>KPI Tracker</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>Log a no-show/cancellation rate metric monthly to see whether the new policy is actually moving the number.</p>
              </div>
              <ExternalLink size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
