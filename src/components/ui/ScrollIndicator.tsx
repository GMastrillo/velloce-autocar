"use client";

import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className="inline-flex flex-col items-center gap-2 group cursor-pointer text-text-muted hover:text-text-primary transition-colors focus:outline-none"
      aria-label="Rolar para baixo"
    >
      <div className="w-5 h-9 rounded-full border-2 border-border-subtle group-hover:border-tricolore-red flex items-start justify-center p-1 transition-colors">
        <div className="w-1.5 h-2.5 rounded-full bg-accent-gold animate-bounce" />
      </div>
      <div className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-text-muted group-hover:text-text-primary transition-colors">
        <span>Role para baixo</span>
        <ChevronDown className="w-3.5 h-3.5 animate-pulse text-tricolore-red" />
      </div>
    </button>
  );
}
