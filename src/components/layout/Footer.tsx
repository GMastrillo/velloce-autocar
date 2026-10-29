import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { COMMERCIAL_LINKS } from "@/data/commercial";

export function Footer() {
  return (
    <footer className="bg-black text-zinc-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="py-1">
              <span className="font-display text-xl tracking-[0.25em] text-white uppercase select-none flex items-center">
                <span className="font-bold text-white">VELLOCE</span>
                <span className="font-light text-red-500 ml-2">AUTOCAR</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Mais que carros, entregamos confiança. Referência no mercado de superesportivos e repasses automotivos selecionados com até 40% abaixo da FIPE.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia de Procedência & Laudo 100%</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#estoque" className="hover:text-white transition-colors">Estoque Completo</a></li>
              <li><a href="#curadoria" className="hover:text-white transition-colors">Curadoria & Neni</a></li>
              <li><a href="#grupos-vip" className="hover:text-white transition-colors">Grupos VIP WhatsApp</a></li>
              <li><a href="#estilos" className="hover:text-white transition-colors">Categorias de Veículos</a></li>
              <li><a href="#simulador" className="hover:text-white transition-colors">Simulador de Financiamento</a></li>
              <li><a href="#showroom" className="hover:text-white transition-colors">Showroom & Hubs</a></li>
              <li><a href="#troca" className="hover:text-white transition-colors">Avaliação de Usado na Troca</a></li>
            </ul>
          </div>

          {/* Col 3: Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">Unidades & Contato</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Balneário Camboriú (SC) • Caxias do Sul (RS)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Seg a Sex: 08h às 19h | Sáb: 09h às 16h</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>{COMMERCIAL_LINKS.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>{COMMERCIAL_LINKS.emailDisplay}</span>
              </div>
            </div>
          </div>

          {/* Col 4: VIP Concierge & Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">Atendimento VIP</h4>
            <p className="text-xs text-zinc-400 font-light">
              Fale diretamente com Marcos Paniz (o Neni) para consultas de estoque fechado ou avaliação de veículos.
            </p>
            <a
              href={COMMERCIAL_LINKS.comprarCarroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-colors font-display"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMMERCIAL_LINKS.instagramVelloce}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors text-xs font-semibold"
                aria-label="Instagram Velloce Imports"
              >
                IG
              </a>
              <a
                href={COMMERCIAL_LINKS.instagramNeni}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-400 hover:text-white transition-colors font-mono"
              >
                @omarcospaniz
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div>
            © {new Date().getFullYear()} Velloce AutoCar. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacidade & Sigilo</span>
            <span>Termos de Uso</span>
            <span>CNPJ & Procedência</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
