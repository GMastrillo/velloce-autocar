"use client";

import { Users, Car, Bike, Truck, Ship, Plane, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { VIP_GROUPS } from "@/data/commercial";

export function VipGroupsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "LEVE":
        return Car;
      case "PREMIUM":
        return Car;
      case "MOTOS":
        return Bike;
      case "PESADA":
        return Truck;
      case "NAUTICA":
        return Ship;
      case "AVIACAO":
        return Plane;
      default:
        return Car;
    }
  };

  return (
    <section id="grupos-vip" className="py-24 bg-[#07080a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-600/10 border border-emerald-500/20 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 font-display">
            <Users className="w-3.5 h-3.5" />
            <span>Canais Oficiais Silenciosos • WhatsApp</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            Grupos VIP de Repasses da Velloce
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Receba oportunidades diárias com até <strong>40% abaixo da FIPE</strong> diretamente no seu celular. Canais 100% silenciosos onde apenas os administradores publicam laudos e fichas técnicas.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>Sem conversas paralelas • Apenas oportunidades e laudos</span>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIP_GROUPS.map((group) => {
            const Icon = getCategoryIcon(group.category);
            const isHighlight = group.category === "PREMIUM" || group.category === "LEVE";

            return (
              <div
                key={group.id}
                className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between shadow-xl ${
                  isHighlight
                    ? "bg-zinc-950 border-red-500/30 hover:border-red-500 shadow-red-950/20"
                    : "bg-zinc-950/70 border-white/10 hover:border-white/25"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/5 text-zinc-300 border border-white/10 font-display">
                      {group.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {group.name}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-400 block mt-0.5 font-mono">
                      {group.range}
                    </span>
                    <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <a
                    href={group.inviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 font-display ${
                      isHighlight
                        ? "bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                        : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                    }`}
                  >
                    <span>Entrar no Grupo VIP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default VipGroupsSection;
