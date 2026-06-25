import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
  "Business consulting & strategy",
  "Done-for-you templates & tools",
  "Financial frameworks & P&L guidance",
  "Staff training & leadership resources",
  "Marketing systems & patient acquisition",
  "Webinars, courses & educational content",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-blush pt-16 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">

            {/* Left — text */}
            <div className="py-16 lg:py-20">
              <p className="text-xs tracking-[0.3em] uppercase text-gold-600 mb-6">
                Founder &amp; Consultant
              </p>

              <h1 className="font-display text-5xl md:text-6xl font-light text-warm-900 leading-tight mb-6">
                Hi, I&apos;m<br />Kyla Evans.
              </h1>

              <p className="text-lg text-warm-600 leading-relaxed mb-4">
                I spent years inside aesthetic practices — in operations, marketing,
                business development, and leadership. I wasn&apos;t studying this industry
                from the outside. I was in it, managing teams, solving problems, and
                figuring out what actually works when the playbook doesn&apos;t exist.
              </p>

              <p className="text-base text-warm-500 leading-relaxed mb-10">
                What I kept seeing were brilliant clinicians and passionate practice owners
                who were exceptional at patient care — but lacked the business infrastructure
                to match. I built Aesthetic Executive to close that gap.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pricing"
                  className="h-12 px-7 bg-warm-900 text-cream text-sm font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center gap-2"
                >
                  Start Your Membership
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
            <div className="flex items-end justify-center lg:justify-end">
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
                &ldquo;I saw owners spending tens of thousands on consultants — for knowledge
                that should have been accessible all along.&rdquo;
              </p>
              <p className="text-sm text-warm-400 tracking-[0.15em] uppercase">
                — Kyla Evans, on founding Aesthetic Executive
              </p>
            </div>

            {/* Story body */}
            <div className="space-y-6 text-warm-300 leading-relaxed text-[15px]">
              <p>
                Before Aesthetic Executive, I spent years working inside medical spas and
                aesthetic practices, touching every corner of the business. From the first
                day a practice opens its doors to the systems that sustain a multi-location
                operation — I&apos;ve worked through it all: operations, marketing, team
                development, business development, and leadership.
              </p>
              <p>
                And what I kept seeing, over and over, was the same painful pattern. Practice
                owners who were extraordinary at what they did clinically — but who were
                flying blind when it came to the business side. They were reinventing the
                wheel on problems that had already been solved. They were spending $40,000 a
                year on consultants for access to information that should just exist. They
                were making high-stakes financial and operational decisions without the
                frameworks to back them up.
              </p>
              <p>
                I built Aesthetic Executive because I believe every practice owner deserves
                access to the same caliber of business knowledge — without the consultant
                price tag. The resources, templates, guides, and training I&apos;ve built here
                are the things I genuinely wish had existed when I was in the trenches.
              </p>
              <p>
                My mission is straightforward: help aesthetic and wellness practices become
                more organized, more profitable, and more confident in how they grow — so
                they can keep doing the patient care work that brought them into this
                industry in the first place.
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
                Whether you&apos;re just opening your doors or scaling toward your third
                location, Aesthetic Executive meets you where you are. Through consulting,
                educational resources, templates, webinars, and hands-on support, you get
                a partner who understands exactly what you&apos;re navigating — because I&apos;ve
                navigated it too.
              </p>
              <p className="text-warm-500 text-sm leading-relaxed">
                The membership covers the full operational spectrum of running a practice —
                so you can grow with strategy, not just effort.
              </p>
            </div>

            {/* Right — checklist */}
            <div className="bg-white rounded-2xl border border-warm-200 p-8 shadow-sm">
              <p className="text-xs tracking-[0.2em] uppercase text-warm-400 mb-6">
                Areas of focus
              </p>
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
                  href="/pricing"
                  className="w-full h-11 bg-warm-900 text-cream text-sm font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Explore Membership
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
            Join aesthetic practice owners and managers who have the resources,
            support, and frameworks to grow — without the guesswork.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="h-12 px-8 bg-gold-400 text-warm-950 text-sm font-medium rounded tracking-wide hover:bg-gold-500 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              Start Your Membership
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
