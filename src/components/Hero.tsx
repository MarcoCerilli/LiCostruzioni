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
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-[0.4] contrast-[1.1]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-700">
          LI-COSTRUZIONI SRL • Terracina
        </div>
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight mb-6 text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <Button size="lg" className="h-12 px-8 font-bold text-base w-full sm:w-auto" asChild>
            <Link href="/contatti">
              Inizia il tuo Progetto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8 font-bold text-base w-full sm:w-auto border-white/20 hover:bg-white/10" asChild>
            <Link href="/progetti">Guarda i Lavori</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
