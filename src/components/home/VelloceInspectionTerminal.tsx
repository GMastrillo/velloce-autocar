"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  TrendingDown, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  FileCheck2, 
  Flame, 
  Car, 
  MessageCircle
} from "lucide-react";
import { COMMERCIAL_LINKS } from "@/data/commercial";
import { cn } from "@/lib/utils";

type TerminalTab = "radar" | "pericia";

interface CategoryMetric {
  id: string;
  name: string;
  badge: string;
  savingsRange: string;
  averageFipeDelta: string;
  exampleVehicle: string;
  description: string;
  whatsappMessage: string;
  icon: typeof Flame;
}

const CATEGORIES_METRICS: CategoryMetric[] = [
  {
    id: "premium",
    name: "Superesportivos & Exóticos",
    badge: "Alta Performance",
    savingsRange: "R$ 60.000 a R$ 160.000+",
    averageFipeDelta: "Até -22% FIPE",
    exampleVehicle: "Porsche 911 / Cayenne / BMW M / RS",
    description: "Veículos de coleção e prestígio com laudo pericial avançado e histórico documentado de revisões.",
    whatsappMessage: "Olá Marcos! Gostaria de consultar a lista privada de Superesportivos e carros Premium da Velloce.",
    icon: Flame,
  },
  {
    id: "suvs",
    name: "SUVs de Luxo & Blindados",
    badge: "Conforto & Segurança",
    savingsRange: "R$ 40.000 a R$ 110.000+",
    averageFipeDelta: "Até -28% FIPE",
    exampleVehicle: "Range Rover / Macan / Defender / X6",
    description: "Utilitários de topo de linha com checagem rigorosa de suspensão pneumática, tração integral e blindagem certificada.",
    whatsappMessage: "Olá Marcos! Gostaria de receber oportunidades de SUVs de Luxo e Blindados disponíveis na Velloce.",
    icon: Car,
  },
  {
    id: "repasses",
    name: "Repasses de Concessionária",
    badge: "Margem Máxima",
    savingsRange: "R$ 20.000 a R$ 75.000+",
    averageFipeDelta: "Até -40% FIPE",
    exampleVehicle: "Lotes de Concessionárias SC & RS",
    description: "Veículos captados direto de concessionárias credenciadas, com laudo 100% aprovado para revenda ou uso imediato.",
    whatsappMessage: "Olá Marcos! Quero ter acesso aos Repasses de Concessionária com até 40% abaixo da FIPE.",
    icon: TrendingDown,
  },
];

const INSPECTION_PILLARS = [
  {
    id: "estrutura",
    title: "Integridade Estrutural",
    status: "100% Homologado",
    tag: "Zero Sinistro",
    desc: "Longarinas, monobloco, caixas de ar e assoalhos sem deformações, trincas ou pontos de solda adulterados.",
  },
  {
    id: "pintura",
    title: "Espessura Micrométrica de Pintura",
    status: "Aferição Padrão Fábrica",
    tag: "Zero Massa Plástica",
    desc: "Mapeamento micrométrico completo de camadas com espectrômetro magnético, atestando originalidade.",
  },
  {
    id: "cautelar",
    title: "Histórico Pericial & Documental",
    status: "Certidão Limpa",
    tag: "Zero Leilão",
    desc: "Varredura forense em bases nacionais: sem restrições judiciais, gravames pendentes ou histórico depreciativo.",
  },
  {
    id: "mecanica",
    title: "Trem de Força & Rodagem",
    status: "Módulos Computadorizados",
    tag: "Diagnóstico OBD-II",
    desc: "Varredura de telemetria eletrônica de injeção, transmissão e teste dinâmico de suspensão sob carga.",
  },
];

export function VelloceInspectionTerminal() {
  const [activeTab, setActiveTab] = useState<TerminalTab>("radar");
  const [selectedCategory, setSelectedCategory] = useState<string>("premium");

  const currentCategory = CATEGORIES_METRICS.find((c) => c.id === selectedCategory) || CATEGORIES_METRICS[0];
  const CategoryIcon = currentCategory.icon;

  return (
    <div className="relative mx-auto max-w-xl lg:max-w-none w-full">
      {/* Halo de iluminação de estúdio */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-tricolore-green/20 via-accent-gold/20 to-tricolore-red/20 blur-xl opacity-60 pointer-events-none" />

      {/* Terminal Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-bg-card/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden p-5 sm:p-7">
        
        {/* Barra de Status do Terminal */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tricolore-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tricolore-green" />
            </span>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-text-primary font-bold">
              Terminal Operacional • BC & CXS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-accent-gold">
              Curadoria Ativa
            </span>
          </div>
        </div>

        {/* Alternador de Modos (Tabs) */}
        <div className="grid grid-cols-2 gap-2 p-1.5 mt-4 rounded-xl bg-bg-surface border border-white/5">
          <button
            type="button"
            onClick={() => setActiveTab("radar")}
            className={cn(
              "flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer",
              activeTab === "radar"
                ? "bg-white/10 text-white font-bold shadow-md border border-white/15"
                : "text-text-muted hover:text-text-primary hover:bg-white/5"
            )}
          >
            <TrendingDown className={cn("w-3.5 h-3.5", activeTab === "radar" ? "text-accent-gold" : "text-text-muted")} />
            <span className="truncate">Radar FIPE</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pericia")}
            className={cn(
              "flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer",
              activeTab === "pericia"
                ? "bg-white/10 text-white font-bold shadow-md border border-white/15"
                : "text-text-muted hover:text-text-primary hover:bg-white/5"
            )}
          >
            <ShieldCheck className={cn("w-3.5 h-3.5", activeTab === "pericia" ? "text-tricolore-green" : "text-text-muted")} />
            <span className="truncate">Raio-X 150 Pontos</span>
          </button>
        </div>

        {/* CONTEÚDO DA ABA 1: RADAR DE OPORTUNIDADES FIPE */}
        {activeTab === "radar" && (
          <div className="mt-5 space-y-4 animate-in fade-in duration-300">
            {/* Seletor de Categorias */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {CATEGORIES_METRICS.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer",
                    selectedCategory === cat.id
                      ? "bg-accent-gold/10 border-accent-gold/40 text-white"
                      : "bg-white/[0.02] border-white/5 text-text-muted hover:bg-white/5 hover:text-text-primary"
                  )}
                >
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-accent-gold font-bold">
                    {cat.averageFipeDelta}
                  </span>
                  <span className="block font-display text-xs font-bold truncate mt-0.5 text-text-primary">
                    {cat.name.split("&")[0].trim()}
                  </span>
                </button>
              ))}
            </div>

            {/* Display Dinâmico de Métricas */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold shrink-0">
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-text-primary">
                      {currentCategory.name}
                    </h3>
                    <span className="font-mono text-[11px] text-text-muted">
                      Exemplos: {currentCategory.exampleVehicle}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-tricolore-green/15 border border-tricolore-green/30 text-tricolore-green font-mono text-[10px] font-bold shrink-0">
                  {currentCategory.badge}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    Economia Estimada
                  </span>
                  <span className="font-mono text-sm sm:text-base font-extrabold text-white tabular-nums">
                    {currentCategory.savingsRange}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    Desconto Médio FIPE
                  </span>
                  <span className="font-mono text-sm sm:text-base font-extrabold text-tricolore-green tabular-nums">
                    {currentCategory.averageFipeDelta}
                  </span>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                {currentCategory.description}
              </p>
            </div>

            {/* Botão de Ação Direta */}
            <a
              href={`${COMMERCIAL_LINKS.comprarCarroUrl}?text=${encodeURIComponent(currentCategory.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-tricolore-green hover:bg-emerald-600 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span className="font-bold">Acessar Lista Privada de {currentCategory.name.split("&")[0].trim()}</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
            </a>

            {/* Mini Ticker de Atualização */}
            <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-text-muted">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-accent-gold" />
                <span>Atualização ao vivo de concessionárias</span>
              </span>
              <span className="text-text-secondary font-medium">Balneário Camboriú • Caxias</span>
            </div>
          </div>
        )}

        {/* CONTEÚDO DA ABA 2: RAIO-X PERICIAL 150 PONTOS */}
        {activeTab === "pericia" && (
          <div className="mt-5 space-y-4 animate-in fade-in duration-300">
            {/* Header com Score Pericial */}
            <div className="p-3.5 rounded-xl bg-tricolore-green/10 border border-tricolore-green/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-tricolore-green/20 text-tricolore-green flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white">
                    Protocolo de Inspeção Velloce
                  </h4>
                  <p className="font-mono text-[10px] text-tricolore-green">
                    100% dos Veículos com Laudo Aprovado
                  </p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted block text-[9px]">
                  Índice
                </span>
                <span className="font-mono text-sm sm:text-base font-black text-white tabular-nums">
                  150+ Itens
                </span>
              </div>
            </div>

            {/* Grade dos 4 Pilares Forenses */}
            <div className="space-y-2">
              {INSPECTION_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-tricolore-green shrink-0" />
                      <span className="font-display font-bold text-xs text-text-primary truncate">
                        {pillar.title}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-black/50 border border-white/10 text-[9px] font-mono text-accent-gold shrink-0">
                      {pillar.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-muted mt-1 leading-relaxed pl-5">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Botão de Solicitação de Amostra de Laudo */}
            <a
              href={`${COMMERCIAL_LINKS.comprarCarroUrl}?text=${encodeURIComponent(
                "Olá Marcos! Vi o Protocolo de Inspeção de 150 Pontos no site da Velloce e gostaria de receber um exemplo completo de laudo cautelar em PDF."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <FileCheck2 className="w-4 h-4 text-tricolore-green shrink-0" />
                <span>Solicitar Laudo em PDF no WhatsApp</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
            </a>

            {/* Rodapé de Garantia */}
            <div className="text-center pt-1">
              <span className="text-[10px] font-mono text-text-muted">
                🔒 Rigor pericial documental e estrutural pré-compra desde 2019
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
