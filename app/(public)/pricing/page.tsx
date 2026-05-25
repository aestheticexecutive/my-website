"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Palette,
  Users,
  BarChart2,
  ListChecks,
  CreditCard,
  BookOpen,
  Megaphone,
  TrendingUp,
  ClipboardCheck,
  Compass,
} from "lucide-react";

const discoveryChips = [
  "Starting a practice",
  "Growing revenue",
  "Building a team",
  "A specific project",
  "Not sure yet",
];

const memberFeatures = [
  "Complete business template library",
  "Live and on-demand webinars",
  "Financial tools and KPI trackers",
  "Member-only community",
  "Early access to new content",
  "Discounted 1-on-1 sessions — $40 vs $50 standard rate",
];

const projectServices = [
  {
    icon: Palette,
    name: "Brand kit development",
    desc: "Logo, color palette, typography, and brand guidelines built for aesthetic practices.",
  },
  {
    icon: Users,
    name: "Sales training (team)",
    desc: "Custom training to help your front desk and clinical staff convert consultations.",
  },
  {
    icon: BarChart2,
    name: "Financial benchmarking report",
    desc: "Benchmark your KPIs against industry data and identify where revenue is being left behind.",
  },
  {
    icon: ListChecks,
    name: "Service menu and pricing audit",
    desc: "Optimize your treatment offerings and pricing structure for profitability and retention.",
  },
  {
    icon: CreditCard,
    name: "Patient membership program build",
    desc: "Design and launch a recurring revenue membership model for your patient base.",
  },
  {
    icon: BookOpen,
    name: "Staff onboarding system",
    desc: "Documented onboarding processes, checklists, and training materials for new hires.",
  },
  {
    icon: Megaphone,
    name: "Marketing content package",
    desc: "A strategic content plan and done-for-you asset package built around your brand.",
  },
  {
    icon: TrendingUp,
    name: "Device ROI analysis",
    desc: "Model the real return on a device investment before you sign the contract.",
  },
  {
    icon: ClipboardCheck,
    name: "Consultation process audit",
    desc: "Review your consultation workflow to improve patient experience and booking conversion.",
  },
  {
    icon: Compass,
    name: "90-day growth roadmap",
    desc: "A custom action plan built around your practice's specific goals, gaps, and revenue targets.",
  },
];

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`text-[#a28c75] text-[10px] font-sans font-medium tracking-[0.35em] uppercase mb-4 ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

export default function PricingPage() {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  function toggleChip(chip: string) {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  }

  return (
    <div className="bg-[#0c0004] text-[#fffdf6]">

      {/* ── 1. HERO — motion blur editorial portrait ────────── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <Image
          src="/images/Hero Background.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={92}
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0004]/95 via-[#0c0004]/80 to-[#0c0004]/50" />

        {/* Decorative vertical rule */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#a28c75]/20 to-transparent" />

        <div className="relative w-full max-w-6xl mx-auto px-8 md:px-16 pb-20 md:pb-28 pt-48">
          <Eyebrow>Investment</Eyebrow>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-normal text-[#fffdf6] leading-[0.95] mb-8 max-w-4xl">
            Built for practices
            <br />
            that are{" "}
            <em className="italic text-[#c8b3a3]">ready to grow</em>
          </h1>
          <p className="font-sans font-light text-[#fffdf6]/50 text-lg leading-relaxed max-w-md mb-14">
            Aesthetic Executive gives practice owners and managers the strategy,
            tools, and support to run their business with confidence — without
            the six-figure consultant.
          </p>
          <div className="w-16 h-px bg-[#a28c75]/60" />
        </div>
      </section>

      {/* ── SLOGAN STRIP ─────────────────────────────────────── */}
      <div className="bg-[#2f0410] border-y border-[#a28c75]/15 py-4 px-6 text-center">
        <p className="font-display text-[#fffdf6]/50 text-base italic tracking-widest">
          Where the business of beauty gets serious.
        </p>
      </div>

      {/* ── EDITORIAL BREAK 1 — aerial spiral staircase ──────── */}
      <div className="relative h-[55vh] overflow-hidden">
        <Image
          src="/images/Editorial break (full-width strip).png"
          alt=""
          fill
          className="object-cover object-center"
          quality={92}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0c0004]/35" />
      </div>

      {/* ── 2. DISCOVERY CALL ────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[#a28c75]/10">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-[1fr_360px] gap-14 md:gap-20 items-start">

            {/* Left — text + chips */}
            <div>
              <Eyebrow>Not sure where to start?</Eyebrow>
              <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-normal text-[#fffdf6] leading-[1.05] mb-6">
                Let&apos;s figure out what&apos;s{" "}
                <em className="italic text-[#c8b3a3]">right for you</em>
              </h2>
              <p className="font-sans font-light text-[#fffdf6]/50 leading-relaxed mb-10">
                A free 15-minute call — no pitch, no pressure. We&apos;ll talk
                through where you are, what you&apos;re working toward, and
                whether Aesthetic Executive is the right fit.
              </p>
              <div className="flex flex-wrap gap-2">
                {discoveryChips.map((chip) => {
                  const active = selectedChips.includes(chip);
                  return (
                    <button
                      key={chip}
                      onClick={() => toggleChip(chip)}
                      className={`px-5 py-2.5 rounded-full text-sm font-sans font-light border transition-all duration-200 cursor-pointer ${
                        active
                          ? "bg-[#a28c75] text-[#0c0004] border-[#a28c75] font-medium"
                          : "bg-transparent text-[#fffdf6]/60 border-[#a28c75]/25 hover:border-[#a28c75]/55 hover:text-[#fffdf6]"
                      }`}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right — booking card */}
            <div className="border border-[#a28c75]/20 rounded-xl p-8 bg-[#180008]">
              <div className="mb-6 pb-6 border-b border-[#a28c75]/10">
                <p className="font-display text-4xl font-normal text-[#fffdf6] leading-none mb-2">
                  Free
                </p>
                <p className="font-sans font-light text-[#fffdf6]/35 text-sm">
                  No commitment required
                </p>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "15 minutes, by phone or video",
                  "No sales pitch — just a real conversation",
                  "Walk away with clarity, regardless",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={14}
                      className="text-[#a28c75] flex-shrink-0 mt-0.5"
                    />
                    <span className="font-sans font-light text-sm text-[#fffdf6]/60">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full h-11 bg-[#a28c75] text-[#0c0004] font-sans text-xs font-semibold rounded tracking-[0.2em] uppercase hover:bg-[#c8b3a3] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
                Book a discovery call
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CINEMATIC STRIP — warm golden heels in motion ────── */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/Cinematic strip (full-width).png"
          alt=""
          fill
          className="object-cover object-center"
          quality={92}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0c0004]/45" />
      </div>

      {/* ── 3. MEMBERSHIP — split image + card ───────────────── */}
      <section className="py-20 md:py-28 bg-[#0f0006] border-b border-[#a28c75]/10">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="text-center mb-12">
            <Eyebrow center>Annual membership</Eyebrow>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-normal text-[#fffdf6] leading-[1.05]">
              Full Access Membership
            </h2>
          </div>

          <div className="border border-[#a28c75]/20 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.15fr]">

              {/* Left — editorial image */}
              <div className="relative h-64 md:h-auto min-h-[480px]">
                <Image
                  src="/images/Membership left panel.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                  quality={92}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#0c0004]/20" />
              </div>

              {/* Right — card content */}
              <div>
                {/* Price header */}
                <div
                  className="px-8 md:px-10 py-10"
                  style={{
                    background:
                      "linear-gradient(135deg, #2f0410 0%, #3d0818 60%, #2f0410 100%)",
                  }}
                >
                  <p className="font-sans text-[10px] text-[#fffdf6]/30 tracking-[0.3em] uppercase mb-5">
                    Full Access Membership
                  </p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-[clamp(3rem,7vw,5.5rem)] font-normal text-[#fffdf6] leading-none">
                      $249.75
                    </span>
                    <span className="font-sans font-light text-[#fffdf6]/35 text-base">
                      /month
                    </span>
                  </div>
                  <p className="font-sans font-light text-[#fffdf6]/30 text-sm mb-3">
                    Billed annually — $2,997/year
                  </p>
                  <p className="font-sans font-light text-[#a28c75] text-sm italic">
                    Less than one lost patient visit.
                  </p>
                </div>

                {/* Features + CTA */}
                <div className="bg-[#150008] px-8 md:px-10 py-8">
                  <div className="space-y-3 mb-10">
                    {memberFeatures.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          size={14}
                          className="text-[#a28c75] flex-shrink-0 mt-0.5"
                        />
                        <span className="font-sans font-light text-sm text-[#fffdf6]/60">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="w-full h-12 bg-[#a28c75] text-[#0c0004] font-sans text-xs font-semibold rounded tracking-[0.2em] uppercase hover:bg-[#c8b3a3] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
                      Join Aesthetic Executive
                      <ArrowRight size={13} />
                    </button>
                    <button className="w-full h-12 border border-[#a28c75]/25 text-[#fffdf6]/50 font-sans text-xs font-light rounded tracking-[0.15em] uppercase hover:border-[#a28c75]/55 hover:text-[#fffdf6] transition-colors inline-flex items-center justify-center cursor-pointer">
                      See what&apos;s inside
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SESSIONS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[#a28c75]/10">
        <div className="max-w-4xl mx-auto px-8 md:px-16">

          {/* Editorial image — syringe on silver tray */}
          <div className="relative h-52 w-full max-w-sm mx-auto mb-14 rounded-xl overflow-hidden">
            <Image
              src="/images/Sessions intro (small centered).png"
              alt=""
              fill
              className="object-cover object-center"
              quality={92}
              sizes="(max-width: 768px) 100vw, 384px"
            />
            <div className="absolute inset-0 bg-[#0c0004]/15" />
          </div>

          <div className="text-center mb-14">
            <Eyebrow center>1-on-1 sessions</Eyebrow>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-normal text-[#fffdf6] leading-[1.05]">
              Strategy Sessions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {/* Standard */}
            <div className="border border-[#a28c75]/12 rounded-xl p-8 bg-[#130007]">
              <p className="font-sans text-[10px] text-[#fffdf6]/30 tracking-[0.3em] uppercase mb-6">
                Standard rate
              </p>
              <h3 className="font-display text-3xl font-normal text-[#fffdf6] mb-3">
                Strategy Session
              </h3>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="font-display text-6xl font-normal text-[#fffdf6] leading-none">
                  $50
                </span>
                <span className="font-sans font-light text-[#fffdf6]/35 text-sm">
                  per 30 min
                </span>
              </div>
              <button className="w-full h-11 border border-[#a28c75]/20 text-[#fffdf6]/50 font-sans text-xs font-light rounded tracking-[0.2em] uppercase hover:border-[#a28c75]/50 hover:text-[#fffdf6] transition-colors cursor-pointer">
                Book a session
              </button>
            </div>

            {/* Member rate */}
            <div className="border border-[#a28c75]/40 rounded-xl p-8 bg-[#1c000e] relative">
              <div className="absolute -top-3.5 left-7">
                <span className="bg-[#a28c75] text-[#0c0004] font-sans text-[10px] font-semibold px-3.5 py-1.5 rounded-full tracking-[0.2em] uppercase">
                  Member Rate
                </span>
              </div>
              <p className="font-sans text-[10px] text-[#a28c75] tracking-[0.3em] uppercase mb-6">
                Member rate
              </p>
              <h3 className="font-display text-3xl font-normal text-[#fffdf6] mb-3">
                Strategy Session
              </h3>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="font-display text-6xl font-normal text-[#fffdf6] leading-none">
                  $40
                </span>
                <span className="font-sans font-light text-[#fffdf6]/35 text-sm">
                  per 30 min
                </span>
              </div>
              <button className="w-full h-11 bg-[#a28c75] text-[#0c0004] font-sans text-xs font-semibold rounded tracking-[0.2em] uppercase hover:bg-[#c8b3a3] transition-colors cursor-pointer">
                Book as a member
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── "SUCCESS IS A DECISION" ───────────────────────────── */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/THINK BIGGER strip (full-width).png"
          alt=""
          fill
          className="object-cover object-center"
          quality={92}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0c0004]/20" />
      </div>

      {/* ── 5. PROJECT SERVICES ──────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0f0006] border-b border-[#a28c75]/10">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="text-center mb-14">
            <Eyebrow center>Project Services</Eyebrow>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-normal text-[#fffdf6] leading-[1.05] mb-4">
              Focused work, defined scope
            </h2>
            <p className="font-sans font-light text-[#fffdf6]/40 max-w-md mx-auto leading-relaxed">
              Project services are scoped and priced individually — no retainer
              required.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectServices.map(({ icon: Icon, name, desc }) => (
              <div
                key={name}
                className="bg-[#130007] border border-[#a28c75]/10 rounded-xl p-6 hover:border-[#a28c75]/30 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#2f0410] flex items-center justify-center mb-5 group-hover:bg-[#3d0818] transition-colors">
                  <Icon size={16} className="text-[#a28c75]" />
                </div>
                <h3 className="font-sans font-medium text-[#fffdf6] text-sm mb-2">
                  {name}
                </h3>
                <p className="font-sans font-light text-xs text-[#fffdf6]/38 leading-relaxed mb-5">
                  {desc}
                </p>
                <span className="font-sans text-[10px] text-[#a28c75] font-medium tracking-[0.2em] uppercase">
                  Custom pricing
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA — "My dream life is already mine" bg ──────── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <Image
          src="/images/CTA background.png"
          alt=""
          fill
          className="object-cover object-center"
          quality={92}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0c0004]/78" />

        <div className="relative max-w-4xl mx-auto px-8 md:px-16 text-center">
          <p className="font-sans font-light text-[#a28c75] text-[10px] tracking-[0.35em] uppercase mb-6">
            Get started
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-normal text-[#fffdf6] leading-[0.95] mb-6">
            Ready to get
            <br />
            to work?
          </h2>
          <p className="font-sans font-light text-[#fffdf6]/45 text-lg leading-relaxed max-w-xs mx-auto mb-14">
            Join the membership or start with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-12 px-10 bg-[#a28c75] text-[#0c0004] font-sans text-xs font-semibold rounded tracking-[0.2em] uppercase hover:bg-[#c8b3a3] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
              Join Aesthetic Executive
              <ArrowRight size={13} />
            </button>
            <button className="h-12 px-10 border border-[#fffdf6]/15 text-[#fffdf6]/50 font-sans text-xs font-light rounded tracking-[0.2em] uppercase hover:border-[#fffdf6]/35 hover:text-[#fffdf6] transition-colors inline-flex items-center justify-center cursor-pointer">
              Book a discovery call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
