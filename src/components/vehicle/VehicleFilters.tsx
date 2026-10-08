"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Filter, X, ChevronDown, Search, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { VehicleFilters } from "@/types";

const BRANDS = [
  "Porsche", "BMW", "Mercedes-Benz", "Audi", "Ford", "Chevrolet", "Volkswagen",
  "Fiat", "Hyundai", "Toyota", "Honda", "Nissan", "Jeep", "Ram", "Land Rover",
  "Jaguar", "Mini", "Volvo", "Peugeot", "Citroën", "Renault", "Mitsubishi",
  "Subaru", "Kia", "BYD", "GWM", "Caoa Chery", "Outros"
];

const CATEGORIES = [
  { value: "", label: "Todas categorias" },
  { value: "PREMIUM", label: "Linha Premium" },
  { value: "LEVE", label: "Linha Leve / Repasses" },
  { value: "MOTOS", label: "Motos Selecionadas" },
];

const FUEL_TYPES = [
  { value: "", label: "Combustível (Todos)" },
  { value: "GASOLINE", label: "Gasolina" },
  { value: "ETHANOL", label: "Etanol" },
  { value: "FLEX", label: "Flex" },
  { value: "DIESEL", label: "Diesel" },
  { value: "HYBRID", label: "Híbrido" },
  { value: "ELECTRIC", label: "Elétrico" },
];

const TRANSMISSIONS = [
  { value: "", label: "Câmbio (Todos)" },
  { value: "AUTOMATIC", label: "Automático" },
  { value: "MANUAL", label: "Manual" },
  { value: "CVT", label: "CVT" },
  { value: "DSG", label: "DSG" },
  { value: "PDK", label: "PDK" },
  { value: "SEQUENTIAL", label: "Sequencial" },
];

const SORT_OPTIONS = [
  { value: "createdAt-desc", label: "Mais recentes" },
  { value: "price-asc", label: "Menor preço" },
  { value: "price-desc", label: "Maior preço" },
  { value: "year-desc", label: "Ano mais novo" },
  { value: "year-asc", label: "Ano mais antigo" },
  { value: "mileage-asc", label: "Menor km" },
];

interface VehicleFiltersProps {
  initialFilters?: VehicleFilters;
  totalCount: number;
  onFiltersChange?: (filters: VehicleFilters) => void;
}

export function VehicleFiltersComponent({ initialFilters = {}, totalCount, onFiltersChange }: VehicleFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getParam = (key: string): string => {
    const val = searchParams.get(key) ?? (initialFilters as Record<string, unknown>)[key];
    return val !== undefined && val !== null ? String(val) : "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      const valStr = value.toString().trim();
      if (!valStr) return;

      if (key === "sort") {
        const [sortBy, sortOrder] = valStr.split("-");
        if (sortBy) params.set("sortBy", sortBy);
        if (sortOrder) params.set("sortOrder", sortOrder);
      } else {
        params.set(key, valStr);
      }
    });

    params.set("page", "1");
    router.push(`/veiculos?${params.toString()}`);
    onFiltersChange?.(Object.fromEntries(params) as VehicleFilters);
  };

  const clearFilters = () => {
    router.push("/veiculos");
    onFiltersChange?.({});
  };

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (key === "sortBy" || key === "sortOrder") {
      params.delete("sortBy");
      params.delete("sortOrder");
    } else {
      params.delete(key);
    }
    params.set("page", "1");
    router.push(`/veiculos?${params.toString()}`);
  };

  const filterKeys = [
    "search", "category", "brand", "minPrice", "maxPrice",
    "minYear", "maxYear", "maxMileage", "fuelType", "transmission"
  ];

  const activeFilters = filterKeys
    .map((k) => ({ key: k, value: getParam(k) }))
    .filter((f) => Boolean(f.value));

  const hasActiveFilters = activeFilters.length > 0;
  const currentSort = `${getParam("sortBy") || "createdAt"}-${getParam("sortOrder") || "desc"}`;

  const labelMap: Record<string, string> = {
    search: "Busca",
    category: "Categoria",
    brand: "Marca",
    minPrice: "Preço mín.",
    maxPrice: "Preço máx.",
    minYear: "Ano mín.",
    maxYear: "Ano máx.",
    maxMileage: "Km máx.",
    fuelType: "Combustível",
    transmission: "Câmbio",
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* LINHA 1: Busca Principal + Dropdowns Centrais + Ações */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
        {/* Campo de Busca Rápida */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
          <input
            type="search"
            name="search"
            placeholder="Buscar marca, modelo ou versão..."
            defaultValue={getParam("search")}
            className="w-full pl-10 pr-4 py-2.5 bg-bg-card border border-border-subtle rounded-xl text-sm text-text-primary placeholder-text-muted focus:border-tricolore-red focus:ring-2 focus:ring-tricolore-red/20 focus:outline-none transition-smooth"
            aria-label="Buscar veículos"
          />
        </div>

        {/* Categoria */}
        <div className="relative w-full sm:w-44 shrink-0">
          <select
            name="category"
            defaultValue={getParam("category")}
            className="w-full appearance-none pl-3.5 pr-8 py-2.5 bg-bg-card border border-border-subtle rounded-xl text-sm text-text-primary focus:border-tricolore-red focus:ring-2 focus:ring-tricolore-red/20 focus:outline-none transition-smooth cursor-pointer"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value} className="bg-bg-surface text-text-primary">
                {cat.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
        </div>

        {/* Marca */}
        <div className="relative w-full sm:w-44 shrink-0">
          <select
            name="brand"
            defaultValue={getParam("brand")}
            className="w-full appearance-none pl-3.5 pr-8 py-2.5 bg-bg-card border border-border-subtle rounded-xl text-sm text-text-primary focus:border-tricolore-red focus:ring-2 focus:ring-tricolore-red/20 focus:outline-none transition-smooth cursor-pointer"
          >
            <option value="" className="bg-bg-surface text-text-muted">
              Todas as marcas
            </option>
            {BRANDS.map((brand) => (
              <option key={brand} value={brand} className="bg-bg-surface text-text-primary">
                {brand}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
        </div>

        {/* Ordenar */}
        <div className="relative w-full sm:w-44 shrink-0">
          <select
            name="sort"
            defaultValue={currentSort}
            className="w-full appearance-none pl-3.5 pr-8 py-2.5 bg-bg-card border border-border-subtle rounded-xl text-sm text-text-primary focus:border-tricolore-red focus:ring-2 focus:ring-tricolore-red/20 focus:outline-none transition-smooth cursor-pointer"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-bg-surface text-text-primary">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
        </div>

        {/* Botão de Filtrar */}
        <Button
          type="submit"
          variant="primary"
          className="h-10 px-6 font-semibold shrink-0 gap-2 shadow-sm rounded-xl cursor-pointer"
        >
          <Filter className="w-4 h-4" />
          <span>Filtrar</span>
        </Button>

        {/* Botão Limpar Filtros */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="h-10 px-3.5 rounded-xl border border-border-subtle bg-bg-card hover:bg-white/5 hover:border-tricolore-red/50 text-xs font-mono text-text-secondary hover:text-tricolore-red transition-smooth flex items-center gap-1.5 shrink-0 cursor-pointer"
            title="Limpar todos os filtros"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpar</span>
          </button>
        )}
      </div>

      {/* LINHA 2: Facetas Detalhadas em Grid Espaçoso (Preço, Ano, Km, Motorização) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mt-4 border-t border-border-subtle/50">
        {/* Bloco 1: Faixa de Preço */}
        <div>
          <label className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-1.5 font-medium">
            Faixa de Preço (R$)
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-mono text-text-muted select-none">
                R$
              </span>
              <input
                name="minPrice"
                type="number"
                placeholder="Mínimo"
                defaultValue={getParam("minPrice")}
                className="w-full pl-8 pr-2.5 py-2 bg-bg-card border border-border-subtle rounded-lg text-xs font-mono text-text-primary placeholder-text-muted/60 focus:border-tricolore-red focus:outline-none transition-smooth"
              />
            </div>
            <span className="text-text-muted text-xs select-none">—</span>
            <div className="relative flex-1">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-mono text-text-muted select-none">
                R$
              </span>
              <input
                name="maxPrice"
                type="number"
                placeholder="Máximo"
                defaultValue={getParam("maxPrice")}
                className="w-full pl-8 pr-2.5 py-2 bg-bg-card border border-border-subtle rounded-lg text-xs font-mono text-text-primary placeholder-text-muted/60 focus:border-tricolore-red focus:outline-none transition-smooth"
              />
            </div>
          </div>
        </div>

        {/* Bloco 2: Ano do Veículo */}
        <div>
          <label className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-1.5 font-medium">
            Ano de Fabricação
          </label>
          <div className="flex items-center gap-2">
            <input
              name="minYear"
              type="number"
              placeholder="De (ex: 2018)"
              defaultValue={getParam("minYear")}
              min={1990}
              max={new Date().getFullYear() + 1}
              className="w-full px-3 py-2 bg-bg-card border border-border-subtle rounded-lg text-xs font-mono text-text-primary placeholder-text-muted/60 focus:border-tricolore-red focus:outline-none transition-smooth"
            />
            <span className="text-text-muted text-xs select-none">—</span>
            <input
              name="maxYear"
              type="number"
              placeholder="Até (ex: 2025)"
              defaultValue={getParam("maxYear")}
              min={1990}
              max={new Date().getFullYear() + 1}
              className="w-full px-3 py-2 bg-bg-card border border-border-subtle rounded-lg text-xs font-mono text-text-primary placeholder-text-muted/60 focus:border-tricolore-red focus:outline-none transition-smooth"
            />
          </div>
        </div>

        {/* Bloco 3: Quilometragem Máxima */}
        <div>
          <label className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-1.5 font-medium">
            Quilometragem Máx.
          </label>
          <div className="relative">
            <input
              name="maxMileage"
              type="number"
              placeholder="Ex: 50.000"
              defaultValue={getParam("maxMileage")}
              className="w-full pl-3 pr-10 py-2 bg-bg-card border border-border-subtle rounded-lg text-xs font-mono text-text-primary placeholder-text-muted/60 focus:border-tricolore-red focus:outline-none transition-smooth"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-mono text-text-muted select-none">
              km
            </span>
          </div>
        </div>

        {/* Bloco 4: Combustível & Câmbio */}
        <div>
          <label className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-1.5 font-medium">
            Combustível & Câmbio
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <select
                name="fuelType"
                defaultValue={getParam("fuelType")}
                className="w-full appearance-none pl-2.5 pr-6 py-2 bg-bg-card border border-border-subtle rounded-lg text-xs text-text-primary focus:border-tricolore-red focus:outline-none transition-smooth cursor-pointer truncate"
              >
                {FUEL_TYPES.map((f) => (
                  <option key={f.value} value={f.value} className="bg-bg-surface text-text-primary">
                    {f.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
            </div>

            <div className="relative">
              <select
                name="transmission"
                defaultValue={getParam("transmission")}
                className="w-full appearance-none pl-2.5 pr-6 py-2 bg-bg-card border border-border-subtle rounded-lg text-xs text-text-primary focus:border-tricolore-red focus:outline-none transition-smooth cursor-pointer truncate"
              >
                {TRANSMISSIONS.map((t) => (
                  <option key={t.value} value={t.value} className="bg-bg-surface text-text-primary">
                    {t.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* LINHA 3: Badges de Filtros Ativos */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3.5 border-t border-border-subtle/50">
          <span className="text-xs font-mono uppercase tracking-wider text-text-muted mr-1">
            Filtros ativos:
          </span>
          {activeFilters.map((f) => (
            <Badge
              key={f.key}
              variant="default"
              size="sm"
              className="bg-bg-card border border-border-subtle text-text-primary font-mono text-xs py-1 px-2.5 rounded-lg gap-1.5"
            >
              <span>{labelMap[f.key] || f.key}:</span>
              <strong className="text-accent-gold font-normal">
                {f.key === "minPrice" || f.key === "maxPrice"
                  ? `R$ ${Number(f.value).toLocaleString("pt-BR")}`
                  : f.key === "maxMileage"
                  ? `${Number(f.value).toLocaleString("pt-BR")} km`
                  : f.value}
              </strong>
              <button
                type="button"
                onClick={() => removeFilter(f.key)}
                className="ml-1 text-text-muted hover:text-tricolore-red transition-smooth cursor-pointer"
                aria-label={`Remover filtro ${labelMap[f.key] || f.key}`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs font-mono text-text-muted hover:text-tricolore-red transition-smooth underline underline-offset-4 ml-2 cursor-pointer"
          >
            Limpar todos
          </button>
        </div>
      )}
    </form>
  );
}

export function MobileFiltersToggle({
  isOpen,
  onToggle,
  hasFilters,
  totalCount,
}: {
  isOpen: boolean;
  onToggle: () => void;
  hasFilters: boolean;
  totalCount: number;
}) {
  return (
    <Button
      variant={hasFilters ? "primary" : "outline"}
      size="lg"
      className="w-full lg:hidden gap-2"
      onClick={onToggle}
    >
      <Filter className="h-5 w-5" />
      <span>Filtros</span>
      {hasFilters && (
        <Badge variant="danger" size="sm">
          {Number(hasFilters)}
        </Badge>
      )}
      <span className="font-mono text-text-secondary">{totalCount}</span>
      <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
    </Button>
  );
}