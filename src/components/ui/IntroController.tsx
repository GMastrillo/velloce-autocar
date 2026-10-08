"use client";

import { Play } from "lucide-react";

export function IntroController() {
  const triggerIntro = () => {
    window.dispatchEvent(new CustomEvent("velloce_open_intro"));
  };

  return (
    <button
      onClick={triggerIntro}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-border-subtle hover:border-accent-gold text-[11px] font-mono text-text-secondary hover:text-white transition-all group cursor-pointer"
      title="Rever abertura cinematográfica"
    >
      <Play className="w-3 h-3 text-accent-gold fill-current group-hover:scale-110 transition-transform" />
      <span>Rever Abertura</span>
    </button>
  );
}
