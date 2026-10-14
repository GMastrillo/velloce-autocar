import { Suspense } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { VehicleFiltersComponent } from "@/components/vehicle/VehicleFilters";
import { Reveal } from "@/components/ui/Reveal";
import { getFilteredVehicles } from "@/data/vehicles";
import { VehicleFilters, Category, FuelType, Transmission } from "@/types";

interface PageProps {
  searchParams: Promise<{
    search?: string;
    category?: Category;
    brand?: string;
    minPrice?: string;
    maxPrice?: string;
    minYear?: string;
    maxYear?: string;
    maxMileage?: string;
    fuelType?: FuelType;
    transmission?: Transmission;
    sortBy?: "price" | "year" | "mileage" | "createdAt";
    sortOrder?: "asc" | "desc";
    page?: string;
  }>;
}

export default async function VeiculosPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;

  const filters: VehicleFilters = {
    search: resolvedParams.search,
    category: resolvedParams.category,
    brand: resolvedParams.brand,
    minPrice: resolvedParams.minPrice ? Number(resolvedParams.minPrice) : undefined,
    maxPrice: resolvedParams.maxPrice ? Number(resolvedParams.maxPrice) : undefined,
    minYear: resolvedParams.minYear ? Number(resolvedParams.minYear) : undefined,
    maxYear: resolvedParams.maxYear ? Number(resolvedParams.maxYear) : undefined,
    maxMileage: resolvedParams.maxMileage ? Number(resolvedParams.maxMileage) : undefined,
    fuelType: resolvedParams.fuelType,
    transmission: resolvedParams.transmission,
    sortBy: resolvedParams.sortBy,
    sortOrder: resolvedParams.sortOrder,
    page: resolvedParams.page ? Number(resolvedParams.page) : 1,
    limit: 12,
  };

  const { data: vehicles, total } = getFilteredVehicles(filters);

  return (
    <MainLayout>
      <div className="bg-bg-primary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Header da Página de Estoque */}
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-accent-gold mb-2">
              Inventário Oficial • Velloce AutoCar
            </p>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
              Estoque Selecionado & Repasses
            </h1>
            <p className="text-text-secondary text-base mt-2 max-w-2xl">
              Filtre por categoria, marca, ano ou faixa de preço. Todos os veículos contam com laudo pericial detalhado e procedência garantida.
            </p>
          </div>

          {/* Barra de Filtros */}
          <div className="p-4 sm:p-6 bg-bg-surface border border-border-subtle rounded-2xl mb-10 shadow-sm">
            <Suspense fallback={<div className="h-12 animate-pulse bg-bg-card rounded-lg" />}>
              <VehicleFiltersComponent initialFilters={filters} totalCount={total} />
            </Suspense>
          </div>

          {/* Resultado / Contador */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-sm text-text-secondary">
              Exibindo <strong className="text-text-primary">{vehicles.length}</strong> de <strong className="text-text-primary">{total}</strong> veículos encontrados
            </span>
          </div>

          {/* Grid de Veículos */}
          {vehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.map((vehicle, index) => (
                <Reveal key={vehicle.id} direction="up" delay={(index % 6) * 90}>
                  <VehicleCard vehicle={vehicle} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-bg-surface border border-border-subtle rounded-2xl p-8">
              <h2 className="font-display font-bold text-2xl text-text-primary mb-2">
                Nenhum veículo encontrado com estes filtros
              </h2>
              <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
                Tente redefinir os filtros ou fale diretamente com nossos consultores para encomendar o modelo desejado.
              </p>
              <a
                href="https://wa.me/5554996827149?text=Ol%C3%A1%2C%20procuro%20um%20ve%C3%ADculo%20espec%C3%ADfico%20na%20Velloce."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-6 py-3 rounded-lg bg-tricolore-red text-white font-medium hover:bg-red-700 transition-smooth">
                  Consultar Disponibilidade no WhatsApp
                </button>
              </a>
            </div>
          )}

        </div>
      </div>
    </MainLayout>
  );
}
