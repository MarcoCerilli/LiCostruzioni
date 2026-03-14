"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Building2, Home, Paintbrush, HardHat, ShieldCheck,
  Ruler, ArrowRight, CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const allServices = [
  { title: "Ristrutturazioni Chiavi in Mano", icon: Paintbrush, desc: "Trasformiamo il tuo spazio gestendo ogni fase: dalla progettazione alla consegna finale." },
  { title: "Costruzioni Civili e Residenziali", icon: Building2, desc: "Realizziamo abitazioni indipendenti con focus su efficienza energetica e design." },
  { title: "Consolidamento e Antisismica", icon: ShieldCheck, desc: "Interventi di rinforzo strutturale per garantire la massima sicurezza del tuo immobile." },
  { title: "Posa Materiali di Pregio", icon: Ruler, desc: "Maestria nella posa di grandi formati, marmi e resine per risultati impeccabili." },
  { title: "Impermeabilizzazioni Avanzate", icon: HardHat, desc: "Sistemi all'avanguardia per proteggere tetti e fondamenta da qualsiasi infiltrazione." },
  { title: "Global Service Condominiale", icon: Home, desc: "Gestione completa delle manutenzioni per stabili, garantendo decoro e funzionalità." },
];

export default function ServicesPage() {
  const serviceImg = PlaceHolderImages.find((img) => img.id === "service-renovation");

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Intestazione */}
        <div className="text-center mb-24">
          <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Competenza Tecnica</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">
            Soluzioni Edili ad <br />
            <span className="text-amber-500 italic">Alta Definizione</span>
          </h1>
        </div>

        {/* Grid Servizi (Grandi e Originali) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {allServices.map((s, i) => (
            <Card key={i} className="relative bg-white hover:shadow-2xl transition-all duration-500 border-none group rounded-[2.5rem] overflow-hidden p-4">
              <CardHeader className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:rotate-6 transition-all duration-300">
                  <s.icon className="h-8 w-8 text-amber-500 group-hover:text-slate-900 transition-colors" />
                </div>
                <CardTitle className="text-2xl font-black text-slate-900 mb-2 leading-tight">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</CardContent>
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <s.icon size={120} />
              </div>
            </Card>
          ))}
        </div>

        {/* Sezione: Il Nostro Metodo (Layout Timeline Nuovo) */}
        <div className="mb-32">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="mb-10">
                  <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">Standard d&apos;eccellenza</p>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                    Il Nostro <span className="text-amber-500">Protocollo</span> Operativo
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {[
                    { n: "01", t: "Analisi & Sopralluogo", d: "Valutazione tecnica immediata per costi certi." },
                    { n: "02", t: "Pianificazione", d: "Cronoprogramma dettagliato e rispetto dei tempi." },
                    { n: "03", t: "Cantiere & Qualità", d: "Utilizzo esclusivo di materiali top di gamma." },
                    { n: "04", t: "Certificazione", d: "Garanzia post-lavori e assistenza continua." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <span className="text-2xl font-black text-slate-700 group-hover:text-amber-500 transition-colors">{step.n}</span>
                      <div className="pt-1">
                        <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">{step.t}</h4>
                        <p className="text-slate-400 text-xs md:text-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden border-8 border-slate-800 shadow-2xl">
                   {serviceImg && <Image src={serviceImg.imageUrl} alt="Cantiere L.I-Costruzioni" fill className="object-cover" />}
                </div>
                <div className="absolute -bottom-6 -left-6 bg-amber-500 p-6 rounded-2xl hidden md:block">
                   <p className="text-slate-900 font-black text-3xl tracking-tighter">30y</p>
                   <p className="text-[10px] text-slate-900 font-bold uppercase tracking-widest">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Finale CTA (Pulito, Senza Giallo, Bottoni Grandi) */}
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Pronto a dare vita <br /> al tuo <span className="text-amber-500">Progetto?</span>
            </h3>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Contattaci oggi per un sopralluogo tecnico e un preventivo dettagliato.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 font-black px-12 h-20 rounded-2xl shadow-xl transition-all duration-300 text-xl group w-full sm:w-auto uppercase" asChild>
              <Link href="/contatti" className="flex items-center gap-3">
                Inizia ora
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-slate-200 text-slate-900 hover:bg-slate-50 font-bold h-20 px-12 rounded-2xl transition-all duration-300 text-xl w-full sm:w-auto uppercase" asChild>
              <Link href="/progetti">Vedi Lavori</Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-2 text-amber-600 font-bold uppercase text-xs tracking-widest">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        </div>

      </div>
    </div>
  );
}