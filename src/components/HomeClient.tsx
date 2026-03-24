// src/components/HomeClient.tsx
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

const features = [
  {
    title: "Ristrutturazioni Chiavi in Mano",
    desc: "Trasformiamo appartamenti e ville con materiali di pregio e gestione totale del cantiere.",
    icon: Paintbrush,
    href: "/servizi/ristrutturazioni",
    label: "Scopri i servizi di ristrutturazione a Terracina"
  },
  {
    title: "Nuove Costruzioni",
    desc: "Realizzazione di edifici residenziali moderni in classe A+, sicuri ed ecosostenibili.",
    icon: Building2,
    href: "/servizi/nuove-costruzioni",
    label: "Scopri le nuove costruzioni in classe A+"
  },
  {
    title: "Manutenzione Edile",
    desc: "Interventi strutturali e manutenzioni ordinarie per condomini e privati.",
    icon: HardHat,
    href: "/servizi/manutenzione",
    label: "Servizi di manutenzione edile per privati e condomini"
  },
  {
    title: "Design & Progettazione",
    desc: "Supporto tecnico e architettonico per coniugare estetica e funzionalità abitativa.",
    icon: Home,
    href: "/servizi/progettazione",
    label: "Servizi di progettazione architettonica"
  },
];

export default function HomeClient() {
  const serviceImg = PlaceHolderImages.find((img) => img.id === "service-renovation");

  return (
    <>
      <Hero />

      {/* Sezione Servizi */}
      <section id="servizi" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900 uppercase">
              Servizi Edili d'Eccellenza a Terracina e Provincia
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Dalla ristrutturazione del casale a Sabaudia alla nuova
              costruzione a Roma, portiamo la nostra esperienza decennale in
              ogni cantiere del Lazio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Link 
                href={feature.href} 
                key={idx} 
                className="block group outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl" 
                aria-label={feature.label}
              >
                <Card className="h-full border border-slate-200 bg-white hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 rounded-2xl">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:rotate-6 transition-all duration-500" aria-hidden="true">
                      <feature.icon className="h-7 w-7 text-amber-600 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl font-black tracking-tight text-slate-900 uppercase">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione Chi Siamo */}
      <section className="py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              {serviceImg && (
                <Image
                  src={serviceImg.imageUrl}
                  alt="Dettaglio cantiere edile L.I-Costruzioni a Terracina" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-bold italic text-lg drop-shadow-md">
                  "Costruiamo il futuro su basi solide."
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-slate-900 uppercase leading-none">
              Oltre 15 anni di esperienza <br /> nell'edilizia laziale
            </h2>
            <div className="text-slate-700 mb-8 text-lg leading-relaxed space-y-4">
              <p>
                L.I-Costruzioni SRL non è solo una <strong>ditta edile</strong>, ma un partner
                di fiducia a <strong>Terracina</strong>, <strong>Roma</strong> e <strong>Latina</strong>.
              </p>
              <p>
                Fondata da Alfredo Iaboni, la nostra impresa si distingue per la gestione di progetti complessi con tempi certi e costi trasparenti.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10" aria-label="I nostri punti di forza">
              {[
                "Sopralluoghi Gratuiti",
                "Gestione Pratiche Sisma Bonus",
                "Team Interno Specializzato",
                "Interventi Certificati",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" aria-hidden="true" />
                  <span className="font-bold text-[11px] uppercase tracking-wider text-slate-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="rounded-xl h-14 px-10 font-black uppercase tracking-widest bg-slate-950 text-white hover:bg-amber-500 hover:text-slate-950 transition-all shadow-xl shadow-slate-900/10"
              asChild
            >
              <Link href="/chi-siamo">
                Scopri la nostra ditta
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}