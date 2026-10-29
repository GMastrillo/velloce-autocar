"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Eye, Search, SlidersHorizontal, Calendar, Gauge } from "lucide-react";
import { CONCIERGE_VEHICLES, ConciergeVehicle } from "@/data/concierge-vehicles";
import { formatCurrencyBRL, formatNumberBR } from "@/lib/utils";

interface InventorySectionProps {
  onSelectCar: (car: ConciergeVehicle) => void;
}

export default function InventorySection({ onSelectCar }: InventorySectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [maxPrice, setMaxPrice] = useState<number>(3000000);
  const [fuelFilter, setFuelFilter] = useState<string>("todos");
  const [sortBy, setSortBy] = useState<"price-desc" | "price-asc" | "year-desc">("price-desc");

  const filteredVehicles = useMemo(() => {
    return CONCIERGE_VEHICLES.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCategory === "todos" || car.category === selectedCategory;
      const matchesPrice = car.price <= maxPrice;
      const matchesFuel =
        fuelFilter === "todos" ||
        (fuelFilter === "eletrico" && car.fuel.includes("Elétrico")) ||
        (fuelFilter === "gasolina" && car.fuel.includes("Gasolina"));

      return matchesSearch && matchesCat && matchesPrice && matchesFuel;
    }).sort((a, b) => {
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "year-desc") return b.year - a.year;
      return 0;
    });
  }, [searchTerm, selectedCategory, maxPrice, fuelFilter, sortBy]);

  return (
    <section id="estoque" className="py-24 bg-[#07080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-red-500 font-semibold block mb-2 font-display">
              Catálogo Completo
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
              Um Estoque, Várias Rotas
            </h2>
            <p className="mt-2 text-zinc-400 text-sm max-w-xl font-light">
              Filtre por categoria, valores e motorização para encontrar seu veículo configurado sob medida com curadoria Velloce.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400 bg-white/5 border border-white/10 px-4 py-2 rounded-xl self-start md:self-auto font-display">
            <span>Mostrando {filteredVehicles.length} de {CONCIERGE_VEHICLES.length} unidades</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-4 sm:p-6 mb-10 shadow-xl space-y-4">
          {/* Row 1: Search & Categories */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por modelo, versão ou acabamento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            {/* Category Tabs */}
            <div className="md:col-span-7 flex flex-wrap gap-2">
              {[
                { id: "todos", label: "Todos" },
                { id: "esportivos", label: "Esportivos" },
                { id: "suvs", label: "SUVs" },
                { id: "sedas", label: "Sedãs & Elétricos" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all font-display ${
                    selectedCategory === cat.id
                      ? "bg-red-600 text-white"
                      : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Price range, Fuel & Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-white/5 items-center">
            {/* Max Price */}
            <div>
              <div className="flex justify-between text-xs text-zinc-400 mb-1">
                <span>Preço Máximo</span>
                <span className="text-white font-bold font-display">{formatCurrencyBRL(maxPrice)}</span>
              </div>
              <input
                type="range"
                min="500000"
                max="3000000"
                step="50000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>

            {/* Fuel Filter */}
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Motorização</label>
              <select
                value={fuelFilter}
                onChange={(e) => setFuelFilter(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
              >
                <option value="todos" className="bg-zinc-900">Todas as motorizações</option>
                <option value="gasolina" className="bg-zinc-900">Gasolina / Combustão</option>
                <option value="eletrico" className="bg-zinc-900">100% Elétrico</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Ordenar por</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
              >
                <option value="price-desc" className="bg-zinc-900">Maior Valor</option>
                <option value="price-asc" className="bg-zinc-900">Menor Valor</option>
                <option value="year-desc" className="bg-zinc-900">Mais Recente (Ano)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredVehicles.length === 0 ? (
          <div className="text-center py-20 bg-zinc-950/40 rounded-3xl border border-white/5">
            <p className="text-zinc-400 text-sm">Nenhum veículo encontrado com os filtros selecionados.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("todos");
                setMaxPrice(3000000);
                setFuelFilter("todos");
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider font-display"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((car) => (
              <div
                key={car.id}
                className="group rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-red-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md border border-white/10 font-display">
                        {car.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs text-zinc-300 font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        {car.colorName}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-500 transition-colors font-display">
                        {car.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2 font-light">
                        {car.description}
                      </p>
                    </div>

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
                          <span className="text-[10px] text-red-500 font-bold">CV</span>
                        </div>
                        <span className="text-xs font-semibold text-white mt-0.5 block truncate px-1">
                          {car.power}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-zinc-400 block tracking-wider font-display">
                        Valor Velloce
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white font-display">
                        {formatCurrencyBRL(car.price)}
                      </span>
                    </div>

                    {car.fipePrice && (
                      <span className="text-[11px] text-zinc-400 line-through">
                        FIPE: {formatCurrencyBRL(car.fipePrice)}
                      </span>
                    )}
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
        )}
      </div>
    </section>
  );
}
