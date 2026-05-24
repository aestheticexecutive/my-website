import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // Variants
            "bg-gold-400 text-warm-950 hover:bg-gold-500 focus-visible:outline-gold-400 shadow-sm":
              variant === "primary",
            "bg-warm-900 text-cream hover:bg-warm-800 focus-visible:outline-warm-900 shadow-sm":
              variant === "secondary",
            "border border-gold-400 text-gold-600 hover:bg-gold-50 focus-visible:outline-gold-400":
              variant === "outline",
            "text-warm-700 hover:text-warm-900 hover:bg-warm-100":
              variant === "ghost",
          },
          {
            // Sizes
            "h-8 px-4 text-xs rounded": size === "sm",
            "h-10 px-6 text-sm rounded": size === "md",
            "h-12 px-8 text-base rounded": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
