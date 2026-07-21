import Link from "next/link";
import { ArrowLeft, Clock, Phone, MessageSquare, CheckCircle, AlertTriangle, BarChart3, Brain, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Conversion Playbook | Aesthetic Executive",
  description:
    "A step-by-step guide for responding to, nurturing, and converting new patient inquiries into consultations and treatments.",
};

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2
        className="font-display text-2xl md:text-3xl font-light flex-shrink-0"
        style={{ color: "#fffdf6" }}
      >
        {label}
      </h2>
      <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
    </div>
  );
}

export default function LeadConversionPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── HERO ── */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(162,140,117,0.12)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 75% 50%, rgba(47,4,16,0.8) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-14">
          <Link
            href="/members/resources/marketing"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Marketing Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Phone size={18} style={{ color: "#a28c75" }} />
            </div>
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.22)",
                color: "rgba(162,140,117,0.75)",
              }}
            >
              Playbook
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Lead Conversion Playbook
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed mb-10"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            A step-by-step guide for responding to, nurturing, and converting new patient
            inquiries into consultations and treatments.
          </p>

          {/* Core philosophy banner */}
          <div
            className="rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-6 md:gap-0"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
              border: "1px solid rgba(162,140,117,0.25)",
            }}
          >
            <div className="flex-1 text-center md:text-left md:border-r md:pr-8" style={{ borderColor: "rgba(162,140,117,0.18)" }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.55)" }}>Speed</p>
              <p className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Speed wins.</p>
            </div>
            <div className="flex-1 text-center md:border-r md:px-8" style={{ borderColor: "rgba(162,140,117,0.18)" }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.55)" }}>Connection</p>
              <p className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Conversation converts.</p>
            </div>
            <div className="flex-1 text-center md:text-right md:pl-8">
              <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.55)" }}>Follow-Through</p>
              <p className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Persistence closes.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── NORTH STAR ── */}
        <div
          className="rounded-2xl px-8 py-6"
          style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.16)" }}
        >
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>The goal</p>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,253,246,0.75)" }}>
            Respond quickly, build trust, educate the patient, and focus on{" "}
            <span style={{ color: "#fffdf6", fontWeight: 500 }}>booking the consultation</span> — not selling
            the treatment over the phone.
          </p>
        </div>

        {/* ── RESPONSE TIMELINE ── */}
        <div>
          <SectionLabel label="Lead Response Timeline" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                when: "Within 5 Minutes",
                urgency: "Critical",
                color: "#a28c75",
                bg: "rgba(162,140,117,0.08)",
                border: "rgba(162,140,117,0.25)",
                items: [
                  "Automated text message",
                  "Personal phone call",
                  "Voicemail if unanswered",
                ],
                note: "The first meaningful conversation most often wins the consultation.",
              },
              {
                when: "Day 3",
                urgency: "Follow-Up",
                color: "#c8a86b",
                bg: "rgba(200,168,107,0.07)",
                border: "rgba(200,168,107,0.22)",
                items: [
                  "Follow-up text with urgency",
                  "Another phone call attempt",
                ],
                note: "Keep it warm and brief — acknowledge you tried and want to connect.",
              },
              {
                when: "Day 10–14",
                urgency: "Nurture",
                color: "#b89e8a",
                bg: "rgba(184,158,138,0.07)",
                border: "rgba(184,158,138,0.2)",
                items: [
                  "Educational follow-up email",
                  "FAQs for the treatment",
                  "Before-and-after photos",
                  "Simple A / B / C response options",
                ],
                note: "Make it easy to re-engage with a single tap — yes / no / call me.",
              },
            ].map((phase) => (
              <div
                key={phase.when}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ background: phase.bg, border: `1px solid ${phase.border}` }}
              >
                <div className="px-5 py-4 border-b" style={{ borderColor: phase.border }}>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full mb-2 inline-block tracking-wide"
                    style={{ background: `${phase.color}20`, color: phase.color }}
                  >
                    {phase.urgency}
                  </span>
                  <p className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>
                    {phase.when}
                  </p>
                </div>
                <div className="px-5 py-4 flex-1 space-y-2">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: phase.color }} />
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.7)" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-5">
                  <p className="text-xs italic leading-relaxed" style={{ color: "rgba(255,253,246,0.35)" }}>
                    {phase.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY SPEED MATTERS ── */}
        <div>
          <SectionLabel label="Why Speed Matters" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                headline: "Patients shop around",
                body: "Most people inquire with multiple practices at the same time. Whoever reaches them first — and makes the best impression — wins the booking.",
              },
              {
                n: "02",
                headline: "First contact wins",
                body: "The first meaningful conversation almost always closes the consultation. Every minute of delay increases the chance someone else books them.",
              },
              {
                n: "03",
                headline: "Speed signals service",
                body: "A fast, personal response communicates that your practice is attentive and professional before the patient has even walked in the door.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-2xl p-6"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.14)" }}
              >
                <p
                  className="font-display text-3xl font-light mb-3"
                  style={{ color: "rgba(162,140,117,0.25)" }}
                >
                  {item.n}
                </p>
                <p className="text-sm font-medium mb-2" style={{ color: "#fffdf6" }}>
                  {item.headline}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TEXT MESSAGE CHECKLIST ── */}
        <div>
          <SectionLabel label="Initial Text Message" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.5)" }}>
                Your first text sets the tone for the entire relationship. It should feel personal,
                not automated — even when it is. Include all of these elements.
              </p>
              <div className="space-y-2">
                {[
                  "Patient's first name",
                  "Practice name",
                  "Treatment they requested",
                  "A brief treatment benefit",
                  "Why patients love it",
                  "Why your practice stands out",
                  "A question about consultation availability",
                  "Online booking link",
                  "Before-and-after photo when appropriate",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                      style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75" }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm" style={{ color: "rgba(255,253,246,0.7)" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Example text bubble mockup */}
            <div className="flex flex-col justify-center">
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.14)" }}
              >
                <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Example Text
                </p>
                <div
                  className="rounded-xl p-4 text-sm leading-relaxed"
                  style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(162,140,117,0.1)", color: "rgba(255,253,246,0.75)" }}
                >
                  <p>
                    Hi <span style={{ color: "#a28c75" }}>[Patient Name]</span>! This is{" "}
                    <span style={{ color: "#a28c75" }}>[Your Name]</span> from{" "}
                    <span style={{ color: "#a28c75" }}>[Practice Name]</span>. 💫
                  </p>
                  <p className="mt-3">
                    I saw you were interested in{" "}
                    <span style={{ color: "#a28c75" }}>[Treatment]</span> — it's one of our most
                    loved treatments for{" "}
                    <span style={{ color: "#a28c75" }}>[key benefit]</span>. Our patients absolutely love
                    their results!
                  </p>
                  <p className="mt-3">
                    We'd love to have you come in for a complimentary consultation. Are you
                    available this week or next?
                  </p>
                  <p className="mt-3">
                    👉 Book here:{" "}
                    <span style={{ color: "#a28c75" }}>[booking link]</span>
                  </p>
                </div>
                <p
                  className="text-xs mt-3 italic"
                  style={{ color: "rgba(255,253,246,0.3)" }}
                >
                  Personalize every field — never send a template that reads like one.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── PHONE CALL FRAMEWORK ── */}
        <div>
          <SectionLabel label="Phone Call Framework" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            This 10-step flow works whether you reach them live or leave a voicemail.
            The goal is rapport first, appointment second.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { n: 1, step: "Introduce yourself and your practice", detail: "State your name, practice name, and why you're calling — warm and confident, not scripted." },
              { n: 2, step: "Build rapport", detail: "Ask if they've visited before. Prior patients get a warmer tone; new patients get more education." },
              { n: 3, step: "Ask how they heard about you", detail: "This tells you what's working in your marketing and what angle to lead with next." },
              { n: 4, step: "Generate excitement", detail: "Share genuine enthusiasm for the treatment. Enthusiasm is contagious — if you're excited, they will be too." },
              { n: 5, step: "Learn their goals and concerns", detail: "Ask before you advise. Questions build trust and help you tailor the conversation to what they actually care about." },
              { n: 6, step: "Credential your providers and technology", detail: "Mention your providers' expertise and the quality of your equipment. Confidence builds credibility." },
              { n: 7, step: "Explain your consultation process", detail: "Remove the unknown. Tell them what happens at the consultation so they know exactly what to expect." },
              { n: 8, step: "Offer the earliest availability", detail: "Lead with your soonest opening. Offer no more than two options — too many choices delay the decision." },
              { n: 9, step: "Gather additional clinical information", detail: "Note anything the provider will need: medical history, prior treatments, allergies, medications." },
              { n: 10, step: "End warmly", detail: "Let them know you're genuinely looking forward to meeting them. Excitement and warmth make them excited too." },
            ].map((item) => (
              <div
                key={item.n}
                className="flex gap-4 rounded-xl p-4"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75" }}
                >
                  {item.n}
                </span>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>
                    {item.step}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SCHEDULING + WHAT NOT TO DO ── */}
        <div>
          <SectionLabel label="Scheduling Best Practices" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Do */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(162,140,117,0.2)" }}
            >
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ background: "rgba(162,140,117,0.07)", borderBottom: "1px solid rgba(162,140,117,0.14)" }}
              >
                <CheckCircle size={15} style={{ color: "#a28c75" }} />
                <p className="text-xs font-medium tracking-wide" style={{ color: "#a28c75" }}>
                  Do This
                </p>
              </div>
              <div className="px-5 py-4 space-y-3" style={{ background: "rgba(0,0,0,0.15)" }}>
                {[
                  { tip: "Lead with the earliest available appointment", why: "Urgency and momentum are your friends — a slot this week closes faster than one next month." },
                  { tip: "Offer no more than two options", why: "Too many choices create hesitation. Two options force a decision without overwhelming." },
                  { tip: "Use genuine urgency", why: "A real cancellation slot or a high-demand provider is a legitimate reason to book now, not pressure." },
                  { tip: "Sound selective, not desperate", why: "A practice that's always available feels less desirable. Confidence in your schedule signals demand." },
                ].map((item) => (
                  <div
                    key={item.tip}
                    className="rounded-lg px-4 py-3"
                    style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
                  >
                    <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>
                      {item.tip}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {item.why}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Don't */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(200,80,80,0.2)" }}
            >
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ background: "rgba(200,80,80,0.06)", borderBottom: "1px solid rgba(200,80,80,0.14)" }}
              >
                <AlertTriangle size={15} style={{ color: "#c85050" }} />
                <p className="text-xs font-medium tracking-wide" style={{ color: "#c85050" }}>
                  Avoid This
                </p>
              </div>
              <div className="px-5 py-4 space-y-2.5" style={{ background: "rgba(0,0,0,0.15)" }}>
                {[
                  { mistake: "\"Is now a good time to talk?\"", why: "Gives them an easy out before you've had a chance to connect." },
                  { mistake: "Leading with price", why: "Price without context kills interest. Build value first — the consultation is where pricing is personalized." },
                  { mistake: "Asking for the appointment before building rapport", why: "You're asking for a commitment they haven't earned yet. Trust comes before the close." },
                  { mistake: "Offering too many scheduling options", why: "Analysis paralysis is real. Two options is a decision; five options is a maybe." },
                  { mistake: "Sounding scripted", why: "Patients can feel a copy-paste response from a mile away. Personalize — even slightly." },
                ].map((item) => (
                  <div
                    key={item.mistake}
                    className="rounded-lg px-4 py-3"
                    style={{ background: "rgba(200,80,80,0.04)", border: "1px solid rgba(200,80,80,0.1)" }}
                  >
                    <p className="text-sm font-medium mb-1" style={{ color: "rgba(255,253,246,0.85)" }}>
                      {item.mistake}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                      {item.why}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── HANDLING OBJECTIONS ── */}
        <div>
          <SectionLabel label="Handling Common Objections" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                objection: "\"I'm not sure if it's right for me.\"",
                response: "Redirect to education",
                detail: "Address uncertainty by sharing what the treatment does, who it's best for, and what results look like. The consultation exists exactly for questions like this.",
              },
              {
                objection: "\"How much does it cost?\"",
                response: "Position pricing as personalized",
                detail: "\"Pricing is customized based on your goals and treatment plan — your provider will go over everything during your consultation.\" Never quote a price cold.",
              },
              {
                objection: "\"How do I know your providers are good?\"",
                response: "Reinforce expertise and outcomes",
                detail: "Mention credentials, years of experience, specific technology, and real patient results. Confidence in your team is contagious.",
              },
              {
                objection: "\"I'm really busy right now.\"",
                response: "Offer flexible scheduling",
                detail: "Offer early morning, evening, or weekend options if available. Make it as easy as possible to find a time — then follow up on day 3 with those options ready.",
              },
            ].map((item) => (
              <div
                key={item.objection}
                className="rounded-2xl p-5"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.14)" }}
              >
                <p className="text-sm italic mb-2" style={{ color: "rgba(255,253,246,0.5)" }}>
                  {item.objection}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight size={11} style={{ color: "#a28c75", flexShrink: 0 }} />
                  <p className="text-sm font-medium" style={{ color: "#a28c75" }}>
                    {item.response}
                  </p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONVERSION FUNNEL ── */}
        <div>
          <SectionLabel label="Track Your Metrics" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Every inquiry should move through this funnel. Tracking each stage tells you exactly
            where leads are falling off — and where to focus your effort.
          </p>
          <div className="space-y-2">
            {[
              { label: "Lead Received", icon: "01", width: "100%", note: "Inquiry enters your system" },
              { label: "Contact Attempt Within 5 Minutes", icon: "02", width: "92%", note: "Text + call within the window" },
              { label: "Lead Reached", icon: "03", width: "78%", note: "Actual conversation made" },
              { label: "Consultation Booked", icon: "04", width: "62%", note: "Appointment on the calendar" },
              { label: "Consultation Attended", icon: "05", width: "50%", note: "Patient shows up" },
              { label: "Treatment Purchased", icon: "06", width: "38%", note: "Transaction closed" },
              { label: "Revenue Generated", icon: "07", width: "38%", note: "Track by source and campaign" },
              { label: "Lead-to-Consult Rate", icon: "08", width: "100%", note: "Bookings ÷ leads (target: 40–60%)" },
              { label: "Consult-to-Treatment Rate", icon: "09", width: "100%", note: "Purchases ÷ consultations (target: 60–80%)" },
            ].map((row, i) => (
              <div key={row.label} className="flex items-center gap-4">
                <span
                  className="text-xs font-medium w-8 flex-shrink-0 text-right"
                  style={{ color: "rgba(162,140,117,0.4)", fontVariantNumeric: "tabular-nums" }}
                >
                  {row.icon}
                </span>
                <div className="flex-1 relative">
                  <div
                    className="rounded-lg px-4 py-2.5 flex items-center justify-between gap-4 transition-all"
                    style={{
                      background: i < 7 ? "rgba(162,140,117,0.08)" : "rgba(162,140,117,0.04)",
                      border: `1px solid ${i < 7 ? "rgba(162,140,117,0.16)" : "rgba(162,140,117,0.1)"}`,
                      width: i < 7 ? row.width : "100%",
                    }}
                  >
                    <p
                      className="text-sm"
                      style={{ color: i < 7 ? "rgba(255,253,246,0.75)" : "rgba(255,253,246,0.55)", fontStyle: i >= 7 ? "italic" : "normal" }}
                    >
                      {row.label}
                    </p>
                    <p className="text-xs flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
                      {row.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── POST-CONSULT FOLLOW-UP ── */}
        <div>
          <SectionLabel label="Follow-Up After the Consultation" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Not every patient books at the consultation. That doesn&apos;t mean the lead is lost.
            A structured nurture sequence keeps them moving toward a decision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              {
                timing: "24 Hours",
                label: "While they&apos;re still thinking",
                items: ["Thank-you message", "Summary of what was discussed", "Before-and-after photos", "Easy way to ask questions"],
                color: "#a28c75",
                border: "rgba(162,140,117,0.22)",
                bg: "rgba(162,140,117,0.07)",
              },
              {
                timing: "1 Week",
                label: "Gentle reminder",
                items: ["Educational email on the treatment", "Patient testimonial or review", "FAQ document", "Financing options if applicable"],
                color: "#c8a86b",
                border: "rgba(200,168,107,0.2)",
                bg: "rgba(200,168,107,0.06)",
              },
              {
                timing: "30 Days",
                label: "Final value-add",
                items: ["Value-added offer or seasonal promotion", "\"Still thinking about it?\" check-in", "Invitation to ask any remaining questions"],
                color: "#b89e8a",
                border: "rgba(184,158,138,0.18)",
                bg: "rgba(184,158,138,0.06)",
              },
            ].map((phase) => (
              <div
                key={phase.timing}
                className="rounded-2xl overflow-hidden"
                style={{ background: phase.bg, border: `1px solid ${phase.border}` }}
              >
                <div className="px-5 py-4 border-b" style={{ borderColor: phase.border }}>
                  <p className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>
                    {phase.timing}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: phase.color }}
                    dangerouslySetInnerHTML={{ __html: phase.label }}
                  />
                </div>
                <div className="px-5 py-4 space-y-2">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: phase.color }} />
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className="rounded-xl px-5 py-4"
            style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
          >
            <p className="text-sm" style={{ color: "rgba(255,253,246,0.55)" }}>
              <span style={{ color: "#a28c75" }}>Nurture content to use:</span>{" "}
              Educational emails · Patient testimonials · FAQs · Financing information · Value-added promotions
            </p>
          </div>
        </div>

        {/* ── PSYCHOLOGY ── */}
        <div>
          <SectionLabel label="The Psychology of High-Converting Outreach" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Tactics only work when they come from the right mindset. These six principles are the
            foundation every effective lead conversion conversation is built on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                principle: "People buy from people they trust",
                body: "Every call, text, and follow-up is a trust-building opportunity. The most effective teams prioritize relationship over transaction — always.",
              },
              {
                n: "02",
                principle: "Enthusiasm is contagious",
                body: "If you don't sound excited about your treatments, your patient won't be either. Genuine enthusiasm creates forward momentum.",
              },
              {
                n: "03",
                principle: "Confidence builds credibility",
                body: "Hesitation signals uncertainty. Know your treatments, know your providers, and communicate with conviction.",
              },
              {
                n: "04",
                principle: "Ask questions before offering solutions",
                body: "Understanding their goals before you recommend anything makes patients feel heard — and makes your suggestion far more persuasive.",
              },
              {
                n: "05",
                principle: "Sell the consultation — not the treatment",
                body: "Your only job on the phone is to get them in the door. The provider closes the treatment plan. Keep your scope narrow.",
              },
              {
                n: "06",
                principle: "Patients are buying confidence and results",
                body: "They're not buying a machine or a procedure — they're buying a version of themselves they feel better in. Sell the outcome, always.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-2xl p-5"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.13)" }}
              >
                <p
                  className="font-display text-2xl font-light mb-3"
                  style={{ color: "rgba(162,140,117,0.2)" }}
                >
                  {item.n}
                </p>
                <p className="text-sm font-medium mb-2" style={{ color: "#fffdf6" }}>
                  {item.principle}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FINAL TAKEAWAY ── */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
            border: "1px solid rgba(162,140,117,0.25)",
          }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase mb-3"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            The bottom line
          </p>
          <h3
            className="font-display text-2xl font-light mb-4 leading-snug"
            style={{ color: "#fffdf6" }}
          >
            Every lead is an opportunity to build a relationship.
          </h3>
          <p
            className="text-sm leading-relaxed mb-6 max-w-2xl"
            style={{ color: "rgba(255,253,246,0.55)" }}
          >
            Consistent, timely, and consultative outreach creates higher conversion rates and
            ensures your marketing spend translates into booked consultations and loyal patients.
            The team that responds fastest, builds rapport, and follows up persistently will
            win — every time.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Respond within 5 minutes",
              "Two scheduling options max",
              "Sell the consultation",
              "Follow up on Day 3 and Day 14",
              "Psychology before tactics",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(162,140,117,0.1)",
                  border: "1px solid rgba(162,140,117,0.2)",
                  color: "rgba(162,140,117,0.8)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
