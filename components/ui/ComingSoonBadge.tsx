import { Sparkles } from "lucide-react";

export function ComingSoonBadge({
  className = "",
  theme = "dark",
}: {
  className?: string;
  theme?: "dark" | "light";
}) {
  const styles =
    theme === "light"
      ? "border-gold-200 bg-gold-50 text-gold-700"
      : "border-[#a28c75]/30 bg-[#a28c75]/10 text-[#a28c75]";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${styles} ${className}`}
    >
      <Sparkles size={10} />
      <span className="text-[9px] font-sans font-medium tracking-[0.18em] uppercase">
        Coming Soon
      </span>
    </span>
  );
}
