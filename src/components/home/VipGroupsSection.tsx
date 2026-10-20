"use client";

import { 
  Users, 
  Flame, 
  Car, 
  Bike, 
  Truck, 
  Ship, 
  Plane, 
  ArrowRight, 
  Lock, 
  MessageCircle 
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

export function VipGroupsSection() {
  return (
    <section className="py-20 sm:py-24 bg-bg-primary relative overflow-hidden" id="grupos-vip">
      {/* Luz ambiente de prestígio */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-accent-primary/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Cabeçalho da Seção */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-subtle text-xs font-mono uppercase tracking-widest text-tricolore-green">
              <Users className="w-4 h-4" />
              <span>Canais Oficiais Silenciosos • WhatsApp</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
              Acesso Privativo a Repasses com até 40% Abaixo da FIPE
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Oportunidades reais com margem de revenda ou uso imediato diretamente no seu celular. Canais 100% silenciosos onde apenas administradores postam fichas técnicas e laudos.
            </p>
          </div>
        </Reveal>

        {/* ========================================================
            NÍVEL 1: 2 BENTO CARDS PRINCIPAIS EM DESTAQUE (50/50)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Linha Leve & Giro Rápido */}
          <Reveal direction="up" delay={100}>
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.16)"
              className="p-6 sm:p-8 rounded-2xl bg-bg-card border-border-subtle hover:border-tricolore-green/50 transition-all duration-300 h-full flex flex-col justify-between shadow-floating group"
              innerClassName="flex flex-col justify-between h-full space-y-6"
            >
              <div className="space-y-5">
                {/* Header do Card */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-12 h-12 rounded-xl bg-tricolore-green/15 text-tricolore-green flex items-center justify-center border border-tricolore-green/30 group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-tricolore-green font-bold block">
                        Giro Rápido & Investimento
                      </span>
                      <span className="font-mono text-xs text-text-muted tabular-data">
                        Até R$ 180.000
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 font-mono text-[11px] text-text-secondary">
                    <Lock className="w-3 h-3 text-tricolore-green" />
                    <span>Grupo Silencioso (Somente Admins)</span>
                  </span>
                </div>

                {/* Título e Proposta */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-text-primary group-hover:text-tricolore-green transition-colors">
                    Linha Leve & Seminovos
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                    Carros populares, sedans, hatches e SUVs compactos captados direto de concessionárias credenciadas. Foco em margem agressiva de até <strong className="text-text-primary font-semibold tabular-data">40% abaixo da FIPE</strong> para revendedores ou compradores que exigem economia.
                  </p>
                </div>

                {/* Destaques do Grupo */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-mono text-[10px] text-text-muted uppercase block">Margem Média</span>
                    <span className="font-mono text-sm font-bold text-tricolore-green tabular-data">15% a 40% OFF</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-mono text-[10px] text-text-muted uppercase block">Inspeção Prévia</span>
                    <span className="font-mono text-sm font-bold text-text-primary">100% Cautelar</span>
                  </div>
                </div>
              </div>

              {/* Botão de Entrada */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href="https://chat.whatsapp.com/HLF95JSQOSBE7tYARM6pA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Entrar no Grupo Gratuito de Linha Leve até R$ 180k"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-tricolore-green hover:bg-tricolore-green/90 active:scale-[0.98] text-black font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md group/btn cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Entrar no Grupo Gratuito</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
                <p className="text-center font-mono text-[11px] text-text-muted mt-2.5">
                  🔒 Entrada gratuita • Sem conversas paralelas • Somente oportunidades reais
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Linha Premium & Superesportivos */}
          <Reveal direction="up" delay={180}>
            <SpotlightCard
              spotlightColor="rgba(212, 175, 55, 0.18)"
              className="p-6 sm:p-8 rounded-2xl bg-bg-card border-border-subtle hover:border-accent-primary/50 transition-all duration-300 h-full flex flex-col justify-between shadow-floating group"
              innerClassName="flex flex-col justify-between h-full space-y-6"
            >
              <div className="space-y-5">
                {/* Header do Card */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/15 text-accent-primary flex items-center justify-center border border-accent-primary/30 group-hover:scale-110 transition-transform">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-accent-primary font-bold block">
                        Superesportivos & Exóticos
                      </span>
                      <span className="font-mono text-xs text-text-muted tabular-data">
                        Acima de R$ 180.000
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 font-mono text-[11px] text-text-secondary">
                    <Lock className="w-3 h-3 text-accent-primary" />
                    <span>Grupo Silencioso (Somente Admins)</span>
                  </span>
                </div>

                {/* Título e Proposta */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-text-primary group-hover:text-accent-primary transition-colors">
                    Linha Premium & Superesportivos
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                    Porsche, BMW M, Audi RS, Mercedes-AMG, Land Rover e blindados de alto padrão. Veículos selecionados com dossiê pericial completo, histórico de revisões e procedência comprovada.
                  </p>
                </div>

                {/* Destaques do Grupo */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-mono text-[10px] text-text-muted uppercase block">Perfil de Veículos</span>
                    <span className="font-mono text-sm font-bold text-accent-primary">Exóticos & Blindados</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-mono text-[10px] text-text-muted uppercase block">Dossiê Técnico</span>
                    <span className="font-mono text-sm font-bold text-text-primary">Vídeos 4K & Laudo</span>
                  </div>
                </div>
              </div>

              {/* Botão de Entrada */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href="https://chat.whatsapp.com/FaDzCJ2bOvn2z75aq3dGyK"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Entrar no Grupo Gratuito de Linha Premium e Superesportivos"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-accent-primary hover:bg-accent-gold-soft active:scale-[0.98] text-bg-primary font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md group/btn cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Entrar no Grupo Gratuito</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
                <p className="text-center font-mono text-[11px] text-text-muted mt-2.5">
                  🔒 Entrada gratuita • Sem conversas paralelas • Somente oportunidades reais
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

        </div>

        {/* ========================================================
            NÍVEL 2: GRID COMPACTO DE 4 COLUNAS
            "Divisões Especiais & Private Concierge"
        ======================================================== */}
        <Reveal direction="up" delay={100}>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border-subtle">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Divisões Especiais & Private Concierge
              </span>
              <h3 className="font-display font-bold text-xl text-text-primary mt-0.5">
                Canais Especializados por Categoria
              </h3>
            </div>
            <span className="text-xs font-mono text-text-muted">
              🔒 Todos os grupos são 100% silenciosos
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Motos */}
          <Reveal direction="up" delay={120}>
            <SpotlightCard
              spotlightColor="rgba(212, 175, 55, 0.12)"
              className="p-5 rounded-xl bg-bg-card border-border-subtle hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group"
              innerClassName="flex flex-col justify-between h-full space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform">
                    <Bike className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-text-muted uppercase">Todas as Faixas</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-text-primary group-hover:text-accent-primary transition-colors">
                    Linha de Motos
                  </h4>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Alta cilindrada, Big Trails (BMW GS, Triumph), esportivas e seminovas revisadas.
                  </p>
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/BDvpeRSPZ0N8GxSaItNojF"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar no Grupo de Motos de Alta Cilindrada"
                className="w-full min-h-[44px] py-2.5 px-4 rounded-full bg-white/[0.05] hover:bg-white/10 active:scale-[0.98] border border-white/10 text-white font-display font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Entrar no Grupo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Linha Pesada */}
          <Reveal direction="up" delay={160}>
            <SpotlightCard
              spotlightColor="rgba(212, 175, 55, 0.12)"
              className="p-5 rounded-xl bg-bg-card border-border-subtle hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group"
              innerClassName="flex flex-col justify-between h-full space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-center text-text-primary group-hover:scale-105 transition-transform">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-text-muted uppercase">Caminhões & Frotas</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-text-primary group-hover:text-accent-primary transition-colors">
                    Linha Pesada
                  </h4>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Cavalos mecânicos, caminhões e utilitários para transporte e logística pesada.
                  </p>
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/KJ8ZMOGRukhBIPUHE8u9MU"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar no Grupo de Linha Pesada e Caminhões"
                className="w-full min-h-[44px] py-2.5 px-4 rounded-full bg-white/[0.05] hover:bg-white/10 active:scale-[0.98] border border-white/10 text-white font-display font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Entrar no Grupo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </SpotlightCard>
          </Reveal>

          {/* Card 3: Náutica */}
          <Reveal direction="up" delay={200}>
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.12)"
              className="p-5 rounded-xl bg-bg-card border-border-subtle hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group"
              innerClassName="flex flex-col justify-between h-full space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Ship className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-text-muted uppercase">Lazer Marítimo</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-text-primary group-hover:text-accent-primary transition-colors">
                    Linha Náutica
                  </h4>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Lanchas, barcos de passeio, iates e jet skis periciados com base em Balneário Camboriú.
                  </p>
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/K99To102GKpFTJo5VEjTo8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar no Grupo de Linha Náutica e Lanchas"
                className="w-full min-h-[44px] py-2.5 px-4 rounded-full bg-white/[0.05] hover:bg-white/10 active:scale-[0.98] border border-white/10 text-white font-display font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Entrar no Grupo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </SpotlightCard>
          </Reveal>

          {/* Card 4: Aviação */}
          <Reveal direction="up" delay={240}>
            <SpotlightCard
              spotlightColor="rgba(52, 211, 153, 0.12)"
              className="p-5 rounded-xl bg-bg-card border-border-subtle hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group"
              innerClassName="flex flex-col justify-between h-full space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Plane className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-text-muted uppercase">Asas Rotativas & Jatos</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-text-primary group-hover:text-accent-primary transition-colors">
                    Aviação Executiva
                  </h4>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Helicópteros executivos, turboélices e jatos com plano de manutenção auditado.
                  </p>
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/C0w12BfaFBIIDmKFuSHI5?mode=hqctcli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar no Grupo de Aviação Executiva"
                className="w-full min-h-[44px] py-2.5 px-4 rounded-full bg-white/[0.05] hover:bg-white/10 active:scale-[0.98] border border-white/10 text-white font-display font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Entrar no Grupo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </SpotlightCard>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
