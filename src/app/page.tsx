import Link from "next/link";
import Image from "next/image";
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
  Plane,
  Ship,
  Bike,
  Flame,
  MessageCircle
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { BentoGridShowroom } from "@/components/vehicle/BentoGridShowroom";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { getFeaturedVehicles, MOCK_VEHICLES } from "@/data/vehicles";
import { COMMERCIAL_LINKS, VIP_GROUPS } from "@/data/commercial";
import { formatCurrency } from "@/lib/utils";

import { IntroController } from "@/components/ui/IntroController";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export default function HomePage() {
  const featuredVehicles = getFeaturedVehicles();
  const heroVehicle = featuredVehicles[0] || MOCK_VEHICLES[0];

  return (
    <MainLayout>
      {/* ========================================================
          1. HERO SECTION CINEMATOGRÁFICA
      ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-bg-primary pt-8 pb-16">
        {/* Iluminação de Estúdio & Texturas Neutras */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#22262F_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Texto & Proposta de Valor */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={50}>
                <div className="space-y-6 text-center lg:text-left">
                  {/* Top Badge: Hubs, Slogan & Replay Trigger */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-subtle shadow-sm">
                      <span className="flex h-2 w-2 rounded-full bg-tricolore-green animate-pulse" />
                      <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                        Balneário Camboriú • Caxias do Sul
                      </span>
                      <span className="h-3 w-px bg-border-subtle" />
                      <span className="text-xs font-semibold text-accent-gold">
                        Repasses até 40% abaixo da FIPE
                      </span>
                    </div>
                    <IntroController />
                  </div>

                  {/* Headline Imponente */}
                  <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text-primary leading-[1.08]">
                    Mais que carros, entregamos{" "}
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-gray-100 to-accent-gold">
                      confiança.
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-tricolore-green via-tricolore-white to-tricolore-red" />
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Conectamos compradores exigentes e investidores a <strong className="text-text-primary font-medium">oportunidades reais de mercado</strong>. Repasses de concessionárias cadastradas e estoque próprio desde 2019 com rigor pericial e laudo 100% aprovado.
                  </p>

                  {/* CTAs Principais */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                    <Link href="/veiculos">
                      <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-3.5 group shadow-lg shadow-tricolore-red/20">
                        <span>Explorar Estoque</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>

                    <a href="#grupos-vip">
                      <Button variant="secondary" size="lg" className="w-full sm:w-auto px-6 py-3.5 border border-tricolore-green/40 hover:border-tricolore-green group">
                        <Users className="w-4 h-4 mr-2 text-tricolore-green group-hover:scale-110 transition-transform" />
                        <span>Entrar nos Grupos VIP</span>
                      </Button>
                    </a>

                    <a
                      href={COMMERCIAL_LINKS.comprarCarroUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 py-3.5">
                        <Phone className="w-4 h-4 mr-2 text-tricolore-green" />
                        <span>Falar com o Neni</span>
                      </Button>
                    </a>
                  </div>

                  {/* Badges de Confiança Rápida com Contadores Animados */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-subtle/80 max-w-xl mx-auto lg:mx-0">
                    <div className="text-left">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-lg">
                        <TrendingDown className="w-4 h-4 text-tricolore-green" />
                        <AnimatedCounter end={40} prefix="Até -" suffix="% FIPE" />
                      </div>
                      <p className="text-text-muted text-xs">Margem real para economizar</p>
                    </div>

                    <div className="text-left border-l border-border-subtle pl-4">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-lg">
                        <ShieldCheck className="w-4 h-4 text-tricolore-red" />
                        <AnimatedCounter end={150} suffix="+ Pontos" />
                      </div>
                      <p className="text-text-muted text-xs">Laudo cautelar pré-compra</p>
                    </div>

                    <div className="text-left border-l border-border-subtle pl-4">
                      <div className="flex items-center gap-1.5 text-text-primary font-mono font-bold text-lg">
                        <Truck className="w-4 h-4 text-accent-gold" />
                        <AnimatedCounter end={2019} prefix="Desde " />
                      </div>
                      <p className="text-text-muted text-xs">Central Balneário Camboriú</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Destaque Visual / Oportunidade em Cartaz */}
            <div className="lg:col-span-5 relative">
              <Reveal direction="zoom" delay={200}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-tricolore-green/20 via-border-active to-tricolore-red/20 blur-xl opacity-70" />
                  
                  <div className="relative rounded-2xl overflow-hidden bg-bg-card border border-border-subtle shadow-2xl animate-float-slow animate-shimmer">
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-border-subtle shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-tricolore-red animate-ping" />
                      <span className="font-mono text-xs font-semibold text-text-primary">
                        OPORTUNIDADE DO DIA
                      </span>
                    </div>

                    <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-bg-surface group">
                      <Image
                        src={heroVehicle.images[0]}
                        alt={heroVehicle.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-text-secondary mb-1">
                          <span>{heroVehicle.location}</span>
                          <span>{heroVehicle.year}/{heroVehicle.yearModel}</span>
                        </div>
                        <h2 className="font-display font-bold text-xl text-text-primary">
                          {heroVehicle.title}
                        </h2>
                      </div>

                      <div className="flex items-end justify-between pt-2 border-t border-border-subtle">
                        <div>
                          {heroVehicle.fipePrice && (
                            <p className="text-xs text-text-muted line-through font-mono">
                              FIPE: {formatCurrency(heroVehicle.fipePrice)}
                            </p>
                          )}
                          <p className="font-display font-extrabold text-2xl text-text-primary tracking-tight">
                            {formatCurrency(heroVehicle.price)}
                          </p>
                        </div>

                        {heroVehicle.fipePrice && (
                          <div className="px-2.5 py-1 rounded bg-tricolore-green/15 border border-tricolore-green/30 text-tricolore-green text-xs font-bold font-mono">
                            Economia de {formatCurrency(Number(heroVehicle.fipePrice) - Number(heroVehicle.price))}
                          </div>
                        )}
                      </div>

                      <Link href={`/veiculos/${heroVehicle.slug}`} className="block">
                        <Button variant="secondary" className="w-full justify-center">
                          <span>Ver Ficha Técnica & Laudo</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>

        {/* Indicador de rolagem suave para baixo */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
          <ScrollIndicator />
        </div>
      </section>

      {/* ========================================================
          1.5. BENTO GRID SHOWROOM ASSIMÉTRICO (PADRÃO 21ST.DEV)
      ======================================================== */}
      <BentoGridShowroom vehicles={featuredVehicles} />

      {/* ========================================================
          2. CENTRAL DE ATENDIMENTO DIRETO (COMPRAS & VENDAS)
      ======================================================== */}
      <section className="py-8 bg-bg-surface border-y border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 1: Quero Comprar com Marcos (Neni) */}
            <Reveal direction="up" delay={80}>
              <a
                href={COMMERCIAL_LINKS.comprarCarroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-tricolore-green transition-smooth group flex items-center justify-between h-full shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tricolore-green/15 text-tricolore-green flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-tricolore-green font-bold">
                      Compre Aqui com Especialista
                    </span>
                    <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-tricolore-green transition-smooth">
                      Falar com Marcos (o Neni)
                    </h3>
                    <p className="text-text-muted text-xs mt-0.5">
                      Negociação direta, envio de laudos e vídeos em primeira mão.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-tricolore-green group-hover:translate-x-1 transition-smooth flex-shrink-0" />
              </a>
            </Reveal>

            {/* Box 2: Quero Vender (Central de Compras) */}
            <Reveal direction="up" delay={160}>
              <a
                href={COMMERCIAL_LINKS.venderCarroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-gold transition-smooth group flex items-center justify-between h-full shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/15 text-accent-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-accent-gold font-bold">
                      Venda Aqui Seu Veículo
                    </span>
                    <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-accent-gold transition-smooth">
                      Central de Compras & Avaliação
                    </h3>
                    <p className="text-text-muted text-xs mt-0.5">
                      Pagamento à vista, avaliação honesta e liquidez imediata.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent-gold group-hover:translate-x-1 transition-smooth flex-shrink-0" />
              </a>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. SEÇÃO EXCLUSIVA: GRUPOS VIP DE WHATSAPP (ATÉ 40% ABAIXO FIPE)
      ======================================================== */}
      <section className="py-20 bg-bg-primary relative overflow-hidden" id="grupos-vip">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <Reveal direction="up" delay={50}>
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-subtle text-xs font-mono uppercase tracking-widest text-tricolore-green">
                <Users className="w-4 h-4" />
                <span>Canais VIP Oficiais no WhatsApp</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                Quer Comprar e Economizar? Escolha Seu Grupo
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                Oportunidades reais com <strong className="text-text-primary font-medium">até 40% abaixo da tabela FIPE</strong> diretamente no seu WhatsApp. Repasses de concessionárias cadastradas e estoque próprio desde 2019. Basta clicar e entrar gratuitamente.
              </p>
            </div>
          </Reveal>

          {/* Grid dos 6 Grupos Oficiais com Animações Escalonadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIP_GROUPS.map((group, index) => {
              const getCategoryIcon = (cat: string) => {
                switch (cat) {
                  case "PREMIUM": return <Flame className="w-5 h-5 text-tricolore-red" />;
                  case "LEVE": return <Car className="w-5 h-5 text-tricolore-green" />;
                  case "MOTOS": return <Bike className="w-5 h-5 text-accent-gold" />;
                  case "PESADA": return <Truck className="w-5 h-5 text-text-primary" />;
                  case "NAUTICA": return <Ship className="w-5 h-5 text-blue-400" />;
                  case "AVIACAO": return <Plane className="w-5 h-5 text-emerald-400" />;
                  default: return <Users className="w-5 h-5 text-text-secondary" />;
                }
              };

              return (
                <Reveal key={group.id} direction="up" delay={index * 90}>
                  <div
                    className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-active hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-5 group h-full shadow-lg hover:shadow-tricolore-green/10"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-center">
                          {getCategoryIcon(group.category)}
                        </div>
                        <span className="px-2.5 py-1 rounded bg-bg-surface text-[11px] font-mono text-accent-gold border border-border-subtle">
                          {group.tag}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-tricolore-green transition-smooth">
                          {group.name}
                        </h3>
                        <p className="text-xs font-mono text-text-muted mt-0.5">
                          Faixa: {group.range}
                        </p>
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed">
                        {group.description}
                      </p>
                    </div>

                    <a
                      href={group.inviteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pt-2"
                    >
                      <button className="w-full py-3 px-4 rounded-xl bg-tricolore-green hover:bg-emerald-600 text-white font-medium text-sm flex items-center justify-center gap-2 transition-smooth shadow-md group/btn cursor-pointer">
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Entrar no Grupo VIP</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="up" delay={200}>
            <div className="mt-12 p-6 rounded-2xl bg-bg-surface border border-border-subtle text-center space-y-2">
              <p className="text-sm text-text-secondary">
                💡 <strong>Dica Velloce:</strong> Indique um amigo para economizar também! Caso veja alguma oportunidade de interesse nos grupos, basta chamar no Direct do Instagram ou falar diretamente com o Neni.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-mono text-text-muted">
                <span>Instagram: <a href={COMMERCIAL_LINKS.instagramVelloce} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-tricolore-red underline">@veloceimportsofc</a></span>
                <span>•</span>
                <span>Marcos: <a href={COMMERCIAL_LINKS.instagramNeni} target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:underline">@omarcospaniz</a></span>
                <span>•</span>
                <span>Central BC: Balneário Camboriú - SC</span>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ========================================================
          4. VITRINE DE DESTAQUES (SHOWCASE)
      ======================================================== */}
      <section className="py-20 bg-bg-surface border-t border-border-subtle" id="estoque">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header da Seção */}
          <Reveal direction="up" delay={50}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-gold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Oportunidades em Destaque</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                  Estoque Selecionado com Margem Real
                </h2>
                <p className="text-text-secondary text-base mt-2 max-w-xl">
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

          {/* Grid de Veículos com Reveal Escalonado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <Reveal key={vehicle.id} direction="up" delay={index * 120}>
                <VehicleCard vehicle={vehicle} variant="featured" />
              </Reveal>
            ))}
          </div>

          {/* CTA após o grid */}
          <Reveal direction="up" delay={150}>
            <div className="mt-14 p-8 rounded-2xl bg-bg-card border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
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
              >
                <Button variant="primary" className="whitespace-nowrap shadow-md">
                  Falar com o Neni no WhatsApp
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          5. RIGOR PERICIAL & OS PILARES VELLOCE
      ======================================================== */}
      <section className="py-20 bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <Reveal direction="up" delay={50}>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-tricolore-red">
                <ShieldCheck className="w-4 h-4" />
                <span>Padrão de Excelência Automotiva</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                Por que Comprar ou Vender na Velloce?
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                No mercado automotivo tradicional, promessas vazias não resistem a um laudo técnico. Na Velloce, operamos com transparência de ponta a ponta.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pilar 1 */}
            <Reveal direction="up" delay={80}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-active transition-smooth space-y-4 h-full shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-tricolore-red/10 border border-tricolore-red/20 flex items-center justify-center text-tricolore-red">
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
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-active transition-smooth space-y-4 h-full shadow-md hover:-translate-y-1">
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
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-active transition-smooth space-y-4 h-full shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold">
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
                <div className="w-12 h-12 rounded-xl bg-text-primary/10 border border-text-primary/20 flex items-center justify-center text-text-primary">
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
          6. FORMULÁRIO DE CONTATO & CAPTAÇÃO DE LEADS
      ======================================================== */}
      <section className="py-20 bg-bg-surface border-t border-border-subtle" id="contato">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <Reveal direction="right" delay={100}>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-gold">
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
                      <div className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-tricolore-red flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm">Envio Imediato de Laudo Pericial</h3>
                        <p className="text-text-muted text-xs">Vídeos detalhados em alta definição da lataria, motor e laudo cautelar em PDF.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-accent-gold flex-shrink-0">
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
                <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-border-subtle shadow-card">
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
