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
          spotlightColor="rgba(212, 175, 55, 0.12)"
          className="overflow-hidden h-full flex flex-col p-0 rounded-2xl bg-bg-card border-border-subtle hover:border-white/20 transition-all duration-300"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-bg-surface">
            {primaryImage ? (
              <Image
                src={primaryImage}
                alt={`${vehicle.brand} ${vehicle.model} - ${vehicle.year}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-text-muted">
                <Car className="h-12 w-12" />
              </div>
            )}

            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
              <Badge category={vehicle.category} size="sm" />
              {isFeatured && <Badge variant="gold" size="sm">Destaque</Badge>}
            </div>

            <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-20">
              {vehicle.status === "RESERVED" && <Badge variant="warning" size="sm">Reservado</Badge>}
              {vehicle.status === "SOLD" && <Badge variant="danger" size="sm">Vendido</Badge>}
            </div>

            {vehicle.fipePrice && (
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <div className="bg-bg-primary/90 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary text-xs font-mono uppercase">FIPE</span>
                    <span className="font-mono font-medium text-text-primary text-xs tabular-nums">{formatCurrency(vehicle.fipePrice)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-0.5">
                    <span className="text-tricolore-green font-medium font-mono text-[11px] tabular-nums">
                      Economia: {formatCurrency(Number(vehicle.fipePrice) - Number(vehicle.price))}
                    </span>
                    <span className="text-text-muted font-mono text-[11px] tabular-nums">
                      {Math.round(((Number(vehicle.fipePrice) - Number(vehicle.price)) / Number(vehicle.fipePrice)) * 100)}% abaixo
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <CardContent className="flex-1 flex flex-col p-5">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent-gold transition-colors">
                  {vehicle.brand} {vehicle.model}
                </h3>
                <p className="text-text-secondary text-sm font-mono tabular-nums">{vehicle.year}/{vehicle.yearModel} • {vehicle.color}</p>
              </div>
              {showCompare && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onCompare?.(vehicle.id);
                  }}
                  className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-surface transition-colors"
                  aria-label="Comparar"
                >
                  <Star className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-bg-surface rounded-lg text-text-secondary text-xs font-mono">
                <MapPin className="h-3 w-3" />
                {vehicle.location}
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-bg-surface rounded-lg text-text-secondary text-xs">
                <Fuel className="h-3 w-3" />
                {getFuelTypeLabel(vehicle.fuelType)}
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-bg-surface rounded-lg text-text-secondary text-xs">
                <Settings className="h-3 w-3" />
                {getTransmissionLabel(vehicle.transmission)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 pt-4 border-t border-border-subtle">
              <div className="flex items-center gap-2 text-sm">
                <Gauge className="h-4 w-4 text-text-muted" />
                <span className="font-mono font-medium text-text-primary tabular-nums">{formatNumber(vehicle.mileage)} km</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-text-muted" />
                <span className="font-mono font-medium text-text-primary tabular-nums">{vehicle.yearModel}</span>
              </div>
            </div>

            {vehicle.features && vehicle.features.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {vehicle.features.slice(0, 3).map((feature: string) => (
                  <span key={feature} className="px-2 py-0.5 bg-bg-surface border border-white/5 rounded text-[11px] text-text-secondary">
                    {feature}
                  </span>
                ))}
                {vehicle.features.length > 3 && (
                  <span className="px-2 py-0.5 bg-bg-surface border border-white/5 rounded text-[11px] text-text-muted font-mono tabular-nums">
                    +{vehicle.features.length - 3}
                  </span>
                )}
              </div>
            )}

            {vehicle.description && (
              <p className="text-text-secondary text-sm line-clamp-2 mb-4 flex-1 leading-relaxed">{vehicle.description}</p>
            )}
          </CardContent>

          <CardFooter className="px-5 pb-5 pt-0">
            <div className="flex items-center justify-between w-full pt-4 border-t border-white/5">
              <div>
                <span className="font-mono font-bold text-xl text-text-primary tabular-nums">{formatCurrency(vehicle.price)}</span>
                {vehicle.fipePrice && (
                  <p className="text-[11px] font-mono text-tricolore-green font-medium mt-0.5 tabular-nums">
                    {Math.round(((Number(vehicle.fipePrice) - Number(vehicle.price)) / Number(vehicle.fipePrice)) * 100)}% abaixo da FIPE
                  </p>
                )}
              </div>
              <Button size="sm" className="font-mono text-xs uppercase tracking-wider">
                Ver Dossiê
              </Button>
            </div>
          </CardFooter>
        </SpotlightCard>
      </Link>
    </article>
  );
}