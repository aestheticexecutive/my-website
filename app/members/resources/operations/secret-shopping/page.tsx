import Link from "next/link";
import { ArrowLeft, Search, Eye, TrendingUp, Repeat, Users, CheckCircle, AlertTriangle, ExternalLink, Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secret Shopping Guide | Aesthetic Executive",
};

const whySelf = [
  {
    title: "Your team performs differently when you're not watching",
    body: "Every practice owner has experienced it — the phone is answered perfectly when they're present and slips when they're not. The only way to know what actually happens is to experience it as a patient.",
  },
  {
    title: "The experience gap is almost always wider than you think",
    body: "What you've designed and what patients actually receive rarely match 1:1. Friction builds invisibly — a clunky booking flow, a rushed consultation, a checkout that doesn't reinforce the relationship.",
  },
  {
    title: "First impressions are made before anyone ever walks through the door",
    body: "Website usability, response time to an inquiry, the phone greeting script — these touch points set the tone. Most practices are losing patients before a single handshake.",
  },
  {
    title: "It reveals exactly where to invest next",
    body: "Instead of guessing what to fix, secret shopping gives you a scored audit across every stage of the journey. The gaps tell you precisely where training, scripting, or process work will have the highest ROI.",
  },
];

const whyComp = [
  {
    title: "You can't position against a competitor you've never experienced",
    body: "Most practice owners know their competitors by reputation, not by experience. Secret shopping turns assumptions into facts — and the facts are almost always more nuanced than the rumors.",
  },
  {
    title: "Discover what they do better than you",
    body: "The most valuable thing you'll take from a competitor shop isn't a weakness you can exploit — it's the idea, process, or touch point that genuinely impressed you and that you can adapt for your own practice.",
  },
  {
    title: "Benchmark your pricing and service positioning",
    body: "How does your consultation feel compared to theirs? How do your prices land when you've just experienced theirs? This intelligence sharpens your messaging and helps you articulate your value more clearly.",
  },
  {
    title: "Identify where patients choose them over you",
    body: "When you understand the patient journey they're delivering, you can make confident decisions about where to differentiate — and where to match their standard so you're not losing patients on basics.",
  },
];

const cadence = [
  {
    type: "Your Own Practice",
    freq: "Quarterly",
    detail: "Minimum 4x per year. Increase to monthly when onboarding new staff, launching a new service, or after a period of team turnover.",
    color: "#a28c75",
    bg: "rgba(162,140,117,0.08)",
    border: "rgba(162,140,117,0.18)",
  },
  {
    type: "Key Competitors",
    freq: "2× per year",
    detail: "Your 2–3 closest competitors — same service mix, similar price point, same market. Shop in spring and fall to capture seasonal shifts.",
    color: "#8fc9a8",
    bg: "rgba(143,201,168,0.07)",
    border: "rgba(143,201,168,0.18)",
  },
  {
    type: "New Competitor Opens",
    freq: "Within 60 days",
    detail: "Don't wait six months to learn what the new practice in your market is doing. Know their experience before your patients start comparing you to it.",
    color: "#b8a0e8",
    bg: "rgba(184,160,232,0.07)",
    border: "rgba(184,160,232,0.18)",
  },
];

const debriefSteps = [
  {
    n: "01",
    title: "Score every section",
    body: "Rate each of the 9 areas on the questionnaire honestly. Resist the urge to grade on a curve — a 7 that should be a 5 wastes your improvement effort.",
  },
  {
    n: "02",
    title: "Name your top 3 wins",
    body: "What genuinely worked? What created a moment you want patients to feel? Document it so you can protect and amplify those strengths intentionally.",
  },
  {
    n: "03",
    title: "Name your top 3 gaps",
    body: "Be specific. Not 'phone needs work' but 'caller placed on hold 90 seconds with no acknowledgment and never asked for goals.' Specific gaps get fixed. Vague ones stay on a list.",
  },
  {
    n: "04",
    title: "Assign action items with owners",
    body: "Each gap gets a specific next action, an owner (by role), and a deadline. Present the findings in your next team meeting — without naming the shopper.",
  },
  {
    n: "05",
    title: "Re-shop in 90 days",
    body: "This is the step most practices skip. The re-shop is the accountability loop. It tells you whether the changes you made actually changed the experience.",
  },
];

const sections = [
  { num: "1", title: "Online Experience", desc: "Website discoverability, mobile usability, service/pricing clarity, booking flow, and inquiry response time." },
  { num: "2", title: "Phone Call Experience", desc: "Speed to answer, staff warmth and knowledge, credentialing, script quality, goal-setting questions, and appointment confirmation." },
  { num: "3", title: "Pre-Appointment Communication", desc: "Confirmation sent, paperwork quality, pre-care instructions, reminder timing." },
  { num: "4", title: "Arrival & Front Desk", desc: "Greeting quality, check-in process, wait time, ambient experience, hospitality touches." },
  { num: "5", title: "Facility & Atmosphere", desc: "Cleanliness, modernity, treatment room privacy, ambiance (music, lighting, scent), amenities offered." },
  { num: "6", title: "Consultation Experience", desc: "Staff credentials and introduction, thoroughness of intake, medical history review, education quality, pricing transparency, and sales approach." },
  { num: "7", title: "Checkout & Follow-Up", desc: "Checkout clarity, upsell approach, rebooking conversation, post-visit communication." },
  { num: "8", title: "Overall Scoring", desc: "1–10 ratings across 9 dimensions: Website, Phone, Front Desk, Facility, Consultation, Friendliness, Professionalism, Sales, Overall." },
  { num: "9", title: "Final Thoughts", desc: "Would you return? Would you refer? What's the single biggest improvement you'd recommend?" },
];

export default function SecretShoppingPage() {
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
            href="/members/resources/operations"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Operations
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Search size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Operations · Competitive Intelligence
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Secret Shopping
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            The most honest feedback you will ever get about your practice comes from experiencing
            it the way a first-time patient does — without warning, and without your team knowing
            they&apos;re being watched.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* Why it matters — callout */}
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.22)",
          }}
        >
          <div className="flex items-start gap-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Eye size={20} style={{ color: "#a28c75" }} />
            </div>
            <div>
              <h2
                className="font-display text-2xl font-light mb-3 leading-snug"
                style={{ color: "#fffdf6" }}
              >
                The experience you think you deliver and the one patients actually receive are rarely the same thing.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
                You built your practice with intention. You trained your team. You designed the experience. But
                every great patient journey lives or dies in the execution — and execution drifts the moment
                no one is watching. Secret shopping is the only tool that closes the gap between your vision
                and your reality. Do it before a patient review does it for you.
              </p>
            </div>
          </div>
        </div>

        {/* Why shop yourself */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.22)",
              }}
            >
              <Search size={16} style={{ color: "#a28c75" }} />
            </div>
            <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
              Why Shop Your Own Practice
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whySelf.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-6"
                style={{
                  background: "rgba(162,140,117,0.03)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle size={15} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
                  <h3
                    className="font-display text-base font-light leading-snug"
                    style={{ color: "#fffdf6" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed pl-6" style={{ color: "rgba(255,253,246,0.45)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Who should be the shopper */}
          <div
            className="mt-5 rounded-xl border p-6"
            style={{
              background: "rgba(162,140,117,0.04)",
              borderColor: "rgba(162,140,117,0.13)",
            }}
          >
            <p
              className="text-xs tracking-[0.25em] uppercase mb-3"
              style={{ color: "rgba(162,140,117,0.55)" }}
            >
              Who Should Be Your Shopper
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.5)" }}>
              Choose someone your staff has{" "}
              <span style={{ color: "#fffdf6" }}>never met and doesn&apos;t recognize</span> — a trusted
              friend, a fellow practice owner, a mentor, or a professional mystery shopper service. They
              should be the demographic of your ideal patient. Brief them in advance on what to pay
              attention to, but let the experience happen naturally.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2">
              {["Trusted friend or family member", "Fellow practice owner from another market", "Professional mystery shopper service", "Business mentor or coach"].map((opt) => (
                <span
                  key={opt}
                  className="text-xs flex items-center gap-1.5"
                  style={{ color: "rgba(162,140,117,0.65)" }}
                >
                  <span style={{ color: "#a28c75" }}>·</span> {opt}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Why shop competitors */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.22)",
              }}
            >
              <TrendingUp size={16} style={{ color: "#a28c75" }} />
            </div>
            <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
              Why Shop Your Competition
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyComp.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-6"
                style={{
                  background: "rgba(162,140,117,0.03)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle size={15} style={{ color: "#a28c75", flexShrink: 0, marginTop: "2px" }} />
                  <h3
                    className="font-display text-base font-light leading-snug"
                    style={{ color: "#fffdf6" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed pl-6" style={{ color: "rgba(255,253,246,0.45)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Ethics note */}
          <div
            className="mt-5 rounded-xl border p-6 flex gap-4"
            style={{
              background: "rgba(184,160,232,0.05)",
              borderColor: "rgba(184,160,232,0.18)",
            }}
          >
            <AlertTriangle size={16} style={{ color: "rgba(184,160,232,0.8)", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-1.5 font-medium"
                style={{ color: "rgba(184,160,232,0.7)" }}
              >
                A note on ethics
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                Secret shopping competitors is a standard and accepted business practice. Use a
                neutral identity (a friend, not your name), and do not misrepresent credentials or intent.
                If an in-person visit is appropriate, you are not obligated to disclose your identity
                as a competitor. However, do not book or proceed with any treatment you do not intend to
                receive — a phone inquiry, a consultation, or a website review are the most common and
                appropriate shop formats.
              </p>
            </div>
          </div>
        </div>

        {/* Cadence */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.22)",
              }}
            >
              <Repeat size={16} style={{ color: "#a28c75" }} />
            </div>
            <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
              How Often to Shop
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cadence.map((item) => (
              <div
                key={item.type}
                className="rounded-xl border p-6"
                style={{ background: item.bg, borderColor: item.border }}
              >
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-2"
                  style={{ color: item.color }}
                >
                  {item.type}
                </p>
                <p
                  className="font-display text-2xl font-light mb-3"
                  style={{ color: "#fffdf6" }}
                >
                  {item.freq}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Debrief process */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.22)",
              }}
            >
              <Users size={16} style={{ color: "#a28c75" }} />
            </div>
            <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
              How to Debrief Your Results
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {debriefSteps.map((step) => (
              <div
                key={step.n}
                className="rounded-xl border p-5 flex flex-col gap-3"
                style={{
                  background: "rgba(162,140,117,0.03)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <span
                  className="font-display text-3xl font-light"
                  style={{ color: "rgba(162,140,117,0.28)" }}
                >
                  {step.n}
                </span>
                <h3
                  className="font-display text-sm font-light leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-5 rounded-xl border px-6 py-4"
            style={{
              background: "rgba(162,140,117,0.04)",
              borderColor: "rgba(162,140,117,0.13)",
            }}
          >
            <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>
              <span style={{ color: "#fffdf6" }}>Present findings without blame.</span>{" "}
              Share the results with your team framed as{" "}
              <em style={{ color: "rgba(255,253,246,0.65)" }}>
                &ldquo;here&apos;s what a patient experiences — here&apos;s how we make it better&rdquo;
              </em>{" "}
              rather than as a performance evaluation. The goal is a better practice, not a gotcha moment.
            </p>
          </div>
        </div>

        {/* What the questionnaire covers */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              What the Questionnaire Covers
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sections.map((s) => (
              <div
                key={s.num}
                className="rounded-xl border p-5 flex gap-4"
                style={{
                  background: "rgba(162,140,117,0.03)",
                  borderColor: "rgba(162,140,117,0.1)",
                }}
              >
                <span
                  className="font-display text-2xl font-light flex-shrink-0"
                  style={{ color: "rgba(162,140,117,0.3)" }}
                >
                  {s.num}
                </span>
                <div>
                  <h4
                    className="font-display text-sm font-light mb-1 leading-snug"
                    style={{ color: "#fffdf6" }}
                  >
                    {s.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className="rounded-2xl border overflow-hidden"
          style={{
            borderColor: "rgba(162,140,117,0.2)",
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
          }}
        >
          <div className="p-8 md:p-10">
            <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>
              Ready to start?
            </h2>
            <p className="text-sm mb-8" style={{ color: "rgba(255,253,246,0.45)" }}>
              Print the questionnaire to take with you on a shop, then log your results — including
              photos and notes — in the digital tracker.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/tools/secret-shopper-questionnaire.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm tracking-[0.1em] uppercase transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.15)",
                  border: "1px solid rgba(162,140,117,0.3)",
                  color: "#a28c75",
                }}
              >
                <Download size={14} />
                Print Questionnaire
              </a>

              <a
                href="/tools/secret-shopper-log.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm tracking-[0.1em] uppercase transition-all duration-200"
                style={{
                  background: "rgba(162,140,117,0.12)",
                  border: "1px solid rgba(162,140,117,0.22)",
                  color: "rgba(162,140,117,0.8)",
                }}
              >
                <ExternalLink size={14} />
                Open Shop Log
              </a>
            </div>
          </div>
        </div>

        {/* Legal note */}
        <p
          className="text-xs leading-relaxed pb-4"
          style={{ color: "rgba(255,253,246,0.2)" }}
        >
          The information on this page is provided for educational and strategic planning purposes only
          and does not constitute legal, compliance, or professional services advice. Consult a qualified
          professional for guidance specific to your practice and jurisdiction.
        </p>

      </div>
    </div>
  );
}
