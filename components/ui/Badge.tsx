import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "neutral" | "success";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium tracking-widest uppercase",
        {
          "bg-gold-100 text-gold-700 border border-gold-200": variant === "gold",
          "bg-warm-100 text-warm-700 border border-warm-200": variant === "neutral",
          "bg-emerald-50 text-emerald-700 border border-emerald-100": variant === "success",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
