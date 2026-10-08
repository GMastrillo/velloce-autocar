import Link from "next/link";
import { MapPin, Clock, ShoppingCart, DollarSign, Users, ExternalLink } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { LeadForm } from "@/components/forms/LeadForm";
import { COMMERCIAL_LINKS, VIP_GROUPS } from "@/data/commercial";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Contato VIP & Central de Negociações — Velloce AutoCar",
  description: "Fale diretamente com Marcos (o Neni) para compras, acesse a Central de Compras ou participe dos Grupos VIP de WhatsApp.",
};

export default function ContatoPage() {
  return (
    <MainLayout>
      <div className="bg-bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <Reveal direction="up" delay={50}>
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-gold">
                Canais Oficiais & Negociação Direta
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                Fale com a Velloce AutoCar
              </h1>
              <p className="text-text-secondary text-base">
                Atendimento ágil, transparente e direto com os responsáveis da operação em Balneário Camboriú e Caxias do Sul.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Informações de Contato */}
            <div className="lg:col-span-5">
              <Reveal direction="right" delay={100}>
                <div className="space-y-6">
              
              {/* Canais Diretos de WhatsApp */}
              <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle space-y-4">
                <h3 className="font-display font-bold text-base text-text-primary">
                  Canais Diretos de WhatsApp
                </h3>

                <div className="space-y-3">
                  <a
                    href={COMMERCIAL_LINKS.comprarCarroUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-bg-card border border-border-subtle hover:border-tricolore-green transition-smooth flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-tricolore-green/15 text-tricolore-green flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-text-primary block group-hover:text-tricolore-green transition-smooth">
                          Quero Comprar Veículo
                        </span>
                        <span className="text-[11px] text-text-muted">
                          Falar com Marcos (o Neni)
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-tricolore-green transition-smooth" />
                  </a>

                  <a
                    href={COMMERCIAL_LINKS.venderCarroUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-gold transition-smooth flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent-gold/15 text-accent-gold flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-text-primary block group-hover:text-accent-gold transition-smooth">
                          Quero Vender / Consignar
                        </span>
                        <span className="text-[11px] text-text-muted">
                          Central de Compras Velloce
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-smooth" />
                  </a>

                  <Link
                    href="/#grupos-vip"
                    className="p-4 rounded-xl bg-bg-card border border-border-subtle hover:border-tricolore-red transition-smooth flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-tricolore-red/15 text-tricolore-red flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-text-primary block group-hover:text-tricolore-red transition-smooth">
                          Grupos VIP de WhatsApp
                        </span>
                        <span className="text-[11px] text-text-muted">
                          Repasses até 40% abaixo da FIPE
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-tricolore-red transition-smooth" />
                  </Link>
                </div>
              </div>

              {/* Endereços & Bases */}
              <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle space-y-6">
                <h3 className="font-display font-bold text-lg text-text-primary">
                  Bases Operacionais & Hubs
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Central de Compras Balneário Camboriú</strong>
                      <span className="text-text-secondary text-xs">Balneário Camboriú, Santa Catarina • BR</span>
                      <span className="block text-text-muted text-[11px] mt-0.5">(Atendimento com horário agendado)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-tricolore-green flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Hub Serra Gaúcha</strong>
                      <span className="text-text-secondary text-xs">Caxias do Sul, Rio Grande do Sul</span>
                      <span className="block text-text-muted text-[11px] mt-0.5">(Triagem pericial e logística de repasses)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-border-subtle">
                    <Clock className="w-4 h-4 text-text-muted flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Horário de Atendimento</strong>
                      <span className="text-text-secondary text-xs">Segunda a Sexta: 08:30 às 18:30 | Sábados: 09:00 às 13:00</span>
                    </div>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="pt-4 border-t border-border-subtle">
                  <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">Redes Oficiais</span>
                  <div className="flex flex-col gap-2 text-xs">
                    <a href={COMMERCIAL_LINKS.instagramVelloce} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-tricolore-red transition-smooth flex items-center justify-between">
                      <span>Instagram: <strong>@veloceimportsofc</strong></span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a href={COMMERCIAL_LINKS.instagramNeni} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-gold transition-smooth flex items-center justify-between">
                      <span>Fundador: <strong>@omarcospaniz</strong></span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

            {/* Formulário de Contato */}
            <div className="lg:col-span-7">
              <Reveal direction="left" delay={150}>
                <div className="p-8 sm:p-10 rounded-2xl bg-bg-surface border border-border-subtle shadow-card">
                  <LeadForm
                    title="Envie uma Mensagem Direta"
                    subtitle="Tire dúvidas sobre laudos, simule propostas ou agende uma visita."
                  />
                </div>
              </Reveal>
            </div>

          </div>

        </div>
      </div>
    </MainLayout>
  );
}
