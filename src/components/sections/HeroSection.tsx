"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, MessageSquare, ArrowRight } from "lucide-react";
import { formatCurrencyBRL } from "@/lib/utils";
import { COMMERCIAL_LINKS } from "@/data/commercial";

interface HeroCar {
  id: string;
  name: string;
  tagline: string;
  price: number;
  fipe: number;
  power: string;
  accel: string;
  topSpeed: string;
  image: string;
  badge: string;
}

const HERO_MODELS: HeroCar[] = [
  {
    id: "gt3-rs",
    name: "Porsche 911 GT3 RS",
    tagline: "Engenharia de pista homologada para o asfalto • Pacote Weissach",
    price: 2490000,
    fipe: 2650000,
    power: "525 cv",
    accel: "3,2s",
    topSpeed: "296 km/h",
    image: "/images/porsche_hero_dark.jpg",
    badge: "Destaque Principal • Balneário Camboriú",
  },
  {
    id: "cayenne-turbo-gt",
    name: "Porsche Cayenne Turbo GT",
    tagline: "O SUV mais rápido e visceral da história com blindagem III-A",
    price: 1390000,
    fipe: 1520000,
    power: "659 cv",
    accel: "3,3s",
    topSpeed: "305 km/h",
    image: "/images/porsche_cayenne.jpg",
    badge: "V8 Biturbo • Blindagem Certificada",
  },
  {
    id: "taycan-turbo-s",
    name: "Porsche Taycan Turbo S",
    tagline: "A força eletrizante do futuro automotivo com 1.050 Nm de torque",
    price: 980000,
    fipe: 1090000,
    power: "761 cv",
    accel: "2,8s",
    topSpeed: "260 km/h",
    image: "/images/porsche_taycan.jpg",
    badge: "100% Elétrico • Wallbox Inclusa",
  },
];

export default function HeroSection() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = HERO_MODELS[activeCarIndex];

  const handleNext = useCallback(() => {
    setActiveCarIndex((prev) => (prev + 1) % HERO_MODELS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveCarIndex((prev) => (prev - 1 + HERO_MODELS.length) % HERO_MODELS.length);
  }, []);

  // Transição automática a cada 5 segundos (pausa quando o usuário passar o mouse ou interagir)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative min-h-[92vh] w-full bg-black flex flex-col justify-between overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5"
    >
      {/* Background Spotlight / Ambience */}
      <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-red-950/20 via-black to-black pointer-events-none" />

      {/* Top Breadcrumb & Controls */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-10 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400 font-display">
            Showroom Dinâmico Velloce
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Modelo anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Próximo modelo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Center Showcase: Image and Spec Overlay */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 py-6">
        {/* Left: Info & Specs */}
        <div className="lg:col-span-5 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <span className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-red-500 text-xs font-bold uppercase tracking-wider font-display">
                {current.badge}
              </span>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight font-display">
                {current.name}
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                {current.tagline}
              </p>

              <div className="py-2">
                <span className="text-xs uppercase font-medium text-zinc-400 block tracking-wider">
                  Investimento Velloce
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-white font-display">
                    {formatCurrencyBRL(current.price)}
                  </span>
                  <span className="text-xs text-zinc-400 line-through">
                    FIPE: {formatCurrencyBRL(current.fipe)}
                  </span>
                </div>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] uppercase text-zinc-400 font-semibold block">Potência</span>
                  <span className="text-sm sm:text-base font-bold text-white font-display">{current.power}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] uppercase text-zinc-400 font-semibold block">0 a 100</span>
                  <span className="text-sm sm:text-base font-bold text-emerald-400 font-display">{current.accel}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] uppercase text-zinc-400 font-semibold block">Vel. Máx</span>
                  <span className="text-sm sm:text-base font-bold text-red-500 font-display">{current.topSpeed}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={`${COMMERCIAL_LINKS.comprarCarroUrl}?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20${encodeURIComponent(current.name)}%20(${encodeURIComponent(formatCurrencyBRL(current.price))}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer font-display"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Proposta Exclusiva</span>
                </a>
                <a
                  href="#estoque"
                  className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer font-display"
                >
                  <span>Explorar Estoque</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Immersive Vehicle Image */}
        <div className="lg:col-span-7 relative h-[280px] sm:h-[420px] lg:h-[480px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Model Indicators */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center gap-3 z-10 pb-4">
        {HERO_MODELS.map((model, idx) => (
          <button
            key={model.id}
            onClick={() => setActiveCarIndex(idx)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              idx === activeCarIndex ? "w-10 bg-red-600" : "w-3 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Ver ${model.name}`}
          />
        ))}
      </div>
    </section>
  );
}
