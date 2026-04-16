"use client";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react"; // ShieldCheck trasmette sicurezza

interface HeroProps {
  city?: string;
}

export function Hero({ city }: HeroProps) {
  // Titolo più diretto e solido
  const title = city
    ? `Impresa Edile a ${city}: Costruiamo con Fiducia`
    : "L.I-Costruzioni: La tua Impresa di Fiducia nel Lazio";

  // SOTTOTITOLO: Meno marketing, più sostanza e presenza fisica
  const subtitle = city
    ? `Dalla nostra sede di Terracina, portiamo a ${city} la stessa cura e solidità che ci contraddistingue da oltre 30 anni. Progetti chiavi in mano eseguiti a regola d'arte.`
    : "Siamo un'impresa di famiglia nata a Terracina. Dal 1990 mettiamo la faccia e l'esperienza in ogni cantiere tra Roma e Latina, garantendo serietà e tempi certi.";

  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-industrial");

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#1a1f1a] pt-40 pb-20">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={`Impresa Edile L.I-Costruzioni: Cantieri e ristrutturazioni certificate a Terracina`}
            fill
            className="object-cover opacity-85"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1a1f1a]/50 to-[#1a1f1a]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge Evoluto: Fiducia + Autorità SOA */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full bg-slate-900/40 backdrop-blur-md border border-amber-500/30 text-amber-500 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] animate-in fade-in slide-in-from-top-4 duration-1000 shadow-2xl shadow-amber-500/10">
          <div className="flex items-center gap-1.5 border-r border-amber-500/30 pr-3">
            <ShieldCheck size={15} className="text-amber-500" />
            <span>Impresa Certificata SOA</span>
          </div>
          <div className="flex items-center gap-1.5 pl-1">
            <MapPin size={14} className="opacity-70" />
            <span className="text-white/90">Terracina • Dal 1990</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter mb-8 text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 leading-[0.95] drop-shadow-2xl">
          {title}
        </h1>

        <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 leading-relaxed italic">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <Button
            size="lg"
            className="h-16 px-10 font-black text-lg w-full sm:w-auto bg-amber-500 text-slate-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/40 rounded-xl"
            asChild
          >
            <Link href="/contatti">
              Richiedi un Sopralluogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-16 px-10 font-black text-lg w-full sm:w-auto border-2 border-white/30 text-white bg-white/5 hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-md rounded-xl"
            asChild
          >
            <Link href="/progetti">
              I Nostri Lavori
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-[2px] h-12 rounded-full bg-gradient-to-b from-amber-500 to-transparent" />
      </div>
    </section>
  );
}