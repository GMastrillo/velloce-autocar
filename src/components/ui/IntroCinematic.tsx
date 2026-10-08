"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Volume2, VolumeX, ShieldCheck } from "lucide-react";

interface IntroCinematicProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export function IntroCinematic({ onComplete, forceShow = false }: IntroCinematicProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Listen for custom trigger to replay anytime from navbar or hero
  useEffect(() => {
    const handleOpen = () => {
      setProgress(0);
      setIsExiting(false);
      setIsOpen(true);
    };
    window.addEventListener("velloce_open_intro", handleOpen);
    return () => window.removeEventListener("velloce_open_intro", handleOpen);
  }, []);

  // Check URL query (?intro=true) or session persistence
  useEffect(() => {
    let shouldOpen = false;
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("intro") === "true") {
        shouldOpen = true;
      }
    }

    const seen = sessionStorage.getItem("velloce_premium_intro_v3");
    if (seen && !forceShow && !shouldOpen) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setIsExiting(false);
      setIsOpen(true);
    }, 0);

    return () => clearTimeout(timer);
  }, [forceShow, onComplete]);

  // Refined sub-bass acoustic twin-turbo resonance sound (Web Audio API)
  const playSubtleIgnitionSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Warm acoustic sub-bass resonant swell (45Hz -> 95Hz -> 50Hz)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(45, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(95, ctx.currentTime + 0.4);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 1.1);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(160, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.25);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const handleEnter = () => {
    if (isExiting) return;
    playSubtleIgnitionSound();
    setIsExiting(true);
    sessionStorage.setItem("velloce_premium_intro_v3", "true");

    setTimeout(() => {
      setIsOpen(false);
      onComplete?.();
    }, 700);
  };

  // Continuous progress timer (2.8 seconds)
  useEffect(() => {
    if (!isOpen || isExiting) return;

    const startTime = Date.now();
    const duration = 2800; // 2.8s

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min((elapsed / duration) * 100, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        handleEnter();
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isOpen, isExiting]);

  // Keyboard accessibility: any key enters immediately
  useEffect(() => {
    if (!isOpen) return;
    const onKey = () => {
      handleEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, isExiting]);

  if (!isOpen) return null;

  return (
    <div
      onClick={handleEnter}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#060709] text-white select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-6 py-8 sm:p-12 cursor-pointer ${
        isExiting ? "opacity-0 scale-105 pointer-events-none filter blur-sm" : "opacity-100 scale-100"
      }`}
      aria-label="Abertura Oficial Velloce AutoCar - Clique para acessar"
    >
      {/* Background Luxury Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#D4AF37]/5 via-white/[0.02] to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1B1E26_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-[#060709]" />
      </div>

      {/* Top Bar: Minimal Audio Toggle */}
      <div className="relative z-10 w-full max-w-6xl flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSoundEnabled(!soundEnabled);
          }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[11px] font-mono tracking-widest text-zinc-400 hover:text-white transition-all cursor-pointer"
          title="Alternar áudio da experiência"
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-[#009246]" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
          )}
          <span>{soundEnabled ? "ÁUDIO: ATIVO" : "ÁUDIO: MUDO"}</span>
        </button>

        <span className="text-[10px] font-mono tracking-widest text-zinc-600">
          CLIQUE EM QUALQUER LUGAR PARA ENTRAR
        </span>
      </div>

      {/* Centerpiece: Clean Ultra-Premium Brand Presentation */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto space-y-6 max-w-xl">
        
        {/* Emblem com Moldura Refinada */}
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#009246]/20 via-[#D4AF37]/20 to-[#CD212A]/20 blur-md opacity-40" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/20 bg-black p-1 shadow-2xl animate-float-slow">
            <Image
              src="/logo-velloce.jpg"
              alt="Velloce AutoCar"
              width={112}
              height={112}
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Nome da Marca com Espaçamento Editorial */}
        <div className="space-y-3">
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-[0.35em] text-white uppercase leading-none">
            VELLOCE
          </h1>

          {/* Hairline Tricolore Italiano */}
          <div className="flex h-[2px] w-40 sm:w-56 mx-auto rounded-full overflow-hidden shadow-sm">
            <span className="w-1/3 bg-[#009246]" />
            <span className="w-1/3 bg-white" />
            <span className="w-1/3 bg-[#CD212A]" />
          </div>

          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-semibold pt-1">
            Curadoria & Repasses Automotivos
          </p>
        </div>

        {/* Localização & Prestígio */}
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-zinc-400">
          <span>BALNEÁRIO CAMBORIÚ</span>
          <span className="text-zinc-600">•</span>
          <span>CAXIAS DO SUL</span>
        </div>

        {/* Barra de Progresso da Abertura */}
        <div className="w-56 sm:w-64 space-y-2 pt-2">
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#009246] via-[#D4AF37] to-[#CD212A] transition-all duration-75 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-500">
            <span>INICIANDO</span>
            <span className="text-[#D4AF37] tabular-nums font-semibold">{Math.round(progress)}%</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Assinatura de Confiança */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center space-y-2">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">
          <ShieldCheck className="w-3.5 h-3.5 text-[#009246]" />
          <span>Laudos 100% Aprovados • Desde 2019</span>
        </div>
      </div>

    </div>
  );
}
