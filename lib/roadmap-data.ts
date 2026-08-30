// Data + recommendation logic for the "Where Should I Start?" practice
// roadmap — a 4-question assessment that produces a personalized, phased
// path through the member resource hub. Maintained by hand alongside the
// resource pages themselves (see lib/search-index.ts).

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

// ── Curated, tagged item set ─────────────────────────────────────────────────
// A hand-picked slice of the full library, not every single resource — the
// point of a roadmap is showing the right next things, not cataloging
// everything at once.

export const roadmapItems: RoadmapItem[] = [
  // ── Marketing ──
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
    title: "Google Business Profile",
    description: "The single highest-leverage free listing for local visibility — a complete setup and monthly SOP.",
    href: "/members/resources/marketing/google-business-profile",
    type: "Guide",
    category: "marketing",
    stages: "all",
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
    title: "SEO & Online Visibility Guide",
    description: "The 10 factors that determine whether Google shows your practice at all.",
    href: "/members/resources/marketing/seo-guide",
    type: "Guide",
    category: "marketing",
    stages: ["growing", "established"],
    tier: "core",
  },
  {
    title: "Patient Referral Program",
    description: "A 12-step system for turning happy patients into a consistent, low-cost growth channel.",
    href: "/members/resources/marketing/patient-referral",
    type: "Guide",
    category: "marketing",
    stages: ["established", "plateaued"],
    tier: "core",
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

  // ── Operations ──
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
    title: "Front Desk Power Tool",
    description: "Turn the front desk into a driver of revenue, retention, and reviews — not just a scheduler.",
    href: "/members/resources/operations/front-desk-tool",
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
    title: "Cross-Selling Tool",
    description: "Map the patient journey and build a real cross-sell and training plan, not just \"upsell more.\"",
    href: "/members/resources/operations/cross-selling-tool",
    type: "Tool",
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
    title: "Why Secret Shop?",
    description: "An honest, structured look at your own patient experience — usually a plateau-breaker.",
    href: "/members/resources/operations/secret-shopping",
    type: "Guide",
    category: "operations",
    stages: ["established", "plateaued"],
    tier: "advanced",
  },

  // ── Finance ──
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
    title: "Budget & Financial Dashboard",
    description: "Annual budget, monthly tracking, and KPI benchmarking in one place — the financial backbone every practice needs.",
    href: "/members/resources/finance/budget-tracker",
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
    title: "Cash Flow Forecast Template",
    description: "A 12-month and 13-week forecast — because profit on paper and cash in the bank aren't the same thing.",
    href: "/downloads/ae-cash-flow-forecast-template.xlsx",
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

  // ── Staff ──
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
    title: "Onboarding Checklist Builder",
    description: "A real, sign-off-ready onboarding process — start it before your first hire's first day.",
    href: "/members/resources/staff/onboarding-checklist",
    type: "Tool",
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
    title: "Non-Provider Compensation & Bonus Structures",
    description: "Retail attach, enrollment, and KPI-tied bonuses for front desk, aestheticians, and managers.",
    href: "/members/resources/staff/non-provider-compensation-guide",
    type: "Guide",
    category: "staff",
    stages: ["growing", "established"],
    tier: "core",
    needsTeam: true,
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
    title: "12-Week Leadership Development",
    description: "A self-paced curriculum for growing yourself or a manager into the next level of leadership.",
    href: "/members/resources/staff/leadership-course",
    type: "Course",
    category: "staff",
    stages: ["established", "plateaued"],
    tier: "advanced",
    needsTeam: true,
  },
];

// ── Recommendation engine ────────────────────────────────────────────────────

const TIER_ORDER: Record<Tier, number> = { foundational: 0, core: 1, advanced: 2 };
function byTier(a: RoadmapItem, b: RoadmapItem) {
  return TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
}
function stageMatches(item: RoadmapItem, stage: Stage) {
  return item.stages === "all" || item.stages.includes(stage);
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
}

export function buildRoadmap(answers: Answers): RoadmapResult | null {
  const { stage, priority, teamSize, goal } = answers;
  if (!stage || !priority || !teamSize || !goal) return null;

  const solo = teamSize === "solo";
  const pool = roadmapItems.filter((i) => stageMatches(i, stage) && !(solo && i.needsTeam));

  // Phase 1 — foundations: foundational items, priority category first
  const foundational = pool.filter((i) => i.tier === "foundational");
  const phase1Items = [
    ...foundational.filter((i) => i.category === priority),
    ...foundational.filter((i) => i.category !== priority),
  ].slice(0, 5);
  const shown = new Set(phase1Items.map((i) => i.href));

  // Phase 2 — deep dive into their stated priority category
  const phase2Items = pool
    .filter((i) => i.category === priority && !shown.has(i.href))
    .sort(byTier)
    .slice(0, 6);
  phase2Items.forEach((i) => shown.add(i.href));

  // Phase 3 — a lighter touch on the other three categories
  const otherCats = (Object.keys(CATEGORY_LABEL) as Category[]).filter((c) => c !== priority);
  const phase3Groups: RoadmapCategoryGroup[] = otherCats.map((cat) => ({
    category: cat,
    items: pool
      .filter((i) => i.category === cat && !shown.has(i.href))
      .sort(byTier)
      .slice(0, solo && cat === "staff" ? 1 : 2),
  }));
  phase3Groups.forEach((g) => g.items.forEach((i) => shown.add(i.href)));

  // Phase 4 — advanced / when you're ready, weighted toward their 90-day goal
  let advanced = roadmapItems.filter((i) => i.tier === "advanced" && !shown.has(i.href) && !(solo && i.needsTeam));
  if (goal === "scale") {
    advanced = [...advanced.filter((i) => i.category === "finance"), ...advanced.filter((i) => i.category !== "finance")];
  } else if (goal === "growth") {
    advanced = [...advanced.filter((i) => i.category === "marketing"), ...advanced.filter((i) => i.category !== "marketing")];
  }
  const phase4Items = advanced.slice(0, 5);

  const priorityLabel = CATEGORY_LABEL[priority];
  const stageLabel: Record<Stage, string> = {
    new: "a brand-new",
    growing: "a fast-growing",
    established: "an established",
    plateaued: "a plateaued",
  };

  return {
    phase1: {
      title: "Start Here",
      sub: `The foundational pieces every ${stageLabel[stage].replace("a ", "").replace("an ", "")} practice should have in place.`,
      items: phase1Items,
    },
    phase2: {
      title: `Your Priority: ${priorityLabel}`,
      sub: "You told us this is your biggest challenge right now — here's where to focus.",
      items: phase2Items,
    },
    phase3: {
      title: "Round It Out",
      sub: "A lighter touch on the other three areas, so nothing important falls through the cracks.",
      groups: phase3Groups,
    },
    phase4: {
      title: "When You're Ready",
      sub: "Advanced tools worth coming back to once the foundation is solid.",
      items: phase4Items,
    },
  };
}
