import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Palette,
  Type,
  Target,
  MessageSquare,
  Heart,
  Layers,
  ExternalLink,
  CheckCircle,
  Sparkles,
  Globe,
  Phone,
  DoorOpen,
  UserCheck,
  RefreshCw,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your Brand Kit | Aesthetic Executive",
};

const touchpoints = [
  {
    icon: Globe,
    title: "Your Website & Online Presence",
    body: "Before anyone calls, they've already formed an opinion. Your website, Instagram grid, Google listing — all of it communicates brand before you say a word. Is it speaking in your voice, or just existing?",
  },
  {
    icon: Phone,
    title: "The Phone Call",
    body: "The greeting script, the hold music, how your team phrases pricing, how they close the call — every syllable is brand. High-end practices don't sound like high-end practices by accident.",
  },
  {
    icon: DoorOpen,
    title: "Walking Through the Door",
    body: "The scent, the music, the lighting, the first thing said at the front desk. Patients form a trust judgment within 30 seconds of arrival. That judgment is either reinforcing your brand promise or quietly eroding it.",
  },
  {
    icon: UserCheck,
    title: "The Consultation",
    body: "The language your injectors and aestheticians use, how they educate, how they present recommendations — this is where brand voice becomes brand experience. Inconsistency here destroys premium positioning.",
  },
  {
    icon: RefreshCw,
    title: "After They Leave",
    body: "Your follow-up message, your review request, your holiday card — the relationship continues. Practices with strong brand kits have documented standards for all of it. Everyone on the team knows the tone.",
  },
];

const kitComponents = [
  {
    icon: Palette,
    title: "Color Palette",
    body: "Your primary, secondary, and accent colors — with exact HEX codes. No more 'the green one' in team Slack. Everyone uses the same colors, always.",
    tag: "Visual",
  },
  {
    icon: Type,
    title: "Typography",
    body: "Your primary, secondary, and body fonts — paired intentionally. Typography is the fastest way to communicate luxury or approachability before a single word is read.",
    tag: "Visual",
  },
  {
    icon: MessageSquare,
    title: "Brand Voice & Tone",
    body: "The personality words that describe how you communicate, the phrases your brand uses, the words and styles you deliberately avoid.",
    tag: "Voice",
  },
  {
    icon: Heart,
    title: "Core Values & Promise",
    body: "The 3–5 values that guide every decision in your practice, and the brand promise — the one thing you will never compromise on in a patient experience.",
    tag: "Foundation",
  },
  {
    icon: Target,
    title: "Target Client Profile",
    body: "Who you serve, what they care about, what they're looking for, and how they find you. When everyone on your team understands the client, the brand shows up consistently.",
    tag: "Strategy",
  },
  {
    icon: Layers,
    title: "Experience Standards",
    body: "How the consultation flows, what ambiance you create, how follow-up is handled. The operational standards that make your brand more than an aesthetic.",
    tag: "Experience",
  },
];

const tagColors: Record<string, { color: string; bg: string; border: string }> = {
  Visual: { color: "#b8a0e8", bg: "rgba(184,160,232,0.08)", border: "rgba(184,160,232,0.2)" },
  Voice: { color: "#8fc9a8", bg: "rgba(143,201,168,0.07)", border: "rgba(143,201,168,0.18)" },
  Foundation: { color: "#a28c75", bg: "rgba(162,140,117,0.09)", border: "rgba(162,140,117,0.22)" },
  Strategy: { color: "#e8c49a", bg: "rgba(232,196,154,0.08)", border: "rgba(232,196,154,0.2)" },
  Experience: { color: "#c8b3a3", bg: "rgba(200,179,163,0.08)", border: "rgba(200,179,163,0.2)" },
};

const builderSections = [
  {
    num: "01",
    title: "Brand Foundation",
    items: ["Practice name & mission", "Long-term vision", "Core values", "Slogan & brand promise"],
  },
  {
    num: "02",
    title: "Visual Identity",
    items: ["6-slot color palette with HEX codes", "Primary, secondary & body fonts", "Photography style notes", "Logo description"],
  },
  {
    num: "03",
    title: "Brand Voice",
    items: ["Tone personality words", "Language to use & avoid", "Sample social caption", "Sample email opening"],
  },
  {
    num: "04",
    title: "Target Client & Experience",
    items: ["Target client overview", "Differentiator statement", "Consultation & facility experience", "Follow-up standards"],
  },
];

export default function BrandKitPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* Hero */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(162,140,117,0.12)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-14">
          <Link
            href="/members/resources/marketing"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Marketing
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <BookOpen size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Marketing · Brand Strategy
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Build Your Brand Kit
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            Your brand is the sum of every impression your practice makes — before a patient
            books, during their visit, and long after they leave. A brand kit documents that
            identity so it can be delivered consistently by every person on your team, in
            every touchpoint, every single time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* Opening callout */}
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.22)",
          }}
        >
          <div className="flex items-start gap-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Sparkles size={20} style={{ color: "#a28c75" }} />
            </div>
            <div>
              <h2
                className="font-display text-2xl font-light mb-3 leading-snug"
                style={{ color: "#fffdf6" }}
              >
                Your brand is not your logo. It&apos;s the feeling a person gets every time they
                interact with you.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
                The practices that grow fastest are not always the most technically skilled or the most
                competitively priced. They are the ones with the most{" "}
                <span style={{ color: "rgba(255,253,246,0.85)" }}>intentional brand presence</span> — a
                look, a voice, an experience that feels unmistakably theirs at every patient touchpoint.
                A brand kit is the document that makes that possible at scale, across your team, and across
                every channel you market through.
              </p>
            </div>
          </div>
        </div>

        {/* Your brand lives in every touchpoint */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.22)",
              }}
            >
              <Layers size={16} style={{ color: "#a28c75" }} />
            </div>
            <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
              Your Brand Lives in Every Patient Touchpoint
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            Most practice owners think of branding as visual identity — the logo, the colors, the
            Instagram grid. But brand is what a patient experiences at every moment they interact with
            you. The gap between a forgettable practice and an unforgettable one almost always shows
            up here:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {touchpoints.map((tp) => {
              const Icon = tp.icon;
              return (
                <div
                  key={tp.title}
                  className="rounded-xl border p-6"
                  style={{
                    background: "rgba(162,140,117,0.03)",
                    borderColor: "rgba(162,140,117,0.12)",
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(162,140,117,0.1)",
                        border: "1px solid rgba(162,140,117,0.2)",
                      }}
                    >
                      <Icon size={14} style={{ color: "#a28c75" }} />
                    </div>
                    <h3
                      className="font-display text-base font-light leading-snug"
                      style={{ color: "#fffdf6" }}
                    >
                      {tp.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                    {tp.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="mt-5 rounded-xl border px-6 py-4"
            style={{
              background: "rgba(162,140,117,0.04)",
              borderColor: "rgba(162,140,117,0.13)",
            }}
          >
            <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>
              <span style={{ color: "#fffdf6" }}>The common thread:</span>{" "}
              every one of these touchpoints is either reinforcing your brand promise or quietly
              undermining it. A brand kit ensures your team knows which is which — and delivers the
              same experience regardless of who&apos;s on shift.
            </p>
          </div>
        </div>

        {/* What goes into a brand kit */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.22)",
              }}
            >
              <BookOpen size={16} style={{ color: "#a28c75" }} />
            </div>
            <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
              What Goes Into a Brand Kit
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            A complete brand kit is more than a style guide. It captures the visual, verbal, and
            experiential identity of your practice — everything a marketing agency, new hire, or
            social media manager needs to represent you accurately.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {kitComponents.map((comp) => {
              const Icon = comp.icon;
              const tc = tagColors[comp.tag];
              return (
                <div
                  key={comp.title}
                  className="rounded-xl border p-6 flex flex-col gap-4"
                  style={{
                    background: "rgba(162,140,117,0.03)",
                    borderColor: "rgba(162,140,117,0.12)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(162,140,117,0.1)",
                        border: "1px solid rgba(162,140,117,0.2)",
                      }}
                    >
                      <Icon size={15} style={{ color: "#a28c75" }} />
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-md font-medium tracking-wide"
                      style={{
                        color: tc.color,
                        background: tc.bg,
                        border: `1px solid ${tc.border}`,
                      }}
                    >
                      {comp.tag}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-display text-base font-light mb-2 leading-snug"
                      style={{ color: "#fffdf6" }}
                    >
                      {comp.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                      {comp.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why consistency is your advantage */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.22)",
              }}
            >
              <CheckCircle size={16} style={{ color: "#a28c75" }} />
            </div>
            <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
              Why Consistency Is Your Competitive Advantage
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "Team Alignment",
                body: "When every team member has access to the same brand document, the patient experience becomes institution-wide — not dependent on who's working that day. Your brand doesn't take days off.",
                accent: "#a28c75",
                bg: "rgba(162,140,117,0.07)",
                border: "rgba(162,140,117,0.18)",
              },
              {
                label: "Marketing Clarity",
                body: "Agencies, freelancers, and content creators produce work that actually looks like you. No more redesigning Instagram posts because the colors weren't quite right. Your brand kit is the brief.",
                accent: "#8fc9a8",
                bg: "rgba(143,201,168,0.06)",
                border: "rgba(143,201,168,0.16)",
              },
              {
                label: "Premium Positioning",
                body: "Luxury isn't just about price. It's about coherence — the feeling that every detail was considered. A consistent brand signals that you are a practice that operates at a higher standard.",
                accent: "#b8a0e8",
                bg: "rgba(184,160,232,0.06)",
                border: "rgba(184,160,232,0.16)",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border p-6"
                style={{ background: item.bg, borderColor: item.border }}
              >
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-3 font-medium"
                  style={{ color: item.accent }}
                >
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What you'll build — 4 sections preview */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              What You&apos;ll Build
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            The Brand Kit Builder walks you through four focused sections. When you&apos;re done, export
            a clean, polished document — branded in your own colors — that you can hand directly to
            your marketing agency, social media manager, or new hire.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {builderSections.map((sec) => (
              <div
                key={sec.num}
                className="rounded-xl border p-6 flex flex-col gap-4"
                style={{
                  background: "rgba(162,140,117,0.03)",
                  borderColor: "rgba(162,140,117,0.1)",
                }}
              >
                <span
                  className="font-display text-3xl font-light"
                  style={{ color: "rgba(162,140,117,0.28)" }}
                >
                  {sec.num}
                </span>
                <h3
                  className="font-display text-base font-light leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  {sec.title}
                </h3>
                <ul className="flex flex-col gap-1.5 mt-auto">
                  {sec.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs flex items-start gap-1.5"
                      style={{ color: "rgba(255,253,246,0.4)" }}
                    >
                      <span style={{ color: "rgba(162,140,117,0.5)", marginTop: "1px" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl border overflow-hidden"
          style={{
            borderColor: "rgba(162,140,117,0.2)",
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
          }}
        >
          <div className="p-8 md:p-10">
            <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>
              Ready to build yours?
            </h2>
            <p className="text-sm mb-8 max-w-xl" style={{ color: "rgba(255,253,246,0.45)" }}>
              Open the Brand Kit Builder, work through each section at your own pace — everything
              saves automatically. When you&apos;re ready, export a beautifully formatted brand kit
              document, styled in your own brand colors, ready to share.
            </p>

            <a
              href="/tools/brand-kit-builder.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm tracking-[0.1em] uppercase transition-all duration-200"
              style={{
                background: "rgba(162,140,117,0.15)",
                border: "1px solid rgba(162,140,117,0.3)",
                color: "#a28c75",
              }}
            >
              <ExternalLink size={14} />
              Open Brand Kit Builder
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className="text-xs leading-relaxed pb-4"
          style={{ color: "rgba(255,253,246,0.2)" }}
        >
          The information on this page is provided for educational and strategic planning
          purposes only. Brand strategy guidance does not substitute for professional marketing,
          legal, or business consulting services.
        </p>

      </div>
    </div>
  );
}
