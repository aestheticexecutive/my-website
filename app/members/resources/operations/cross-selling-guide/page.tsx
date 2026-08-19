import Link from "next/link";
import {
  ArrowLeft,
  ShoppingBag,
  Lightbulb,
  Search,
  Route,
  Wrench,
  Users2,
  Target,
  BarChart2,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maximizing Cross-Selling Guide | Aesthetic Executive",
};

const steps = [
  {
    icon: Lightbulb,
    title: "1. Define what cross-selling means for you",
    body: "Pairing Botox with medical-grade skincare, a Hydrafacial after laser to soothe skin, body contouring + skin tightening as a package, a monthly facial membership after an initial facial — write down your practice's own valuable combos.",
  },
  {
    icon: Search,
    title: "2. Audit current performance",
    body: "Estimate what % of patients add a retail item, add-on, or additional service. Write down what's working and where it's falling short, then observe or secret shop your own team to see if recommendations happen at the right moments, with confidence.",
  },
  {
    icon: Route,
    title: "3. Identify cross-selling points in the patient journey",
    body: "Map the moments where cross-selling can happen naturally — consultation, during treatment, at checkout, and follow-up/aftercare — with a specific opportunity and action plan for each stage.",
  },
  {
    icon: Wrench,
    title: "4. Develop cross-selling tools",
    body: "A cheat sheet of top pairings, scripts or conversation starters, bundled service menus, retail displays near checkout, provider and front-desk incentives — decide what your team actually needs to sell well.",
  },
  {
    icon: Users2,
    title: "5. Train + role play",
    body: "How to identify needs, how to present add-ons without being pushy, retail product education, how to use the cross-sell cheat sheet — plan the training and who owns it.",
  },
  {
    icon: Target,
    title: "6. Set cross-sell goals",
    body: "% of visits that include a retail purchase, % of Botox patients who add skincare, % of consults that result in a combo booking — pick targets specific enough to track.",
  },
  {
    icon: BarChart2,
    title: "7. Track + adjust",
    body: "Decide what you'll measure, how it's tracked, and how often you'll review it — then put an actual review meeting on the calendar.",
  },
];

const tips = [
  {
    title: "Cross-selling isn't upselling",
    body: "Upselling pushes a bigger version of what the patient already wants. Cross-selling recommends something that genuinely improves their result — skincare that protects a Botox result, aftercare that extends a laser treatment. Lead with the second, and the first stops feeling like a sales pitch.",
  },
  {
    title: "The best cross-sells happen at natural moments",
    body: "A recommendation made mid-treatment, when the provider is already discussing the patient's skin, lands completely differently than one bolted onto checkout as an afterthought. Map the moment before you write the script.",
  },
  {
    title: "Give the team language, not just a list",
    body: "A cheat sheet of pairings tells your team what to sell. A script tells them how to say it without sounding scripted. Most practices only build the first one.",
  },
  {
    title: "Track it before you try to improve it",
    body: "\"We should cross-sell more\" isn't a plan. A specific %, a specific tracking method, and a specific review date turn it into something you can actually move.",
  },
];

export default function CrossSellingGuidePage() {
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
              <ShoppingBag size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Revenue Per Visit
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Maximizing Cross-Selling
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            Every patient who walks in already trusts you with their face. Cross-selling
            done well isn&apos;t a sales tactic — it&apos;s recommending the thing that
            actually makes their result better. This is the process for building that
            into how your team already works, at the moments it naturally fits.
          </p>
        </div>
      </div>

      {/* Why it matters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
            Why it matters
          </p>
          <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
            The easiest revenue growth you're not capturing
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            Growing revenue per visit doesn&apos;t require a single new patient — it requires
            your team to consistently recommend what already makes sense for the patient in
            front of them. Most practices leave this to whether an individual provider happens
            to think of it in the moment. Building it into the patient journey, with real
            scripts and tools, is what turns an occasional add-on into a predictable, trackable
            number.
          </p>
        </div>
      </div>

      {/* The process */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            The process
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Seven steps, from combos to a review cadence
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
          Start with what a good cross-sell actually looks like at your practice, end
          with a number you check on purpose.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
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
                  <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>{step.body}</p>
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
              style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{tip.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>{tip.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA to the tool */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Link
          href="/members/resources/operations/cross-selling-tool"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <ShoppingBag size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Put it to work
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Build your cross-selling plan
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                Brainstorm your combos, audit current performance, map the patient journey,
                and build a real training and tracking plan — pre-loaded with the source
                template&apos;s example journey stages, training topics, and metrics.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Cross-Selling Tool
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
