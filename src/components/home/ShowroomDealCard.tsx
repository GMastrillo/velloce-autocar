"use client";

import Image from "next/image";
import { ShieldCheck, TrendingDown, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { COMMERCIAL_LINKS } from "@/data/commercial";

interface ShowroomDealCardProps {
  deal?: {
    brand: string;
    model: string;
    year: number;
    yearModel: number;
    price: number;
    fipePrice: number;
    mileage: number;
    location: string;
    image: string;
    specsBadge: string;
  };
}

export function ShowroomDealCard({ deal }: ShowroomDealCardProps) {
  // Oportunidade real de liquidez em destaque na Hero (Porsche 911 Carrera GTS ou similar de prestígio)
  const currentDeal = deal || {
    brand: "Porsche",
    model: "911 Carrera GTS Coupé",
    year: 2023,
    yearModel: 2023,
    price: 1180000,
    fipePrice: 1250000,
    mileage: 4800,
    location: "Balneário Camboriú, SC",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    specsBadge: "Pacote GTS • PPF Frontal",
  };

  const fipeSavings = currentDeal.fipePrice - currentDeal.price;
  const savingsPercent = Math.round((fipeSavings / currentDeal.fipePrice) * 100);

  const whatsappMessage = `Olá Marcos! Vi o case de liquidez do ${currentDeal.brand} ${currentDeal.model} na Velloce e gostaria de consultar a lista privada de repasses.`;
  const whatsappUrl = `${COMMERCIAL_LINKS.comprarCarroUrl}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Halo de iluminação sutil de estúdio */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-primary/20 via-tricolore-green/10 to-accent-primary/5 blur-xl opacity-70 pointer-events-none" />

      <SpotlightCard
        spotlightColor="rgba(212, 175, 55, 0.16)"
        className="relative rounded-2xl bg-bg-card border-border-subtle hover:border-accent-primary/40 transition-all duration-300 shadow-floating overflow-hidden"
      >
        {/* Header do Card: Eyebrow e Status */}
        <div className="p-4 sm:p-5 pb-3 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-tricolore-green animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-secondary font-semibold">
              Case de Liquidez • Acervo Selecionado
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-accent-primary/10 border border-accent-primary/25 text-accent-primary font-mono text-[10px] uppercase font-bold tracking-wider">
            {currentDeal.location}
          </span>
        </div>

        {/* Palco Visual do Veículo com Vinheta Suave */}
        <div className="relative w-full h-52 sm:h-64 overflow-hidden bg-bg-surface">
          <Image
            src={currentDeal.image}
            alt={`${currentDeal.brand} ${currentDeal.model}`}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-black/30 pointer-events-none" />

          {/* Badge Laudo 100% Aprovado */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-white shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-tricolore-green" />
            <span className="font-mono text-[10px] uppercase tracking-wider font-medium">
              Laudo 100% Aprovado
            </span>
          </div>

          {/* Badge Economia FIPE */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-tricolore-green/40 text-tricolore-green shadow-md">
            <TrendingDown className="w-3.5 h-3.5" />
            <span className="font-mono text-xs font-bold tabular-nums">
              -{savingsPercent}% FIPE
            </span>
          </div>

          {/* Chip de Destaque Técnico */}
          <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-white/10">
            <span className="font-mono text-[10px] text-text-primary tracking-wide">
              {currentDeal.specsBadge}
            </span>
          </div>
        </div>

        {/* Telemetria Financeira e Ficha Técnica */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Título & Detalhes Rápidos */}
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold">
                {currentDeal.brand}
              </span>
              <span className="font-mono text-xs text-text-muted tabular-nums">
                {currentDeal.year}/{currentDeal.yearModel} • {formatNumber(currentDeal.mileage)} km
              </span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mt-1 tracking-tight">
              {currentDeal.model}
            </h3>
          </div>

          {/* Painel de Telemetria Financeira Comparativa (FIPE vs Velloce) */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/8 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-text-muted font-mono uppercase tracking-wider">
                Tabela FIPE de Referência
              </span>
              <span className="font-mono text-text-secondary line-through tabular-data">
                {formatCurrency(currentDeal.fipePrice)}
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-1 border-t border-white/5">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-accent-primary font-semibold">
                  Valor Velloce
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-text-primary tabular-data">
                  {formatCurrency(currentDeal.price)}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-mono uppercase text-text-muted">
                  Economia Gerada
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-tricolore-green tabular-data">
                  + {formatCurrency(fipeSavings)}
                </span>
              </div>
            </div>
          </div>

          {/* Garantias Periciais Rápidas */}
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-text-secondary">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-tricolore-green shrink-0" />
              <span>Sem leilão ou sinistro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-tricolore-green shrink-0" />
              <span>Pintura periciada</span>
            </div>
          </div>

          {/* Botão de Ação Direta */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar lista privada e dossiê do ${currentDeal.brand} ${currentDeal.model} com Marcos`}
            className="w-full py-3.5 px-5 rounded-xl bg-accent-primary hover:bg-accent-gold-soft text-bg-primary font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-smooth shadow-lg group cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar Lista Privada com Marcos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </SpotlightCard>
    </div>
  );
}
