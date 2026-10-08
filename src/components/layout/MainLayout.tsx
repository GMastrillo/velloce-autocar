"use client";

import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { IntroCinematic } from "@/components/ui/IntroCinematic";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <IntroCinematic />
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}