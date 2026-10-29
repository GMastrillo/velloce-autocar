"use client";

import { Award, MapPin, MessageSquare, ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";
import { COMMERCIAL_LINKS } from "@/data/commercial";

export function CuradoriaMarcosPaniz() {
  return (
    <section id="curadoria" className="py-24 bg-[#07080a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 font-display">
            <Award className="w-3.5 h-3.5" />
            <span>Curadoria Assinada • Desde 2019</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            Marcos Paniz <span className="text-red-500 font-normal text-2xl sm:text-4xl">(o Neni)</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            No mercado de superesportivos e repasses automotivos, a procedência depende de quem assina a avaliação. Conectamos você diretamente à mesa de decisão com atuação presencial nos polos de <strong>Balneário Camboriú (SC)</strong> e <strong>Caxias do Sul (RS)</strong>.
          </p>

          {/* Location Badges & Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-950/80 border border-white/10 text-xs text-zinc-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Balneário Camboriú (SC) • Caxias do Sul (RS)</span>
            </div>

            <a
              href={COMMERCIAL_LINKS.instagramNeni}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-red-500/40 text-xs text-zinc-300 hover:text-white transition-all font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>@omarcospaniz</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={COMMERCIAL_LINKS.instagramVelloce}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-red-500/40 text-xs text-zinc-300 hover:text-white transition-all font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>@veloceimportsofc</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* 2 Strategic Action Paths (Comprar vs Vender) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Comprar com Especialista */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-display">
                  Atendimento Direto
                </span>
                <span className="text-xs text-zinc-400 font-mono">Canal Exclusivo</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white uppercase font-display group-hover:text-emerald-400 transition-colors">
                  Quero Comprar um Veículo
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                  Busca sob demanda de superesportivos, importados ou repasses com até 40% abaixo da FIPE. Envie sua configuração desejada diretamente para o Neni.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-zinc-300 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Acesso a veículos antes da publicação aberta</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Laudo cautelar pericial completo em PDF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Despacho seguro para qualquer estado</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={COMMERCIAL_LINKS.comprarCarroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-display"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chamar Marcos Paniz no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Vender Veículo */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-red-500/40 transition-all flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/40 border border-red-500/30 text-red-400 font-display">
                  Central de Compras
                </span>
                <span className="text-xs text-zinc-400 font-mono">Pagamento À Vista</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white uppercase font-display group-hover:text-red-400 transition-colors">
                  Quero Vender Meu Veículo
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                  Avaliação justa e compra rápida do seu veículo particular ou frota. Pagamento imediato, quitação de débitos e assessoria documental completa.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-zinc-300 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Proposta técnica em até 2 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Pagamento à vista via PIX / TED imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Quitamos financiamento e saldo devedor</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={COMMERCIAL_LINKS.venderCarroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] font-display"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Avaliar com a Central de Compras</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CuradoriaMarcosPaniz;
