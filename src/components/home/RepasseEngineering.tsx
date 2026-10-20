"use client";

import { Building2, ShieldCheck, Zap, Truck } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    step: "01",
    icon: Building2,
    tag: "Origem & Giro Rápido",
    title: "Captação Direta em Lotes",
    description:
      "Grandes concessionárias recebem veículos na troca por 0km e priorizam liquidez imediata, repassando lotes à vista com margem real abaixo da FIPE.",
    highlight: "Zero intermediários • Até -40% FIPE",
  },
  {
    step: "02",
    icon: ShieldCheck,
    tag: "Blindagem de Risco",
    title: "Rigor Pericial Pré-Compra",
    description:
      "Inspeção técnica em mais de 150 pontos: estrutura, mecânica, medição micrométrica de pintura e varredura documental forense.",
    highlight: "Laudo cautelar 100% aprovado em PDF",
  },
  {
    step: "03",
    icon: Zap,
    tag: "Acesso Privativo",
    title: "Liquidez nos Grupos VIP",
    description:
      "Oportunidades aprovadas são publicadas em primeira mão nos nossos canais silenciosos do WhatsApp para investidores e compradores finais.",
    highlight: "Notificações limpas • Reserva imediata",
  },
  {
    step: "04",
    icon: Truck,
    tag: "Pós-Venda & Logística",
    title: "Entrega Nacional Segurada",
    description:
      "Despachamos para qualquer estado do Brasil via plataforma fechada ou cegonha homologada, com seguro total e rastreamento em tempo real.",
    highlight: "Entrega técnica na porta da sua casa",
  },
];

export function RepasseEngineering() {
  return (
    <section className="py-20 sm:py-24 bg-bg-surface border-y border-border-subtle relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Cabeçalho da Seção */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-subtle text-xs font-mono uppercase tracking-widest text-accent-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              <span>Engenharia de Liquidez • Padrão Velloce</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
              Como Garantimos Margem Real e Segurança Pericial
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Da captação direta em concessionárias até a entrega segurada na sua garagem: um processo transparente de ponta a ponta.
            </p>
          </div>
        </Reveal>

        {/* Grid de 4 Pilares Operacionais (8pt Grid & Concentric Radius) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} direction="up" delay={index * 90}>
                <SpotlightCard
                  spotlightColor="rgba(212, 175, 55, 0.10)"
                  className="p-6 rounded-2xl bg-bg-card border-border-subtle hover:border-white/15 transition-all duration-200 flex flex-col justify-between h-full shadow-card group"
                  innerClassName="flex flex-col justify-between h-full space-y-5"
                >
                  <div className="space-y-4">
                    {/* Linha Superior: Ícone e Número Tabular */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-bg-surface border border-white/[0.08] flex items-center justify-center text-accent-primary group-hover:border-accent-primary/40 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-2xl font-bold text-white/15 group-hover:text-accent-primary/40 transition-colors tabular-data">
                        {item.step}
                      </span>
                    </div>

                    {/* Tag de Contexto */}
                    <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-text-muted">
                      {item.tag}
                    </span>

                    {/* Título e Descrição */}
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg text-text-primary">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Destaque Técnico no Rodapé do Card */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-tricolore-green">
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
