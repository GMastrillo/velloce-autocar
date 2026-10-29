"use client";

import { Building2, ShieldCheck, Zap, Truck } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Building2,
    tag: "Origem & Giro Rápido",
    title: "Captação Direta em Lotes",
    description:
      "Grandes concessionárias recebem veículos na troca por 0km e priorizam liquidez imediata, repassando lotes à vista com margem real abaixo da FIPE.",
    highlight: "Zero intermediários • Até -40% FIPE",
  },
  {
    step: "02",
    icon: ShieldCheck,
    tag: "Blindagem de Risco",
    title: "Rigor Pericial Pré-Compra",
    description:
      "Inspeção técnica em mais de 150 pontos: estrutura, mecânica, medição micrométrica de pintura e varredura documental forense.",
    highlight: "Laudo cautelar 100% aprovado em PDF",
  },
  {
    step: "03",
    icon: Zap,
    tag: "Acesso Privativo",
    title: "Liquidez nos Grupos VIP",
    description:
      "Oportunidades aprovadas são publicadas em primeira mão nos nossos canais silenciosos do WhatsApp para investidores e compradores finais.",
    highlight: "Notificações limpas • Reserva imediata",
  },
  {
    step: "04",
    icon: Truck,
    tag: "Pós-Venda & Logística",
    title: "Entrega Nacional Segurada",
    description:
      "Despachamos para qualquer estado do Brasil via plataforma fechada ou cegonha homologada, com seguro total e rastreamento em tempo real.",
    highlight: "Entrega técnica na porta da sua casa",
  },
];

export function RepasseEngineering() {
  return (
    <section id="metodologia" className="py-24 bg-[#090b0e] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 font-display">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Engenharia de Liquidez • Padrão Velloce</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            Como Garantimos Margem Real & Segurança Pericial
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Da captação direta em concessionárias autorizadas até a entrega segurada na sua garagem: um processo blindado de ponta a ponta.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 sm:p-7 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-red-500/30 transition-all flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-zinc-700 font-display">
                      {item.step}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 font-display block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5">
                  <span className="text-[11px] font-semibold text-emerald-400 block font-mono">
                    ✓ {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default RepasseEngineering;
