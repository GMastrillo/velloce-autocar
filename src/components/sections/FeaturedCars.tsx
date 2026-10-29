"use client";

import Image from "next/image";
import { Eye, ShieldCheck, Gauge, Calendar, Cog } from "lucide-react";
import { CONCIERGE_VEHICLES, ConciergeVehicle } from "@/data/concierge-vehicles";
import { formatCurrencyBRL, formatNumberBR } from "@/lib/utils";

interface FeaturedCarsProps {
  onSelectCar: (car: ConciergeVehicle) => void;
}

export default function FeaturedCars({ onSelectCar }: FeaturedCarsProps) {
  const featuredList = CONCIERGE_VEHICLES.filter((v) => v.featured);

  return (
    <section id="destaques" className="py-24 bg-[#07080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-red-500 font-semibold block mb-2 font-display">
              Seleção Especial
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
              Destaques da Semana
            </h2>
            <p className="mt-2 text-zinc-400 text-sm max-w-xl font-light">
              Unidades periciadas com laudo cautelar 100% aprovado, histórico completo e prontas para entrega imediata em Balneário Camboriú ou Caxias do Sul.
            </p>
          </div>

          <a
            href="#estoque"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors font-display"
          >
            <span>Ver todo o inventário ({CONCIERGE_VEHICLES.length} unidades)</span>
            <span className="text-red-500 font-bold">→</span>
          </a>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredList.map((car) => (
            <div
              key={car.id}
              className="group rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-red-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-red-950/20"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md border border-white/10 font-display">
                      {car.badge}
                    </span>
                    <span className="p-1 rounded-full bg-red-600/90 text-white">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs text-zinc-300 font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {car.colorName}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-500 transition-colors font-display">
                      {car.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2 font-light">
                      {car.description}
                    </p>
                  </div>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-400">
                        <Calendar className="w-3 h-3 text-red-500" />
                        <span>Ano</span>
                      </div>
                      <span className="text-xs font-semibold text-white mt-0.5 block">{car.year}</span>
                    </div>

                    <div>
                      <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-400">
                        <Gauge className="w-3 h-3 text-red-500" />
                        <span>KM</span>
                      </div>
                      <span className="text-xs font-semibold text-white mt-0.5 block">{formatNumberBR(car.mileage)} km</span>
                    </div>

                    <div>
                      <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-400">
                        <Cog className="w-3 h-3 text-red-500" />
                        <span>Câmbio</span>
                      </div>
                      <span className="text-xs font-semibold text-white mt-0.5 block truncate px-1">
                        {car.transmission.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-zinc-400 block tracking-wider font-display">
                      Valor Especial
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-white font-display">
                      {formatCurrencyBRL(car.price)}
                    </span>
                  </div>

                  <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                    Laudo Dekra 100%
                  </span>
                </div>

                <button
                  onClick={() => onSelectCar(car)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 hover:border-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 font-display"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Ficha Técnica</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
