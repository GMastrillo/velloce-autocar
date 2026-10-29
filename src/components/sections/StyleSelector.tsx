"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Gauge, Zap, Shield, Sparkles } from "lucide-react";
import { formatCurrencyBRL } from "@/lib/utils";
import { COMMERCIAL_LINKS } from "@/data/commercial";

interface CategoryStyle {
  id: string;
  label: string;
  subtitle: string;
  carName: string;
  priceStart: number;
  highlight: string;
  image: string;
  features: string[];
}

const CATEGORIES: CategoryStyle[] = [
  {
    id: "esportivos",
    label: "SUPERESPORTIVOS",
    subtitle: "Purismo, aerodinâmica de ponta e som visceral de alta rotação",
    carName: "Porsche 911 GT3 RS",
    priceStart: 1890000,
    highlight: "525 cv • Aspiração Natural",
    image: "/images/porsche_hero_dark.jpg",
    features: ["Câmbio PDK de resposta imediata", "Asa ativa DRS de pista", "Freios cerâmicos PCCB"],
  },
  {
    id: "suvs",
    label: "SUVS DE PERFORMANCE",
    subtitle: "Espaço, imponência, tração integral e opção de blindagem nível III-A",
    carName: "Porsche Cayenne Turbo GT",
    priceStart: 980000,
    highlight: "659 cv • V8 Biturbo",
    image: "/images/porsche_cayenne.jpg",
    features: ["Suspensão pneumática adaptativa", "4 lugares executivos", "Recordista em Nürburgring"],
  },
  {
    id: "sedas",
    label: "SEDÃS & ELÉTRICOS",
    subtitle: "Conforto executivo de primeira classe com torque brutal imediato",
    carName: "Porsche Taycan Turbo S",
    priceStart: 790000,
    highlight: "761 cv • 0-100 em 2,8s",
    image: "/images/porsche_taycan.jpg",
    features: ["Arquitetura elétrica de 800V", "Eixo traseiro esterçante", "Recarga rápida em 22 min"],
  },
];

export default function StyleSelector() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);
  const activeStyle = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0];

  return (
    <section id="estilos" className="py-24 bg-[#090b0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red-500 font-semibold block mb-2 font-display">
            Curadoria por Estilo de Vida
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            Encontre Pelo Seu Estilo
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base font-light">
            Seja para bater recordes no autódromo, rodar em família com blindagem ou acelerar rumo ao futuro elétrico.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-zinc-950/80 border border-white/10 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-display ${
                  activeTab === cat.id
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStyle.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/70 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl"
          >
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-red-400 uppercase tracking-widest font-display">
                <Sparkles className="w-3.5 h-3.5" />
                {activeStyle.highlight}
              </span>

              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase font-display">
                {activeStyle.carName}
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                {activeStyle.subtitle}
              </p>

              <div className="space-y-3 pt-2">
                {activeStyle.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-zinc-400 block tracking-wider font-semibold">
                    A partir de
                  </span>
                  <span className="text-2xl font-black text-white font-display">
                    {formatCurrencyBRL(activeStyle.priceStart)}
                  </span>
                </div>

                <a
                  href={`${COMMERCIAL_LINKS.comprarCarroUrl}?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20ve%C3%ADculos%20da%20categoria%20${encodeURIComponent(activeStyle.label)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer font-display"
                >
                  <span>Consultar</span>
                  <ChevronRight className="w-4 h-4 text-red-500" />
                </a>
              </div>
            </div>

            {/* Right Media */}
            <div className="lg:col-span-7 relative h-[260px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={activeStyle.image}
                alt={activeStyle.carName}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
