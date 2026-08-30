import Link from "next/link";
import {
  ArrowLeft,
  UserPlus,
  Heart,
  Settings,
  Sparkles,
  ExternalLink,
  ClipboardCheck,
  Users2,
  Repeat,
  PenLine,
  ListChecks,
  Download,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding Guide | Aesthetic Executive",
};

const pillars = [
  {
    icon: Heart,
    title: "Employment Policies & Culture",
    why: "Sets expectations before day-to-day work even starts — schedule, time off, pay, benefits, dress code, and how the practice actually operates. Getting a signed-off record of this early removes ambiguity and protects the practice legally, and it's identical no matter which role someone's stepping into.",
  },
  {
    icon: Settings,
    title: "Policies, Technology & Documentation",
    why: "The operational muscle memory that makes someone actually functional day to day — the scheduling tool, the phone system, how a chart works, how billing runs. This is where role differs most: a provider needs to know the imaging system and lab process, a coordinator needs to know memberships and check-in flow.",
  },
  {
    icon: Sparkles,
    title: "Services & Procedures Training",
    why: "The technical, hands-on competency specific to what this person will actually do for patients — every service or product they'll need to speak to, perform, or support. This list is entirely yours to build; it's specific to your menu and your protocols.",
  },
];

const tips = [
  {
    icon: Users2,
    title: "Assign a dedicated trainer",
    body: "Onboarding that's everyone's job is no one's job. Pick one person who owns getting the new hire through the checklist, even if other team members handle individual sections.",
  },
  {
    icon: PenLine,
    title: "Sign off as you go, not after",
    body: "Initial and date each item the day it's actually covered, not in a batch at the end of week one. A checklist filled out in one sitting from memory isn't a real record.",
  },
  {
    icon: ListChecks,
    title: "Cover it in order, section by section",
    body: "Policies and culture first, then systems and documentation, then hands-on services. Someone shouldn't be learning a procedure before they know how to chart it.",
  },
  {
    icon: Repeat,
    title: "Follow up at 30 / 60 / 90 days",
    body: "The checklist gets someone through week one. Short check-ins at 30, 60, and 90 days catch what didn't stick and give you a natural moment to revisit anything marked incomplete.",
  },
];

export default function OnboardingGuidePage() {
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
              <UserPlus size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              New Hires
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Onboarding Guide
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            How a new hire's first few weeks go has an outsized effect on whether they stay, how fast they
            become genuinely useful, and how consistent they are with the rest of your team. A structured,
            signed-off checklist is what turns "we showed them around" into a real onboarding process.
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
            Three things a real onboarding process does at once
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            A checklist someone actually signs off on — item by item, with a date and initials — does more
            than just cover a list of topics. It protects the practice with a documented record, it gives the
            new hire a clear map of what &quot;fully trained&quot; looks like instead of a vague sense they
            should probably ask more questions, and it gives you an honest answer to &quot;did we actually
            cover that?&quot; three months later.
          </p>
        </div>
      </div>

      {/* 3 pillars */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            3 parts to every onboarding
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Culture, systems, and skill — in that order
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          Every role's onboarding checklist breaks down the same way, whether the new hire is a provider or
          support staff.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p) => {
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
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{p.why}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Provider vs Support Staff */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div
          className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
          >
            <ClipboardCheck size={22} style={{ color: "#a28c75" }} />
          </div>
          <div className="flex-1">
            <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
              Two roles, one framework
            </p>
            <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
              Providers and support staff need the same structure, different content
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
              A provider&apos;s onboarding needs to cover imaging systems, lab and PRP process, and the consult
              and follow-up flow. A patient care coordinator&apos;s needs to cover the scheduling tool,
              memberships, billing, and check-in — the front-of-house side of the practice. Both share the
              exact same Employment Policies foundation. The Onboarding Checklist Builder below starts you
              with a pre-built list for either role, so you&apos;re editing a real starting point instead of a
              blank page.
            </p>
          </div>
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
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
          The checklist is the framework. These habits are what make it a real process instead of a form that gets filled in from memory on the last day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
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
                  <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{tip.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.52)" }}>{tip.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA to the tool */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Link
          href="/members/resources/staff/onboarding-checklist"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <ListChecks size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Put it to work
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Build, save, and print an onboarding checklist for your next hire
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                Start from a Provider or Support Staff template, add or remove whatever fits your practice, and
                save it under its own name. Keep as many onboarding checklists as you need and print any of
                them as a clean, sign-off-ready document.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Onboarding Checklist Builder
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>

        {/* Welcome packet download */}
        <a
          href="/downloads/ae-new-hire-welcome-packet.docx"
          download
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40 mt-5"
          style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.13)" }}
        >
          <div className="p-7 flex items-center gap-5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
            >
              <Download size={18} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>New Hire Welcome Packet</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>The friendlier complement to the checklist above — parking, dress code, who&apos;s who, and a first-week checklist to hand a new hire on day one.</p>
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
    </div>
  );
}
