import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, Award, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Sobre a Velloce AutoCar — Mais que carros, entregamos confiança",
  description: "Conheça a história, o manifesto e os padrões de rigor pericial da Velloce AutoCar em Balneário Camboriú e Caxias do Sul.",
};

export default function SobrePage() {
  return (
    <MainLayout>
      <div className="bg-bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
          
          {/* Header */}
          <Reveal direction="up" delay={50}>
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-gold">
                Nossa História & Posicionamento
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary tracking-tight">
                Mais que carros, entregamos confiança.
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed">
                A Velloce nasceu para eliminar a assimetria de informações no mercado automotivo. Unimos a agilidade das negociações de repasse ao rigor pericial das grandes boutiques de luxo.
              </p>
            </div>
          </Reveal>

          {/* O Manifesto */}
          <Reveal direction="up" delay={100}>
            <div className="p-8 sm:p-12 rounded-2xl bg-bg-surface border border-border-subtle relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-tricolore-green via-tricolore-white to-tricolore-red" />
              <div className="space-y-4 max-w-3xl pl-4">
                <span className="font-mono text-xs uppercase tracking-widest text-tricolore-red">
                  O Manifesto Velloce
                </span>
                <blockquote className="font-display italic text-xl sm:text-2xl text-text-primary leading-relaxed">
                  “Velocidade não é apenas o que move o ponteiro do velocímetro na reta. Velocidade é a agilidade para encontrar a oportunidade exata antes de todo mundo. No mercado automotivo, promessas vazias não resistem a um laudo cautelar. Não vendemos ilusões: validamos cada parafuso e entregamos veículos prontos para a estrada.”
                </blockquote>
                <p className="font-mono text-sm text-accent-gold pt-2">
                  — Equipe Velloce AutoCar
                </p>
              </div>
            </div>
          </Reveal>

          {/* Os 2 Hubs Estratégicos */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-display font-bold text-3xl text-text-primary">
                Presença Estratégica no Sul do Brasil
              </h2>
              <p className="text-text-secondary text-sm">
                Bases de atendimento e inspeção técnica conectadas às regiões de maior liquidez e apreço por superesportivos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-8 rounded-2xl bg-bg-surface border border-border-subtle space-y-4">
                <div className="flex items-center gap-2 text-accent-gold">
                  <MapPin className="w-5 h-5" />
                  <span className="font-mono font-bold text-sm uppercase tracking-wider">Hub Litoral</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-text-primary">
                  Balneário Camboriú, Santa Catarina
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Localizada na capital brasileira dos superesportivos, nossa operação em BC concentra veículos exóticos, blindados e oportunidades de alta gama, com atendimento exclusivo.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded bg-bg-card border border-border-subtle text-xs font-mono text-text-muted">
                    Atendimento VIP com Agendamento
                  </span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-bg-surface border border-border-subtle space-y-4">
                <div className="flex items-center gap-2 text-tricolore-green">
                  <MapPin className="w-5 h-5" />
                  <span className="font-mono font-bold text-sm uppercase tracking-wider">Hub Serra Gaúcha</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-text-primary">
                  Caxias do Sul, Rio Grande do Sul
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Nossas raízes na Serra Gaúcha garantem forte rede de relacionamento, captação constante de repasses selecionados e suporte logístico para todo o interior do RS, SC e PR.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded bg-bg-card border border-border-subtle text-xs font-mono text-text-muted">
                    Centro de Vistorias e Repasses
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="p-8 sm:p-12 rounded-2xl bg-bg-card border border-border-subtle text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
              Pronto para Conhecer Nossas Oportunidades?
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto">
              Acesse nosso estoque ou converse diretamente com um consultor para entender os laudos e valores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/veiculos">
                <Button variant="primary" size="lg">
                  Ver Estoque Completo
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="outline" size="lg">
                  Entrar em Contato
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
