import React from "react";
import { cn } from "@/lib/utils";

interface LuxuryHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function LuxuryHeading({
  subtitle,
  title,
  description,
  align = "left",
  className = "",
}: LuxuryHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto items-center flex flex-col" : "text-left",
        className
      )}
    >
      <div className={cn("flex items-center gap-2.5", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-accent-gold/60" />
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-accent-gold">
          {subtitle}
        </span>
        {align === "center" && <span className="h-px w-8 bg-accent-gold/60" />}
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-sm md:text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
