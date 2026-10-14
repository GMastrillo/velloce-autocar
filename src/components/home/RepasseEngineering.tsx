"use client";

import { Building2, ShieldCheck, Zap } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    step: "01",
    icon: Building2,
    tag: "Origem & Giro Rápido",
    title: "Captação em Concessionárias",
    description:
      "Grandes redes recebem veículos de alto padrão como entrada na troca por 0km e priorizam giro imediato de capital, repassando lotes à vista expressivamente abaixo da tabela.",
    highlight: "Zero intermediários • Compra direta em volume",
  },
  {
    step: "02",
    icon: ShieldCheck,
    tag: "Blindagem de Risco",
    title: "Filtro Pericial Velloce",
    description:
      "Avaliação estrutural completa em mais de 150 itens, aferição micrométrica de espessura de pintura e checagem documental forense. Zero carros com sinistro ou leilão.",
    highlight: "Laudo cautelar 100% aprovado em PDF",
  },
  {
    step: "03",
    icon: Zap,
    tag: "Acesso em Primeira Mão",
    title: "Liquidez nos Grupos VIP",
    description:
      "As oportunidades aprovadas são disparadas primeiro nos nossos canais privados do WhatsApp com margem de 15% a 40% abaixo da FIPE para compra rápida com reserva.",
    highlight: "Notificações silenciosas • Agilidade de fechamento",
  },
];

export function RepasseEngineering() {
  return (
    <section className="py-20 bg-bg-surface border-y border-border-subtle relative overflow-hidden">
      {/* Luz focal de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-accent-primary/5 via-tricolore-green/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Cabeçalho da Seção */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-subtle text-xs font-mono uppercase tracking-widest text-accent-primary">
              <span className="w-2 h-2 rounded-full bg-accent-primary" />
              <span>Transparência de Margem • Como Funciona</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
              A Engenharia do Repasse em 3 Passos
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Eliminamos a incerteza do mercado com um modelo industrial de captação e triagem pericial. Entenda como garantimos liquidez e até 40% abaixo da FIPE.
            </p>
          </div>
        </Reveal>

        {/* Grid de 3 Passos Numerados com SpotlightCards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} direction="up" delay={index * 120}>
                <SpotlightCard
                  spotlightColor="rgba(212, 175, 55, 0.14)"
                  className="p-6 sm:p-8 rounded-2xl bg-bg-card border-border-subtle hover:border-accent-primary/30 transition-all duration-300 flex flex-col justify-between h-full shadow-raised group"
                  innerClassName="flex flex-col justify-between h-full space-y-6"
                >
                  <div className="space-y-5">
                    {/* Linha Superior: Ícone e Número em Monospace */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent-primary group-hover:scale-110 group-hover:border-accent-primary/40 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-3xl sm:text-4xl font-black text-white/20 group-hover:text-accent-primary/50 transition-colors tabular-data">
                        {item.step}
                      </span>
                    </div>

                    {/* Tag de Contexto */}
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 font-mono text-[11px] uppercase tracking-wider text-text-muted">
                      {item.tag}
                    </span>

                    {/* Título e Descrição */}
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-accent-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Destaque Técnico no Rodapé do Card */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-tricolore-green">
                    <span className="w-1.5 h-1.5 rounded-full bg-tricolore-green shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
