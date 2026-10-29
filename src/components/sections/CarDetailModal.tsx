"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageSquare, ShieldCheck, CheckCircle2, Gauge, Calendar, Cog, Flame } from "lucide-react";
import { ConciergeVehicle } from "@/data/concierge-vehicles";
import { formatCurrencyBRL, formatNumberBR } from "@/lib/utils";
import confetti from "canvas-confetti";
import { COMMERCIAL_LINKS } from "@/data/commercial";

interface CarDetailModalProps {
  car: ConciergeVehicle | null;
  onClose: () => void;
}

export default function CarDetailModal({ car, onClose }: CarDetailModalProps) {
  if (!car) return null;

  const handleReserve = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      window.open(
        `${COMMERCIAL_LINKS.comprarCarroUrl}?text=Ol%C3%A1%20Marcos%20(Neni)%2C%20quero%20solicitar%20a%20reserva%20exclusiva%20da%20${encodeURIComponent(
          car.name
        )}%20(${encodeURIComponent(formatCurrencyBRL(car.price))}).`,
        "_blank"
      );
    }, 400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-zinc-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Top Media */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md border border-white/10 font-display">
                    {car.badge}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 uppercase font-display">
                    {car.name}
                  </h2>
                  <p className="text-xs text-zinc-300">{car.colorName}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-zinc-400 block tracking-wider font-display">
                    Valor Velloce
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white font-display">
                    {formatCurrencyBRL(car.price)}
                  </span>
                  {car.fipePrice && (
                    <span className="text-xs text-zinc-400 line-through block">
                      FIPE: {formatCurrencyBRL(car.fipePrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Calendar className="w-4 h-4 text-red-500 mx-auto mb-1" />
                <span className="text-[10px] text-zinc-400 uppercase block font-semibold">Ano Fabricação</span>
                <span className="text-sm font-bold text-white font-display">{car.year}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Gauge className="w-4 h-4 text-red-500 mx-auto mb-1" />
                <span className="text-[10px] text-zinc-400 uppercase block font-semibold">Quilometragem</span>
                <span className="text-sm font-bold text-white font-display">{formatNumberBR(car.mileage)} km</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Flame className="w-4 h-4 text-red-500 mx-auto mb-1" />
                <span className="text-[10px] text-zinc-400 uppercase block font-semibold">Potência Real</span>
                <span className="text-sm font-bold text-emerald-400 font-display">{car.power}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Cog className="w-4 h-4 text-red-500 mx-auto mb-1" />
                <span className="text-[10px] text-zinc-400 uppercase block font-semibold">Transmissão</span>
                <span className="text-sm font-bold text-white truncate block px-1 font-display">{car.transmission}</span>
              </div>
            </div>

            {/* Tags Strip */}
            <div className="flex flex-wrap gap-2">
              {car.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-red-600/10 border border-red-500/20 text-red-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-white font-display">
                Curadoria & Apresentação
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {car.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-white font-display">
                Destaques Técnicos
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {car.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-white font-display">
                Equipamentos de Série & Opcionais
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                {car.equipment.map((eq, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="p-6 bg-black border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div>
                <span className="text-xs font-bold text-white block">Procedência Periciada Garantida</span>
                <span className="text-[11px] text-zinc-400">Laudo cautelar 100% aprovado sem retoques</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white uppercase tracking-wider transition-colors cursor-pointer font-display"
              >
                Voltar
              </button>

              <button
                onClick={handleReserve}
                className="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer font-display"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Reservar Unidade</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
