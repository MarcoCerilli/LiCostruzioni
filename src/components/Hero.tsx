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
  const title = city
    ? `Impresa Edile a ${city}`
    : "Costruzioni e Ristrutturazioni d'Eccellenza";

  const subtitle = city
    ? `Soluzioni costruttive personalizzate per il territorio di ${city}. Qualità e professionalità al tuo servizio.`
    : "Trasformiamo le vostre idee in realtà solide. Dal progetto alla consegna, con passione e competenza artigianale.";

  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "hero-industrial",
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden bg-primary pt-30 pb-20 md:pt-56">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-30 grayscale-[20%] brightness-[0.5]"
            priority
          />
        )}
        {/* Gradient più scuro in alto per migliorare la leggibilità della Navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/40 to-primary" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge superiore con animazione */}
        <div className="inline-block px-4 py-2 mb-8 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] animate-in fade-in slide-in-from-top-4 duration-1000">
          LI-COSTRUZIONI SRL • Terracina • Roma • Latina
        </div>

        {/* Titolo Principale abbassato */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter mb-8 text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 leading-[1] drop-shadow-2xl">
          {title}
        </h1>

        {/* Sottotitolo */}
        <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 leading-relaxed">
          {subtitle}
        </p>

        {/* Bottoni d'azione */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <Button
            size="lg"
            className="h-16 px-10 font-black text-lg w-full sm:w-auto 
              bg-amber-500 text-slate-900 
              hover:bg-white hover:scale-105 
              transition-all duration-300 shadow-2xl shadow-amber-500/20 rounded-xl"
            asChild
          >
            <Link href="/contatti">
              Inizia il tuo Progetto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-16 px-10 font-black text-lg w-full sm:w-auto 
              border-2 border-white/30 text-white bg-white/5
              hover:bg-white hover:text-slate-900 
              transition-all duration-300 backdrop-blur-md rounded-xl"
            asChild
          >
            <Link href="/progetti">Guarda i Lavori</Link>
          </Button>
        </div>
      </div>

      {/* Elemento decorativo: Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-amber-500 to-transparent" />
      </div>
    </section>
  );
}