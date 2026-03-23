import type { Metadata } from "next";
//@ts-ignore
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Toaster } from "@/components/ui/toaster";

// SEO IMPECCABILE: Tutte le keyword strategiche inserite correttamente
export const metadata: Metadata = {
  metadataBase: new URL("https://www.li-costruzionisrl.it"),
  title: {
    default:
      "Impresa Edile e Costruzioni Terracina, Roma, Latina | L.I-Costruzioni",
    template: "%s | L.I-Costruzioni",
  },
  description:
    "L.I-Costruzioni è l'impresa di costruzioni leader a Terracina, Roma e Latina. Specializzati come ditta edile in ristrutturazioni d'eccellenza, nuove costruzioni e restauro conservativo. Qualità certificata.",
  keywords: [
    "impresa edile Terracina",
    "ditta edile Roma",
    "impresa di costruzioni Latina",
    "ditta di costruzioni Sabaudia",
    "ristrutturazioni San Felice Circeo",
    "ristrutturare casa Lazio",
    "costruzioni civili e industriali",
    "rifacimento facciate Roma",
    "edilizia d'eccellenza",
    "ristrutturazioni chiavi in mano",
  ],
  authors: [{ name: "L.I-Costruzioni SRL" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // In mancanza di un'icona specifica, usiamo questa
  },
  // --- OPEN GRAPH (Facebook, WhatsApp, LinkedIn) ---
  openGraph: {
    title: "L.I-Costruzioni | Eccellenza nell'Edilizia e Ristrutturazioni",
    description:
      "Operativi a Terracina, Roma e Latina con progetti edili di alto livello. Trasformiamo le tue idee in realtà.",
    url: "https://www.li-costruzionisrl.it",
    siteName: "L.I-Costruzioni",
    images: [
      {
        url: "/impresa-edile-costruzioni-lazio.jpg", // Nome file ottimizzato SEO
        width: 1200,
        height: 630,
        alt: "L.I-Costruzioni - Impresa Edile e Ditta di Costruzioni nel Lazio",
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
    images: ["/impresa-edile-costruzioni-lazio.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SCHEMA.ORG: Dati strutturati per Google Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    name: "L.I-Costruzioni SRL",
    image:
      "https://www.li-costruzionisrl.it/impresa-edile-costruzioni-lazio.jpg",
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
            name: "Impresa edile per ristrutturazioni d'interni",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ditta di costruzioni per nuove abitazioni",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ristrutturazioni chiavi in mano Roma e Latina",
          },
        },
      ],
    },
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
        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
