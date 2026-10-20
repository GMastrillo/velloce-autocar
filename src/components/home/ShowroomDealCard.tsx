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
      <SpotlightCard
        spotlightColor="rgba(212, 175, 55, 0.12)"
        className="relative rounded-3xl bg-bg-card border-border-subtle hover:border-white/15 transition-all duration-300 shadow-floating overflow-hidden"
      >
        {/* Header do Card: Eyebrow e Localização */}
        <div className="px-5 py-3.5 flex items-center justify-between border-b border-white/[0.06] bg-bg-surface/60">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-tricolore-green" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-secondary font-medium">
              Destaque do Estoque
            </span>
          </div>
          <span className="font-mono text-[11px] text-text-muted">
            {currentDeal.location}
          </span>
        </div>

        {/* Palco Visual do Veículo — Foco Total na Foto (HIG Deference) */}
        <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-bg-surface">
          <Image
            src={currentDeal.image}
            alt={`${currentDeal.brand} ${currentDeal.model}`}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-transparent to-transparent pointer-events-none" />

          {/* Único Badge Sobreposto: Economia FIPE */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-tricolore-green shadow-sm">
            <TrendingDown className="w-3.5 h-3.5" />
            <span className="font-mono text-xs font-bold tabular-nums">
              -{savingsPercent}% FIPE
            </span>
          </div>
        </div>

        {/* Telemetria Financeira e Ficha Técnica */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Título & Detalhes Rápidos */}
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-primary font-semibold">
                {currentDeal.brand} • {currentDeal.specsBadge}
              </span>
              <span className="font-mono text-xs text-text-muted tabular-nums shrink-0">
                {currentDeal.year}/{currentDeal.yearModel} • {formatNumber(currentDeal.mileage)} km
              </span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mt-1 tracking-tight">
              {currentDeal.model}
            </h3>
          </div>

          {/* Painel de Telemetria Financeira Comparativa (FIPE vs Velloce) */}
          <div className="p-4 rounded-2xl bg-bg-surface border border-white/[0.06] space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-text-muted font-mono uppercase tracking-wider">
                Tabela FIPE
              </span>
              <span className="font-mono text-text-secondary line-through tabular-data">
                {formatCurrency(currentDeal.fipePrice)}
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-2 border-t border-white/[0.06]">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-accent-primary font-medium">
                  Valor Velloce
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-text-primary tabular-data">
                  {formatCurrency(currentDeal.price)}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-mono uppercase text-text-muted">
                  Economia Real
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-tricolore-green tabular-data">
                  + {formatCurrency(fipeSavings)}
                </span>
              </div>
            </div>
          </div>

          {/* Garantias Periciais Rápidas */}
          <div className="flex items-center justify-between gap-2 text-xs font-mono text-text-secondary pt-0.5">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-tricolore-green shrink-0" />
              <span>Laudo 100% aprovado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-tricolore-green shrink-0" />
              <span>Sem leilão ou sinistro</span>
            </div>
          </div>

          {/* Botão de Ação Direta (Capsule Apple HIG) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar lista privada e dossiê do ${currentDeal.brand} ${currentDeal.model} com Marcos`}
            className="w-full min-h-[48px] py-3 px-6 rounded-full bg-accent-primary hover:bg-accent-gold-soft active:scale-[0.98] text-bg-primary font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md group cursor-pointer"
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
