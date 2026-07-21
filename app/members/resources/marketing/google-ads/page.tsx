import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Best Practices | Aesthetic Executive",
  description:
    "A practical guide to building profitable Google Search campaigns for aesthetic and wellness practices — keywords, landing pages, quality score, and measurement.",
};

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-display text-2xl md:text-3xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
        {label}
      </h2>
      <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
    </div>
  );
}

export default function GoogleAdsPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }} />
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
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}>
              <Search size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Marketing Resources · Paid Advertising
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Google Ads Best Practices
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            How to build profitable Google Search campaigns for aesthetic practices — high-intent
            keywords, dedicated landing pages, Quality Score, conversion tracking, and the metrics
            that actually tell you if it&apos;s working.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── GOOGLE VS META ── */}
        <div>
          <SectionLabel label="Google Ads vs. Meta Ads" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            These two channels work fundamentally differently. Understanding the distinction is the
            foundation of every good paid media decision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Google — demand capture */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(120,180,120,0.25)" }}>
              <div className="px-6 py-4" style={{ background: "rgba(120,180,120,0.08)", borderBottom: "1px solid rgba(120,180,120,0.15)" }}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔍</span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>Google Ads</p>
                    <p className="text-xs" style={{ color: "#7db870" }}>Demand capture</p>
                  </div>
                </div>
              </div>
              {/* Search bar mockup */}
              <div className="p-5" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="rounded-lg px-4 py-3 flex items-center gap-3 mb-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-sm" style={{ color: "rgba(162,140,117,0.5)" }}>🔍</span>
                  <span className="text-sm italic" style={{ color: "rgba(255,253,246,0.6)" }}>Botox near me</span>
                </div>
                <div className="space-y-2 mb-4">
                  {/* Sponsored result */}
                  <div className="rounded-lg p-3" style={{ background: "rgba(120,180,120,0.07)", border: "1px solid rgba(120,180,120,0.18)" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-1.5 py-0.5 rounded-sm font-medium" style={{ background: "rgba(120,180,120,0.15)", color: "#7db870" }}>Sponsored</span>
                    </div>
                    <p className="text-xs font-medium" style={{ color: "#7db870" }}>Your Practice — Botox Treatments</p>
                    <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>yourpractice.com/botox</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.55)" }}>Natural results from board-certified injectors. Book today.</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  The patient is <span style={{ color: "#7db870" }}>already searching</span>. They want Botox.
                  Your ad puts you in front of them at the exact moment of intent.
                </p>
              </div>
            </div>

            {/* Meta — demand creation */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(100,160,220,0.22)" }}>
              <div className="px-6 py-4" style={{ background: "rgba(100,160,220,0.08)", borderBottom: "1px solid rgba(100,160,220,0.15)" }}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📱</span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>Meta Ads</p>
                    <p className="text-xs" style={{ color: "#7aabcf" }}>Demand creation</p>
                  </div>
                </div>
              </div>
              <div className="p-5" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="rounded-lg p-3 mb-4" style={{ background: "rgba(100,160,220,0.06)", border: "1px solid rgba(100,160,220,0.15)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>Your Practice · Sponsored</span>
                  </div>
                  <div className="h-12 rounded mb-2 flex items-center justify-center" style={{ background: "rgba(100,160,220,0.08)" }}>
                    <span className="text-xs" style={{ color: "#7aabcf" }}>✨ Morpheus8 — Tighten & smooth your skin</span>
                  </div>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>Reach patients who weren&apos;t searching — yet.</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  The patient <span style={{ color: "#7aabcf" }}>wasn&apos;t thinking about it</span>. Your ad
                  interrupts their scroll and creates a want they didn&apos;t have 30 seconds ago.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.15)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
              <span style={{ color: "#a28c75" }}>Google traffic is higher intent but often more competitive.</span> A patient searching
              &ldquo;Morpheus8 Columbus&rdquo; is ready to book. That moment of intent is what you&apos;re
              paying for — and what makes Google Ads worth the higher cost per click.
            </p>
          </div>
        </div>

        {/* ── BEST TREATMENTS TO ADVERTISE ── */}
        <div>
          <SectionLabel label="Best Treatments to Advertise" />
          <p className="text-sm leading-relaxed mb-7 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Focus your Google Ads budget on treatments with established search volume. If patients aren&apos;t
            searching for it by name, there&apos;s no demand to capture.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "💉", label: "Botox / Dysport" },
              { icon: "👄", label: "Lip Filler" },
              { icon: "🪒", label: "Laser Hair Removal" },
              { icon: "✨", label: "Morpheus8" },
              { icon: "💧", label: "HydraFacial" },
              { icon: "🔬", label: "SkinPen / Microneedling" },
              { icon: "🧪", label: "Chemical Peels" },
              { icon: "💡", label: "IPL / Lumecca" },
              { icon: "💊", label: "PRP Hair Restoration" },
              { icon: "⚖️", label: "Medical Weight Loss" },
              { icon: "🏥", label: "New Patient Offers" },
              { icon: "🛡️", label: "Your Practice Name (branded)" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <p className="text-xs font-medium leading-snug" style={{ color: "rgba(255,253,246,0.75)" }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: "rgba(200,160,80,0.06)", border: "1px solid rgba(200,160,80,0.18)" }}>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(200,160,80,0.85)" }}>
              Note: Medical weight loss advertising compliance requirements vary by state and platform policy. Always verify current guidelines before launching.
            </p>
          </div>
        </div>

        {/* ── KEYWORD STRATEGY ── */}
        <div>
          <SectionLabel label="Keyword Strategy" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Not all keywords are equal. A tiered approach targets the highest-intent searches first,
            then expands as budget and performance allow.
          </p>

          <div className="space-y-4">
            {[
              {
                tier: "Tier 1",
                label: "Treatment-Specific Keywords",
                intent: "Highest intent",
                color: "#a28c75",
                bg: "rgba(162,140,117,0.1)",
                border: "rgba(162,140,117,0.28)",
                description: "Patients searching by treatment name are already aware and actively looking. These convert best.",
                examples: ["\"Botox near me\"", "\"Morpheus8 Columbus\"", "\"lip filler [city]\"", "\"laser hair removal cost\""],
                note: "Start here. Highest purchase intent, best conversion rate.",
              },
              {
                tier: "Tier 2",
                label: "Location-Based Keywords",
                intent: "High intent",
                color: "#7db870",
                bg: "rgba(120,180,120,0.07)",
                border: "rgba(120,180,120,0.22)",
                description: "Patients looking for a med spa or aesthetic practice in your area — aware they want a service, still deciding where.",
                examples: ["\"med spa Columbus\"", "\"aesthetic clinic near me\"", "\"best injector [city]\"", "\"medical spa [zip]\""],
                note: "Layer in once Tier 1 is profitable. Broader but still strong intent.",
              },
              {
                tier: "Tier 3",
                label: "Concern-Based Keywords",
                intent: "Lower intent · Higher cost",
                color: "#c8a050",
                bg: "rgba(200,160,80,0.07)",
                border: "rgba(200,160,80,0.2)",
                description: "Patients describing a problem rather than a solution. Broader, more competitive, and often more expensive per lead.",
                examples: ["\"loose skin treatment\"", "\"how to remove acne scars\"", "\"jaw slimming options\"", "\"under eye filler\""],
                note: "Use cautiously with strong landing pages and generous budgets. High volume, lower conversion rate.",
              },
            ].map((t) => (
              <div key={t.tier} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${t.border}` }}>
                <div className="px-6 py-4 flex items-center justify-between" style={{ background: t.bg }}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md" style={{ background: "rgba(0,0,0,0.2)", color: t.color }}>{t.tier}</span>
                    <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{t.label}</p>
                  </div>
                  <span className="text-xs" style={{ color: t.color }}>{t.intent}</span>
                </div>
                <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-5" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <div className="md:col-span-1">
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.6)" }}>{t.description}</p>
                    <div className="rounded-lg px-3 py-2 text-xs" style={{ background: "rgba(0,0,0,0.2)", color: t.color }}>{t.note}</div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs mb-2 tracking-wide" style={{ color: "rgba(162,140,117,0.5)" }}>EXAMPLES</p>
                    <div className="flex flex-wrap gap-2">
                      {t.examples.map((ex) => (
                        <span key={ex} className="inline-flex text-xs px-3 py-1.5 rounded-lg font-mono" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,253,246,0.65)" }}>
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BRANDED CAMPAIGN + NEGATIVE KEYWORDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Branded campaign */}
          <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.22)" }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🛡️</span>
              <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Protect Your Brand</h3>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
              Always run a campaign targeting your own practice name. If you don&apos;t, a competitor can — and
              they&apos;ll show up above your organic result when someone searches for you specifically.
            </p>
            <div className="space-y-3">
              {[
                { label: "Inexpensive to run", desc: "Your own name has almost no competition — clicks are cheap." },
                { label: "Highly qualified traffic", desc: "Someone searching your name is already familiar with your practice." },
                { label: "Controls the top of results", desc: "Your ad appears above your own organic listing — maximum visibility." },
                { label: "Defends against competitors", desc: "Prevents competitors from bidding on your name and stealing clicks." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2.5">
                  <span className="text-xs flex-shrink-0 mt-0.5" style={{ color: "#a28c75" }}>✓</span>
                  <div>
                    <span className="text-sm font-medium" style={{ color: "#fffdf6" }}>{item.label} — </span>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Negative keywords */}
          <div className="rounded-2xl p-7" style={{ background: "rgba(200,80,80,0.04)", border: "1px solid rgba(200,80,80,0.18)" }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚫</span>
              <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Negative Keywords</h3>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
              Negative keywords prevent your ads from showing for searches that will never convert —
              saving budget and keeping your cost per lead low.
            </p>
            <p className="text-xs tracking-wide uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>Exclude these search terms</p>
            <div className="flex flex-wrap gap-2">
              {["free", "DIY", "jobs", "training", "school", "wholesale", "Amazon", "at home", "how to do yourself", "certification", "course", "salary", "resume", "reviews reddit", "cheap", "groupon"].map((term) => (
                <span key={term} className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(200,80,80,0.08)", border: "1px solid rgba(200,80,80,0.2)", color: "rgba(200,120,120,0.85)" }}>
                  <span style={{ color: "rgba(200,80,80,0.6)" }}>—</span> {term}
                </span>
              ))}
            </div>
            <p className="text-xs mt-4 leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
              Review your Search Terms report weekly to find new irrelevant queries and add them as negatives.
            </p>
          </div>
        </div>

        {/* ── QUALITY SCORE ── */}
        <div>
          <SectionLabel label="Quality Score" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Google rates the relevance of your ads on a 1–10 scale. A higher Quality Score means lower
            cost per click and better ad placement — rewarding practices that align everything tightly.
          </p>

          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {[
              { icon: "🔑", label: "Keywords", desc: "The search terms you're bidding on", arrow: true },
              { icon: "📝", label: "Ad Copy", desc: "Your headline and description must include the keyword naturally", arrow: true },
              { icon: "🖥️", label: "Landing Page", desc: "Page content must match the keyword and ad promise exactly", arrow: false },
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col md:flex-row items-center gap-4 flex-1">
                <div className="flex-1 w-full rounded-2xl p-5 text-center" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)" }}>
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
                </div>
                {item.arrow && (
                  <div className="flex-shrink-0 text-2xl md:rotate-0 rotate-90" style={{ color: "rgba(162,140,117,0.4)" }}>→</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { score: "8–10", label: "High Quality Score", note: "Lower CPC, better placement, more efficient spend", color: "#7db870", bg: "rgba(120,180,120,0.07)", border: "rgba(120,180,120,0.2)" },
              { score: "5–7", label: "Average", note: "Paying market rate — alignment improvements will help", color: "#c8a050", bg: "rgba(200,160,80,0.06)", border: "rgba(200,160,80,0.18)" },
              { score: "1–4", label: "Low Quality Score", note: "Paying a premium — misalignment between keyword, ad, and page", color: "rgba(200,100,100,0.8)", bg: "rgba(200,80,80,0.05)", border: "rgba(200,80,80,0.18)" },
            ].map((row) => (
              <div key={row.score} className="rounded-xl px-5 py-4" style={{ background: row.bg, border: `1px solid ${row.border}` }}>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-2xl font-light" style={{ color: row.color }}>{row.score}</p>
                  <p className="text-xs font-medium" style={{ color: row.color }}>{row.label}</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{row.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SEO + GOOGLE ADS ── */}
        <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.22)" }}>
          <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>SEO & Google Ads Work Together</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,253,246,0.4)" }}>A strong organic presence makes your paid campaigns more effective — not less necessary.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🖥️", label: "Optimized treatment pages", desc: "Well-structured treatment pages improve both your organic ranking and your Quality Score for paid campaigns." },
              { icon: "📍", label: "Strong Google Business Profile", desc: "A complete GBP improves local ranking signals, which complement paid search visibility in your area." },
              { icon: "⭐", label: "Positive Google reviews", desc: "Higher review volume and rating increase ad trust and click-through rate — organic credibility supports paid performance." },
              { icon: "🔗", label: "Local SEO foundation", desc: "Local SEO and Google Ads reinforce each other. Practices with strong local SEO get more value from every paid click." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-xl px-4 py-3.5" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.14)" }}>
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── METRICS ── */}
        <div>
          <SectionLabel label="Metrics to Track" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { icon: "💸", label: "Ad Spend", note: "Total spend including agency fees — know your true cost" },
              { icon: "👁️", label: "Impressions", note: "How many times your ad was shown — signals reach" },
              { icon: "🖱️", label: "Clicks", note: "How many people clicked — traffic volume" },
              { icon: "📊", label: "Click-Through Rate", note: "CTR: clicks ÷ impressions. Higher = more relevant ad" },
              { icon: "💰", label: "Avg. Cost Per Click", note: "CPC: what you pay each time someone clicks your ad" },
              { icon: "📥", label: "Conversions", note: "Form fills, calls, or booking completions tracked via pixel" },
              { icon: "📋", label: "Cost Per Lead", note: "Total spend ÷ leads. Your primary efficiency metric" },
              { icon: "📅", label: "Consultations Booked", note: "Leads who actually showed up — the first real conversion" },
              { icon: "🔄", label: "Consult → Treatment Rate", note: "What % converted to a treatment after consultation" },
              { icon: "📈", label: "Revenue Generated", note: "The only number that tells you if it&apos;s working" },
              { icon: "💎", label: "Return on Ad Spend", note: "ROAS: revenue ÷ spend. Target 3–5× minimum" },
              { icon: "♾️", label: "Lifetime Patient Value", note: "Evaluate the long-term relationship, not just the first treatment" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-4" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                <span className="text-xl mb-2 block">{item.icon}</span>
                <p className="text-xs font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>{item.note}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl px-5 py-4" style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.15)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
              <span style={{ color: "#a28c75" }}>Success is measured by consultations, treatments sold, revenue, and lifetime value</span> — not by clicks alone. Clicks are just the beginning of the funnel.
            </p>
          </div>
        </div>

        {/* ── COMMON MISTAKES ── */}
        <div>
          <SectionLabel label="Common Mistakes to Avoid" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Sending every ad to the homepage", desc: "Your homepage doesn't match any specific keyword or offer. Always send paid traffic to a dedicated treatment landing page." },
              { label: "Advertising treatments with little search demand", desc: "If patients aren't searching for it, there's no intent to capture. Check search volume before building a campaign." },
              { label: "Ignoring branded campaigns", desc: "Not running your own name means a competitor can outbid you for it — and steal patients who were looking for you specifically." },
              { label: "Failing to install conversion tracking", desc: "Without tracking, you're flying blind. You need to know which keywords, ads, and pages are generating leads and revenue." },
              { label: "Never reviewing search terms", desc: "The Search Terms report shows exactly what people typed before clicking your ad. Review it weekly to find wasted spend and new negatives." },
              { label: "Using overly broad keywords", desc: "Broad match keywords can trigger on irrelevant searches, wasting budget. Start with phrase match and exact match." },
              { label: "Not adding negative keywords", desc: "Every day without a negative keyword list is a day you're paying for job seekers, students, and DIY researchers." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-5 flex items-start gap-4" style={{ background: "rgba(200,80,80,0.04)", border: "1px solid rgba(200,80,80,0.15)" }}>
                <span className="text-lg flex-shrink-0" style={{ color: "rgba(200,100,100,0.6)" }}>✗</span>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHEN GOOGLE ADS MAY NOT BE WORTH IT ── */}
        <div className="rounded-2xl p-7" style={{ background: "rgba(200,160,80,0.05)", border: "1px solid rgba(200,160,80,0.2)" }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">⚠️</span>
            <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>When Google Ads May Not Be Worth It</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.5)" }}>
            Google Ads aren&apos;t equally profitable in every market or for every practice. Before investing,
            make sure these conditions aren&apos;t stacked against you.
          </p>
          <div className="space-y-3">
            {[
              { label: "Competition drives click costs beyond profitability", desc: "In some markets, CPC for treatments like Botox can be so high that the math simply doesn't work at a reasonable budget." },
              { label: "Very low search volume for your services", desc: "If few people in your area are searching for your treatments, there's not enough demand to capture." },
              { label: "An outdated website or poor landing pages", desc: "Paid traffic sent to a slow, untrustworthy, or poorly designed page converts at near zero. Fix the destination first." },
              { label: "Few Google reviews compared to competitors", desc: "Patients compare options before booking. If your review count or rating lags significantly behind competitors, ads will underperform." },
              { label: "No reliable lead follow-up process", desc: "If leads sit in an inbox for 24 hours before someone responds, Google Ads will look unprofitable — even when the campaigns are sound." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-xl px-4 py-4" style={{ background: "rgba(200,160,80,0.06)", border: "1px solid rgba(200,160,80,0.14)" }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: "#c8a050" }}>·</span>
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FINAL TAKEAWAY ── */}
        <div className="rounded-2xl p-8" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.18)" }}>
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>The bottom line</p>
          <p className="font-display text-xl font-light leading-relaxed" style={{ color: "#fffdf6" }}>
            Google Ads can be one of the highest-ROI marketing channels for an aesthetic practice — when built correctly.
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "rgba(255,253,246,0.6)" }}>
            High-intent keywords, dedicated landing pages, accurate conversion tracking, and disciplined
            optimization are the foundation. Measure success by consultations booked, treatments sold,
            revenue generated, and lifetime patient value — not clicks alone.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["High-Intent Keywords", "Dedicated Landing Pages", "Conversion Tracking", "Negative Keywords", "Disciplined Optimization"].map((tag) => (
              <span key={tag} className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-wide" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)", color: "#a28c75" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
