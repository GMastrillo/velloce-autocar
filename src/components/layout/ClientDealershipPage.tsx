"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Porsche360Hero from "@/components/sections/Porsche360Hero";
import HeroSection from "@/components/sections/HeroSection";
import CuradoriaMarcosPaniz from "@/components/sections/CuradoriaMarcosPaniz";
import RepasseEngineering from "@/components/sections/RepasseEngineering";
import VipGroupsSection from "@/components/sections/VipGroupsSection";
import StyleSelector from "@/components/sections/StyleSelector";
import FeaturedCars from "@/components/sections/FeaturedCars";
import FinanceSimulator from "@/components/sections/FinanceSimulator";
import ShowroomTour from "@/components/sections/ShowroomTour";
import SocialProof from "@/components/sections/SocialProof";
import InventorySection from "@/components/sections/InventorySection";
import TradeInSection from "@/components/sections/TradeInSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";
import CarDetailModal from "@/components/sections/CarDetailModal";
import { ConciergeVehicle } from "@/data/concierge-vehicles";

export default function ClientDealershipPage() {
  const [selectedCar, setSelectedCar] = useState<ConciergeVehicle | null>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-red-600 selection:text-white relative">
      <Navbar show={isVideoEnded} />

      <main>
        {/* 1. Premier Hero: Native Video with sound calibration and smooth auto-reveal */}
        <Porsche360Hero onVideoEnded={() => setIsVideoEnded(true)} />

        {/* 2. Interactive Model Switcher (GT3 RS, Cayenne Turbo GT, Taycan Turbo S) */}
        <HeroSection />

        {/* 3. Curadoria Assinada Marcos Paniz (o Neni) & Comprar/Vender */}
        <CuradoriaMarcosPaniz />

        {/* 4. Engenharia de Liquidez (Como garantimos até 40% abaixo da FIPE com laudo 100%) */}
        <RepasseEngineering />

        {/* 5. Grupos VIP Silenciosos no WhatsApp (Linha Leve, Premium, Motos, Pesada, Náutica, Aviação) */}
        <VipGroupsSection />

        {/* 6. Style Selector ("Encontre pelo seu estilo") */}
        <StyleSelector />

        {/* 7. Featured Cars ("Destaques da semana") */}
        <FeaturedCars onSelectCar={(car) => setSelectedCar(car)} />

        {/* 8. Finance Simulator ("Faça as contas antes de decidir") */}
        <FinanceSimulator />

        {/* 9. Showroom Experience ("A loja por dentro") */}
        <ShowroomTour />

        {/* 10. Social Proof ("Quem compra, faz parte da nossa história") */}
        <SocialProof />

        {/* 11. Full Inventory with Dynamic Filters ("Um estoque, várias rotas") */}
        <InventorySection onSelectCar={(car) => setSelectedCar(car)} />

        {/* 12. Trade-In Evaluation ("Tem um carro para dar na troca?") */}
        <TradeInSection />

        {/* 13. FAQ ("Respondemos suas dúvidas") */}
        <FAQSection />
      </main>

      <Footer />

      {/* Car Detail Modal ("Cada número, verificado") */}
      <CarDetailModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
}
