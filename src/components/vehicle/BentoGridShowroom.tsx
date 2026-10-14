"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingDown, Users, Sparkles, MessageCircle } from "lucide-react";
import { Vehicle } from "@/types";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LuxuryHeading } from "@/components/ui/LuxuryHeading";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { COMMERCIAL_LINKS } from "@/data/commercial";

interface BentoGridShowroomProps {
  vehicles: Vehicle[];
}

export function BentoGridShowroom({ vehicles }: BentoGridShowroomProps) {
  const heroVehicle = vehicles[0];

  if (!heroVehicle) return null;

  const fipeSavings = heroVehicle.fipePrice ? heroVehicle.fipePrice - heroVehicle.price : 0;
  const savingsPercent = heroVehicle.fipePrice ? Math.round((fipeSavings / heroVehicle.fipePrice) * 100) : 0;

  return (
    <section className="relative py-16 sm:py-24 bg-bg-primary overflow-hidden">
      {/* Luz neutra de estúdio no topo */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-b from-white/[0.03] to-transparent blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <LuxuryHeading
            subtitle="Curadoria Exclusiva • Balneário Camboriú & Caxias do Sul"
            title="Showroom de Prestígio & Oportunidades"
            description="Veículos selecionados de procedência atestada, laudo cautelar 100% aprovado e margem real abaixo da tabela FIPE."
          />
          <Link
            href="/veiculos"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-gold hover:text-white transition-colors group shrink-0"
          >
            <span>Ver Acervo Completo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid Editorial de Hiperluxo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card Principal: Hero Bento (8 colunas) */}
          <div className="lg:col-span-8 flex flex-col">
            <SpotlightCard
              spotlightColor="rgba(212, 175, 55, 0.15)"
              className="p-0 rounded-2xl bg-bg-card border-border-subtle hover:border-white/20 transition-all duration-300 flex-1 flex flex-col overflow-hidden"
              innerClassName="flex flex-col h-full"
            >
              {/* Estágio Visual: Foto Nítida com Badges Flutuantes */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-bg-surface shrink-0">
                {heroVehicle.images[0] && (
                  <Image
                    src={heroVehicle.images[0]}
                    alt={`${heroVehicle.brand} ${heroVehicle.model}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                )}
                {/* Vinheta suave de estúdio (sem bloquear a foto) */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-black/40 pointer-events-none" />

                {/* Badge Superior Esquerdo */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-tricolore-green animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                    Destaque • {heroVehicle.location}
                  </span>
                </div>

                {/* Badge Superior Direito: Economia FIPE */}
                {savingsPercent > 0 && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-tricolore-red/50 text-white shadow-lg">
                    <TrendingDown className="w-3.5 h-3.5 text-tricolore-red" />
                    <span className="font-mono text-xs font-bold text-white tabular-nums">
                      -{savingsPercent}% FIPE
                    </span>
                  </div>
                )}
              </div>

              {/* Dock de Informações: Estrutura Editorial com Alto Contraste */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Linha 1: Título e Preço */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-gold">
                      {heroVehicle.brand} • {heroVehicle.year}/{heroVehicle.yearModel}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary tracking-tight mt-1 leading-tight">
                      {heroVehicle.title}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    {heroVehicle.fipePrice && (
                      <span className="font-mono text-xs text-text-muted line-through block tabular-nums">
                        FIPE: {formatCurrency(heroVehicle.fipePrice)}
                      </span>
                    )}
                    <span className="font-mono text-2xl sm:text-3xl font-black text-white tabular-nums">
                      {formatCurrency(heroVehicle.price)}
                    </span>
                  </div>
                </div>

                {/* Linha 2: Grade de Métricas em Blocos com Fundo Escuro */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-white/10">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      Quilometragem
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-white tabular-nums">
                      {formatNumber(heroVehicle.mileage)} km
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      Câmbio
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-white truncate block">
                      {heroVehicle.transmission}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      Combustível
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-white truncate block">
                      {heroVehicle.fuelType}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      Cor Externa
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-white truncate block">
                      {heroVehicle.color}
                    </span>
                  </div>
                </div>

                {/* Linha 3: Barra de Ação & Status */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-tricolore-green">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Laudo cautelar 100% aprovado • Pronta entrega</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/veiculos/${heroVehicle.slug}`}
                      className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors text-center"
                    >
                      Dossiê Completo
                    </Link>
                    <a
                      href={`${COMMERCIAL_LINKS.comprarCarroUrl}?text=${encodeURIComponent(
                        `Olá! Gostaria de informações sobre o ${heroVehicle.title} disponível na Velloce.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 text-tricolore-green" />
                      <span>Negociar</span>
                    </a>
                  </div>
                </div>

              </div>
            </SpotlightCard>
          </div>

          {/* Coluna de Micro-Cards Assimétricos (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Micro-Card 1: Margem FIPE & Oportunidades */}
            <SpotlightCard
              className="flex-1 flex flex-col p-6 rounded-2xl bg-bg-card border-border-subtle"
              innerClassName="flex flex-col justify-between h-full"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-accent-gold/10 border border-accent-gold/20 text-accent-gold">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-gold px-2.5 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20">
                  Repasses Reais
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <span className="font-mono text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  Até 40%
                </span>
                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                  Abaixo da Tabela FIPE
                </p>
                <p className="text-text-muted text-xs leading-relaxed pt-1">
                  Acesso direto a veículos de concessionárias cadastradas com margem real para investidores e clientes finais.
                </p>
              </div>
            </SpotlightCard>

            {/* Micro-Card 2: Laudo Cautelar 100% Aprovado */}
            <SpotlightCard
              className="flex-1 flex flex-col p-6 rounded-2xl bg-bg-card border-border-subtle"
              innerClassName="flex flex-col justify-between h-full"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-tricolore-green/10 border border-tricolore-green/20 text-tricolore-green">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-tricolore-green px-2.5 py-1 rounded-full bg-tricolore-green/10 border border-tricolore-green/20">
                  100% Aprovado
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <h4 className="font-display font-bold text-lg text-white">
                  Rigor Pericial Certificado
                </h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  Avaliação estrutural, mecânica e de espessura de pintura antes de qualquer entrada no acervo. Zero carros maquiados.
                </p>
              </div>
            </SpotlightCard>

            {/* Micro-Card 3: Grupos VIP & Eixo BC • CXS */}
            <SpotlightCard
              className="flex-1 flex flex-col p-6 rounded-2xl bg-bg-card border-border-subtle"
              innerClassName="flex flex-col justify-between h-full"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  Acesso Privativo
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Grupos VIP de Investidores
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed">
                    Receba repasses em primeira mão antes da publicação geral no site e redes sociais.
                  </p>
                </div>
                <a
                  href="#grupos-vip"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-gold hover:text-white transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Entrar nos Grupos VIP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </SpotlightCard>

          </div>

        </div>
      </div>
    </section>
  );
}
