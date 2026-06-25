import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Building2,
  Share2,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  CheckCircle,
  ExternalLink,
  Zap,
  MapPin,
  Heart,
  Megaphone,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Partnership Guide | Aesthetic Executive",
};

const businessTypes = [
  { label: "Gyms", category: "Fitness" },
  { label: "Boutique fitness studios", category: "Fitness" },
  { label: "Yoga & pilates studios", category: "Fitness" },
  { label: "Health food stores", category: "Wellness" },
  { label: "Wellness centers", category: "Wellness" },
  { label: "IV therapy clinics", category: "Wellness" },
  { label: "Functional medicine practices", category: "Medical" },
  { label: "Chiropractic offices", category: "Medical" },
  { label: "Medical offices", category: "Medical" },
  { label: "Boutique retail stores", category: "Lifestyle" },
  { label: "Bridal boutiques", category: "Lifestyle" },
  { label: "Salons with multiple stylists", category: "Beauty" },
  { label: "Country clubs", category: "Premium" },
  { label: "Apartment complexes (luxury)", category: "Premium" },
  { label: "Corporate wellness programs", category: "Premium" },
];

const categoryColors: Record<string, { color: string; bg: string; border: string }> = {
  Fitness: { color: "rgba(162,140,117,0.9)", bg: "rgba(162,140,117,0.1)", border: "rgba(162,140,117,0.25)" },
  Wellness: { color: "rgba(200,179,163,0.9)", bg: "rgba(200,179,163,0.08)", border: "rgba(200,179,163,0.2)" },
  Medical: { color: "rgba(212,197,184,0.9)", bg: "rgba(212,197,184,0.07)", border: "rgba(212,197,184,0.18)" },
  Lifestyle: { color: "rgba(184,158,138,0.9)", bg: "rgba(184,158,138,0.08)", border: "rgba(184,158,138,0.2)" },
  Beauty: { color: "rgba(162,140,117,0.9)", bg: "rgba(162,140,117,0.08)", border: "rgba(162,140,117,0.2)" },
  Premium: { color: "rgba(200,179,163,0.9)", bg: "rgba(200,179,163,0.07)", border: "rgba(200,179,163,0.18)" },
};

export default function CommunityPartnershipsPage() {
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
              <Building2 size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Local Partnerships
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Strategic Community Partnerships
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            How to build cross-promotional relationships with larger local businesses —
            gyms, wellness studios, boutique retailers, country clubs — to expand your reach,
            build community credibility, and generate qualified leads without paid advertising.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* ── What This Is ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Overview
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div
            className="rounded-2xl border p-8 md:p-10 mb-8"
            style={{
              background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>
              Think of this as
            </p>
            <p className="font-display text-2xl md:text-3xl font-light mb-4 leading-snug" style={{ color: "#fffdf6" }}>
              &ldquo;Community collaboration marketing.&rdquo;
            </p>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
              This is not a &ldquo;track every referral&rdquo; partnership. It&apos;s less about referral credits
              and more about getting in front of new audiences, building local credibility, and
              becoming integrated into your market through genuine mutual support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Megaphone,
                title: "Brand visibility",
                body: "Your practice appears in front of an established audience that already aligns with your ideal client — without buying an ad.",
              },
              {
                icon: Users,
                title: "Audience sharing",
                body: "Both businesses actively promote each other to their communities. A gym with 800 members is a community already built for you to appear in.",
              },
              {
                icon: Star,
                title: "Local authority",
                body: "Being visible in multiple respected local spaces signals that your practice is established, trusted, and part of the community — not just a business that runs Instagram ads.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
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
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ideal Business Types ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 01 — Identify Partners
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            The best partnerships happen when both businesses serve similar clientele but offer
            non-competing services. Look for businesses that have strong foot traffic, established
            communities, and engaged memberships or client bases.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
            {businessTypes.map((b) => {
              const meta = categoryColors[b.category];
              return (
                <div
                  key={b.label}
                  className="rounded-xl border p-4"
                  style={{
                    background: "rgba(162,140,117,0.04)",
                    borderColor: "rgba(162,140,117,0.11)",
                  }}
                >
                  <p className="text-sm leading-snug mb-1.5" style={{ color: "rgba(255,253,246,0.7)" }}>
                    {b.label}
                  </p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      color: meta.color,
                      background: meta.bg,
                      border: `1px solid ${meta.border}`,
                    }}
                  >
                    {b.category}
                  </span>
                </div>
              );
            })}
          </div>

          <div
            className="rounded-xl border p-5"
            style={{
              background: "rgba(162,140,117,0.05)",
              borderColor: "rgba(162,140,117,0.15)",
              borderLeft: "3px solid rgba(162,140,117,0.4)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
              <span style={{ color: "#a28c75" }}>Finding partners:</span>{" "}
              Search Instagram, Facebook, TikTok, and Google for local businesses. Attend Chamber of Commerce events,
              local networking events, charity events, and community wellness events. Your existing patients are also
              a great source — they know and trust other local businesses in the area.
            </p>
          </div>
        </section>

        {/* ── Collaboration Ideas ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 02 — Ways to Collaborate
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            The strongest partnerships are interactive and ongoing — not a one-time flyer drop.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

            {/* Pop-ups */}
            <div
              className="rounded-xl border p-6"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.14)",
              }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <MapPin size={16} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                    Lobby Pop-Ups & Table Setups
                  </h3>
                  <p className="text-xs mt-1" style={{ color: "rgba(162,140,117,0.65)" }}>
                    Set up a branded table in each other&apos;s lobby occasionally
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                    Bring
                  </p>
                  <ul className="space-y-1.5">
                    {["Marketing materials", "Referral cards", "Product samples", "Before-and-after photos", "Event flyers"].map(item => (
                      <li key={item} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                        <span style={{ color: "rgba(162,140,117,0.5)" }}>·</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                    Make it interactive
                  </p>
                  <ul className="space-y-1.5">
                    {["Spin-to-Win wheel", "Giveaway entries", "Interactive games", "QR code signups", "Treatment quizzes"].map(item => (
                      <li key={item} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                        <span style={{ color: "rgba(162,140,117,0.5)" }}>·</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div
              className="rounded-xl border p-6"
              style={{
                background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                borderColor: "rgba(162,140,117,0.14)",
              }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Share2 size={16} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-light" style={{ color: "#fffdf6" }}>
                    Social Media Cross-Promotion
                  </h3>
                  <p className="text-xs mt-1" style={{ color: "rgba(162,140,117,0.65)" }}>
                    Feature each other organically — not as ads
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                    Content formats
                  </p>
                  <ul className="space-y-1.5">
                    {['"Local Business Spotlight"', '"Small Business of the Week"', "Instagram story features", "Collaborative reels", "Joint giveaways"].map(item => (
                      <li key={item} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                        <span style={{ color: "rgba(162,140,117,0.5)" }}>·</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                    What it builds
                  </p>
                  <ul className="space-y-1.5">
                    {["Credibility by association", "Social proof from real businesses", "Organic reach expansion", "Community identity", "Joint audience growth"].map(item => (
                      <li key={item} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,253,246,0.45)" }}>
                        <span style={{ color: "rgba(162,140,117,0.5)" }}>·</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Include in patient materials */}
          <div
            className="rounded-xl border p-6"
            style={{
              background: "rgba(162,140,117,0.04)",
              borderColor: "rgba(162,140,117,0.13)",
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(162,140,117,0.08)", border: "1px solid rgba(162,140,117,0.18)" }}
              >
                <Heart size={16} style={{ color: "#a28c75" }} />
              </div>
              <div>
                <h3 className="font-display text-lg font-light mb-1" style={{ color: "#fffdf6" }}>
                  Include Each Other in Patient Materials
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>
                  One of the easiest and most effective collaboration methods — zero extra work after setup.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div
                className="rounded-lg p-4"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>
                  Example: gym partner
                </p>
                <ul className="space-y-2">
                  {[
                    "Include their free class pass in your medical weight loss folders",
                    "Add their promo flyer to consultation packets",
                    "Mention them during relevant consultations",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={12} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.5)" }} />
                      <span className="text-xs leading-snug" style={{ color: "rgba(255,253,246,0.45)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-lg p-4"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>
                  In return, they
                </p>
                <ul className="space-y-2">
                  {[
                    "Include your new patient offer in their welcome packets",
                    "Display your cards at the front desk",
                    "Mention your services to members",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={12} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(162,140,117,0.5)" }} />
                      <span className="text-xs leading-snug" style={{ color: "rgba(255,253,246,0.45)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Lead Generation ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 03 — Lead Generation
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.5)" }}>
                At pop-up events and lobby setups, always collect contact information. The goal is
                to build your lead database and nurture prospects into booked appointments.
              </p>

              <div
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.14)",
                }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
                  In exchange for spinning / entering, require
                </p>
                <ul className="space-y-2.5 mb-5">
                  {["Name", "Phone number", "Email address"].map(item => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle size={13} style={{ color: "rgba(162,140,117,0.5)" }} />
                      <span className="text-sm" style={{ color: "rgba(255,253,246,0.55)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>
                  What this allows you to do
                </p>
                <ul className="space-y-2">
                  {["Build your lead database", "Continue nurturing leads via text/email", "Convert them into booked patients later"].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }}>·</span>
                      <span className="text-sm" style={{ color: "rgba(255,253,246,0.45)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.5)" }}>
                For this type of partnership, the recommended promotional offer is a simple{" "}
                <span style={{ color: "#a28c75" }}>&ldquo;$50 Gift Card Toward Your First Service.&rdquo;</span>{" "}
                No referral tracking required — just exposure, visibility, and lead generation.
              </p>

              <div
                className="rounded-xl border p-6"
                style={{
                  background: "rgba(162,140,117,0.05)",
                  borderColor: "rgba(162,140,117,0.15)",
                }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
                  Prize ideas — low cost, high perceived value
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    "Complimentary facial",
                    "Small-area laser session",
                    "Skin consultation",
                    "VISIA skin analysis",
                    "Botox consultation",
                    "Mini treatment",
                    "Discounted first treatment",
                    "Membership trial incentives",
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <span style={{ color: "rgba(162,140,117,0.5)", flexShrink: 0 }}>·</span>
                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Outreach ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 04 — Initial Outreach
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            Recommended outreach order: Instagram DM → Email → Phone call → In-person introduction.
            The approach is conversational and collaborative — focus on mutual opportunity, not a sales pitch.
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

My name is [Your Name], and I'm with ABC Med Spa here in [City]. We love supporting and collaborating with other local businesses that share a similar clientele and community focus.

I'd love to connect and explore some opportunities for cross-promotion and collaboration between our businesses. We've been building some really fun local partnerships involving events, pop-ups, social media features, giveaways, and community marketing initiatives, and I think there could be a great opportunity for us to work together.

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
                  Subject line options: &ldquo;Local Collaboration Opportunity&rdquo; · &ldquo;Community Partnership Inquiry&rdquo; · &ldquo;Let&apos;s Collaborate Locally&rdquo;
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

We're currently looking to build stronger relationships with other local businesses that share a similar clientele and community-focused mindset.

We've been creating collaborative partnerships involving:
• Community events
• Social media cross-promotion
• Lobby pop-ups
• Wellness collaborations
• Giveaway campaigns
• Shared promotional opportunities

I think there could be a really great opportunity for our businesses to collaborate in a way that benefits both of our audiences.

I'd love to schedule a quick 10–15 minute call to learn more about your business and discuss potential ways we could work together.

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
                  Phone Call / Meeting Outline
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
                      title: "Introductions",
                      body: "Introduce yourself and your business. Explain why you thought of them specifically.",
                      example: '"We really try to collaborate with businesses that have a similar clientele and strong community presence, and your business immediately came to mind."',
                    },
                    {
                      num: "2",
                      title: "Explain the concept",
                      body: "Discuss community collaboration, cross-promotion, shared exposure, mutual support, and audience sharing. Keep it high-level and casual.",
                      example: null,
                    },
                    {
                      num: "3",
                      title: "Brainstorm collaboration ideas together",
                      body: "Walk through possibilities: lobby pop-ups, event participation, social media features, giveaway collaborations, shared welcome materials, educational wellness events.",
                      example: null,
                    },
                    {
                      num: "4",
                      title: "Discuss promotional materials",
                      body: "Explain referral cards, new patient gift cards, event materials, QR code lead capture, and giveaway incentives — whatever feels most relevant to this partner.",
                      example: null,
                    },
                    {
                      num: "5",
                      title: "Create a simple next step",
                      body: "Schedule a lobby pop-up, exchange promo materials, plan a giveaway, feature each other on social media. Avoid overcomplicating the first collaboration — one action is enough.",
                      example: null,
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
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

        {/* ── Maintaining Relationships ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(162,140,117,0.5)" }}>
              Step 05 — Maintaining the Relationship
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            The strongest partnerships are ongoing, not one-time collaborations. Consistency is what
            separates a meaningful business relationship from a single event that goes nowhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: MessageSquare,
                title: "Monthly check-ins",
                body: "Reach out regularly via text or email to stay on their radar, offer materials, and surface upcoming collaboration opportunities.",
              },
              {
                icon: Calendar,
                title: "Event invitations",
                body: "Always invite partners to your open houses, launch parties, wellness events, and client appreciation events. Their presence strengthens both brands.",
              },
              {
                icon: Zap,
                title: "Shared giveaways",
                body: "\"Summer Wellness Giveaway\" · \"Bridal Glow Package\" · \"Self-Care Package.\" Include services from both businesses for maximum perceived value.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.13)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <card.icon size={16} style={{ color: "#a28c75" }} />
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
                Monthly Check-In Text Template
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

Wanted to see if there are any upcoming events, promotions, or opportunities where we could collaborate or support each other!

Also happy to bring by more promotional materials anytime if needed.`}
              </div>
            </div>
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
              The Long Game
            </p>
            <p className="font-display text-2xl font-light mb-4 leading-snug" style={{ color: "#fffdf6" }}>
              The most successful med spas become deeply integrated into their local communities.
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>
              Focus less on &ldquo;selling&rdquo; and more on creating value, supporting local businesses,
              building relationships, and showing up consistently. Over time, these partnerships become
              one of the most powerful and sustainable marketing channels for your practice.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                "Expand reach organically",
                "Build stronger local credibility",
                "Generate highly qualified leads",
                "Create long-term brand awareness",
                "Develop meaningful business relationships",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={12} style={{ color: "rgba(162,140,117,0.6)" }} />
                  <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>{item}</span>
                </div>
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
