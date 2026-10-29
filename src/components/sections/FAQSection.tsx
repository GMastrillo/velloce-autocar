"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { COMMERCIAL_LINKS } from "@/data/commercial";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como a Velloce consegue veículos com até 40% abaixo da FIPE?",
      a: "Trabalhamos diretamente no canal de repasse selecionado e desmobilização de frotas de concessionárias parceiras de todo o Brasil. Negociamos em lote ou captamos oportunidades antes que cheguem ao mercado varejista tradicional, repassando essa margem de economia diretamente para nossos clientes e investidores.",
    },
    {
      q: "Como funciona a garantia e a perícia técnica dos veículos?",
      a: "Todos os veículos passam por laudo cautelar Dekra ou Super Visão 100% aprovado, sem histórico de leilão, sinistro ou alteração estrutural. Atestamos motor, câmbio, histórico documental e procedência jurídica com transparência absoluta.",
    },
    {
      q: "Vocês realizam entrega em outros estados?",
      a: "Sim! Entregamos em qualquer cidade do Brasil. Operamos com transporte em caminhão prancha fechado ou transportadora homologada com seguro total de 100% da carga, garantindo que o veículo chegue intacto e pronto para rodar.",
    },
    {
      q: "Posso dar meu carro atual como entrada no negócio?",
      a: "Sim! Aceitamos veículos seminovos de qualquer marca na negociação. Realizamos avaliação justa e transparente com opção de troca com troco (quando você recebe dinheiro de volta na transação) e quitação de eventuais financiamentos em aberto.",
    },
    {
      q: "Como posso participar dos Grupos VIP de Repasses da Velloce?",
      a: "Nossos grupos no WhatsApp são divididos estrategicamente por categorias (Linha Leve até R$ 180k, Linha Premium acima de R$ 180k, Motos e Pesados). O acesso é gratuito e os membros recebem as oportunidades antes de serem publicadas publicamente.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#07080a] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 uppercase tracking-[0.25em] mb-3 font-display">
            <HelpCircle className="w-3.5 h-3.5 text-red-500" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
            Respondemos Suas Dúvidas
          </h2>
          <p className="mt-2 text-zinc-400 text-sm font-light">
            Tudo o que você precisa saber sobre o modelo de negócio Velloce AutoCar e aquisição de veículos.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-950/70 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4 font-display">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
