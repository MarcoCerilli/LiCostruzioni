import type { Metadata } from "next";
//@ts-ignore
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Costruzioni e Ristrutturazioni Terracina, Roma e Latina | L.I-Costruzioni",
  description:
    "L.I-Costruzioni: impresa edile specializzata in ristrutturazioni d'eccellenza e nuove costruzioni a Terracina, Roma e Latina. Qualità artigianale e preventivi gratuiti.",
  keywords: ["impresa edile Terracina", "ristrutturazioni Roma", "costruzioni Latina", "edilizia d'eccellenza", "ristrutturare casa Latina"],
  authors: [{ name: "L.I-Costruzioni SRL" }],
  openGraph: {
    title: "L.I-Costruzioni | Eccellenza nell'Edilizia",
    description: "Operativi a Terracina, Roma e Latina con progetti edili di alto livello.",
    url: "https://L.I-Costruzionisrl.it",
    siteName: "L.I-Costruzioni",
    images: [
      {
        url: "/og-image.jpg", // Crea un'immagine 1200x630 con il logo e un cantiere bello
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
    "name": "L.I-Costruzioni SRL",
    "image": "https://L.I-Costruzionisrl.it/logo-seo.jpg", // Molto importante per Google Maps/Search
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Appia Antica 22",
      "addressLocality": "Terracina",
      "addressRegion": "LT",
      "postalCode": "04019",
      "addressCountry": "IT",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.2858",
      "longitude": "13.2486",
    },
    "url": "https://L.I-Costruzionisrl.it",
    "telephone": "+390773000000",
    "openingHours": "Mo-Fr 08:00-18:00",
    "areaServed": [
      { "@type": "City", "name": "Terracina" },
      { "@type": "City", "name": "Roma" },
      { "@type": "City", "name": "Latina" },
      { "@type": "City", "name": "Sabaudia" },
      { "@type": "City", "name": "San Felice Circeo" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Edili",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ristrutturazioni d'interni" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nuove Costruzioni" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consulenza Tecnica" } }
      ]
    }
  };

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
{/*         <Navbar /> */}
        <main className="flex-grow">{children}</main>
     {/*    <Footer /> *}/
        <Chatbot />
        <Toaster /> */}
      </body>
    </html>
  );
}