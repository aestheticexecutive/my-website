import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatment Landing Page Playbook | Aesthetic Executive",
  description:
    "The SEO and conversion guide for building treatment landing pages that rank in Google and turn visits into booked consultations.",
};

/* ─────────────────────────────── helpers ─── */

function PartLabel({ part, label }: { part: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className="text-xs tracking-[0.25em] uppercase px-3 py-1.5 rounded-full flex-shrink-0"
        style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
      >
        {part}
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-light" style={{ color: "#fffdf6" }}>
        {label}
      </h2>
      <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
    </div>
  );
}

function TipNumber({ n }: { n: number }) {
  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-medium"
      style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
    >
      {n}
    </div>
  );
}

/* ─────────────────────────────── page ─── */

export default function LandingPagesPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link
            href="/members/resources/marketing"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Marketing Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Globe size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Marketing Resources · Website
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Treatment Landing Page Playbook
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            Every treatment page on your site is a revenue system, not a brochure.
            Its job is twofold — get found by the right patient at the right moment,
            then convert that visit into a booked consultation.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── TWO JOBS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="rounded-2xl p-7"
            style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
            >
              🔍
            </div>
            <h3 className="font-display text-xl font-light mb-2" style={{ color: "#fffdf6" }}>Job 1: Get Found</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
              Rank in Google when the right patient searches for your treatment
              in your city — at the exact moment they&apos;re ready to book.
            </p>
          </div>
          <div
            className="rounded-2xl p-7"
            style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
            >
              📅
            </div>
            <h3 className="font-display text-xl font-light mb-2" style={{ color: "#fffdf6" }}>Job 2: Convert</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
              Turn that visit into a booked consultation by building trust,
              answering objections, and making the next step frictionless.
            </p>
          </div>
        </div>

        {/* ── VISUAL PAGE ANATOMY ── */}
        <div>
          <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>What a High-Converting Page Looks Like</h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,253,246,0.45)" }}>
            Think of the page as a guided path — every section moves the reader one step closer to booking.
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Wireframe */}
            <div
              className="w-full md:w-72 flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(162,140,117,0.2)", background: "#0f0006" }}
            >
              {/* Browser chrome */}
              <div
                className="px-4 py-3 flex items-center gap-2"
                style={{ background: "#1a000c", borderBottom: "1px solid rgba(162,140,117,0.12)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                </div>
                <div
                  className="flex-1 h-5 rounded-sm text-xs flex items-center px-2"
                  style={{ background: "rgba(162,140,117,0.08)", color: "rgba(162,140,117,0.5)" }}
                >
                  yourpractice.com/morpheus8
                </div>
              </div>

              <div className="p-4 space-y-2">
                {/* Hero zone */}
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <div className="text-xs font-medium mb-2" style={{ color: "#a28c75" }}>① Above the Fold</div>
                  <div className="h-3 rounded mb-1.5" style={{ background: "rgba(255,253,246,0.15)", width: "85%" }} />
                  <div className="h-2 rounded mb-1.5" style={{ background: "rgba(255,253,246,0.07)", width: "60%" }} />
                  <div
                    className="mt-2 h-6 rounded text-xs flex items-center justify-center font-medium"
                    style={{ background: "rgba(162,140,117,0.35)", color: "#fffdf6" }}
                  >
                    Schedule Consultation →
                  </div>
                </div>

                {/* Trust zone */}
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(100,150,200,0.08)", border: "1px solid rgba(100,150,200,0.18)" }}
                >
                  <div className="text-xs font-medium mb-2" style={{ color: "#7aabcf" }}>② Trust Signals</div>
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-10 rounded" style={{ background: "rgba(100,150,200,0.1)" }} />
                    ))}
                  </div>
                </div>

                {/* Content zone */}
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(120,180,120,0.07)", border: "1px solid rgba(120,180,120,0.15)" }}
                >
                  <div className="text-xs font-medium mb-2" style={{ color: "#7db870" }}>③ Treatment Content</div>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-2 rounded mb-1.5" style={{ background: "rgba(255,253,246,0.07)", width: `${70 + Math.random() * 25}%` }} />
                  ))}
                </div>

                {/* Before/After */}
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.14)" }}
                >
                  <div className="text-xs font-medium mb-2" style={{ color: "#a28c75" }}>④ Before &amp; After</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-12 rounded" style={{ background: "rgba(162,140,117,0.1)" }} />
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(200,160,80,0.07)", border: "1px solid rgba(200,160,80,0.15)" }}
                >
                  <div className="text-xs font-medium mb-2" style={{ color: "#c8a050" }}>⑤ FAQ / Objections</div>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-2 rounded mb-1.5" style={{ background: "rgba(255,253,246,0.07)" }} />
                  ))}
                </div>

                {/* Form */}
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(160,100,200,0.08)", border: "1px solid rgba(160,100,200,0.18)" }}
                >
                  <div className="text-xs font-medium mb-2" style={{ color: "#a064c8" }}>⑥ Contact Form</div>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-5 rounded mb-1.5" style={{ background: "rgba(160,100,200,0.1)" }} />
                  ))}
                  <div
                    className="mt-1 h-6 rounded text-xs flex items-center justify-center"
                    style={{ background: "rgba(160,100,200,0.25)", color: "#fffdf6" }}
                  >
                    Request My Consultation
                  </div>
                </div>
              </div>
            </div>

            {/* Zone legend */}
            <div className="flex-1 space-y-3">
              {[
                {
                  num: "①", color: "#a28c75", bg: "rgba(162,140,117,0.08)", border: "rgba(162,140,117,0.2)",
                  label: "Above the Fold",
                  desc: "Lead with patient outcome, not device name. One clear CTA visible before scrolling. Real photo — not stock.",
                },
                {
                  num: "②", color: "#7aabcf", bg: "rgba(100,150,200,0.06)", border: "rgba(100,150,200,0.15)",
                  label: "Trust Signals",
                  desc: "Before/after photos, provider credentials, Google review snippets, and device brand logos. Place 2–3 above mid-page.",
                },
                {
                  num: "③", color: "#7db870", bg: "rgba(120,180,120,0.06)", border: "rgba(120,180,120,0.14)",
                  label: "Treatment Content",
                  desc: "800–1,200 words minimum. What it is, how it works, candidacy, experience, downtime, and results timeline.",
                },
                {
                  num: "④", color: "#a28c75", bg: "rgba(162,140,117,0.05)", border: "rgba(162,140,117,0.13)",
                  label: "Before & After Gallery",
                  desc: "Your single highest-converting asset. Real patient photos with consent. Repeat your CTA button directly below.",
                },
                {
                  num: "⑤", color: "#c8a050", bg: "rgba(200,160,80,0.06)", border: "rgba(200,160,80,0.14)",
                  label: "FAQ / Answer Objections",
                  desc: "Pain, cost, downtime, candidacy. Written from real consultation questions — also your best shot at featured snippets.",
                },
                {
                  num: "⑥", color: "#a064c8", bg: "rgba(160,100,200,0.06)", border: "rgba(160,100,200,0.16)",
                  label: "Contact Form",
                  desc: "Minimum fields only. Button says 'Request My Consultation' not 'Submit.' State what happens next.",
                },
              ].map((z) => (
                <div
                  key={z.num}
                  className="rounded-xl px-5 py-4 flex items-start gap-4"
                  style={{ background: z.bg, border: `1px solid ${z.border}` }}
                >
                  <span
                    className="text-sm font-medium flex-shrink-0 w-6 text-center"
                    style={{ color: z.color }}
                  >{z.num}</span>
                  <div>
                    <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{z.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{z.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════ PART 1 ══ */}
        <div>
          <PartLabel part="Part 1" label="SEO Foundation — Getting Found" />

          <div className="space-y-10">

            {/* TIP 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={1} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>One Page, One Treatment, One Intent</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                Never combine multiple treatments on a single page. Search engines and patients both reward specificity.
                A patient searching &ldquo;Morpheus8 near me&rdquo; wants Morpheus8 — not a menu of ten treatments.
              </p>

              {/* Side-by-side comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="rounded-xl p-5"
                  style={{ background: "rgba(200,80,80,0.06)", border: "1px solid rgba(200,80,80,0.2)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-base">✗</span>
                    <span className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(200,80,80,0.8)" }}>Don&apos;t do this</span>
                  </div>
                  <div
                    className="rounded-lg p-4 text-sm"
                    style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>yoursite.com/body-contouring</div>
                    <div className="font-medium mb-3" style={{ color: "#fffdf6" }}>Body Contouring Treatments</div>
                    <ul className="space-y-1">
                      {["Morpheus8", "EmpowerRF", "CoolSculpting", "Kybella"].map(t => (
                        <li key={t} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.4)" }}>
                          <span>·</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs mt-3 leading-relaxed" style={{ color: "rgba(200,80,80,0.7)" }}>
                    Dilutes ranking signal. Google can&apos;t tell which treatment is the focus — so it ranks your page for none of them well.
                  </p>
                </div>

                <div
                  className="rounded-xl p-5"
                  style={{ background: "rgba(100,180,100,0.06)", border: "1px solid rgba(100,180,100,0.2)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-base">✓</span>
                    <span className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(100,180,100,0.8)" }}>Do this</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "yoursite.com/morpheus8",
                      "yoursite.com/empowerrf",
                      "yoursite.com/coolsculpting",
                    ].map((url) => (
                      <div
                        key={url}
                        className="rounded-lg px-3 py-2.5 text-xs"
                        style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,253,246,0.55)" }}
                      >
                        {url}
                      </div>
                    ))}
                    <div
                      className="rounded-lg px-3 py-2 text-xs flex items-center gap-2"
                      style={{ background: "rgba(100,180,100,0.1)", color: "rgba(100,180,100,0.8)" }}
                    >
                      + separate page per location if multi-site
                    </div>
                  </div>
                  <p className="text-xs mt-3 leading-relaxed" style={{ color: "rgba(100,180,100,0.7)" }}>
                    One page = one strong ranking signal. Each page competes to rank for its own specific treatment.
                  </p>
                </div>
              </div>
            </div>

            {/* TIP 2 — SERP mockup */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={2} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Title Tags &amp; Meta Descriptions</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                These are what patients see in Google before they click. Your title tag must stay under 60 characters
                or Google truncates it. Your meta description should lead with the outcome, include the city, and end with a soft CTA.
              </p>

              {/* Google SERP mockup */}
              <div
                className="rounded-xl p-6"
                style={{ background: "#fff", maxWidth: 560 }}
              >
                <div className="text-xs mb-4" style={{ color: "#4d5156", fontFamily: "Arial, sans-serif" }}>
                  <span style={{ color: "#202124" }}>yourpractice.com</span> › morpheus8
                </div>

                <div className="mb-1" style={{ fontFamily: "Arial, sans-serif" }}>
                  <span style={{ color: "#1a0dab", fontSize: 18, lineHeight: 1.3 }}>
                    Morpheus8 Skin Tightening in Atlanta | Glow Med Spa
                  </span>
                </div>
                <div style={{ color: "#4d5156", fontSize: 13, fontFamily: "Arial, sans-serif", lineHeight: 1.5, maxWidth: 520 }}>
                  Tighter, smoother skin without surgery. See if Morpheus8 is right for you — schedule your consultation in Atlanta today.
                </div>

                {/* Annotations */}
                <div className="mt-5 pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3" style={{ borderTop: "1px solid #e8eaed" }}>
                  {[
                    { label: "Title tag", note: "Treatment + City + Practice. Under 60 chars.", color: "#1a0dab" },
                    { label: "Outcome first", note: "Lead with patient benefit, not device specs.", color: "#137333" },
                    { label: "Soft CTA", note: "\"Schedule your consultation\" — clear next step.", color: "#b06000" },
                  ].map(a => (
                    <div key={a.label}>
                      <div className="text-xs font-medium mb-1" style={{ color: a.color }}>{a.label}</div>
                      <div className="text-xs" style={{ color: "#5f6368" }}>{a.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TIP 3 — Heading hierarchy */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={3} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Heading Structure That Signals Relevance</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                Search engines read your heading hierarchy literally. One H1 only — containing the treatment name and primary benefit.
                H2s answer the real questions patients (and Google) expect to find on the page.
              </p>

              <div
                className="rounded-xl p-6 space-y-3"
                style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.15)" }}
              >
                {[
                  { tag: "H1", text: "Morpheus8 Skin Tightening in Atlanta", size: "text-lg", indent: 0, color: "#fffdf6", note: "One per page. Treatment + benefit or location." },
                  { tag: "H2", text: "What Is Morpheus8?", size: "text-base", indent: 1, color: "rgba(255,253,246,0.8)", note: "Real patient questions" },
                  { tag: "H2", text: "Who Is a Good Candidate?", size: "text-base", indent: 1, color: "rgba(255,253,246,0.8)", note: "" },
                  { tag: "H2", text: "What Does the Treatment Feel Like?", size: "text-base", indent: 1, color: "rgba(255,253,246,0.8)", note: "" },
                  { tag: "H2", text: "Results & Before/After Photos", size: "text-base", indent: 1, color: "rgba(255,253,246,0.8)", note: "" },
                  { tag: "H2", text: "Frequently Asked Questions", size: "text-base", indent: 1, color: "rgba(255,253,246,0.8)", note: "" },
                ].map((h, i) => (
                  <div key={i} className="flex items-center gap-3" style={{ paddingLeft: h.indent * 20 }}>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded flex-shrink-0"
                      style={{
                        background: h.tag === "H1" ? "rgba(162,140,117,0.2)" : "rgba(162,140,117,0.08)",
                        color: "#a28c75",
                        border: "1px solid rgba(162,140,117,0.2)",
                      }}
                    >
                      {h.tag}
                    </span>
                    <span className={`${h.size} font-light flex-1`} style={{ color: h.color }}>{h.text}</span>
                    {h.note && (
                      <span className="text-xs flex-shrink-0" style={{ color: "rgba(162,140,117,0.55)" }}>{h.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* TIP 4 — E-E-A-T */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={4} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Content Depth &amp; E-E-A-T</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                Google weights medical and health-adjacent content heavily on Experience, Expertise, Authoritativeness,
                and Trustworthiness. Thin pages won&apos;t compete. Aim for 800–1,200 words covering the full patient journey.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { letter: "E", word: "Experience", desc: "Real patient outcomes. Original before/after photos. Authentic provider voice." },
                  { letter: "E", word: "Expertise", desc: "Provider credentials visible on-page. Name, qualifications, years with this device." },
                  { letter: "A", word: "Authority", desc: "Volume of content. Links from credible sites. Device brand logos." },
                  { letter: "T", word: "Trust", desc: "Google reviews. Real photos. No vague claims. Clear pricing signal." },
                ].map((e) => (
                  <div
                    key={e.word}
                    className="rounded-xl p-5"
                    style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.15)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-light mb-3"
                      style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75" }}
                    >
                      {e.letter}
                    </div>
                    <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{e.word}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{e.desc}</p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl px-6 py-4 flex items-center gap-4"
                style={{ background: "rgba(162,140,117,0.08)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl font-light"
                  style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
                >
                  800+
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>Minimum word count</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                    Cover what the treatment is, how it works, candidacy, the experience, downtime, results timeline, and safety.
                    Written in plain language — not clinical copy-paste from the manufacturer.
                  </p>
                </div>
              </div>
            </div>

            {/* TIP 5 — Local SEO */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={5} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Local SEO Signals</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                For most practices, you&apos;re competing locally — not nationally. These signals tell Google
                exactly who you are and where you serve.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: "📍", label: "NAP Consistency", desc: "Name, Address, Phone must match exactly across your website, Google Business Profile, and every directory." },
                  { icon: "🗺️", label: "Embed a Google Map", desc: "On every location-specific treatment page — not just the contact page." },
                  { icon: "🏷️", label: "Schema Markup", desc: "MedicalBusiness and Service schema lets search engines parse what you offer, where, and for whom." },
                  { icon: "🔗", label: "Local Link Building", desc: "Chamber of commerce, local directories, and co-marketing with complementary local businesses." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl p-5 flex items-start gap-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TIP 6 — Technical */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={6} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Technical Fundamentals</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: "📱", label: "Mobile-First", desc: "The majority of treatment searches happen on a phone. Design and test on mobile before desktop." },
                  { icon: "⚡", label: "Under 2.5s Load Time", desc: "Compress images, avoid auto-playing videos on load, and lazy-load below-the-fold content." },
                  { icon: "🔗", label: "Internal Linking", desc: "Link from your homepage, service menu, and blog back to each treatment page using descriptive anchor text — not 'click here.'" },
                  { icon: "🖼️", label: "Alt Text on Images", desc: "Descriptive, not keyword-stuffed. 'Morpheus8 jawline before and after' — not 'morpheus8 morpheus8 atlanta skin.'" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl p-5 flex items-start gap-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════ PART 2 ══ */}
        <div>
          <PartLabel part="Part 2" label="Conversion Architecture — Closing the Visit" />

          <p className="text-sm leading-relaxed mb-10 -mt-4" style={{ color: "rgba(255,253,246,0.45)" }}>
            Ranking gets the visit. Everything below determines whether that visit becomes a booked consultation.
          </p>

          <div className="space-y-10">

            {/* Above the fold */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={1} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>The First 5 Seconds (Above the Fold)</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                Patients search by device name — but they convert on outcome language. Your hero section needs to answer &ldquo;what&apos;s in it for me?&rdquo; before they scroll an inch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div
                  className="rounded-xl p-5"
                  style={{ background: "rgba(200,80,80,0.06)", border: "1px solid rgba(200,80,80,0.2)" }}
                >
                  <div className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(200,80,80,0.7)" }}>✗ Mechanism language</div>
                  <p className="text-base font-light" style={{ color: "rgba(255,253,246,0.65)" }}>
                    &ldquo;Morpheus8 RF Microneedling Technology&rdquo;
                  </p>
                  <p className="text-xs mt-2" style={{ color: "rgba(200,80,80,0.6)" }}>Describes the device. Patient already knows the name — they need to know why it matters to them.</p>
                </div>
                <div
                  className="rounded-xl p-5"
                  style={{ background: "rgba(100,180,100,0.06)", border: "1px solid rgba(100,180,100,0.2)" }}
                >
                  <div className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(100,180,100,0.7)" }}>✓ Outcome language</div>
                  <p className="text-base font-light" style={{ color: "#fffdf6" }}>
                    &ldquo;Tighter, Smoother Skin Without Surgery&rdquo;
                  </p>
                  <p className="text-xs mt-2" style={{ color: "rgba(100,180,100,0.6)" }}>Answers &quot;what does this do for me?&quot; in under two seconds.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: "🎯", label: "One primary CTA", desc: "'Schedule Your Consultation' — pick one verb and repeat it consistently down the page." },
                  { icon: "📞", label: "Click-to-call button", desc: "Next to the primary CTA on mobile. A meaningful share of patients will call before they fill a form." },
                  { icon: "📸", label: "Real photography", desc: "A genuine treatment room or provider photo builds more trust in 5 seconds than any polished stock image." },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl p-5"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <div className="text-xl mb-3">{item.icon}</div>
                    <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={2} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Trust Signals, Placed Early and Often</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                Place at least 2–3 trust elements above the mid-page fold. Don&apos;t save them for the bottom.
              </p>

              <div className="space-y-3">
                {[
                  { rank: "🥇", label: "Before/After Gallery", desc: "Your single highest-converting asset. Real patients with consent. Nothing builds more immediate confidence than seeing a real result." },
                  { rank: "🥈", label: "Provider Credentials", desc: "Name, credentials, and a line on years of experience with this specific device or technique. A direct trust and ranking signal." },
                  { rank: "🥉", label: "Google Review Snippets", desc: "Pull 3–5 real patient quotes with star ratings. Seeing a 4.9★ with 200 reviews removes doubt faster than anything you could write." },
                  { rank: "  ", label: "Device/Brand Logos", desc: "Recognizable names like InMode signal legitimate, medical-grade technology to patients who may not know what separates a real med spa from a spa." },
                  { rank: "  ", label: "Volume Indicators", desc: "'500+ treatments performed' or '8 years with this device' — if your numbers are strong, say them plainly." },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="rounded-xl px-5 py-4 flex items-start gap-4"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <span className="text-base flex-shrink-0 w-6">{t.rank}</span>
                    <div>
                      <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{t.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Objections */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={3} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Answer Objections Before They&apos;re Asked</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                Patients who don&apos;t convert usually aren&apos;t unconvinced the treatment works — they&apos;re unsure about
                pain, cost, downtime, or whether it applies to them. Answer these directly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    q: '"Am I a candidate?"',
                    a: "Short, scannable list of ideal candidate signs. Frame inclusively — not as a disqualification list.",
                    color: "rgba(162,140,117,0.08)", border: "rgba(162,140,117,0.2)",
                  },
                  {
                    q: '"Does it hurt / what\'s the downtime?"',
                    a: "Be specific and honest. Vague reassurance ('minimal discomfort') reads as evasive and erodes trust.",
                    color: "rgba(100,150,200,0.06)", border: "rgba(100,150,200,0.18)",
                  },
                  {
                    q: '"How much does it cost?"',
                    a: "You don't have to publish exact pricing. Give a realistic range or state clearly that financing exists. Patients who can't find any cost signal leave — they don't ask.",
                    color: "rgba(200,160,80,0.06)", border: "rgba(200,160,80,0.18)",
                  },
                  {
                    q: '"How many sessions until I see results?"',
                    a: "Set realistic expectations. Overpromising in copy creates conversion friction at the consultation table.",
                    color: "rgba(120,180,120,0.06)", border: "rgba(120,180,120,0.18)",
                  },
                ].map((obj) => (
                  <div
                    key={obj.q}
                    className="rounded-xl p-5"
                    style={{ background: obj.color, border: `1px solid ${obj.border}` }}
                  >
                    <p className="text-sm font-medium italic mb-2" style={{ color: "#fffdf6" }}>{obj.q}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{obj.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={4} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>The Contact Form: Reduce Friction</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                Every additional field measurably drops completion rate. Ask for the minimum viable information
                and make it crystal clear what happens after they hit submit.
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Form mockup */}
                <div
                  className="w-full md:w-64 flex-shrink-0 rounded-xl p-5"
                  style={{ background: "#1a000c", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <p className="text-sm font-medium mb-4" style={{ color: "#fffdf6" }}>Request My Consultation</p>
                  {["Name", "Phone", "Email", "What are you interested in treating?"].map((field, i) => (
                    <div key={i} className="mb-3">
                      <div className="text-xs mb-1" style={{ color: "rgba(162,140,117,0.7)" }}>{field}</div>
                      <div
                        className="h-8 rounded-md"
                        style={{ background: "rgba(255,253,246,0.04)", border: "1px solid rgba(162,140,117,0.2)" }}
                      />
                    </div>
                  ))}
                  <div
                    className="w-full h-9 rounded-md flex items-center justify-center text-xs font-medium mt-4"
                    style={{ background: "#a28c75", color: "#0c0004" }}
                  >
                    Request My Consultation
                  </div>
                  <p className="text-xs text-center mt-3" style={{ color: "rgba(255,253,246,0.3)" }}>
                    Our team will call you within one business day to schedule.
                  </p>
                </div>

                {/* Annotations */}
                <div className="flex-1 space-y-3">
                  {[
                    { icon: "✓", text: "4 fields maximum", sub: "Name, phone, email + one qualifying question. Every additional field drops completions." },
                    { icon: "✓", text: "Button says the outcome", sub: "'Request My Consultation' converts better than 'Submit' or 'Send Message.'" },
                    { icon: "✓", text: "State what happens next", sub: "'Our team will call you within one business day.' Uncertainty after clicking submit is a hidden abandonment cause." },
                    { icon: "✓", text: "Repeat CTA 3–4 times", sub: "After the hero, after before/afters, after the FAQ, and in a sticky mobile bar. Don't make patients scroll back up." },
                    { icon: "✓", text: "Add click-to-text option", sub: "A growing share of patients — especially under 40 — prefer texting over calling or forms." },
                  ].map((a, i) => (
                    <div
                      key={i}
                      className="rounded-lg px-4 py-3 flex items-start gap-3"
                      style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                    >
                      <span className="text-sm flex-shrink-0" style={{ color: "#a28c75" }}>{a.icon}</span>
                      <div>
                        <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{a.text}</p>
                        <p className="text-xs leading-relaxed mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>{a.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Urgency */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TipNumber n={5} />
                <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Urgency &amp; Offers — Use Sparingly and Confidently</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="rounded-xl p-5"
                  style={{ background: "rgba(100,180,100,0.06)", border: "1px solid rgba(100,180,100,0.2)" }}
                >
                  <div className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(100,180,100,0.7)" }}>✓ Do this</div>
                  <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>
                    &ldquo;New Patient Special: $200 Off Your First Morpheus8 Session&rdquo;
                  </p>
                  <p className="text-xs mt-3" style={{ color: "rgba(100,180,100,0.65)" }}>
                    State the offer directly and confidently. No hedging, no apologies for asking.
                  </p>
                </div>
                <div
                  className="rounded-xl p-5"
                  style={{ background: "rgba(200,80,80,0.06)", border: "1px solid rgba(200,80,80,0.2)" }}
                >
                  <div className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(200,80,80,0.7)" }}>✗ Avoid</div>
                  <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>
                    Countdown timers on evergreen pages
                  </p>
                  <p className="text-xs mt-3" style={{ color: "rgba(200,80,80,0.65)" }}>
                    Patients recognize fake urgency. In a category built on trust, manufactured pressure actively damages credibility.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════ PART 3 — METRICS ══ */}
        <div>
          <PartLabel part="Part 3" label="Measuring Whether the Page Is Working" />
          <p className="text-sm leading-relaxed mb-8 -mt-4" style={{ color: "rgba(255,253,246,0.45)" }}>
            A landing page isn&apos;t finished at launch — it&apos;s a system you tune against data. Review these monthly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                metric: "Conversion Rate",
                benchmark: "3–6%",
                note: "Form + call combined. Below 3% signals an offer, trust, or friction problem — not a traffic problem.",
                color: "#a28c75", bg: "rgba(162,140,117,0.08)", border: "rgba(162,140,117,0.2)",
              },
              {
                metric: "Bounce Rate",
                benchmark: "Under 55%",
                note: "High bounce on a treatment page usually means the hero doesn't match what the patient searched for.",
                color: "#7aabcf", bg: "rgba(100,150,200,0.07)", border: "rgba(100,150,200,0.18)",
              },
              {
                metric: "Time on Page",
                benchmark: "90 sec+",
                note: "Treatment decisions are considered purchases. Short visits mean the content isn't answering objections.",
                color: "#7db870", bg: "rgba(120,180,120,0.07)", border: "rgba(120,180,120,0.16)",
              },
              {
                metric: "Mobile Page Speed (LCP)",
                benchmark: "Under 2.5s",
                note: "Most med spa searches happen on mobile. Slow load is the single biggest silent conversion killer.",
                color: "#c8a050", bg: "rgba(200,160,80,0.07)", border: "rgba(200,160,80,0.18)",
              },
              {
                metric: "Click-to-Call Rate",
                benchmark: "8–15%",
                note: "Of mobile sessions. Many patients will call before they fill out a form — capture both paths.",
                color: "#a064c8", bg: "rgba(160,100,200,0.07)", border: "rgba(160,100,200,0.18)",
              },
              {
                metric: "Form Abandonment",
                benchmark: "Under 20%",
                note: "High abandonment points to too many fields or unclear next steps after submission.",
                color: "#c87a7a", bg: "rgba(200,100,100,0.07)", border: "rgba(200,100,100,0.18)",
              },
            ].map((m) => (
              <div
                key={m.metric}
                className="rounded-xl p-5"
                style={{ background: m.bg, border: `1px solid ${m.border}` }}
              >
                <p className="text-xs tracking-[0.12em] uppercase mb-2" style={{ color: m.color }}>
                  {m.metric}
                </p>
                <p className="text-2xl font-light mb-3" style={{ color: "#fffdf6" }}>
                  {m.benchmark}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  {m.note}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-6 rounded-xl px-6 py-5"
            style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.15)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
              <span style={{ color: "#a28c75" }}>Diagnose in this order:</span> If conversion rate is below benchmark but traffic and rankings are healthy,
              the problem is on the page — offer clarity, trust signals, or form friction — not the SEO.
              Check those three before touching keywords.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════ CHECKLIST ══ */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
            border: "1px solid rgba(162,140,117,0.25)",
          }}
        >
          <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>
            Quick-Reference Launch Checklist
          </h2>
          <p className="text-sm mb-7" style={{ color: "rgba(255,253,246,0.45)" }}>
            Before you publish a treatment landing page, run through every item below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Dedicated URL per treatment (and per location if multi-site)",
              "Unique title tag under 60 characters — treatment + city",
              "Unique meta description with outcome language + soft CTA",
              "Single H1 with treatment name and primary benefit",
              "800–1,200+ words covering what/how/candidacy/downtime/results/safety",
              "Real before/after photos and real treatment photography",
              "Provider credentials and experience visible on-page",
              "FAQ section built from real consultation questions",
              "Schema markup and NAP consistent with Google Business Profile",
              "Mobile load time under 2.5 seconds",
              "One consistent primary CTA repeated at 3–4 points on the page",
              "Click-to-call and click-to-text options alongside the form",
              "Contact form limited to essential fields only",
              "Clear statement of what happens after form submission",
              "Monthly review of conversion rate, bounce rate, and form completion",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ border: "1px solid rgba(162,140,117,0.35)", background: "rgba(162,140,117,0.08)" }}
                >
                  <span className="text-xs" style={{ color: "#a28c75" }}>✓</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.7)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
