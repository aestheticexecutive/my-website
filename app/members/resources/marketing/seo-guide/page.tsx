import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO for Med Spas & Aesthetic Practices | Marketing Resources | Aesthetic Executive",
  description:
    "How to get found on Google by more patients — without web developer jargon. Includes a 10-question self-audit and an AI website analyzer.",
};

const benefits = [
  { label: "Get new patient leads without paying for ads", body: "Paid ads stop the moment you stop paying. SEO builds over time and keeps working in the background." },
  { label: "Show up when patients are actively searching", body: "Someone searching 'Morpheus8 near me' is already interested. SEO puts you in front of them at exactly the right moment." },
  { label: "Build trust before the patient even calls", body: "Practices that show up at the top of Google feel more established and credible — even before a patient reads a word." },
  { label: "Increase website traffic and consultation bookings", body: "More visibility means more clicks, more visits, and more opportunities to convert a searcher into a booked appointment." },
  { label: "Reduce dependence on social media algorithms", body: "Instagram and TikTok can bury your content on any given day. Google search results are far more stable and predictable." },
  { label: "Create compounding, long-term growth", body: "Unlike an ad that disappears, a well-optimized page keeps bringing in patients month after month with no ongoing spend." },
];

const factors = [
  {
    number: "01",
    title: "A separate page for every major treatment",
    body: "Instead of listing everything on one \"Services\" page, give each treatment its own dedicated page. When a patient searches \"laser hair removal in [your city]\", Google will find your specific laser hair removal page — not a page with 30 things on it.",
    example: "Good: /morpheus8 · /laser-hair-removal · /botox · /lumecca\nNot ideal: one /services page with everything listed",
  },
  {
    number: "02",
    title: "Treatment pages that actually explain the service",
    body: "Each page should answer the questions a patient would ask before booking: What is it? How does it work? Who is a good candidate? What's recovery like? How many treatments? What results can I expect? Think of it as your website doing the consultation for you.",
    example: null,
  },
  {
    number: "03",
    title: "Real before-and-after photos on treatment pages",
    body: "Photos aren't just for social media. Google wants to see evidence that you actually perform these treatments — and patients want to see proof that it works. Before-and-after photos build trust and keep visitors on your page longer, which tells Google your site is worth showing.",
    example: null,
  },
  {
    number: "04",
    title: "Patient testimonials featured on your website",
    body: "Reviews on Google and Yelp are great, but your website should also feature patient stories and testimonials. This adds credibility right on the page where patients are already reading about your services.",
    example: null,
  },
  {
    number: "05",
    title: "Your location, phone, and address clearly visible",
    body: "Google needs to know where your practice is to show you in local searches. Your city, state, full address, and phone number should appear on your homepage, contact page, and footer — not buried or hard to find.",
    example: null,
  },
  {
    number: "06",
    title: "Mentions of nearby cities and communities",
    body: "Many practices only mention their own city. But patients regularly travel 20–30 minutes for aesthetic treatments. If you also mention surrounding areas, you'll show up when patients in those communities are searching.",
    example: "Instead of: \"We serve Hilliard.\"\nTry: \"We proudly serve patients from Hilliard, Dublin, Upper Arlington, Grove City, and Columbus.\"",
  },
  {
    number: "07",
    title: "FAQ sections answering real patient questions",
    body: "Patients search questions like \"Does Morpheus8 hurt?\" and \"How long does Botox last?\" every single day. When your page has those exact questions and answers, Google often shows your page at the very top of results for those searches.",
    example: null,
  },
  {
    number: "08",
    title: "Active blog with educational content",
    body: "Consistently publishing helpful articles signals to Google that your website is active and valuable. Each blog post is another opportunity to show up in search. Aim for 2–4 posts per month on topics your patients are actually searching.",
    example: "Good blog topics: \"Morpheus8 vs Microneedling\" · \"Best Treatments After Weight Loss\" · \"How IPL Improves Rosacea\"",
  },
  {
    number: "09",
    title: "A complete, actively maintained Google Business Profile",
    body: "Your Google Business Profile is how you appear on Google Maps and in the local results box — which often shows up before any website. Keep your hours, photos, services, and contact info updated, and actively collect new reviews every month.",
    example: "Goal: 5–10 new reviews per month · Post an update at least once a week",
  },
  {
    number: "10",
    title: "Booking or contact options visible within seconds",
    body: "Google rewards websites that give visitors a good experience. A new patient should be able to call, text, book online, or submit a consultation request within seconds of landing on your site — without having to scroll to find it.",
    example: null,
  },
];

const quickWins = [
  { win: "Add before-and-after photos to every treatment page", detail: "Don't keep them only in a gallery. Put real results where patients are already reading about the treatment." },
  { win: "Create a separate page for each of your top 5 treatments", detail: "If you currently have one big services page, split it into individual pages — this alone can meaningfully improve your rankings." },
  { win: "Add a FAQ section to every treatment page", detail: "Think of 5–7 questions patients commonly ask before booking, and answer them on the page." },
  { win: "Mention every city within 30 minutes of your practice", detail: "Add a line to your homepage, contact page, or footer listing the communities you serve." },
  { win: "Publish one educational blog post this week", detail: "Start with a comparison article — like your most popular treatment vs. a common alternative." },
  { win: "Update your Google Business Profile today", detail: "Add new photos, check your hours, verify your phone number, and post an update." },
];

export default function SeoGuidePage() {
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
            Marketing Resources
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Search size={18} style={{ color: "#a28c75" }} />
            </div>
            <span
              className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium tracking-wide"
              style={{
                color: "#c8b3a3",
                background: "rgba(200,179,163,0.08)",
                border: "1px solid rgba(200,179,163,0.2)",
              }}
            >
              Guide
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-5 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Get Found on Google by<br className="hidden md:block" /> More Patients
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed mb-8"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            SEO explained in plain English — no web developer terms, no technical jargon.
            Just what your practice needs to know to show up when patients are searching for
            the treatments you offer.
          </p>

          <a
            href="/tools/seo-analyzer.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 h-11 rounded text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ background: "#a28c75", color: "#0c0004" }}
          >
            Open the AI Website Analyzer
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        {/* Why SEO Matters */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            Why It Matters
          </p>
          <h2
            className="font-display text-3xl font-light mb-3 leading-snug"
            style={{ color: "#fffdf6" }}
          >
            Think of it as digital real estate.
          </h2>
          <p
            className="text-sm max-w-2xl leading-relaxed mb-10"
            style={{ color: "rgba(255,253,246,0.45)" }}
          >
            SEO — Search Engine Optimization — is simply the process of helping Google understand
            who you are, what services you offer, where you&apos;re located, and why patients should
            trust you. The better Google understands these things, the more often it shows your
            practice when a patient nearby is searching for what you do. The more space you occupy
            on Google, the more opportunities patients have to find you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="rounded-xl border p-5"
                style={{
                  background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.18)",
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#a28c75" }} />
                  <p className="text-sm font-medium leading-snug" style={{ color: "#fffdf6" }}>
                    {b.label}
                  </p>
                </div>
                <p className="text-xs leading-relaxed pl-6" style={{ color: "rgba(255,253,246,0.4)" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What patients search */}
        <div
          className="rounded-2xl border p-7 mb-16"
          style={{
            background: "rgba(47,4,16,0.4)",
            borderColor: "rgba(162,140,117,0.15)",
          }}
        >
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            Real searches patients make every day
          </p>
          <p className="text-sm mb-5" style={{ color: "rgba(255,253,246,0.45)" }}>
            Right now, potential patients in your area are typing things like these into Google.
            If your practice doesn&apos;t show up, they&apos;re choosing someone else.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              '"Morpheus8 near me"',
              '"Best med spa in [your city]"',
              '"Laser hair removal [your city]"',
              '"How to tighten loose skin"',
              '"Does Botox hurt?"',
              '"Non-surgical facelift near me"',
              '"How long does Botox last"',
              '"Skin tightening before and after"',
              '"IPL photofacial cost"',
              '"Microneedling vs. Morpheus8"',
            ].map((q) => (
              <span
                key={q}
                className="inline-block px-3 py-1.5 rounded-lg text-xs"
                style={{
                  background: "rgba(162,140,117,0.08)",
                  border: "1px solid rgba(162,140,117,0.2)",
                  color: "rgba(162,140,117,0.85)",
                  fontStyle: "italic",
                }}
              >
                {q}
              </span>
            ))}
          </div>
        </div>

        {/* 10 factors */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            The 10-Factor Audit
          </p>
          <h2
            className="font-display text-3xl font-light mb-3 leading-snug"
            style={{ color: "#fffdf6" }}
          >
            10 things that determine how easily patients find your practice
          </h2>
          <p
            className="text-sm max-w-2xl leading-relaxed mb-10"
            style={{ color: "rgba(255,253,246,0.45)" }}
          >
            You don&apos;t need to be a web developer to do this. Open your website and check each
            one — or use the AI analyzer below to have it checked for you automatically.
          </p>

          <div className="space-y-4">
            {factors.map((f) => (
              <div
                key={f.number}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.15)",
                }}
              >
                <div className="flex gap-5 items-start">
                  <div
                    className="font-display text-2xl font-light flex-shrink-0 w-10 text-right"
                    style={{ color: "rgba(162,140,117,0.35)" }}
                  >
                    {f.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-display text-lg font-light mb-2 leading-snug"
                      style={{ color: "#fffdf6" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-0"
                      style={{ color: "rgba(255,253,246,0.45)" }}
                    >
                      {f.body}
                    </p>
                    {f.example && (
                      <div
                        className="mt-3 rounded-lg px-4 py-3"
                        style={{
                          background: "rgba(162,140,117,0.06)",
                          border: "1px solid rgba(162,140,117,0.12)",
                        }}
                      >
                        {f.example.split("\n").map((line, i) => (
                          <p key={i} className="text-xs leading-relaxed" style={{ color: "rgba(162,140,117,0.7)" }}>
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick wins */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            Quick Wins
          </p>
          <h2
            className="font-display text-3xl font-light mb-3 leading-snug"
            style={{ color: "#fffdf6" }}
          >
            Things most practices are missing — that you can fix today
          </h2>
          <p
            className="text-sm max-w-2xl leading-relaxed mb-8"
            style={{ color: "rgba(255,253,246,0.45)" }}
          >
            None of these require a web developer. They require content — words, photos, and
            information you likely already have.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickWins.map((w, i) => (
              <div
                key={w.win}
                className="rounded-xl border p-5 flex gap-4 items-start"
                style={{
                  background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.15)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-medium"
                  style={{
                    background: "rgba(162,140,117,0.12)",
                    border: "1px solid rgba(162,140,117,0.2)",
                    color: "#a28c75",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-medium mb-1 leading-snug" style={{ color: "#fffdf6" }}>
                    {w.win}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                    {w.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — AI Analyzer */}
        <div
          className="rounded-2xl border p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: "rgba(162,140,117,0.6)" }}
              >
                AI Website Analyzer
              </p>
              <h2
                className="font-display text-3xl font-light mb-3 leading-snug"
                style={{ color: "#fffdf6" }}
              >
                Want to know exactly how your website scores?
              </h2>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(255,253,246,0.45)" }}
              >
                Enter your website URL and our AI will analyze it against all 10 factors —
                then give you a plain-English report with your score, what&apos;s working,
                what&apos;s missing, and exactly what to fix first.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/tools/seo-analyzer.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 h-11 rounded text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{ background: "#a28c75", color: "#0c0004" }}
                >
                  Open AI Analyzer
                  <ExternalLink size={13} />
                </a>
                <a
                  href="/tools/seo-analyzer.html#audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 h-11 rounded text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-70"
                  style={{
                    background: "transparent",
                    color: "#a28c75",
                    border: "1px solid rgba(162,140,117,0.3)",
                  }}
                >
                  Self-Audit Checklist
                </a>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Enter your website URL — no login required",
                "AI reads your site and checks all 10 factors",
                "Get a score out of 10 with a plain-English breakdown",
                "See exactly what to fix and where to start",
              ].map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75" }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm" style={{ color: "rgba(255,253,246,0.55)" }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
