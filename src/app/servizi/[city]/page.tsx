import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, MapPin, HardHat, FileText, Smartphone, Badge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Gestione corretta dei validCities per Next.js 14/15
const validCities = ['terracina', 'latina', 'roma', 'sabaudia', 'san-felice-circeo'];

type Props = {
  params: { city: string };
};

// Funzione helper per formattare il nome della città
const formatCityName = (slug: string) => 
  slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = formatCityName(params.city);
  return {
    title: `Impresa Edile a ${city} | Ristrutturazioni e Costruzioni | L.I-Costruzioni`,
    description: `Stai cercando un'impresa edile a ${city}? L.I-Costruzioni SRL è specializzata in ristrutturazioni chiavi in mano, nuove costruzioni e manutenzioni a ${city}. Richiedi un sopralluogo gratuito.`,
    alternates: {
      canonical: `https://www.L.I-Costruzionisrl.it/servizi/${params.city}`,
    }
  };
}

export default function LocalServicePage({ params }: Props) {
  if (!validCities.includes(params.city.toLowerCase())) {
    notFound();
  }

  const city = formatCityName(params.city);

  // Dati strutturati per la Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": `L.I-Costruzioni SRL - ${city}`,
    "description": `Servizi edili professionali a ${city}. Ristrutturazioni e nuove costruzioni.`,
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Terracina", // Sede centrale
      "addressRegion": "LT",
      "addressCountry": "IT"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Sezione Hero Locale */}
      <section className="relative pt-40 pb-24 px-6 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/bg-pattern.png')] bg-center" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-amber-500 text-slate-900 mb-6 font-black uppercase tracking-widest">Operativi a {city}</Badge>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              La tua Casa a <span className="text-amber-500">{city}</span>, Costruita per Durare.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Dalla ristrutturazione di appartamenti storici alle nuove costruzioni moderne, portiamo l&apos;eccellenza di L.I-Costruzioni direttamente nel cuore di {city}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-500 text-slate-900 font-black h-14 px-8 rounded-xl" asChild>
                <Link href="/contatti">Preventivo Gratuito {city}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-xl" asChild>
                <Link href="/progetti">Vedi Lavori a {city}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Valore Locale */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">
                Esperti nell&apos;Edilizia Locale a {city}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Ogni zona ha le sue peculiarità. Che si tratti dei vincoli architettonici di <strong>Roma</strong>, delle sfide climatiche costiere di <strong>Terracina e Sabaudia</strong>, o dell&apos;urbanistica di <strong>Latina</strong>, L.I-Costruzioni ha l&apos;esperienza per gestire ogni cantiere con precisione chirurgica.
              </p>
              <ul className="space-y-4">
                {[
                  "Conoscenza dei piani regolatori locali",
                  "Sopralluoghi tecnici in 24/48 ore",
                  "Sostegno nelle pratiche comunali (CILA, SCIA)",
                  "Maestranze qualificate residenti in zona"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-800 uppercase text-xs tracking-wide">
                    <CheckCircle2 className="text-amber-500 h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, t: "Presenza Radicata", d: "Siamo presenti quotidianamente sui cantieri di tutta la provincia." },
                { icon: FileText, t: "Burocrazia Zero", d: `Gestiamo noi i permessi presso il Comune di ${city}.` },
                { icon: HardHat, t: "Sicurezza", d: "Cantiere pulito, sicuro e rispetto totale delle normative vigenti." },
                { icon: Smartphone, t: "Sempre Connessi", d: "Report fotografici settimanali sull'avanzamento dei lavori." }
              ].map((card, i) => (
                <Card key={i} className="border-none bg-slate-50 shadow-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <card.icon className="h-6 w-6 text-amber-600 mb-2" />
                    <CardTitle className="text-lg font-black tracking-tight">{card.t}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-500 italic">
                    {card.d}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Finale Localizzata */}
          <div className="bg-amber-500 rounded-[3rem] p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-black text-slate-900 mb-6">Cerchi un&apos;Impresa di fiducia a {city}?</h3>
            <p className="text-slate-900/70 font-bold mb-8 max-w-xl mx-auto">
              Non affidarti al caso. Scegli la maestria di chi costruisce il futuro del territorio da oltre 30 anni.
            </p>
            <Button size="lg" className="bg-slate-900 text-white hover:bg-white hover:text-slate-900 font-black px-12 h-16 rounded-2xl transition-all" asChild>
              <Link href="/contatti">Parla con Luca o Jessica</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// Funzione necessaria per il caricamento statico (opzionale ma consigliato)
export async function generateStaticParams() {
  return validCities.map((city) => ({
    city: city,
  }));
}