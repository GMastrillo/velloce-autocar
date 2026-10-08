"use client";

import Image from "next/image";
import Link from "next/link";
import { Car, Gauge, Calendar, Fuel, Settings, MapPin, Star, Shield } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency, formatNumber, getCategoryLabel, getCategoryColor, getFuelTypeLabel, getTransmissionLabel } from "@/lib/utils";
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
      <Link href={`/veiculos/${vehicle.slug}`} className="group">
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
              <p className="text-text-secondary text-sm">{vehicle.year}/{vehicle.yearModel} • {formatNumber(vehicle.mileage)} km</p>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-border-subtle">
              <span className="font-display font-bold text-lg text-text-primary">{formatCurrency(vehicle.price)}</span>
              <span className="text-text-muted text-xs">{vehicle.location}</span>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <article className="group">
      <Link href={`/veiculos/${vehicle.slug}`} className="block">
        <Card variant="elevated" padding="none" hover className="overflow-hidden h-full flex flex-col">
          <div className="relative aspect-[4/3] overflow-hidden bg-bg-surface">
            {primaryImage ? (
              <Image
                src={primaryImage}
                alt={`${vehicle.brand} ${vehicle.model} - ${vehicle.year}`}
                fill
                className="object-cover transition-smooth duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-text-muted">
                <Car className="h-12 w-12" />
              </div>
            )}

            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              <Badge category={vehicle.category} size="sm" />
              {isFeatured && <Badge variant="gold" size="sm">Destaque</Badge>}
            </div>

            <div className="absolute top-3 right-3 flex flex-col gap-1.5">
              {vehicle.status === "RESERVED" && <Badge variant="warning" size="sm">Reservado</Badge>}
              {vehicle.status === "SOLD" && <Badge variant="danger" size="sm">Vendido</Badge>}
            </div>

            {vehicle.fipePrice && (
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-bg-primary/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border-subtle">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">FIPE</span>
                    <span className="font-mono font-medium text-text-primary">{formatCurrency(vehicle.fipePrice)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-0.5">
                    <span className="text-tricolore-green font-medium">
                      Economia: {formatCurrency(Number(vehicle.fipePrice) - Number(vehicle.price))}
                    </span>
                    <span className="text-text-muted">
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
                <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-tricolore-red transition-smooth">
                  {vehicle.brand} {vehicle.model}
                </h3>
                <p className="text-text-secondary text-sm">{vehicle.year}/{vehicle.yearModel} • {vehicle.color}</p>
              </div>
              {showCompare && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onCompare?.(vehicle.id);
                  }}
                  className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-surface transition-smooth"
                  aria-label="Comparar"
                >
                  <Star className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-bg-surface rounded-lg text-text-secondary text-xs">
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
                <span className="font-mono font-medium text-text-primary">{formatNumber(vehicle.mileage)} km</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-text-muted" />
                <span className="font-mono font-medium text-text-primary">{vehicle.yearModel}</span>
              </div>
            </div>

            {vehicle.features && vehicle.features.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {vehicle.features.slice(0, 4).map((feature: string) => (
                  <span key={feature} className="px-2 py-0.5 bg-bg-surface rounded text-xs text-text-secondary">
                    {feature}
                  </span>
                ))}
                {vehicle.features.length > 4 && (
                  <span className="px-2 py-0.5 bg-bg-surface rounded text-xs text-text-muted">
                    +{vehicle.features.length - 4}
                  </span>
                )}
              </div>
            )}

            {vehicle.description && (
              <p className="text-text-secondary text-sm line-clamp-2 mb-4 flex-1">{vehicle.description}</p>
            )}
          </CardContent>

          <CardFooter className="px-5 pb-5">
            <div className="flex items-center justify-between w-full">
              <div>
                <span className="font-display font-bold text-xl text-text-primary">{formatCurrency(vehicle.price)}</span>
                {vehicle.fipePrice && (
                  <p className="text-xs text-tricolore-green font-medium mt-0.5">
                    {Math.round(((Number(vehicle.fipePrice) - Number(vehicle.price)) / Number(vehicle.fipePrice)) * 100)}% abaixo da FIPE
                  </p>
                )}
              </div>
              <Button size="md" className="w-full sm:w-auto">
                Ver Detalhes
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </article>
  );
}