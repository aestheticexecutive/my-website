import Link from "next/link";
import { ArrowLeft, Phone, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Call Mastery | Aesthetic Executive",
  description:
    "A 10-step framework for turning every inbound call into a booked, confident patient — with word-for-word scripts for every moment.",
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

function ScriptBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl px-5 py-4 mt-4" style={{ background: "rgba(162,140,117,0.08)", border: "1px solid rgba(162,140,117,0.22)" }}>
      <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>Say this</p>
      <div className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>{children}</div>
    </div>
  );
}

const steps = [
  {
    num: "01",
    label: "Answer Fast. Track Everything.",
    summary: "Every call is a sale in progress.",
    color: "#a28c75", bg: "rgba(162,140,117,0.08)", border: "rgba(162,140,117,0.22)",
    body: "Set a team standard: answer within three rings whenever humanly possible. Use your phone system report, call log, or CRM to track answered vs. missed calls. Any missed call gets a callback within 15 minutes — same day, no exceptions. Review the numbers weekly: calls in, calls missed, calls converted to booked visits.",
    why: "A patient who reaches voicemail rarely waits. She calls the next med spa on her list — and that practice earns the trust you could have built.",
    scripts: [],
  },
  {
    num: "02",
    label: "The Signature Greeting",
    summary: "No more generic 'How can I help you?'",
    color: "#c8b3a3", bg: "rgba(200,179,163,0.07)", border: "rgba(200,179,163,0.2)",
    body: "Build a signature greeting that reflects your practice's personality — something no competitor in your market says. Formula: a warm hook, your practice name, and a brand line. Keep it on-brand, natural to say, and short enough to repeat 50 times a day without sounding rehearsed. Every team member uses the same greeting — consistency is what makes it a brand asset.",
    why: null,
    scripts: ["\"Thank you for calling [Practice Name] — where beauty meets expertise. How can I help you on your confidence journey today?\""],
  },
  {
    num: "03",
    label: "Ask Who You're Speaking With",
    summary: "Relationship-building starts with a name.",
    color: "#d4c5b8", bg: "rgba(212,197,184,0.07)", border: "rgba(212,197,184,0.18)",
    body: "End your greeting by asking their name — it's rare that people are asked this over the phone. It signals attentiveness and immediately sets your practice apart. It also puts you in control of guiding the conversation from this point forward.",
    why: null,
    scripts: ["\"May I ask who I'm speaking with?\"", "\"Who do I have the pleasure of speaking with today?\""],
  },
  {
    num: "04",
    label: "New or Existing Patient?",
    summary: "One question tells you exactly which script to run next.",
    color: "#b89e8a", bg: "rgba(184,158,138,0.07)", border: "rgba(184,158,138,0.18)",
    body: "Ask directly, and use whichever term matches your brand voice — client, patient, or guest. New callers get a warm welcome and discovery questions. Existing patients move straight into scheduling or their specific request.",
    why: null,
    scripts: ["\"If you don't mind me asking — are you an existing patient of ours, or would this be your first time with us?\""],
  },
  {
    num: "05",
    label: "\"What Made You Reach Out?\"",
    summary: "Let them tell their story before you say anything about the practice.",
    color: "#a28c75", bg: "rgba(162,140,117,0.08)", border: "rgba(162,140,117,0.22)",
    body: "For new callers, invite them to share before you pitch. Once they explain, this is your moment to credential the practice — confidently and briefly. Reference your specialties, provider experience, and results philosophy. This builds instant confidence before a single word is said about scheduling.",
    why: null,
    scripts: [
      "\"I'm so glad you called — what made you reach out today?\"",
      "\"You've called the right place. At [Practice Name] we specialize in ___. Our providers bring years of experience, and we're known for natural, beautiful results.\"",
    ],
  },
  {
    num: "06",
    label: "Ask Discovery Questions",
    summary: "Document every answer — the provider should walk in already knowing this patient.",
    color: "#c8b3a3", bg: "rgba(200,179,163,0.07)", border: "rgba(200,179,163,0.2)",
    body: null,
    why: null,
    scripts: [],
    questions: [
      { num: "1", q: "What area are you looking to treat?", note: "Locates their primary concern" },
      { num: "2", q: "Have you been to a med spa before?", note: "Sets the right education level" },
      { num: "3", q: "Tightening, or adding volume?", note: "Narrows the treatment category" },
      { num: "4", q: "Injectables, or laser treatments?", note: "Identifies their interest area" },
      { num: "5", q: "How did you hear about us?", note: "Tracks marketing effectiveness" },
      { num: "6", q: "Any event or timeline in mind?", note: "Reveals urgency and planning window" },
    ],
  },
  {
    num: "07",
    label: "Introduce the Signature Consultation",
    summary: "Never book 'a consultation.' Book a branded experience.",
    color: "#d4c5b8", bg: "rgba(212,197,184,0.07)", border: "rgba(212,197,184,0.18)",
    body: "Patients today research online and often arrive boxed into one treatment — which may not be their best option. A branded, general consultation opens them to a full evaluation and a real treatment plan. Use this exact verbiage every time — it should sound like a defined experience, not a generic visit.",
    why: null,
    scripts: ["\"Here at [Practice Name], we always start with our Signature Skin Consultation. You'll get a full skin analysis, a one-on-one evaluation with an expert provider, and we'll build your personalized treatment plan together — including pricing, financing, and timeline.\""],
  },
  {
    num: "08",
    label: "Offer Two Times — Not a Menu",
    summary: "Too many choices create hesitation, not commitment.",
    color: "#b89e8a", bg: "rgba(184,158,138,0.07)", border: "rgba(184,158,138,0.18)",
    body: "Always lead with your next available appointment. If it's soon, frame it as a rare opening — it signals demand. If it doesn't work, ask what days and times generally work best, then offer exactly two options within that window. Never list every open slot at once.",
    why: null,
    scripts: [
      "\"We actually had a last-minute opening tomorrow at 3:00 — does that work for you?\"",
      "\"What days and times generally work best? ... I have Tuesday at 3:15 or Wednesday at 3:30 — do either of those work?\"",
    ],
  },
  {
    num: "09",
    label: "Set Expectations Before They Hang Up",
    summary: "A smooth logistical experience starts building real confidence here.",
    color: "#a28c75", bg: "rgba(162,140,117,0.08)", border: "rgba(162,140,117,0.22)",
    body: "Confirm the day, time, and provider they're booked with. Explain intake forms and give them the option to complete them ahead of time. Give clear directions — parking, building entrance, where to find you.",
    why: null,
    scripts: ["\"I have you down for next Tuesday at 3:15 with ___. You'll be sent some forms to complete beforehand — if you're able to fill those out ahead of time, that's a big help, but we also have them ready in office.\""],
  },
  {
    num: "10",
    label: "The Personal Close",
    summary: "End with warmth, not a transaction.",
    color: "#c8b3a3", bg: "rgba(200,179,163,0.07)", border: "rgba(200,179,163,0.2)",
    body: "Restate your name — it reinforces the relationship and primes the in-person greeting. Invite further questions before the visit. Pair this with name tags for the whole front desk team, so patients can put a face to the name the moment they walk in.",
    why: null,
    scripts: ["\"I'm so excited for your consultation. My name's ___ — I'm usually up at the front desk, and I can't wait to meet you in person. Please let us know if anything comes up before then!\""],
  },
];

export default function PhoneCallMasteryPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link href="/members/resources/staff" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80" style={{ color: "rgba(162,140,117,0.7)" }}>
            <ArrowLeft size={13} />
            Staff Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}>
              <Phone size={18} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)", color: "rgba(162,140,117,0.75)" }}>Training</span>
              <span className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide" style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.15)", color: "rgba(162,140,117,0.6)" }}>Part 1 of 2</span>
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Phone Call Mastery
          </h1>
          <p className="text-base max-w-2xl leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.5)" }}>
            Before a patient ever sits in a consultation chair, they&apos;ve already formed an opinion about
            your practice — based entirely on how that phone call felt. This training covers every
            moment of the call, word-for-word.
          </p>

          <Link href="/members/resources/staff/front-desk-sales" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-colors duration-200 hover:opacity-80" style={{ color: "#a28c75" }}>
            Continue to Part 2: In-Office Sales
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── MINDSET ── */}
        <div>
          <SectionLabel label="The Mindset" />
          <div className="rounded-2xl p-7 mb-6" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.22)" }}>
            <p className="font-display text-xl font-light leading-relaxed mb-2" style={{ color: "#fffdf6" }}>
              The front desk isn&apos;t administrative support. It&apos;s the first — and most important — sales conversation your practice has.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
              Every unanswered call, generic greeting, or rushed conversation is a lost patient. Every warm, confident, well-guided call is a patient who already trusts you before they walk through the door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", label: "Speed", desc: "Fast, tracked response wins the patient before a single word is said about treatment." },
              { icon: "🗂️", label: "Structure", desc: "A consistent call framework outperforms natural talent and improvisation every time." },
              { icon: "🤝", label: "Relationship", desc: "Patients buy trust first, technology second — the phone call is where that trust starts." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-5" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 10-STEP FRAMEWORK ── */}
        <div>
          <SectionLabel label="The 10-Step Call Framework" />
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${step.border}` }}>
                {/* Header */}
                <div className="px-6 py-4 flex items-center gap-4" style={{ background: step.bg }}>
                  <span className="font-display text-3xl font-light flex-shrink-0 w-12 text-right" style={{ color: step.color, opacity: 0.5 }}>{step.num}</span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{step.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>{step.summary}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-5" style={{ background: "rgba(0,0,0,0.2)" }}>
                  {step.body && (
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>{step.body}</p>
                  )}

                  {/* Discovery questions */}
                  {"questions" in step && step.questions && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.questions.map((q) => (
                        <div key={q.num} className="flex items-start gap-3 rounded-lg px-4 py-3" style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.14)" }}>
                          <span className="text-xs font-medium flex-shrink-0 w-4" style={{ color: step.color }}>{q.num}</span>
                          <div>
                            <p className="text-sm italic" style={{ color: "#fffdf6" }}>&ldquo;{q.q}&rdquo;</p>
                            <p className="text-xs mt-1" style={{ color: "rgba(255,253,246,0.4)" }}>{q.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.why && (
                    <div className="mt-4 rounded-lg px-4 py-3" style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.14)" }}>
                      <p className="text-xs leading-relaxed italic" style={{ color: "rgba(255,253,246,0.55)" }}>&ldquo;{step.why}&rdquo;</p>
                    </div>
                  )}

                  {step.scripts.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>Say this</p>
                      {step.scripts.map((s, i) => (
                        <div key={i} className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.18)" }}>
                          <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>{s}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── QUICK REFERENCE ── */}
        <div className="rounded-2xl p-8" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.25)" }}>
          <h2 className="font-display text-2xl font-light mb-2" style={{ color: "#fffdf6" }}>Quick Reference — The Full Call Flow</h2>
          <p className="text-sm mb-7" style={{ color: "rgba(255,253,246,0.4)" }}>Keep this visible at the front desk until the flow is second nature.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Answer fast and track every call",
              "Signature greeting",
              "Ask their name",
              "New or existing patient?",
              "\"What made you reach out?\" + credential the practice",
              "Discovery questions",
              "Introduce the Signature Consultation",
              "Offer two appointment times",
              "Set expectations + logistics",
              "Personal, warm close",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.14)" }}>
                <span className="text-xs font-medium w-5 flex-shrink-0 text-center" style={{ color: "#a28c75" }}>{i + 1}</span>
                <p className="text-sm" style={{ color: "rgba(255,253,246,0.75)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TREATMENT QUESTIONS ── */}
        <div>
          <SectionLabel label="Handling Treatment Questions" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Benefit-First Formula */}
            <div className="rounded-2xl p-6" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.18)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>The formula</p>
              <div className="space-y-3 mb-5">
                {[
                  { step: "1", label: "Enthusiasm", desc: "Lead with genuine excitement — it's contagious" },
                  { step: "2", label: "Benefit statement", desc: "What will the patient experience or see?" },
                  { step: "3", label: "One line on the technology", desc: "How it works — brief, not a lecture" },
                  { step: "4", label: "Close with a question", desc: "Move toward the consultation" },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <span className="text-xs font-medium w-5 flex-shrink-0 text-center mt-0.5" style={{ color: "#a28c75" }}>{s.step}</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{s.label}</p>
                      <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl px-4 py-4" style={{ background: "rgba(162,140,117,0.08)", border: "1px solid rgba(162,140,117,0.2)" }}>
                <p className="text-xs tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.55)" }}>Example: Morpheus8 inquiry</p>
                <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>&ldquo;Oh my gosh, that&apos;s one of our most popular treatments! It&apos;s amazing for smoothing fine lines, tightening skin, and softening fullness under the chin. It uses radiofrequency microneedling — some of the most advanced technology available — and our patients love their results.&rdquo;</p>
              </div>
            </div>

            {/* Keep specifics open-ended */}
            <div className="rounded-2xl p-6" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.18)" }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Keep specifics open-ended</p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.6)" }}>
                Questions like &ldquo;how many treatments&rdquo; or &ldquo;what&apos;s the downtime&rdquo; should never get a hard, universal answer. Every patient starts from a different baseline — closing off expectations on the phone limits what the provider can recommend.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs mb-1.5" style={{ color: "rgba(162,140,117,0.5)" }}>When asked about number of treatments:</p>
                  <div className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.18)" }}>
                    <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>&ldquo;It really varies since every patient starts from a different baseline — but on average, most patients see great results around three treatments.&rdquo;</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs mb-1.5" style={{ color: "rgba(162,140,117,0.5)" }}>When asked about downtime:</p>
                  <div className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.18)" }}>
                    <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>&ldquo;All of our treatments are customized, so downtime depends on what we&apos;re addressing. Generally you can expect about 48 hours of redness, and your provider will walk you through exactly what to expect for your plan.&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BETWEEN CALL AND CONSULT ── */}
        <div>
          <SectionLabel label="Between the Call and the Consult" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Two small moments that set your practice noticeably apart before the patient ever walks in.
          </p>

          <div className="space-y-5">
            {/* Confirmation Call */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.2)" }}>
              <div className="px-6 py-4" style={{ background: "rgba(162,140,117,0.07)", borderBottom: "1px solid rgba(162,140,117,0.14)" }}>
                <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>The Personalized Confirmation Call</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.4)" }}>Sets a noticeably higher bar than automated text confirmations</p>
              </div>
              <div className="px-6 py-5" style={{ background: "rgba(0,0,0,0.2)" }}>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.65)" }}>
                  Make a personal call for every new patient&apos;s first consultation. Confirm the day and time, give parking and direction details, and close with the critical question below. If a live call isn&apos;t possible, ask the critical question at the time of booking instead.
                </p>
                <ScriptBlock>
                  &ldquo;I&apos;m calling to confirm your Signature Skin Consultation for Tuesday at 3:15. Our office is located at ___, and parking is available ___.&rdquo;
                </ScriptBlock>
              </div>
            </div>

            {/* Critical Question */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.2)" }}>
              <div className="px-6 py-4" style={{ background: "rgba(162,140,117,0.07)", borderBottom: "1px solid rgba(162,140,117,0.14)" }}>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>The Critical Question</p>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75" }}>Most important moment</span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.4)" }}>This is what makes the confirmation call worth the effort</p>
              </div>
              <div className="px-6 py-5" style={{ background: "rgba(0,0,0,0.2)" }}>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.65)" }}>
                  Ask what they&apos;d like to spend additional time on during their consultation. This surfaces the one make-or-break concern — risk and safety worries, a past bad experience elsewhere, or financing questions. Document whatever surfaces so the provider walks in already prepared.
                </p>
                <div className="space-y-2">
                  {[
                    "\"Is there anything specific you'd like to spend additional time on during your consultation?\"",
                    "\"Some patients like extra time on how the technology works, looking through before-and-afters, or reviewing pricing and payment plans — does anything like that stand out for you?\"",
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.18)" }}>
                      <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Provider Introduction Text */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.2)" }}>
              <div className="px-6 py-4" style={{ background: "rgba(162,140,117,0.07)", borderBottom: "1px solid rgba(162,140,117,0.14)" }}>
                <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>The Provider Introduction Text</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.4)" }}>A second trust-building touchpoint before the patient ever walks in</p>
              </div>
              <div className="px-6 py-5" style={{ background: "rgba(0,0,0,0.2)" }}>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.65)" }}>
                  Send a text &ldquo;from&rdquo; the treating provider between booking and the visit. Include their first name, the provider&apos;s name, a brief credentialing statement, and one genuine personal line so the provider comes across as human, not clinical. Attach a headshot whenever your system supports it.
                </p>
                <div className="space-y-2">
                  {[
                    "\"Hi [Patient First Name], this is [Provider Name] from [Practice Name]! I'm so excited to meet you at your upcoming consultation.\"",
                    "\"I've been in aesthetics for over 10 years and I'm passionate about laser, microneedling, and medical-grade skincare that help my patients achieve the most natural results possible.\"",
                    "\"Outside of the office, I love spending time outside with my family — see you soon!\"",
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.18)" }}>
                      <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CONTINUE TO PART 2 ── */}
        <Link
          href="/members/resources/staff/front-desk-sales"
          className="block rounded-2xl p-7 transition-all duration-300 hover:opacity-90"
          style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.25)" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>Up next · Part 2 of 2</p>
              <h3 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>In-Office Sales Mastery</h3>
              <p className="text-sm mt-1" style={{ color: "rgba(255,253,246,0.5)" }}>Arrival experience, cross-selling scripts for 4 treatments, and the confidence & trust foundation.</p>
            </div>
            <ArrowRight size={24} style={{ color: "#a28c75", flexShrink: 0 }} />
          </div>
        </Link>

      </div>
    </div>
  );
}
