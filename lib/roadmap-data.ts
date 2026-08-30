// Data + recommendation logic for the "Where Should I Start?" practice
// roadmap — a 4-question assessment that produces a personalized, fully
// numbered path through *every* guide, tool, and template in the member
// resource hub. Maintained by hand alongside the resource pages themselves
// (see lib/search-index.ts) — every entry there (minus pure nav pages, and
// three Word-doc twins of a guide already listed) has a corresponding entry
// here.

export type Category = "marketing" | "operations" | "finance" | "staff";
export type Stage = "new" | "growing" | "established" | "plateaued";
export type Tier = "foundational" | "core" | "advanced";

export interface RoadmapItem {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  type: string;
  category: Category;
  stages: Stage[] | "all";
  tier: Tier;
  needsTeam?: boolean; // true if it only makes sense once you have staff beyond yourself
}

export const CATEGORY_LABEL: Record<Category, string> = {
  marketing: "Marketing",
  operations: "Operations",
  finance: "Finance & Business Performance",
  staff: "Staff",
};

// ── Question set ─────────────────────────────────────────────────────────────

export interface QuestionOption {
  value: string;
  label: string;
}
export interface Question {
  id: "stage" | "priority" | "teamSize" | "goal";
  prompt: string;
  sub?: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: "stage",
    prompt: "How would you describe your practice right now?",
    options: [
      { value: "new", label: "Brand new — just launched, or about to" },
      { value: "growing", label: "Growing fast — systems are struggling to keep up" },
      { value: "established", label: "Steady and established" },
      { value: "plateaued", label: "Plateaued — need a push to get to the next level" },
    ],
  },
  {
    id: "priority",
    prompt: "What's your single biggest challenge right now?",
    options: [
      { value: "marketing", label: "Attracting new patients" },
      { value: "operations", label: "Keeping the schedule and day-to-day running smoothly" },
      { value: "finance", label: "Understanding my numbers and profitability" },
      { value: "staff", label: "Team turnover, culture, or hiring" },
    ],
  },
  {
    id: "teamSize",
    prompt: "How many people are on your team, including you?",
    options: [
      { value: "solo", label: "Just me, or me + 1" },
      { value: "small", label: "3–7 people" },
      { value: "mid", label: "8–15 people" },
      { value: "large", label: "16+ people" },
    ],
  },
  {
    id: "goal",
    prompt: "What's your top priority for the next 90 days?",
    options: [
      { value: "foundation", label: "Get organized — build the systems I'm missing" },
      { value: "growth", label: "Grow revenue" },
      { value: "fix", label: "Fix one specific problem area" },
      { value: "scale", label: "Plan ahead — expansion, a new hire tier, or bigger structure" },
    ],
  },
];

export interface Answers {
  stage: Stage | null;
  priority: Category | null;
  teamSize: "solo" | "small" | "mid" | "large" | null;
  goal: "foundation" | "growth" | "fix" | "scale" | null;
}

export const emptyAnswers: Answers = { stage: null, priority: null, teamSize: null, goal: null };

// ── Full item set ─────────────────────────────────────────────────────────────
// Every resource, tool, and template in the hub gets a slot in the roadmap —
// none are left out. Tagging controls *when* something surfaces, not *whether*
// it does. (Three Word-doc twins of a guide already listed here — the
// Community Partnerships, Patient Referral, and Referral Partner "Guide" docx
// files — are noted inline on their guide instead of taking a separate slot,
// since they're the same content in a different format, not a new step.)

export const roadmapItems: RoadmapItem[] = [
  // ══════════════════════════ Marketing ══════════════════════════
  {
    title: "Marketing Strategy Playbook",
    description: "The AIMS framework that ties every marketing channel together — read this before building anything.",
    href: "/members/resources/marketing/marketing-strategy-playbook",
    type: "Guide",
    category: "marketing",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "Marketing Strategy Builder",
    description: "Document your goals, brand identity, and channel-by-channel plan in one saved, guided tool.",
    href: "/members/resources/marketing/marketing-strategy-tool",
    type: "Tool",
    category: "marketing",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "Brand Kit Builder",
    description: "Nail down your mission, voice, colors, and target client before you spend a dollar on marketing.",
    href: "/tools/brand-kit-builder.html",
    external: true,
    type: "Tool",
    category: "marketing",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Why Your Brand Kit Matters",
    description: "Why an intentional brand matters and what goes into a complete brand kit before you start building yours.",
    href: "/members/resources/marketing/brand-kit",
    type: "Guide",
    category: "marketing",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Ideal Client Builder",
    description: "Three detailed client personas so every piece of content and ad speaks to a real person.",
    href: "/tools/ideal-client-builder.html",
    external: true,
    type: "Tool",
    category: "marketing",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Social Media Best Practices",
    description: "The 5 P's, push vs. pull marketing, and a pre-post checklist — the basics before you post consistently.",
    href: "/members/resources/marketing/social-media",
    type: "Guide",
    category: "marketing",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Before & After Photography",
    description: "A complete protocol for lighting, angles, and consent — your most persuasive content, done right.",
    href: "/members/resources/marketing/before-after-photos",
    type: "Guide",
    category: "marketing",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Google Business Profile",
    description: "The single highest-leverage free listing for local visibility — a complete setup and monthly SOP.",
    href: "/members/resources/marketing/google-business-profile",
    type: "Guide",
    category: "marketing",
    stages: "all",
    tier: "core",
  },
  {
    title: "AI SEO Analyzer",
    description: "Scan your website against all 10 SEO ranking factors and see exactly what to fix.",
    href: "/tools/seo-analyzer.html",
    external: true,
    type: "Tool",
    category: "marketing",
    stages: "all",
    tier: "core",
  },
  {
    title: "SEO & Online Visibility Guide",
    description: "The 10 factors that determine whether Google shows your practice at all.",
    href: "/members/resources/marketing/seo-guide",
    type: "Guide",
    category: "marketing",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "Google Reviews",
    description: "A real system for collecting reviews consistently, not just hoping patients remember to leave one.",
    href: "/members/resources/marketing/google-reviews",
    type: "Guide",
    category: "marketing",
    stages: "all",
    tier: "core",
  },
  {
    title: "Lead Conversion Playbook",
    description: "How to respond to, nurture, and convert the inquiries you're already getting — often the fastest win available.",
    href: "/members/resources/marketing/lead-conversion",
    type: "Guide",
    category: "marketing",
    stages: "all",
    tier: "core",
  },
  {
    title: "Treatment Landing Pages",
    description: "SEO + conversion playbook for pages that rank in Google and turn visits into booked consultations.",
    href: "/members/resources/marketing/landing-pages",
    type: "Guide",
    category: "marketing",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "Blog Strategy",
    description: "Consistent blog content — topics, structure, and repurposing — to turn your site into a patient-generating machine.",
    href: "/members/resources/marketing/blog-strategy",
    type: "Guide",
    category: "marketing",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "Email & Text Marketing",
    description: "Use email and text to increase retention, reactivate lapsed patients, and fill your schedule.",
    href: "/members/resources/marketing/email-text-marketing",
    type: "Guide",
    category: "marketing",
    stages: "all",
    tier: "core",
  },
  {
    title: "Testimonial Collection Sheet",
    description: "A quick worksheet for capturing a patient's spoken testimonial right after a great visit.",
    href: "/downloads/ae-testimonial-collection-sheet.docx",
    type: "Template",
    category: "marketing",
    stages: ["new", "growing"],
    tier: "core",
  },
  {
    title: "Monthly Features",
    description: "Plan monthly features that grow revenue without discounting, plus an interactive marketing calendar.",
    href: "/members/resources/marketing/monthly-features",
    type: "Guide",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "Promo Calendar Tool",
    description: "Plan and track features, campaigns, and events across the year with performance metrics per entry.",
    href: "/tools/promo-calendar.html",
    external: true,
    type: "Tool",
    category: "marketing",
    stages: "all",
    tier: "core",
  },
  {
    title: "Patient Referral Program",
    description: "A 12-step system for turning happy patients into a consistent, low-cost growth channel. Also available as a printable Word doc.",
    href: "/members/resources/marketing/patient-referral",
    type: "Guide",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "Referral Partner Program",
    description: "A structured \"Give $50, Get $50\" referral program with hairstylists, lash artists, and other providers. Also available as a printable Word doc.",
    href: "/members/resources/marketing/referral-partners",
    type: "Guide",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "Strategic Community Partnerships",
    description: "Cross-promotional relationships with gyms, salons, and wellness centers. Also available as a printable Word doc.",
    href: "/members/resources/marketing/community-partnerships",
    type: "Guide",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "Partnership / Referral Outreach One-Sheet",
    description: "A leave-behind fact sheet to actually hand a gym, salon, or boutique when you pitch a partnership.",
    href: "/downloads/ae-partnership-outreach-one-sheet.docx",
    type: "Template",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "Membership + Rewards Audit Tool",
    description: "Audit your in-house membership and manufacturer rewards enrollment, and build an action plan.",
    href: "/members/resources/marketing/membership-rewards-audit",
    type: "Tool",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "Maximizing In-House Memberships + Rewards Programs Guide",
    description: "The 8-step process for auditing, promoting, and tracking membership and rewards programs.",
    href: "/members/resources/marketing/membership-rewards-guide",
    type: "Guide",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "Event RSVP Tracking Sheet",
    description: "Track attendee RSVPs, contact info, and attendance for practice events and treatment nights.",
    href: "/templates/event-rsvp-sheet.xlsx",
    type: "Template",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "Event Planning",
    description: "A 123-item interactive checklist covering pre-event planning, day-of execution, and follow-up.",
    href: "/members/resources/marketing/event-planning",
    type: "Guide",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },
  {
    title: "Event Planner Tool",
    description: "Create events, track items done/pending, and watch a color-coded progress bar update live.",
    href: "/tools/event-planner.html",
    external: true,
    type: "Tool",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },
  {
    title: "Meta Ads",
    description: "A practical guide to profitable Facebook and Instagram advertising once your organic foundation is solid.",
    href: "/members/resources/marketing/meta-ads",
    type: "Guide",
    category: "marketing",
    stages: ["growing", "established", "plateaued"],
    tier: "advanced",
  },
  {
    title: "Google Ads",
    description: "Build profitable Google Search campaigns — keyword tiers, negative keywords, and Quality Score.",
    href: "/members/resources/marketing/google-ads",
    type: "Guide",
    category: "marketing",
    stages: ["growing", "established", "plateaued"],
    tier: "advanced",
  },
  {
    title: "Automated Campaigns",
    description: "15 automated campaigns your practice should have running across acquisition, retention, and reactivation.",
    href: "/members/resources/marketing/automated-campaigns",
    type: "Guide",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },

  // ══════════════════════════ Operations ══════════════════════════
  {
    title: "Goal Tracker",
    description: "Set a real target and see exactly what you need per business day to hit it.",
    href: "/members/resources/operations/goal-tracker",
    type: "Tool",
    category: "operations",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "Goal Setting Guide",
    description: "Suggested goals across revenue, acquisition, retention, and productivity, broken into weekly pace.",
    href: "/members/resources/operations/goal-setting-guide",
    type: "Guide",
    category: "operations",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "Opening & Closing Checklist Builder",
    description: "Get daily duties out of your head and onto a checklist your team can run without you.",
    href: "/members/resources/operations/opening-closing-checklist",
    type: "Tool",
    category: "operations",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Patient Intake Form Builder",
    description: "A branded, thorough intake form — one of the first things a new practice actually needs.",
    href: "/members/resources/operations/intake-form-builder",
    type: "Tool",
    category: "operations",
    stages: ["new"],
    tier: "foundational",
  },
  {
    title: "Treatment Plan Builder",
    description: "A branded, print-ready treatment plan with pricing and a home-care product table.",
    href: "/members/resources/operations/treatment-plan-builder",
    type: "Tool",
    category: "operations",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Room & Equipment Turnover Checklist",
    description: "The between-patient and end-of-day room reset, plus a daily turnover log.",
    href: "/downloads/ae-room-equipment-turnover-checklist.docx",
    type: "Template",
    category: "operations",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "Front Desk Power Tool",
    description: "Turn the front desk into a driver of revenue, retention, and reviews — not just a scheduler.",
    href: "/members/resources/operations/front-desk-tool",
    type: "Tool",
    category: "operations",
    stages: "all",
    tier: "core",
  },
  {
    title: "Maximizing the Power of the Front Desk Guide",
    description: "The 7-step process behind the Front Desk Power Tool — audit through recognition and reward.",
    href: "/members/resources/operations/front-desk-guide",
    type: "Guide",
    category: "operations",
    stages: "all",
    tier: "core",
  },
  {
    title: "Consultation Conversion Tracker",
    description: "Log consultations by provider and service type and see conversion rates by date range.",
    href: "/members/resources/operations/consultation-conversion-tracker",
    type: "Tool",
    category: "operations",
    stages: "all",
    tier: "core",
  },
  {
    title: "Scheduling & Capacity Optimization Guide",
    description: "Block-scheduling, no-show policy, and waitlist systems — keep chairs full without discounting.",
    href: "/members/resources/operations/scheduling-capacity-guide",
    type: "Guide",
    category: "operations",
    stages: ["growing", "plateaued"],
    tier: "core",
  },
  {
    title: "Inventory Management System",
    description: "Live on-site dollar value and par-level alerts — stop finding out you're out of product mid-treatment.",
    href: "/members/resources/operations/inventory-management",
    type: "Tool",
    category: "operations",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "Vendor Contact & Reorder Sheet",
    description: "One master vendor list with an auto-calculating next expected reorder date.",
    href: "/downloads/ae-vendor-contact-reorder-sheet.xlsx",
    type: "Template",
    category: "operations",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "Equipment Maintenance Log",
    description: "A per-device service history with the next service due date calculated automatically.",
    href: "/downloads/ae-equipment-maintenance-log.xlsx",
    type: "Template",
    category: "operations",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "Cross-Selling Tool",
    description: "Map the patient journey and build a real cross-sell and training plan, not just \"upsell more.\"",
    href: "/members/resources/operations/cross-selling-tool",
    type: "Tool",
    category: "operations",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },
  {
    title: "Maximizing Cross-Selling Guide",
    description: "The 7-step process behind the Cross-Selling Tool — defining, mapping, building, and training.",
    href: "/members/resources/operations/cross-selling-guide",
    type: "Guide",
    category: "operations",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },
  {
    title: "Downtime Revenue Tracker",
    description: "100 revenue-driving actions for the slow hours — for a practice that's plateaued and needs a push.",
    href: "/members/resources/operations/downtime-revenue-tracker",
    type: "Tool",
    category: "operations",
    stages: ["plateaued"],
    tier: "advanced",
  },
  {
    title: "100 Ways to Turn Downtime Into Revenue Guide",
    description: "What each of 7 revenue-driving areas actually does for your practice, behind the tracker.",
    href: "/members/resources/operations/downtime-revenue-guide",
    type: "Guide",
    category: "operations",
    stages: ["plateaued"],
    tier: "advanced",
  },
  {
    title: "Why Secret Shop?",
    description: "An honest, structured look at your own patient experience — usually a plateau-breaker.",
    href: "/members/resources/operations/secret-shopping",
    type: "Guide",
    category: "operations",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },
  {
    title: "Secret Shopper Log",
    description: "Log every secret shop across all 9 questionnaire sections with photo uploads and scoring.",
    href: "/tools/secret-shopper-log.html",
    external: true,
    type: "Tool",
    category: "operations",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },
  {
    title: "Printable Secret Shopper Questionnaire",
    description: "All 9 sections with write-in lines and scoring boxes, formatted for print.",
    href: "/tools/secret-shopper-questionnaire.html",
    external: true,
    type: "Print / PDF",
    category: "operations",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },

  // ══════════════════════════ Finance ══════════════════════════
  {
    title: "Business Plan Tool",
    description: "Vision, revenue milestones, and staffing forecast across 1, 5, and 10 years — start here if you're new.",
    href: "/members/resources/finance/business-plan",
    type: "Tool",
    category: "finance",
    stages: ["new"],
    tier: "foundational",
  },
  {
    title: "1, 5, and 10-Year Business Plan Guide",
    description: "How to build a long-term plan — vision, milestones, staffing, and a review cadence for each horizon.",
    href: "/members/resources/finance/business-plan-guide",
    type: "Guide",
    category: "finance",
    stages: ["new"],
    tier: "foundational",
  },
  {
    title: "Budget & Financial Dashboard",
    description: "Annual budget, monthly tracking, and KPI benchmarking in one place — the financial backbone every practice needs.",
    href: "/members/resources/finance/budget-tracker",
    type: "Tool",
    category: "finance",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "Budget Tracker Tool",
    description: "Open the interactive budget tracker directly — revenue entry, CSV import, and variance tracking.",
    href: "/tools/budget-tracker.html",
    external: true,
    type: "Tool",
    category: "finance",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "Treatment Profitability Analyzer",
    description: "See real net profit and margin per treatment, not just what it sells for.",
    href: "/members/resources/finance/treatment-profitability",
    type: "Tool",
    category: "finance",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "Treatment Profitability Template",
    description: "The same profitability math as a pre-loaded, offline Excel workbook with conditional color coding.",
    href: "/downloads/ae-treatment-profitability.xlsx",
    type: "Template",
    category: "finance",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "Daily Cash Drawer Reconciliation Log",
    description: "A running log for counting the front-desk cash drawer, with expected close calculated automatically.",
    href: "/downloads/ae-cash-drawer-reconciliation-log.xlsx",
    type: "Template",
    category: "finance",
    stages: "all",
    tier: "foundational",
  },
  {
    title: "KPI Tracker",
    description: "All 16 key performance indicators, month over month, with benchmarks so you know what's actually good.",
    href: "/members/resources/finance/kpi-tracker",
    type: "Tool",
    category: "finance",
    stages: "all",
    tier: "core",
  },
  {
    title: "Med Spa P&L Guide",
    description: "What to track and how to categorize every dollar so your P&L actually tells you something.",
    href: "/members/resources/finance/pl-guide",
    type: "Guide",
    category: "finance",
    stages: "all",
    tier: "core",
  },
  {
    title: "Monthly & Annual P&L Template",
    description: "A pre-built Excel workbook for gross margin, payroll %, net profit, and 9 KPI metrics.",
    href: "/downloads/ae-pl-template.xlsx",
    type: "Template",
    category: "finance",
    stages: "all",
    tier: "core",
  },
  {
    title: "Cash Flow Forecast Template",
    description: "A 12-month and 13-week forecast — because profit on paper and cash in the bank aren't the same thing.",
    href: "/downloads/ae-cash-flow-forecast-template.xlsx",
    type: "Template",
    category: "finance",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "Annual Subscription & Renewal Calendar",
    description: "Every recurring cost in one place, with an auto-calculating cancel-by date.",
    href: "/downloads/ae-subscription-renewal-calendar.xlsx",
    type: "Template",
    category: "finance",
    stages: "all",
    tier: "core",
  },
  {
    title: "Competitive Pricing Analysis",
    description: "AI-reasoned regional pricing recommendations for a specific treatment, city, and market position.",
    href: "/tools/pricing-analyzer.html",
    external: true,
    type: "Tool",
    category: "finance",
    stages: "all",
    tier: "core",
  },
  {
    title: "Vendor Price Comparison Worksheet",
    description: "A side-by-side grid for comparing up to three vendor quotes, with effective cost per unit calculated automatically.",
    href: "/downloads/ae-vendor-price-comparison-worksheet.xlsx",
    type: "Template",
    category: "finance",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "SWOT Analysis Tool",
    description: "A quarterly reset — Strengths, Weaknesses, Opportunities, Threats — with a real 30-day action plan.",
    href: "/members/resources/finance/swot-analysis",
    type: "Tool",
    category: "finance",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "SWOT Analysis Guide",
    description: "What a SWOT analysis is, why to run one every quarter, and how to turn it into a real action plan.",
    href: "/members/resources/finance/swot-analysis-guide",
    type: "Guide",
    category: "finance",
    stages: ["established", "plateaued"],
    tier: "core",
  },
  {
    title: "Device ROI Tracker",
    description: "True cost, ongoing servicing, and real ROI on every device — before or after you buy it.",
    href: "/members/resources/finance/device-roi-tracker",
    type: "Tool",
    category: "finance",
    stages: ["growing", "established"],
    tier: "advanced",
  },
  {
    title: "Client LTV & Acquisition Cost Calculator",
    description: "What a patient is actually worth, and exactly how much you can afford to spend acquiring one.",
    href: "/members/resources/finance/ltv-cac-calculator",
    type: "Tool",
    category: "finance",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },
  {
    title: "Second Location Feasibility Model",
    description: "Startup investment, staffing ramp, and a real break-even timeline — model it before you sign a lease.",
    href: "/members/resources/finance/expansion-feasibility",
    type: "Tool",
    category: "finance",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },

  // ══════════════════════════ Staff ══════════════════════════
  {
    title: "Core Values Generator",
    description: "Distill authentic core values from your team's best moments — the foundation everything else builds on.",
    href: "/tools/core-values-generator.html",
    external: true,
    type: "Tool",
    category: "staff",
    stages: ["new"],
    tier: "foundational",
  },
  {
    title: "Mission Statement Generator",
    description: "Answer reflective questions about your purpose and patients — three drafted mission statement options.",
    href: "/tools/mission-statement-generator.html",
    external: true,
    type: "Tool",
    category: "staff",
    stages: ["new"],
    tier: "foundational",
  },
  {
    title: "Living Your Values",
    description: "7 activation areas — hiring, daily ops, recognition, meetings — for embedding culture from day one.",
    href: "/members/resources/staff/embed-values",
    type: "Guide",
    category: "staff",
    stages: ["new"],
    tier: "foundational",
  },
  {
    title: "Job Post Generator",
    description: "A complete, polished job post in seconds — ready for when you make your first hire.",
    href: "/tools/job-post-generator.html",
    external: true,
    type: "Tool",
    category: "staff",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Interview Guide Generator",
    description: "A three-stage interview guide built on the MBI framework — skill, attitude, and passion.",
    href: "/tools/interview-guide-generator.html",
    external: true,
    type: "Tool",
    category: "staff",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Interview Scorecard",
    description: "A candidate rating rubric on the same MBI framework, plus communication, reliability, and a recommendation.",
    href: "/downloads/ae-interview-scorecard.docx",
    type: "Template",
    category: "staff",
    stages: ["growing"],
    tier: "foundational",
  },
  {
    title: "Offer Letter Builder",
    description: "A complete employment offer letter, every standard section already written — fill in and send.",
    href: "/members/resources/staff/offer-letter",
    type: "Tool",
    category: "staff",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Onboarding Checklist Builder",
    description: "A real, sign-off-ready onboarding process — start it before your first hire's first day.",
    href: "/members/resources/staff/onboarding-checklist",
    type: "Tool",
    category: "staff",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Onboarding Guide",
    description: "Why a signed-off onboarding checklist matters and how to actually run it well.",
    href: "/members/resources/staff/onboarding-guide",
    type: "Guide",
    category: "staff",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "New Hire Welcome Packet",
    description: "The friendlier complement to the checklist — parking, dress code, who's who, and a first-week checklist.",
    href: "/downloads/ae-new-hire-welcome-packet.docx",
    type: "Template",
    category: "staff",
    stages: ["new", "growing"],
    tier: "foundational",
  },
  {
    title: "Compensation & Commission Structure Guide",
    description: "The break-even math every owner should know before setting or renegotiating provider pay.",
    href: "/members/resources/staff/compensation-guide",
    type: "Guide",
    category: "staff",
    stages: "all",
    tier: "core",
  },
  {
    title: "Non-Provider Compensation & Bonus Structures",
    description: "Retail attach, enrollment, and KPI-tied bonuses for front desk, aestheticians, and managers.",
    href: "/members/resources/staff/non-provider-compensation-guide",
    type: "Guide",
    category: "staff",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "Team Directory / Org Chart",
    description: "A simple roster — name, role, department, who reports to whom — for the whole team.",
    href: "/downloads/ae-team-directory.xlsx",
    type: "Template",
    category: "staff",
    stages: ["growing", "established"],
    tier: "core",
    needsTeam: true,
  },
  {
    title: "Staff Meeting Agenda",
    description: "A recurring team meeting structure that actually gets used — the backbone of team communication.",
    href: "/members/resources/staff/staff-meeting-agenda",
    type: "Guide",
    category: "staff",
    stages: ["growing", "established", "plateaued"],
    tier: "core",
    needsTeam: true,
  },
  {
    title: "Meeting Notes",
    description: "Pre-loaded with the recommended agenda — log notes for every meeting under a name and date.",
    href: "/members/resources/staff/meeting-notes",
    type: "Tool",
    category: "staff",
    stages: ["growing", "established", "plateaued"],
    tier: "core",
    needsTeam: true,
  },
  {
    title: "Employee Social Media Policy",
    description: "A customizable policy covering professional representation, HIPAA, and brand standards.",
    href: "/templates/employee-social-media-policy.docx",
    type: "Template",
    category: "staff",
    stages: ["growing", "established"],
    tier: "core",
    needsTeam: true,
  },
  {
    title: "Employee File Guide",
    description: "The 6 required file categories, retention schedules, and compliance traps to stay audit-ready.",
    href: "/members/resources/staff/employee-files",
    type: "Guide",
    category: "staff",
    stages: ["growing", "established"],
    tier: "core",
    needsTeam: true,
  },
  {
    title: "Handling Escalated Clients",
    description: "How to de-escalate difficult clients using the 7-step LEAP FWD framework.",
    href: "/members/resources/staff/escalated-customer-service",
    type: "Training",
    category: "staff",
    stages: "all",
    tier: "core",
  },
  {
    title: "Presenting Patient Financing",
    description: "How to introduce financing options confidently — a 6-step talk track with word-for-word scripts.",
    href: "/members/resources/staff/patient-financing",
    type: "Training",
    category: "staff",
    stages: "all",
    tier: "core",
  },
  {
    title: "The Art of the Consult",
    description: "A complete conversion playbook from first inquiry to closed treatment plan, with objection handling.",
    href: "/members/resources/staff/sales-process",
    type: "Training",
    category: "staff",
    stages: "all",
    tier: "core",
  },
  {
    title: "Phone Call Mastery",
    description: "A 10-step framework for turning every inbound call into a booked, confident patient.",
    href: "/members/resources/staff/phone-call-mastery",
    type: "Training",
    category: "staff",
    stages: "all",
    tier: "core",
  },
  {
    title: "In-Office Sales Mastery",
    description: "Cross-selling framework and scripts for in-person device treatments, plus the arrival experience.",
    href: "/members/resources/staff/front-desk-sales",
    type: "Training",
    category: "staff",
    stages: "all",
    tier: "core",
  },
  {
    title: "Peer Recognition Program Guide",
    description: "Peer shoutouts and a structured employee-of-the-month process — cheap, high-leverage retention.",
    href: "/members/resources/staff/peer-recognition-guide",
    type: "Guide",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Peer Shoutout / Recognition Card",
    description: "A printable card version of the shoutout format — 4 per page, ready to hand out or post on a board.",
    href: "/downloads/ae-peer-shoutout-card.docx",
    type: "Template",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Staff Retention & Burnout Prevention Guide",
    description: "Scheduling flexibility, PTO design, and workload balance — the three levers that keep good people.",
    href: "/members/resources/staff/retention-burnout-guide",
    type: "Guide",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Stay Interview Notes Template",
    description: "A structured one-pager for the stay-interview conversations from the Retention Guide.",
    href: "/downloads/ae-stay-interview-notes.docx",
    type: "Template",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Team Health Assessment",
    description: "Rate your team across 8 key areas, with a strategy builder and history tracking.",
    href: "/tools/team-satisfaction.html",
    external: true,
    type: "Tool",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Management Structure Builder",
    description: "Build a responsibility library and drag-and-drop every responsibility onto a full monthly calendar.",
    href: "/tools/management-structure.html",
    external: true,
    type: "Tool",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "12-Week Leadership Development",
    description: "A self-paced curriculum for growing yourself or a manager into the next level of leadership.",
    href: "/members/resources/staff/leadership-course",
    type: "Course",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Employee Evaluation Forms",
    description: "Role-specific evaluation forms for Patient Care Coordinator, Med Spa Manager, and Provider/Injector.",
    href: "/members/resources/staff",
    type: "Template",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Patient Care Coordinator Evaluation Form",
    description: "Role-specific performance evaluation covering service quality, communication, and patient experience.",
    href: "/downloads/Patient-Care-Coordinator-Evaluation.docx",
    type: "Template",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Med Spa Manager Evaluation Form",
    description: "Role-specific performance evaluation covering leadership, operations, and team development.",
    href: "/downloads/Med-Spa-Manager-Evaluation.docx",
    type: "Template",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Provider / Injector Evaluation Form",
    description: "Role-specific performance evaluation covering clinical skill, consultation, and treatment outcomes.",
    href: "/downloads/Provider-Injector-Evaluation.docx",
    type: "Template",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Employee Write-Up Form",
    description: "A structured write-up template with editable warning levels and disciplinary actions.",
    href: "/members/resources/staff/employee-write-up-form",
    type: "Tool",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
  {
    title: "Documentation & Write-Up Guide",
    description: "Why documenting out-of-the-ordinary employee behavior matters, and how to do it well.",
    href: "/members/resources/staff/employee-write-up-guide",
    type: "Guide",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
];

// ── Recommendation engine ────────────────────────────────────────────────────

const TIER_ORDER: Record<Tier, number> = { foundational: 0, core: 1, advanced: 2 };
function stageMatches(item: RoadmapItem, stage: Stage) {
  return item.stages === "all" || item.stages.includes(stage);
}
function sortKey(item: RoadmapItem, stage: Stage) {
  // Tier does the heavy lifting; within a tier, items matching the
  // practice's stage sort first. Stable sort preserves the hand-picked
  // order above as the final tiebreak.
  return TIER_ORDER[item.tier] * 2 + (stageMatches(item, stage) ? 0 : 1);
}

export interface RoadmapGroup {
  title: string;
  sub: string;
  items: RoadmapItem[];
}
export interface RoadmapCategoryGroup {
  category: Category;
  items: RoadmapItem[];
}

export interface RoadmapResult {
  phase1: RoadmapGroup;
  phase2: RoadmapGroup;
  phase3: { title: string; sub: string; groups: RoadmapCategoryGroup[] };
  phase4: RoadmapGroup;
  totalCount: number;
}

export function buildRoadmap(answers: Answers): RoadmapResult | null {
  const { stage, priority, teamSize, goal } = answers;
  if (!stage || !priority || !teamSize || !goal) return null;

  const solo = teamSize === "solo";

  // Items that need an existing team don't apply yet for a solo practice —
  // deprioritized to the end, not dropped, since everything still gets a slot.
  const deprioritized = solo ? roadmapItems.filter((i) => i.needsTeam) : [];
  const applicable = roadmapItems.filter((i) => !(solo && i.needsTeam));
  const sorted = [...applicable].sort((a, b) => sortKey(a, stage) - sortKey(b, stage));

  // Phase 1 — a short, curated on-ramp: foundational items, priority category first
  const foundational = sorted.filter((i) => i.tier === "foundational");
  const phase1Items = [
    ...foundational.filter((i) => i.category === priority),
    ...foundational.filter((i) => i.category !== priority),
  ].slice(0, 6);
  const shown = new Set(phase1Items.map((i) => i.href));

  // Phase 2 — every remaining item in their stated priority category
  const phase2Items = sorted.filter((i) => i.category === priority && !shown.has(i.href));
  phase2Items.forEach((i) => shown.add(i.href));

  // Phase 3 — every remaining item in the other three categories, grouped
  const otherCats = (Object.keys(CATEGORY_LABEL) as Category[]).filter((c) => c !== priority);
  const phase3Groups: RoadmapCategoryGroup[] = otherCats.map((cat) => ({
    category: cat,
    items: sorted.filter((i) => i.category === cat && !shown.has(i.href)),
  }));
  phase3Groups.forEach((g) => g.items.forEach((i) => shown.add(i.href)));

  // Phase 4 — anything not yet placed, plus deprioritized team-dependent items,
  // weighted toward the stated 90-day goal
  let phase4Items = [...deprioritized];
  if (goal === "scale") {
    phase4Items = [...phase4Items.filter((i) => i.category === "finance"), ...phase4Items.filter((i) => i.category !== "finance")];
  } else if (goal === "growth") {
    phase4Items = [...phase4Items.filter((i) => i.category === "marketing"), ...phase4Items.filter((i) => i.category !== "marketing")];
  }

  const priorityLabel = CATEGORY_LABEL[priority];
  const stageLabel: Record<Stage, string> = {
    new: "brand-new",
    growing: "fast-growing",
    established: "established",
    plateaued: "plateaued",
  };

  const totalCount =
    phase1Items.length + phase2Items.length + phase3Groups.reduce((n, g) => n + g.items.length, 0) + phase4Items.length;

  return {
    phase1: {
      title: "Start Here",
      sub: `The foundational pieces every ${stageLabel[stage]} practice should have in place.`,
      items: phase1Items,
    },
    phase2: {
      title: `Your Priority: ${priorityLabel}`,
      sub: "You told us this is your biggest challenge right now — every resource that touches it, in order.",
      items: phase2Items,
    },
    phase3: {
      title: "Round It Out",
      sub: "Everything else, organized by area, so nothing on the site goes unused.",
      groups: phase3Groups,
    },
    phase4: {
      title: "When You're Ready",
      sub: solo
        ? "Advanced tools worth coming back to once the foundation is solid — several of these apply once you've grown your team."
        : "Advanced tools worth coming back to once the foundation is solid.",
      items: phase4Items,
    },
    totalCount,
  };
}
