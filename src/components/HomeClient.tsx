"use client";

import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import {
  Building2,
  Home,
  Paintbrush,
  HardHat,
  CheckCircle2,
  Award,
  Clock,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  Layers,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Componente slider interno per la sezione Chi Siamo
function AboutSlider() {
  const sliderImages = PlaceHolderImages.filter((img) =>
    [
      "cantiere-roma-1",
      "appartamento-itri-1",
      "project-terracina-1",
      "storia-azienda",
    ].includes(img.id)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <div className="relative group">
      <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-200">
        {sliderImages.map((img, index) => (
          <div
            key={`${img.id}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img.imageUrl}
              alt="L.I-Costruzioni: Cantieri e Opere d'eccellenza nel Lazio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay con citazione e indicatori */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-8 z-20">
          <p className="text-white font-bold italic text-base md:text-lg drop-shadow-md mb-4 leading-snug">
            &ldquo;L&apos;ingegneria del costruire, la passione del creare.&rdquo;
          </p>

          <div className="flex gap-2">
            {sliderImages.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-amber-500" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Progetti in Evidenza (Nomi delle città preservati internamente come metadati per SEO/accessibilità ma nascosti dalla UI grafica)
const featuredProjects = [
  {
    title: "Struttura Ricettiva & Luxury Dining",
    city: "Terracina", // Metadato SEO
    tag: "Nuova Costruzione",
    scope: "Opere Civili & Hospitality",
    image: "/progetti/terracina-sala-hd.jpg",
    desc: "Realizzazione d'avanguardia con soffitto acustico a onde dinamiche, vetrate panoramiche fronte mare e finiture di pregio.",
    featured: true,
  },
  {
    title: "Villa Panoramica d'Élite",
    city: "Sabaudia", // Metadato SEO
    tag: "Architettura Contemporanea",
    scope: "Design Esclusivo",
    image: "/progetti/sabaudia-porticato-hd.jpg",
    desc: "Porticato e loggia con archi moderni vista mare, parapetti in cristallo e materiali biocompatibili.",
    featured: false,
  },
  {
    title: "Sistemi Radianti Avanzati",
    city: "Roma", // Metadato SEO
    tag: "Innovazione Energetica",
    scope: "Impianti Speciali",
    image: "/progetti/radiante-roma-hd.jpg",
    desc: "Impiantistica radiante a pavimento ad altissima efficienza e isolamento termo-acustico certificato.",
    featured: false,
  },
  {
    title: "Ristrutturazione & Rigenerazione Villa",
    city: "Itri", // Metadato SEO
    tag: "Ristrutturazione d'Autore",
    scope: "General Contracting",
    image: "/progetti/villa-itri-hd.jpg",
    desc: "Riqualificazione completa di villa unifamiliare con ampio patio esterno in gres effetto legno e isolamento termico continuo.",
    featured: true,
  },
];

// 4 Pilastri del Metodo
const pillars = [
  {
    number: "01",
    title: "Interlocutore Tecnico Diretto",
    desc: "Nessun intermediario: la direzione lavori è condotta direttamente dai tecnici titolari con maestranze e mezzi propri.",
    icon: HardHat,
  },
  {
    number: "02",
    title: "Cronoprogramma & Costi Certi",
    desc: "Pianificazione trasparente delle forniture e rispetto rigoroso delle date di consegna pattuite a contratto.",
    icon: Clock,
  },
  {
    number: "03",
    title: "Attestazione SOA & Sicurezza",
    desc: "Abilitati all'esecuzione di grandi commesse pubbliche e private (Attestazione SOA N. 8148/69/07 del 20/07/2026).",
    icon: Award,
  },
  {
    number: "04",
    title: "Materiali di Pregio Certificati",
    desc: "Partnership consolidate con i migliori produttori (Mapei, Kerakoll, Gyproc, Fassa) per durabilità decennale.",
    icon: ShieldCheck,
  },
];

// Servizi Chiave
const services = [
  {
    title: "Ristrutturazioni Chiavi in Mano",
    desc: "Trasformiamo residenze esclusive con materiali di pregio e una gestione integrale del cantiere, dal progetto alle finiture.",
    icon: Paintbrush,
    href: "/servizi",
    highlight: "General Contractor",
  },
  {
    title: "Nuove Costruzioni Civili",
    desc: "Sviluppo di complessi residenziali e ville unifamiliari in classe energetica A+ con tecnologie antisismiche moderne.",
    icon: Building2,
    href: "/servizi",
    highlight: "Classe A+",
  },
  {
    title: "Risanamento & Deumidificazione",
    desc: "Specialisti in diagnostica igrometrica, barriere chimiche e deumidificazione definitiva per murature e immobili storici.",
    icon: Sparkles,
    href: "/servizi#risanamento",
    highlight: "Protocollo Scientifico",
  },
  {
    title: "Engineering & Valorizzazione Asset",
    desc: "Consulenza tecnica integrata per valorizzare il patrimonio immobiliare e gestire pratiche autorizzative complesse.",
    icon: Home,
    href: "/servizi",
    highlight: "Studio Tecnico",
  },
];

export default function HomeClient() {
  return (
    <>
      {/* 1. HERO SECTION (Layout Architetturale Rinfrescato & Badge Pulito) */}
      <Hero />

      {/* 2. BARRA METRICHE & FIDUCIA (Floating Trust Bar) */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Sparkles className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-white leading-none">30+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Anni di Cantiere</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Award className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-base md:text-lg font-black text-white leading-none font-mono">SOA Ufficiale</p>
              <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mt-1">N. 8148/69/07</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Clock className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-white leading-none">100%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Tempi Garantiti</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
              <MapPin className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm md:text-base font-black text-white leading-none uppercase">Lazio & Roma</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Presidio Regionale</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERE & CANTIERI IN EVIDENZA (Bento Grid Progetti - Città nascoste) */}
      <section className="py-24 px-6 bg-slate-50/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-amber-600 font-black uppercase tracking-[0.25em] text-[10px] mb-3 block">
                Portfolio Architettonico
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                Opere & Cantieri in Evidenza
              </h2>
            </div>
            <Button
              size="lg"
              className="rounded-xl h-12 px-6 font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-950 transition-all self-start md:self-end"
              asChild
            >
              <Link href="/progetti" className="flex items-center gap-2">
                Tutti i Cantieri <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Progetto Principale (Span 2 colonne su Desktop) */}
            <Link
              href="/progetti"
              className="md:col-span-2 group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-950 min-h-[380px] md:min-h-[440px] flex flex-col justify-end p-8"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 filter blur-2xl opacity-40 scale-110 pointer-events-none">
                <Image
                  src={featuredProjects[0].image}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <Image
                src={featuredProjects[0].image}
                alt={`${featuredProjects[0].title} - Opera L.I-Costruzioni`}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="relative z-10 space-y-2.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-sm">
                    {featuredProjects[0].tag}
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-200 font-bold text-[11px] uppercase tracking-wider border border-white/15 shadow-sm">
                    {featuredProjects[0].scope}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                  {featuredProjects[0].title}
                </h3>
                <p className="text-slate-300 text-sm max-w-xl line-clamp-2">
                  {featuredProjects[0].desc}
                </p>
              </div>

              <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <ArrowUpRight size={18} />
              </div>
            </Link>

            {/* Progetto 2 */}
            <Link
              href="/progetti"
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-950 min-h-[380px] md:min-h-[440px] flex flex-col justify-end p-8"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 filter blur-2xl opacity-40 scale-110 pointer-events-none">
                <Image
                  src={featuredProjects[1].image}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <Image
                src={featuredProjects[1].image}
                alt={`${featuredProjects[1].title} - Opera L.I-Costruzioni`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="relative z-10 space-y-2.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-sm">
                    {featuredProjects[1].tag}
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-200 font-bold text-[11px] uppercase tracking-wider border border-white/15 shadow-sm">
                    {featuredProjects[1].scope}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                  {featuredProjects[1].title}
                </h3>
                <p className="text-slate-300 text-xs line-clamp-2">
                  {featuredProjects[1].desc}
                </p>
              </div>

              <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <ArrowUpRight size={18} />
              </div>
            </Link>

            {/* Progetto 3 */}
            <Link
              href="/progetti"
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-950 min-h-[300px] flex flex-col justify-end p-8"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 filter blur-2xl opacity-40 scale-110 pointer-events-none">
                <Image
                  src={featuredProjects[2].image}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <Image
                src={featuredProjects[2].image}
                alt={`${featuredProjects[2].title} - Opera L.I-Costruzioni`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="relative z-10 space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-sm">
                    {featuredProjects[2].tag}
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-200 font-bold text-[11px] uppercase tracking-wider border border-white/15 shadow-sm">
                    {featuredProjects[2].scope}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                  {featuredProjects[2].title}
                </h3>
              </div>
            </Link>

            {/* Progetto 4 (Span 2 colonne su Desktop) */}
            <Link
              href="/progetti"
              className="md:col-span-2 group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-950 min-h-[300px] flex flex-col justify-end p-8"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 filter blur-2xl opacity-40 scale-110 pointer-events-none">
                <Image
                  src={featuredProjects[3].image}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <Image
                src={featuredProjects[3].image}
                alt={`${featuredProjects[3].title} - Opera L.I-Costruzioni`}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="relative z-10 space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-sm">
                    {featuredProjects[3].tag}
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-200 font-bold text-[11px] uppercase tracking-wider border border-white/15 shadow-sm">
                    {featuredProjects[3].scope}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                  {featuredProjects[3].title}
                </h3>
                <p className="text-slate-300 text-xs max-w-lg line-clamp-1">
                  {featuredProjects[3].desc}
                </p>
              </div>

              <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SEZIONE ARCHITETTONICA PRIMA & DOPO (Sfondo Chiaro & Proporzioni Compatte) */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Colonna Sinistra: Caso Studio, Valore & Dettagli Tecnici */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
                <Sparkles size={13} className="text-amber-500" />
                <span>Case Study Esecutivo • Trasformazione Cantiere</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                Dalla Struttura Grezza alla <span className="text-amber-600">Perfezione dell&apos;Opera.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Un esempio concreto di ristrutturazione chiavi in mano. Abbiamo curato consolidamento strutturale, posa pavimenti in terrazzo veneziano, realizzazione di travi curve a soffitto con illuminazione scenografica e allestimento su misura.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="h-7 w-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">Direzione Unica</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">Referente tecnico diretto senza intermediari.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="h-7 w-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">Tempi Certificati</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">Cronoprogramma vincolante e SOA.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-black rounded-xl uppercase tracking-widest text-xs h-11 px-6 shadow-md"
                  asChild
                >
                  <Link href="/contatti" className="flex items-center gap-2">
                    Richiedi Sopralluogo <ArrowRight size={15} />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-white hover:text-slate-900 rounded-xl uppercase tracking-widest text-xs h-11 px-5"
                  asChild
                >
                  <Link href="/progetti">
                    Vedi Altre Opere
                  </Link>
                </Button>
              </div>
            </div>

            {/* Colonna Destra: Lo Slider Compatto e Proporzionato */}
            <div className="lg:col-span-6">
              <BeforeAfterSlider
                beforeImage="/progetti/frosinone-cantiere-hd.jpg"
                afterImage="/progetti/frosinone-ristorante-hd.jpg"
                beforeAlt="Cantiere in corso prima del completamento"
                afterAlt="Design Restaurant completato con arredi e finiture d'autore"
                beforeLabel="Stato Grezzo"
                afterLabel="Locale Consegnato"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. I 4 PILASTRI DEL METODO L.I-COSTRUZIONI */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-amber-400 font-black uppercase tracking-[0.3em] text-[10px] block">
              Garanzie & Solidità Operativa
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Il Metodo <span className="text-amber-500">L.I-Costruzioni</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Dalla stesura del capitolato alla posa dell&apos;ultimo dettaglio, garantiamo standard di controllo rigorosi e collaudi certificati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-amber-500 font-mono">
                      {p.number}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <p.icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVIZI INTEGRATI */}
      <section id="servizi" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-amber-600 font-black uppercase tracking-[0.25em] text-[10px] block">
              Soluzioni Edili Chiavi in Mano
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">
              Competenze per Grandi e Piccole Opere
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Dalla ristrutturazione d&apos;alta gamma alle nuove cubature residenziali e infrastrutturali con standard certificati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((feature, idx) => (
              <Link
                href={feature.href}
                key={idx}
                className="block group outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-3xl"
              >
                <Card className="h-full border border-slate-200/80 bg-white hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 rounded-3xl p-2">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300">
                        <feature.icon className="h-6 w-6 text-amber-600 group-hover:text-slate-950" />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-black tracking-tight text-slate-900 uppercase">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CHI SIAMO & STORIA (Leadership e Radici) */}
      <section className="py-24 px-6 overflow-hidden bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AboutSlider />

          <div className="space-y-6">
            <span className="text-amber-600 font-black uppercase tracking-[0.25em] text-[10px] block">
              La Nostra Identità
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase leading-tight">
              Oltre Trent&apos;Anni di <br />
              <span className="text-amber-500">Valore Costruttivo nel Lazio</span>
            </h2>
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                L.I-Costruzioni SRL unisce la solida tradizione di cantiere con le più moderne metodologie di <strong>General Contracting</strong> e gestione integrata.
              </p>
              <p className="text-sm">
                Operiamo su tutto il territorio laziale con attrezzature di proprietà, personale altamente qualificato e attestazione <strong>SOA N. 8148/69/07</strong>.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2" aria-label="I nostri punti di forza">
              {[
                "Direzione Tecnica Esclusiva",
                "Certificazione SOA Ufficiale",
                "Efficienza Energetica A+",
                "Gestione Patrimoniale Chiavi in Mano",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" aria-hidden="true" />
                  <span className="font-bold text-[11px] uppercase tracking-wider text-slate-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-xl h-13 px-8 font-black uppercase tracking-widest bg-slate-950 text-white hover:bg-amber-500 hover:text-slate-950 transition-all shadow-xl shadow-slate-900/10 text-xs"
                asChild
              >
                <Link href="/chi-siamo">
                  Scopri il Profilo Aziendale
                </Link>
              </Button>

              <a
                href="tel:+393248643886"
                className="inline-flex items-center gap-2 text-slate-900 font-mono font-bold text-sm hover:text-amber-600 transition-colors"
              >
                <Phone size={15} className="text-amber-500" />
                +39 324.8643886
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINALE AD ALTO IMPATTO CON ICONA UFFICIALE WHATSAPP */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-950 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)]" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
                Sopralluoghi e Consulenze Tecniche Gratuite
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">
                Hai un Progetto da <br />
                <span className="text-amber-500">Realizzare nel Lazio?</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Contatta direttamente la nostra direzione tecnica per valutare fattibilità, cronoprogramma e computi estimativi senza impegno.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-black rounded-2xl uppercase tracking-wider text-sm h-14 px-8 shadow-xl shadow-amber-500/25 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contatti" className="flex items-center gap-2.5 justify-center">
                    <span>Richiedi Sopralluogo</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-500/50 text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 hover:border-emerald-400 font-bold rounded-2xl uppercase tracking-wider text-sm h-14 px-8 w-full sm:w-auto shadow-lg"
                  asChild
                >
                  <a
                    href="https://wa.me/393248643886?text=Salve%2C%20vorrei%20richiedere%20un%20sopralluogo%20tecnico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 justify-center"
                  >
                    <WhatsAppIcon className="h-5 w-5 text-emerald-400 fill-current" />
                    <span>WhatsApp Tecnico</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}