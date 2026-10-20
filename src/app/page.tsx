import Link from "next/link";
import { 
  ShieldCheck, 
  TrendingDown, 
  Truck, 
  ArrowRight, 
  Phone, 
  Car, 
  CheckCircle2, 
  Sparkles,
  Users,
  Clock
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { getFeaturedVehicles, MOCK_VEHICLES } from "@/data/vehicles";
import { COMMERCIAL_LINKS } from "@/data/commercial";

import { ShowroomDealCard } from "@/components/home/ShowroomDealCard";
import { RepasseEngineering } from "@/components/home/RepasseEngineering";
import { VipGroupsSection } from "@/components/home/VipGroupsSection";
import { CuradoriaEspecialista } from "@/components/home/CuradoriaEspecialista";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  const featuredVehicles = getFeaturedVehicles();

  return (
    <MainLayout>
      {/* ========================================================
          1. HERO SECTION — APPLE HIG CLARITY & DEFERENCE
      ======================================================== */}
      <section className="relative min-h-[100svh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-bg-primary pt-8 pb-16 sm:pt-10 sm:pb-20">
        {/* Iluminação de Estúdio Sutil */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[420px] bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Coluna Esquerda (Copy & Ação) */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={50}>
                <div className="space-y-6 text-center lg:text-left">
                  
                  {/* Eyebrow Badge Limpo */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-subtle">
                    <span className="flex h-2 w-2 rounded-full bg-tricolore-green shrink-0" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary font-medium">
                      BALNEÁRIO CAMBORIÚ • CAXIAS DO SUL
                    </span>
                  </div>

                  {/* Headline de Alto Prestígio */}
                  <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[56px] tracking-tight text-text-primary leading-[1.08]">
                    Acesso Privado a Superesportivos e Seminovos com{" "}
                    <span className="text-accent-primary">
                      até 40% Abaixo da FIPE.
                    </span>
                  </h1>

                  {/* Sub-headline Semântica e Persuasiva */}
                  <p className="text-text-secondary text-base sm:text-[17px] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Conectamos investidores e compradores exigentes a repasses reais de concessionárias e acervo próprio. Rigor pericial com laudo 100% aprovado antes de qualquer negociação.
                  </p>

                  {/* CTAs Claros de Conversão (Capsule Apple HIG) */}
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                      {/* Botão Primário: Grupos VIP */}
                      <a href="#grupos-vip" className="w-full sm:w-auto">
                        <Button
                          variant="secondary"
                          size="lg"
                          className="w-full sm:w-auto px-7 text-black font-bold group"
                        >
                          <Users className="w-4 h-4 mr-1" />
                          <span>Entrar nos Grupos VIP</span>
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </a>

                      {/* Botão Secundário: Explorar Acervo */}
                      <a href="#estoque" className="w-full sm:w-auto">
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full sm:w-auto px-7 font-semibold"
                        >
                          <Car className="w-4 h-4 mr-1 text-accent-primary" />
                          <span>Explorar Acervo</span>
                        </Button>
                      </a>
                    </div>

                    {/* Micro-copy de Blindagem Psicológica */}
                    <p className="text-center lg:text-left text-xs font-mono text-text-muted">
                      🔒 Grupos 100% silenciosos • Apenas alertas de oportunidades reais
                    </p>
                  </div>

                  {/* Barra de Telemetria / Autoridade no Rodapé da Hero */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-border-subtle max-w-2xl mx-auto lg:mx-0">
                    
                    <div className="p-3 rounded-xl bg-bg-card/50 sm:bg-transparent border sm:border-0 border-white/5">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-base sm:text-lg tabular-data">
                        <Clock className="w-4 h-4 text-accent-primary shrink-0" />
                        <AnimatedCounter end={2019} prefix="Desde " />
                      </div>
                      <p className="text-text-muted text-xs mt-0.5">Histórico sólido no Sul</p>
                    </div>

                    <div className="p-3 rounded-xl bg-bg-card/50 sm:bg-transparent border sm:border-0 border-white/5 sm:border-l sm:border-border-subtle sm:pl-4">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-base sm:text-lg tabular-data">
                        <ShieldCheck className="w-4 h-4 text-tricolore-green shrink-0" />
                        <AnimatedCounter end={150} suffix="+ Itens" />
                      </div>
                      <p className="text-text-muted text-xs mt-0.5">Vistoria pré-compra</p>
                    </div>

                    <div className="p-3 rounded-xl bg-bg-card/50 sm:bg-transparent border sm:border-0 border-white/5 sm:border-l sm:border-border-subtle sm:pl-4">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-base sm:text-lg tabular-data">
                        <TrendingDown className="w-4 h-4 text-tricolore-green shrink-0" />
                        <AnimatedCounter end={40} prefix="Até -" suffix="%" />
                      </div>
                      <p className="text-text-muted text-xs mt-0.5">Abaixo da tabela FIPE</p>
                    </div>

                    <div className="p-3 rounded-xl bg-bg-card/50 sm:bg-transparent border sm:border-0 border-white/5 sm:border-l sm:border-border-subtle sm:pl-4">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-base sm:text-lg">
                        <Truck className="w-4 h-4 text-accent-primary shrink-0" />
                        <span>Nacional</span>
                      </div>
                      <p className="text-text-muted text-xs mt-0.5">Logística segurada</p>
                    </div>

                  </div>

                </div>
              </Reveal>
            </div>

            {/* Coluna Direita (Showroom Deal Card com Telemetria Financeira) */}
            <div className="lg:col-span-5 relative w-full">
              <Reveal direction="zoom" delay={120}>
                <ShowroomDealCard />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. VITRINE DE DESTAQUES (ACERVO SELECIONADO UNIFICADO)
      ======================================================== */}
      <section className="py-20 sm:py-24 bg-bg-surface border-t border-border-subtle" id="estoque">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header da Seção */}
          <Reveal direction="up" delay={50}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-primary mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Showroom Oficial • Pronta Entrega</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                  Acervo Selecionado com Margem Real
                </h2>
                <p className="text-text-secondary text-base mt-2 max-w-xl leading-relaxed">
                  Veículos periciados com laudo cautelar 100% aprovado e histórico aberto antes de qualquer negociação.
                </p>
              </div>

              <Link href="/veiculos">
                <Button variant="outline" className="group">
                  <span>Ver Todo o Estoque ({MOCK_VEHICLES.length})</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Reveal>

          {/* Grid de Veículos em Destaque */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <Reveal key={vehicle.id} direction="up" delay={index * 100}>
                <VehicleCard vehicle={vehicle} variant="featured" />
              </Reveal>
            ))}
          </div>

          {/* CTA Sob Encomenda */}
          <Reveal direction="up" delay={120}>
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Procura uma configuração ou modelo específico?
                </h3>
                <p className="text-text-secondary text-sm">
                  Rastreamos oportunidades de repasse sob encomenda com vistoria pré-compra e margem garantida.
                </p>
              </div>
              <a
                href={COMMERCIAL_LINKS.comprarCarroUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com o Neni no WhatsApp para buscar modelo sob encomenda"
                className="w-full sm:w-auto shrink-0"
              >
                <Button variant="gold" className="w-full sm:w-auto whitespace-nowrap font-bold">
                  Falar com o Neni no WhatsApp
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          3. ENGENHARIA DO REPASSE & PILARES VELLOCE (UNIFICADOS)
      ======================================================== */}
      <RepasseEngineering />

      {/* ========================================================
          4. GRUPOS VIP DO WHATSAPP
      ======================================================== */}
      <VipGroupsSection />

      {/* ========================================================
          5. CURADORIA ASSINADA POR MARCOS PANIZ (O NENI)
      ======================================================== */}
      <CuradoriaEspecialista />

      {/* ========================================================
          6. FAQ ESTRATÉGICO (QUEBRA DE OBJEÇÕES)
      ======================================================== */}
      <FaqAccordion />

      {/* ========================================================
          7. FORMULÁRIO DE CONTATO & CAPTAÇÃO DE LEADS
      ======================================================== */}
      <section className="py-20 sm:py-24 bg-bg-surface border-t border-border-subtle" id="contato">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <Reveal direction="right" delay={80}>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-primary">
                    <Phone className="w-4 h-4 text-tricolore-green" />
                    <span>Atendimento Consultivo Direto</span>
                  </div>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                    Fale com a Equipe Velloce AutoCar
                  </h2>
                  <p className="text-text-secondary text-base leading-relaxed">
                    Quer solicitar o laudo de um carro específico, negociar proposta à vista, simular financiamento ou avaliar seu seminovo? Fale diretamente com nossa equipe.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-tricolore-green flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm">Marcos (o Neni) na Operação</h3>
                        <p className="text-text-muted text-xs mt-0.5">Atendimento transparente e direto via WhatsApp para tirar dúvidas e fechar negócio.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-accent-primary flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm">Envio Imediato de Laudo Pericial</h3>
                        <p className="text-text-muted text-xs mt-0.5">Vídeos detalhados em alta definição da lataria, motor e laudo cautelar em PDF.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-tricolore-green flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm">Bases em Balneário Camboriú e Caxias do Sul</h3>
                        <p className="text-text-muted text-xs mt-0.5">Atendimento presencial com agendamento prévio ou logística 100% digital segura.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal direction="left" delay={120}>
                <div className="p-6 sm:p-10 rounded-3xl bg-bg-card border border-border-subtle shadow-card">
                  <LeadForm
                    title="Solicitar Atendimento ou Proposta"
                    subtitle="Preencha os campos abaixo para falar com o consultor responsável."
                  />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
}
