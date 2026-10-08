import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velloceautocar.com.br"),
  title: {
    default: "Velloce AutoCar — Oportunidades Reais de Mercado",
    template: "%s | Velloce AutoCar",
  },
  description:
    "Veículos seminovos e premium selecionados com rigor pericial. Preços abaixo da FIPE, laudo cautelar aprovado e transparência total. Balneário Camboriú • Caxias do Sul.",
  keywords: [
    "carros seminovos",
    "carros premium",
    "repasses automotivos",
    "veículos inspecionados",
    "Balneário Camboriú",
    "Caxias do Sul",
    "Velloce AutoCar",
  ],
  authors: [{ name: "Velloce AutoCar" }],
  creator: "Velloce AutoCar",
  publisher: "Velloce AutoCar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://velloceautocar.com.br",
    siteName: "Velloce AutoCar",
    title: "Velloce AutoCar — Oportunidades Reais de Mercado",
    description:
      "Veículos seminovos e premium selecionados com rigor pericial. Preços abaixo da FIPE, laudo cautelar aprovado.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velloce AutoCar - Mais que carros, entregamos confiança",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velloce AutoCar",
    description:
      "Veículos seminovos e premium com rigor pericial e preços abaixo da FIPE.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0B0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}