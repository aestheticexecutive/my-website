import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email & Text Marketing | Aesthetic Executive",
  description:
    "How to send the right message to the right patient at the right time — email and text marketing best practices for aesthetic practices.",
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

export default function EmailTextMarketingPage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-12">
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
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <Mail size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Marketing Resources · Retention
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Email & Text Marketing
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            Two of the highest-ROI channels available to your practice — and the most underused.
            Email and text marketing should increase patient retention, reactivate lapsed patients,
            and book more appointments. The goal isn&apos;t to send more messages. It&apos;s to send
            the right message to the right patient at the right time.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── WHY IT MATTERS ── */}
        <div>
          <SectionLabel label="Why It Matters" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🔁", label: "Increase Patient Retention", desc: "Keep existing patients engaged between treatments and coming back consistently." },
              { icon: "💰", label: "Generate Repeat Business", desc: "Every campaign is an opportunity to re-engage a patient who hasn't booked in months." },
              { icon: "😴", label: "Reactivate Inactive Patients", desc: "Your dormant list is one of the most valuable assets in your practice — most practices ignore it." },
              { icon: "📅", label: "Convert Leads into Consults", desc: "Automated nurture sequences turn cold leads into booked consultations over time." },
              { icon: "📦", label: "Sell Treatment Packages", desc: "Educate patients on bundling and pre-purchasing to increase average ticket value." },
              { icon: "✨", label: "Launch New Treatments", desc: "Multi-touch campaigns build anticipation and awareness before a new service goes live." },
              { icon: "🗓️", label: "Fill Slower Days", desc: "Last-minute openings can be filled with a single well-timed text to the right segment." },
              { icon: "🤝", label: "Build Patient Relationships", desc: "Consistent, helpful communication keeps your practice top-of-mind between visits." },
              { icon: "🧠", label: "Educate Before the Visit", desc: "Patients who arrive informed are easier to convert and more satisfied with outcomes." },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── EMAIL VS TEXT ── */}
        <div>
          <SectionLabel label="Email vs. Text — When to Use Each" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            These channels aren&apos;t competing — they&apos;re complementary. Use them for different purposes
            based on what the message needs to accomplish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Email */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "linear-gradient(145deg, rgba(200,160,80,0.1) 0%, rgba(0,0,0,0) 100%)", border: "1px solid rgba(200,160,80,0.25)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,160,80,0.15)", border: "1px solid rgba(200,160,80,0.3)" }}>
                  <span className="text-base">📧</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#c8a050" }}>Email</p>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>Depth, education, visuals</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  "Treatment education and spotlights",
                  "Before & after photo galleries",
                  "Provider introductions",
                  "Blog content repurposing",
                  "Event invitations",
                  "Skincare tips and education",
                  "Financing information",
                  "Monthly features",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="text-xs flex-shrink-0 mt-0.5" style={{ color: "#c8a050" }}>✓</span>
                    <p className="text-sm" style={{ color: "rgba(255,253,246,0.7)" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 rounded-lg px-4 py-3 text-xs leading-relaxed"
                style={{ background: "rgba(200,160,80,0.08)", color: "rgba(200,160,80,0.9)" }}
              >
                Best for: building relationships, educating, and nurturing patients over time.
              </div>
            </div>

            {/* Text */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "linear-gradient(145deg, rgba(100,160,220,0.09) 0%, rgba(0,0,0,0) 100%)", border: "1px solid rgba(100,160,220,0.22)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(100,160,220,0.12)", border: "1px solid rgba(100,160,220,0.28)" }}>
                  <span className="text-base">💬</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#7aabcf" }}>Text / SMS</p>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>Urgency, action, immediacy</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  "Last-minute appointment openings",
                  "Limited-time offers with a deadline",
                  "Appointment reminders",
                  "Birthday messages",
                  "Expiring packages or credits",
                  "Event reminders",
                  "Direct booking links",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="text-xs flex-shrink-0 mt-0.5" style={{ color: "#7aabcf" }}>✓</span>
                    <p className="text-sm" style={{ color: "rgba(255,253,246,0.7)" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 rounded-lg px-4 py-3 text-xs leading-relaxed"
                style={{ background: "rgba(100,160,220,0.07)", color: "rgba(122,171,207,0.9)" }}
              >
                Best for: driving immediate action — bookings, reminders, and time-sensitive offers.
              </div>
            </div>
          </div>
        </div>

        {/* ── FREQUENCY ── */}
        <div>
          <SectionLabel label="Recommended Frequency" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Email frequency */}
            <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(200,160,80,0.2)" }}>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">📧</span>
                <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(200,160,80,0.7)" }}>Email Frequency</p>
              </div>
              <div className="flex items-end gap-3 mb-5">
                <div className="text-6xl font-light leading-none" style={{ color: "#c8a050" }}>2–4</div>
                <div className="pb-1 text-sm" style={{ color: "rgba(255,253,246,0.4)" }}>campaigns / month</div>
              </div>
              <div className="flex gap-2 mb-5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-9 rounded-lg flex items-center justify-center text-xs"
                    style={{
                      background: "rgba(200,160,80,0.15)",
                      border: "1px solid rgba(200,160,80,0.3)",
                      color: "#c8a050",
                    }}
                  >
                    ✓
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>
                <p>· Week 1: Monthly feature or treatment spotlight</p>
                <p>· Week 2: Educational content or blog post</p>
                <p>· Week 3: Before & after or social proof</p>
                <p>· Week 4: CTA-focused offer or event</p>
              </div>
            </div>

            {/* Text frequency */}
            <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(100,160,220,0.2)" }}>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">💬</span>
                <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(100,160,220,0.7)" }}>Text Frequency</p>
              </div>
              <div className="flex items-end gap-3 mb-5">
                <div className="text-6xl font-light leading-none" style={{ color: "#7aabcf" }}>2–6</div>
                <div className="pb-1 text-sm" style={{ color: "rgba(255,253,246,0.4)" }}>campaigns / month</div>
              </div>
              <div className="flex gap-1.5 mb-5">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-9 rounded-lg flex items-center justify-center text-xs"
                    style={{
                      background: i < 4 ? "rgba(100,160,220,0.12)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${i < 4 ? "rgba(100,160,220,0.28)" : "rgba(255,255,255,0.07)"}`,
                      color: i < 4 ? "#7aabcf" : "rgba(255,255,255,0.15)",
                    }}
                  >
                    {i < 4 ? "✓" : "—"}
                  </div>
                ))}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                Only send texts when the message is genuinely relevant and time-sensitive.
                More texts ≠ more bookings — irrelevant messages lead to opt-outs.
              </p>
            </div>
          </div>
        </div>

        {/* ── EVERYONE VS SEGMENTS ── */}
        <div>
          <SectionLabel label="Who to Send To" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Not every message belongs to your entire list. Knowing when to broadcast vs. when to target
            is the difference between a 2% open rate and a 40% one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full database */}
            <div className="rounded-2xl p-7" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.2)" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}>
                  <span className="text-base">📢</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>Full Database</p>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>When it applies to everyone</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  "Holiday hours and closures",
                  "Major practice announcements",
                  "New provider introductions",
                  "Practice updates and news",
                  "Community involvement",
                  "Broad educational content",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#a28c75" }} />
                    <p className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Targeted segments */}
            <div className="rounded-2xl p-7" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.2)" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}>
                  <span className="text-base">🎯</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>Targeted Segments</p>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.4)" }}>When relevance is everything</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  "Treatment interests and past history",
                  "Specific skin concerns or treatment goals",
                  "Maintenance reminders (past their interval)",
                  "Consultation follow-ups",
                  "Inactive patients (6–18 months)",
                  "Members and VIP patients",
                  "Skincare product purchasers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#a28c75" }} />
                    <p className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── WHAT EVERY EMAIL SHOULD INCLUDE ── */}
        <div>
          <SectionLabel label="What Every Email Should Include" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", label: "A Compelling Subject Line", desc: "This is what determines open rate. Use curiosity, specificity, or urgency. 'July Feature: 25% Off Morpheus8' outperforms 'Our July Newsletter.'" },
              { num: "02", label: "Professional Visuals", desc: "Before & afters, clean imagery, and on-brand design. Emails with strong visuals get significantly higher click rates." },
              { num: "03", label: "One Primary CTA", desc: "Don't give patients five things to click. One clear action — Book Now, Read More, Claim Your Offer — performs better every time." },
              { num: "04", label: "Mobile-Friendly Formatting", desc: "Over 60% of emails are opened on mobile. Short paragraphs, large tap targets, and single-column layout are non-negotiable." },
              { num: "05", label: "Educational, Patient-Focused Copy", desc: "Write about their results, not about you. 'See how patients are treating [concern]' beats 'We offer [treatment name].'" },
              { num: "06", label: "Clickable CTA Buttons", desc: "A button converts better than a text link. Use contrasting color, clear label, and keep the button above the fold when possible." },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-xl p-5"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <p className="text-xs font-medium mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>{item.num}</p>
                <p className="text-sm font-medium mb-2" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TEXT BEST PRACTICES ── */}
        <div className="rounded-2xl p-8" style={{ background: "linear-gradient(145deg, rgba(100,160,220,0.08) 0%, rgba(0,0,0,0) 100%)", border: "1px solid rgba(100,160,220,0.2)" }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💬</span>
            <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>Text Marketing Best Practices</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Keep it under 160 characters", desc: "Messages longer than 160 characters split into multiple texts and feel spammy. Lead with the offer, include the link, done." },
              { label: "Personalize with first name", desc: "\"Hi Sarah\" beats \"Hi there\" every time. Even simple personalization meaningfully improves response rates." },
              { label: "One clear action", desc: "One ask per text. Not \"book, call us, or visit our website\" — just \"Book your spot here: [link].\" Choices reduce action." },
              { label: "Include urgency", desc: "A reason to act now — a limited number of appointments, an offer ending Friday, a spot that opens tomorrow." },
              { label: "Always include a link", desc: "Every text should end with a direct booking link or landing page. Don't make them search for how to take action." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(100,160,220,0.1)", border: "1px solid rgba(100,160,220,0.28)" }}>
                  <span className="text-xs" style={{ color: "#7aabcf" }}>✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 15 AUTOMATED CAMPAIGNS ── */}
        <div>
          <SectionLabel label="15 Automated Campaigns Every Practice Should Have" />
          <p className="text-sm leading-relaxed mb-8 -mt-2" style={{ color: "rgba(255,253,246,0.45)" }}>
            Set these up once. They run in the background 24/7, nurturing and reactivating patients without
            any manual effort from your team.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { num: "01", icon: "👋", label: "Welcome Series", desc: "Nurture new leads before they book their first consult" },
              { num: "02", icon: "📋", label: "Consultation Follow-Up", desc: "Follow up after consults who didn't book on the spot" },
              { num: "03", icon: "💉", label: "Treatment Interest Drip", desc: "Educate patients who've shown interest in a treatment" },
              { num: "04", icon: "😴", label: "Inactive Reactivation", desc: "Re-engage patients inactive for 6–18 months" },
              { num: "05", icon: "🗓️", label: "Maintenance Reminders", desc: "Remind patients when they're due for their next session" },
              { num: "06", icon: "🎂", label: "Birthday Campaign", desc: "A personalized offer on (or near) their birthday" },
              { num: "07", icon: "⭐", label: "Review Request", desc: "Ask satisfied patients for a Google review after treatment" },
              { num: "08", icon: "🩺", label: "Post-Treatment Care", desc: "Aftercare instructions delivered at the right time" },
              { num: "09", icon: "📅", label: "Abandoned Consultation", desc: "Follow up when someone books, then cancels without rescheduling" },
              { num: "10", icon: "✨", label: "New Treatment Launch", desc: "Multi-touch campaign introducing a new service" },
              { num: "11", icon: "🌟", label: "Monthly Feature", desc: "Announce and promote each month's featured treatment" },
              { num: "12", icon: "💎", label: "VIP Offers", desc: "Exclusive early access and offers for your top patients" },
              { num: "13", icon: "🎉", label: "Event Promotion", desc: "Reminder sequence leading up to in-practice events" },
              { num: "14", icon: "🧴", label: "Retail Replenishment", desc: "Remind skincare purchasers when they're likely running low" },
              { num: "15", icon: "🤝", label: "Referral Program", desc: "Prompt happy patients to refer a friend with an incentive" },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-xl p-4"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs font-medium" style={{ color: "rgba(162,140,117,0.45)" }}>{item.num}</span>
                </div>
                <p className="text-xs font-medium mb-1.5 leading-snug" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 10 WAYS TO USE ── */}
        <div>
          <SectionLabel label="10 Ways to Use Email & Text Right Now" />
          <div className="space-y-3">
            {[
              { num: 1, label: "Welcome new leads with an automated nurture sequence", desc: "The moment someone opts in, a welcome series should introduce your practice, showcase results, and invite them to book a consultation." },
              { num: 2, label: "Continue conversations with patients who haven't booked yet", desc: "If a patient expressed interest in a treatment but didn't schedule, a 3–5 email drip sequence keeps your practice in front of them." },
              { num: 3, label: "Reactivate patients inactive for 6–18 months", desc: "Your dormant list is full of patients who already trust you. One well-crafted reactivation campaign often outperforms new patient ads." },
              { num: 4, label: "Educate existing patients on additional services", desc: "A Botox patient may not know you offer skin resurfacing. Educational campaigns introduce services patients haven't considered yet." },
              { num: 5, label: "Launch new treatments with a multi-touch campaign", desc: "Don't just post once on Instagram. A launch campaign across email and text creates awareness, education, and urgency over 2–4 weeks." },
              { num: 6, label: "Promote monthly features instead of discounting", desc: "A well-crafted email that leads with value — 'This month we're spotlighting Morpheus8' — outperforms a 20%-off blast." },
              { num: 7, label: "Market events with multiple reminder touchpoints", desc: "One email is never enough. An event sequence includes a save-the-date, a reminder 1 week out, and a final reminder the day before." },
              { num: 8, label: "Send automated maintenance reminders", desc: "When a patient is due for their next Botox or filler session, a timely text with a booking link fills the schedule automatically." },
              { num: 9, label: "Reward VIP patients with exclusive offers", desc: "Your top 20% of patients deserve early access and personalized treatment. Exclusive VIP campaigns improve loyalty and LTV." },
              { num: 10, label: "Cross-sell complementary treatments and skincare", desc: "A patient who just got a peel is a natural candidate for a homecare product recommendation or a microneedling series." },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-xl px-5 py-4 flex items-start gap-4"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-medium"
                  style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
                >
                  {item.num}
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── METRICS ── */}
        <div>
          <SectionLabel label="Key Metrics to Track" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📂", label: "Open Rate", note: "Email: target 35–50%+. Low? Your subject lines need work." },
              { icon: "🔗", label: "Click-Through Rate", note: "CTR: % of total recipients who clicked. Target 2–5% for email." },
              { icon: "👁️", label: "Click-to-Open Rate", note: "CTOR: % of openers who clicked. Better measure of content quality." },
              { icon: "📅", label: "Conversion Rate", note: "Appointments booked / messages sent. The most important number." },
              { icon: "💰", label: "Revenue Generated", note: "Track campaign-attributed revenue, not just clicks." },
              { icon: "📈", label: "Appointments Booked", note: "The clearest signal that your campaign worked." },
              { icon: "👋", label: "Unsubscribe Rate", note: "Under 0.2% is healthy. Spikes mean content relevance is off." },
              { icon: "🌱", label: "Database Growth", note: "Net new subscribers per month. A shrinking list is a warning sign." },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5 flex flex-col items-start"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <span className="text-2xl mb-3">{item.icon}</span>
                <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 80/20 RULE ── */}
        <div>
          <SectionLabel label="The 80/20 Rule" />
          <div className="flex flex-col md:flex-row gap-5 items-stretch">

            {/* Visual */}
            <div
              className="rounded-2xl p-7 md:w-72 flex-shrink-0"
              style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}
            >
              <p className="text-xs tracking-[0.15em] uppercase mb-6" style={{ color: "rgba(162,140,117,0.6)" }}>Message split</p>

              {/* Bar */}
              <div className="relative h-40 rounded-xl overflow-hidden mb-5" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div
                  className="absolute inset-x-0 top-0 flex items-center justify-center"
                  style={{ height: "80%", background: "linear-gradient(180deg, rgba(162,140,117,0.2) 0%, rgba(162,140,117,0.12) 100%)", borderBottom: "1px dashed rgba(162,140,117,0.3)" }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-light mb-1" style={{ color: "#a28c75" }}>80%</div>
                    <div className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>Education</div>
                  </div>
                </div>
                <div
                  className="absolute inset-x-0 bottom-0 flex items-center justify-center"
                  style={{ height: "20%", background: "rgba(200,160,80,0.15)" }}
                >
                  <div className="text-center">
                    <span className="text-xl font-light" style={{ color: "#c8a050" }}>20%</span>
                    <span className="text-xs ml-2" style={{ color: "rgba(255,253,246,0.4)" }}>Promotion</span>
                  </div>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-center" style={{ color: "rgba(255,253,246,0.4)" }}>
                80% of your messages should educate, entertain, or add value. Only 20% should directly promote.
              </p>
            </div>

            {/* Explanation */}
            <div className="flex-1 space-y-4">
              <div className="rounded-xl p-5" style={{ background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.18)" }}>
                <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>80% — Educate and build trust</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Treatment explanations, before & afters, patient stories, skincare tips, blog content,
                  provider introductions, FAQ answers. This content builds the relationship that makes
                  the 20% more effective.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ background: "rgba(200,160,80,0.07)", border: "1px solid rgba(200,160,80,0.18)" }}>
                <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>20% — Promote and convert</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Monthly feature campaigns, limited availability, event promotions, VIP offers,
                  last-minute openings. Because you&apos;ve been providing value, patients actually
                  look forward to these — instead of tuning them out.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.12)" }}>
                <p className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>Repurpose everything</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Every email can become a blog post, a social caption, a Google Business Profile update,
                  a short-form video script, and a sales talking point. Write once, distribute everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── FINAL TAKEAWAY ── */}
        <div className="rounded-2xl p-8" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.18)" }}>
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>The bottom line</p>
          <p className="font-display text-xl font-light leading-relaxed" style={{ color: "#fffdf6" }}>
            Successful email and text marketing is built on five things: relevance, consistency, segmentation, automation, and measurement.
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "rgba(255,253,246,0.6)" }}>
            Every campaign should educate, build trust, and encourage one clear action. The practices that treat their patient list as an asset — and communicate with it consistently — outperform those that rely exclusively on paid acquisition every single time.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Relevance", "Consistency", "Segmentation", "Automation", "Measurement"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-wide"
                style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)", color: "#a28c75" }}
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
