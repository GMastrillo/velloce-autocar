"use client";

import Image from "next/image";
import { Building2, Award, Clock, Shield } from "lucide-react";

export default function ShowroomTour() {
  const perks = [
    {
      icon: Building2,
      title: "Hubs em Balneário Camboriú & Caxias do Sul",
      desc: "Pontos estratégicos no Sul do país para recepção, vistoria minuciosa e entrega de alto nível com lounge privativo.",
    },
    {
      icon: Award,
      title: "Perícia Cautelar 100% Aprovada",
      desc: "Inspeção técnica rigorosa de motor, câmbio, histórico, estrutura e blindagem por empresas líderes (Dekra / Super Visão).",
    },
    {
      icon: Clock,
      title: "Entrega Técnica em Todo o Brasil",
      desc: "Transporte em caminhão prancha fechado ou transporte seguro dedicado direto na porta da sua residência.",
    },
    {
      icon: Shield,
      title: "Sigilo & Assessoria Completa",
      desc: "Transparência total na documentação, transferência rápida e curadoria direta de Marcos Paniz (o Neni).",
    },
  ];

  return (
    <section id="showroom" className="py-24 bg-[#07080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red-500 font-semibold block mb-2 font-display">
            A Experiência Velloce
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            A Loja Por Dentro
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base font-light">
            Mais do que intermediar supercarros e repasses selecionados, oferecemos uma assessoria automotiva transparente, segura e sem burocracia.
          </p>
        </div>

        {/* Hero Showroom Image with Ribbon Delivery */}
        <div className="relative aspect-[16/9] max-h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-14 group">
          <Image
            src="/images/porsche_showroom.jpg"
            alt="Showroom Velloce"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-red-600 text-white tracking-wider inline-block mb-2 font-display">
                Cerimônia de Entrega VIP
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Entrega Técnica com Laudo & Garantia
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1">
                Atendimento personalizado em Balneário Camboriú (SC) e Caxias do Sul (RS).
              </p>
            </div>

            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-white font-medium">Balneário Camboriú • Caxias do Sul</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-red-500/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white font-display">{p.title}</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
