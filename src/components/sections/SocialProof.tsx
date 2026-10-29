"use client";

import { Star, ShieldCheck } from "lucide-react";

export default function SocialProof() {
  const deliveries = [
    {
      client: "Dr. Eduardo Fonseca",
      role: "Cirurgião Plástico • Balneário Camboriú / SC",
      car: "Porsche 911 Carrera GTS",
      comment:
        "Atendimento impecável com o Marcos Paniz. O carro veio com laudo 100% aprovado, sem nenhum retoque e com entrega técnica impecável.",
      date: "Entregue há 2 semanas",
      rating: 5,
    },
    {
      client: "Marcelo Albuquerque",
      role: "Empresário • Caxias do Sul / RS",
      car: "Porsche Cayenne Turbo GT",
      comment:
        "Já é o segundo veículo que compro com a Velloce. A transparência na avaliação do meu seminovo e a agilidade na negociação são incomparáveis.",
      date: "Entregue há 1 mês",
      rating: 5,
    },
    {
      client: "Renata & Gustavo Prado",
      role: "Investidores • Curitiba / PR",
      car: "Porsche Taycan Turbo S",
      comment:
        "Recebemos o carro em casa via caminhão prancha fechado com seguro total. O Neni nos acompanhou em cada etapa. Padrão internacional!",
      date: "Entregue há 4 semanas",
      rating: 5,
    },
  ];

  return (
    <section id="entregas" className="py-24 bg-[#090b0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red-500 font-semibold block mb-2 font-display">
            Entregas e Histórias Reais
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            Quem Compra, Faz Parte da Nossa História
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base font-light">
            Mais de 1.400 clientes atendidos e sonhos realizados em todo o território nacional com a Velloce AutoCar.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/5 text-center">
            <div className="text-3xl sm:text-4xl font-black text-white font-display">100%</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-medium">Laudo Cautelar Aprovado</div>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/5 text-center">
            <div className="text-3xl sm:text-4xl font-black text-red-500 font-display">+1.400</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-medium">Veículos Entregues</div>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/5 text-center">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-display">Até -40%</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-medium">Margem Abaixo FIPE</div>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/5 text-center">
            <div className="text-3xl sm:text-4xl font-black text-white font-display">27</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-medium">Estados Atendidos</div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliveries.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-red-500/30 transition-all flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 italic font-light leading-relaxed">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <div className="text-xs font-bold text-white font-display">{item.client}</div>
                <div className="text-[11px] text-zinc-400">{item.role}</div>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded bg-red-600/10 border border-red-500/20 text-red-400 text-[10px] font-semibold">
                  {item.car}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
