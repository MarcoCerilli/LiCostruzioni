
"use client";

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-industrial');

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-40 grayscale-[20%] brightness-[0.6]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-700">
          LI-COSTRUZIONI SRL • Terracina • Roma • Latina
        </div>
        <h1 className="text-5xl md:text-8xl font-black font-headline tracking-tighter mb-8 text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 leading-[1.1]">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <Button size="lg" className="h-14 px-10 font-bold text-lg w-full sm:w-auto bg-accent text-accent-foreground hover:scale-105 transition-transform shadow-xl shadow-accent/20" asChild>
            <Link href="/contatti">
              Inizia il tuo Progetto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-10 font-bold text-lg w-full sm:w-auto border-white/40 text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm" asChild>
            <Link href="/progetti">Guarda i Lavori</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
