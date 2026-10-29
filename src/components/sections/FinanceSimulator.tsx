"use client";

import { useState } from "react";
import Image from "next/image";
import { Calculator, MessageSquare, ShieldCheck, CheckCircle2, DollarSign } from "lucide-react";
import { CONCIERGE_VEHICLES } from "@/data/concierge-vehicles";
import { formatCurrencyBRL } from "@/lib/utils";
import { COMMERCIAL_LINKS } from "@/data/commercial";

export default function FinanceSimulator() {
  const [selectedCarId, setSelectedCarId] = useState(CONCIERGE_VEHICLES[0].id);
  const currentCar = CONCIERGE_VEHICLES.find((v) => v.id === selectedCarId) || CONCIERGE_VEHICLES[0];

  // Entrada em % (de 20% a 80%)
  const [downPaymentPercent, setDownPaymentPercent] = useState(40);
  const [months, setMonths] = useState(36);

  const carPrice = currentCar.price;
  const downPaymentValue = (carPrice * downPaymentPercent) / 100;
  const financedValue = carPrice - downPaymentValue;

  // Taxa estimada de 1.19% a.m. (típica private banking)
  const monthlyRate = 0.0119;
  const monthlyPayment =
    (financedValue * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const handleWhatsAppSimulation = () => {
    const text = `Ol%C3%A1%2C%20gostaria%20de%20uma%20proposta%20de%20financiamento%20para%20o%20${encodeURIComponent(
      currentCar.name
    )}%3A%0A%0A%E2%80%A2%20Valor%20do%20Carro%3A%20${encodeURIComponent(
      formatCurrencyBRL(carPrice)
    )}%0A%E2%80%A2%20Entrada%20(${downPaymentPercent}%25)%3A%20${encodeURIComponent(
      formatCurrencyBRL(downPaymentValue)
    )}%0A%E2%80%A2%20Prazo%3A%20${months}%20meses%0A%E2%80%A2%20Parcela%20Estimada%3A%20${encodeURIComponent(
      formatCurrencyBRL(monthlyPayment)
    )}%20(sujeito%20a%20an%C3%A1lise)`;

    window.open(`${COMMERCIAL_LINKS.comprarCarroUrl}?text=${text}`, "_blank");
  };

  return (
    <section id="simulador" className="py-24 bg-[#090b0e] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 uppercase tracking-widest mb-3 font-display">
            <Calculator className="w-3.5 h-3.5 text-red-500" />
            <span>Transparência Total</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            Faça as Contas Antes de Decidir
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base font-light">
            Simule a entrada e o plano de parcelamento para sua próxima conquista com taxas private banking e aprovação ágil.
          </p>
        </div>

        {/* Main Simulator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 bg-zinc-950/80 border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div className="space-y-8">
              {/* Car Select */}
              <div>
                <label className="text-xs uppercase font-semibold text-zinc-400 tracking-wider block mb-2 font-display">
                  1. Escolha o Veículo para a Simulação
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CONCIERGE_VEHICLES.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedCarId(v.id)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedCarId === v.id
                          ? "bg-red-600/10 border-red-500 text-white"
                          : "bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="block font-bold truncate text-white">{v.name}</span>
                      <span className="text-[11px] text-zinc-400">{formatCurrencyBRL(v.price)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase font-semibold text-zinc-400 tracking-wider font-display">
                    2. Entrada ({downPaymentPercent}%)
                  </label>
                  <span className="text-sm font-bold text-white font-display">
                    {formatCurrencyBRL(downPaymentValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1 font-mono">
                  <span>Mín. 20%</span>
                  <span>50%</span>
                  <span>Máx. 80%</span>
                </div>
              </div>

              {/* Installment Months Select */}
              <div>
                <label className="text-xs uppercase font-semibold text-zinc-400 tracking-wider block mb-2 font-display">
                  3. Prazo do Financiamento
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {[12, 24, 36, 48].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`py-3 rounded-xl border text-xs font-bold transition-all font-display ${
                        months === m
                          ? "bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                          : "bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {m}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-white/10 mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Taxas a partir de 1.19% a.m.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Aprovação rápida em até 2h</span>
              </div>
            </div>
          </div>

          {/* Right: Summary & Action */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block font-display">
                Estimativa de Parcela
              </span>

              {/* Big Result Box */}
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
                    {formatCurrencyBRL(monthlyPayment)}
                  </span>
                  <span className="text-xs text-zinc-400 font-normal">/mês</span>
                </div>
                <div className="text-xs text-zinc-400 mt-2">
                  Plano em <strong className="text-white">{months} parcelas mensais</strong>
                </div>
              </div>

              {/* Financial Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-zinc-400">Veículo Selecionado</span>
                  <span className="font-semibold text-white truncate max-w-[200px]">{currentCar.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-zinc-400">Valor Total à Vista</span>
                  <span className="font-semibold text-white font-display">{formatCurrencyBRL(carPrice)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-zinc-400">Entrada sugerida ({downPaymentPercent}%)</span>
                  <span className="font-semibold text-emerald-400 font-display">{formatCurrencyBRL(downPaymentValue)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-zinc-400">Saldo a ser financiado</span>
                  <span className="font-semibold text-white font-display">{formatCurrencyBRL(financedValue)}</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Proposal */}
            <div className="pt-6 relative z-10">
              <button
                onClick={handleWhatsAppSimulation}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(220,38,38,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer font-display"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Enviar Simulação no WhatsApp</span>
              </button>
              <p className="text-[10px] text-zinc-500 text-center mt-2 font-light">
                *Simulação ilustrativa sujeita a análise de crédito pelos bancos parceiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
