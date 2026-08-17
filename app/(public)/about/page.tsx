import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ComingSoonBadge } from "@/components/ui/ComingSoonBadge";

export const metadata: Metadata = {
  title: "About Kyla Evans | Aesthetic Executive",
  description:
    "Meet Kyla Evans — founder of Aesthetic Executive and the person behind the resources, consulting, and support helping aesthetic practices grow with confidence.",
};

const philosophy = [
  {
    number: "01",
    title: "Systems create freedom.",
    body: "The most successful practices aren't the ones with the most talented teams — they're the ones with the strongest systems behind their talent. When your operations are built on a solid framework, your team can do their best work without everything running through you.",
  },
  {
    number: "02",
    title: "Strategy is daily work.",
    body: "Growth isn't one big strategic moment. It's the accumulation of smart, intentional decisions made consistently — in the way you hire, the way you price, the way you manage your P&L, and the way you lead your team every single day.",
  },
  {
    number: "03",
    title: "Practical always wins.",
    body: "The best resource is the one you actually use. Everything I build is designed to be picked up and implemented immediately — not saved to a folder, referenced once, and forgotten. Real tools for real practices.",
  },
];

const offers = [
  "Lead follow-up & consultation conversion",
  "Patient retention & membership programs",
  "Team sales training & confidence",
  "Community partnerships & promotions",
  "Consistent, trackable marketing",
  "Operational systems built to scale",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-blush py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold-600 mb-6">
                Founder &amp; Consultant
              </p>

              <h1 className="font-display text-5xl md:text-6xl font-light text-warm-900 leading-tight mb-6">
                Built from experience.<br />Created to cut through the noise.
              </h1>

              <p className="text-lg text-warm-600 leading-relaxed mb-4">
                After nearly a decade working inside the aesthetics industry, I&apos;ve seen
                this business from just about every angle — marketing and patient
                acquisition, operations, sales, team development, retention,
                profitability, and growth.
              </p>

              <p className="text-base text-warm-500 leading-relaxed mb-10">
                And if there&apos;s one thing I&apos;ve learned, it&apos;s this: growing an
                aesthetic practice doesn&apos;t have to be as complicated, or as expensive,
                as people make it seem.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/waitlist"
                  className="h-12 px-7 bg-warm-900 text-cream text-sm font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center gap-2"
                >
                  Get on the VIP List
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/pricing"
                  className="h-12 px-7 bg-transparent text-warm-700 text-sm font-medium rounded tracking-wide border border-warm-300 hover:border-warm-500 transition-colors inline-flex items-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Right — photo */}
            <div className="flex items-center justify-center">
              <div
                className="relative w-full max-w-sm lg:max-w-none"
                style={{ maxWidth: "460px" }}
              >
                {/* Decorative dot grid behind photo */}
                <div
                  className="absolute -left-6 -bottom-6 w-40 h-40 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #a28c75 1.5px, transparent 1.5px)`,
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/kyla-evans.jpg"
                    alt="Kyla Evans, Founder of Aesthetic Executive"
                    width={920}
                    height={1150}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── The Story ── */}
      <section className="bg-warm-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Pull quote */}
            <div className="lg:sticky lg:top-24">
              <p className="font-display text-3xl md:text-4xl font-light text-cream leading-snug mb-6">
                &ldquo;No gatekeeping. No unnecessary complexity. No convincing you that you
                need to spend thousands of dollars every month just to grow your
                business.&rdquo;
              </p>
              <p className="text-sm text-warm-400 tracking-[0.15em] uppercase">
                — Kyla Evans, on why Aesthetic Executive exists
              </p>
            </div>

            {/* Story body */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-6">
                Why Aesthetic Executive Exists
              </p>
              <div className="space-y-6 text-warm-300 leading-relaxed text-[15px]">
                <p>
                  Practice owners are constantly being approached by agencies, consultants,
                  software companies, device companies, and self-proclaimed experts
                  promising the next big thing — more leads, more revenue, more patients,
                  more growth. And far too often, those promises come with a massive price
                  tag, an overly complicated strategy, and very little practical guidance on
                  what actually needs to happen inside the practice to make it successful.
                </p>
                <p>
                  That&apos;s exactly why I created Aesthetic Executive — the resource I wish
                  every aesthetic business owner had access to: a place where the strategies,
                  systems, tools, and knowledge used by successful practices are made
                  practical, accessible, and affordable.
                </p>
                <p>
                  Because sustainable growth usually isn&apos;t about finding some secret
                  strategy. It&apos;s about getting the fundamentals right — knowing your
                  numbers, creating an exceptional patient experience, training your team to
                  confidently sell without feeling salesy, following up with leads, retaining
                  the patients you already have, building smart promotions, creating
                  strategic community partnerships, marketing consistently, and tracking what
                  works.
                </p>
                <p>
                  Aesthetic Executive is here to cut through the BS and help you focus on
                  what actually moves the needle. Instead, you&apos;ll find proven strategies,
                  ready-to-use resources, practical education, and guidance designed
                  specifically for aesthetic and wellness practices.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Meet Kyla ── */}
      <section className="bg-blush py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — label + intro line */}
            <div className="lg:sticky lg:top-24">
              <p className="text-xs tracking-[0.3em] uppercase text-gold-600 mb-6">
                The Founder
              </p>
              <h2 className="font-display text-4xl font-light text-warm-900 leading-snug mb-4">
                Meet Kyla
              </h2>
              <p className="font-display text-2xl font-light text-warm-700 leading-snug">
                I&apos;m Kyla, the founder of Aesthetic Executive.
              </p>
            </div>

            {/* Right — bio body */}
            <div className="space-y-6 text-warm-600 leading-relaxed text-[15px]">
              <p>
                I&apos;ve spent nearly a decade working alongside aesthetic practices and
                have held leadership roles spanning marketing, operations, business
                development, customer success, and executive management.
              </p>
              <p>
                Throughout my career, I&apos;ve worked directly with practice owners and
                teams on the challenges that actually impact their businesses — from
                increasing consultations and improving conversion rates to launching new
                treatments, building membership programs, strengthening patient retention,
                developing marketing strategies, training teams, creating operational
                systems, and ultimately increasing revenue.
              </p>
              <p>
                What I&apos;ve learned is that most practices don&apos;t need more ideas.
                They need to know what to prioritize, how to execute it, and how to measure
                whether it&apos;s working. That philosophy became the foundation for
                Aesthetic Executive.
              </p>
              <p>
                I created this platform to give aesthetic business owners access to the
                kind of strategic support, resources, and infrastructure that can otherwise
                cost thousands of dollars through consultants, agencies, and outside
                vendors.
              </p>
              <p className="font-display text-xl font-light text-warm-900 leading-snug pt-2">
                You don&apos;t need another company promising you the world. You need the
                right strategy, and the tools to execute it. Welcome to Aesthetic
                Executive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-600 mb-4">
              What I believe
            </p>
            <h2 className="font-display text-4xl font-light text-warm-900">
              The principles behind everything I build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item) => (
              <div
                key={item.number}
                className="border-t-2 border-gold-300 pt-8"
              >
                <p className="font-display text-5xl font-light text-gold-200 mb-4">
                  {item.number}
                </p>
                <h3 className="font-display text-xl font-light text-warm-900 mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I offer ── */}
      <section className="bg-blush py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold-600 mb-4">
                How I can help
              </p>
              <h2 className="font-display text-4xl font-light text-warm-900 mb-6 leading-snug">
                Support at every stage of your practice
              </h2>
              <p className="text-warm-600 leading-relaxed mb-4 text-[15px]">
                Whether you&apos;re building your practice from the ground up, trying to
                break through a plateau, or ready to scale what you&apos;ve already created,
                Aesthetic Executive is designed to help you run your business with more
                strategy, more confidence, and a whole lot less guesswork.
              </p>
              <p className="text-warm-500 text-sm leading-relaxed">
                The membership covers the full operational spectrum of running a practice —
                so you can grow with strategy, not just effort.
              </p>
            </div>

            {/* Right — checklist */}
            <div className="bg-white rounded-2xl border border-warm-200 p-8 shadow-sm">
              <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                <p className="text-xs tracking-[0.2em] uppercase text-warm-400">
                  Areas of focus
                </p>
                <ComingSoonBadge theme="light" />
              </div>
              <ul className="space-y-4">
                {offers.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-gold-500 flex-shrink-0"
                    />
                    <span className="text-warm-700 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-warm-100">
                <Link
                  href="/waitlist"
                  className="w-full h-11 bg-warm-900 text-cream text-sm font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get on the VIP List
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-warm-950 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-light text-cream mb-4">
            Ready to build a practice that runs like a business?
          </h2>
          <p className="text-warm-400 mb-8 max-w-lg mx-auto leading-relaxed">
            Get on the VIP list for early access and exclusive founders
            pricing when membership opens — or start with a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/waitlist"
              className="h-12 px-8 bg-gold-400 text-warm-950 text-sm font-medium rounded tracking-wide hover:bg-gold-500 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              Get on the VIP List
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/"
              className="h-12 px-8 bg-transparent text-warm-300 text-sm font-medium rounded tracking-wide border border-warm-700 hover:border-warm-500 transition-colors inline-flex items-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
