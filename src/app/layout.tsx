import type { Metadata } from 'next';
// @ts-ignore
import "@/app/globals.css";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'LI-Costruzioni | Eccellenza nell\'Edilizia a Terracina, Roma e Latina',
  description: 'Impresa edile specializzata in costruzioni e ristrutturazioni d\'eccellenza. Operativi a Terracina, Roma, Latina e dintorni.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "LI-COSTRUZIONI SRL",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Appia Antica 22",
      "addressLocality": "Terracina",
      "addressRegion": "LT",
      "postalCode": "04019",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.2858",
      "longitude": "13.2486"
    },
    "url": "https://li-costruzioni.it",
    "telephone": "+390773000000",
    "areaServed": ["Terracina", "Latina", "Roma", "Sabaudia", "San Felice Circeo"],
    "priceRange": "$$$"
  };

  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
