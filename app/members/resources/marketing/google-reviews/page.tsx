import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Review Best Practices | Aesthetic Executive",
  description:
    "A practical guide for med spas on why Google reviews matter, how to ask effectively, and how to build a review culture that compounds over time.",
};

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-medium"
        style={{
          background: "rgba(162,140,117,0.12)",
          border: "1px solid rgba(162,140,117,0.25)",
          color: "#a28c75",
        }}
      >
        {number}
      </div>
      <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
        {title}
      </h2>
    </div>
  );
}

const reviewConversation = [
  {
    step: "Step 1",
    heading: "Open the door",
    script: '"How was your treatment today?"',
    note: "Wait for a positive response — 'Great!', 'Amazing!', 'I loved it!' — before moving forward.",
  },
  {
    step: "Step 2",
    heading: "Build on the moment",
    script: '"That\'s awesome! I\'m so glad you enjoyed it — I love that treatment."',
    note: 'Then ask: "Would you do me a favor?" — Most people respond with "Sure!" or "Of course!" before they even know what you\'re asking.',
  },
  {
    step: "Step 3",
    heading: "Make the ask",
    script: '"Would you mind leaving us a quick Google review talking a little about your experience today? It really helps new patients find us, and our providers genuinely love reading about the experiences our patients have."',
    note: "Then point them to your Google Review QR code and give them a moment to complete it.",
  },
];

const idealPatientSigns = [
  "Had a visibly positive experience",
  "Built good rapport with your team",
  "Is smiling or expressing satisfaction",
  "Compliments the provider or treatment",
  "Says they love their results",
  "Indicates they'll be returning",
];

const qrCodeLocations = [
  "Front desk and every checkout station",
  "Treatment rooms",
  "Post-treatment instruction cards",
  "Appointment folders and brochures",
  "Email signatures",
  "Text messages",
  "Linktree / website",
];

const checkoutBridges = [
  '"Take your time! I\'m just going to finish putting together your invoice."',
  '"I\'ll go ahead and pull up some dates for your next appointment."',
  '"I\'m just adding your Alle rewards while you do that."',
];

const teamIncentives = [
  "Monthly review goals with tracking",
  "Friendly competitions between team members",
  "Bonuses or gift cards for top askers",
  "Team lunches for hitting monthly targets",
  "Recognition and shoutouts during staff meetings",
];

const repurposeChannels = [
  "Instagram feed and Stories",
  "Facebook",
  "Your website (testimonials section)",
  "Email newsletters",
  "In-office digital displays",
  "Inside the practice on printed signage",
];

const checklist = [
  "Ask every satisfied patient.",
  'Ask only after confirming they had a positive experience.',
  'Use the phrase: "Would you do me a favor?"',
  "Direct patients to a Google Review QR code.",
  "Give patients time to complete the review before finishing checkout.",
  "Never offer incentives in exchange for reviews.",
  "Thank patients after they leave a review.",
  "Reward staff for consistently asking.",
  "Automate review requests through text messaging.",
  "Display Google Review QR codes throughout the practice.",
  "Share positive reviews on social media and your website.",
  "Track review goals monthly.",
];

const trackingMetrics = [
  "Total reviews",
  "Reviews earned this month",
  "Average star rating",
  "Provider-specific reviews",
  "Monthly goals vs. actuals",
];

export default function GoogleReviewsPage() {
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
              Marketing Resources · Reputation
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Google Reviews
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            Why Google reviews are one of the most powerful free marketing tools you have,
            and a practical system for collecting them consistently — without it ever feeling awkward.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Why reviews matter */}
        <div
          className="rounded-xl p-7"
          style={{
            background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
            border: "1px solid rgba(162,140,117,0.2)",
          }}
        >
          <h2 className="font-display text-xl font-light mb-4" style={{ color: "#fffdf6" }}>
            Why Google Reviews Matter
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.6)" }}>
            Google reviews are one of the most powerful — and free — marketing tools available to your practice.
            They influence whether potential patients choose your business, and they play a direct role in how
            Google ranks you in local search results. Practices with a higher volume of recent, high-quality reviews
            are viewed as more authoritative and trustworthy.
          </p>
          <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>
            What Google is looking for
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "High quantity", desc: "Volume signals trust and authority to Google's algorithm" },
              { label: "Consistent quality", desc: "Predominantly positive ratings over a sustained period" },
              { label: "Recency", desc: "New reviews added regularly, not just a burst and then nothing" },
              { label: "Authenticity", desc: "Detailed, specific patient experiences carry more weight" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg p-4"
                style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed mt-5" style={{ color: "rgba(255,253,246,0.5)" }}>
            Generating Google reviews should be an ongoing initiative — not something you focus on only occasionally.
          </p>
        </div>

        {/* The #1 rule */}
        <div>
          <SectionHeader number="1" title='The #1 Rule: Just Ask' />
          <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.55)" }}>
            The biggest reason practices don&apos;t receive more reviews? They simply don&apos;t ask.
            Most happy patients are willing to leave a review — they just need to be prompted.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
            The confidence of the person asking makes a tremendous difference. Asking for a review should
            feel like a natural part of every checkout process — not something awkward or optional.
          </p>
        </div>

        {/* Ask the right patient */}
        <div>
          <SectionHeader number="2" title="Ask the Right Patient" />
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
            Not every patient should be asked. Focus on the ones who are already telling you they&apos;re happy.
            If someone had concerns or wasn&apos;t completely satisfied, focus on resolving their experience
            instead of requesting a review.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {idealPatientSigns.map((sign) => (
              <div
                key={sign}
                className="flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <Star size={11} style={{ color: "#a28c75", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{sign}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The conversation */}
        <div>
          <SectionHeader number="3" title="The Perfect Google Review Conversation" />
          <p className="text-sm leading-relaxed mb-7" style={{ color: "rgba(255,253,246,0.55)" }}>
            This three-step flow works because each step builds natural momentum toward the ask.
          </p>
          <div className="space-y-4">
            {reviewConversation.map((s) => (
              <div
                key={s.step}
                className="rounded-xl p-6"
                style={{
                  background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
                  border: "1px solid rgba(162,140,117,0.18)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs tracking-[0.15em] uppercase px-2.5 py-1 rounded-md"
                    style={{ background: "rgba(162,140,117,0.12)", color: "#a28c75", border: "1px solid rgba(162,140,117,0.22)" }}
                  >
                    {s.step}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#fffdf6" }}>{s.heading}</span>
                </div>
                <p
                  className="text-sm italic leading-relaxed mb-3 pl-4"
                  style={{ color: "rgba(255,253,246,0.75)", borderLeft: "2px solid rgba(162,140,117,0.3)" }}
                >
                  {s.script}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Give them time */}
        <div>
          <SectionHeader number="4" title="Give Them Time to Complete It" />
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
            One of the biggest mistakes practices make is asking for a review and immediately moving on
            with checkout. Allow a minute or two for the patient to actually write it. While they&apos;re writing,
            keep yourself busy with something non-intrusive:
          </p>
          <div className="space-y-3 mb-5">
            {checkoutBridges.map((line, i) => (
              <div
                key={i}
                className="rounded-lg px-5 py-4"
                style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>{line}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
            When they finish: <span className="italic" style={{ color: "rgba(255,253,246,0.65)" }}>&ldquo;Perfect! Thank you so much — I really appreciate it.&rdquo;</span>
          </p>
        </div>

        {/* Make it easy */}
        <div>
          <SectionHeader number="5" title="Make It Easy" />
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
            The easier it is to leave a review, the more reviews you&apos;ll receive. Never make patients search
            for where to leave a review. Have a Google Review QR code everywhere a patient might be:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {qrCodeLocations.map((loc) => (
              <div
                key={loc}
                className="flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <span className="text-base" style={{ color: "#a28c75" }}>·</span>
                <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{loc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Never incentivize */}
        <div>
          <SectionHeader number="6" title="Never Incentivize Before the Review" />
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
            Google may ask reviewers whether they were offered something in exchange for their review.
            Offering incentives before a review is posted violates Google&apos;s policies and can put your
            listing at risk. Never offer discounts, free products, service credits, gift cards, or giveaway
            entries in exchange for reviews. Reviews must always be voluntary and authentic.
          </p>

          <div
            className="rounded-xl p-6"
            style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.15)" }}
          >
            <p className="text-sm font-medium mb-3" style={{ color: "#fffdf6" }}>
              Reward them <em>after</em> — not before
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.55)" }}>
              If someone takes the time to leave a thoughtful review, it&apos;s perfectly appropriate to thank
              them afterward. These gestures should always happen after the review has been submitted.
            </p>
            <ul className="space-y-2 mb-5">
              {["Send a thank-you text", "Give them a skincare sample at their next appointment", "Personally thank them when they return"].map((item) => (
                <li key={item} className="text-sm flex items-center gap-2" style={{ color: "rgba(255,253,246,0.6)" }}>
                  <span style={{ color: "#a28c75" }}>·</span> {item}
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-4 text-sm italic leading-relaxed"
              style={{ background: "rgba(255,253,246,0.03)", border: "1px solid rgba(162,140,117,0.12)", color: "rgba(255,253,246,0.55)" }}
            >
              &ldquo;Thank you so much for taking the time to leave us a Google review! We truly appreciate your kind words.
              Reviews like yours help other patients learn about the experience they can expect with us, and we&apos;re so
              grateful for your support. We can&apos;t wait to see you again soon!&rdquo;
            </div>
          </div>
        </div>

        {/* Incentivize your team */}
        <div>
          <SectionHeader number="7" title="Incentivize Your Team — Not Your Patients" />
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
            One of the best ways to consistently increase Google reviews is to motivate your staff.
            The habit of asking should become part of every checkout — and the team should feel celebrated
            for making it happen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {teamIncentives.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <Star size={11} style={{ color: "#a28c75", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Automate */}
        <div>
          <SectionHeader number="8" title="Automate the Process" />
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
            A review request shouldn&apos;t rely solely on your staff remembering to ask. Use automation
            whenever possible — an automated text sent shortly after the appointment is one of the most
            effective tools in your review strategy.
          </p>
          <div
            className="rounded-xl p-6"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
              border: "1px solid rgba(162,140,117,0.18)",
            }}
          >
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
              Automated text flow
            </p>
            <div className="space-y-4">
              <div
                className="rounded-lg p-4"
                style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <p className="text-sm mb-2" style={{ color: "rgba(255,253,246,0.7)" }}>
                  Post-appointment text asks about their experience:
                </p>
                <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>
                  👍 Great Experience &nbsp;·&nbsp; 👎 Needs Improvement
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className="rounded-lg p-4"
                  style={{ background: "rgba(100,200,120,0.06)", border: "1px solid rgba(100,200,120,0.15)" }}
                >
                  <p className="text-xs font-medium mb-2" style={{ color: "rgba(100,200,120,0.8)" }}>
                    Positive response →
                  </p>
                  <p className="text-sm" style={{ color: "rgba(255,253,246,0.6)" }}>
                    Direct patient to your Google Review page to share publicly.
                  </p>
                </div>
                <div
                  className="rounded-lg p-4"
                  style={{ background: "rgba(200,100,100,0.06)", border: "1px solid rgba(200,100,100,0.15)" }}
                >
                  <p className="text-xs font-medium mb-2" style={{ color: "rgba(200,100,100,0.7)" }}>
                    Negative response →
                  </p>
                  <p className="text-sm" style={{ color: "rgba(255,253,246,0.6)" }}>
                    Send to an internal feedback form so your team can resolve the issue privately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Showcase reviews */}
        <div>
          <SectionHeader number="9" title="Showcase Your Reviews" />
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
            Your reviews shouldn&apos;t just live on Google. Repurpose them everywhere. Showing real patient
            experiences builds credibility and reminds others to leave reviews too.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {repurposeChannels.map((channel) => (
              <div
                key={channel}
                className="flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <span style={{ color: "#a28c75" }}>·</span>
                <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{channel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Culture */}
        <div>
          <SectionHeader number="10" title="Create a Culture Around Reviews" />
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
            Google reviews should become part of your practice culture, not just something your front
            desk does occasionally. Talk about them in every team meeting and keep the whole team aware
            of where you stand.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trackingMetrics.map((metric) => (
              <div
                key={metric}
                className="flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <Star size={11} style={{ color: "#a28c75", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{metric}</span>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed mt-5" style={{ color: "rgba(255,253,246,0.45)" }}>
            When everyone understands the importance of reviews, asking becomes a natural part of every patient interaction.
          </p>
        </div>

        {/* Checklist */}
        <div
          className="rounded-xl p-7"
          style={{
            background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
            border: "1px solid rgba(162,140,117,0.25)",
          }}
        >
          <h2 className="font-display text-xl font-light mb-2" style={{ color: "#fffdf6" }}>
            Google Review Success Checklist
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,253,246,0.45)" }}>
            Run through this checklist to make sure your review system is fully in place.
          </p>
          <div className="space-y-3">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    border: "1px solid rgba(162,140,117,0.35)",
                    background: "rgba(162,140,117,0.08)",
                  }}
                >
                  <span className="text-xs" style={{ color: "#a28c75" }}>✓</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.7)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final thought */}
        <div
          className="rounded-xl p-7"
          style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.15)" }}
        >
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
            Remember
          </p>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,253,246,0.7)" }}>
            The most successful practices don&apos;t have dramatically happier patients — they simply have a
            better system for asking. Every positive patient experience is an opportunity to build your
            online reputation. Make asking for a Google review a consistent part of your checkout process,
            and over time you&apos;ll create one of the strongest marketing assets your practice can have.
          </p>
        </div>

      </div>
    </div>
  );
}
