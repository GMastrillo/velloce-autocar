import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrencyBRL(value: number | string): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export function formatNumberBR(value: number): string {
  return new Intl.NumberFormat("pt-BR").format(value);
}

export function formatCurrency(value: number | string): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("pt-BR").format(value);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generateVehicleSlug(brand: string, model: string, year: number): string {
  return `${slugify(brand)}-${slugify(model)}-${year}`;
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    PREMIUM: "Premium",
    LEVE: "Leve",
    MOTOS: "Motos",
  };
  return labels[category] || category;
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    PREMIUM: "bg-tricolore-red/20 text-tricolore-red border-tricolore-red/30",
    LEVE: "bg-tricolore-green/20 text-tricolore-green border-tricolore-green/30",
    MOTOS: "bg-tricolore-white/20 text-tricolore-white border-tricolore-white/30",
  };
  return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
}

export function getFuelTypeLabel(fuel: string): string {
  const labels: Record<string, string> = {
    GASOLINE: "Gasolina",
    ETHANOL: "Etanol",
    FLEX: "Flex",
    DIESEL: "Diesel",
    HYBRID: "Híbrido",
    ELECTRIC: "Elétrico",
  };
  return labels[fuel] || fuel;
}

export function getTransmissionLabel(transmission: string): string {
  const labels: Record<string, string> = {
    MANUAL: "Manual",
    AUTOMATIC: "Automático",
    CVT: "CVT",
    DSG: "DSG",
    PDK: "PDK",
    SEQUENTIAL: "Sequencial",
  };
  return labels[transmission] || transmission;
}

export function getVehicleStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    AVAILABLE: "Disponível",
    RESERVED: "Reservado",
    SOLD: "Vendido",
    DRAFT: "Rascunho",
  };
  return labels[status] || status;
}

export function getLeadStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    NEW: "Novo",
    CONTACTED: "Contatado",
    NEGOTIATING: "Negociando",
    CLOSED_WON: "Fechado (Ganho)",
    CLOSED_LOST: "Fechado (Perdido)",
  };
  return labels[status] || status;
}

export function getWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}