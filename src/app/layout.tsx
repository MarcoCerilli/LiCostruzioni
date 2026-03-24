import type { Metadata, Viewport } from "next";
//@ts-ignore
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.li-costruzionisrl.it"),
  title: {
    default: "Impresa Edile Terracina, Roma, Latina | L.I-Costruzioni SRL",
    template: "%s | L.I-Costruzioni - Edilizia d'Eccellenza",
  },
  description:
    "L.I-Costruzioni SRL: Impresa edile leader a Terracina, Roma e Latina. Esperti in ristrutturazioni chiavi in mano, nuove costruzioni civili, rifacimento tetti e facciate. Qualità garantita e preventivi gratuiti.",
  keywords: [
    // Keywords Geografiche
    "impresa edile Terracina", "ditta edile Roma", "costruzioni Latina", 
    "ristrutturazioni San Felice Circeo", "edilizia Sabaudia", "cantieri Fondi",
    "general contractor Lazio", "ristrutturare casa Roma centro",
    
    // Keywords di Servizio
    "ristrutturazioni chiavi in mano", "nuove costruzioni residenziali", 
    "rifacimento facciate", "impermeabilizzazione tetti", "opere murarie",
    "consolidamento strutturale", "isolamento termico cappotto", 
    "posa pavimenti e rivestimenti", "impiantistica certificata",
    
    // Keywords Business/Specialistiche
    "ditta edile affidabile", "restauro conservativo", "edilizia ecosostenibile",
    "bioedilizia Lazio", "manutenzione condomini Latina", "smaltimento macerie",
    "scavi e demolizioni", "progettazione architettonica"
  ],
  authors: [{ name: "L.I-Costruzioni SRL" }],
  category: "Construction and Renovation",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png?v=2", sizes: "180x180" }],
  },
  openGraph: {
    title: "L.I-Costruzioni | Leader in Ristrutturazioni e Costruzioni nel Lazio",
    description: "Dal progetto alla consegna: ristrutturiamo la tua casa a Terracina, Roma e Latina con standard d'eccellenza.",
    url: "https://www.li-costruzionisrl.it",
    siteName: "L.I-Costruzioni SRL",
    images: [
      {
        url: "/impresa-edile-costruzioni-lazio.jpg",
        width: 1200,
        height: 630,
        alt: "L.I-Costruzioni - Impresa Edile e Ditta di Costruzioni Terracina Roma Latina",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L.I-Costruzioni | Edilizia e Ristrutturazioni Lazio",
    description: "L'impresa edile di riferimento per ristrutturazioni e nuove costruzioni a Terracina e provincia.",
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
    "name": "L.I-Costruzioni SRL",
    "image": "https://www.li-costruzionisrl.it/impresa-edile-costruzioni-lazio.jpg",
    "logo": "https://www.li-costruzionisrl.it/logo.png",
    "description": "Impresa edile specializzata in ristrutturazioni, costruzioni civili e industriali operante a Terracina, Latina e Roma.",
    "url": "https://www.li-costruzionisrl.it",
    "telephone": "+39 324 864 3886",
    "priceRange": "€€-€€€",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": [
      { "@type": "City", "name": "Terracina" },
      { "@type": "City", "name": "Roma" },
      { "@type": "City", "name": "Latina" },
      { "@type": "City", "name": "Sabaudia" },
      { "@type": "City", "name": "San Felice Circeo" },
      { "@type": "City", "name": "Fondi" },
      { "@type": "City", "name": "Aprilia" },
      { "@type": "City", "name": "Priverno" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi di Edilizia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ristrutturazione Appartamenti Chiavi in Mano",
            "description": "Gestione completa del cantiere, dalle demolizioni alle finiture di pregio."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Costruzione Case e Ville Unifamiliari",
            "description": "Edifici moderni ad alta efficienza energetica in classe A+."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rifacimento Tetti e Facciate",
            "description": "Interventi di manutenzione straordinaria e miglioramento termico."
          }
        }
      ]
    }
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