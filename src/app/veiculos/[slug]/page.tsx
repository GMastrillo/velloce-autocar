import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Gauge, 
  Fuel, 
  Settings, 
  MapPin, 
  Phone
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { getVehicleBySlug } from "@/data/vehicles";
import { 
  formatCurrency, 
  formatNumber, 
  getFuelTypeLabel, 
  getTransmissionLabel, 
  getWhatsAppUrl 
} from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return { title: "Veículo não encontrado | Velloce AutoCar" };
  }

  return {
    title: `${vehicle.title} — Velloce AutoCar`,
    description: `${vehicle.title} (${vehicle.yearModel}) por ${formatCurrency(vehicle.price)}. Laudo cautelar 100% aprovado, ${formatNumber(vehicle.mileage)} km. Balneário Camboriú • Caxias do Sul.`,
    openGraph: {
      title: `${vehicle.title} | Velloce AutoCar`,
      description: `Oportunidade real de mercado: ${formatCurrency(vehicle.price)} com laudo pericial aprovado.`,
      images: vehicle.images[0] ? [{ url: vehicle.images[0] }] : [],
    },
  };
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const fipeDiff = vehicle.fipePrice ? Number(vehicle.fipePrice) - Number(vehicle.price) : 0;
  const whatsappMsg = `Olá, estou no site da Velloce e tenho interesse no *${vehicle.title}* (${vehicle.year}/${vehicle.yearModel}) anunciado por *${formatCurrency(vehicle.price)}*. Gostaria de ver o laudo cautelar e negociar.`;
  const directWhatsAppUrl = getWhatsAppUrl("5554996827149", whatsappMsg);

  return (
    <MainLayout>
      <div className="bg-bg-primary py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Breadcrumb & Voltar */}
          <div className="mb-6">
            <Link
              href="/veiculos"
              className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-text-primary transition-smooth"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Voltar para todo o estoque</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Coluna Esquerda: Galeria & Detalhes */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Galeria de Fotos */}
              <div className="space-y-4">
                <div className="relative h-64 sm:h-[450px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-bg-surface border border-border-subtle shadow-card">
                  <Image
                    src={vehicle.images[0]}
                    alt={vehicle.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                  {vehicle.isFeatured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="gold" size="lg">Destaque Exclusivo</Badge>
                    </div>
                  )}
                </div>

                {vehicle.images.length > 1 && (
                  <div className="flex sm:grid sm:grid-cols-3 gap-2.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-1 touch-pan-y">
                    {vehicle.images.slice(1).map((img, i) => (
                      <div key={i} className="relative w-36 sm:w-auto shrink-0 snap-start h-24 sm:h-28 rounded-xl overflow-hidden bg-bg-surface border border-border-subtle">
                        <Image
                          src={img}
                          alt={`${vehicle.title} - Vista ${i + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-smooth"
                          sizes="260px"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Informações Principais */}
              <div className="p-5 sm:p-8 rounded-2xl bg-bg-surface border border-border-subtle space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge category={vehicle.category} size="md" />
                    <span className="font-mono text-xs text-text-secondary">
                      {vehicle.location}
                    </span>
                  </div>
                  <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-text-primary">
                    {vehicle.title}
                  </h1>

                  {/* Resumo de Preço & CTA Rápido no Mobile (Acima da Dobra) */}
                  <div className="lg:hidden mt-4 p-4 rounded-2xl bg-bg-card border border-border-subtle space-y-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-accent-gold block">
                          Valor Velloce
                        </span>
                        <span className="font-mono font-extrabold text-2xl text-text-primary tabular-nums">
                          {formatCurrency(vehicle.price)}
                        </span>
                      </div>
                      {vehicle.fipePrice && (
                        <div className="text-right">
                          <span className="text-[11px] font-mono text-text-muted line-through block tabular-nums">
                            FIPE: {formatCurrency(vehicle.fipePrice)}
                          </span>
                          {fipeDiff > 0 && (
                            <span className="text-xs font-mono font-bold text-tricolore-green tabular-nums">
                              -{formatCurrency(fipeDiff)}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full justify-center text-black font-bold"
                      >
                        <Phone className="w-4 h-4 mr-1.5" />
                        <span>Negociar Agora no WhatsApp</span>
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Especificações em Grid Rápido */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-bg-card border border-border-subtle">
                  <div className="space-y-1">
                    <span className="text-xs text-text-muted flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-text-secondary" /> Ano / Modelo
                    </span>
                    <p className="font-mono font-bold text-text-primary">
                      {vehicle.year} / {vehicle.yearModel}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-text-muted flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-text-secondary" /> Quilometragem
                    </span>
                    <p className="font-mono font-bold text-text-primary">
                      {formatNumber(vehicle.mileage)} km
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-text-muted flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-text-secondary" /> Câmbio
                    </span>
                    <p className="font-mono font-bold text-text-primary">
                      {getTransmissionLabel(vehicle.transmission)}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-text-muted flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5 text-text-secondary" /> Combustível
                    </span>
                    <p className="font-mono font-bold text-text-primary">
                      {getFuelTypeLabel(vehicle.fuelType)}
                    </p>
                  </div>
                </div>

                {/* Descrição & Histórico */}
                {vehicle.description && (
                  <div className="space-y-2 pt-2 border-t border-border-subtle">
                    <h2 className="font-display font-bold text-lg text-text-primary">
                      Descrição & Detalhes do Veículo
                    </h2>
                    <p className="text-text-secondary text-base leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>
                )}

                {/* Opcionais e Equipamentos */}
                {vehicle.features && vehicle.features.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-border-subtle">
                    <h2 className="font-display font-bold text-lg text-text-primary">
                      Destaques & Equipamentos
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {vehicle.features.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-tricolore-green flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Box de Rigor Pericial & Cautelar */}
                <div className="p-4 sm:p-5 rounded-xl bg-bg-card border border-tricolore-green/30 flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-tricolore-green/15 text-tricolore-green flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base text-text-primary">
                      Laudo Cautelar 100% Aprovado
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Este veículo passou por rigorosa checagem estrutural, análise micrométrica de espessura de pintura, conferência documental e teste de rodagem. Solicite o laudo completo em PDF pelo WhatsApp.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Coluna Direita: Preço, WhatsApp e Formulário */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Card de Preço & Ação Rápida */}
              <div className="p-5 sm:p-8 rounded-2xl bg-bg-surface border border-border-subtle shadow-card space-y-6 sticky top-28">
                
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">
                    Valor de Venda Velloce
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-text-primary tracking-tight">
                      {formatCurrency(vehicle.price)}
                    </span>
                  </div>

                  {vehicle.fipePrice && (
                    <div className="mt-3 p-3 rounded-lg bg-bg-card border border-border-subtle space-y-1">
                      <div className="flex justify-between text-xs font-mono text-text-muted">
                        <span>Referência FIPE:</span>
                        <span className="line-through">{formatCurrency(vehicle.fipePrice)}</span>
                      </div>
                      {fipeDiff > 0 && (
                        <div className="flex justify-between text-xs font-mono font-bold text-tricolore-green">
                          <span>Economia Real:</span>
                          <span>{formatCurrency(fipeDiff)} abaixo</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Botão de WhatsApp Imediato */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full justify-center text-base py-4 bg-tricolore-green hover:bg-emerald-600 border-none group shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <span>Negociar no WhatsApp</span>
                  </Button>
                </a>

                {/* Formulário de Lead / Proposta */}
                <div className="pt-4 border-t border-border-subtle">
                  <LeadForm
                    vehicle={vehicle}
                    title="Enviar Proposta por E-mail"
                    subtitle="Envie seus dados e entraremos em contato."
                  />
                </div>

                {/* Informações de Localização */}
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-gold" />
                    <span>{vehicle.location}</span>
                  </div>
                  <span>Código: {vehicle.id}</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </MainLayout>
  );
}
