import Link from "next/link";
import { 
  ShieldCheck, 
  TrendingDown, 
  FileCheck2, 
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
import { BentoGridShowroom } from "@/components/vehicle/BentoGridShowroom";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { getFeaturedVehicles, MOCK_VEHICLES } from "@/data/vehicles";
import { COMMERCIAL_LINKS } from "@/data/commercial";

import { ShowroomDealCard } from "@/components/home/ShowroomDealCard";
import { RepasseEngineering } from "@/components/home/RepasseEngineering";
import { VipGroupsSection } from "@/components/home/VipGroupsSection";
import { CuradoriaEspecialista } from "@/components/home/CuradoriaEspecialista";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

import { IntroController } from "@/components/ui/IntroController";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export default function HomePage() {
  const featuredVehicles = getFeaturedVehicles();
  const heroVehicle = featuredVehicles[0];

  // Solução Definitiva do Bug 4 (Não Repetição de Estoque):
  // O primeiro veículo (heroVehicle) já é protagonista no Bento Grid Showroom.
  // Na grade de estoque abaixo, exibimos os demais veículos selecionados, evitando qualquer duplicidade!
  const gridVehicles = featuredVehicles.filter((v) => v.id !== heroVehicle?.id);

  return (
    <MainLayout>
      {/* ========================================================
          1. NOVA HERO SECTION (AUTORIDADE, CONVERSÃO & ASSIMETRIA)
      ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-bg-primary pt-8 pb-16">
        {/* Iluminação de Estúdio & Texturas Neutras Anti-Slop */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#22262F_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Coluna Esquerda (Copy & Ação) */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={50}>
                <div className="space-y-6 text-center lg:text-left">
                  
                  {/* Eyebrow Badge com Ponto Pulsante & Replay Trigger */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 max-w-full">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-subtle shadow-sm">
                      <span className="flex h-2 w-2 rounded-full bg-tricolore-green animate-pulse shrink-0" />
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-text-secondary font-bold">
                        OPERAÇÃO ATIVA • BALNEÁRIO CAMBORIÚ & CAXIAS DO SUL
                      </span>
                    </div>
                    <IntroController />
                  </div>

                  {/* Headline de Alto Prestígio */}
                  <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-text-primary leading-[1.1]">
                    Acesso Privado a Superesportivos e Seminovos com{" "}
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-amber-100 to-accent-primary">
                      até 40% Abaixo da FIPE.
                      <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-gradient-to-r from-accent-primary via-tricolore-green to-accent-primary opacity-80" />
                    </span>
                  </h1>

                  {/* Sub-headline Semântica e Persuasiva */}
                  <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Conectamos investidores e compradores exigentes a repasses reais de concessionárias e acervo próprio. Rigor pericial com laudo 100% aprovado antes de qualquer negociação.
                  </p>

                  {/* CTAs Claros de Conversão */}
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                      {/* Botão Primário: Grupos VIP */}
                      <a href="#grupos-vip" className="w-full sm:w-auto">
                        <Button
                          variant="secondary"
                          size="lg"
                          className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-tricolore-green hover:bg-emerald-600 text-white font-display font-bold text-sm uppercase tracking-wider group shadow-xl shadow-tricolore-green/15"
                        >
                          <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          <span>Entrar nos Grupos VIP de Ofertas</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </a>

                      {/* Botão Secundário: Explorar Acervo */}
                      <a href="#estoque" className="w-full sm:w-auto">
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full sm:w-auto px-6 sm:px-7 py-4 border-border-subtle hover:border-accent-primary text-text-primary hover:bg-white/[0.04] font-display font-semibold text-sm"
                        >
                          <Car className="w-4 h-4 mr-2 text-accent-primary" />
                          <span>Explorar Acervo Disponível</span>
                        </Button>
                      </a>
                    </div>

                    {/* Micro-copy de Blindagem Psicológica */}
                    <p className="text-center lg:text-left text-xs font-mono text-text-muted">
                      🔒 Grupos 100% silenciosos • Apenas alertas de oportunidades reais
                    </p>
                  </div>

                  {/* Barra de Telemetria / Autoridade no Rodapé da Hero (tabular-nums sem flash de 0) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-border-subtle/80 max-w-2xl mx-auto lg:mx-0">
                    
                    {/* Item 1: Desde 2019 */}
                    <div className="p-3 rounded-xl bg-bg-card/50 sm:bg-transparent border sm:border-0 border-white/5">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-base sm:text-lg tabular-data">
                        <Clock className="w-4 h-4 text-accent-primary shrink-0" />
                        <AnimatedCounter end={2019} prefix="Desde " />
                      </div>
                      <p className="text-text-muted text-[11px] mt-0.5 font-sans">Histórico sólido no Sul</p>
                    </div>

                    {/* Item 2: 150+ Pontos */}
                    <div className="p-3 rounded-xl bg-bg-card/50 sm:bg-transparent border sm:border-0 border-white/5 sm:border-l sm:border-border-subtle sm:pl-4">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-base sm:text-lg tabular-data">
                        <ShieldCheck className="w-4 h-4 text-tricolore-green shrink-0" />
                        <AnimatedCounter end={150} suffix="+ Pontos" />
                      </div>
                      <p className="text-text-muted text-[11px] mt-0.5 font-sans">Vistoria cautelar pré-compra</p>
                    </div>

                    {/* Item 3: Até -40% FIPE */}
                    <div className="p-3 rounded-xl bg-bg-card/50 sm:bg-transparent border sm:border-0 border-white/5 sm:border-l sm:border-border-subtle sm:pl-4">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-base sm:text-lg tabular-data">
                        <TrendingDown className="w-4 h-4 text-tricolore-green shrink-0" />
                        <AnimatedCounter end={40} prefix="Até -" suffix="% FIPE" />
                      </div>
                      <p className="text-text-muted text-[11px] mt-0.5 font-sans">Margem real de liquidez</p>
                    </div>

                    {/* Item 4: Envio Nacional */}
                    <div className="p-3 rounded-xl bg-bg-card/50 sm:bg-transparent border sm:border-0 border-white/5 sm:border-l sm:border-border-subtle sm:pl-4">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-base sm:text-lg">
                        <Truck className="w-4 h-4 text-accent-primary shrink-0" />
                        <span>Nacional</span>
                      </div>
                      <p className="text-text-muted text-[11px] mt-0.5 font-sans">Logística segurada</p>
                    </div>

                  </div>

                </div>
              </Reveal>
            </div>

            {/* Coluna Direita (Showroom Deal Card com Telemetria Financeira) */}
            <div className="lg:col-span-5 relative w-full">
              <Reveal direction="zoom" delay={150}>
                <ShowroomDealCard />
              </Reveal>
            </div>

          </div>
        </div>

        {/* Indicador de rolagem suave */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
          <ScrollIndicator />
        </div>
      </section>

      {/* ========================================================
          2. NOVA SEÇÃO: A ENGENHARIA DO REPASSE (3 PASSOS)
      ======================================================== */}
      <RepasseEngineering />

      {/* ========================================================
          3. SHOWROOM BENTO GRID EDITORIAL DE PRESTÍGIO
      ======================================================== */}
      <BentoGridShowroom vehicles={featuredVehicles} />

      {/* ========================================================
          4. SEÇÃO: GRUPOS VIP DO WHATSAPP (HIERARQUIA ASSIMÉTRICA)
      ======================================================== */}
      <VipGroupsSection />

      {/* ========================================================
          5. SEÇÃO DE AUTORIDADE: CURADORIA ASSINADA POR MARCOS PANIZ
      ======================================================== */}
      <CuradoriaEspecialista />

      {/* ========================================================
          6. VITRINE DE DESTAQUES (SEM DUPLICIDADE DE ESTOQUE)
      ======================================================== */}
      <section className="py-20 bg-bg-surface border-t border-border-subtle" id="estoque">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header da Seção */}
          <Reveal direction="up" delay={50}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-primary mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Acervo Complementar em Destaque</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                  Estoque Selecionado com Margem Real
                </h2>
                <p className="text-text-secondary text-base mt-2 max-w-xl leading-relaxed">
                  Todos os veículos passam por rigorosa avaliação pré-compra e possuem laudo cautelar aprovado antes de serem anunciados.
                </p>
              </div>

              <Link href="/veiculos">
                <Button variant="outline" className="group">
                  <span>Ver Todos os Veículos ({MOCK_VEHICLES.length})</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Reveal>

          {/* Grid de Veículos Não Duplicados com Reveal Escalonado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridVehicles.map((vehicle, index) => (
              <Reveal key={vehicle.id} direction="up" delay={index * 120}>
                <VehicleCard vehicle={vehicle} variant="featured" />
              </Reveal>
            ))}
          </div>

          {/* CTA após o grid */}
          <Reveal direction="up" delay={150}>
            <div className="mt-14 p-5 sm:p-8 rounded-2xl bg-bg-card border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Não encontrou o modelo exato que procura?
                </h3>
                <p className="text-text-secondary text-sm">
                  Nossos consultores rastreiam oportunidades de repasse sob encomenda para você com laudo e margem garantida.
                </p>
              </div>
              <a
                href={COMMERCIAL_LINKS.comprarCarroUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com o Neni no WhatsApp para buscar modelo sob encomenda"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" className="w-full sm:w-auto whitespace-nowrap shadow-md">
                  Falar com o Neni no WhatsApp
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          7. RIGOR PERICIAL & OS PILARES VELLOCE
      ======================================================== */}
      <section className="py-20 bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <Reveal direction="up" delay={50}>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-primary">
                <ShieldCheck className="w-4 h-4 text-tricolore-green" />
                <span>Padrão de Excelência Automotiva</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                Por que Comprar ou Vender na Velloce?
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                No mercado automotivo tradicional, promessas vazias não resistem a um laudo técnico. Na Velloce, operamos com transparência pericial de ponta a ponta.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pilar 1 */}
            <Reveal direction="up" delay={80}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-primary/40 transition-smooth space-y-4 h-full shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-tricolore-green/10 border border-tricolore-green/20 flex items-center justify-center text-tricolore-green">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Transparência de Margem
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Clareza absoluta entre o valor pedido e o valor de mercado (FIPE). Mostramos a real economia e a margem de cada oportunidade.
                </p>
              </div>
            </Reveal>

            {/* Pilar 2 */}
            <Reveal direction="up" delay={160}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-tricolore-green/40 transition-smooth space-y-4 h-full shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-tricolore-green/10 border border-tricolore-green/20 flex items-center justify-center text-tricolore-green">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Rigor Pericial Pré-Compra
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Nenhum veículo entra em nossa base sem inspeção de mais de 150 itens: integridade estrutural, mecânica, pintura e histórico cautelar.
                </p>
              </div>
            </Reveal>

            {/* Pilar 3 */}
            <Reveal direction="up" delay={240}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-primary/40 transition-smooth space-y-4 h-full shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Herança de Velocidade
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Identidade inspirada no automobilismo e na cultura de performance. Conectamos apaixonados por motores a exemplares exclusivos.
                </p>
              </div>
            </Reveal>

            {/* Pilar 4 */}
            <Reveal direction="up" delay={320}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-active transition-smooth space-y-4 h-full shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-text-primary/10 border border-white/10 flex items-center justify-center text-text-primary">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Entrega com Seguro Total
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Despachamos veículos com plataforma segurada para qualquer estado do Brasil, com rastreamento e entrega técnica na sua porta.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* ========================================================
          8. NOVA SEÇÃO: FAQ ESTRATÉGICO (QUEBRA DE OBJEÇÕES)
      ======================================================== */}
      <FaqAccordion />

      {/* ========================================================
          9. FORMULÁRIO DE CONTATO & CAPTAÇÃO DE LEADS
      ======================================================== */}
      <section className="py-20 bg-bg-surface border-t border-border-subtle" id="contato">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <Reveal direction="right" delay={100}>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-primary">
                    <Phone className="w-4 h-4 text-tricolore-green" />
                    <span>Atendimento Consultivo Direto</span>
                  </div>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                    Fale com a Equipe Velloce AutoCar
                  </h2>
                  <p className="text-text-secondary text-base leading-relaxed">
                    Quer saber o laudo de um carro específico, negociar proposta à vista, simular financiamento ou consignar seu seminovo? Preencha o formulário e fale imediatamente com nossa equipe.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-tricolore-green flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm">Marcos (o Neni) na Operação</h3>
                        <p className="text-text-muted text-xs">Atendimento transparente e direto via WhatsApp para tirar dúvidas e fechar negócio.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-accent-primary flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm">Envio Imediato de Laudo Pericial</h3>
                        <p className="text-text-muted text-xs">Vídeos detalhados em alta definição da lataria, motor e laudo cautelar em PDF.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-tricolore-green flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm">Bases em Balneário Camboriú e Caxias do Sul</h3>
                        <p className="text-text-muted text-xs">Atendimento presencial com agendamento prévio ou logística 100% digital segura.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal direction="left" delay={150}>
                <div className="p-5 sm:p-10 rounded-2xl bg-bg-card border border-border-subtle shadow-card">
                  <LeadForm
                    title="Solicitar Atendimento ou Proposta"
                    subtitle="Preencha os campos abaixo para ser direcionado ao consultor responsável."
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
