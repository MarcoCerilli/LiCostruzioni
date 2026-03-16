"use client";

import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Building2,
  Home,
  Paintbrush,
  HardHat,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ComingSoon from "./coming-soon";

const features = [
  {
    title: "Ristrutturazioni Chiavi in Mano", // Titolo più specifico
    desc: "Trasformiamo appartamenti e ville con materiali di pregio e gestione totale del cantiere.",
    icon: Paintbrush,
    href: "/servizi/ristrutturazioni",
  },
  {
    title: "Nuove Costruzioni",
    desc: "Realizzazione di edifici residenziali moderni in classe A+, sicuri ed ecosostenibili.",
    icon: Building2,
    href: "/servizi/nuove-costruzioni",
  },
  {
    title: "Manutenzione Edile",
    desc: "Interventi strutturali e manutenzioni ordinarie per condomini e privati.",
    icon: HardHat,
    href: "/servizi/manutenzione",
  },
  {
    title: "Design & Progettazione",
    desc: "Supporto tecnico e architettonico per coniugare estetica e funzionalità abitativa.",
    icon: Home,
    href: "/servizi/progettazione",
  },
];

export default function HomePage() {
  // 1. Controllo immediato: se siamo in manutenzione, esci subito
  if (process.env.NEXT_PUBLIC_COMING_SOON === "true") {
    return <ComingSoon />;
  }

  // 2. Logica del sito reale (eseguita solo se NON siamo in Coming Soon)
  const serviceImg = PlaceHolderImages.find(
    (img) => img.id === "service-renovation",
  );

  return (
    <>
      <Hero />

      {/* Sezione Servizi con Keyword Locali */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-primary">
              Servizi Edili d'Eccellenza a Terracina e Provincia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Dalla ristrutturazione del casale a Sabaudia alla nuova
              costruzione a Roma, portiamo la nostra esperienza decennale in
              ogni cantiere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Link href={feature.href} key={idx} className="block group">
                <Card className="h-full border border-primary/5 bg-background hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:rotate-6 transition-all duration-500">
                      <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-black tracking-tight">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione Chi Siamo / Qualità con Immagine Descrittiva */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              {serviceImg && (
                <Image
                  src={serviceImg.imageUrl}
                  alt="Cantiere edile L.I-Costruzioni a Terracina - Qualità e Sicurezza"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-bold italic text-lg">
                  "Costruiamo il futuro su basi solide."
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
              Oltre 15 anni di esperienza nell'edilizia laziale
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              **L.I-Costruzioni SRL** non è solo un'impresa edile, ma un partner
              di fiducia. Fondata da **Simonelli Massimo**, l'azienda si
              distingue per la capacità di gestire progetti complessi garantendo
              tempi certi e costi trasparenti.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Sopralluoghi Gratuiti",
                "Gestione Pratiche Sisma Bonus",
                "Team Interno Specializzato",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-bold text-sm text-primary/80 group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="rounded-full px-8 font-black uppercase tracking-widest bg-primary hover:bg-accent hover:text-primary transition-all"
              asChild
            >
              <Link href="/chi-siamo">Scopri la nostra storia</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
