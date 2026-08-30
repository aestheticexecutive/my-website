import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

// Small, dark-themed CTA banner pointing to the "Where Should I Start?"
// roadmap tool. Meant for the dark-editorial resource pages
// (app/members/resources/**). The roadmap page itself lives in the light
// "member hub" shell, so this is a deliberate cross-theme link, same as
// navigating from Resources to Templates or the Dashboard.
export function RoadmapPrompt() {
  return (
    <Link
      href="/members/roadmap"
      className="group flex items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-200 hover:border-[#a28c75]/40"
      style={{ background: "rgba(162,140,117,0.05)", borderColor: "rgba(162,140,117,0.18)" }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
      >
        <Compass size={16} style={{ color: "#a28c75" }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>
          Not sure where to start?
        </p>
        <p className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>
          Answer 4 quick questions for a personalized path through everything here.
        </p>
      </div>
      <ArrowRight
        size={15}
        className="flex-shrink-0 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200"
        style={{ color: "rgba(162,140,117,0.6)" }}
      />
    </Link>
  );
}
