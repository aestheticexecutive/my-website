import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Headphones,
  Heart,
  MessageSquare,
  Zap,
  TrendingUp,
  CheckCircle,
  FileText,
  AlertCircle,
  ClipboardCheck,
  Shield,
  ChevronRight,
  UserCheck,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handling Escalated Clients | Aesthetic Executive",
};

// ── LEAP FWD steps ─────────────────────────────────────────────────────────────

const leapSteps = [
  {
    number: "01",
    letter: "L",
    label: "Listen",
    tagline: "Hear and understand what the customer is saying.",
    icon: Headphones,
    color: "rgba(162,140,117,0.9)",
    bg: "rgba(162,140,117,0.08)",
    border: "rgba(162,140,117,0.2)",
    body: "Before addressing the customer, take a moment to compose yourself. Stay calm and collected — escalating the situation or matching their energy won't help resolve the issue. Allow them to express their concerns without interruption. Frame your responses positively. Avoid defensive language and focus on finding solutions.",
    tip: "Treat them like a friend.",
    script: "\"I appreciate you bringing this to our attention. Let's work together to find a solution.\"",
  },
  {
    number: "02",
    letter: "E",
    label: "Empathize",
    tagline: "Express how you feel for them in their circumstance.",
    icon: Heart,
    color: "rgba(200,179,163,0.9)",
    bg: "rgba(200,179,163,0.07)",
    border: "rgba(200,179,163,0.18)",
    body: "Acknowledge the customer's feelings and let them know you understand their frustration. Seek to understand the full picture by asking open-ended questions. This not only shows that you care, but also helps gather the information needed to address the issue effectively.",
    tip: null,
    script: "\"I can understand why you feel that way.\" / \"I'm sorry to hear that you're upset.\"",
  },
  {
    number: "03",
    letter: "A",
    label: "Apologize",
    tagline: "Even if it's not your fault.",
    icon: MessageSquare,
    color: "rgba(212,197,184,0.9)",
    bg: "rgba(212,197,184,0.07)",
    border: "rgba(212,197,184,0.18)",
    body: "Offer a sincere apology for any inconvenience, even if the issue isn't directly your fault. A genuine apology can go a long way in diffusing tension. If there was a mistake, take responsibility for it — customers appreciate honesty. Share how the process was supposed to work, which reassures them this isn't something that happens regularly.",
    tip: "Admitting fault when warranted actually rebuilds trust faster than defending the practice.",
    script: "\"I want to sincerely apologize for the inconvenience this has caused you.\"",
  },
  {
    number: "04",
    letter: "P",
    label: "Propose Solution",
    tagline: "Find a creative solution to make it right.",
    icon: Zap,
    color: "rgba(184,158,138,0.9)",
    bg: "rgba(184,158,138,0.07)",
    border: "rgba(184,158,138,0.18)",
    body: "Offer practical and reasonable solutions. Discuss potential options and ask for their input — collaboratively finding a resolution often leads to a more satisfactory outcome for both parties. Once a solution is agreed upon, ensure you follow through. Communicate timelines and keep the patient informed of next steps.",
    tip: null,
    script: "\"Here's what I can do for you: [solution]. Would that work for you?\"",
  },
  {
    number: "05",
    letter: "F",
    label: "Feedback",
    tagline: "This is how we learn and do better.",
    icon: TrendingUp,
    color: "rgba(162,140,117,0.9)",
    bg: "rgba(162,140,117,0.08)",
    border: "rgba(162,140,117,0.2)",
    body: "When patients bring concerns to your attention, it helps the practice improve. Thank them genuinely for helping identify where processes can be strengthened. Ask for any additional feedback beyond what was discussed.",
    tip: null,
    script: "\"Thank you for being so patient through this — your honesty is what helps us recognize where we can improve.\"",
  },
  {
    number: "06",
    letter: "W",
    label: "Wrap Up",
    tagline: "Ensure the solution is followed through.",
    icon: CheckCircle,
    color: "rgba(200,179,163,0.9)",
    bg: "rgba(200,179,163,0.07)",
    border: "rgba(200,179,163,0.18)",
    body: "Clearly confirm the next steps, ensure the proposed solution is followed through, express appreciation, and end the interaction on a positive, professional note. This reassures the patient that their concern is truly resolved — not just acknowledged.",
    tip: null,
    script: "\"I've got you booked for [date/time], and [credit/solution] has been applied. You'll receive a confirmation shortly.\"",
  },
  {
    number: "07",
    letter: "D",
    label: "Document",
    tagline: "Leave detailed notes on the interaction and solution.",
    icon: FileText,
    color: "rgba(212,197,184,0.9)",
    bg: "rgba(212,197,184,0.07)",
    border: "rgba(212,197,184,0.18)",
    body: "Make a note of the patient's concerns, the steps taken to resolve the issue, and any agreements made. This documentation is essential for future reference and ensures transparency around the resolution.",
    tip: "Document before you close the interaction — details fade quickly.",
    script: "\"Patient concern: [issue]. Resolution offered: [solution]. Patient accepted. Follow-up scheduled: [if applicable].\"",
  },
];

// ── Concern types ──────────────────────────────────────────────────────────────

const concernTypes = [
  {
    label: "General",
    color: "rgba(162,140,117,0.9)",
    bg: "rgba(162,140,117,0.08)",
    border: "rgba(162,140,117,0.2)",
    items: [
      "Scheduling — specific day/time, cancellations",
      "Provider issues — unavailable, quit, patient aversion",
      "Payment issues",
      "Staff professionalism",
      "Facility concerns — cleanliness, distrust",
    ],
  },
  {
    label: "Treatment",
    color: "rgba(200,179,163,0.9)",
    bg: "rgba(200,179,163,0.07)",
    border: "rgba(200,179,163,0.18)",
    items: [
      "Unhappy with results — overpromised, under delivered",
      "Adverse reactions — burns, allergic reaction",
      "Excessive redness or swelling",
      "Bruising or scarring",
      "Changed mind due to discomfort",
      "Health and safety concerns",
    ],
  },
  {
    label: "Outside Factors",
    color: "rgba(184,158,138,0.9)",
    bg: "rgba(184,158,138,0.07)",
    border: "rgba(184,158,138,0.18)",
    items: [
      "Relocation (moving away)",
      "Job loss or unexpected expenses",
      "Spousal or parental disapproval",
      "Family emergency or medical expenses",
      "Divorce",
      "Online \"research\" changing their mind",
    ],
  },
];

// ── Solution tiers ────────────────────────────────────────────────────────────

const solutionTiers = [
  {
    label: "Small Error",
    examples: "Appointment ran behind, scheduling error, appointment canceled by practice",
    offer: "Offer a low-cost complimentary service (e.g. Red Light Therapy, HydraFacial) or a discount ($ or % off). Ask manager for approval before offering.",
    approval: false,
  },
  {
    label: "Unapproved Refund Request",
    examples: "Patient wants a refund for a non-qualifying reason",
    offer: "Offer a credit for the remaining value (minus consumed treatments/products). Credit can be used on any products or services, or transferred to a friend or family member.",
    approval: false,
  },
  {
    label: "Larger Error",
    examples: "Overcharge, sold an incorrect service, sold something patient isn't a candidate for, unrealistic expectations were set",
    offer: "Partner with your manager to determine the appropriate resolution. Do not promise a specific outcome until manager approval is given.",
    approval: true,
  },
];

// ── Ask questions phrases ─────────────────────────────────────────────────────

const askPhrases = [
  "\"I'd love to help — may I ask what this pertains to?\"",
  "\"I may be able to assist… can you elaborate a bit for me?\"",
  "\"I want to make sure your concerns are forwarded to the correct person — can you give me more details about your circumstance?\"",
  "\"Have you brought this up with your treatment provider yet?\"",
];

// ── Avoid phrases ─────────────────────────────────────────────────────────────

const avoidPhrases = [
  "\"Oh no, that sounds awful!\"",
  "\"That's DEFINITELY not supposed to happen!\"",
  "\"Hmm… that doesn't sound normal.\"",
];

export default function EscalatedCustomerServicePage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(162,140,117,0.12)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.8) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link
            href="/members/resources/staff"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Staff Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Users size={18} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex items-center gap-3">
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
                Staff Training
              </p>
              <span
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(162,140,117,0.1)",
                  border: "1px solid rgba(162,140,117,0.22)",
                  color: "rgba(162,140,117,0.8)",
                }}
              >
                Front of House
              </span>
            </div>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Handling Escalated Clients
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            In-person and phone training for front-of-house staff — how to de-escalate concerns,
            navigate refund requests, follow the chain of command, and resolve issues using the
            7-step LEAP FWD framework.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-18">

        {/* ── Why This Matters ── */}
        <section>
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <p className="font-display text-2xl font-light mb-3" style={{ color: "#fffdf6" }}>
              Every escalated client is an opportunity — if you handle it correctly.
            </p>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
              When a patient raises a concern, how your team responds will determine whether
              that patient becomes a loyal advocate or a negative review. This training gives
              you the language, framework, and judgment to turn difficult moments into trust-building ones.
            </p>
          </div>
        </section>

        {/* ── Types of Concerns ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Know Your Concerns
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>
            Three Types of Client Concerns
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            Almost every concern you encounter will fall into one of these categories.
            Identifying which type you&apos;re dealing with helps you route it correctly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {concernTypes.map((type) => (
              <div
                key={type.label}
                className="rounded-xl border overflow-hidden"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: type.border }}
              >
                <div
                  className="px-5 py-3.5 border-b"
                  style={{ background: type.bg, borderColor: type.border }}
                >
                  <p className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                    {type.label}
                  </p>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {type.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-1" style={{ color: type.color }}>·</span>
                        <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.5)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Common escalation triggers */}
          <div
            className="rounded-xl border p-5 flex items-start gap-4"
            style={{
              background: "rgba(162,140,117,0.05)",
              borderColor: "rgba(162,140,117,0.15)",
              borderLeft: "3px solid rgba(162,140,117,0.4)",
            }}
          >
            <AlertCircle size={16} style={{ color: "rgba(162,140,117,0.7)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <p className="text-sm font-medium mb-1" style={{ color: "rgba(255,253,246,0.75)" }}>
                Most escalations end with two demands:
              </p>
              <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>
                <span style={{ color: "#fffdf6" }}>&ldquo;I want to talk to a manager.&rdquo;</span>
                {" "}and{" "}
                <span style={{ color: "#fffdf6" }}>&ldquo;I want a refund.&rdquo;</span>
                {" "}Before reaching that point, ask questions first. Most concerns can be resolved before they escalate that far.
              </p>
            </div>
          </div>
        </section>

        {/* ── Ask Questions First ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              First Response
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>
            Ask Questions Before You Escalate
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            When a patient says &ldquo;I want to talk to a manager&rdquo; or &ldquo;I want a refund&rdquo; —
            don&apos;t immediately transfer. Gather context first. You may be able to resolve it yourself,
            or route it to the right person more effectively.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {askPhrases.map((phrase) => (
              <div
                key={phrase}
                className="rounded-xl border px-5 py-4 flex items-start gap-3"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.13)",
                }}
              >
                <Phone size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0, marginTop: 3 }} />
                <p className="text-sm leading-relaxed italic" style={{ color: "rgba(255,253,246,0.65)" }}>
                  {phrase}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Refund Policy & Exceptions ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Refund Policy
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>
            Understanding Refunds &amp; Exceptions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Prevention */}
            <div
              className="rounded-xl border p-6"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.13)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Shield size={14} style={{ color: "#a28c75" }} />
                </div>
                <p className="font-display text-base font-light" style={{ color: "#fffdf6" }}>How to Prevent Refund Requests</p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Photo ID on file (including ID of any financier — spouse, parent, etc.)",
                  "Signed Service Agreement on file for every patient",
                  "Signed Membership Agreement for all members",
                  "Signed CareCredit receipt when applicable",
                  "First treatment completed same day as purchase, or ASAP",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={13} style={{ color: "rgba(162,140,117,0.6)", flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.5)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exceptions + warning */}
            <div className="flex flex-col gap-4">
              <div
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.13)",
                }}
              >
                <p className="font-display text-base font-light mb-3" style={{ color: "#fffdf6" }}>
                  Approved Refund Exception
                </p>
                <div
                  className="rounded-lg p-4"
                  style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.12)" }}
                >
                  <p className="text-sm font-medium mb-1" style={{ color: "#a28c75" }}>Medical Contraindications Only</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                    Must be accompanied by medical documentation from a physician for verification.
                    If the practice is unable to provide the service for medical reasons, a refund may be considered.
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-xs tracking-[0.1em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                    How to Respond to Denied Requests
                  </p>
                  <div
                    className="rounded-lg px-4 py-3 italic"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)", color: "rgba(255,253,246,0.55)", fontSize: 13 }}
                  >
                    &ldquo;Sorry, the only refunds we can approve are medical contraindications.&rdquo;
                  </div>
                </div>
              </div>

              {/* Critical warning */}
              <div
                className="rounded-xl border p-4 flex items-start gap-3"
                style={{
                  background: "rgba(239,68,68,0.06)",
                  borderColor: "rgba(239,68,68,0.2)",
                  borderLeft: "3px solid rgba(239,68,68,0.5)",
                }}
              >
                <AlertCircle size={15} style={{ color: "rgba(239,68,68,0.7)", flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "rgba(239,68,68,0.85)" }}>
                    Never tell a patient what our exceptions are.
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                    Do not proactively share refund exception criteria with patients. Some people will attempt to fabricate or exaggerate circumstances to qualify. Always gather information before disclosing policy details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Chain of Command ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Routing Concerns
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>
            Chain of Command
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* General/Outside Factors chain */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "rgba(162,140,117,0.14)" }}
            >
              <div
                className="px-5 py-4 border-b"
                style={{
                  background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
                  borderColor: "rgba(162,140,117,0.14)",
                }}
              >
                <p className="font-display text-base font-light" style={{ color: "#fffdf6" }}>General &amp; Outside Factors</p>
              </div>
              <div className="p-5" style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}>
                <div className="space-y-3">
                  {[
                    { label: "You (FOH Staff)", desc: "Gather details, attempt to resolve" },
                    { label: "FOH Lead / Manager", desc: "Escalate if unresolved" },
                    { label: "Practice Owner / Executive", desc: "Final authority" },
                  ].map((step, i) => (
                    <div key={step.label} className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                          style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
                        >
                          {i + 1}
                        </div>
                        {i < 2 && <div className="w-px h-5 mt-1" style={{ background: "rgba(162,140,117,0.2)" }} />}
                      </div>
                      <div className="pb-1">
                        <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{step.label}</p>
                        <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Treatment chain */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "rgba(162,140,117,0.14)" }}
            >
              <div
                className="px-5 py-4 border-b"
                style={{
                  background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
                  borderColor: "rgba(162,140,117,0.14)",
                }}
              >
                <p className="font-display text-base font-light" style={{ color: "#fffdf6" }}>Treatment Concerns</p>
              </div>
              <div className="p-5" style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}>
                <div className="space-y-3">
                  {[
                    { label: "Provider Who Completed the Service", desc: "First point of contact for clinical concerns" },
                    { label: "Medical Director", desc: "For serious adverse reactions or clinical review" },
                  ].map((step, i) => (
                    <div key={step.label} className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                          style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
                        >
                          {i + 1}
                        </div>
                        {i < 1 && <div className="w-px h-5 mt-1" style={{ background: "rgba(162,140,117,0.2)" }} />}
                      </div>
                      <div className="pb-1">
                        <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{step.label}</p>
                        <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Neutral warning */}
                <div
                  className="mt-4 rounded-lg border p-3"
                  style={{
                    background: "rgba(239,68,68,0.05)",
                    borderColor: "rgba(239,68,68,0.18)",
                    borderLeft: "3px solid rgba(239,68,68,0.4)",
                  }}
                >
                  <p className="text-xs font-medium mb-1" style={{ color: "rgba(239,68,68,0.8)" }}>
                    Stay completely neutral on treatment concerns.
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                    Do NOT confirm, reassure, or react emotionally to treatment-related issues if you are not a licensed medical provider. Saying &ldquo;that&apos;s not supposed to happen&rdquo; can induce panic, make the provider&apos;s job harder, and create liability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment routing script */}
          <div
            className="rounded-xl border px-5 py-4 flex items-start gap-3"
            style={{
              background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.13)",
            }}
          >
            <Phone size={13} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0, marginTop: 3 }} />
            <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
              &ldquo;No problem — I&apos;m not qualified to answer these questions, but I&apos;d love to have your provider review these concerns. Would you like an in-person visit or a phone call?&rdquo;
            </p>
          </div>

          {/* Avoid phrases */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(239,68,68,0.6)" }}>
              Never say these about treatment concerns
            </p>
            <div className="flex flex-wrap gap-3">
              {avoidPhrases.map((phrase) => (
                <div
                  key={phrase}
                  className="rounded-lg px-4 py-2.5 flex items-center gap-2"
                  style={{
                    background: "rgba(239,68,68,0.06)",
                    border: "1px solid rgba(239,68,68,0.15)",
                  }}
                >
                  <span style={{ color: "rgba(239,68,68,0.6)", fontSize: 14 }}>✕</span>
                  <span className="text-sm italic" style={{ color: "rgba(255,253,246,0.5)" }}>{phrase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEAP FWD Framework ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              The Framework
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>
            The 7-Step LEAP FWD Method
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            Use this framework on every escalated interaction — in person or on the phone.
            Work through each step in order.
          </p>

          {/* Step letters visual */}
          <div className="flex flex-wrap gap-2 mb-2">
            {leapSteps.map((step) => (
              <div
                key={step.letter}
                className="w-10 h-10 rounded-xl flex items-center justify-center font-display text-xl font-light"
                style={{ background: step.bg, border: `1px solid ${step.border}`, color: step.color }}
              >
                {step.letter}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {leapSteps.map((step) => (
              <div
                key={step.label}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(162,140,117,0.13)" }}
              >
                <div
                  className="flex items-center gap-4 px-6 py-4 border-b"
                  style={{
                    background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                    borderColor: "rgba(162,140,117,0.13)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-display text-lg font-light"
                    style={{ background: step.bg, border: `1px solid ${step.border}`, color: step.color }}
                  >
                    {step.letter}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs tracking-[0.2em]" style={{ color: "rgba(162,140,117,0.45)" }}>
                      Step {step.number}
                    </span>
                    <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>
                      {step.label}
                    </h3>
                    <span className="text-sm hidden md:block" style={{ color: "rgba(255,253,246,0.35)" }}>
                      — {step.tagline}
                    </span>
                  </div>
                </div>
                <div
                  className="px-6 py-5"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
                >
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.55)" }}>
                    {step.body}
                  </p>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div
                      className="flex-1 rounded-lg px-4 py-3 flex items-start gap-2.5"
                      style={{
                        background: "rgba(162,140,117,0.05)",
                        border: "1px solid rgba(162,140,117,0.1)",
                        borderLeft: "3px solid rgba(162,140,117,0.3)",
                      }}
                    >
                      <Phone size={12} style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0, marginTop: 3 }} />
                      <p className="text-xs italic leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                        {step.script}
                      </p>
                    </div>
                    {step.tip && (
                      <div
                        className="rounded-lg px-4 py-3 flex items-start gap-2"
                        style={{
                          background: "rgba(162,140,117,0.06)",
                          border: "1px solid rgba(162,140,117,0.12)",
                          minWidth: 0,
                          flexShrink: 0,
                          maxWidth: "240px",
                        }}
                      >
                        <span style={{ color: "#a28c75", flexShrink: 0, fontSize: 12, marginTop: 2 }}>✦</span>
                        <p className="text-xs leading-relaxed" style={{ color: "rgba(162,140,117,0.8)" }}>
                          {step.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── What Can I Offer ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Solutions
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>
            What Can You Offer?
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            The resolution depends on the type and severity of the issue. Use this as your guide.
            When in doubt, partner with your manager before making any commitments.
          </p>

          <div className="space-y-4">
            {solutionTiers.map((tier, idx) => (
              <div
                key={tier.label}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(162,140,117,0.13)" }}
              >
                <div
                  className="flex items-center justify-between gap-4 px-5 py-4 border-b"
                  style={{
                    background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
                    borderColor: "rgba(162,140,117,0.13)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs tracking-[0.2em]" style={{ color: "rgba(162,140,117,0.45)" }}>
                      Tier {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                      {tier.label}
                    </h3>
                  </div>
                  {tier.approval && (
                    <span
                      className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: "rgba(234,179,8,0.1)",
                        border: "1px solid rgba(234,179,8,0.25)",
                        color: "rgba(234,179,8,0.85)",
                      }}
                    >
                      Manager Approval Required
                    </span>
                  )}
                </div>
                <div
                  className="px-5 py-5 grid grid-cols-1 md:grid-cols-2 gap-4"
                  style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
                >
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                      Examples
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                      {tier.examples}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                      What to Offer
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                      {tier.offer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Full Example ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Real Example
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <h2 className="font-display text-3xl font-light" style={{ color: "#fffdf6" }}>
            LEAP FWD in Action
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.45)" }}>
            Scenario: A patient calls upset because their appointment was canceled last-minute. They took time off work to come in.
          </p>

          {/* Patient complaint */}
          <div
            className="rounded-xl border p-5 flex items-start gap-4"
            style={{
              background: "rgba(239,68,68,0.05)",
              borderColor: "rgba(239,68,68,0.15)",
            }}
          >
            <UserCheck size={16} style={{ color: "rgba(239,68,68,0.6)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-1.5" style={{ color: "rgba(239,68,68,0.55)" }}>
                Patient Says
              </p>
              <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                &ldquo;I&apos;m really frustrated. I took time off work for this appointment, only to be told it was canceled. I have a very busy schedule and it&apos;s hard for me to get in.&rdquo;
              </p>
            </div>
          </div>

          {/* Response */}
          <div
            className="rounded-xl border p-6"
            style={{
              background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.14)",
            }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
              Staff Response (LEAP FWD)
            </p>
            <div className="space-y-4">
              {[
                { step: "L — Listen + E — Empathize", text: "I completely understand why you're upset, and I would feel the same way in your shoes. Your time is valuable, and it's extremely frustrating to be canceled on like that." },
                { step: "A — Apologize", text: "I want to sincerely apologize for the inconvenience this has caused you. We really wish we didn't have to cancel your appointment, and we are so sorry you took time off of work for this." },
                { step: "P — Propose Solution", text: "Here's what I can do for you: I have an opening tomorrow at 10 a.m. with the same provider, and I'll also apply a $50 credit to your account along with a complimentary facial for the trouble. Would that work for you?" },
                { step: "F — Feedback + W — Wrap Up", text: "Thank you for being so patient through this — it really means a lot. Your honesty is what helps us recognize where we can improve our processes so we can continue to grow. I've got you booked for 10 a.m. tomorrow, and the $50 credit has been applied. You'll get a confirmation email shortly. If anything else comes up, please reach out — we're here to help!" },
              ].map((item) => (
                <div key={item.step}>
                  <p className="text-xs font-medium mb-1.5" style={{ color: "#a28c75" }}>{item.step}</p>
                  <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation note */}
          <div
            className="rounded-xl border p-4 flex items-start gap-3"
            style={{
              background: "rgba(162,140,117,0.05)",
              borderColor: "rgba(162,140,117,0.13)",
              borderLeft: "3px solid rgba(162,140,117,0.35)",
            }}
          >
            <FileText size={14} style={{ color: "rgba(162,140,117,0.6)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>
                D — Document (System Note)
              </p>
              <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                &ldquo;Patient appointment canceled due to provider illness. Patient offered next-day appointment + $50 credit and complimentary facial for the issues. Patient accepted resolution.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ── Quick Reference Card ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Quick Reference
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div
              className="flex items-center gap-3 px-6 py-4 border-b"
              style={{
                background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
                borderColor: "rgba(162,140,117,0.14)",
              }}
            >
              <ClipboardCheck size={16} style={{ color: "#a28c75" }} />
              <h3 className="font-display text-base font-light" style={{ color: "#fffdf6" }}>
                LEAP FWD at a Glance
              </h3>
            </div>
            <div
              style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
            >
              {leapSteps.map((step, i) => (
                <div
                  key={step.label}
                  className="flex items-center gap-5 px-6 py-3.5"
                  style={{
                    borderBottom: i < leapSteps.length - 1 ? "1px solid rgba(162,140,117,0.07)" : undefined,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-display text-base font-light"
                    style={{ background: step.bg, border: `1px solid ${step.border}`, color: step.color }}
                  >
                    {step.letter}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium" style={{ color: "rgba(255,253,246,0.75)" }}>
                      {step.label}
                    </span>
                    <span className="text-sm ml-2" style={{ color: "rgba(255,253,246,0.35)" }}>
                      — {step.tagline}
                    </span>
                  </div>
                  <ChevronRight size={13} style={{ color: "rgba(162,140,117,0.35)", flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Practice Challenge ── */}
        <section>
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
              >
                <Zap size={18} style={{ color: "#a28c75" }} />
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>
                  Practice Challenge
                </p>
                <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                  Role-Play Exercise
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.5)" }}>
              Think of a client concern from one of the three categories — or use a real situation
              you&apos;ve encountered recently. Write out or practice out loud how you would handle it
              using the LEAP FWD framework.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Pick a Scenario", detail: "Choose from the three concern types — General, Treatment, or Outside Factors." },
                { label: "Walk Through LEAP FWD", detail: "Work through each of the 7 steps. Write out your response for each step." },
                { label: "Share It", detail: "At your next team meeting, share your scenario and how you would handle it." },
              ].map((step, i) => (
                <div
                  key={step.label}
                  className="rounded-xl border p-4"
                  style={{
                    background: "rgba(162,140,117,0.05)",
                    borderColor: "rgba(162,140,117,0.12)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-light" style={{ color: "rgba(162,140,117,0.5)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium" style={{ color: "rgba(255,253,246,0.75)" }}>{step.label}</p>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>{step.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-sm italic" style={{ color: "rgba(162,140,117,0.65)" }}>
              The more you practice before a real situation, the more natural and effective your response will be when it matters.
            </p>
          </div>
        </section>

        {/* ── Back nav ── */}
        <div className="pt-4">
          <Link
            href="/members/resources/staff"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            <ArrowLeft size={12} />
            Back to Staff Resources
          </Link>
        </div>

      </div>
    </div>
  );
}
