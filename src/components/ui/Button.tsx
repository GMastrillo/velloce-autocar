"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display font-semibold rounded-full min-h-[44px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-primary/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variants = {
      primary: "bg-tricolore-red text-tricolore-white hover:bg-tricolore-red/90 border border-tricolore-red shadow-sm",
      secondary: "bg-tricolore-green text-tricolore-white hover:bg-tricolore-green/90 border border-tricolore-green shadow-sm",
      outline: "border border-border-active bg-white/[0.03] text-text-primary hover:bg-white/[0.08] hover:border-white/25",
      ghost: "text-text-primary hover:bg-white/[0.06]",
      danger: "bg-red-600 text-white hover:bg-red-700 border border-red-600",
      gold: "bg-accent-gold text-bg-primary hover:bg-accent-gold-soft border border-accent-gold font-display shadow-sm",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs min-h-[38px] gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3.5 text-base gap-2.5",
      xl: "px-9 py-4 text-lg gap-3",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";