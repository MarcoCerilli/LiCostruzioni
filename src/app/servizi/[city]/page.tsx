import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  MapPin,
  FileText,
  Smartphone,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

// Tipi per i parametri
type Props = {
  params: Promise<{ city: string }>;
};

// Configurazione contenuti città
const cityContent: Record<string, { desc: string; focus: string }> = {
  terracina: {
    desc: "Esperti in ristrutturazioni fronte mare e consolidamento edifici nel centro storico.",
    focus: "Manutenzioni Marine & Centro Storico",
  },
  roma: {
    desc: "Specializzati in ristrutturazioni di appartamenti di pregio e gestione cantieri in zone ZTL.",
    focus: "Ristrutturazioni Luxury & Condomini",
  },
  latina: {
    desc: "Punto di riferimento per nuove costruzioni residenziali e adeguamento energetico.",
    focus: "Efficienza Energetica & Nuove Cubature",
  },
  sabaudia: {
    desc: "Interventi su ville e architettura razionalista nel rispetto dei vincoli paesaggistici.",
    focus: "Ville d'Elite & Vincoli Ambientali",
  },
  "san-felice-circeo": {
    desc: "Eccellenza nella posa di materiali naturali e residenze estive di alto profilo.",
    focus: "Posa Materiali Pregiati & Design Estivo",
  },
};

const formatCityName = (slug: string) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = formatCityName(citySlug);

  return {
    title: `Impresa Edile a ${city} | Ristrutturazioni L.I-Costruzioni`,
    description: `Cerchi una ditta edile a ${city}? L.I-Costruzioni è specializzata in ristrutturazioni d'eccellenza e nuove costruzioni a ${city} e provincia. Qualità garantita.`,
    alternates: {
      canonical: `https://www.li-costruzionisrl.it/servizi/${citySlug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(cityContent).map((city) => ({
    city: city,
  }));
}

export default async function LocalServicePage({ params }: Props) {
  const { city: citySlug } = await params;
  
  // Fallback se la città non è in elenco
  const cityKey = cityContent[citySlug] ? citySlug : "terracina";
  const city = formatCityName(cityKey);
  const specificContent = cityContent[cityKey];

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 bg-slate-950 overflow-hidden">
        {/* Decorazione di sfondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <Badge className="bg-amber-500 text-slate-950 border-none mb-6 font-black uppercase tracking-[0.2em] px-4 py-1.5 text-[10px] rounded-full">
            📍 Edilizia Specializzata: {city}
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.95]">
            Costruiamo il <span className="text-amber-500 text-shadow-sm">Valore</span> <br className="hidden md:block" />
            del tuo immobile a {city}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium">
            {specificContent.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-amber-500 text-slate-950 hover:bg-white font-black h-14 px-10 rounded-2xl transition-all shadow-xl shadow-amber-500/10 uppercase text-xs tracking-widest" asChild>
              <Link href="/contatti">
                Inizia il Progetto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white hover:text-slate-950 font-black h-14 px-10 rounded-2xl transition-all uppercase text-xs tracking-widest bg-transparent" asChild>
              <Link href="/progetti">I nostri lavori</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Metodo */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Perché Sceglierci</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none">
                Impresa edile di <br /> riferimento a {city}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Operiamo a {city} con maestranze interne qualificate, garantendo
                una gestione tecnica completa dalla progettazione alla consegna finale chiavi in mano.
              </p>
              <div className="space-y-3">
                {[
                  `Specializzazione: ${specificContent.focus}`,
                  "Gestione pratiche CILA / SCIA / Genio Civile",
                  "Direzione tecnica costante di cantiere",
                  "Garanzia decennale post-opera",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-colors hover:border-amber-200">
                    <CheckCircle2 className="text-amber-500 h-5 w-5 shrink-0" />
                    <span className="font-bold text-slate-700 text-[11px] uppercase tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, t: "Sopralluogo", d: `Analisi tecnica e rilievo metrico gratuito a ${city}.` },
                { icon: FileText, t: "Trasparenza", d: "Computo metrico estimativo analitico senza sorprese." },
                { icon: Building2, t: "Cantiere", d: "Sviluppo lavori con personale diretto e pulizia costante." },
                { icon: Smartphone, t: "Feedback", d: "Chat dedicata e report fotografici settimanali." },
              ].map((card, i) => (
                <Card key={i} className="border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-500/30 transition-all duration-500 group rounded-[2rem] p-4">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-xl bg-slate-900 flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                      <card.icon className="h-6 w-6 text-amber-500 group-hover:text-slate-900" />
                    </div>
                    <CardTitle className="text-lg font-black uppercase tracking-tight text-slate-900">
                      {card.t}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-500 text-sm leading-relaxed">
                    {card.d}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
            Iniziamo il tuo progetto <br /> di valore a <span className="text-amber-500">{city}</span>
          </h2>
          <p className="text-slate-400 font-medium mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
            Parla direttamente con i titolari per definire le necessità tecniche 
            e architettoniche del tuo prossimo investimento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-amber-500 font-black h-16 px-12 rounded-2xl transition-all shadow-2xl uppercase text-xs tracking-widest" asChild>
              <Link href="/contatti">Parla con Luca o Jessica</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/10 text-white hover:border-white hover:bg-transparent font-black h-16 px-12 rounded-2xl transition-all uppercase text-xs tracking-widest" asChild>
              <Link href="/progetti">Guarda il Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}