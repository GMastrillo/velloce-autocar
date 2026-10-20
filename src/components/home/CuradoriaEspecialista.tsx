"use client";

import { MessageCircle, DollarSign, ArrowRight, CheckCircle2, Award, MapPin } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { COMMERCIAL_LINKS } from "@/data/commercial";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export function CuradoriaEspecialista() {
  return (
    <section className="py-20 bg-bg-surface border-y border-border-subtle relative overflow-hidden">
      {/* Luz focal */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-accent-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Cabeçalho da Seção de Autoridade */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-subtle text-xs font-mono uppercase tracking-widest text-accent-primary">
              <Award className="w-4 h-4 text-accent-primary" />
              <span>Relação Direta & Confiança • Desde 2019</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight">
              Curadoria Assinada por Marcos Paniz <span className="text-accent-primary font-normal text-2xl sm:text-3xl">(o Neni)</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              No mercado de superesportivos e repasses, a procedência depende de quem assina a avaliação. Conectamos você diretamente à mesa de decisão em Balneário Camboriú e Caxias do Sul.
            </p>

            {/* Badges de Presença & Instagrams Verificados */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-white/5 font-mono text-xs text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-tricolore-green" />
                <span>Balneário Camboriú (SC) • Caxias do Sul (RS)</span>
              </div>
              <a
                href={COMMERCIAL_LINKS.instagramNeni}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil verificado do Marcos Paniz no Instagram"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-white/5 hover:border-accent-primary font-mono text-xs text-text-secondary hover:text-accent-primary transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-accent-primary" />
                <span>@omarcospaniz</span>
              </a>
              <a
                href={COMMERCIAL_LINKS.instagramVelloce}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil oficial da Veloce Imports no Instagram"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-white/5 hover:border-tricolore-red font-mono text-xs text-text-secondary hover:text-tricolore-red transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-tricolore-red" />
                <span>@veloceimportsofc</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Os 2 Caminhos de Conversão Clara (Comprar vs Vender) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Comprar com Especialista */}
          <Reveal direction="up" delay={100}>
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.15)"
              className="p-6 sm:p-8 rounded-2xl bg-bg-card border-border-subtle hover:border-tricolore-green/50 transition-all duration-300 h-full flex flex-col justify-between shadow-floating group"
              innerClassName="flex flex-col justify-between h-full space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-tricolore-green/15 text-tricolore-green border border-tricolore-green/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-tricolore-green font-bold px-3 py-1 rounded-full bg-tricolore-green/10 border border-tricolore-green/20">
                    Atendimento VIP Comprador
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl text-text-primary group-hover:text-tricolore-green transition-colors">
                    Comprar com Especialista (Falar com o Neni)
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                    Atendimento consultivo direto com quem garimpa e avalia cada exemplar. Receba vídeos em alta definição dos detalhes de lataria, motor e o laudo cautelar oficial em PDF antes de qualquer decisão.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-tricolore-green shrink-0" />
                    <span>Dossiê pericial completo com histórico forense</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-tricolore-green shrink-0" />
                    <span>Reserva garantida para fechamento imediato</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-tricolore-green shrink-0" />
                    <span>Logística com plataforma segurada para todo o Brasil</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href={COMMERCIAL_LINKS.comprarCarroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar com o Marcos (o Neni) no WhatsApp para comprar veículo"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-tricolore-green hover:bg-tricolore-green/90 active:scale-[0.98] text-black font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md group/btn cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar com o Neni no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Vender Meu Veículo */}
          <Reveal direction="up" delay={180}>
            <SpotlightCard
              spotlightColor="rgba(212, 175, 55, 0.16)"
              className="p-6 sm:p-8 rounded-2xl bg-bg-card border-border-subtle hover:border-accent-primary/50 transition-all duration-300 h-full flex flex-col justify-between shadow-floating group"
              innerClassName="flex flex-col justify-between h-full space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/15 text-accent-primary border border-accent-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent-primary font-bold px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20">
                    Liquidez Imediata
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl text-text-primary group-hover:text-accent-primary transition-colors">
                    Vender Meu Veículo (Central de Compras)
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                    Precisa de liquidez ágil para o seu seminovo ou esportivo? Avaliamos seu veículo com seriedade comercial e realizamos pagamento à vista via PIX/TED sem burocracia ou consignação transparente.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                    <span>Avaliação mercadológica justa e sem desvalorização abusiva</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                    <span>Pagamento à vista e quitação imediata de débitos/gravame</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                    <span>Opção de consignação digital com ampla base de investidores</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href={COMMERCIAL_LINKS.venderCarroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar com a Central de Compras da Velloce para vender veículo"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-accent-primary hover:bg-accent-gold-soft active:scale-[0.98] text-bg-primary font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md group/btn cursor-pointer"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>Avaliar Meu Veículo com a Central</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
