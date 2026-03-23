
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

const validCities = [
  "terracina",
  "latina",
  "roma",
  "sabaudia",
  "san-felice-circeo",
];

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

export default async function LocalServicePage(props: {
  params: Promise<{ city: string }>;
}) {
  // 2. Unwrapping dei params tramite await
  const params = await props.params;
  const citySlug = params.city.toLowerCase();

  const city = formatCityName(citySlug);
  const specificContent = cityContent[citySlug] || cityContent["terracina"];

  return (
    <article className="min-h-screen bg-white">
      {/* Hero: Più bassa e bilanciata */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-950">
        <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-center" />
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <Badge className="bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-6 font-bold uppercase tracking-widest px-3 py-1 rounded-md">
            Edilizia Specializzata: {city}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[1.1]">
            Costruiamo il <span className="text-amber-500">Valore</span>{" "}
            <br className="hidden md:block" />
            del tuo immobile a {city}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-medium">
            {specificContent.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-amber-500 text-slate-950 hover:bg-white active:scale-95 font-bold h-14 px-8 rounded-xl transition-all border-none"
              asChild
            >
              <Link href="/contatti">
                Contatta l&apos;impresa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white hover:text-slate-950 active:scale-95 font-bold h-14 px-8 rounded-xl bg-transparent transition-all"
              asChild
            >
              <Link href="/progetti">I nostri lavori</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Metodo: Griglia più pulita */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
                Impresa edile a {city}
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Operiamo a {city} con maestranze interne qualificate, garantendo
                una gestione tecnica completa dalla progettazione alla consegna.
              </p>
              <div className="space-y-3">
                {[
                  `Specializzazione: ${specificContent.focus}`,
                  "Gestione pratiche CILA/SCIA",
                  "Direzione tecnica di cantiere",
                  "Garanzia post-opera",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100"
                  >
                    <CheckCircle2 className="text-amber-500 h-5 w-5 shrink-0" />
                    <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  t: "Sopralluogo",
                  d: `Analisi tecnica sul posto a ${city}.`,
                },
                {
                  icon: FileText,
                  t: "Trasparenza",
                  d: "Computo metrico dettagliato dei lavori.",
                },
                {
                  icon: Building2,
                  t: "Cantiere",
                  d: "Maestranze interne e pulizia costante.",
                },
                {
                  icon: Smartphone,
                  t: "Feedback",
                  d: "Report costanti sull'avanzamento lavori.",
                },
              ].map((card, i) => (
                <Card
                  key={i}
                  className="border border-slate-200 shadow-sm hover:border-amber-500/50 transition-all group"
                >
                  <CardHeader className="pb-2">
                    <card.icon className="h-8 w-8 text-slate-900 mb-2" />
                    <CardTitle className="text-lg font-black uppercase tracking-tight">
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

      {/* Sezione CTA: Sottile e professionale */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-4 tracking-tighter uppercase">
            Iniziamo il tuo progetto a {city}
          </h2>
          <p className="text-slate-600 font-medium mb-8 text-lg">
            Parla direttamente con i titolari per definire le necessità tecniche
            del tuo immobile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-slate-950 text-white hover:bg-amber-500 hover:text-slate-950 font-bold h-14 px-10 rounded-xl transition-all"
              asChild
            >
              <Link href="/contatti">Parla con Luca o Jessica</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-200 text-slate-600 hover:border-slate-950 hover:text-slate-950 font-bold h-14 px-10 rounded-xl bg-white transition-all"
              asChild
            >
              <Link href="/progetti">Vedi i nostri lavori</Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
