"use client";

import { useState, useEffect } from "react";
import { MessageSquare, ShieldCheck, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMMERCIAL_LINKS } from "@/data/commercial";

interface NavbarProps {
  show?: boolean;
}

export default function Navbar({ show = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Revealed if triggered by video end OR user scrolled down
  const isRevealed = show || isScrolled;

  const navLinks = [
    { label: "Estoque", href: "#estoque" },
    { label: "Curadoria", href: "#curadoria" },
    { label: "Grupos VIP", href: "#grupos-vip" },
    { label: "Categorias", href: "#estilos" },
    { label: "Financiamento", href: "#simulador" },
    { label: "O Showroom", href: "#showroom" },
    { label: "Avaliação", href: "#troca" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 lg:px-12 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isRevealed
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-6 pointer-events-none",
        isScrolled
          ? "py-3.5 bg-black/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent"
      )}
    >
      <div className="w-full flex items-center justify-between gap-8">
        {/* Brand Logo with Tricolore Accent */}
        <div className="flex items-center justify-start flex-shrink-0">
          <a href="#" className="flex items-center gap-3 group py-1" aria-label="Velloce AutoCar Home">
            <span className="font-display text-xl sm:text-2xl uppercase select-none flex items-center">
              <span className="font-bold text-white tracking-[0.25em]">VELLOCE</span>
              <span className="font-light text-red-500 tracking-[0.25em] ml-2">AUTOCAR</span>
            </span>
            <div className="hidden sm:flex items-center gap-1 pl-1">
              <span className="w-1.5 h-3.5 rounded-xs bg-[#009246]" />
              <span className="w-1.5 h-3.5 rounded-xs bg-white" />
              <span className="w-1.5 h-3.5 rounded-xs bg-[#CE2B37]" />
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-7 lg:gap-9 text-xs font-medium tracking-[0.18em] uppercase text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 hover:after:w-full after:transition-all after:duration-300 font-display"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <a
            href={COMMERCIAL_LINKS.comprarCarroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(220,38,38,0.35)] transition-all font-display cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Falar com o Neni</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-red-500 transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-t border-white/10 mt-3 p-6 rounded-2xl flex flex-col gap-4 shadow-2xl backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider uppercase text-neutral-300 hover:text-white py-1 font-display"
            >
              {link.label}
            </a>
          ))}

          <a
            href={COMMERCIAL_LINKS.comprarCarroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-red-600 text-white font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 mt-2 font-display"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Atendimento VIP no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
