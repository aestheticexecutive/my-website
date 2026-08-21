import { Megaphone, Settings, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { searchIndex } from "@/lib/search-index";

const CATEGORY_META: { key: string; label: string; icon: LucideIcon; description: string }[] = [
  {
    key: "Marketing",
    label: "Marketing",
    icon: Megaphone,
    description: "Social strategy, paid ads, SEO, content, and patient acquisition systems.",
  },
  {
    key: "Operations",
    label: "Operations",
    icon: Settings,
    description: "SOPs, checklists, inventory, and day-to-day practice systems.",
  },
  {
    key: "Finance",
    label: "Finance & Business Performance",
    icon: TrendingUp,
    description: "Pricing, profitability, budgeting, KPI dashboards, and planning tools.",
  },
  {
    key: "Staff",
    label: "Staff",
    icon: Users,
    description: "Hiring, onboarding, training, evaluations, and team culture.",
  },
];

export function MembershipLibraryList() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {CATEGORY_META.map(({ key, label, icon: Icon, description }) => {
        const items = searchIndex.filter((entry) => entry.category === key);
        return (
          <div
            key={key}
            className="border border-[#a28c75]/15 rounded-xl p-7 bg-[#130007]"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-[#2f0410] flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-[#a28c75]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-normal text-[#fffdf6] leading-tight">
                  {label}
                </h3>
                <p className="font-sans text-[11px] text-[#a28c75]/80 tracking-[0.1em] uppercase mt-1">
                  {items.length} resources
                </p>
              </div>
            </div>
            <p className="font-sans font-light text-xs text-[#fffdf6]/40 leading-relaxed mb-5">
              {description}
            </p>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.title} className="flex items-baseline justify-between gap-3">
                  <span className="font-sans font-light text-[13px] text-[#fffdf6]/65 leading-snug">
                    {item.title}
                  </span>
                  <span className="font-sans text-[9px] text-[#a28c75]/60 tracking-[0.1em] uppercase flex-shrink-0">
                    {item.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
