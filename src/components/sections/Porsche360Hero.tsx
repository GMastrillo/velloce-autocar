"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowDown, MessageSquare, ShieldCheck } from "lucide-react";
import { COMMERCIAL_LINKS } from "@/data/commercial";

interface PorscheHeroProps {
  onVideoEnded?: () => void;
}

export function PorscheHero({ onVideoEnded }: PorscheHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [revealed, setRevealed] = useState(false);

  const handleEnded = () => {
    setRevealed(true);
    onVideoEnded?.();
  };

  const handleError = () => {
    console.warn("Vídeo encontrou um erro ou foi bloqueado, revelando interface.");
    handleEnded();
  };

  // Resilient video playback and audio handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Audio calibration: Low/Medium (0.35)
    video.volume = 0.35;

    const attemptPlay = async () => {
      try {
        video.muted = false;
        await video.play();
      } catch {
        // Fallback to muted playback
        video.muted = true;
        await video.play().catch(() => {});

        // Unlock audio on first user touch/click
        const unlockAudio = () => {
          if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.volume = 0.35;
          }
          window.removeEventListener("click", unlockAudio);
          window.removeEventListener("touchstart", unlockAudio);
          window.removeEventListener("keydown", unlockAudio);
        };

        window.addEventListener("click", unlockAudio, { once: true });
        window.addEventListener("touchstart", unlockAudio, { once: true });
        window.addEventListener("keydown", unlockAudio, { once: true });
      }
    };

    attemptPlay();
  }, []);

  // Listen for scroll: if user scrolls before video ends, reveal UI immediately
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        handleEnded();
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      // Trigger reveal near final moment (last 0.5s)
      if (duration > 0 && currentTime >= duration - 0.5) {
        handleEnded();
      }
    }
  };

  const scrollToNext = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: "smooth",
    });
  };

  const scrollToInventory = () => {
    const inventoryEl = document.getElementById("estoque");
    if (inventoryEl) {
      inventoryEl.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollToNext();
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black select-none flex flex-col justify-end">
      {/* 1. Cinematic Native Video - Single Play (loop=false, stops on last frame) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        loop={false}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={handleError}
        className="absolute inset-0 w-full h-full object-cover z-0 bg-black"
      >
        <source src="/porsche.mp4" type="video/mp4" />
      </video>

      {/* 2. Studio Lighting Depth Gradients - Pitch Black integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />

      {/* 3. Animated Text & Call to Action Overlays (Reveals smoothly on video climax/finish) */}
      <div className="relative z-20 pb-12 px-6 max-w-7xl mx-auto w-full flex flex-col items-center sm:items-start">
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform max-w-2xl text-center sm:text-left ${
            revealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          {/* Tagline Badge with Tricolore accent */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-bold uppercase tracking-[0.25em] mb-3 font-display">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Velloce AutoCar • Balneário Camboriú & Caxias do Sul
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none drop-shadow-2xl font-display">
            Mais que carros, entregamos confiança
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-base text-neutral-300 font-light leading-relaxed drop-shadow-md">
            Superesportivos e repasses selecionados com até 40% abaixo da FIPE. Curadoria técnica rigorosa, laudo pericial 100% aprovado e entrega protegida em todo o Brasil.
          </p>

          {/* Performance Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5">
            <div className="px-3 py-2.5 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md text-left">
              <span className="text-[10px] uppercase font-semibold text-neutral-400 block tracking-[0.2em] font-display">
                Curadoria
              </span>
              <span className="text-sm sm:text-base font-extrabold text-white font-display tracking-tight">
                Marcos Paniz
              </span>
            </div>
            <div className="px-3 py-2.5 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md text-left">
              <span className="text-[10px] uppercase font-semibold text-neutral-400 block tracking-[0.2em] font-display">
                Oportunidades
              </span>
              <span className="text-sm sm:text-base font-extrabold text-white font-display tracking-tight">
                Até -40% FIPE
              </span>
            </div>
            <div className="px-3 py-2.5 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md text-left">
              <span className="text-[10px] uppercase font-semibold text-neutral-400 block tracking-[0.2em] font-display">
                Procedência
              </span>
              <span className="text-sm sm:text-base font-extrabold text-emerald-400 font-display tracking-tight">
                100% Periciado
              </span>
            </div>
            <div className="px-3 py-2.5 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md text-left">
              <span className="text-[10px] uppercase font-semibold text-neutral-400 block tracking-[0.2em] font-display">
                Logística
              </span>
              <span className="text-sm sm:text-base font-extrabold text-red-500 font-display tracking-tight">
                Brasil Inteiro
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full sm:w-auto">
            <button
              onClick={scrollToInventory}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 font-display"
            >
              <span>Ver Estoque Exclusivo</span>
              <ShieldCheck className="w-4 h-4" />
            </button>

            <a
              href={COMMERCIAL_LINKS.comprarCarroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-md transition-all flex items-center justify-center gap-2 font-display"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Falar com o Neni</span>
            </a>
          </div>
        </div>

        {/* 4. Scroll Prompt */}
        <div className="w-full flex items-center justify-center pt-8 pointer-events-auto">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="text-[10px] uppercase font-semibold tracking-[0.25em] group-hover:tracking-[0.3em] transition-all font-display">
              Role para explorar os modelos
            </span>
            <div className="w-8 h-8 rounded-full border border-white/10 bg-black/40 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-600/10 transition-all">
              <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-red-500 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export const Porsche360Hero = PorscheHero;
export default PorscheHero;
