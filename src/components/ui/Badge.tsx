import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "gold" | "category";
  size?: "sm" | "md" | "lg";
  category?: "PREMIUM" | "LEVE" | "MOTOS";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", category, children, ...props }, ref) => {
    const variants = {
      default: "bg-bg-surface text-text-secondary border border-border-subtle",
      success: "bg-tricolore-green/20 text-tricolore-green border-tricolore-green/30",
      warning: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      danger: "bg-tricolore-red/20 text-tricolore-red border-tricolore-red/30",
      info: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      gold: "bg-accent-gold/20 text-accent-gold border-accent-gold/30",
      category: "font-display uppercase tracking-wider",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base",
    };

    const categoryStyles = {
      PREMIUM: "bg-tricolore-red/20 text-tricolore-red border-tricolore-red/30",
      LEVE: "bg-tricolore-green/20 text-tricolore-green border-tricolore-green/30",
      MOTOS: "bg-tricolore-white/20 text-tricolore-white border-tricolore-white/30",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium rounded-full border transition-smooth",
          variants[variant],
          sizes[size],
          category && categoryStyles[category],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";