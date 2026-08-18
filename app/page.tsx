import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Library,
  Target,
  PhoneCall,
} from "lucide-react";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";
import { ComingSoonBadge } from "@/components/ui/ComingSoonBadge";
import { DISCOVERY_CALL_URL, ONE_ON_ONE_BOOKING_URL } from "@/lib/constants";

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`text-[#a28c75] text-[10px] font-sans font-medium tracking-[0.35em] uppercase mb-4 ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

const paths = [
  {
    icon: Library,
    image: "/images/2f5a4a0386d3cfb51151c7ed6df0834f.jpg",
    name: "Membership",
    comingSoon: true,
    price: "$249.75/mo",
    priceNote: "founders pricing, billed annually",
    description:
      "Full access to the resource library — templates, tools, webinars, and courses built specifically for aesthetic and wellness practices. Everything you need to run day-to-day, always there when you need it.",
    bullets: [
      "Complete template & tool library",
      "Live and on-demand webinars",
      "Member-only community",
      "Discounted 1-on-1 rates",
    ],
    cta: "Get on the VIP List",
    href: "/waitlist",
  },
  {
    icon: Target,
    image: "/images/1bdbd37554b4b919d322eb2b76de2a0e.jpg",
    name: "Project-Based Work",
    comingSoon: false,
    price: "Custom pricing",
    priceNote: "scoped per project",
    description:
      "Work directly with Kyla on a specific initiative — building a membership program, financial benchmarking, staff KPIs, planning an event, and more. Scoped and priced around your goals, not a retainer.",
    bullets: [
      "Membership program builds",
      "Financial benchmarking",
      "Staff KPIs & onboarding systems",
      "Event planning",
    ],
    cta: "View project services",
    href: "/pricing",
  },
  {
    icon: PhoneCall,
    image: "/images/36a994bbc5f4187b31099444eaa52b91.jpg",
    name: "One-on-One Calls",
    comingSoon: false,
    price: "$50 · $40",
    priceNote: "standard · member rate, per 30 min",
    description:
      "Direct time with Kyla — a single call when you need quick, focused advice on one thing, or ongoing regular sessions when you want more hands-on, continued support.",
    bullets: [
      "30-minute sessions",
      "Book as-needed or recurring",
      "Discounted rate for members",
    ],
    cta: "Book a session",
    href: ONE_ON_ONE_BOOKING_URL,
  },
];

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 pt-16 bg-[#0c0004]">

        {/* ── Hero ── */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <Image
            src="/images/0dc4a7934e612ad3c64ed867e138697d.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={92}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0004] via-[#0c0004]/75 to-[#0c0004]/35" />

          <div className="relative w-full max-w-6xl mx-auto px-6 md:px-16 pb-20 pt-48">
            <Eyebrow>Aesthetic Executive</Eyebrow>
            <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-normal text-[#fffdf6] leading-[1.02] mb-7 max-w-3xl">
              Strategy, tools, and support —{" "}
              <em className="italic text-[#c8b3a3]">on your terms.</em>
            </h1>
            <p className="font-sans font-light text-[#fffdf6]/55 text-lg leading-relaxed max-w-xl mb-10">
              From a resource library you can put to use today, to hands-on,
              one-on-one work with Kyla — Aesthetic Executive meets you exactly
              where your practice is.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/waitlist"
                className="h-12 px-8 bg-[#a28c75] text-[#0c0004] text-sm font-medium rounded tracking-wide hover:bg-[#c8b3a3] transition-colors inline-flex items-center gap-2"
              >
                Get on the VIP List
                <ArrowRight size={16} />
              </Link>
              <a
                href={DISCOVERY_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 border border-[#fffdf6]/20 text-[#fffdf6]/70 text-sm font-medium rounded tracking-wide hover:border-[#fffdf6]/40 hover:text-[#fffdf6] transition-colors inline-flex items-center"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </section>

        {/* ── Editorial strip ── */}
        <div className="relative h-[42vh] overflow-hidden">
          <Image
            src="/images/37104297b444098038c25c36997feb7f.jpg"
            alt=""
            fill
            className="object-cover object-center"
            quality={92}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0c0004]/25" />
        </div>

        {/* ── Three ways to work with us ── */}
        <section className="py-20 md:py-28 border-b border-[#a28c75]/10">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16">
              <Eyebrow center>How to work with us</Eyebrow>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.75rem)] font-normal text-[#fffdf6] leading-[1.05] mb-5">
                Three ways in, one goal —{" "}
                <em className="italic text-[#c8b3a3]">a stronger practice</em>
              </h2>
              <p className="font-sans font-light text-[#fffdf6]/45 max-w-lg mx-auto leading-relaxed">
                Use the resource library on your own, bring Kyla in for a
                specific project, or get direct time with her on a call —
                start wherever makes sense right now.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {paths.map((path) => {
                const Icon = path.icon;
                return (
                  <div
                    key={path.name}
                    className="border border-[#a28c75]/15 rounded-2xl overflow-hidden bg-[#130007] flex flex-col"
                  >
                    <div className="relative h-40 flex-shrink-0">
                      <Image
                        src={path.image}
                        alt=""
                        fill
                        className="object-cover object-center"
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[#0c0004]/25" />
                      <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#0c0004]/70 backdrop-blur-sm border border-[#a28c75]/25 flex items-center justify-center">
                        <Icon size={16} className="text-[#a28c75]" />
                      </div>
                    </div>

                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                        <h3 className="font-display text-2xl font-normal text-[#fffdf6]">
                          {path.name}
                        </h3>
                        {path.comingSoon && <ComingSoonBadge />}
                      </div>
                      <p className="font-sans text-sm mb-4">
                        <span className="text-[#a28c75] font-medium">{path.price}</span>
                        <span className="text-[#fffdf6]/35"> — {path.priceNote}</span>
                      </p>
                      <p className="font-sans font-light text-sm text-[#fffdf6]/50 leading-relaxed mb-5">
                        {path.description}
                      </p>
                      <div className="space-y-2 mb-7">
                        {path.bullets.map((b) => (
                          <div key={b} className="flex items-start gap-2.5">
                            <CheckCircle2 size={13} className="text-[#a28c75] flex-shrink-0 mt-0.5" />
                            <span className="font-sans font-light text-xs text-[#fffdf6]/55">{b}</span>
                          </div>
                        ))}
                      </div>
                      {path.href.startsWith("http") ? (
                        <a
                          href={path.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.15em] uppercase text-[#a28c75] hover:text-[#c8b3a3] transition-colors"
                        >
                          {path.cta}
                          <ArrowRight size={12} />
                        </a>
                      ) : (
                        <Link
                          href={path.href}
                          className="mt-auto inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.15em] uppercase text-[#a28c75] hover:text-[#c8b3a3] transition-colors"
                        >
                          {path.cta}
                          <ArrowRight size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Discovery call ── */}
        <section className="py-12 md:py-16 border-b border-[#a28c75]/10">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <div className="border border-[#a28c75]/20 rounded-2xl p-10 md:p-14 bg-[#130007] text-center">
              <Eyebrow center>Not sure where to start?</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-normal text-[#fffdf6] leading-[1.05] mb-6">
                Let&apos;s figure out what&apos;s{" "}
                <em className="italic text-[#c8b3a3]">right for you</em>
              </h2>
              <p className="font-sans font-light text-[#fffdf6]/50 leading-relaxed max-w-lg mx-auto mb-10">
                Book a free 15 minute discovery call with Kyla. She&apos;ll talk
                you through where your practice is right now and help you
                figure out whether membership, a project, a one-on-one call, or
                a combination makes the most sense for you.
              </p>
              <a
                href={DISCOVERY_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-9 bg-[#a28c75] text-[#0c0004] text-sm font-medium rounded tracking-wide hover:bg-[#c8b3a3] transition-colors inline-flex items-center justify-center gap-2"
              >
                Book a Free Discovery Call
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ── Learn more about Kyla ── */}
        <section className="py-12 md:py-16 border-b border-[#a28c75]/10">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-[#a28c75]/20 h-80 md:h-96">
                <Image
                  src="/images/kyla-evans.jpg"
                  alt="Kyla Evans, founder of Aesthetic Executive"
                  fill
                  className="object-cover object-top"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div>
                <Eyebrow>The Person Behind It</Eyebrow>
                <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-[#fffdf6] leading-[1.05] mb-6">
                  Built by someone who&apos;s{" "}
                  <em className="italic text-[#c8b3a3]">done the work</em>
                </h2>
                <p className="font-sans font-light text-[#fffdf6]/50 leading-relaxed mb-4 max-w-lg">
                  Aesthetic Executive was built from nearly a decade working inside
                  the aesthetics industry — not as an outside consultant looking
                  in, but from inside the same practices, solving the same
                  problems you&apos;re solving.
                </p>
                <p className="font-sans font-light text-[#fffdf6]/50 leading-relaxed mb-8 max-w-lg">
                  Learn more about Kyla, and why she built this platform in the
                  first place.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.15em] uppercase text-[#a28c75] hover:text-[#c8b3a3] transition-colors"
                >
                  Learn More About Kyla
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Editorial strip ── */}
        <div className="relative h-[38vh] overflow-hidden">
          <Image
            src="/images/443f4143f4d6cc1573a3fd34a79c13a8.jpg"
            alt=""
            fill
            className="object-cover object-center"
            quality={92}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0c0004]/15" />
        </div>

        {/* ── Closing CTA ── */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <Image
            src="/images/4dc7ee885d15af741500061f4a2149fd.jpg"
            alt=""
            fill
            className="object-cover object-center"
            quality={92}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0c0004]/80" />

          <div className="relative max-w-3xl mx-auto px-6 md:px-16 text-center">
            <Eyebrow center>Get started</Eyebrow>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-normal text-[#fffdf6] leading-[1.05] mb-6">
              Ready to get to work?
            </h2>
            <p className="font-sans font-light text-[#fffdf6]/50 text-lg leading-relaxed max-w-sm mx-auto mb-12">
              Get on the VIP list, book a project, or start with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/waitlist"
                className="h-12 px-9 bg-[#a28c75] text-[#0c0004] text-sm font-medium rounded tracking-wide hover:bg-[#c8b3a3] transition-colors inline-flex items-center justify-center gap-2"
              >
                Get on the VIP List
                <ArrowRight size={15} />
              </Link>
              <a
                href={DISCOVERY_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-9 border border-[#fffdf6]/20 text-[#fffdf6]/70 text-sm font-medium rounded tracking-wide hover:border-[#fffdf6]/40 hover:text-[#fffdf6] transition-colors inline-flex items-center justify-center"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
