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
  Droplets, // Icona per l'umidità
  Award,    // Icona per SOA
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    title: "Risanamento Umidità di Risalita",
    icon: Droplets,
    desc: "Specialisti in barriere chimiche e deumidificazione definitiva per muri sani e salubri.",
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
    title: "Global Service Condominiale",
    icon: Home,
    desc: "Gestione completa delle manutenzioni per stabili, garantendo decoro e funzionalità.",
  },
];

export default function ServicesPage() {
  const protocolloImg = PlaceHolderImages.find(
    (img) => img.id === "foto-protocollo-tecnica",
  );

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Intestazione */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Competenza Tecnica e Certificata
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter leading-tight uppercase">
            Soluzioni Edili ad <br />
            <span className="text-amber-500">Alta Definizione</span>
          </h1>
        </div>

        {/* Grid Servizi */}
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

       {/* FOCUS TECNICO: Umidità di Risalita (FAQ) */}
<div className="mb-24 grid lg:grid-cols-2 gap-16 items-center bg-white p-8 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-soft">
  <div>
    {/* Badge coerente con lo stile "Competenza Tecnica" */}
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-[10px] font-black uppercase tracking-wider mb-6">
      <Droplets size={12} className="text-amber-500" /> Specializzazione Tecnica
    </div>
    
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6">
      Problemi di <span className="text-amber-500">Umidità?</span>
    </h2>
    
    <p className="text-slate-600 mb-8 leading-relaxed text-lg">
      L'umidità capillare non è solo un problema estetico, ma strutturale e di salute. Utilizziamo protocolli scientifici per risanare i tuoi ambienti in modo definitivo.
    </p>
    
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-slate-100">
        <AccordionTrigger className="font-bold uppercase text-xs tracking-widest text-slate-700 hover:text-amber-500 transition-colors py-4">
          Cos'è l'umidità di risalita?
        </AccordionTrigger>
        <AccordionContent className="text-slate-500 leading-relaxed pb-4">
          È un fenomeno fisico (capillarità) dove l'acqua del terreno risale attraverso i pori dei materiali da costruzione non isolati, trasportando sali che degradano intonaci e finiture.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2" className="border-slate-100">
        <AccordionTrigger className="font-bold uppercase text-xs tracking-widest text-slate-700 hover:text-amber-500 transition-colors py-4">
          Qual è la soluzione definitiva?
        </AccordionTrigger>
        <AccordionContent className="text-slate-500 leading-relaxed pb-4">
          Interveniamo creando una <strong>barriera chimica idrofobizzante</strong> alla base del muro o utilizzando intonaci deumidificanti macroporosi che permettono alla parete di respirare, espellendo l'umidità accumulata.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
    {/* CTA Interna opzionale */}
    <div className="mt-8">
        <Link href="/contatti" className="text-amber-600 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
            Richiedi Analisi Igrometrica <ArrowRight size={14} />
        </Link>
    </div>
  </div>

  {/* Immagine con Border Radius coerente (radius: 1rem in CSS, qui arrotondato a 2rem per design) */}
  <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-50">
     <Image 
        src="/progetti/cantiere-roma-2.webp" // Suggerisco una foto tecnica (es. impianti o muratura)
        alt="Diagnostica umidità di risalita L.I-Costruzioni" 
        fill 
        className="object-cover transition-transform duration-700 hover:scale-105"
     />
     {/* Overlay per profondità */}
     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
  </div>
</div>

        {/* Metodo & SOA */}
        <div className="mb-24">
          <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
            <div className="grid lg:grid-cols-[45%_55%] items-stretch">
              <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center">
                <div className="mb-10">
                  <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">
                    Protocollo Certificato
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                    Solidi per <br /> <span className="text-amber-500">Grandi Opere</span>
                  </h2>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-10">
                    <div className="h-12 w-12 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
                        <Award className="text-slate-900 h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-black text-sm uppercase">Attestazione SOA</h4>
                        <p className="text-slate-400 text-xs">Abilitati all'esecuzione di lavori pubblici e grandi commesse residenziali.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { n: "01", t: "Sopralluogo", d: "Analisi tecnica dello stato dei luoghi." },
                    { n: "02", t: "Pianificazione", d: "Cronoprogramma e gestione forniture." },
                    { n: "03", t: "Esecuzione", d: "Cantiere gestito da maestranze interne." },
                    { n: "04", t: "Consegna", d: "Certificazioni e collaudo finale." },
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <span className="text-sm font-black text-slate-700 group-hover:text-amber-500 transition-colors pt-1">
                        {step.n}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-bold text-white uppercase text-[11px] tracking-widest">
                          {step.t}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                          {step.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[400px] lg:min-h-full bg-slate-800 overflow-hidden">
                {protocolloImg?.imageUrl && (
                  <Image
                    src={protocolloImg.imageUrl}
                    alt="Protocollo L.I-Costruzioni"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105 opacity-80"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-950/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Banner Finale CTA */}
        <div className="text-center space-y-8 py-12 border-t border-slate-100">
          <div className="space-y-3 px-4">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Hai un <span className="text-amber-500">Progetto</span> in mente?
            </h3>
            <p className="text-slate-500 text-base md:text-lg font-medium max-w-xl mx-auto">
              Siamo operativi a Terracina, Roma e Latina per sopralluoghi tecnici gratuiti.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 font-bold h-14 px-10 rounded-xl transition-all uppercase text-sm"
              asChild
            >
              <Link href="/contatti" className="flex items-center gap-2">
                Inizia il Sopralluogo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 font-bold h-14 px-10 rounded-xl transition-all uppercase text-sm bg-white"
              asChild
            >
              <Link href="/progetti">Guarda i Cantieri</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}