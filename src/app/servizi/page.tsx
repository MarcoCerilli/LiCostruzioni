"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Building2, Home, Paintbrush, HardHat, ShieldCheck, Ruler, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const allServices = [
  { 
    title: "Ristrutturazioni Chiavi in Mano", 
    icon: Paintbrush, 
    desc: "Trasformiamo il tuo spazio gestendo ogni fase: dalla progettazione architettonica alla scelta dei materiali, fino alla consegna finale senza pensieri." 
  },
  { 
    title: "Costruzioni Civili e Residenziali", 
    icon: Building2, 
    desc: "Realizziamo abitazioni indipendenti e complessi residenziali con focus su efficienza energetica, domotica e design contemporaneo." 
  },
  { 
    title: "Consolidamento e Antisismica", 
    icon: ShieldCheck, 
    desc: "Interventi specialistici di rinforzo strutturale e adeguamento sismico per garantire la massima sicurezza e longevità del tuo immobile." 
  },
  { 
    title: "Posa Materiali di Pregio", 
    icon: Ruler, 
    desc: "Maestria nella posa di grandi formati, marmi e resine. Curiamo le finiture come fossero opere d'arte per risultati estetici impeccabili." 
  },
  { 
    title: "Impermeabilizzazioni Avanzate", 
    icon: HardHat, 
    desc: "Sistemi multistrato e tecnologie all'avanguardia per proteggere terrazzi, tetti e fondamenta da qualsiasi infiltrazione d'acqua." 
  },
  { 
    title: "Global Service Condominiale", 
    icon: Home, 
    desc: "Gestione completa delle manutenzioni ordinarie e straordinarie per stabili, garantendo decoro architettonico e funzionalità costante." 
  }
];

export default function ServicesPage() {
  const serviceImg = PlaceHolderImages.find(img => img.id === 'service-renovation');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Intestazione Strategica */}
        <div className="text-center mb-24">
          <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Competenza Tecnica</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">
            Soluzioni Edili ad <br /><span className="text-amber-500 italic">Alta Definizione</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Dall&apos;intervento di precisione alla grande opera architettonica, mettiamo in campo trent&apos;anni di esperienza artigiana e le ultime innovazioni tecnologiche.
          </p>
        </div>

        {/* Grid Servizi con Card Elevate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {allServices.map((s, i) => (
            <Card key={i} className="relative bg-white hover:shadow-2xl transition-all duration-500 border-none group rounded-[2.5rem] overflow-hidden p-4">
              <CardHeader className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:rotate-6 transition-all duration-300">
                  <s.icon className="h-8 w-8 text-amber-500 group-hover:text-slate-900 transition-colors" />
                </div>
                <CardTitle className="text-2xl font-black text-slate-900 mb-2 leading-tight">
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-slate-500 text-sm leading-relaxed mb-6">
                {s.desc}
              </CardContent>
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <s.icon size={120} />
              </div>
            </Card>
          ))}
        </div>

        {/* Sezione: Il Nostro Metodo (Fondamentale per la Fiducia) */}
        <div className="mb-32">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 -skew-x-12 translate-x-20" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter">Il Metodo <span className="text-amber-500 uppercase">LI-COSTRUZIONI</span></h2>
                <div className="space-y-6">
                  {[
                    { t: "Analisi Preliminare", d: "Sopralluogo tecnico gratuito per valutare fattibilità e costi reali." },
                    { t: "Pianificazione Cantiere", d: "Cronoprogramma dettagliato per rispettare rigorosamente i tempi di consegna." },
                    { t: "Esecuzione Certificata", d: "Utilizzo esclusivo di materiali dei migliori brand (Mapei, Kerakoll, Fischer)." },
                    { t: "Garanzia Post-Lavori", d: "Assistenza continua anche dopo la chiusura del cantiere." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-500 uppercase text-xs tracking-widest">{step.t}</h4>
                        <p className="text-slate-400 text-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border-8 border-slate-800 shadow-2xl">
                {serviceImg && (
                  <Image
                    src={serviceImg.imageUrl}
                    alt="Processo di lavoro certificato"
                    fill
                    className="object-cover brightness-75 group-hover:brightness-100 transition-all"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-amber-500/90 backdrop-blur p-6 rounded-2xl text-slate-900 text-center">
                      <p className="text-4xl font-black tracking-tighter">30y</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest">Esperienza</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Finale di Conversione */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight italic">
            &quot;La qualità non è mai casuale; è sempre il risultato di uno sforzo intelligente.&quot;
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-amber-500 text-slate-900 hover:bg-slate-900 hover:text-white font-black px-10 h-16 rounded-2xl shadow-xl transition-all" asChild>
              <Link href="/contatti" className="flex items-center gap-2">
                Inizia ora il tuo progetto
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-slate-200 font-bold h-16 px-10 rounded-2xl hover:bg-white transition-all" asChild>
              <Link href="/progetti">Guarda le nostre realizzazioni</Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}