"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

import { COMMERCIAL_LINKS } from "@/data/commercial";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Estoque", href: "/veiculos" },
  { name: "Premium", href: "/veiculos?category=PREMIUM" },
  { name: "Seminovos", href: "/veiculos?category=LEVE" },
  { name: "Grupos VIP", href: "/#grupos-vip" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-smooth pt-[env(safe-area-inset-top,0px)]",
        isScrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle shadow-card"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3.5 group" aria-label="Velloce AutoCar - Início">
              <div className="relative flex items-center justify-center">
                <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-border-subtle bg-black p-0.5 flex items-center justify-center group-hover:border-tricolore-red transition-smooth">
                  <Image
                    src="/logo-velloce.jpg"
                    alt="Velloce AutoCar Logo"
                    width={44}
                    height={44}
                    className="object-cover w-full h-full rounded"
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-2 w-5 rounded-full overflow-hidden border border-black shadow">
                  <span className="w-1/3 bg-tricolore-green"></span>
                  <span className="w-1/3 bg-tricolore-white"></span>
                  <span className="w-1/3 bg-tricolore-red"></span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl text-text-primary tracking-wider leading-none">
                  VELLOCE
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent-gold mt-1">
                  AUTOCAR • BC & CXS
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-smooth relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-tricolore-red after:transition-all hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">

            <a
              href="tel:+5554996827149"
              aria-label="Ligar para o telefone (54) 99682-7149"
              className="hidden sm:inline-flex items-center gap-2.5 px-4 min-h-[44px] bg-bg-card border border-border-subtle rounded-full font-mono text-xs font-medium text-text-primary hover:border-white/20 active:scale-[0.98] transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-tricolore-green" />
              <span>(54) 99682-7149</span>
            </a>

            <a
              href={COMMERCIAL_LINKS.comprarCarroUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar diretamente com a Velloce AutoCar pelo WhatsApp"
              className="hidden sm:inline-flex items-center gap-2 px-5 min-h-[44px] bg-tricolore-green text-black font-display font-bold text-xs uppercase tracking-wider rounded-full hover:bg-tricolore-green/90 active:scale-[0.98] transition-all shadow-sm"
            >
              <Zap className="h-3.5 w-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full text-text-secondary hover:text-text-primary hover:bg-bg-card active:scale-[0.95] transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden overflow-y-auto overscroll-contain transition-all duration-300 ease-in-out border-t border-border-subtle bg-bg-primary/98 backdrop-blur-xl shadow-2xl",
            isMobileMenuOpen ? "max-h-[85dvh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-bg-surface rounded-lg transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border-subtle space-y-3">
              <a
                href={COMMERCIAL_LINKS.comprarCarroUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Velloce AutoCar pelo WhatsApp"
                className="flex items-center gap-3 px-4 py-3 bg-tricolore-green text-tricolore-white font-medium rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Zap className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="tel:+5554996827149"
                aria-label="Ligar para o telefone (54) 99682-7149"
                className="flex items-center gap-3 px-4 py-3 text-text-primary font-medium hover:bg-bg-surface rounded-lg transition-smooth"
              >
                <Phone className="h-5 w-5 text-tricolore-green" />
                (54) 99682-7149
              </a>
              <a
                href="mailto:velloceautocar@gmail.com"
                className="flex items-center gap-3 px-4 py-3 text-text-primary font-medium hover:bg-bg-surface rounded-lg transition-smooth"
              >
                <Mail className="h-5 w-5 text-tricolore-red" />
                velloceautocar@gmail.com
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}