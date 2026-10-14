"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Por que os veículos de repasse custam até 40% abaixo da FIPE? Existe pegadinha?",
    answer:
      "Não há nenhuma pegadinha. O desconto expressivo é resultado direto da nossa dinâmica de captação: concessionárias autorizadas recebem veículos de clientes como entrada na compra de carros zero km e priorizam o giro rápido de capital para liberar espaço e estoque. Como compramos lotes à vista sem intermediários e operamos com estrutura enxuta (sem os custos inflacionados de lojas tradicionais de shopping), repassamos essa margem real diretamente aos investidores e compradores dos nossos grupos.",
    highlight: "Giro rápido de concessionárias parceiras • Negociação em lote à vista",
  },
  {
    id: "faq-2",
    question: "Os veículos possuem passagem por leilão ou sinistro?",
    answer:
      "Rigorosamente não no nosso estoque selecionado e nos repasses qualificados. Todos os veículos passam por um processo pericial de mais de 150 itens, que inclui checagem estrutural (chassi, longarinas, monobloco), aferição micrométrica de espessura de pintura para constatar ausência de massa plástica e varredura documental forense (zero histórico de leilão, sinistro, furto ou gravames judiciais). O dossiê do laudo cautelar homologado é enviado em PDF antes do fechamento.",
    highlight: "Laudo cautelar 100% aprovado • Mapeamento micrométrico de pintura",
  },
  {
    id: "faq-3",
    question: "Como funcionam os Grupos VIP do WhatsApp? Vou receber spam?",
    answer:
      "Nossos grupos são 100% gratuitos e totalmente silenciosos. As conversas entre membros são bloqueadas por padrão; apenas os administradores e consultores da Velloce publicam anúncios. Você receberá exclusivamente fichas técnicas completas, fotos reais, vídeos de detalhes, valores comparativos da tabela FIPE e o link direto para falar com o Marcos (o Neni) caso tenha interesse no veículo.",
    highlight: "Apenas administradores postam • Notificações limpas sem conversas paralelas",
  },
  {
    id: "faq-4",
    question: "Moro em outro estado. Vocês entregam fora de SC e RS?",
    answer:
      "Sim, realizamos envio e entrega técnica para qualquer cidade e estado do Brasil. Contamos com parceria com transportadoras homologadas com seguro total contra qualquer avaria de transporte — seja em caminhão-plataforma individual fechado (ideal para superesportivos e exóticos) ou em cegonha monitorada com rastreamento por telemetria via GPS até a porta da sua residência.",
    highlight: "Logística segurada para todo o Brasil • Rastreamento em tempo real",
  },
  {
    id: "faq-5",
    question: "Consigo financiar ou dar meu veículo na troca?",
    answer:
      "Depende da categoria do veículo: no nosso Estoque Próprio de Veículos Selecionados, aceitamos veículos na troca mediante avaliação pericial justa e operamos com financiamento bancário através dos principais bancos com taxas de mercado. Já nos Repasses com até 40% Abaixo da FIPE postados nos grupos VIP, as condições são exclusivamente para pagamento à vista (via TED ou PIX) devido à alta velocidade de giro e margem ultra-reduzida das concessionárias.",
    highlight: "Estoque Próprio: Troca e Financiamento • Repasses VIP: Exclusivamente à Vista",
  },
  {
    id: "faq-6",
    question: "Como faço para reservar um veículo postado no grupo?",
    answer:
      "Devido à margem expressiva e à alta procura de investidores nos grupos, as melhores oportunidades costumam ser vendidas em poucas horas ou minutos. Assim que a ficha for postada no canal do WhatsApp, clique imediatamente no link de contato direto presente na mensagem. O Marcos (o Neni) confirmará a disponibilidade em tempo real e fornecerá as instruções para o sinal de reserva formal com envio do contrato e laudo pericial.",
    highlight: "Velocidade de decisão • Contato direto via link oficial da postagem",
  },
];

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 sm:py-24 bg-bg-primary relative overflow-hidden" id="faq">
      {/* Luz focal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-primary/[0.03] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        
        {/* Cabeçalho da Seção */}
        <Reveal direction="up" delay={50}>
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-subtle text-xs font-mono uppercase tracking-widest text-accent-primary">
              <HelpCircle className="w-4 h-4" />
              <span>Dúvidas Frequentes & Transparência</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
              Perguntas Estratégicas & Respostas Claras
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Tudo o que você precisa saber sobre o modelo de repasses, o rigor do laudo cautelar e a operação da Velloce AutoCar.
            </p>
          </div>
        </Reveal>

        {/* Lista do Accordion Acessível */}
        <div className="space-y-4" role="region" aria-label="Perguntas Frequentes">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-button-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <Reveal key={item.id} direction="up" delay={index * 60}>
                <div
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-bg-card border-accent-primary/40 shadow-raised"
                      : "bg-bg-card/70 border-border-subtle hover:border-white/15"
                  )}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                    >
                      <span className="font-display font-bold text-base sm:text-lg text-text-primary leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300",
                          isOpen
                            ? "bg-accent-primary text-bg-primary border-accent-primary rotate-180"
                            : "bg-white/[0.03] text-text-muted border-white/10"
                        )}
                      >
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-all duration-300 ease-in-out px-5 sm:px-6",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                    )}
                  >
                    <div className="overflow-hidden space-y-3 pt-1 border-t border-white/5">
                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                        {item.answer}
                      </p>
                      {item.highlight && (
                        <div className="flex items-center gap-2 pt-1 text-xs font-mono text-accent-primary">
                          <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0" />
                          <span>{item.highlight}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
