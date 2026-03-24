import type { Metadata, Viewport } from "next";
//@ts-ignore
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Nuova gestione Viewport per Next.js moderno
export const viewport: Viewport = {
  themeColor: "#0f172a", // Colore slate-900 per la barra browser su mobile
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.li-costruzionisrl.it"),
  title: {
    default: "Impresa Edile e Costruzioni Terracina, Roma, Latina | L.I-Costruzioni",
    template: "%s | L.I-Costruzioni",
  },
  description:
    "L.I-Costruzioni è l'impresa di costruzioni leader a Terracina, Roma e Latina. Specializzati in ristrutturazioni d'eccellenza, nuove costruzioni e restauro conservativo.",
  keywords: [
    "impresa edile Terracina",
    "ditta edile Roma",
    "impresa di costruzioni Latina",
    "ristrutturazioni San Felice Circeo",
    "ristrutturazioni chiavi in mano",
    "edilizia d'eccellenza",
  ],
  authors: [{ name: "L.I-Costruzioni SRL" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "L.I-Costruzioni | Eccellenza nell'Edilizia e Ristrutturazioni",
    description: "Operativi nel Lazio con progetti edili di alto livello. Trasformiamo le tue idee in realtà.",
    url: "https://www.li-costruzionisrl.it",
    siteName: "L.I-Costruzioni",
    images: [
      {
        url: "/impresa-edile-costruzioni-lazio.jpg",
        width: 1200,
        height: 630,
        alt: "L.I-Costruzioni - Impresa Edile e Ditta di Costruzioni nel Lazio",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L.I-Costruzioni | Eccellenza nell'Edilizia",
    description: "Ristrutturazioni e costruzioni a Terracina, Roma e Latina.",
    images: ["/impresa-edile-costruzioni-lazio.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    name: "L.I-Costruzioni SRL",
    image: "https://www.li-costruzionisrl.it/impresa-edile-costruzioni-lazio.jpg",
    logo: "https://www.li-costruzionisrl.it/logo.png", // Assicurati di avere il logo in public
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Appia Antica 22",
      addressLocality: "Terracina",
      addressRegion: "LT",
      postalCode: "04019",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.2858",
      longitude: "13.2486",
    },
    url: "https://www.li-costruzionisrl.it",
    telephone: "+39 324 864 3886",
    priceRange: "€€€", // Importante per la validazione Schema
    openingHours: "Mo-Fr 08:00-18:00",
    areaServed: [
      { "@type": "City", name: "Terracina" },
      { "@type": "City", name: "Roma" },
      { "@type": "City", name: "Latina" },
      { "@type": "City", name: "Sabaudia" },
      { "@type": "City", name: "San Felice Circeo" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi Edili",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ristrutturazioni d'interni d'eccellenza",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Costruzioni di nuove ville e complessi residenziali",
          },
        },
      ],
    },
  };

  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main className="flex-grow">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}