"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(205,33,42,0.8)]"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #009246 0%, #FFFFFF 50%, #CD212A 80%, #D4AF37 100%)",
        }}
      />
    </div>
  );
}
