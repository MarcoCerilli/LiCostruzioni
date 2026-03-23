"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Building2,
  Home,
  Paintbrush,
  HardHat,
  ShieldCheck,
  Ruler,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const allServices = [
  {
    title: "Ristrutturazioni Chiavi in Mano",
    icon: Paintbrush,
    desc: "Trasformiamo il tuo spazio gestendo ogni fase: dalla progettazione alla consegna finale.",
  },
  {
    title: "Costruzioni Civili e Residenziali",
    icon: Building2,
    desc: "Realizziamo abitazioni indipendenti con focus su efficienza energetica e design.",
  },
  {
    title: "Consolidamento e Antisismica",
    icon: ShieldCheck,
    desc: "Interventi di rinforzo strutturale per garantire la massima sicurezza del tuo immobile.",
  },
  {
    title: "Posa Materiali di Pregio",
    icon: Ruler,
    desc: "Maestria nella posa di grandi formati, marmi e resine per risultati impeccabili.",
  },
  {
    title: "Impermeabilizzazioni Avanzate",
    icon: HardHat,
    desc: "Sistemi all'avanguardia per proteggere tetti e fondamenta da qualsiasi infiltrazione.",
  },
  {
    title: "Global Service Condominiale",
    icon: Home,
    desc: "Gestione completa delle manutenzioni per stabili, garantendo decoro e funzionalità.",
  },
];

export default function ServicesPage() {
  const serviceImg = PlaceHolderImages.find(
    (img) => img.id === "service-renovation",
  );

  const protocolloImg = PlaceHolderImages.find(
    (img) => img.id === "foto-protocollo-tecnica",
  );

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Intestazione - Ridimensionata */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Competenza Tecnica
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter leading-tight uppercase">
            Soluzioni Edili ad <br />
            <span className="text-amber-500">Alta Definizione</span>
          </h1>
        </div>

        {/* Grid Servizi - Più sobria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {allServices.map((s, i) => (
            <Card
              key={i}
              className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group rounded-3xl overflow-hidden p-2"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-slate-900 flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                  <s.icon className="h-6 w-6 text-amber-500 group-hover:text-slate-900" />
                </div>
                <CardTitle className="text-xl font-black text-slate-900 tracking-tight uppercase">
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-500 text-sm leading-relaxed">
                {s.desc}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sezione: Il Nostro Metodo - Compatta e Ordinata */}
        <div className="mb-24 px-4 md:px-0">
          <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
            <div className="grid lg:grid-cols-2">
              {/* Sinistra: Testo e Step */}
              <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center">
                <div className="mb-10">
                  <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">
                    Metodologia
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                    Il Nostro{" "}
                    <span className="text-amber-500 italic">Protocollo</span>
                  </h2>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      n: "01",
                      t: "Sopralluogo",
                      d: "Analisi tecnica dello stato dei luoghi.",
                    },
                    {
                      n: "02",
                      t: "Pianificazione",
                      d: "Cronoprogramma e gestione forniture.",
                    },
                    {
                      n: "03",
                      t: "Esecuzione",
                      d: "Cantiere gestito da maestranze interne.",
                    },
                    {
                      n: "04",
                      t: "Consegna",
                      d: "Certificazioni e collaudo finale.",
                    },
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <span className="text-sm font-black text-slate-700 group-hover:text-amber-500 transition-colors pt-1">
                        {step.n}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-bold text-white uppercase text-[11px] tracking-widest">
                          {step.t}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                          {step.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destra: Foto a filo */}
              <div className="relative min-h-[300px] lg:min-h-full bg-slate-800">
                {protocolloImg?.imageUrl && (
                  <Image
                    src={protocolloImg.imageUrl}
                    alt="Protocollo L.I-Costruzioni"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                )}
                {/* Overlay decorativo - Mantenuto per leggibilità testo */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Banner Finale CTA - Sobrio h-14 */}
        <div className="text-center space-y-8 py-12 border-t border-slate-100">
          <div className="space-y-3 px-4">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Hai un <span className="text-amber-500">Progetto</span> in mente?
            </h3>
            <p className="text-slate-500 text-base md:text-lg font-medium max-w-xl mx-auto">
              Contattaci per una consulenza tecnica e trasforma le tue idee in
              realtà.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 font-bold h-14 px-10 rounded-xl transition-all uppercase text-sm border-none"
              asChild
            >
              <Link href="/contatti" className="flex items-center gap-2">
                Parla con noi <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 font-bold h-14 px-10 rounded-xl transition-all uppercase text-sm bg-white"
              asChild
            >
              <Link href="/progetti">Vedi i lavori</Link>
            </Button>
          </div>

          <div className="flex justify-center items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[9px] tracking-widest">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
              Consulenza Tecnica
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[9px] tracking-widest">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
              Sopralluoghi Professionali
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
