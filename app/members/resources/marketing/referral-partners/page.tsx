import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Gift,
  MessageSquare,
  Phone,
  Mail,
  CheckCircle,
  ExternalLink,
  CreditCard,
  UserPlus,
  Heart,
  Star,
  Handshake,
  Repeat,
  Download,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral Partner Program | Aesthetic Executive",
};

const partnerTypes = [
  { icon: Star, label: "Hairstylists", note: "High-trust, frequent client contact" },
  { icon: Heart, label: "Lash artists", note: "Close proximity, beauty-focused clients" },
  { icon: UserPlus, label: "Permanent makeup artists", note: "Aligned aesthetics clientele" },
  { icon: Heart, label: "Massage therapists", note: "Wellness-minded, body-conscious" },
  { icon: Star, label: "Nutritionists", note: "Health & appearance aligned" },
  { icon: Users, label: "Boutique owners", note: "Premium spending habits" },
  { icon: Star, label: "Makeup artists", note: "Events & beauty community" },
  { icon: Heart, label: "Nail technicians", note: "Regular appointments, loyal clients" },
  { icon: Users, label: "Fitness instructors", note: "Body-aware, goal-driven clients" },
  { icon: Star, label: "Wellness coaches", note: "Holistic self-care mindset" },
  { icon: Heart, label: "Real estate agents", note: "High income, relationship-driven" },
  { icon: Users, label: "Medically aligned professionals", note: "Credibility + referral authority" },
];

const onboardingSteps = [
  {
    num: "01",
    title: "Invite them in",
    body: "Offer a complimentary facial, consultation, or low-cost high-value service. Let them experience your practice firsthand — people refer businesses they personally trust and enjoy.",
  },
  {
    num: "02",
    title: "Make the experience intentional",
    body: "Introduce them to your team, explain your services, show them the space. Give them a great experience. This is how they become a genuine advocate, not just a card distributor.",
  },
  {
    num: "03",
    title: "Give them their materials",
    body: "Physical referral cards + a digital version (a branded image saved to their phone). Walk through how credits work, how to share the cards, and how to track referrals.",
  },
  {
    num: "04",
    title: "Exchange contact info",
    body: "Save their cell phone number. Text communication is the most effective for ongoing relationship maintenance. Schedule their next check-in right in the conversation.",
  },
];

export default function ReferralPartnersPage() {
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
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-12">
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
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <Handshake size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Local Partnerships
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Referral Partner Program
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            How to build and run a structured referral program with individual service providers
            in your community — using a simple, trackable, high-converting Give $50 / Get $50 model.
          </p>
        </div>
      </div>

      {/* ── Download bar ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>
            Want to share this program with your team or a potential partner?
          </p>
          <a
            href="/templates/referral-partner-program.docx"
            download
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{
              background: "rgba(162,140,117,0.12)",
              border: "1px solid rgba(162,140,117,0.3)",
              color: "#a28c75",
            }}
          >
            <Download size={13} />
            Download as Word Doc
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* ── Overview ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Overview
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-base leading-relaxed mb-8 max-w-3xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            One of the most effective and low-cost ways to grow a med spa is by building relationships
            with local service providers who already serve your ideal clientele. Unlike advertising,
            referrals from trusted relationships convert at a significantly higher rate — and cost far less.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Gift,
                title: "High perceived value",
                body: "A $50 gift card feels like money to spend — not a discount. This small framing difference meaningfully increases redemption rates.",
              },
              {
                icon: Repeat,
                title: "Low actual cost",
                body: "Your cost per lead through paid advertising is often significantly higher than the cost of this program. Partners only get rewarded when you get a patient.",
              },
              {
                icon: Heart,
                title: "Relationship-first",
                body: "Partners refer businesses they personally trust and enjoy. The best ROI comes from inviting them in first, before handing them a stack of cards.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.14)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <card.icon size={17} style={{ color: "#a28c75" }} />
                </div>
                <h3 className="font-display text-base font-light mb-2" style={{ color: "#fffdf6" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Program Structure ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 01 — Program Structure
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          {/* Give $50 / Get $50 feature block */}
          <div
            className="rounded-2xl border p-8 md:p-10 mb-8"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CreditCard size={20} style={{ color: "#a28c75" }} />
              <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
                The &ldquo;Give $50, Get $50&rdquo; Model
              </h2>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.55)" }}>
              This is the recommended structure — simple enough to explain in 60 seconds, compelling enough for partners to actually use it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "Your partner receives",
                  items: ["Physical referral cards", "A digital version (branded image for their phone)", "Space for their name or identifier on the card"],
                },
                {
                  step: "When a new patient redeems",
                  items: ["Patient receives $50 toward their first service", "Partner receives a $50 account credit at your practice", "Tracked by name on the referral card"],
                },
                {
                  step: "Why it works",
                  items: ['"Gift card" framing feels more valuable than "$50 off"', "Both parties are rewarded — the client and the partner", "No cap on credits keeps active partners highly motivated"],
                },
              ].map((col) => (
                <div key={col.step}>
                  <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
                    {col.step}
                  </p>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.6)" }} />
                        <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.55)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Card format tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: Star,
                title: "Physical cards",
                body: "Great for salon stations, boutique checkout counters, and in-person conversations. Include the partner's name line and your practice contact details.",
              },
              {
                icon: MessageSquare,
                title: "Digital cards (highly recommended)",
                body: "People rarely carry physical cards anymore. A branded image saved to the partner's phone is easily texted or emailed instantly — and reduces your print costs.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border p-6"
                style={{
                  background: "rgba(162,140,117,0.04)",
                  borderColor: "rgba(162,140,117,0.13)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.18)" }}
                  >
                    <card.icon size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-light mb-2" style={{ color: "#fffdf6" }}>
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {card.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ideal Partners ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 02 — Ideal Partners
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            The best partners are businesses that have a similar clientele, are relationship-driven,
            and have loyal clients who trust their recommendations. Think: individual service providers
            who see the same people regularly.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {partnerTypes.map((p) => (
              <div
                key={p.label}
                className="rounded-xl border p-4"
                style={{
                  background: "rgba(162,140,117,0.04)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <p className="font-display text-sm font-light mb-1" style={{ color: "#fffdf6" }}>
                  {p.label}
                </p>
                <p className="text-xs leading-snug" style={{ color: "rgba(255,253,246,0.35)" }}>
                  {p.note}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-5 rounded-xl border p-5"
            style={{
              background: "rgba(162,140,117,0.05)",
              borderColor: "rgba(162,140,117,0.15)",
              borderLeft: "3px solid rgba(162,140,117,0.4)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
              <span style={{ color: "#a28c75" }}>Start with warm connections.</span>{" "}
              Your hairstylist, your realtor, your existing patients, vendors you already use.
              Warm relationships convert significantly better than cold outreach — and they feel
              more natural on both sides.
            </p>
          </div>
        </section>

        {/* ── Outreach ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 03 — Initial Outreach
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            Recommended outreach order: Instagram DM → Email → Phone call → In-person visit.
            Lead with the channel that feels most natural for the relationship.
          </p>

          <div className="space-y-5">

            {/* DM Template */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "rgba(162,140,117,0.15)" }}
            >
              <div
                className="flex items-center gap-3 px-6 py-4 border-b"
                style={{
                  background: "rgba(162,140,117,0.06)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <MessageSquare size={15} style={{ color: "#a28c75" }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.8)" }}>
                  Instagram / Facebook DM Template
                </span>
              </div>
              <div
                className="p-6"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
              >
                <div
                  className="rounded-lg p-5 font-mono text-sm leading-loose"
                  style={{
                    background: "rgba(255,253,246,0.03)",
                    border: "1px solid rgba(255,253,246,0.07)",
                    color: "rgba(255,253,246,0.6)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {`Hi [Name]!

My name is [Your Name], and I'm with ABC Med Spa here in [City]. We love supporting other local businesses and are currently building out a community partner program with businesses that share a similar clientele to ours.

I'd love to connect and see if there may be an opportunity for us to collaborate and cross-promote each other. We've created a referral-based partner program that has worked really well for local businesses, and I'd love to share more details with you.

Would you be open to a quick 10–15 minute call sometime this week or next?

Looking forward to connecting!`}
                </div>
              </div>
            </div>

            {/* Email Template */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "rgba(162,140,117,0.15)" }}
            >
              <div
                className="flex items-center gap-3 px-6 py-4 border-b"
                style={{
                  background: "rgba(162,140,117,0.06)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <Mail size={15} style={{ color: "#a28c75" }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.8)" }}>
                  Email Outreach Template
                </span>
              </div>
              <div
                className="p-6"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
              >
                <p className="text-xs mb-3" style={{ color: "rgba(162,140,117,0.65)" }}>
                  Subject line options: &ldquo;Local Partnership Opportunity&rdquo; · &ldquo;Referral Partnership Opportunity&rdquo; · &ldquo;Let&apos;s Cross-Promote Our Businesses&rdquo;
                </p>
                <div
                  className="rounded-lg p-5 font-mono text-sm leading-loose"
                  style={{
                    background: "rgba(255,253,246,0.03)",
                    border: "1px solid rgba(255,253,246,0.07)",
                    color: "rgba(255,253,246,0.6)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {`Hi [Name],

My name is [Your Name], and I'm reaching out from ABC Med Spa in [City].

We are currently expanding our local community partner program and are looking to collaborate with businesses that share a similar clientele and values.

The program is designed to:
• Help local businesses support one another
• Create referral opportunities
• Reward both clients and partners
• Increase visibility for everyone involved

Our partners receive custom referral cards that offer their clients a "$50 Gift Card" toward services at our practice, and in return, the partner receives a $50 account credit whenever someone redeems their card.

We've found this to be a really fun and easy way to cross-promote while genuinely supporting other local businesses in the area.

I'd love to schedule a quick 10–15 minute call to tell you more about the program and see if it may be a good fit for your business.

Please let me know if there's a day or time that works well for you!

Best,
[Your Name]
ABC Med Spa
[Phone Number]
[Website]`}
                </div>
              </div>
            </div>

            {/* Phone Script */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "rgba(162,140,117,0.15)" }}
            >
              <div
                className="flex items-center gap-3 px-6 py-4 border-b"
                style={{
                  background: "rgba(162,140,117,0.06)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <Phone size={15} style={{ color: "#a28c75" }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.8)" }}>
                  Phone Call / Meeting Script
                </span>
              </div>
              <div
                className="p-6"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
              >
                <div className="space-y-5">
                  {[
                    {
                      num: "1",
                      title: "Introduction",
                      body: "Thank them for their time. Introduce yourself and your practice. Explain why you thought of them specifically — mention their clientele or community reputation.",
                      example: '"We really try to partner with businesses that have a similar clientele and strong relationships with their clients, and your business immediately came to mind."',
                    },
                    {
                      num: "2",
                      title: "Explain the program",
                      body: "Walk them through the Give $50 / Get $50 structure, physical and digital referral cards, how referrals are tracked, and how credits are applied. Keep it simple and conversational.",
                      example: null,
                    },
                    {
                      num: "3",
                      title: "Ask questions",
                      body: "Learn about their business, their clientele, their goals, and their current marketing. The more you understand their world, the better you can frame the value for them.",
                      example: null,
                    },
                    {
                      num: "4",
                      title: "Invite them in",
                      body: "Offer a complimentary facial, treatment experience, or consultation. This lets them experience your practice firsthand and become a more genuine advocate.",
                      example: null,
                    },
                    {
                      num: "5",
                      title: "Establish next steps",
                      body: "Schedule their visit, provide cards, send digital assets, exchange cell phone numbers. Leave the call with a concrete next action.",
                      example: null,
                    },
                  ].map((step) => (
                    <div
                      key={step.num}
                      className="flex gap-4"
                    >
                      <span
                        className="font-display text-xs flex-shrink-0 w-5 text-right mt-0.5"
                        style={{ color: "rgba(162,140,117,0.5)" }}
                      >
                        {step.num}.
                      </span>
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>
                          {step.title}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                          {step.body}
                        </p>
                        {step.example && (
                          <p
                            className="text-xs leading-relaxed mt-2 italic pl-3 border-l"
                            style={{
                              color: "rgba(162,140,117,0.65)",
                              borderColor: "rgba(162,140,117,0.25)",
                            }}
                          >
                            {step.example}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Onboarding ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 04 — Onboarding
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            The onboarding visit is the most important step. People refer businesses they trust and
            personally enjoy — and you can&apos;t build that through a text chain alone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {onboardingSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.13)",
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="font-display text-xs tracking-[0.2em] flex-shrink-0 mt-0.5"
                    style={{ color: "rgba(162,140,117,0.5)" }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-light mb-2" style={{ color: "#fffdf6" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Maintaining the Relationship ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 05 — Maintaining the Relationship
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            Strong partnerships require consistency. The goal is to stay on their radar, keep cards
            stocked, and make them feel genuinely valued — not just like a card distributor.
          </p>

          <div className="space-y-5">

            {/* Check-in text template */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "rgba(162,140,117,0.15)" }}
            >
              <div
                className="flex items-center gap-3 px-6 py-4 border-b"
                style={{
                  background: "rgba(162,140,117,0.06)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <MessageSquare size={15} style={{ color: "#a28c75" }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.8)" }}>
                  Bi-Monthly Check-In Text
                </span>
              </div>
              <div
                className="p-6"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
              >
                <div
                  className="rounded-lg p-5 font-mono text-sm leading-loose"
                  style={{
                    background: "rgba(255,253,246,0.03)",
                    border: "1px solid rgba(255,253,246,0.07)",
                    color: "rgba(255,253,246,0.6)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {`Hi [Name]! Just checking in to see how everything's been going 😊

Wanted to see if you need any more referral cards or if there's anything we can do to support you and your business!

Also wanted to say thank you again for partnering with us — we truly appreciate it!`}
                </div>
              </div>
            </div>

            {/* Referral thank-you text */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "rgba(162,140,117,0.15)" }}
            >
              <div
                className="flex items-center gap-3 px-6 py-4 border-b"
                style={{
                  background: "rgba(162,140,117,0.06)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <Heart size={15} style={{ color: "#a28c75" }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.8)" }}>
                  Referral Thank-You Text
                </span>
              </div>
              <div
                className="p-6"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)" }}
              >
                <div
                  className="rounded-lg p-5 font-mono text-sm leading-loose"
                  style={{
                    background: "rgba(255,253,246,0.03)",
                    border: "1px solid rgba(255,253,246,0.07)",
                    color: "rgba(255,253,246,0.6)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {`Hi [Name]! Just wanted to say thank you for sending [Client Name] our way! We truly appreciate the support.

We've added your referral credit to your account 😊`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Additional Collaboration Ideas ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Beyond Referral Cards
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            Once the referral relationship is established, these partnerships can go much further.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Events",
                items: ["Invite partners to open houses", "Launch parties & educational events", "Client appreciation events", "Wellness events — they can attend, promote, or set up a booth"],
              },
              {
                title: "Cross-promotional offers",
                items: ["Hair restoration + complimentary styling", "Bridal packages with makeup artists", "Wellness bundles with nutritionists", "Botox + beauty service collaborations"],
              },
              {
                title: "Training models",
                items: ["Offer complimentary services to trusted partners as training models", "They experience your work firsthand", "They become stronger advocates", "They often naturally promote the experience"],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="rounded-xl border p-6"
                style={{
                  background: "rgba(162,140,117,0.04)",
                  borderColor: "rgba(162,140,117,0.13)",
                }}
              >
                <h3 className="font-display text-base font-light mb-4" style={{ color: "#fffdf6" }}>
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }}>·</span>
                      <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.45)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final Thoughts ── */}
        <section>
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
              Remember
            </p>
            <p className="font-display text-2xl font-light mb-4 leading-snug" style={{ color: "#fffdf6" }}>
              The practices that grow fastest become deeply integrated in their local communities.
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
              Focus less on &ldquo;selling&rdquo; the program — and more on building genuine,
              mutually beneficial relationships. When done correctly, your partner network
              becomes one of the most powerful and sustainable referral sources in your practice.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Relationships", "Consistency", "Community", "Mutual value"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full tracking-wide"
                  style={{
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.22)",
                    color: "rgba(162,140,117,0.8)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Back nav ── */}
        <div className="pt-4">
          <Link
            href="/members/resources/marketing"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.6)" }}
          >
            <ArrowLeft size={12} />
            Back to Marketing Resources
          </Link>
        </div>

      </div>
    </div>
  );
}
