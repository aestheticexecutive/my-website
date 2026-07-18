import Link from "next/link";
import { ArrowLeft, Star, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Feature Strategy | Aesthetic Executive",
  description:
    "How to design and execute monthly features that grow revenue, deepen patient loyalty, and protect your brand positioning.",
};

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-medium"
        style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
      >
        {number}
      </div>
      <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
        {title}
      </h2>
    </div>
  );
}

const seasonalCalendar = [
  {
    season: "January",
    items: ["Skin rejuvenation", "Body contouring", "Weight management"],
  },
  {
    season: "Spring",
    items: ["Laser hair removal", "Skin brightening", "Wedding preparation"],
  },
  {
    season: "Summer",
    items: ["Lumecca / IPL", "Skincare & sunscreen", "Hydration treatments"],
  },
  {
    season: "Fall",
    items: ["RF Microneedling", "CO₂ resurfacing", "Body tightening"],
  },
  {
    season: "Holiday Season",
    items: ["Gift cards", "Injectables", "Skin maintenance", "Holiday glow packages"],
  },
];

const valueAdds = [
  "Complimentary treatment upgrade",
  "Additional treatment area",
  "Free maintenance session",
  "Medical-grade sunscreen",
  "LED therapy",
  "Dermaplaning",
  "Hydrating mask",
  "Neck treatment with facial",
  "Hands treated alongside face",
  "Laser hair removal area added",
  "Complimentary skincare consultation",
  "Complimentary consultation for another concern",
];

const treatmentPairings = [
  { purchase: "Morpheus8", bonus: "Complimentary laser hair removal area" },
  { purchase: "Filler", bonus: "Complimentary skincare consultation" },
  { purchase: "IPL package", bonus: "Complimentary LED treatment" },
  { purchase: "Body contouring", bonus: "Complimentary skin tightening demo" },
];

const teamQuestions = [
  "What are patients asking about most?",
  "What treatments are patients interested in but not booking?",
  "What objections are you hearing?",
  "Which treatment do you wish more patients would experience?",
  "Which services are patients surprised by once they try them?",
  "What treatments are you personally excited about?",
];

const metricsToTrack = [
  "Number of treatments sold",
  "Revenue generated",
  "Packages sold",
  "Retail attached",
  "Consultation conversions",
  "Rebooking rate",
  "Patient feedback",
  "Provider feedback",
];

const reviewQuestions = [
  "Which value-adds were most successful?",
  "Which treatments generated the most excitement?",
  "Which promotions underperformed?",
  "What objections did patients have?",
];

const planningChecklist = [
  "Does this support one of our business goals?",
  "Is this relevant to our existing patient base?",
  "Does it fit the current season?",
  "Are we adding value instead of simply discounting?",
  "Does it create better patient outcomes?",
  "Does our team know how to talk about it?",
  "Do we have email, text, social media, website, and in-office signage ready?",
  "Have providers and front desk given input?",
  "Do we have a way to measure success?",
];

const discountExceptions = [
  "Product of the Month (10–20% off)",
  "Clearance inventory",
  "Annual events",
  "Black Friday",
  "Patient appreciation events",
];

const operationalUses = [
  "Fill provider schedule gaps",
  "Increase utilization of underused devices",
  "Introduce new providers",
  "Increase package sales",
  "Improve recurring revenue",
  "Launch new services",
  "Increase retail attachment rates",
];

export default function MonthlyFeaturesPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 pt-12 pb-12">
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
              <Star size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Marketing Resources · Strategy
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Monthly Feature Strategy
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            How to design and execute monthly features that grow revenue, deepen patient loyalty,
            and protect your brand positioning — without becoming the practice patients wait to visit only when something is on sale.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Purpose callout */}
        <div
          className="rounded-xl p-7"
          style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}
        >
          <h2 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
            The Purpose of a Monthly Feature
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.6)" }}>
            A monthly feature is not simply a promotion — it&apos;s a strategic marketing tool designed to introduce
            patients to new services, increase treatment utilization, enhance patient outcomes, and keep your
            existing patient base engaged throughout the year.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            The goal should never be to become the practice that patients wait to visit only when something is on sale.
            Instead, your monthly feature should create excitement around a treatment while reinforcing the value
            and expertise behind your brand.
          </p>
        </div>

        {/* Section 1: Brand Positioning */}
        <div>
          <SectionHeader number="1" title="Protect Your Brand Positioning" />

          <div className="mb-6">
            <h3 className="text-base font-medium mb-3" style={{ color: "#fffdf6" }}>Use Elevated Language</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
              The words you choose matter. A subtle language shift maintains a premium, medical aesthetic
              while still creating urgency and excitement. Luxury brands don&apos;t run sales every month —
              they feature experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(255,100,100,0.6)" }}>
                Avoid
              </p>
              <ul className="space-y-2">
                {["Monthly Promotion", "Monthly Special", "Limited-Time Discount", "Sale"].map((w) => (
                  <li key={w} className="text-sm flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                    <span style={{ color: "rgba(255,100,100,0.5)" }}>×</span> {w}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.15)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.7)" }}>
                Use Instead
              </p>
              <ul className="space-y-2">
                {[
                  "Monthly Feature",
                  "Treatment Spotlight",
                  "Featured Treatment",
                  "This Month's Highlight",
                  "Provider Pick of the Month",
                  "Seasonal Spotlight",
                ].map((w) => (
                  <li key={w} className="text-sm flex items-center gap-2" style={{ color: "rgba(255,253,246,0.7)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Know Your Audience */}
        <div>
          <SectionHeader number="2" title="Know Who You're Marketing To" />
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            One of the biggest mistakes practices make is assuming monthly features are meant to attract new patients.
            They&apos;re not. Your monthly features should primarily target your <strong style={{ color: "#fffdf6" }}>existing patient base</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Already trust you", desc: "Existing patients already know, like, and trust your practice — no convincing required." },
              { label: "More likely to try more", desc: "Patients who already visit are far more likely to add treatments to their plan." },
              { label: "Already coming in", desc: "You have natural touch points during every appointment to introduce the feature." },
              { label: "Need education, not ads", desc: "Monthly features give your team a conversation starter — not a sales pitch." },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg p-5"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Choose the Right Treatment */}
        <div>
          <SectionHeader number="3" title="Choose the Right Treatment" />
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            Every monthly feature should have a purpose — and should support a larger business objective,
            not simply fill your marketing calendar. Before selecting a treatment, ask:
          </p>
          <div
            className="rounded-xl p-6 space-y-3"
            style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.12)" }}
          >
            {[
              "Is this a new treatment we want patients to discover?",
              "Is this a service we'd like to perform more often?",
              "Is this something our providers are excited about?",
              "Is this treatment especially relevant during this season?",
              "Are more patients asking about this service lately?",
              "Is there a provider whose schedule we'd like to fill?",
              "Do we have a new provider who needs additional patient volume?",
            ].map((q) => (
              <div key={q} className="flex items-start gap-3">
                <span className="mt-0.5 text-lg leading-none flex-shrink-0" style={{ color: "#a28c75" }}>?</span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Lead With Value */}
        <div>
          <SectionHeader number="4" title="Lead With Value — Not Discounts" />
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            Whenever possible, avoid reducing your prices. Instead, increase the value patients receive.
            This accomplishes two things: better patient results (which drive future purchases) and price
            protection (you&apos;re teaching value, not conditioning patients to wait for discounts).
          </p>

          <h3 className="text-base font-medium mb-4" style={{ color: "#fffdf6" }}>Value-Add Ideas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {valueAdds.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-lg px-4 py-3"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <span style={{ color: "#a28c75" }}>+</span>
                <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</span>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-6"
            style={{ background: "rgba(255,253,246,0.03)", border: "1px solid rgba(162,140,117,0.15)" }}
          >
            <h3 className="text-sm font-medium mb-3" style={{ color: "#fffdf6" }}>When Discounts Make Sense</h3>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.45)" }}>
              Discounts aren&apos;t off limits — but they should be used intentionally, not as a default.
            </p>
            <ul className="space-y-2">
              {discountExceptions.map((item) => (
                <li key={item} className="text-sm flex items-center gap-2" style={{ color: "rgba(255,253,246,0.55)" }}>
                  <span style={{ color: "#a28c75" }}>·</span> {item}
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mt-4" style={{ color: "rgba(255,253,246,0.35)" }}>
              Outside of these situations, prioritize adding value over reducing price.
            </p>
          </div>
        </div>

        {/* Section 5: Think Seasonally */}
        <div>
          <SectionHeader number="5" title="Think Seasonally" />
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            Patients&apos; concerns change throughout the year. Build your annual calendar around patient
            demand instead of selecting treatments randomly each month.
          </p>

          <div className="space-y-3">
            {seasonalCalendar.map((s) => (
              <div
                key={s.season}
                className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <div className="sm:w-36 flex-shrink-0">
                  <span className="text-sm font-medium" style={{ color: "#a28c75" }}>{s.season}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(162,140,117,0.1)", color: "rgba(255,253,246,0.65)", border: "1px solid rgba(162,140,117,0.15)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Operational */}
        <div>
          <SectionHeader number="6" title="Use Features to Solve Operational Challenges" />
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            Monthly features are also an operations strategy. A good monthly feature should solve a
            business need — not just create a marketing campaign.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {operationalUses.map((use) => (
              <div
                key={use}
                className="flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <Star size={12} style={{ color: "#a28c75", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{use}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Pair Treatments */}
        <div>
          <SectionHeader number="7" title="Introduce Less Popular Treatments Through Popular Ones" />
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            If one treatment consistently performs well while another struggles, pair them together.
            Instead of trying to convince patients to book an underperforming treatment by itself,
            use your most popular services to introduce patients to it — lowering the barrier to trying something new.
          </p>

          <div className="space-y-3">
            {treatmentPairings.map((pair) => (
              <div
                key={pair.purchase}
                className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3"
                style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <div className="flex-1">
                  <span className="text-xs tracking-[0.15em] uppercase mb-1 block" style={{ color: "rgba(162,140,117,0.55)" }}>
                    Purchase
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#fffdf6" }}>{pair.purchase}</span>
                </div>
                <div className="hidden sm:block text-xl" style={{ color: "rgba(162,140,117,0.4)" }}>→</div>
                <div className="flex-1">
                  <span className="text-xs tracking-[0.15em] uppercase mb-1 block" style={{ color: "rgba(162,140,117,0.55)" }}>
                    Bonus
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{pair.bonus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Ask Your Team */}
        <div>
          <SectionHeader number="8" title="Ask Your Team" />
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            Some of your best marketing ideas already exist inside your practice. Before planning each
            month&apos;s feature, ask your providers and front desk team:
          </p>
          <div className="space-y-3">
            {teamQuestions.map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg px-5 py-4"
                style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <span
                  className="text-xs font-medium flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>{q}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed mt-5" style={{ color: "rgba(255,253,246,0.4)" }}>
            Your providers have hundreds of patient conversations each month. Their feedback is one of
            your most valuable marketing resources.
          </p>
        </div>

        {/* Section 9: Measure */}
        <div>
          <SectionHeader number="9" title="Measure What Works" />
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            Every monthly feature should be tracked. Over time, you&apos;ll build a library of historical data
            that helps you create increasingly successful monthly features year after year.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>
                Core Metrics
              </p>
              <ul className="space-y-2">
                {metricsToTrack.map((m) => (
                  <li key={m} className="text-sm flex items-center gap-2" style={{ color: "rgba(255,253,246,0.6)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>
                Also Evaluate
              </p>
              <ul className="space-y-2">
                {reviewQuestions.map((q) => (
                  <li key={q} className="text-sm flex items-center gap-2" style={{ color: "rgba(255,253,246,0.6)" }}>
                    <span style={{ color: "#a28c75" }}>·</span> {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Planning Checklist */}
        <div
          className="rounded-xl p-7"
          style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.25)" }}
        >
          <h2 className="font-display text-xl font-light mb-2" style={{ color: "#fffdf6" }}>
            Monthly Feature Planning Checklist
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,253,246,0.45)" }}>
            Before launching a new monthly feature, confirm you can answer yes to each of these.
          </p>
          <div className="space-y-3">
            {planningChecklist.map((item, i) => (
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

        {/* Final Thought */}
        <div
          className="rounded-xl p-7"
          style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.15)" }}
        >
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
            Final Thought
          </p>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,253,246,0.7)" }}>
            A successful monthly feature should never feel like a sale. It should feel like an opportunity
            for patients to discover something new, achieve even better results, and experience more of
            what your practice has to offer. When done well, monthly features increase treatment utilization,
            improve patient outcomes, create meaningful conversations during appointments, and drive
            long-term revenue — without diminishing the value of your brand.
          </p>
        </div>

        {/* Promo Calendar CTA */}
        <div
          className="rounded-xl p-7 flex flex-col sm:flex-row sm:items-center gap-6"
          style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}
        >
          <div className="flex-1">
            <h2 className="font-display text-xl font-light mb-2" style={{ color: "#fffdf6" }}>
              Promotional Marketing Calendar
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
              Plan your entire year in one place. Add monthly features, campaigns, and events — with notes
              and performance metrics for each entry.
            </p>
          </div>
          <a
            href="/tools/promo-calendar.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 h-11 rounded text-xs font-medium tracking-wide flex-shrink-0 transition-all duration-200 hover:opacity-90"
            style={{ background: "#a28c75", color: "#0c0004" }}
          >
            <ExternalLink size={13} />
            Open Calendar
          </a>
        </div>

      </div>
    </div>
  );
}
