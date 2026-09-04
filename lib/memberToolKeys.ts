// Single source of truth for which member tools may read/write server-side
// storage. Each key mirrors that tool's existing localStorage prefix
// (`ae_<key>_${userId}`) so there's no chance of a naming mismatch between a
// tool's hook call and the API route's allowlist.
export const MEMBER_TOOL_KEYS = [
  "marketing_strategy",
  "roadmap",
  "business_plans",
  "device_roi",
  "expansion_feasibility",
  "kpi",
  "ltv_cac",
  "swot_analyses",
  "membership_audits",
  "consult_tracker",
  "cross_sell_plans",
  "downtime_tracker",
  "front_desk_plans",
  "goal_stacks",
  "inventory",
  "checklist",
  "employee_writeups",
  "meeting_notes",
  "offer_letters",
  "onboarding_checklists",
] as const;

export type MemberToolKey = (typeof MEMBER_TOOL_KEYS)[number];

export function isMemberToolKey(value: string): value is MemberToolKey {
  return (MEMBER_TOOL_KEYS as readonly string[]).includes(value);
}
