import Link from "next/link";
import { ArrowLeft, ShoppingBag, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In-Office Sales Mastery | Aesthetic Executive",
  description:
    "Cross-selling scripts for Morpheus8, Lumecca, Forma, and Vasculaze — plus the arrival experience and confidence & trust foundation for front desk success.",
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

function ScriptBlock({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl px-5 py-4 mt-3" style={{ background: "rgba(162,140,117,0.08)", border: "1px solid rgba(162,140,117,0.22)" }}>
      {label && <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.55)" }}>{label}</p>}
      <div className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>{children}</div>
    </div>
  );
}

const deviceScripts = [
  {
    name: "Morpheus8",
    tagline: "Contouring & lifting",
    color: "#a28c75",
    bg: "rgba(162,140,117,0.08)",
    border: "rgba(162,140,117,0.22)",
    intro: "\"Have you heard about our Morpheus8 treatment? It's one of my favorites — it's incredible for tightening skin, smoothing fine lines, and even softening fullness under the chin. It uses radiofrequency microneedling — some of the most advanced technology available. It's been super popular and our patients absolutely love their results.\"",
    response: "\"I'm not sure — that's actually a really common first reaction because everyone starts at a different baseline. That's exactly what the consultation is for — your provider will do a full evaluation and build a plan that makes sense for you specifically.\"",
    close: "\"Are you interested in adding that to your consultation today?\"",
  },
  {
    name: "Lumecca",
    tagline: "Pigmentation & radiance",
    color: "#c8b3a3",
    bg: "rgba(200,179,163,0.08)",
    border: "rgba(200,179,163,0.2)",
    intro: "\"Have you heard about our Lumecca treatment? A lot of our patients don't realize they can treat redness, dark spots, sun damage, and even broken capillaries — all in one session. It's really amazing for overall skin tone and radiance. A lot of our patients pair it with their other treatments as part of a full skin plan.\"",
    response: "\"It really varies by skin tone and concern — the consultation is honestly the best way to find out. Your provider will look at your skin specifically and let you know whether Lumecca makes sense for your goals.\"",
    close: "\"Would you like to include that as something to discuss during your consultation?\"",
  },
  {
    name: "Forma",
    tagline: "Skin tightening & lifting",
    color: "#b89e8a",
    bg: "rgba(184,158,138,0.08)",
    border: "rgba(184,158,138,0.18)",
    intro: "\"Do you know about our Forma treatment? It's one of our non-invasive options for skin tightening and lifting — it's completely comfortable, no downtime, and a lot of our patients do it as a maintenance treatment between their bigger procedures. It's great for keeping that skin firm and toned.\"",
    response: "\"It really depends on your individual starting point and what we're addressing — but your provider can give you all of that detail during the consultation. It's definitely something worth asking about.\"",
    close: "\"Do you want to make sure you bring that up when you're in?\"",
  },
  {
    name: "Vasculaze",
    tagline: "Vascular & redness reduction",
    color: "#d4c5b8",
    bg: "rgba(212,197,184,0.08)",
    border: "rgba(212,197,184,0.18)",
    intro: "\"One thing I'd love to mention — have you heard of Vasculaze? It's our laser treatment specifically for facial redness, visible veins, and spider veins. A lot of patients don't know this is even treatable, but we can address those concerns really effectively. It might be worth discussing during your consultation.\"",
    response: "\"Great question — the answer really depends on where the veins are located and how extensive the treatment area is. Your provider will walk you through that during the consultation.\"",
    close: "\"Would you like to add that to your list of things to ask about?\"",
  },
];

export default function FrontDeskSalesPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 80% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link href="/members/resources/staff" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80" style={{ color: "rgba(162,140,117,0.7)" }}>
            <ArrowLeft size={13} />
            Staff Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}>
              <ShoppingBag size={18} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)", color: "rgba(162,140,117,0.75)" }}>Training</span>
              <span className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide" style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.15)", color: "rgba(162,140,117,0.6)" }}>Part 2 of 2</span>
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            In-Office Sales Mastery
          </h1>
          <p className="text-base max-w-2xl leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.5)" }}>
            The phone call gets them through the door. What happens in the first three minutes
            in-person determines whether they book one treatment — or leave with a full plan.
            This training covers the arrival experience, cross-selling, and the confidence
            foundation that makes all of it possible.
          </p>

          <Link href="/members/resources/staff/phone-call-mastery" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-colors duration-200 hover:opacity-80" style={{ color: "#a28c75" }}>
            <ArrowLeft size={12} />
            Back to Part 1: Phone Call Mastery
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── THE IN-PERSON ARRIVAL ── */}
        <div>
          <SectionLabel label="The In-Person Arrival" />

          {/* Before they walk in */}
          <div className="rounded-2xl overflow-hidden mb-5" style={{ border: "1px solid rgba(162,140,117,0.2)" }}>
            <div className="px-6 py-4 flex items-center gap-3" style={{ background: "rgba(162,140,117,0.07)", borderBottom: "1px solid rgba(162,140,117,0.14)" }}>
              <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75" }}>1</span>
              <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>Before They Walk In</p>
            </div>
            <div className="px-6 py-5" style={{ background: "rgba(0,0,0,0.2)" }}>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.65)" }}>
                Review the appointment notes before the patient arrives. Know their name, what prompted their call, any specific concerns they flagged, and the critical question answer collected during the confirmation call. Every front desk team member in at the time should know the patient&apos;s name.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Their name (and how to pronounce it)",
                  "What made them reach out",
                  "Any concerns flagged at booking",
                  "The critical question answer",
                  "Which provider they&apos;re seeing",
                  "Intake form status (completed or needs to be done in office)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 rounded-lg px-3.5 py-2.5" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#a28c75" }} />
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }} dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New vs Established */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.2)" }}>
            <div className="px-6 py-4 flex items-center gap-3" style={{ background: "rgba(162,140,117,0.07)", borderBottom: "1px solid rgba(162,140,117,0.14)" }}>
              <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75" }}>2</span>
              <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>New vs. Established Patient</p>
            </div>
            <div className="px-6 py-5" style={{ background: "rgba(0,0,0,0.2)" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* New */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(162,140,117,0.12)", color: "#a28c75", border: "1px solid rgba(162,140,117,0.2)" }}>New Patient</span>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.5)" }}>
                    Make them feel like you&apos;ve been looking forward to their visit — because you have.
                  </p>
                  <div className="space-y-2">
                    <ScriptBlock label="Greeting">
                      &ldquo;Hi [Name], welcome to [Practice Name]! We&apos;re so excited to have you here today. I&apos;m ___ — we spoke on the phone! It&apos;s so great to finally meet you.&rdquo;
                    </ScriptBlock>
                    <ScriptBlock label="Transition">
                      &ldquo;Your provider is going to take wonderful care of you today. While you get settled, can I get you some water or tea?&rdquo;
                    </ScriptBlock>
                  </div>
                </div>
                {/* Established */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(47,4,16,0.6)", color: "rgba(255,253,246,0.6)", border: "1px solid rgba(162,140,117,0.15)" }}>Established Patient</span>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.5)" }}>
                    Reference something personal from a past visit — it signals genuine attention.
                  </p>
                  <div className="space-y-2">
                    <ScriptBlock label="Greeting">
                      &ldquo;[Name]! It&apos;s so great to see you again. How have you been? How did your skin look after last time?&rdquo;
                    </ScriptBlock>
                    <ScriptBlock label="If a name tag is new to them">
                      &ldquo;I&apos;m ___, I just started a few weeks ago — I&apos;ve heard so many great things about you from the team!&rdquo;
                    </ScriptBlock>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CROSS-SELLING FRAMEWORK ── */}
        <div>
          <SectionLabel label="The Cross-Selling Framework" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Cross-selling isn&apos;t pitching. It&apos;s giving patients the information they didn&apos;t know they needed. Use this three-step framework for every treatment mention.
          </p>

          {/* 3-step framework */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                step: "1",
                label: "Introduce",
                desc: "Plant a seed naturally — tie it to a concern they already mentioned, or lead with enthusiasm. Never open with a price.",
                note: "\"Have you heard about our [treatment]? ...\"",
              },
              {
                step: "2",
                label: "Respond Benefit-First",
                desc: "When they ask about suitability, number of sessions, or downtime — answer with openness and redirect to the consultation.",
                note: "\"It really depends on your skin — the consultation is the best way to find out.\"",
              },
              {
                step: "3",
                label: "Soft Close",
                desc: "Invite them to include it in today's conversation — always as a question, never a pressure.",
                note: "\"Would you like to add that to your consultation today?\"",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl p-6" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.16)" }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-medium mb-4" style={{ background: "rgba(162,140,117,0.12)", color: "#a28c75" }}>
                  {item.step}
                </div>
                <p className="text-sm font-medium mb-2" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                <p className="text-xs italic" style={{ color: "rgba(162,140,117,0.75)" }}>{item.note}</p>
              </div>
            ))}
          </div>

          {/* When to bring it up */}
          <div className="rounded-2xl p-6 mb-4" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.14)" }}>
            <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>When to bring it up</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { timing: "At check-in", desc: "While reviewing intake, when they mention a concern naturally" },
                { timing: "While waiting", desc: "Conversationally — never as a formal pitch" },
                { timing: "At check-out", desc: "After the consultation while they're in a positive, decided mindset" },
              ].map((t) => (
                <div key={t.timing} className="rounded-lg px-4 py-3" style={{ background: "rgba(0,0,0,0.15)", border: "1px solid rgba(162,140,117,0.1)" }}>
                  <p className="text-xs font-medium mb-1" style={{ color: "#fffdf6" }}>{t.timing}</p>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DEVICE SCRIPTS ── */}
        <div>
          <SectionLabel label="Treatment Scripts" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Word-for-word scripts for four core devices. Each follows the same Introduce → Respond → Close structure. Practice until the wording sounds natural — not memorized.
          </p>

          <div className="space-y-5">
            {deviceScripts.map((device) => (
              <div key={device.name} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${device.border}` }}>
                {/* Header */}
                <div className="px-6 py-4 flex items-center gap-4" style={{ background: device.bg, borderBottom: `1px solid ${device.border}` }}>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{device.name}</p>
                    <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>{device.tagline}</p>
                  </div>
                </div>

                {/* Scripts */}
                <div className="px-6 py-5 space-y-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <div>
                    <p className="text-xs tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>Step 1 — Introduce</p>
                    <div className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: `1px solid ${device.border}` }}>
                      <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>{device.intro}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>Step 2 — When they ask &ldquo;Am I a good candidate?&rdquo;</p>
                    <div className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: `1px solid ${device.border}` }}>
                      <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>{device.response}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>Step 3 — Close</p>
                    <div className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.07)", border: `1px solid ${device.border}` }}>
                      <p className="text-sm italic leading-relaxed" style={{ color: "#fffdf6" }}>{device.close}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONFIDENCE & TRUST ── */}
        <div>
          <SectionLabel label="Confidence & Trust" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Scripts only work when they come from a place of real knowledge and genuine care. These are the two foundations behind every conversation in this training.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Confidence */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.2)" }}>
              <div className="px-6 py-4" style={{ background: "rgba(162,140,117,0.07)", borderBottom: "1px solid rgba(162,140,117,0.14)" }}>
                <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>Building Confidence</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.4)" }}>You can&apos;t sell what you don&apos;t believe in</p>
              </div>
              <div className="px-6 py-5 space-y-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                {[
                  {
                    label: "Know the treatments",
                    desc: "Understand what each device does, which concerns it addresses, what the experience feels like, and what results to expect. Ask your providers — they want you to be informed.",
                  },
                  {
                    label: "Know the process",
                    desc: "Understand your booking flow, intake process, consultation structure, financing options, and how post-treatment check-ins work. Confidence in operations reflects confidence in the practice.",
                  },
                  {
                    label: "Practice the scripts",
                    desc: "Run through the cross-sell scripts until they feel like conversation, not a pitch. Practice in pairs — one person as the front desk, one as the patient — until the responses are automatic.",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                    <p className="text-xs font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(162,140,117,0.2)" }}>
              <div className="px-6 py-4" style={{ background: "rgba(162,140,117,0.07)", borderBottom: "1px solid rgba(162,140,117,0.14)" }}>
                <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>Building Trust</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.4)" }}>Patients don&apos;t buy treatments — they buy the people behind them</p>
              </div>
              <div className="px-6 py-5 space-y-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                {[
                  {
                    label: "Slow down",
                    desc: "A rushed front desk experience signals a practice that isn&apos;t paying attention. Take an extra moment to greet, seat, and connect — even when you&apos;re busy.",
                  },
                  {
                    label: "Listen before you speak",
                    desc: "Don&apos;t launch into a cross-sell before you understand what brought them in. Ask a question, let them finish, then respond. A patient who feels heard is already more open.",
                  },
                  {
                    label: "Personalize every interaction",
                    desc: "Reference their name, something from their chart, or the concern they mentioned on the call. Generic warmth is forgettable. Personal warmth builds loyalty.",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl px-4 py-3" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                    <p className="text-xs font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FINAL TAKEAWAY ── */}
        <div className="rounded-2xl p-8" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.25)" }}>
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>The goal</p>
          <h3 className="font-display text-2xl font-light mb-4 leading-snug" style={{ color: "#fffdf6" }}>
            Patients should leave feeling seen — not sold to.
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            The most effective front desk team members never feel like salespeople. They feel like advocates — people who genuinely want their patients to get the best outcomes, who know the treatments well enough to connect them with the right option, and who care enough to make the experience personal from the first ring of the phone to the final goodbye at checkout.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Know your treatments", "Personalize every interaction", "Lead with benefits", "Redirect specifics to consultation", "Always close with a question"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)", color: "rgba(162,140,117,0.8)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── BACK TO PART 1 ── */}
        <Link
          href="/members/resources/staff/phone-call-mastery"
          className="block rounded-2xl p-7 transition-all duration-300 hover:opacity-90"
          style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.18)" }}
        >
          <div className="flex items-center gap-4">
            <ArrowLeft size={24} style={{ color: "#a28c75", flexShrink: 0 }} />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>Part 1 of 2</p>
              <h3 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Phone Call Mastery</h3>
              <p className="text-sm mt-0.5" style={{ color: "rgba(255,253,246,0.45)" }}>The 10-step call framework, treatment question handling, and pre-visit prep.</p>
            </div>
          </div>
        </Link>

        {/* Link to Part 2 banner */}
        <div className="text-center pt-2">
          <Link href="/members/resources/staff" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:opacity-80" style={{ color: "rgba(162,140,117,0.6)" }}>
            <ArrowLeft size={12} />
            All Staff Resources
          </Link>
        </div>

      </div>
    </div>
  );
}
