"use client";

import { useState } from "react";
import { MessageCircle, X, ShoppingCart, DollarSign, Users, ChevronRight } from "lucide-react";
import { COMMERCIAL_LINKS } from "@/data/commercial";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  vehicleTitle?: string;
  vehiclePrice?: number;
  vehicleSlug?: string;
}

export function WhatsAppButton({ vehicleTitle, vehiclePrice, vehicleSlug }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getDirectMessage = () => {
    if (vehicleTitle && vehiclePrice) {
      const url = vehicleSlug ? `https://velloceautocar.com.br/veiculos/${vehicleSlug}` : "";
      return `Olá Marcos! Tenho interesse no *${vehicleTitle}* (R$ ${Number(vehiclePrice).toLocaleString("pt-BR")}). Gostaria de receber mais detalhes e o laudo cautelar.${url ? ` Link: ${url}` : ""}`;
    }
    return "Olá! Gostaria de consultar as oportunidades de repasse e veículos em estoque da Velloce.";
  };

  const buyUrl = vehicleTitle
    ? `https://wa.me/message/V6G4XTOKH7DJG1?text=${encodeURIComponent(getDirectMessage())}`
    : COMMERCIAL_LINKS.comprarCarroUrl;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Pop-up Menu */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-2xl bg-bg-card border border-border-subtle shadow-2xl p-4 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-tricolore-green flex items-center justify-center text-white font-bold text-sm shadow">
                  V
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-bg-card rounded-full" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-text-primary">
                  Velloce AutoCar • WhatsApp
                </h4>
                <p className="text-[11px] font-mono text-tricolore-green flex items-center gap-1">
                  ● Consultores Online Agora
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-surface transition-smooth"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-text-secondary my-3 leading-relaxed">
            Como podemos te atender hoje? Escolha o canal direto:
          </p>

          <div className="space-y-2">
            {/* Opção 1: Comprar com Marcos */}
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-bg-surface border border-border-subtle hover:border-tricolore-green hover:bg-bg-card transition-smooth group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-tricolore-green/15 text-tricolore-green flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-text-primary block group-hover:text-tricolore-green transition-smooth">
                    Quero Comprar Veículo
                  </span>
                  <span className="text-[11px] text-text-muted">
                    Marcos (o Neni) • Vendas
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-tricolore-green transition-smooth" />
            </a>

            {/* Opção 2: Vender meu carro */}
            <a
              href={COMMERCIAL_LINKS.venderCarroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-bg-surface border border-border-subtle hover:border-accent-gold hover:bg-bg-card transition-smooth group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent-gold/15 text-accent-gold flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-text-primary block group-hover:text-accent-gold transition-smooth">
                    Quero Vender / Consignar
                  </span>
                  <span className="text-[11px] text-text-muted">
                    Central de Compras Velloce
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-smooth" />
            </a>

            {/* Opção 3: Grupos VIP */}
            <a
              href="#grupos-vip"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-bg-surface border border-border-subtle hover:border-tricolore-red hover:bg-bg-card transition-smooth group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-tricolore-red/15 text-tricolore-red flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-text-primary block group-hover:text-tricolore-red transition-smooth">
                    Grupos VIP de Repasses
                  </span>
                  <span className="text-[11px] text-text-muted">
                    Até 40% abaixo da FIPE
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-tricolore-red transition-smooth" />
            </a>
          </div>

          <div className="mt-3 pt-3 border-t border-border-subtle text-center">
            <span className="text-[10px] font-mono text-text-muted">
              Atendimento seguro • Balneário Camboriú & Caxias do Sul
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2.5 px-4 sm:px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 group",
          "bg-tricolore-green hover:bg-emerald-600 text-white font-medium",
          isOpen ? "ring-4 ring-tricolore-green/30" : "hover:scale-105"
        )}
        aria-label="Abrir canais de WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current animate-pulse" />
        <span className="font-display font-bold text-sm tracking-wide">
          {isOpen ? "Fechar" : "WhatsApp Velloce"}
        </span>
        <span className="flex h-2 w-2 rounded-full bg-white animate-ping" />
      </button>
    </div>
  );
}