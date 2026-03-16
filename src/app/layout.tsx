import type { Metadata } from "next";
//@ts-ignore
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Toaster } from "@/components/ui/toaster";

// Configurazione base per risolvere gli URL relativi (toglie l'errore http://localhost:9002 nei log)
export const metadata: Metadata = {
  metadataBase: new URL('https://li-costruzionisrl.it'),
  title: {
    default: "Costruzioni e Ristrutturazioni Terracina, Roma e Latina | L.I-Costruzioni",
    template: "%s | L.I-Costruzioni" // Permette alle sottopagine di aggiungere il loro titolo
  },
  description:
    "L.I-Costruzioni: impresa edile specializzata in ristrutturazioni d'eccellenza e nuove costruzioni a Terracina, Roma e Latina. Qualità artigianale e preventivi gratuiti.",
  keywords: ["impresa edile Terracina", "ristrutturazioni Roma", "costruzioni Latina", "edilizia d'eccellenza", "ristrutturare casa Latina"],
  authors: [{ name: "L.I-Costruzioni SRL" }],
  
  // --- OPEN GRAPH (Facebook, WhatsApp, LinkedIn) ---
  openGraph: {
    title: "L.I-Costruzioni | Eccellenza nell'Edilizia",
    description: "Operativi a Terracina, Roma e Latina con progetti edili di alto livello. Trasformiamo le tue idee in realtà.",
    url: "https://li-costruzionisrl.it",
    siteName: "L.I-Costruzioni",
    images: [
      {
        url: "/og-image.jpg", // Assicurati di mettere questa immagine in /public
        width: 1200,
        height: 630,
        alt: "L.I-Costruzioni - Ristrutturazioni d'Eccellenza",
      },
    ],
    locale: "it_IT",
    type: "website",
  },

  // --- TWITTER CARD ---
  twitter: {
    card: "summary_large_image",
    title: "L.I-Costruzioni | Eccellenza nell'Edilizia",
    description: "Ristrutturazioni e costruzioni a Terracina, Roma e Latina.",
    images: ["/og-image.jpg"],
  },

  // --- ICONS ---
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png", // Nome standard per dispositivi Apple
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isManteinance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "L.I-Costruzioni SRL",
    "image": "https://li-costruzionisrl.it/og-image.jpg", 
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
    "url": "https://li-costruzionisrl.it",
    "telephone": "+393393274092", // Ho messo il cell di Alfredo, più realistico per un contatto diretto
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
{!isManteinance && <Navbar />}
        
        <main className="flex-grow">
          {children}
        </main>

        {!isManteinance && (
          <>
            <Footer />
            <Chatbot />
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}