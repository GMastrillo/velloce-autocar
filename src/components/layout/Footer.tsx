import Image from "next/image";
import Link from "next/link";
import { Car, MapPin, Phone, Mail, Zap, Shield, Star, Award, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

import { COMMERCIAL_LINKS } from "@/data/commercial";

const footerLinks = {
  empresa: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Nosso Estoque", href: "/veiculos" },
    { name: "Grupos VIP WhatsApp", href: "/#grupos-vip" },
    { name: "Linha Premium", href: "/veiculos?category=PREMIUM" },
    { name: "Linha Leve", href: "/veiculos?category=LEVE" },
    { name: "Motos", href: "/veiculos?category=MOTOS" },
  ],
  servicos: [
    { name: "Comprar Veículo (Neni)", href: COMMERCIAL_LINKS.comprarCarroUrl },
    { name: "Vender / Consignar", href: COMMERCIAL_LINKS.venderCarroUrl },
    { name: "Avaliação de Pré-Compra", href: "/sobre" },
    { name: "Entrega em Todo Brasil", href: "/contato" },
  ],
  suporte: [
    { name: "Contato VIP", href: "/contato" },
    { name: "Central de Compras", href: COMMERCIAL_LINKS.venderCarroUrl },
  ],
};

const socialLinks = [
  { name: "Instagram Veloce", href: COMMERCIAL_LINKS.instagramVelloce, icon: InstagramIcon },
  { name: "Marcos Paniz (Neni)", href: COMMERCIAL_LINKS.instagramNeni, icon: InstagramIcon },
  { name: "WhatsApp Comercial", href: COMMERCIAL_LINKS.comprarCarroUrl, icon: Zap },
];

const trustBadges = [
  { icon: Shield, label: "Laudo Cautelar Aprovado", desc: "Todos veículos inspecionados" },
  { icon: Star, label: "Margem Real Abaixo FIPE", desc: "Preços transparentes" },
  { icon: Award, label: "Procedência Garantida", desc: "Histórico verificado" },
  { icon: Truck, label: "Entrega Nacional", desc: "Levamos até você" },
];

export function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3.5 mb-6 group" aria-label="Velloce AutoCar - Início">
              <div className="relative flex items-center justify-center">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border-subtle bg-black p-0.5 flex items-center justify-center group-hover:border-tricolore-red transition-smooth">
                  <Image
                    src="/logo-velloce.jpg"
                    alt="Velloce AutoCar"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full rounded"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-2.5 w-6 rounded-full overflow-hidden border border-black shadow">
                  <span className="w-1/3 bg-tricolore-green"></span>
                  <span className="w-1/3 bg-tricolore-white"></span>
                  <span className="w-1/3 bg-tricolore-red"></span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl text-text-primary tracking-wider leading-none">
                  VELLOCE
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-gold mt-1">
                  AUTOCAR • BC & CXS
                </span>
              </div>
            </Link>
            <p className="text-text-secondary text-base mb-6 max-w-xs leading-relaxed">
              Mais que carros, entregamos confiança. Veículos seminovos e premium selecionados com rigor pericial, preços abaixo da FIPE e transparência total.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-bg-card border border-border-subtle text-text-secondary hover:text-tricolore-red hover:border-tricolore-red transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">Empresa</h3>
            <nav aria-label="Links da empresa">
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-tricolore-red transition-smooth text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">Serviços</h3>
            <nav aria-label="Serviços">
              <ul className="space-y-3">
                {footerLinks.servicos.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-tricolore-red transition-smooth text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">Suporte</h3>
            <nav aria-label="Suporte">
              <ul className="space-y-3">
                {footerLinks.suporte.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-tricolore-red transition-smooth text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-border-subtle">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-start gap-3 p-4 bg-bg-card border border-border-subtle rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-tricolore-red/10 flex items-center justify-center">
                  <badge.icon className="h-5 w-5 text-tricolore-red" />
                </div>
                <div>
                  <p className="font-display font-medium text-text-primary">{badge.label}</p>
                  <p className="text-text-secondary text-sm mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-display font-medium text-text-primary mb-3">Showroom Balneário Camboriú</h4>
              <address className="not-italic text-text-secondary text-sm space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-tricolore-red mt-0.5 flex-shrink-0" />
                  <span>Rua Flamingo, 49 — Balneário Camboriú, SC — CEP 88338-460</span>
                </div>
              </address>
            </div>

            <div>
              <h4 className="font-display font-medium text-text-primary mb-3">Unidade Caxias do Sul</h4>
              <address className="not-italic text-text-secondary text-sm space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-tricolore-red mt-0.5 flex-shrink-0" />
                  <span>Caxias do Sul, RS</span>
                </div>
              </address>
            </div>

            <div>
              <h4 className="font-display font-medium text-text-primary mb-3">Contato Direto</h4>
              <address className="not-italic text-text-secondary text-sm space-y-2">
                <a href="tel:+5554996827149" className="flex items-center gap-2 hover:text-tricolore-green transition-smooth">
                  <Phone className="h-4 w-4 text-tricolore-green flex-shrink-0" />
                  <span>(54) 99682-7149</span>
                </a>
                <a href="mailto:velloceautocar@gmail.com" className="flex items-center gap-2 hover:text-tricolore-red transition-smooth">
                  <Mail className="h-4 w-4 text-tricolore-red flex-shrink-0" />
                  <span>velloceautocar@gmail.com</span>
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © 2026 Velloce AutoCar. Todos os direitos reservados.
          </p>
          <p className="text-text-muted text-sm">
            CNPJ: 00.000.000/0001-00 | Inscrição Estadual: 000/0000000
          </p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/5554996827149" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-muted hover:text-tricolore-green transition-smooth text-sm">
              <Zap className="h-4 w-4" />
              WhatsApp Comercial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}