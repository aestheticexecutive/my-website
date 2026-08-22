import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Compass,
  Fingerprint,
  ListChecks,
  BarChart2,
  Palette,
  Share2,
  TrendingUp,
  Search,
  Target,
  Building2,
  Handshake,
  Gift,
  CalendarDays,
  CalendarRange,
  Star,
  Mail,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Strategy Playbook | Aesthetic Executive",
  description:
    "A complete framework for building, documenting, and measuring your practice's marketing strategy — Aim, Identity, Method, and Scorecard.",
};

function PillarHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-medium mt-1"
        style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
      >
        {number}
      </div>
      <div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>{title}</h2>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,253,246,0.5)" }}>{subtitle}</p>
      </div>
    </div>
  );
}

function ResourceLink({ label, href, external }: { label: string; href: string; external?: boolean }) {
  const className =
    "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors hover:opacity-80";
  const style = { background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)", color: "#a28c75" };
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {label}
        <ExternalLink size={10} />
      </a>
    );
  }
  return (
    <Link href={href} className={className} style={style}>
      {label}
      <ArrowRight size={10} />
    </Link>
  );
}

interface ChannelSection {
  key: string;
  label: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  body: string;
  links: { label: string; href: string; external?: boolean }[];
}

const brandingChannel: ChannelSection = {
  key: "branding",
  label: "Branding",
  icon: Palette,
  body: "Everything that makes the brand recognizable and repeatable — logo, colors, fonts, imagery, voice, and the client it's built for. This is the foundation every other channel draws from.",
  links: [
    { label: "Brand Kit Builder", href: "/tools/brand-kit-builder.html", external: true },
    { label: "Why Your Brand Kit Matters", href: "/members/resources/marketing/brand-kit" },
    { label: "Ideal Client Builder", href: "/tools/ideal-client-builder.html", external: true },
  ],
};

const promoCalendarChannel: ChannelSection = {
  key: "promo-calendar",
  label: "Promo Calendar",
  icon: CalendarRange,
  body: "Plan and track every feature, campaign, and event across the year in one place — the calendar's categories match every Method channel below, so you can see at a glance where your planned activity actually sits.",
  links: [{ label: "Promo Calendar Tool", href: "/tools/promo-calendar.html", external: true }],
};

const methodChannels: ChannelSection[] = [
  {
    key: "brand-consistency",
    label: "Brand Consistency",
    icon: ListChecks,
    body: "Brand consistency is what turns a one-time visit into a returning, referring patient — because they know exactly what to expect every time. Every touchpoint (website, social, phone, in-clinic, follow-up) should be intentionally choreographed to feel like the same brand, and that requires ongoing auditing: content review, approval workflows, secret shopping, and quarterly brand audits. Staff alignment matters just as much as the visual identity — every team member needs to understand the tone and why consistency protects long-term brand equity.",
    links: [],
  },
  {
    key: "organic-social",
    label: "Organic Social Media",
    icon: Share2,
    body: "A long-term brand-building tool, not an instant revenue driver — engagement and reach typically grow before bookings do. Consistency beats virality: showing up regularly builds the familiarity and trust that eventually supports paid ads, referrals, and word-of-mouth.",
    links: [
      { label: "Social Media Best Practices", href: "/members/resources/marketing/social-media" },
      { label: "Social Media Planner", href: "/tools/social-media-planner.html", external: true },
    ],
  },
  {
    key: "paid-social",
    label: "Paid Social Media",
    icon: TrendingUp,
    body: "Advertise household-name services with the price on the ad, offer a new-patient promotion, and route leads straight to DMs for fast, consistent follow-up. Keep creative simple and branding consistent, start around $50/day, and track ROAS closely.",
    links: [{ label: "Meta Ads", href: "/members/resources/marketing/meta-ads" }],
  },
  {
    key: "seo",
    label: "SEO",
    icon: Search,
    body: "Search visibility is compounding — the practices that show up consistently in Google reviews, local search, and organic content are the ones patients trust first. This covers everything from Google Business Profile and reviews to landing pages and blog content built to rank.",
    links: [
      { label: "Treatment Landing Pages", href: "/members/resources/marketing/landing-pages" },
      { label: "SEO & Online Visibility Guide", href: "/members/resources/marketing/seo-guide" },
      { label: "Google Business Profile", href: "/members/resources/marketing/google-business-profile" },
      { label: "Google Reviews", href: "/members/resources/marketing/google-reviews" },
      { label: "Blog Strategy", href: "/members/resources/marketing/blog-strategy" },
    ],
  },
  {
    key: "google-ads",
    label: "Google Ads",
    icon: Target,
    body: "Performance varies widely by location, population, and market saturation — competitive areas need higher budgets and tighter strategy. Proper keyword and cost-per-click research before setting expectations, and tight tracking of ROAS, cost per lead, and cost per acquisition, are what make Google Ads worth running.",
    links: [{ label: "Google Ads", href: "/members/resources/marketing/google-ads" }],
  },
  {
    key: "community-presence",
    label: "Community Presence",
    icon: Building2,
    body: "Building brand awareness through intentional, local relationships — synergistic business partnerships, grassroots community engagement, and selective investment in higher-cost opportunities based on long-term brand equity rather than immediate ROI.",
    links: [{ label: "Strategic Community Partnerships", href: "/members/resources/marketing/community-partnerships" }],
  },
  {
    key: "local-partners",
    label: "Local Partners",
    icon: Handshake,
    body: "High-value, low-risk partnerships with small local influencers and business owners who share a similar customer profile — a small discount, complimentary treatments in exchange for content, digital referral cards, and occasional partner-only appreciation events.",
    links: [{ label: "Referral Partner Program", href: "/members/resources/marketing/referral-partners" }],
  },
  {
    key: "patient-referral",
    label: "Patient Referral Program",
    icon: Gift,
    body: "A referral from a current patient is your best-quality lead — they already want the treatment and already trust you. The program only works if the team spends real time discussing it with patients and makes it effortless to understand and use, at every point in the patient journey.",
    links: [{ label: "Patient Referral Program", href: "/members/resources/marketing/patient-referral" }],
  },
  {
    key: "events",
    label: "Events",
    icon: CalendarDays,
    body: "Events aren't one-size-fits-all — success depends on your community, how connected patients are to the brand, and how intentionally the event is planned. They should feel exclusive, not routine: 2–4 per year is ideal for most practices, built around a theme rather than a single treatment, and designed for engagement over long lecture-style presentations.",
    links: [
      { label: "Event Planning", href: "/members/resources/marketing/event-planning" },
      { label: "Event Planner Tool", href: "/tools/event-planner.html", external: true },
    ],
  },
  {
    key: "monthly-features",
    label: "Monthly Features",
    icon: Star,
    body: "Language matters — “features,” not “promotions.” Monthly features should add value rather than just discount, converting already-trusting patients into services they haven't tried yet. Track performance every month to guide what gets featured next.",
    links: [{ label: "Monthly Features", href: "/members/resources/marketing/monthly-features" }],
  },
  {
    key: "email-text",
    label: "Email & Text Blasts",
    icon: Mail,
    body: "Email is the primary, consistent channel to educate and nurture your full patient base — start with three touchpoints a month (promotions/updates, educational content, and a members-only perk). Text is used selectively and intentionally, targeted to specific segments, to avoid patient fatigue.",
    links: [
      { label: "Email & Text Marketing", href: "/members/resources/marketing/email-text-marketing" },
      { label: "Automated Campaigns", href: "/members/resources/marketing/automated-campaigns" },
    ],
  },
  {
    key: "patient-experience",
    label: "Patient Experience Optimization",
    icon: Camera,
    body: "Designing the patient journey so education, recommendations, and next steps come up naturally — never as a sales pitch. This includes consistent before-and-after photography to showcase real results, and making sure your in-house membership and rewards programs are actively promoted and tracked, not just available.",
    links: [
      { label: "Before & After Photography", href: "/members/resources/marketing/before-after-photos" },
      { label: "Maximizing Memberships + Rewards Guide", href: "/members/resources/marketing/membership-rewards-guide" },
      { label: "Membership + Rewards Audit Tool", href: "/members/resources/marketing/membership-rewards-audit" },
    ],
  },
];

const aimGoals = [
  { label: "Revenue Stability & Growth", body: "Define clear monthly and annual revenue targets, build consistent repeatable revenue streams, and reduce reliance on one-off or promotional sales." },
  { label: "Profitability & Financial Health", body: "Prioritize predictable profitability over top-line growth alone, keep expenses disciplined, and optimize operational efficiency to protect margin." },
  { label: "Brand Awareness & Market Positioning", body: "Increase visibility in the local market and establish the practice as a trusted, go-to destination with clear, differentiated messaging." },
  { label: "Brand Experience Consistency", body: "Define what the brand should feel like at every touchpoint and standardize the client journey from first interaction through follow-up." },
  { label: "Operational Stability & Scalability", body: "Build systems and procedures that reduce chaos, support growth without burning out the team, and let the business scale intentionally." },
  { label: "Recurring & Predictable Revenue", body: "Grow recurring revenue through memberships, packages, or programs, and increase retention and lifetime value to reduce month-to-month volatility." },
  { label: "Service & Product Mix Optimization", body: "Identify and strategically grow priority services, and balance high-demand, high-margin, and long-term value offerings." },
  { label: "Team Development & Culture", body: "Build a skilled, engaged, aligned team with clear expectations, accountability, and growth paths." },
];

const identityQuestions = [
  "What do you want your brand to make people feel?",
  "What words embody the brand?",
  "What phrases embody the brand?",
  "What color scheme, fonts, logo, and imagery embody the brand?",
  "What is the brand's differentiator?",
  "What is the brand's slogan?",
  "How is the brand embodied through the patient experience?",
];

const analyticsGroups = [
  {
    title: "Spend & Investment",
    items: [
      { label: "Total Ad Spend", body: "What you invested directly into paid advertising for a specific campaign." },
      { label: "Total Agency Fee", body: "Cost associated with strategy, creative, and management support." },
      { label: "Total Spent", body: "The full cost of running the campaign — ad spend plus agency fees." },
    ],
  },
  {
    title: "Revenue Impact",
    items: [
      { label: "New Patient Revenue", body: "Revenue generated exclusively from first-time patients tied to the campaign." },
      { label: "All Patient Revenue", body: "Total revenue influenced by the campaign, including existing patients." },
    ],
  },
  {
    title: "Lead & Conversion Flow",
    items: [
      { label: "Total Impressions", body: "How many times the campaign was seen." },
      { label: "Total New Leads", body: "People who expressed interest — forms, calls, messages." },
      { label: "Total New Patient Consults", body: "Leads that converted into scheduled consultations." },
      { label: "Total New Patient Procedures", body: "Consults that converted into treatments." },
      { label: "Total Overall Patient Visits", body: "Total visits generated, including new and established patients." },
    ],
  },
  {
    title: "Conversion Rates",
    items: [
      { label: "Impression → Lead %", body: "How compelling the messaging and offer are." },
      { label: "Lead → Consult %", body: "How effective your follow-up, scheduling, and front-end process is." },
      { label: "Consult → Procedure %", body: "How strong your consultation experience and treatment alignment are." },
    ],
  },
  {
    title: "Return on Ad Spend",
    items: [
      { label: "New Patient ROAS", body: "Revenue from new patients divided by total spend." },
      { label: "All Patient ROAS", body: "Total revenue influenced divided by total spend." },
    ],
  },
  {
    title: "Growth & Loyalty (Monthly)",
    items: [
      { label: "Total New Members", body: "Patients enrolled in memberships this month." },
      { label: "Total Members", body: "Overall active membership base." },
      { label: "Total Patient Referrals", body: "New patients referred by existing patients." },
      { label: "Total Google Reviews", body: "Review volume growth indicating brand trust and visibility." },
    ],
  },
  {
    title: "Revenue Performance (Monthly)",
    items: [
      { label: "Revenue from Features", body: "Revenue tied to promoted or featured services." },
      { label: "Product Revenue & Attachment Rate", body: "Retail performance, and how often products are added to service visits." },
    ],
  },
  {
    title: "Operational & Financial Health (Monthly)",
    items: [
      { label: "Overall Revenue", body: "Total monthly revenue." },
      { label: "Re-Booking Rate", body: "Percentage of patients scheduling their next visit." },
      { label: "Average Invoice Value", body: "Revenue per visit." },
    ],
  },
  {
    title: "Brand Growth (Digital Presence)",
    items: [
      { label: "Instagram & TikTok Follower Count", body: "Brand awareness growth and content resonance over time." },
    ],
  },
];

export default function MarketingStrategyPlaybookPage() {
  return (
    <div className="bg-[#170009] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link
            href="/members/resources/marketing"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Marketing Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}>
              <Compass size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>Marketing Resources · Strategy</p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Marketing Strategy Playbook
          </h1>
          <p className="text-base max-w-2xl leading-relaxed mb-8" style={{ color: "rgba(255,253,246,0.6)" }}>
            A complete framework for building a marketing strategy that actually holds together —
            what you&apos;re aiming for, who you are, how you&apos;ll execute across every channel,
            and how you&apos;ll know if it&apos;s working. Every section links to the deeper guide
            and tool for that channel.
          </p>
          <Link
            href="/members/resources/marketing/marketing-strategy-tool"
            className="inline-flex items-center gap-2 px-6 h-11 rounded text-xs font-medium tracking-[0.15em] uppercase transition-all hover:opacity-90"
            style={{ background: "#a28c75", color: "#170009" }}
          >
            Open the Strategy Builder
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* Framework overview */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>The Framework</p>
          <h2 className="font-display text-2xl font-light mb-8" style={{ color: "#fffdf6" }}>
            Four pillars: Aim, Identity, Method, Scorecard
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { letter: "A", word: "Aim", q: "What are you aiming for? What are your goals?" },
              { letter: "I", word: "Identity", q: "Who are you? What is your brand, and how do you maintain it?" },
              { letter: "M", word: "Method", q: "How are you executing? What is your strategy to hit your goals?" },
              { letter: "S", word: "Scorecard", q: "Did you hit your target? Where do you need to pivot?" },
            ].map((p) => (
              <div key={p.word} className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium flex-shrink-0" style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75", border: "1px solid rgba(162,140,117,0.3)" }}>
                    {p.letter}
                  </span>
                  <span className="text-lg font-medium" style={{ color: "#fffdf6" }}>{p.word}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>{p.q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AIM */}
        <div>
          <PillarHeader number="1" title="Aim" subtitle="Your guiding light — the 8 strategic focus areas that every marketing decision should ladder up to." />
          <div className="grid sm:grid-cols-2 gap-4">
            {aimGoals.map((g, i) => (
              <div key={g.label} className="rounded-lg p-5" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                <p className="text-xs mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>{i + 1}</p>
                <p className="text-sm font-medium mb-2" style={{ color: "#fffdf6" }}>{g.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IDENTITY */}
        <div>
          <PillarHeader number="2" title="Identity" subtitle="Your brand is the perception people have of your business — how it feels, not just how it looks. It's shaped by every interaction, and it exists whether you define it or not." />

          <div className="rounded-xl p-6 mb-6" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>What makes up a brand</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Visual identity — logo, colors, design, environment", "Voice and tone — how you communicate and educate", "Experience — how clients are treated at every stage", "Consistency — reliability of expectations and delivery", "Reputation — what people say when you're not in the room"].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,253,246,0.7)" }}>
                  <span style={{ color: "#a28c75" }}>·</span> {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.6)" }}>
            Intentional branding matters because inconsistency creates confusion and erodes trust —
            while clear standards create alignment across the team and predictable experiences for
            patients. Strong, intentional brands grow faster, more sustainably, and support premium pricing.
          </p>

          <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Start here</p>
          <div className="space-y-2 mb-6">
            {identityQuestions.map((q) => (
              <div key={q} className="flex items-start gap-3 rounded-lg px-4 py-3" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.1)" }}>
                <Fingerprint size={13} style={{ color: "#a28c75", flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm" style={{ color: "rgba(255,253,246,0.75)" }}>{q}</span>
              </div>
            ))}
          </div>

          <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>Put it into practice</p>
          <div className="rounded-xl p-6" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.12)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}>
                <Palette size={15} style={{ color: "#a28c75" }} />
              </div>
              <h3 className="text-base font-medium" style={{ color: "#fffdf6" }}>{brandingChannel.label}</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.55)" }}>{brandingChannel.body}</p>
            <div className="flex flex-wrap gap-2">
              {brandingChannel.links.map((link) => (
                <ResourceLink key={link.href} label={link.label} href={link.href} external={link.external} />
              ))}
            </div>
          </div>
        </div>

        {/* METHOD */}
        <div>
          <PillarHeader number="3" title="Method" subtitle="How you're executing across every channel — the day-to-day work that puts the brand and the aim into action." />

          {(() => {
            const Icon = promoCalendarChannel.icon;
            return (
              <div className="rounded-xl p-6 mb-6" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}>
                    <Icon size={15} style={{ color: "#a28c75" }} />
                  </div>
                  <h3 className="text-base font-medium" style={{ color: "#fffdf6" }}>{promoCalendarChannel.label}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.55)" }}>{promoCalendarChannel.body}</p>
                <div className="flex flex-wrap gap-2">
                  {promoCalendarChannel.links.map((link) => (
                    <ResourceLink key={link.href} label={link.label} href={link.href} external={link.external} />
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="space-y-4">
            {methodChannels.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.key} className="rounded-xl p-6" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.12)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}>
                      <Icon size={15} style={{ color: "#a28c75" }} />
                    </div>
                    <h3 className="text-base font-medium" style={{ color: "#fffdf6" }}>{c.label}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.55)" }}>{c.body}</p>
                  {c.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {c.links.map((link) => (
                        <ResourceLink key={link.href} label={link.label} href={link.href} external={link.external} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SCORECARD */}
        <div>
          <PillarHeader number="4" title="Scorecard" subtitle="Did you hit your target? Marketing performance should be reviewed monthly — to evaluate effectiveness, guide budget allocation, optimize campaigns, and support data-driven decisions." />

          {/* Lead Conversion */}
          <div className="rounded-xl p-6 mb-6" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}>
                <Handshake size={15} style={{ color: "#a28c75" }} />
              </div>
              <h3 className="text-base font-medium" style={{ color: "#fffdf6" }}>Lead Conversion</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.55)" }}>
              Every marketing channel is only as good as what happens after someone raises their hand.
              A step-by-step system for responding to, nurturing, and converting new patient inquiries
              — response time, the call framework, and the post-consult nurture sequence.
            </p>
            <ResourceLink label="Lead Conversion Playbook" href="/members/resources/marketing/lead-conversion" />
          </div>

          {/* Marketing Analytics */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.22)" }}>
              <BarChart2 size={15} style={{ color: "#a28c75" }} />
            </div>
            <h3 className="text-base font-medium" style={{ color: "#fffdf6" }}>Marketing Analytics</h3>
          </div>

          <div className="space-y-6 mb-6">
            {analyticsGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>{group.title}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <div key={item.label} className="rounded-lg p-4" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.12)" }}>
                      <p className="text-sm font-medium mb-1" style={{ color: "#fffdf6" }}>{item.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-6" style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.15)" }}>
            <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>Insights &amp; Decision-Making</p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.7)" }}>
              Each month, capture what worked, what underperformed, and where drop-offs or
              inefficiencies exist — then translate that into strategic decisions: budget
              reallocations, campaign adjustments, messaging refinements, or operational and
              training opportunities. This is the pivot step that keeps the whole framework honest.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="rounded-xl p-8 text-center" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.25)" }}>
          <h3 className="font-display text-2xl font-light mb-3" style={{ color: "#fffdf6" }}>Ready to document your own?</h3>
          <p className="text-sm leading-relaxed max-w-lg mx-auto mb-6" style={{ color: "rgba(255,253,246,0.55)" }}>
            The Strategy Builder walks you through Aim, Identity, Method, and Scorecard step by
            step — and saves everything as you go.
          </p>
          <Link
            href="/members/resources/marketing/marketing-strategy-tool"
            className="inline-flex items-center gap-2 px-6 h-11 rounded text-xs font-medium tracking-[0.15em] uppercase transition-all hover:opacity-90"
            style={{ background: "#a28c75", color: "#170009" }}
          >
            Open the Strategy Builder
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </div>
  );
}
