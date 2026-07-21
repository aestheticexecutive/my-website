import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Best Practices | Aesthetic Executive",
  description:
    "A practical guide to creating profitable Facebook and Instagram advertising campaigns for aesthetic and wellness practices.",
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

export default function MetaAdsPage() {
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
              <TrendingUp size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Marketing Resources · Paid Advertising
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Meta Ads Best Practices
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            Facebook and Instagram advertising for aesthetic practices — how to stop the scroll,
            generate qualified leads, and turn ad spend into profitable, long-term patients.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── WHY META ADS WORK ── */}
        <div>
          <SectionLabel label="Why Meta Ads Work" />
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* Feed mockup */}
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.2)", background: "#0f0006" }}>
                {/* Phone chrome */}
                <div className="px-4 py-2.5 flex items-center justify-between" style={{ background: "#1a000c", borderBottom: "1px solid rgba(162,140,117,0.1)" }}>
                  <span className="text-xs font-medium" style={{ color: "#a28c75" }}>Instagram</span>
                  <span className="text-xs" style={{ color: "rgba(162,140,117,0.4)" }}>feed</span>
                </div>
                {/* Organic post 1 */}
                <div className="p-3 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />
                    <div className="h-2 rounded w-20" style={{ background: "rgba(255,255,255,0.07)" }} />
                  </div>
                  <div className="h-16 rounded-lg mb-2" style={{ background: "rgba(255,255,255,0.04)" }} />
                  <div className="h-2 rounded w-3/4 mb-1" style={{ background: "rgba(255,255,255,0.05)" }} />
                  <div className="h-2 rounded w-1/2" style={{ background: "rgba(255,255,255,0.04)" }} />
                </div>
                {/* AD — highlighted */}
                <div className="p-3 border-b" style={{ borderColor: "rgba(162,140,117,0.15)", background: "rgba(162,140,117,0.06)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full" style={{ background: "rgba(162,140,117,0.2)" }} />
                      <div>
                        <div className="h-1.5 rounded w-16 mb-0.5" style={{ background: "rgba(162,140,117,0.4)" }} />
                        <div className="h-1.5 rounded w-8" style={{ background: "rgba(162,140,117,0.2)" }} />
                      </div>
                    </div>
                    <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(162,140,117,0.15)", color: "rgba(162,140,117,0.7)" }}>Sponsored</span>
                  </div>
                  <div className="h-24 rounded-lg mb-2 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(47,4,16,0.8), rgba(162,140,117,0.15))" }}>
                    <div className="text-center">
                      <div className="text-xs font-medium mb-1" style={{ color: "#a28c75" }}>✨ Morpheus8</div>
                      <div className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>Limited spots this month</div>
                    </div>
                  </div>
                  <div className="h-7 rounded flex items-center justify-center text-xs font-medium" style={{ background: "rgba(162,140,117,0.2)", color: "#fffdf6" }}>
                    Book a Consultation →
                  </div>
                </div>
                {/* Organic post 2 */}
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
                    <div className="h-2 rounded w-16" style={{ background: "rgba(255,255,255,0.05)" }} />
                  </div>
                  <div className="h-14 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }} />
                </div>
              </div>
              <p className="text-xs text-center mt-3" style={{ color: "rgba(162,140,117,0.5)" }}>Your ad appears mid-scroll</p>
            </div>

            {/* Explanation */}
            <div className="flex-1 space-y-4">
              <div className="rounded-2xl p-6" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>The key difference from Google</p>
                <p className="font-display text-lg font-light leading-relaxed" style={{ color: "#fffdf6" }}>
                  Facebook and Instagram are <span style={{ color: "#a28c75" }}>interruption-based</span> platforms.
                  People are not actively searching for treatments — they are scrolling.
                </p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Your ad must immediately capture attention, clearly communicate what is being offered,
                  and give viewers a compelling reason to stop scrolling and take action. Unlike search ads,
                  you are creating demand — not capturing it.
                </p>
              </div>
              {[
                { icon: "👁️", label: "Attention in 1–3 seconds", desc: "You have one second of motion or one headline to stop the scroll. If it doesn't hook immediately, it's ignored." },
                { icon: "🎯", label: "Create demand, don't capture it", desc: "Meta ads reach people who weren't looking. Your creative and copy need to make them want something they weren't thinking about." },
                { icon: "📍", label: "Local targeting advantage", desc: "Target by zip code, radius, age, and interest — so your budget reaches the patients most likely to be in your chair." },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-5 flex items-start gap-4" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}>
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BUDGET ── */}
        <div>
          <SectionLabel label="Budget & Market" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Budget visual */}
            <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.22)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-5" style={{ color: "rgba(162,140,117,0.6)" }}>Recommended starting budget</p>
              <div className="flex items-end gap-3 mb-6">
                <div className="text-6xl font-light leading-none" style={{ color: "#a28c75" }}>$50</div>
                <div className="pb-1 text-sm" style={{ color: "rgba(255,253,246,0.4)" }}>/ day minimum</div>
              </div>
              <div className="space-y-3">
                {[
                  { range: "$50–$75/day", label: "Starting point", note: "Minimum for meaningful data and optimization" },
                  { range: "$100–$200/day", label: "Growth budget", note: "After proving the campaign is profitable" },
                  { range: "$200+/day", label: "Scale budget", note: "For competitive markets or high-ticket treatments" },
                ].map((row) => (
                  <div key={row.range} className="flex items-center gap-3 rounded-lg px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.14)" }}>
                    <div className="flex-shrink-0">
                      <p className="text-sm font-medium" style={{ color: "#a28c75" }}>{row.range}</p>
                      <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>{row.label}</p>
                    </div>
                    <p className="text-xs ml-auto text-right" style={{ color: "rgba(255,253,246,0.45)", maxWidth: 160 }}>{row.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-5 leading-relaxed" style={{ color: "rgba(255,253,246,0.35)" }}>
                Only increase budget after proving the campaign is profitable — not before.
              </p>
            </div>

            {/* Market considerations */}
            <div className="rounded-2xl p-7" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.18)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-5" style={{ color: "rgba(162,140,117,0.6)" }}>Market considerations</p>
              <div className="space-y-4">
                {[
                  { icon: "🏙️", label: "Competitive markets", note: "Larger budgets and stronger creative required. Cost per lead is higher but patient quality can be excellent." },
                  { icon: "🌿", label: "Smaller markets", note: "Lower cost per lead. Less competition means your budget works harder. Brand awareness builds faster." },
                  { icon: "💰", label: "High-ticket treatments", note: "Require larger budgets to generate enough qualified leads — the math still works, it just takes more volume." },
                  { icon: "✅", label: "New patient offers", note: "Lower barrier to entry. Higher lead volume. Use to build your patient base, then upsell." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BEST TREATMENTS TO ADVERTISE ── */}
        <div>
          <SectionLabel label="Best Treatments to Advertise" />
          <p className="text-sm leading-relaxed mb-7 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Lead with treatments patients already recognize — or offers that lower the barrier to entry.
            Don&apos;t run your primary acquisition campaign on a treatment your market isn&apos;t yet familiar with.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "💉", label: "Botox / Neurotoxin", note: "High awareness, high intent — always performs" },
              { icon: "👄", label: "Lip Filler", note: "Strong visual appeal, broad demographic" },
              { icon: "✨", label: "Facial Balancing", note: "Growing awareness, strong conversion creative" },
              { icon: "🪒", label: "Laser Hair Removal", note: "High demand, repeat treatment — great LTV" },
              { icon: "🔬", label: "Microneedling", note: "Broad concern targeting — acne scars, texture, aging" },
              { icon: "💧", label: "HydraFacial / Signature Facials", note: "Accessible entry point for new patients" },
              { icon: "🎁", label: "New Patient Offers", note: "Lower barrier — ideal for building your database" },
              { icon: "🏥", label: "General Med Spa Awareness", note: "Brand building — market-dependent effectiveness" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-4" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="text-xs font-medium mb-1.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CREATIVE BEST PRACTICES ── */}
        <div>
          <SectionLabel label="Creative Best Practices" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {/* Do */}
            <div className="rounded-2xl p-6" style={{ background: "rgba(120,180,120,0.06)", border: "1px solid rgba(120,180,120,0.18)" }}>
              <p className="text-xs font-medium tracking-wide uppercase mb-4" style={{ color: "#7db870" }}>✓ Do</p>
              <div className="space-y-3">
                {[
                  { label: "High-quality photos or short video", desc: "Blurry or poorly lit content signals low credibility before they even read the copy." },
                  { label: "Communicate the treatment within 1–3 seconds", desc: "The hook must be instant. Text overlay, strong visual, or motion — pick one and make it clear." },
                  { label: "Feature real providers and authentic footage", desc: "Your team, your space, your patients (with consent). Stock photos perform significantly worse in this industry." },
                  { label: "One clear call-to-action", desc: "'Book a Consultation' or 'Claim Your Spot' — not three different options. One ask, one button." },
                  { label: "One compelling reason to act now", desc: "Limited appointments, a month-only feature, or a value-add. Urgency without fabrication." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <span className="text-xs flex-shrink-0 mt-0.5" style={{ color: "#7db870" }}>✓</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{item.label}</p>
                      <p className="text-xs leading-relaxed mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Don't */}
            <div className="rounded-2xl p-6" style={{ background: "rgba(200,80,80,0.05)", border: "1px solid rgba(200,80,80,0.18)" }}>
              <p className="text-xs font-medium tracking-wide uppercase mb-4" style={{ color: "rgba(200,100,100,0.8)" }}>✗ Don&apos;t</p>
              <div className="space-y-3">
                {[
                  { label: "Heavy text on images", desc: "Meta penalizes text-heavy images and your audience tunes them out. Let the visual carry the message." },
                  { label: "Stock photos of strangers", desc: "Patients can tell immediately. Authenticity outperforms polish in aesthetic advertising." },
                  { label: "Multiple CTAs in one ad", desc: "'Book, call, DM, or visit our website' — patients do nothing. One path, one action." },
                  { label: "Deep discounts as your hook", desc: "Discounting trains patients to wait for sales and attracts price-shoppers who churn quickly." },
                  { label: "Unfamiliar treatments as acquisition ads", desc: "Don't spend your acquisition budget on something your market hasn't heard of. Educate first, advertise second." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <span className="text-xs flex-shrink-0 mt-0.5" style={{ color: "rgba(200,100,100,0.7)" }}>✗</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{item.label}</p>
                      <p className="text-xs leading-relaxed mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── WRITING BETTER ADS ── */}
        <div>
          <SectionLabel label="Writing Better Ad Copy" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { num: "01", label: "Lead with the patient's problem", desc: "Start with what they feel — 'Tired of stubborn skin texture?' — before mentioning the treatment. Problem-first copy converts better because it mirrors how patients think." },
              { num: "02", label: "Use simple, plain language", desc: "Avoid excessive medical terminology. 'RF microneedling that remodels collagen' loses people. 'Tighten and smooth your skin — without surgery' keeps them reading." },
              { num: "03", label: "Create urgency without discounting", desc: "Limited-time value-adds ('complimentary skincare consultation with any booking this month') create urgency without training patients to expect discounts." },
              { num: "04", label: "One objective per ad", desc: "Awareness ads build recognition. Conversion ads book appointments. Don't ask one ad to do both — it will fail at both." },
              { num: "05", label: "Speak to the outcome, not the mechanism", desc: "'Fuller, more defined lips' lands better than 'hyaluronic acid filler injection.' Patients care about results, not ingredients." },
            ].map((item) => (
              <div key={item.num} className="rounded-xl p-5" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                <p className="text-xs font-medium mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>{item.num}</p>
                <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── LEAD FORMS VS DMs ── */}
        <div>
          <SectionLabel label="Lead Forms vs. Direct Messages" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Lead Forms */}
            <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, rgba(162,140,117,0.1) 0%, rgba(0,0,0,0) 100%)", border: "1px solid rgba(162,140,117,0.25)" }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>Lead Forms</p>
                  <p className="text-xs" style={{ color: "rgba(162,140,117,0.7)" }}>Higher quality · Lower volume</p>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                {[
                  "Patient fills out a form before contacting you — higher intent",
                  "Requires more effort upfront, so unserious leads self-filter",
                  "Easier for your team to follow up with structure",
                  "Best for high-ticket treatments requiring a consultation",
                  "Pairs well with a CRM or email automation for follow-up",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: "#a28c75" }}>·</span>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg px-4 py-3 text-xs" style={{ background: "rgba(162,140,117,0.08)", color: "#a28c75" }}>
                Best for: consultations, high-ticket treatments, practices with strong follow-up systems
              </div>
            </div>

            {/* DMs */}
            <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, rgba(100,160,220,0.09) 0%, rgba(0,0,0,0) 100%)", border: "1px solid rgba(100,160,220,0.22)" }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>Direct Messages</p>
                  <p className="text-xs" style={{ color: "rgba(100,160,220,0.7)" }}>Higher volume · Lower intent</p>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                {[
                  "Lower barrier — a DM feels less formal than a form",
                  "Generates more leads but many are early-stage or just curious",
                  "Requires faster, more conversational follow-up from your team",
                  "Best for lower-cost introductory services",
                  "Works well if your team actively monitors and responds quickly",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: "#7aabcf" }}>·</span>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg px-4 py-3 text-xs" style={{ background: "rgba(100,160,220,0.07)", color: "#7aabcf" }}>
                Best for: intro offers, facials, accessible treatments, practices with active social teams
              </div>
            </div>
          </div>
        </div>

        {/* ── LANDING PAGE ── */}
        <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.22)" }}>
          <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>Landing Page Rules</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,253,246,0.4)" }}>Never send paid traffic to your homepage. Every ad needs a dedicated landing page.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🎯", label: "One treatment, one page", desc: "Create a dedicated page for the advertised treatment — not your general services page or homepage." },
              { icon: "🔗", label: "Match the ad exactly", desc: "The headline and offer on your landing page must match what the ad promised. Mismatch kills conversion." },
              { icon: "📸", label: "Include the essentials", desc: "Before & afters, FAQs, benefits, financing options, testimonials, and a prominent booking form." },
              { icon: "📱", label: "Mobile-first, fast-loading", desc: "Most traffic comes from phones. If the page loads slowly or looks broken on mobile, the lead is gone." },
              { icon: "🧹", label: "Minimize distractions", desc: "No full navigation bar. No links to other pages. One clear CTA. Remove anything that doesn't move them toward booking." },
              { icon: "💡", label: "Link to your Treatment Landing Page guide", desc: "See the Treatment Landing Page Playbook in this resource library for the full page anatomy and checklist." },
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

        {/* ── TEST BEFORE YOU SCALE ── */}
        <div>
          <SectionLabel label="Test Before You Scale" />
          <div className="flex flex-col md:flex-row gap-5">
            {/* Visual */}
            <div className="flex-shrink-0 md:w-56">
              <div className="rounded-2xl p-6" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.18)" }}>
                <p className="text-xs tracking-[0.12em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.5)" }}>A/B Testing Flow</p>
                <div className="space-y-2">
                  <div className="rounded-lg p-3 flex items-center gap-2" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                    <span className="text-base">🅰️</span>
                    <div>
                      <p className="text-xs font-medium" style={{ color: "#fffdf6" }}>Version A</p>
                      <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>Original</p>
                    </div>
                  </div>
                  <div className="text-center text-xs" style={{ color: "rgba(162,140,117,0.4)" }}>run both</div>
                  <div className="rounded-lg p-3 flex items-center gap-2" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.15)" }}>
                    <span className="text-base">🅱️</span>
                    <div>
                      <p className="text-xs font-medium" style={{ color: "#fffdf6" }}>Version B</p>
                      <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>One change</p>
                    </div>
                  </div>
                  <div className="text-center text-xs" style={{ color: "rgba(162,140,117,0.4)" }}>collect data</div>
                  <div className="rounded-lg p-3" style={{ background: "rgba(120,180,120,0.08)", border: "1px solid rgba(120,180,120,0.2)" }}>
                    <p className="text-xs font-medium" style={{ color: "#7db870" }}>✓ Keep winner</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.4)" }}>Test next variable</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="flex-1 space-y-3">
              {[
                { label: "Run at least two versions", desc: "Test two versions of your creative or headline before committing budget. You can't know what works without comparison." },
                { label: "Test one variable at a time", desc: "Change the image but keep the copy the same. Or change the headline but keep the visual. Multiple changes mean you can't identify what moved the needle." },
                { label: "Let the data breathe", desc: "Don't shut campaigns off after two days. Allow enough data before making decisions — unless performance is clearly and immediately poor." },
                { label: "Keep winners, test forever", desc: "When you find a winning version, keep it running. Then test something new against it. Successful Meta advertisers are always testing." },
              ].map((item) => (
                <div key={item.label} className="rounded-xl px-5 py-4 flex items-start gap-4" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}>
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}>
                    <span className="text-xs" style={{ color: "#a28c75" }}>→</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── METRICS ── */}
        <div>
          <SectionLabel label="Metrics to Track" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "💸", label: "Ad Spend", note: "Including agency fees — know your true cost before calculating ROI" },
              { icon: "📥", label: "Total Leads", note: "Volume of leads generated from the campaign" },
              { icon: "💰", label: "Cost Per Lead", note: "Total spend ÷ leads generated. Varies widely by treatment and market" },
              { icon: "📅", label: "Consultations Booked", note: "Leads who actually showed up — your first real conversion metric" },
              { icon: "🔄", label: "Consult → Treatment Rate", note: "What % of consultations converted to a booked treatment" },
              { icon: "📈", label: "Revenue Generated", note: "The only number that tells you if it's actually working" },
              { icon: "💎", label: "Return on Ad Spend", note: "Revenue ÷ spend. A 3–5× ROAS is a healthy starting target" },
              { icon: "♾️", label: "Patient Lifetime Value", note: "Don't just evaluate the first treatment — evaluate the long-term relationship" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-5" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.14)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
              <span style={{ color: "#a28c75" }}>Think beyond immediate ROI.</span> A campaign attracting loyal, repeat patients may outperform
              one with a higher initial return but lower lifetime value. Track both.
            </p>
          </div>
        </div>

        {/* ── COMMON MISTAKES ── */}
        <div>
          <SectionLabel label="Common Mistakes to Avoid" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🚫", label: "Advertising unfamiliar treatments first", desc: "If your market hasn't heard of a treatment, an ad won't convert — it'll just educate. Run ads for recognized names first." },
              { icon: "🚫", label: "Using low-quality creative", desc: "Dark photos, bad lighting, and grainy video are telling patients your practice isn't the premium option." },
              { icon: "🚫", label: "Sending traffic to your homepage", desc: "Your homepage is for everyone. A landing page is for this patient, this treatment, this offer. Never mix them." },
              { icon: "🚫", label: "Slow lead follow-up", desc: "Leads go cold fast. A lead who filled out a form 4 hours ago has already moved on. Follow up within minutes." },
              { icon: "🚫", label: "Not tracking beyond lead volume", desc: "Leads that don't convert to appointments are worthless. Track all the way through to revenue." },
              { icon: "🚫", label: "Making decisions without enough data", desc: "Shutting off a campaign after 48 hours is almost always a mistake. Give campaigns time to optimize before pulling the plug." },
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

        {/* ── LAUNCH CHECKLIST ── */}
        <div className="rounded-2xl p-8" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.25)" }}>
          <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>Meta Ads Launch Checklist</h2>
          <p className="text-sm mb-7" style={{ color: "rgba(255,253,246,0.4)" }}>Run through this before activating any new campaign.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Choose one treatment to advertise",
              "Set a realistic daily budget",
              "Create compelling, high-quality creative",
              "Write one clear headline and CTA",
              "Build a dedicated landing page for this treatment",
              "Install conversion tracking (Meta Pixel or CAPI)",
              "Set up a system to respond to leads within minutes",
              "Define the metrics you'll use to evaluate performance",
              "Run at least two creative or copy variations to test",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ border: "1px solid rgba(162,140,117,0.35)", background: "rgba(162,140,117,0.08)" }}>
                  <span className="text-xs" style={{ color: "#a28c75" }}>✓</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.7)" }}>{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl px-5 py-4" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.15)" }}>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
              <span style={{ color: "#a28c75" }}>Free resource:</span> Meta Blueprint offers free advertising courses covering campaign setup, optimization, and reporting.
              Certification is optional — the free training is genuinely useful.
            </p>
          </div>
        </div>

        {/* ── FINAL TAKEAWAY ── */}
        <div className="rounded-2xl p-8" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.18)" }}>
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>The bottom line</p>
          <p className="font-display text-xl font-light leading-relaxed" style={{ color: "#fffdf6" }}>
            Successful Meta advertising isn&apos;t about generating the cheapest leads — it&apos;s about generating profitable patients.
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "rgba(255,253,246,0.6)" }}>
            Pair compelling creative with a strong offer, a dedicated landing page, consistent follow-up, and
            disciplined measurement. The practices that approach Meta ads with patience and a testing mindset
            consistently outperform those that chase volume without structure.
          </p>
        </div>

      </div>
    </div>
  );
}
