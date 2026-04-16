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
import { useEffect, useState } from "react";


//Componente slider interno
function AboutSlider() {
  const sliderImages = PlaceHolderImages.filter((img) => [
    "cantiere-roma-1",
    "appartamento-itri-1",
    "project-terracina-1",
    "storia-azienda"].includes(img.id));
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000); //Cambia ogni 4 secondi
    return () => clearInterval(timer);
  }, [sliderImages.length]);



  return (
    <div className="relative group">
      <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-200">
        {sliderImages.map((img, index) => (
          <div
            key={`{img.id}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <Image
              src={img.imageUrl}
              alt="L.I-Costruzioni: Eccellenza nei cantieri tra Terracina e Roma"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay con citazione e indicatori */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-8 z-20">
          <p className="text-white font-bold italic text-lg drop-shadow-md mb-4">
            "L'ingegneria del costruire, la passione del creare."
          </p>

          <div className="flex gap-2">
            {sliderImages.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-amber-500" : "w-2 bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



const features = [
  {
    title: "Ristrutturazioni Chiavi in Mano",
    desc: "Trasformiamo residenze esclusive con materiali di pregio e una gestione integrale del cantiere.",
    icon: Paintbrush,
    href: "/servizi/ristrutturazioni",
    label: "Scopri i servizi di ristrutturazione d'eccellenza nel Lazio"
  },
  {
    title: "Nuove Costruzioni",
    desc: "Realizzazione di complessi residenziali moderni in classe A+, con focus su sicurezza ed ecosostenibilità.",
    icon: Building2,
    href: "/servizi/nuove-costruzioni",
    label: "Sviluppo nuove costruzioni ad alta efficienza energetica"
  },
  {
    title: "General Contractor",
    desc: "Interventi strutturali e manutenzioni evolute per patrimoni immobiliari e condomini di prestigio.",
    icon: HardHat,
    href: "/servizi/manutenzione",
    label: "Soluzioni di general contractor per l'edilizia laziale"
  },
  {
    title: "Design & Engineering",
    desc: "Consulenza tecnica d'avanguardia per integrare estetica architettonica e massima funzionalità.",
    icon: Home,
    href: "/servizi/progettazione",
    label: "Ingegneria e progettazione architettonica integrata"
  },
];

export default function HomeClient() {
  const serviceImg = PlaceHolderImages.find((img) => img.id === "service-renovation");

  return (
    <>
      <Hero />

      {/* Sezione Servizi: SEO Regionale e Tone of Voice Professionale */}
      <section id="servizi" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900 uppercase">
              Soluzioni Edili Integrate per il Lazio
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Dalla riqualificazione di dimore storiche nel cuore di <strong>Roma</strong> allo sviluppo di nuovi volumi nella <strong>provincia di Latina</strong>, garantiamo eccellenza tecnica in ogni cantiere.
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

      {/* Sezione Chi Siamo: Leadership e Affidabilità */}
      <section className="py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* COLONNA SINISTRA: Qui ora c'è lo slider automatico */}
          <AboutSlider />

          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-slate-900 uppercase leading-none">
              Competenza Tecnica <br /> al servizio della Regione
            </h2>
            <div className="text-slate-700 mb-8 text-lg leading-relaxed space-y-4">
              <p>
                L.I-Costruzioni SRL opera come <strong>impresa edile general contractor</strong> di alto profilo, coordinando progetti complessi tra <strong>Roma, Latina e l'intero territorio laziale</strong>.
              </p>
              <p>
                La nostra visione unisce l'alta scuola artigiana con le più moderne tecnologie costruttive, assicurando trasparenza finanziaria e rigoroso rispetto dei cronoprogrammi.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10" aria-label="I nostri punti di forza">
              {[
                "Consulenza Tecnica Dedicata",
                "Efficienza Energetica Certificata",
                "Gestione Patrimoniale Edile",
                "Standard Qualitativi ISO",
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
                Profilo Aziendale
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}