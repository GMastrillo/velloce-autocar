"use client";

import Image from "next/image";
import Link from "next/link";
import { Car, Gauge, Calendar, Fuel, Settings, MapPin, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { formatCurrency, formatNumber, getFuelTypeLabel, getTransmissionLabel } from "@/lib/utils";
import { Vehicle } from "@/types";

interface VehicleCardProps {
  vehicle: Vehicle;
  variant?: "default" | "featured" | "compact";
  showCompare?: boolean;
  onCompare?: (id: string) => void;
}

export function VehicleCard({ vehicle, variant = "default", showCompare = false, onCompare }: VehicleCardProps) {
  const primaryImage = vehicle.images[0];
  const isFeatured = vehicle.isFeatured;
  const fipeSavings = vehicle.fipePrice ? Number(vehicle.fipePrice) - Number(vehicle.price) : 0;
  const savingsPercent = vehicle.fipePrice ? Math.round((fipeSavings / Number(vehicle.fipePrice)) * 100) : 0;

  if (variant === "compact") {
    return (
      <Link href={`/veiculos/${vehicle.slug}`} className="group block">
        <Card variant="outlined" padding="sm" hover className="flex gap-4">
          <div className="relative w-24 h-18 flex-shrink-0 rounded-lg overflow-hidden bg-bg-surface">
            {primaryImage ? (
              <Image
                src={primaryImage}
                alt={`${vehicle.brand} ${vehicle.model}`}
                fill
                className="object-cover transition-smooth group-hover:scale-105"
                sizes="96px"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-text-muted">
                <Car className="h-6 w-6" />
              </div>
            )}
            {isFeatured && (
              <Star className="absolute top-1 right-1 h-4 w-4 text-accent-gold fill-current" />
            )}
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge category={vehicle.category} size="sm" />
                {isFeatured && <Badge variant="gold" size="sm">Destaque</Badge>}
              </div>
              <h3 className="font-display font-semibold text-text-primary truncate group-hover:text-tricolore-red transition-smooth">
                {vehicle.brand} {vehicle.model}
              </h3>
              <p className="text-text-secondary text-sm font-mono tabular-nums">{vehicle.year}/{vehicle.yearModel} • {formatNumber(vehicle.mileage)} km</p>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-border-subtle">
              <span className="font-mono font-bold text-lg text-text-primary tabular-nums">{formatCurrency(vehicle.price)}</span>
              <span className="text-text-muted text-xs">{vehicle.location}</span>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <article className="group h-full">
      <Link href={`/veiculos/${vehicle.slug}`} className="block h-full">
        <SpotlightCard
          spotlightColor="rgba(212, 175, 55, 0.10)"
          className="overflow-hidden h-full flex flex-col p-0 rounded-2xl bg-bg-card border-border-subtle hover:border-white/15 transition-all duration-200 shadow-card"
        >
          {/* Imagem Limpa (Apple HIG Deference: a foto do carro é a protagonista) */}
          <div className="relative aspect-[16/10] overflow-hidden bg-bg-surface">
            {primaryImage ? (
              <Image
                src={primaryImage}
                alt={`${vehicle.brand} ${vehicle.model} - ${vehicle.year}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-text-muted">
                <Car className="h-12 w-12" />
              </div>
            )}

            <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
              <Badge category={vehicle.category} size="sm" />
            </div>

            <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
              {vehicle.status === "RESERVED" && <Badge variant="warning" size="sm">Reservado</Badge>}
              {vehicle.status === "SOLD" && <Badge variant="danger" size="sm">Vendido</Badge>}
              {savingsPercent > 0 && vehicle.status === "AVAILABLE" && (
                <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-tricolore-green font-mono text-[11px] font-bold tabular-nums">
                  -{savingsPercent}% FIPE
                </span>
              )}
            </div>
          </div>

          <CardContent className="flex-1 flex flex-col p-5">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted block">
                  {vehicle.brand} • {vehicle.location}
                </span>
                <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent-gold transition-colors mt-0.5 leading-snug">
                  {vehicle.model}
                </h3>
              </div>
              {showCompare && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onCompare?.(vehicle.id);
                  }}
                  className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-text-muted hover:text-text-primary hover:bg-bg-surface transition-colors"
                  aria-label="Comparar"
                >
                  <Star className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Especificações Essenciais em Grade Limpa (Grouped Style) */}
            <div className="grid grid-cols-3 gap-2 py-3 my-auto border-y border-white/[0.06] text-xs">
              <div>
                <span className="text-text-muted text-[10px] font-mono uppercase block">Ano</span>
                <span className="font-mono font-medium text-text-primary tabular-nums">{vehicle.year}/{vehicle.yearModel}</span>
              </div>
              <div>
                <span className="text-text-muted text-[10px] font-mono uppercase block">KM</span>
                <span className="font-mono font-medium text-text-primary tabular-nums">{formatNumber(vehicle.mileage)}</span>
              </div>
              <div>
                <span className="text-text-muted text-[10px] font-mono uppercase block">Câmbio</span>
                <span className="font-mono font-medium text-text-primary truncate block">{getTransmissionLabel(vehicle.transmission)}</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="px-5 pb-5 pt-0 mt-0 border-0">
            <div className="flex items-center justify-between w-full pt-1">
              <div>
                {vehicle.fipePrice && (
                  <span className="font-mono text-[11px] text-text-muted line-through block tabular-nums">
                    FIPE: {formatCurrency(vehicle.fipePrice)}
                  </span>
                )}
                <span className="font-mono font-extrabold text-xl text-text-primary tabular-nums">
                  {formatCurrency(vehicle.price)}
                </span>
              </div>
              <span className="inline-flex items-center justify-center px-4 min-h-[40px] rounded-full bg-white/[0.06] group-hover:bg-accent-primary group-hover:text-bg-primary text-text-primary font-display font-semibold text-xs transition-all">
                Ver Dossiê →
              </span>
            </div>
          </CardFooter>
        </SpotlightCard>
      </Link>
    </article>
  );
}