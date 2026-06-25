import Link from "next/link";
import {
  ArrowLeft,
  UserPlus,
  Zap,
  Award,
  Users,
  Eye,
  BarChart2,
  Heart,
  Calendar,
  RefreshCw,
  MessageSquare,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Living Your Values | Aesthetic Executive",
};

const activationAreas = [
  {
    icon: UserPlus,
    title: "Hiring & Onboarding",
    focus: "How can we use our values and mission in job postings, interviews, training, and welcome experiences?",
    examples: [
      "Include your mission statement at the top of every job posting — above the requirements list. Candidates who resonate with it self-select in.",
      'Add at least one values-based interview question per core value. Example: "Tell me about a time you went above and beyond for a patient without being asked."',
      'Run a 30-minute "culture onboarding" session in week one where new hires learn each value through real stories from the team — not a slide deck.',
      "Give every new hire a printed copy of your core values with behavior examples on day one. Frame it, hand it to them, and walk through it together.",
      'Ask references: "Would you describe this candidate as someone who [core value behavior]?" Listen for hesitation.',
    ],
  },
  {
    icon: Zap,
    title: "Daily Operations",
    focus: "How do we build values into how we work, communicate, and make decisions?",
    examples: [
      'Create a one-question decision filter your team can use in any situation: "Which choice is most aligned with our mission?" Post it where decisions happen.',
      'Use values language naturally in team communication — "That\'s exactly what [value] looks like" or "Let\'s make sure this decision reflects [value]."',
      "Write patient interaction scripts, complaint resolution templates, and communication standards through the lens of your mission — not just best practices.",
      'Audit your patient journey touchpoints once a year and ask at each step: "Does this moment feel like us? Does it reflect our values?"',
      "Post your mission statement at the front desk, in the break room, and in treatment prep areas — for your team, not just for show.",
    ],
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    focus: "How do we celebrate team members who visibly live our values?",
    examples: [
      'Monthly "Living Our Values" shoutout — one team member per value, peer-nominated. Announce at the team meeting and tie a small reward to it.',
      'Create a dedicated channel or shared note called "Values in Action" where anyone can post a quick moment they witnessed. Read them aloud at meetings.',
      'Make recognition specific: "You embodied [value] when you [specific behavior]" — not just "great job." Specificity is what makes it stick.',
      "Quarterly Culture Award — team-voted, tied to a specific behavior example from your values. Not management-selected; owned by the team.",
      "Tie promotions and advancement to values alignment: make it explicit that you can't promote someone out of your culture, regardless of performance.",
    ],
  },
  {
    icon: Users,
    title: "Team Meetings",
    focus: "How do we incorporate values and mission into every team meeting?",
    examples: [
      "Open every team meeting by reading the mission statement aloud — takes 15 seconds and keeps it from becoming wallpaper.",
      '"Core Value of the Month": focus the whole team on one value for 30 days. Share stories, recognize examples, brainstorm how to strengthen it.',
      'Two-minute storytelling segment: "How did we live our mission this week?" Ask a different team member to share each time.',
      'End-of-meeting check-in: "Did any decisions we made today align or conflict with our values?" Keep it brief — just one round of voices.',
      "Quarterly all-hands: revisit the full set of values and ask where the team feels strongest and where they feel the biggest gap.",
    ],
  },
  {
    icon: Eye,
    title: "Visual Reminders",
    focus: "Where can we showcase our mission and values physically and digitally?",
    examples: [
      "Frame your mission statement and core values in the team area first — values are for your team, not your lobby.",
      "Add your mission statement to your team's email signature template so it appears on every external email sent.",
      "Include values in offer letters, onboarding packets, and your employee handbook — not buried, but front and center.",
      "Set up a digital display in the break room that cycles through each value and its real-world behavior examples throughout the day.",
      "Feature your values on your practice's About Us or Our Team webpage — patients who share your values will feel it immediately.",
    ],
  },
  {
    icon: BarChart2,
    title: "Performance Reviews",
    focus: "How can values be part of ongoing feedback and development?",
    examples: [
      'Add a dedicated "Values Alignment" section to every performance review form with a 1–5 rating scale anchored to specific behavior examples.',
      "Require employees to self-evaluate on values alignment before the review meeting — their self-assessment opens the conversation.",
      'Set development goals tied directly to a specific value: "This quarter, we\'re focusing on [value]. Here\'s what that looks like for your role…"',
      'When giving feedback between reviews, anchor it to a value: "The way you handled that patient conversation is exactly what [value] means."',
      "Make values alignment an explicit part of your promotion criteria so the team understands that culture is not optional at any level.",
    ],
  },
  {
    icon: Heart,
    title: "Client & Patient Experience",
    focus: "How can we reflect our mission and values in every patient interaction?",
    examples: [
      "Train every team member on how each value shows up specifically with patients — with example phrases, not just concepts.",
      'When resolving a patient complaint, ask the team: "What does our mission tell us to do here?" It removes ego and brings clarity.',
      "Include your practice's mission in your patient welcome materials or intake experience — it sets the tone before the first appointment.",
      "Use mission language when describing your practice to prospective patients in consultations: it attracts aligned patients and sets expectations.",
      'Create a written "Patient Promise" derived from your mission — a short commitment you make to every person who walks through your door.',
    ],
  },
];

const rituals = [
  {
    name: "Core Value of the Month",
    description:
      "Spotlight one value for 30 days. Post it, talk about it, recognize it. Rotate through all values throughout the year so each one gets its moment.",
    cadence: "Monthly",
  },
  {
    name: "Values in Action Shoutouts",
    description:
      "Peer-to-peer recognition tied to specific values. Anyone can nominate anyone. Read them aloud at team meetings — takes 5 minutes and builds culture fast.",
    cadence: "Weekly",
  },
  {
    name: "Mission Storytelling Moment",
    description:
      "At every all-hands or team meeting, one person shares a story from the past month about how the team lived the mission. Keep it to 2 minutes.",
    cadence: "Monthly",
  },
  {
    name: "Quarterly Values Award",
    description:
      "Team-voted award given to the person who most visibly embodied your values. Tie it to a specific behavior example. Make it meaningful, not just ceremonial.",
    cadence: "Quarterly",
  },
  {
    name: "Annual Culture Audit",
    description:
      "Full-team workshop to assess how aligned your culture actually is with your stated values. Use the gut-check questions below. Refresh where needed.",
    cadence: "Annually",
  },
];

const gutCheckQuestions = [
  "On a scale of 1–10, how well are we actually living our values day-to-day?",
  "Where do we feel the biggest disconnect between what we say we value and how we actually operate?",
  "What would have to be true — or change — for that number to be a 10?",
  "Who on our team most consistently embodies our values? What can we learn from them?",
  "Is there any value on our list that we've quietly stopped holding people accountable to?",
];

export default function EmbedValuesPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      {/* Hero header */}
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
              <Heart size={18} style={{ color: "#a28c75" }} />
            </div>
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#a28c75" }}
            >
              Culture Guide
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Living Your Values
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            Defining your values and mission is step one. Making them real — in how you hire, how you meet, how you recognize people, and how you treat patients — is where culture actually gets built.
          </p>
        </div>
      </div>

      {/* Gut-check callout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <p
                className="text-xs tracking-[0.25em] uppercase mb-3"
                style={{ color: "rgba(162,140,117,0.5)" }}
              >
                Start here — the gut check
              </p>
              <h2
                className="font-display text-2xl font-light mb-4"
                style={{ color: "#fffdf6" }}
              >
                Before you build new systems, check the foundation
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.5)" }}>
                Bring your team together and read your mission statement and core values aloud. Then run through these questions — not to judge, but to create honest shared awareness of where you are right now.
              </p>
              <div className="flex flex-col gap-3">
                {gutCheckQuestions.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="font-display text-lg font-light flex-shrink-0 mt-0.5 w-5 text-right"
                      style={{ color: "rgba(162,140,117,0.3)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex-shrink-0 rounded-xl border p-6 md:w-56"
              style={{
                background: "rgba(162,140,117,0.06)",
                borderColor: "rgba(162,140,117,0.15)",
              }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.45)" }}>
                Tip
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                Run this gut-check as a team every 3–6 months. Honest answers about where you&apos;re falling short are more valuable than polished answers about where you&apos;re thriving.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 7 Activation Areas */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(162,140,117,0.5)" }}
          >
            7 areas to activate
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2
          className="font-display text-3xl font-light mb-2"
          style={{ color: "#fffdf6" }}
        >
          Where values come to life
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
          You don&apos;t need to implement all of this at once. Pick one or two areas that feel most urgent, start there, and build from a foundation that actually works.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {activationAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="rounded-xl border p-7 flex flex-col gap-5"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(162,140,117,0.1)",
                      border: "1px solid rgba(162,140,117,0.2)",
                    }}
                  >
                    <Icon size={16} style={{ color: "#a28c75" }} />
                  </div>
                  <div>
                    <h3
                      className="font-display text-lg font-light leading-snug mb-1"
                      style={{ color: "#fffdf6" }}
                    >
                      {area.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed italic"
                      style={{ color: "rgba(162,140,117,0.55)" }}
                    >
                      {area.focus}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(162,140,117,0.08)" }} />

                {/* Examples */}
                <ul className="flex flex-col gap-3">
                  {area.examples.map((ex, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "rgba(255,253,246,0.45)" }}
                    >
                      <span
                        className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                        style={{ background: "#a28c75" }}
                      />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rituals & Rhythms */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(162,140,117,0.5)" }}
          >
            Keep it alive
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2
          className="font-display text-3xl font-light mb-2"
          style={{ color: "#fffdf6" }}
        >
          Rituals &amp; rhythms
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
          One-time workshops don&apos;t build culture. Repeated, intentional rituals do. These are lightweight enough to sustain but meaningful enough to matter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rituals.map((ritual) => (
            <div
              key={ritual.name}
              className="rounded-xl border p-6 flex flex-col gap-4"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.12)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3
                  className="font-display text-base font-light leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  {ritual.name}
                </h3>
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium tracking-wide flex-shrink-0"
                  style={{
                    color: "#a28c75",
                    background: "rgba(162,140,117,0.1)",
                    border: "1px solid rgba(162,140,117,0.2)",
                  }}
                >
                  {ritual.cadence}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                {ritual.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Check-In Cadence */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div
          className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8"
          style={{
            background: "rgba(162,140,117,0.04)",
            borderColor: "rgba(162,140,117,0.15)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(162,140,117,0.1)",
              border: "1px solid rgba(162,140,117,0.22)",
            }}
          >
            <RefreshCw size={22} style={{ color: "#a28c75" }} />
          </div>

          <div className="flex-1">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(162,140,117,0.5)" }}
            >
              Every 3–6 months
            </p>
            <h3
              className="font-display text-xl font-light mb-3"
              style={{ color: "#fffdf6" }}
            >
              Commit to a culture check-in
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
              Culture drifts without maintenance. Choose a cadence — every quarter or twice a year — and protect that time to revisit this work as a team.
            </p>
            <div className="flex flex-col gap-2">
              {[
                "How will we measure whether our culture is becoming more aligned with our values?",
                "Which value do we most need to strengthen right now?",
                "Who will own keeping this alive — and what does that role actually look like day to day?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-2">
                  <MessageSquare
                    size={12}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "rgba(162,140,117,0.45)" }}
                  />
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                    {q}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex-shrink-0 rounded-xl border p-5 md:w-48 text-center"
            style={{
              background: "rgba(162,140,117,0.06)",
              borderColor: "rgba(162,140,117,0.15)",
            }}
          >
            <Calendar size={20} className="mx-auto mb-3" style={{ color: "#a28c75" }} />
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
              Block time on the calendar now. It won&apos;t happen otherwise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
