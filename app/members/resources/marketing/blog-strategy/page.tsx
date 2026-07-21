import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Strategy for Aesthetic Practices | Aesthetic Executive",
  description:
    "How to turn your website into a patient-generating machine with consistent, SEO-focused blog content — what to write, how often, and how to make every post work harder.",
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

export default function BlogStrategyPage() {
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
              <FileText size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Marketing Resources · Content
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Blog Strategy
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            How to turn your website into a patient-generating machine. Consistent,
            well-structured blog content is one of the easiest ways to improve Google rankings,
            increase traffic, and attract patients who are actively searching for your treatments.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── MINDSET ── */}
        <div
          className="rounded-2xl p-7"
          style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.22)" }}
        >
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>The mindset shift</p>
          <p className="font-display text-xl md:text-2xl font-light leading-relaxed" style={{ color: "#fffdf6" }}>
            Blogs are written for <span style={{ color: "#a28c75" }}>Google first</span> and patients second.
            Your goal is to answer the exact questions people are searching for online — not to write marketing copy about how great your practice is.
          </p>
        </div>

        {/* ── WHY IT MATTERS ── */}
        <div>
          <SectionLabel label="Why Blogging Matters" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "📈", label: "Improve Google Rankings", desc: "Each blog post is a new page Google can rank for a specific search query." },
              { icon: "🚦", label: "Drive New Website Traffic", desc: "Patients searching for answers find your content — and your practice." },
              { icon: "🔑", label: "Rank for More Keywords", desc: "Blogs let you rank for hundreds of long-tail searches your main pages can't target." },
              { icon: "🏆", label: "Build Trust & Authority", desc: "Helpful, accurate content signals expertise before a patient ever calls." },
              { icon: "📚", label: "Educate Before the Consult", desc: "Patients who arrive educated take less time to convert and are higher quality leads." },
              { icon: "♻️", label: "Fuel Every Other Channel", desc: "One blog post becomes social content, email newsletters, GBP posts, and more." },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div
            className="mt-4 rounded-xl px-5 py-4"
            style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.15)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
              <span style={{ color: "#a28c75" }}>Google favors websites that are consistently updated</span> with helpful, relevant content.
              A practice that publishes regularly outranks one that doesn&apos;t — even when they offer identical treatments.
            </p>
          </div>
        </div>

        {/* ── HOW OFTEN + LENGTH ── */}
        <div>
          <SectionLabel label="Frequency & Length" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Frequency visual */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}
            >
              <p className="text-xs tracking-[0.15em] uppercase mb-5" style={{ color: "rgba(162,140,117,0.6)" }}>Publishing frequency</p>
              <div className="space-y-4">
                {/* Minimum */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm" style={{ color: "rgba(255,253,246,0.55)" }}>Minimum</span>
                    <span className="text-sm font-medium" style={{ color: "#fffdf6" }}>2 posts / month</span>
                  </div>
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-8 rounded-lg flex items-center justify-center text-xs"
                        style={{
                          background: i < 2 ? "rgba(162,140,117,0.25)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${i < 2 ? "rgba(162,140,117,0.4)" : "rgba(255,255,255,0.06)"}`,
                          color: i < 2 ? "#a28c75" : "rgba(255,255,255,0.15)",
                        }}
                      >
                        {i < 2 ? "✓" : "—"}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm" style={{ color: "rgba(255,253,246,0.55)" }}>Ideal</span>
                    <span className="text-sm font-medium" style={{ color: "#fffdf6" }}>4 posts / month</span>
                  </div>
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-8 rounded-lg flex items-center justify-center text-xs"
                        style={{
                          background: "rgba(162,140,117,0.18)",
                          border: "1px solid rgba(162,140,117,0.35)",
                          color: "#a28c75",
                        }}
                      >
                        ✓
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs mt-5 leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                Consistency matters more than volume. A steady 2 posts/month for a year beats
                a burst of 10 posts followed by silence.
              </p>
            </div>

            {/* Length visual */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}
            >
              <p className="text-xs tracking-[0.15em] uppercase mb-5" style={{ color: "rgba(162,140,117,0.6)" }}>Target word count</p>
              <div className="flex items-end gap-3 mb-5">
                <div className="text-6xl font-light leading-none" style={{ color: "#a28c75" }}>800</div>
                <div className="pb-1">
                  <div className="text-sm" style={{ color: "rgba(255,253,246,0.4)" }}>to</div>
                  <div className="text-3xl font-light" style={{ color: "#fffdf6" }}>1,500</div>
                </div>
                <div className="pb-1 text-sm" style={{ color: "rgba(255,253,246,0.4)" }}>words</div>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Under 800 words", note: "Too thin — Google won't rank it for competitive queries", ok: false },
                  { label: "800–1,500 words", note: "The sweet spot — enough depth without padding", ok: true },
                  { label: "1,500+ words", note: "Great for pillar content and competitive topics", ok: true },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-3 rounded-lg px-4 py-3"
                    style={{
                      background: row.ok ? "rgba(162,140,117,0.07)" : "rgba(200,80,80,0.06)",
                      border: `1px solid ${row.ok ? "rgba(162,140,117,0.15)" : "rgba(200,80,80,0.18)"}`,
                    }}
                  >
                    <span className="text-sm flex-shrink-0" style={{ color: row.ok ? "#a28c75" : "rgba(200,80,80,0.7)" }}>
                      {row.ok ? "✓" : "✗"}
                    </span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{row.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>{row.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── WHAT TO WRITE ABOUT ── */}
        <div>
          <SectionLabel label="What to Write About" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "💉",
                category: "Treatment Questions",
                color: "rgba(162,140,117,0.08)", border: "rgba(162,140,117,0.2)", accent: "#a28c75",
                examples: [
                  "How does Morpheus8 work?",
                  "What is the recovery time for RF microneedling?",
                  "How long do filler results last?",
                  "What does Botox actually cost?",
                ],
                tip: "Target patients who are already interested and doing research — highest intent, easiest convert.",
              },
              {
                icon: "⚖️",
                category: "Comparison Articles",
                color: "rgba(100,150,200,0.07)", border: "rgba(100,150,200,0.18)", accent: "#7aabcf",
                examples: [
                  "Botox vs. Dysport — What's the Difference?",
                  "Morpheus8 vs. Microneedling",
                  "IPL vs. BBL for Skin Tone",
                  "Filler vs. Biostimulators",
                ],
                tip: "Patients searching comparisons are actively deciding between options — they're ready to book.",
              },
              {
                icon: "🔍",
                category: "Concern-Based Topics",
                color: "rgba(120,180,120,0.07)", border: "rgba(120,180,120,0.16)", accent: "#7db870",
                examples: [
                  "Best Treatments for Acne Scars",
                  "How to Tighten Loose Skin After Weight Loss",
                  "What Causes Melasma — and How to Treat It",
                  "Jawline Definition Without Surgery",
                ],
                tip: "These patients don't know the treatment name yet — they know the problem. Meet them there.",
              },
              {
                icon: "🌸",
                category: "Seasonal Content",
                color: "rgba(200,160,80,0.07)", border: "rgba(200,160,80,0.18)", accent: "#c8a050",
                examples: [
                  "Summer Skincare Essentials",
                  "Best Fall Treatments Before the Holidays",
                  "Winter Resurfacing: Why Now Is the Right Time",
                  "Spring Body Contouring Prep",
                ],
                tip: "Plan seasonal posts 6–8 weeks ahead so they're indexed before the demand peaks.",
              },
              {
                icon: "🧬",
                category: "Lifestyle & Education",
                color: "rgba(160,100,200,0.07)", border: "rgba(160,100,200,0.18)", accent: "#a064c8",
                examples: [
                  "How to Slow the Visible Signs of Aging",
                  "Collagen Loss: What's Actually Happening to Your Skin",
                  "Menopause and Skin Changes — What to Expect",
                  "Why SPF Is Your Best Anti-Aging Tool",
                ],
                tip: "Lifestyle content attracts top-of-funnel readers who become patients over time.",
              },
              {
                icon: "📍",
                category: "Local SEO Posts",
                color: "rgba(200,100,100,0.07)", border: "rgba(200,100,100,0.18)", accent: "#c87a7a",
                examples: [
                  "Best Med Spa in [Your City] — What to Look For",
                  "Morpheus8 in [City]: What Patients Should Know",
                  "Where to Get Laser Hair Removal in [Area]",
                  "[City] Guide to Non-Surgical Body Contouring",
                ],
                tip: "Mention your city naturally throughout the article — don't force it. Pair treatments with your location in titles.",
              },
            ].map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl p-6"
                style={{ background: cat.color, border: `1px solid ${cat.border}` }}
              >
                <div className="text-2xl mb-3">{cat.icon}</div>
                <p className="text-sm font-medium mb-3" style={{ color: "#fffdf6" }}>{cat.category}</p>
                <ul className="space-y-1.5 mb-4">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="text-xs flex items-start gap-1.5" style={{ color: "rgba(255,253,246,0.55)" }}>
                      <span className="flex-shrink-0 mt-0.5" style={{ color: cat.accent }}>·</span>
                      {ex}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-lg px-3 py-2 text-xs leading-relaxed"
                  style={{ background: "rgba(0,0,0,0.2)", color: cat.accent }}
                >
                  {cat.tip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BLOG ANATOMY ── */}
        <div>
          <SectionLabel label="The Anatomy of a High-Performing Blog Post" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Every blog post should follow this structure — both for reader experience and for Google&apos;s ability to understand and rank the content.
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* Blog mockup */}
            <div
              className="w-full md:w-72 flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(162,140,117,0.2)", background: "#0f0006" }}
            >
              {/* Chrome */}
              <div className="px-4 py-3 flex items-center gap-2" style={{ background: "#1a000c", borderBottom: "1px solid rgba(162,140,117,0.12)" }}>
                <div className="flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>
                <div className="flex-1 h-5 rounded-sm text-xs flex items-center px-2" style={{ background: "rgba(162,140,117,0.08)", color: "rgba(162,140,117,0.5)" }}>
                  yourpractice.com/blog/morpheus8-recovery
                </div>
              </div>

              <div className="p-4 space-y-2.5">
                {/* Title / H1 */}
                <div className="rounded-lg p-3" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}>
                  <div className="text-xs font-medium mb-2" style={{ color: "#a28c75" }}>① Keyword Title (H1)</div>
                  <div className="h-3 rounded mb-1" style={{ background: "rgba(255,253,246,0.25)", width: "90%" }} />
                  <div className="h-3 rounded" style={{ background: "rgba(255,253,246,0.15)", width: "65%" }} />
                </div>

                {/* Intro */}
                <div className="rounded-lg p-3" style={{ background: "rgba(100,150,200,0.08)", border: "1px solid rgba(100,150,200,0.18)" }}>
                  <div className="text-xs font-medium mb-2" style={{ color: "#7aabcf" }}>② Quick Answer Intro</div>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-2 rounded mb-1.5" style={{ background: "rgba(255,253,246,0.07)", width: `${65 + i * 10}%` }} />
                  ))}
                </div>

                {/* H2 sections */}
                <div className="rounded-lg p-3" style={{ background: "rgba(120,180,120,0.07)", border: "1px solid rgba(120,180,120,0.16)" }}>
                  <div className="text-xs font-medium mb-2" style={{ color: "#7db870" }}>③ H2 Sections</div>
                  <div className="space-y-2">
                    {["What is Morpheus8?", "Who is a candidate?", "What to expect"].map((h) => (
                      <div key={h}>
                        <div className="h-2 rounded mb-1" style={{ background: "rgba(120,180,120,0.2)", width: "70%" }} />
                        <div className="h-1.5 rounded mb-0.5" style={{ background: "rgba(255,253,246,0.05)", width: "90%" }} />
                        <div className="h-1.5 rounded" style={{ background: "rgba(255,253,246,0.05)", width: "75%" }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="rounded-lg p-3" style={{ background: "rgba(200,160,80,0.07)", border: "1px solid rgba(200,160,80,0.18)" }}>
                  <div className="text-xs font-medium mb-2" style={{ color: "#c8a050" }}>④ FAQ Section</div>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-2 rounded mb-1.5" style={{ background: "rgba(255,253,246,0.06)" }} />
                  ))}
                </div>

                {/* CTA */}
                <div className="rounded-lg p-3" style={{ background: "rgba(160,100,200,0.08)", border: "1px solid rgba(160,100,200,0.2)" }}>
                  <div className="text-xs font-medium mb-2" style={{ color: "#a064c8" }}>⑤ Call to Action</div>
                  <div className="h-7 rounded flex items-center justify-center text-xs" style={{ background: "rgba(160,100,200,0.25)", color: "#fffdf6" }}>
                    Schedule Your Consultation →
                  </div>
                </div>
              </div>
            </div>

            {/* Section breakdowns */}
            <div className="flex-1 space-y-3">
              {[
                {
                  num: "①", color: "#a28c75", bg: "rgba(162,140,117,0.07)", border: "rgba(162,140,117,0.2)",
                  label: "Keyword-Focused Title (H1)",
                  desc: "Match exactly what patients search. 'Morpheus8 Recovery Time: What to Expect' outperforms 'All About Morpheus8.' One H1 per post — no exceptions.",
                },
                {
                  num: "②", color: "#7aabcf", bg: "rgba(100,150,200,0.06)", border: "rgba(100,150,200,0.16)",
                  label: "Short Intro That Answers the Question Immediately",
                  desc: "Don't bury the lead. Give the short answer in the first paragraph — then expand. Patients (and Google) reward pages that get to the point.",
                },
                {
                  num: "③", color: "#7db870", bg: "rgba(120,180,120,0.06)", border: "rgba(120,180,120,0.14)",
                  label: "Educational H2 Sections",
                  desc: "Break the content into clear sections using H2 headings. Each section should answer a specific sub-question. This is also where your secondary keywords live naturally.",
                },
                {
                  num: "④", color: "#c8a050", bg: "rgba(200,160,80,0.06)", border: "rgba(200,160,80,0.16)",
                  label: "FAQ Section",
                  desc: "Write from real consultation questions your team hears. This is your best opportunity to appear in Google's featured snippets — the answer boxes at the top of search results.",
                },
                {
                  num: "⑤", color: "#a064c8", bg: "rgba(160,100,200,0.06)", border: "rgba(160,100,200,0.16)",
                  label: "Clear Call-to-Action",
                  desc: "Every blog post ends with a path to booking. 'Ready to see if Morpheus8 is right for you? Schedule a consultation with our team today.' Link directly to your booking page.",
                },
              ].map((z) => (
                <div key={z.num} className="rounded-xl px-5 py-4 flex items-start gap-4" style={{ background: z.bg, border: `1px solid ${z.border}` }}>
                  <span className="text-sm font-medium flex-shrink-0 w-6 text-center" style={{ color: z.color }}>{z.num}</span>
                  <div>
                    <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{z.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{z.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SEO BEST PRACTICES ── */}
        <div>
          <SectionLabel label="SEO Best Practices" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🔑", label: "Keywords — natural, not forced", desc: "Use your primary keyword in the title, first paragraph, one H2, and a few times in the body. Secondary keywords fill in naturally. Never stuff." },
              { icon: "🏗️", label: "One H1, multiple H2s and H3s", desc: "The heading hierarchy tells Google how the page is organized. Skip levels only if the content structure calls for it — not for style reasons." },
              { icon: "🔗", label: "Internal links throughout", desc: "Link to your treatment pages, consultation page, related blogs, and before & after gallery. This distributes SEO authority across your site." },
              { icon: "🌐", label: "Link to external sources", desc: "Citing a credible study or dermatology association adds to your E-E-A-T signal. One or two per post is enough." },
              { icon: "🖼️", label: "Optimize images & alt text", desc: "Name your image files descriptively ('morpheus8-before-after-jawline.jpg'), then write alt text that describes what's shown — not keywords repeated." },
              { icon: "📸", label: "Include before & after photos", desc: "Real patient results whenever possible. This is both an SEO and a conversion asset — and increasingly important for Google image search visibility." },
              { icon: "💬", label: "Write for patients, not physicians", desc: "Simple, conversational language. If a 14-year-old can't follow it, rewrite it. Jargon is a trust barrier, not a credibility signal." },
              { icon: "📍", label: "Mention your city naturally", desc: "Don't force '[City] [treatment]' into every sentence. Once in the title or intro, once in the CTA, once in the body is enough." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-5 flex items-start gap-4" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CHECKLIST ── */}
        <div className="rounded-2xl p-8" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.25)" }}>
          <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>Every Blog Post Should Include</h2>
          <p className="text-sm mb-7" style={{ color: "rgba(255,253,246,0.4)" }}>Run through this before hitting publish.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Primary keyword in title and first paragraph",
              "Secondary keywords used naturally in the body",
              "Location mentioned where relevant",
              "One H1, multiple H2 and H3 headings",
              "Internal links to treatment pages and related content",
              "FAQ section based on real consultation questions",
              "Optimized image filenames and alt text",
              "Before & after photos where appropriate",
              "Clear call-to-action to schedule a consultation",
              "Meta title (under 60 characters)",
              "Meta description with outcome language",
              "Mobile-friendly formatting — short paragraphs, no walls of text",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ border: "1px solid rgba(162,140,117,0.35)", background: "rgba(162,140,117,0.08)" }}>
                  <span className="text-xs" style={{ color: "#a28c75" }}>✓</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.7)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── REPURPOSING ── */}
        <div>
          <SectionLabel label="One Blog Post, Eight Content Pieces" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Don&apos;t let a blog post live only on your website. Every post you publish should immediately fuel your other channels.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Center — blog post */}
            <div className="flex-shrink-0">
              <div
                className="w-36 h-36 rounded-2xl flex flex-col items-center justify-center text-center"
                style={{ background: "linear-gradient(145deg, #2f0410, #1a000c)", border: "2px solid rgba(162,140,117,0.35)" }}
              >
                <span className="text-3xl mb-1">📝</span>
                <span className="text-xs font-medium leading-tight" style={{ color: "#a28c75" }}>Blog Post</span>
              </div>
            </div>

            {/* Spokes */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "📱", label: "Instagram Post", note: "Pull the key insight as a caption" },
                { icon: "🎠", label: "Instagram Carousel", note: "Turn the H2 sections into slides" },
                { icon: "🗺️", label: "GBP Post", note: "Short version drives local search" },
                { icon: "📧", label: "Email Newsletter", note: "Link back for full read + CTA" },
                { icon: "📲", label: "Text Campaign", note: "Teaser line with link" },
                { icon: "🎬", label: "Short-Form Video", note: "Talk to camera about the topic" },
                { icon: "▶️", label: "YouTube Short", note: "FAQ from the blog as Q&A video" },
                { icon: "💬", label: "Sales Talking Points", note: "Brief the team on key messages" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-4"
                  style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                >
                  <div className="text-lg mb-2">{item.icon}</div>
                  <p className="text-xs font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CONTENT CLUSTERS ── */}
        <div>
          <SectionLabel label="Bonus Strategy: Content Clusters" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Instead of publishing random one-off posts, build clusters of related content around your core treatments.
            This signals topical authority to Google — making your entire site rank better, not just individual pages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Hub & Spoke diagram */}
            <div className="rounded-2xl p-6" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.18)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Example: Morpheus8 Cluster</p>

              {/* Pillar */}
              <div className="rounded-xl px-4 py-3 mb-4 flex items-center gap-3" style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.35)" }}>
                <span className="text-base">🏛️</span>
                <div>
                  <p className="text-xs font-medium" style={{ color: "#a28c75" }}>Pillar Page (Treatment Page)</p>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.6)" }}>/morpheus8 — the main treatment page</p>
                </div>
              </div>

              <div className="text-center text-sm mb-3" style={{ color: "rgba(162,140,117,0.4)" }}>linked to and from ↕</div>

              <div className="space-y-2">
                {[
                  "What Is Morpheus8 and How Does It Work?",
                  "Morpheus8 Recovery: What to Expect Day by Day",
                  "Morpheus8 vs. Microneedling — Which is Right for You?",
                  "How Many Morpheus8 Sessions Do You Need?",
                  "Morpheus8 Results: Before & After + Timeline",
                ].map((post) => (
                  <div key={post} className="rounded-lg px-3 py-2.5 flex items-center gap-2.5" style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.12)" }}>
                    <span className="text-xs" style={{ color: "#a28c75" }}>📝</span>
                    <p className="text-xs leading-snug" style={{ color: "rgba(255,253,246,0.65)" }}>{post}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why it works */}
            <div className="rounded-2xl p-6" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.18)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Why clusters work</p>
              <div className="space-y-4">
                {[
                  { icon: "🧠", label: "Topical authority", desc: "When Google sees you've written thoroughly about a subject from multiple angles, it considers you an authority — and ranks you higher for all related queries." },
                  { icon: "🔗", label: "Internal linking power", desc: "Cluster posts interlink with each other and back to the main treatment page, passing SEO authority throughout and keeping visitors on your site longer." },
                  { icon: "📡", label: "Wider keyword coverage", desc: "One treatment = dozens of unique searches. Cluster posts let you rank for all of them — not just the most generic one." },
                  { icon: "🎯", label: "Capture every stage", desc: "Awareness posts bring in top-of-funnel readers. Comparison and how-to posts convert them. The cluster handles the whole journey." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-base flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FINAL TAKEAWAY ── */}
        <div className="rounded-2xl p-8" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.18)" }}>
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>The bottom line</p>
          <p className="font-display text-xl font-light leading-relaxed" style={{ color: "#fffdf6" }}>
            Treat every blog post as a 24/7 salesperson.
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "rgba(255,253,246,0.6)" }}>
            Consistent, high-quality educational content improves search visibility, builds trust, and generates
            qualified consultation requests long after it&apos;s published. The practice that publishes 50 well-structured
            posts over the next year will have a marketing asset that compounds in value — and outranks the one
            that doesn&apos;t, even if everything else is identical.
          </p>
        </div>

      </div>
    </div>
  );
}
