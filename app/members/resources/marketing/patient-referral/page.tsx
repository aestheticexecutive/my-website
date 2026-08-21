import Link from "next/link";
import {
  ArrowLeft,
  Gift,
  Download,
  CheckCircle,
  MessageSquare,
  Phone,
  Mail,
  Users,
  Zap,
  Star,
  Megaphone,
  Smartphone,
  QrCode,
  Heart,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Referral Program | Aesthetic Executive",
};

export default function PatientReferralPage() {
  return (
    <div className="bg-[#170009] min-h-screen">

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
              <Gift size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Patient Growth
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            How to Build a Patient Referral Program That Actually Works
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
            A happy patient is your most powerful marketing tool. A well-designed referral program
            gives them a simple reason and an easy way to send friends and family your way —
            without complicated tracking or high costs.
          </p>
        </div>
      </div>

      {/* ── Download bar ── */}
      <div className="border-b" style={{ borderColor: "rgba(162,140,117,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm" style={{ color: "rgba(255,253,246,0.55)" }}>
            Want to share this guide with your team or use it to build your program?
          </p>
          <a
            href="/templates/patient-referral-program.docx"
            download
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.3)", color: "#a28c75" }}
          >
            <Download size={13} />
            Download as Word Doc
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* ── Why It Works ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Why Referral Programs Matter
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-2xl border p-8 md:p-10 mb-8"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>
              The key insight
            </p>
            <p className="font-display text-2xl md:text-3xl font-light mb-4 leading-snug" style={{ color: "#fffdf6" }}>
              The most powerful marketing tool in your practice isn&apos;t social media, paid advertising,
              or email campaigns — it&apos;s a happy patient.
            </p>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.6)" }}>
              Patients who are excited about their results naturally talk about their experiences with
              friends, family, coworkers, and neighbors. A well-designed referral program gives them
              a simple reason and an easy way to make those recommendations. The key isn&apos;t creating
              something complicated — it&apos;s creating something simple, memorable, and consistently promoted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Star, title: "Simple", body: "Patients understand the program immediately. If they have to ask multiple questions, it's too complicated." },
              { icon: Smartphone, title: "Easy to Share", body: "Digital referral cards make participation effortless. Today's patients carry their phones, not business cards." },
              { icon: Megaphone, title: "Discussed Constantly", body: "Practices generating the most referrals are the ones consistently reminding patients their program exists." },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #170009 100%)",
                  borderColor: "rgba(162,140,117,0.13)",
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
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Steps 1–2: Offer + Brand ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 01 — Create a Simple Referral Offer
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            {/* The Offer */}
            <div
              className="rounded-xl border p-6"
              style={{
                background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
                borderColor: "rgba(162,140,117,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <Gift size={17} style={{ color: "#a28c75" }} />
              </div>
              <h3 className="font-display text-xl font-light mb-1" style={{ color: "#fffdf6" }}>
                Give $50, Get $50
              </h3>
              <p className="text-xs mb-4" style={{ color: "rgba(162,140,117,0.65)" }}>A great example structure</p>
              <ul className="space-y-2 mb-5">
                {[
                  "The referred friend receives $50 toward a service",
                  "The referring patient receives a $50 account credit once the new patient completes a qualifying service purchase",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.5)" }} />
                    <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic" style={{ color: "rgba(255,253,246,0.45)" }}>
                Customize the dollar amount for your practice. Simplicity is critical — if patients have to ask multiple questions, it&apos;s too complicated.
              </p>
            </div>

            {/* Program Rules */}
            <div
              className="rounded-xl border p-6"
              style={{
                background: "rgba(162,140,117,0.04)",
                borderColor: "rgba(162,140,117,0.13)",
              }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
                Important program rules
              </p>
              <ul className="space-y-2.5">
                {[
                  "Valid for services only",
                  "New patients only",
                  "Referred patient must complete a qualifying service purchase",
                  "Credit cannot be redeemed for cash",
                  "Credit cannot be applied toward products unless otherwise specified",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.5)" }} />
                    <span className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step 2: Brand Your Program */}
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 02 — Brand Your Referral Program
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            Giving your referral program a name makes it feel intentional and memorable. Choose a name that matches
            your brand personality and use it consistently across all materials.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Beauty Is Better Together",
              "Share the Glow",
              "Friends Who Glow Together",
              "Glow & Grow Rewards",
              "Love Your Results? Share Them.",
              "The Beauty Insider Referral Program",
              "Bring a Friend, Earn Rewards",
            ].map(name => (
              <div
                key={name}
                className="rounded-xl border px-4 py-3"
                style={{
                  background: "rgba(162,140,117,0.04)",
                  borderColor: "rgba(162,140,117,0.11)",
                }}
              >
                <p className="text-sm leading-snug" style={{ color: "rgba(255,253,246,0.75)" }}>{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Steps 3–4: Physical + Digital Cards ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 03 — Physical Referral Cards
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.6)" }}>
                Every practice should have printed referral cards available throughout the office. The easier it is
                for patients to grab a card, the more likely they are to share it.
              </p>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>Recommended locations</p>
              <ul className="space-y-2">
                {["Front desk", "Reception area", "Consultation rooms", "Treatment rooms", "Checkout counter", "Event tables"].map(item => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span style={{ color: "rgba(162,140,117,0.5)" }}>·</span>
                    <span className="text-sm" style={{ color: "rgba(255,253,246,0.6)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl border p-5"
              style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.13)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>Your referral card should clearly show</p>
              <ul className="space-y-2">
                {[
                  "The referral offer",
                  "How it works",
                  "Any restrictions",
                  "Space for the referring patient's name",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.5)" }} />
                    <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 04 — Digital Referral Cards
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-xl border p-6 mb-6"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
              >
                <Smartphone size={16} style={{ color: "#a28c75" }} />
              </div>
              <div>
                <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                  This is where most practices miss a major opportunity.
                </h3>
                <p className="text-sm mt-1" style={{ color: "rgba(255,253,246,0.55)" }}>
                  Today&apos;s patients rarely carry physical cards. They carry their phones.
                </p>
              </div>
            </div>
            <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>Best practice — personalized digital cards</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.6)" }}>
              Each week, pull a list of new patients and create personalized digital referral cards with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Their name already entered",
                "Referral offer clearly displayed",
                "Practice logo and branding",
                "Instructions for use",
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={13} style={{ color: "rgba(162,140,117,0.5)" }} />
                  <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Step 5: Send Card via Text ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 05 — Send Every New Patient Their Digital Card
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            Once a patient completes their first appointment, send them their personalized referral card via
            text message. This introduces the program and gives patients an easy way to participate immediately.
          </p>

          <div
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div
              className="flex items-center gap-3 px-6 py-4 border-b"
              style={{ background: "rgba(162,140,117,0.06)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <MessageSquare size={15} style={{ color: "#a28c75" }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.8)" }}>
                New Patient Text Template
              </span>
            </div>
            <div className="p-6" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)" }}>
              <div
                className="rounded-lg p-5 font-mono text-sm leading-loose"
                style={{
                  background: "rgba(255,253,246,0.03)",
                  border: "1px solid rgba(255,253,246,0.07)",
                  color: "rgba(255,253,246,0.7)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {`Hi Sarah! We are so excited to have you as part of our practice family. Attached is your personalized referral card.

If you have friends or family who have been thinking about visiting us, simply text them this image. When they complete their first service purchase, they'll receive $50 off and you'll receive a $50 credit on your account.

Thank you for trusting us with your care and for sharing us with those you love!`}
              </div>
            </div>
          </div>
        </section>

        {/* ── Step 6: Card Request Page ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 06 — Create a Referral Card Request Page
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            Not every patient will receive a digital card right away. Create a simple landing page on your
            website where patients can request one — this captures existing patients who joined before the
            program was launched.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-xl border p-5"
              style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.13)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>Page should include</p>
              <ul className="space-y-2">
                {["Program overview", "Referral program rules", "Simple request form", "Contact information"].map(item => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={13} style={{ color: "rgba(162,140,117,0.5)" }} />
                    <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl border p-5"
              style={{
                background: "rgba(162,140,117,0.04)",
                borderColor: "rgba(162,140,117,0.15)",
                borderLeft: "3px solid rgba(162,140,117,0.4)",
              }}
            >
              <div className="flex items-start gap-3">
                <QrCode size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#a28c75" }} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>QR Codes Throughout Your Practice</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                    Add QR codes that direct patients to this page — at checkout, in treatment rooms, on event displays.
                  </p>
                  <p className="text-xs italic mt-2" style={{ color: "rgba(162,140,117,0.6)" }}>
                    &ldquo;Want your own digital referral card? Scan here.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Step 7: Promote Everywhere ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 07 — Promote Your Referral Program Everywhere
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-xl border p-6 mb-6"
            style={{
              background: "rgba(162,140,117,0.05)",
              borderColor: "rgba(162,140,117,0.15)",
              borderLeft: "3px solid rgba(162,140,117,0.4)",
            }}
          >
            <p className="text-sm leading-relaxed font-medium" style={{ color: "rgba(255,253,246,0.78)" }}>
              The biggest mistake practices make is creating a referral program and then never talking about it.
              Referral programs only work when patients are consistently reminded they exist. Patients often need
              multiple reminders before taking action.
            </p>
          </div>

          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>In-office promotion ideas</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              "Lobby signage",
              "Reception desk displays",
              "QR code posters",
              "Checkout signage",
              "Consult folders",
              "Treatment room signage",
              "Event displays",
              "Goodie bags",
              "Shopping bags",
              "Welcome packets",
            ].map(item => (
              <div
                key={item}
                className="rounded-xl border px-4 py-3"
                style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.11)" }}
              >
                <p className="text-sm" style={{ color: "rgba(255,253,246,0.7)" }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Step 8: Train Your Team ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 08 — Train Your Team to Talk About It
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            Your team should naturally mention the referral program throughout the patient journey.
          </p>

          <div className="space-y-4">
            {[
              {
                moment: "When patients compliment their results",
                script: '"I love hearing that! Did you know we have a referral program where you can earn credits when friends come in?"',
              },
              {
                moment: "During follow-up appointments",
                script: '"We\'re so happy you\'re seeing great results. If anyone asks where you\'ve been going, make sure to share your referral card."',
              },
              {
                moment: "At checkout",
                script: '"Don\'t forget — you have access to our referral program if you have any friends or family interested in our services."',
              },
              {
                moment: "During consultations",
                script: '"We grow primarily through referrals from happy patients, so we love rewarding our patients who share us with others."',
              },
            ].map((item) => (
              <div
                key={item.moment}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(162,140,117,0.13)" }}
              >
                <div
                  className="px-5 py-3 border-b"
                  style={{ background: "rgba(162,140,117,0.06)", borderColor: "rgba(162,140,117,0.1)" }}
                >
                  <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(162,140,117,0.7)" }}>
                    {item.moment}
                  </p>
                </div>
                <div className="px-5 py-4" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)" }}>
                  <p className="text-sm leading-relaxed italic" style={{ color: "rgba(255,253,246,0.65)" }}>
                    {item.script}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Step 9: Keep Top of Mind ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 09 — Keep Referrals Top of Mind
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            Consistent reminders dramatically increase participation across every channel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              {
                icon: Mail,
                title: "Monthly Email Campaigns",
                items: ["Referral program reminders", "Success stories", "Bonus referral promotions"],
              },
              {
                icon: MessageSquare,
                title: "Text Message Campaigns",
                items: [
                  "Quarterly reminders:",
                  '"Love your results? Share them! Refer a friend and you\'ll both receive $50 toward services."',
                ],
              },
              {
                icon: Zap,
                title: "Social Media",
                items: ["Referral program graphics", "Patient testimonials", "Referral reminders", "Limited-time bonus promotions"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #170009 100%)",
                  borderColor: "rgba(162,140,117,0.13)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <card.icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <h3 className="font-display text-base font-light mb-3" style={{ color: "#fffdf6" }}>
                  {card.title}
                </h3>
                <ul className="space-y-1.5">
                  {card.items.map(item => (
                    <li key={item} className="text-xs flex items-start gap-2" style={{ color: "rgba(255,253,246,0.55)" }}>
                      <span style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }}>·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Step 10: Slow Season Promotions ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 10 — Referral Promotions During Slow Seasons
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            When business slows down, increase referral incentives temporarily. Creating urgency can significantly
            increase referral activity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Double Referral Month",
                details: ["Give $75, Get $75"],
              },
              {
                title: "VIP Member Referral Month",
                details: ["Members receive: Give $50, Get $75"],
              },
              {
                title: "Event Referral Cards",
                details: ["Give $100, Get $100", "Bonus treatment upgrades", "Exclusive event rewards"],
              },
            ].map((promo) => (
              <div
                key={promo.title}
                className="rounded-xl border p-5"
                style={{
                  background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
                  borderColor: "rgba(162,140,117,0.2)",
                }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>
                  Limited-Time Offer
                </p>
                <h3 className="font-display text-lg font-light mb-3" style={{ color: "#fffdf6" }}>
                  {promo.title}
                </h3>
                <ul className="space-y-1.5">
                  {promo.details.map(detail => (
                    <li key={detail} className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Steps 11–12: Events + Thank You ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 11 — Feature Referrals at Events
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.6)" }}>
                Every event should include a referral station. Events create excitement and are one of the best
                opportunities to generate new referrals.
              </p>
              <ul className="space-y-2">
                {[
                  "Referral information table",
                  "Enhanced referral cards",
                  "QR code sign-up",
                  "Team member explaining the program",
                  "Special event-only referral offers",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={13} style={{ color: "rgba(162,140,117,0.5)" }} />
                    <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl border p-5"
              style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.13)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Why events work so well</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                Patients who attend your events are already engaged and enthusiastic about your practice. That
                energy makes them far more likely to share referral cards with friends and family in the days
                immediately following the event.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 12 — Celebrate and Thank Referring Patients
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.6)" }}>
            Recognition matters. When a patient successfully refers someone, send a simple thank-you text.
            This reinforces appreciation, encourages loyalty, and increases the likelihood of future referrals.
          </p>

          <div
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: "rgba(162,140,117,0.15)" }}
          >
            <div
              className="flex items-center gap-3 px-6 py-4 border-b"
              style={{ background: "rgba(162,140,117,0.06)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <Heart size={15} style={{ color: "#a28c75" }} />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.8)" }}>
                Thank-You Text Template
              </span>
            </div>
            <div className="p-6" style={{ background: "linear-gradient(145deg, #140008 0%, #170009 100%)" }}>
              <div
                className="rounded-lg p-5 font-mono text-sm leading-loose"
                style={{
                  background: "rgba(255,253,246,0.03)",
                  border: "1px solid rgba(255,253,246,0.07)",
                  color: "rgba(255,253,246,0.7)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {`Thank you so much for sharing us with your friends and family. It truly means the world to our team.

We've added a referral credit to your account and can't wait to see you again soon!`}
              </div>
            </div>
          </div>
        </section>

        {/* ── The Secret ── */}
        <section>
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #170009 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
              The Secret to a High-Performing Referral Program
            </p>
            <p className="font-display text-2xl font-light mb-6 leading-snug" style={{ color: "#fffdf6" }}>
              The most successful referral programs share three common characteristics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { num: "1", title: "They're Simple", body: "Patients understand them immediately." },
                { num: "2", title: "They're Easy to Share", body: "Digital referral cards make participation effortless." },
                { num: "3", title: "They're Discussed Constantly", body: "The practices generating the most referrals are the ones consistently reminding patients about their program." },
              ].map(item => (
                <div key={item.num} className="flex gap-4">
                  <span
                    className="font-display text-2xl font-light flex-shrink-0"
                    style={{ color: "rgba(162,140,117,0.4)" }}
                  >
                    {item.num}.
                  </span>
                  <div>
                    <p className="font-display text-base font-light mb-1" style={{ color: "#fffdf6" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl border p-5"
              style={{ background: "rgba(162,140,117,0.06)", borderColor: "rgba(162,140,117,0.2)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>
                <span style={{ color: "#a28c75" }}>Remember:</span> A referral program should never be a
                &ldquo;set it and forget it&rdquo; marketing strategy. The practices seeing the greatest referral growth
                are the ones that make referrals part of everyday conversations, patient communications,
                events, and office culture.
              </p>
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
