import Link from "next/link";
import { ArrowLeft, DollarSign } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presenting Patient Financing | Aesthetic Executive",
  description:
    "Staff training guide for presenting patient financing options — talk track, objection responses, FAQs, and a customizable partner comparison.",
};

const steps = [
  {
    num: "01",
    title: "Introduce the conversation positively",
    summary: "Lead with excitement, not a pitch.",
    scripts: [
      "\"I'm so excited for you to start your treatment plan!\"",
      "\"Let's go over some flexible financing options that many of our patients use to break their total into smaller payments.\"",
    ],
    tip: "Your tone sets the entire frame. If you sound apologetic or hesitant, the patient will mirror that energy. Lead with genuine enthusiasm.",
  },
  {
    num: "02",
    title: "Position financing as common and helpful",
    summary: "Normalize it — this is how many patients pay.",
    scripts: [
      "\"We partner with financing companies that specialize in med spa and wellness procedures.\"",
      "\"These options give you the ability to spread out payments over time rather than paying everything upfront — while still being able to get all of your treatments done immediately.\"",
    ],
    tip: "Avoid language like \"if you can't afford it\" — that's stigmatizing. Frame it as a smart, popular way to do more, sooner.",
  },
  {
    num: "03",
    title: "Briefly outline your financing partners",
    summary: "Give a quick, confident overview — don't overwhelm.",
    scripts: [
      "\"We work with [Partner 1], [Partner 2], and [Partner 3]. They all offer interest-free options and a variety of payment terms depending on the eligibility of the candidate!\"",
      "\"We'll apply for all options to see which one can give you the best offer — and all of the options we'll try are soft checks or have soft pre-approvals!\"",
    ],
    tip: "Name your partners, but don't go deep on the details yet. Save the specifics for after they're approved. Too much information upfront creates confusion.",
    isCustomizable: true,
    customNote: "Replace [Partner 1], [Partner 2], [Partner 3] with your practice's actual financing providers.",
  },
  {
    num: "04",
    title: "Set expectations for the application",
    summary: "Make it feel fast, easy, and low-stakes.",
    scripts: [
      "\"The application process is quick — most people get a decision in just a few seconds.\"",
      "\"We'll start with [your preferred partner], as they generally give the best offers. I'll text you the application link and walk you through the application.\"",
    ],
    tip: "Walk them through it in real time when possible. Don't just send the link and wait — stay engaged. It dramatically increases completion rates.",
    isCustomizable: true,
    customNote: "Replace [your preferred partner] with whichever provider you apply to first at your practice.",
  },
  {
    num: "05",
    title: "Respond to approval or denial",
    summary: "Handle every outcome with confidence and momentum.",
    scripts: [
      "Approved: \"Great, so they were able to approve you for $[X] with interest-free options!\" → Explain the available terms and let them choose what works best.",
      "Approved without ideal terms: \"Let's see what our other financing partners can offer, and then you can decide what works best for you!\"",
      "Denied: \"[Partner] wasn't able to give you an offer at this time — let's see what our other financing partners can offer, and then you can decide what works best for you!\"",
    ],
    tip: "Never react emotionally to a denial. Treat it as a standard next step. The patient is watching how you respond — stay calm and keep moving forward.",
  },
  {
    num: "06",
    title: "Guide them on next steps",
    summary: "Close the loop, build confidence, get them scheduled.",
    scripts: [
      "\"Great — you're all set and paid for your package! If you ever have questions about your payment plan, you can reach out directly to [financing partner]. I'd recommend downloading their app or bookmarking their portal to manage payments.\"",
      "\"If you ever forget where to go or who to contact, give us a call and we'll point you in the right direction. Let's get you scheduled for your first treatment!\"",
    ],
    tip: "End on the appointment. The goal of every financing conversation is to get them booked. Don't let the energy drop after payment — redirect it immediately toward the treatment.",
    isCustomizable: true,
    customNote: "Customize with the actual app name and portal URL for your financing partner(s).",
  },
];

const faqs = [
  {
    q: "\"Will this affect my credit?\"",
    a: "\"When you apply, the financing companies will do a soft credit check initially, which doesn't impact your credit score. If you choose to move forward and accept an offer, that's when a hard credit inquiry may occur — just like with any other type of financing or loan.\"",
  },
  {
    q: "\"What if I don't qualify?\"",
    a: "\"If for any reason you're not approved, don't worry — we can look at other financing companies we partner with, or you might consider applying with a co-signer. We'll do our best to help you explore all available options.\"",
  },
  {
    q: "\"What kind of terms can I get?\"",
    a: "\"Each financing company offers different plans, like 0% interest for a set period or low monthly payments over a longer term. Your specific options will depend on the financing company and your credit profile — I can help you walk through the application so you can review them before deciding.\"",
  },
  {
    q: "\"Can I pay it off early without penalties?\"",
    a: "\"Yes! The financing companies we work with do not charge prepayment penalties — so you can pay it off early if you'd like.\"",
  },
  {
    q: "\"How fast will I know if I'm approved?\"",
    a: "\"Most patients get an approval decision within just a few seconds after submitting the application.\"",
  },
  {
    q: "\"Do I have to decide right now?\"",
    a: "\"Not at all! I can send you the links so you can review your options at home. Just let us know when you're ready and we can move forward whenever you are. The applications are soft checks, so there's no risk in just seeing what your options could be.\"",
  },
  {
    q: "\"Is this through your office?\"",
    a: "\"Great question — no, this financing is offered through independent companies that specialize in healthcare financing. We don't provide in-house financing, but we're here to help guide you through the process.\"",
  },
  {
    q: "\"What's the minimum or maximum I can finance?\"",
    a: "\"It depends on the financing company, but typically the minimum is around $200 and the maximum can go up to $30,000 depending on the provider. Once you apply, the financing company will let you know what you qualify for.\"",
  },
  {
    q: "\"Can I use financing for multiple treatments?\"",
    a: "\"Yes — you can usually use financing to cover a package of treatments or multiple services. It's all based on the total amount you're approved for.\"",
  },
];

const comparisonRows = [
  { label: "Inquiry Type", tip: "Soft vs. hard credit check at application" },
  { label: "Max Approval Amount", tip: "The highest approval amount available" },
  { label: "Interest-Free Options", tip: "Promo terms (e.g. 6 or 12 months no interest)" },
  { label: "Minimum for 0% Terms", tip: "Minimum purchase to qualify for interest-free promo" },
  { label: "First Payment Due", tip: "When the first payment is required" },
  { label: "Notes / Caveats", tip: "Anything else staff should know (e.g. subprime options, shared credit lines)" },
];

const principles = [
  { icon: "🎯", title: "Lead with confidence", body: "Your certainty is contagious. If you hesitate or apologize for presenting financing, the patient will sense it. Own the conversation." },
  { icon: "🔄", title: "Never stop at one denial", body: "A denial from one partner is just a redirect. Always move immediately to the next option without making it a big moment." },
  { icon: "💬", title: "Normalize it constantly", body: "Use phrases like \"many of our patients do this\" and \"it's a really common way to do your full plan.\" Financing should feel standard, not last-resort." },
  { icon: "📲", title: "Walk it through together", body: "Don't send a link and disappear. Stay with the patient through the application — your presence keeps momentum and reduces drop-off." },
  { icon: "📅", title: "Always close with the booking", body: "The moment financing is confirmed, pivot immediately to scheduling. \"Let's get your first appointment on the books!\" Don't let energy fade after payment." },
];

export default function PatientFinancingPage() {
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
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.75) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-14">
          <Link
            href="/members/resources/staff"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-opacity hover:opacity-70"
            style={{ color: "rgba(162,140,117,0.65)" }}
          >
            <ArrowLeft size={13} />
            Staff Resources
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <DollarSign size={16} style={{ color: "#a28c75" }} />
            </div>
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(162,140,117,0.65)" }}
            >
              Staff Resources · Training
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Presenting Patient Financing
          </h1>
          <p
            className="text-base leading-relaxed max-w-2xl mb-6"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            A step-by-step training guide for confidently introducing financing options to patients — including a 6-step talk track, word-for-word scripts, FAQ responses, and a customizable partner comparison.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Training", "Front of House", "Sales Support"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                style={{
                  background: "rgba(162,140,117,0.1)",
                  border: "1px solid rgba(162,140,117,0.22)",
                  color: "rgba(162,140,117,0.75)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* Customization notice */}
        <div
          className="rounded-2xl border p-6 md:p-7"
          style={{
            background: "rgba(162,140,117,0.05)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <p
            className="text-xs tracking-[0.22em] uppercase mb-3"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            Before You Share This With Your Team
          </p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.65)" }}>
            This training guide uses placeholder names like <span style={{ color: "#a28c75" }}>[Partner 1]</span> and <span style={{ color: "#a28c75" }}>[your preferred partner]</span> anywhere the specific financing company matters. Before sharing with your staff, replace those with your practice&apos;s actual financing partners and update the comparison table below with your real terms.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
            The talk tracks, FAQ responses, and core principles apply universally — only the partner-specific details need to be tailored.
          </p>
        </div>

        {/* Financing Partner Comparison */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Know Your Options
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>
          <p className="text-sm mb-8" style={{ color: "rgba(255,253,246,0.4)" }}>
            Staff need to know each partner&apos;s key terms cold — not read from a brochure. Build your own version of this table using your practice&apos;s actual financing partners.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "rgba(162,140,117,0.15)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(162,140,117,0.08)", borderBottom: "1px solid rgba(162,140,117,0.15)" }}>
                  <th className="text-left px-5 py-4 text-xs tracking-[0.18em] uppercase font-medium" style={{ color: "rgba(162,140,117,0.7)", width: "30%" }}>
                    What to Know
                  </th>
                  {["Partner 1", "Partner 2", "Partner 3"].map((p) => (
                    <th
                      key={p}
                      className="text-left px-5 py-4 text-xs tracking-[0.18em] uppercase font-medium"
                      style={{ color: "rgba(162,140,117,0.5)", borderLeft: "1px solid rgba(162,140,117,0.08)" }}
                    >
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    style={{
                      background: i % 2 === 0 ? "rgba(162,140,117,0.02)" : "transparent",
                      borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(162,140,117,0.06)" : "none",
                    }}
                  >
                    <td className="px-5 py-4 align-top">
                      <div className="font-medium text-xs" style={{ color: "rgba(255,253,246,0.75)" }}>
                        {row.label}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.28)" }}>
                        {row.tip}
                      </div>
                    </td>
                    {["Partner 1", "Partner 2", "Partner 3"].map((p) => (
                      <td
                        key={p}
                        className="px-5 py-4 align-top"
                        style={{ borderLeft: "1px solid rgba(162,140,117,0.06)" }}
                      >
                        <span
                          className="inline-block text-xs px-2 py-0.5 rounded italic"
                          style={{
                            color: "rgba(162,140,117,0.45)",
                            background: "rgba(162,140,117,0.05)",
                            border: "1px dashed rgba(162,140,117,0.18)",
                          }}
                        >
                          fill in
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: "rgba(255,253,246,0.25)" }}>
            Print or post this table in a staff-only area once completed — staff should be able to answer basic partner questions without checking their phone.
          </p>
        </div>

        {/* 6-Step Talk Track */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              The 6-Step Talk Track
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>
          <p className="text-sm mb-8" style={{ color: "rgba(255,253,246,0.4)" }}>
            Follow these steps in order. Each one builds on the last. The goal isn&apos;t to read these word-for-word — it&apos;s to internalize the structure so it flows naturally.
          </p>

          <div className="space-y-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.13)",
                }}
              >
                <div className="p-6 md:p-7">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <span
                      className="font-display text-3xl font-light leading-none flex-shrink-0 mt-0.5"
                      style={{ color: "rgba(162,140,117,0.22)" }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3
                        className="font-display text-lg font-light leading-snug"
                        style={{ color: "#fffdf6" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs mt-1" style={{ color: "rgba(162,140,117,0.55)" }}>
                        {step.summary}
                      </p>
                    </div>
                  </div>

                  {/* Scripts */}
                  <div className="space-y-3 mb-5">
                    {step.scripts.map((script, i) => (
                      <div
                        key={i}
                        className="rounded-lg px-4 py-3 border-l-2"
                        style={{
                          background: "rgba(162,140,117,0.04)",
                          borderLeftColor: "rgba(162,140,117,0.3)",
                        }}
                      >
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.7)" }}>
                          {script}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Customizable note */}
                  {step.isCustomizable && (
                    <div
                      className="rounded-lg px-4 py-2.5 mb-4 flex items-start gap-2"
                      style={{
                        background: "rgba(162,140,117,0.07)",
                        border: "1px dashed rgba(162,140,117,0.25)",
                      }}
                    >
                      <span style={{ color: "#a28c75", fontSize: "11px", flexShrink: 0, marginTop: "1px" }}>✏️</span>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(162,140,117,0.7)" }}>
                        <span className="font-medium">Customize:</span> {step.customNote}
                      </p>
                    </div>
                  )}

                  {/* Coaching tip */}
                  <div
                    className="rounded-lg px-4 py-3 flex items-start gap-2.5"
                    style={{
                      background: "rgba(255,253,246,0.02)",
                      border: "1px solid rgba(162,140,117,0.08)",
                    }}
                  >
                    <span className="text-xs flex-shrink-0" style={{ color: "#a28c75", marginTop: "1px" }}>→</span>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                      {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Common Questions &amp; Responses
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>
          <p className="text-sm mb-8" style={{ color: "rgba(255,253,246,0.4)" }}>
            These are the questions patients ask most. Know these responses well enough to say them without reading.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden"
                style={{
                  background: "rgba(162,140,117,0.03)",
                  borderColor: "rgba(162,140,117,0.1)",
                }}
              >
                {/* Question */}
                <div
                  className="px-6 py-4 border-b"
                  style={{ borderColor: "rgba(162,140,117,0.08)" }}
                >
                  <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>
                    {faq.q}
                  </p>
                </div>
                {/* Answer */}
                <div className="px-6 py-4">
                  <div className="flex items-start gap-3">
                    <span
                      className="text-xs flex-shrink-0 mt-0.5 font-medium tracking-wide"
                      style={{ color: "rgba(162,140,117,0.6)" }}
                    >
                      You:
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Principles */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Key Principles
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border p-5"
                style={{
                  background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
                  borderColor: "rgba(162,140,117,0.15)",
                }}
              >
                <div className="text-xl mb-3">{p.icon}</div>
                <h4
                  className="font-display text-sm font-light mb-2"
                  style={{ color: "#fffdf6" }}
                >
                  {p.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
