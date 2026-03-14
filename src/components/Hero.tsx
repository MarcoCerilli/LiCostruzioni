"use client";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  city?: string;
}

export function Hero({ city }: HeroProps) {
  // SEO: Titoli ottimizzati per intercettare le ricerche "Impresa edile + città"
  const title = city
    ? `Impresa Edile a ${city}: Costruzioni e Ristrutturazioni`
    : "Impresa Edile: Costruzioni e Ristrutturazioni d'Eccellenza";

  const subtitle = city
    ? `Specialisti in ristrutturazioni chiavi in mano e nuove costruzioni a ${city}. Realizziamo il tuo progetto con qualità certificata.`
    : "Dal 1990, L.I-Costruzioni trasforma le vostre idee in realtà solide a Terracina, Roma e Latina con competenza artigianale.";

  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "hero-industrial",
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#1a1f1a] pt-40 pb-20">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={`Lavori di edilizia e ristrutturazioni L.I-Costruzioni ${city ? `a ${city}` : ''}`}
            fill
            className="object-cover opacity-60" // Ridotto l'uso di filtri CSS pesanti
            priority
            fetchPriority="high" // Dice al browser di scaricare questa immagine per prima
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a1f1a]/40 to-[#1a1f1a]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge superiore - Local SEO Signal */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          L.I-Costruzioni SRL • Terracina • Roma • Latina
        </div>

        {/* H1: Il cuore della SEO */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter mb-8 text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 leading-[0.95] drop-shadow-2xl">
          {title}
        </h1>

        {/* Sottotitolo: Keyword LSI (Latent Semantic Indexing) */}
        <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 leading-relaxed italic">
          {subtitle}
        </p>

        {/* Bottoni d'azione */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <Button
            size="lg"
            className="h-16 px-10 font-black text-lg w-full sm:w-auto bg-amber-500 text-slate-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/40 rounded-xl"
            asChild
          >
            <Link href="/contatti" title="Richiedi un preventivo gratuito per edilizia">
              Inizia il tuo Progetto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-16 px-10 font-black text-lg w-full sm:w-auto border-2 border-white/30 text-white bg-white/5 hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-md rounded-xl"
            asChild
          >
            <Link href="/progetti" title="Guarda il portfolio delle nostre costruzioni">
              Guarda i Lavori
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-[2px] h-12 rounded-full bg-gradient-to-b from-amber-500 to-transparent" />
      </div>
    </section>
  );
}