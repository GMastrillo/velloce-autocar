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
      "inline-flex items-center justify-center font-display font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tricolore-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-tricolore-red text-tricolore-white hover:bg-tricolore-red/90 active:bg-tricolore-red border border-tricolore-red",
      secondary: "bg-tricolore-green text-tricolore-white hover:bg-tricolore-green/90 active:bg-tricolore-green border border-tricolore-green",
      outline: "border-2 border-border-active text-text-primary hover:bg-bg-surface hover:border-tricolore-red active:bg-bg-card",
      ghost: "text-text-primary hover:bg-bg-surface hover:text-tricolore-red active:bg-bg-card",
      danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 border border-red-600",
      gold: "bg-accent-gold text-bg-primary hover:bg-accent-gold-soft active:bg-accent-gold border border-accent-gold font-display",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-5 py-2.5 text-base gap-2",
      lg: "px-7 py-3 text-lg gap-2.5",
      xl: "px-10 py-4 text-xl gap-3",
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