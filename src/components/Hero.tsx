"use client";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  city?: string;
}

export function Hero({ city }: HeroProps) {
  const title = city
    ? `Impresa Edile: Soluzioni e Cantieri di Pregio a ${city}`
    : "General Contractor & Ingegneria del Costruire";

  const subtitle =
    "Dal 1990 realizziamo ristrutturazioni d'élite, nuove costruzioni e riqualificazioni complesse in tutto il Lazio. Direzione tecnica diretta, maestranze interne e tempi certi con Attestazione SOA.";

  const heroBg = PlaceHolderImages.find((img) => img.id === "hero-industrial");
  const heroCardProject = "/progetti/terracina-sala-hd.jpg";

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-950 pt-28 md:pt-36 pb-16">
      {/* Sfondo Architetturale */}
      <div className="absolute inset-0 z-0">
        {heroBg && (
          <Image
            src={heroBg.imageUrl}
            alt="L.I-Costruzioni Ingegneria e Cantieri"
            fill
            className="object-cover opacity-20 filter grayscale"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.14),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* COLONNA SINISTRA: Testi e Azioni */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill: SOA + Esperienza */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-amber-500/30 text-amber-400 text-[10px] sm:text-[11px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg shadow-amber-500/5">
              <ShieldCheck size={15} className="text-amber-500 shrink-0" />
              <span>Certificazione SOA • N. 8148/69/07</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Dal 1990</span>
            </div>

            {/* Titolo Principale Proporzionato */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-headline tracking-tighter text-white uppercase leading-[1.05]">
              General Contractor & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200">
                Ingegneria del Costruire
              </span>
            </h1>

            {/* Sottotitolo Diretto e Autorevole */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* Pulsanti CTA con Icona Ufficiale WhatsApp */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                size="lg"
                className="h-14 px-8 font-black text-sm uppercase tracking-wider bg-amber-500 text-slate-950 hover:bg-amber-400 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-amber-500/25 rounded-2xl"
                asChild
              >
                <Link href="/contatti" className="flex items-center gap-2.5">
                  <span>Richiedi Sopralluogo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-7 font-bold text-sm uppercase tracking-wider border-2 border-emerald-500/50 text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 hover:border-emerald-400 transition-all backdrop-blur-md rounded-2xl shadow-lg"
                asChild
              >
                <a
                  href="https://wa.me/393248643886?text=Salve%2C%20vorrei%20informazioni%20per%20un%20sopralluogo%20tecnico%20con%20L.I-Costruzioni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5"
                >
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400 fill-current" />
                  <span>WhatsApp Tecnico</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="h-14 px-6 font-bold text-sm uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 transition-all rounded-2xl"
                asChild
              >
                <Link href="/progetti">
                  I Nostri Cantieri
                </Link>
              </Button>
            </div>

            {/* Micro-Punti di Forza */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-tight">
                <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
                <span>Maestranze Dirette</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-tight">
                <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
                <span>Cronoprogramma Certo</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-tight">
                <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
                <span>Qualità Certificata</span>
              </div>
            </div>

          </div>

          {/* COLONNA DESTRA: Card Architetturale Pulita (Senza Badge Invasivi) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-900 group">
              <Image
                src={heroCardProject}
                alt="Opera architettonica e cantiere L.I-Costruzioni"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Sottilissima vignettatura ai bordi per eleganza, senza coprire il soggetto */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

              {/* Tag discreto e compatto nell'angolo superiore, senza invadere la foto */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/15 text-white text-[9px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1.5 pointer-events-none">
                <Sparkles size={11} className="text-amber-400" />
                <span>Opere & Realizzazioni</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}