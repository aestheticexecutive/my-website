import Link from "next/link";
import { ArrowLeft, ExternalLink, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Process Training | Aesthetic Executive",
};

const stages = [
  {
    num: "01",
    icon: "📲",
    title: "Speed to Lead",
    body: "The moment someone reaches out is the highest point of their interest. Respond within 5 minutes, every time — then execute the 7-touch outreach sequence.",
  },
  {
    num: "02",
    icon: "📞",
    title: "Booking the Consultation",
    body: "Brand your consultation, ask qualifying questions before hanging up, and close the booking confidently with one strong time slot — not a full calendar.",
  },
  {
    num: "03",
    icon: "✉️",
    title: "Pre-Consult Confirmation",
    body: "Send a confirmation call and a personal provider bio text before they arrive. The consultation experience starts well before they walk in the door.",
  },
  {
    num: "04",
    icon: "🪞",
    title: "The Consultation",
    body: "Ask the 3 opening questions first. Build candidacy doubt. Use the mirror moment and compliment sandwich. Show before-and-afters. Listen more than you speak.",
  },
  {
    num: "05",
    icon: "💰",
    title: "Price & Objections",
    body: "Step out and write the treatment plan. Present it with confidence, not apology. Price is on the paper — let it sit. Handle every objection with the scripts inside.",
  },
  {
    num: "06",
    icon: "📬",
    title: "Post-Consult Follow-Up",
    body: "Four touches over 14 days: plan photo same day, check-in at day 2, soft ask at day 7, final touch at day 14. If still unconverted, move to marketing pipeline.",
  },
];

export default function SalesProcessPage() {
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
              <TrendingUp size={16} style={{ color: "#a28c75" }} />
            </div>
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(162,140,117,0.65)" }}
            >
              Staff Training · Sales Process
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            The Art of the Consult
          </h1>
          <p
            className="text-base leading-relaxed max-w-2xl mb-8"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            A complete conversion playbook covering every stage of the patient journey — from the
            first inquiry to a closed treatment plan. Scripts, objection handling, and follow-up
            sequences all in one interactive training.
          </p>

          <a
            href="/tools/sales-training.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #3d0614 100%)",
              border: "1px solid rgba(162,140,117,0.35)",
              color: "#a28c75",
            }}
          >
            Open Interactive Training
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { num: "<5", label: "Minutes to respond before conversion rates drop dramatically" },
            { num: "7", label: "Touchpoints before a lead goes cold — most practices give up after 2" },
            { num: "4×", label: "Post-consult follow-ups over 14 days to close the loop" },
          ].map((stat) => (
            <div
              key={stat.num}
              className="rounded-xl border p-6 text-center"
              style={{
                background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)",
                borderColor: "rgba(162,140,117,0.2)",
              }}
            >
              <div
                className="font-display text-4xl font-light mb-2"
                style={{ color: "#a28c75" }}
              >
                {stat.num}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Stage overview */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              What&apos;s Inside
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stages.map((stage) => (
              <div
                key={stage.num}
                className="rounded-xl border p-6 flex gap-5"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.1)",
                }}
              >
                <div className="flex-shrink-0">
                  <span
                    className="font-display text-2xl font-light block leading-none mb-1"
                    style={{ color: "rgba(162,140,117,0.25)" }}
                  >
                    {stage.num}
                  </span>
                  <span className="text-xl">{stage.icon}</span>
                </div>
                <div>
                  <h3
                    className="font-display text-base font-light mb-2 leading-snug"
                    style={{ color: "#fffdf6" }}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                    {stage.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's included chips */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              What&apos;s Included
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "7-touch outreach sequence",
              "Word-for-word scripts",
              "5 objection responses",
              "Candidacy doubt technique",
              "Mirror moment + compliment sandwich",
              "Treatment plan presentation",
              "4-touch follow-up timeline",
              "Quick reference card",
              "Progress tracking",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                style={{
                  background: "rgba(162,140,117,0.07)",
                  border: "1px solid rgba(162,140,117,0.15)",
                  color: "rgba(255,253,246,0.5)",
                }}
              >
                <span style={{ color: "#a28c75" }}>·</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="flex-1">
            <h3
              className="font-display text-2xl font-light mb-2"
              style={{ color: "#fffdf6" }}
            >
              Ready to train your team?
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
              The interactive training tracks your progress through all 6 stages. Mark each
              section complete as you go, or use it as a reference during team coaching sessions.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/tools/sales-training.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
              style={{
                background: "rgba(162,140,117,0.15)",
                border: "1px solid rgba(162,140,117,0.35)",
                color: "#a28c75",
              }}
            >
              Open Training
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
