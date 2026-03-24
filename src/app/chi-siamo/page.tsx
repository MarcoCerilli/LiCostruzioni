"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// AGGIUNTA SEO: Metadati per la pagina Chi Siamo
// Nota: In Next.js App Router, i metadata vanno in un file server-side o esportati se il componente non è interamente "use client"
// Se questo file è "use client", i metadata vanno messi nel layout o in un file page.tsx superiore.

// --- SOTTO-COMPONENTE PER I PARTNER ---
function PartnerLogo({ partner }: { partner: { name: string; src: string } }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group flex justify-center items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 h-32 relative transition-all hover:shadow-md">
      {!hasError ? (
        <Image
          src={partner.src}
          alt={`Logo partner tecnico: ${partner.name}`} // Alt più descrittivo
          fill
          sizes="(max-width: 768px) 33vw, 10vw" // Ottimizzato per 6 colonne
          className="object-contain p-6 grayscale hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-slate-400 font-bold text-[10px] uppercase text-center italic">
          {partner.name}
        </span>
      )}
    </div>
  );
}

export default function AboutPage() {
  const storiaImg = PlaceHolderImages.find((img) => img.id === "storia-azienda");
  const serviceImg = PlaceHolderImages.find((img) => img.id === "service-dettaglio");

  const partners = [
    { name: "Mapei", src: "/logos/mapei.png" },
    { name: "Kerakoll", src: "/logos/kerakoll.png" },
    { name: "Gyproc", src: "/logos/gyproc.png" },
    { name: "Fassa Bortolo", src: "/logos/fassa.png" },
    { name: "Fischer", src: "/logos/fisher.png" },
    { name: "Project for Building", src: "/logos/logo-Project.png" },
  ];

  const team = [
    { name: "Alfredo Iaboni", phone: "339 3274092", src: "/team/alfredo.jpg" },
    { name: "Luca Iaboni", phone: "324 8643886", src: "/team/luca.jpg" },
    { name: "Jessica Iaboni", phone: "389 5996660", src: "/team/jessica.jpg" },
  ];

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50"> {/* Cambiato div in main per SEO */}
      <div className="max-w-7xl mx-auto">
        
        {/* SEZIONE 1: STORIA & VALORI */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40" aria-labelledby="about-title">
          <div className="order-2 lg:order-1">
            <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Eredità Artigiana dal 1994
            </span>
            <h1 id="about-title" className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter">
              Dall&apos;idea al <br />
              <span className="text-amber-500">Cantiere Perfetto.</span>
            </h1>
            <blockquote className="text-xl text-slate-700 mb-8 leading-relaxed italic border-l-4 border-amber-500 pl-8 py-2">
              &quot;L.I-Costruzioni nasce dall&apos;ambizione di Alfredo Iaboni:
              trasformare la dedizione per il fare bene in una solida realtà
              imprenditoriale nel Lazio.&quot;
            </blockquote>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Oggi la tradizione incontra l&apos;innovazione con <strong>Luca e Jessica Iaboni</strong>. 
              Gestiamo ogni progetto con tecnologie all&apos;avanguardia a <strong>Terracina, Latina e Roma</strong>.
            </p>

            <div className="grid grid-cols-2 gap-12 py-10 border-t border-slate-200">
              <div>
                <p className="text-5xl font-black text-slate-900 tracking-tighter">30+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mt-2">Anni di Attività</p>
              </div>
              <div>
                <p className="text-5xl font-black text-slate-900 tracking-tighter">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mt-2">Finiture d&apos;Elite</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-3xl order-1 lg:order-2 border-[12px] border-white bg-slate-200">
            {storiaImg && (
              <Image
                src={storiaImg.imageUrl}
                alt="Maestria artigianale e direzione lavori L.I-Costruzioni"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            )}
          </div>
        </section>

        {/* SEZIONE 2: ALTA DEFINIZIONE EDILIZIA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 mb-40 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" aria-hidden="true" />
          
          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
                Edilizia in <span className="text-amber-500 uppercase">Alta Definizione</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Il nostro metodo si basa sulla trasparenza totale. Ogni materiale e finitura parla di eccellenza artigianale.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Coinvolgimento diretto proprietari",
                  "Selezione certificata materiali",
                  "Maestria tecnica consolidata",
                  "Assistenza post-consegna",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber-500 h-5 w-5 shrink-0" aria-hidden="true" />
                    <span className="text-slate-100 font-bold text-sm uppercase tracking-wide">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 relative group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-slate-800">
                {serviceImg?.imageUrl && (
                  <Image
                    src={serviceImg.imageUrl}
                    alt="Dettaglio finiture di pregio realizzate da L.I-Costruzioni"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* SEZIONE TEAM */}
        <section className="mb-40" aria-labelledby="team-title">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Il Cuore dell&apos;Azienda
            </span>
            <h2 id="team-title" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              La Direzione Tecnica
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center group text-center">
                <div className="relative w-56 h-64 rounded-2xl overflow-hidden mb-8 border border-slate-200 shadow-xl transition-all duration-500 group-hover:border-amber-500/50 bg-slate-100">
                  <div className="relative z-10 w-full h-full p-4 flex items-center justify-center">
                    <img
                      src={member.src}
                      alt={`${member.name} - Direzione L.I-Costruzioni`}
                      className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 z-20 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  {member.name}
                </h3>

                <a
                  href={`tel:${member.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-slate-700 font-bold hover:text-white transition-all py-2.5 px-6 rounded-full bg-white border border-slate-200 hover:bg-amber-500 hover:border-amber-500 shadow-sm"
                  aria-label={`Chiama ora ${member.name}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm">{member.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* SEZIONE PARTNER */}
        <section className="mb-40" aria-labelledby="partner-title">
          <div className="text-center mb-16">
            <h2 id="partner-title" className="text-2xl font-black text-slate-900 mb-2 italic">
              Solo il meglio per i nostri cantieri.
            </h2>
            <p className="text-slate-500 uppercase tracking-[0.3em] text-[10px] font-bold">
              Top Brand & Fornitori Tecnici
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {partners.map((partner, i) => (
              <PartnerLogo key={i} partner={partner} />
            ))}
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="relative max-w-4xl mx-auto mt-20 mb-16 px-4">
          <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-14 text-center shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-10">
                Pronto a costruire il <br />
                <span className="text-amber-500 italic">tuo futuro?</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-amber-500 hover:text-white font-black px-10 h-16 rounded-2xl shadow-xl transition-all duration-300 text-lg group w-full sm:w-auto uppercase"
                  asChild
                >
                  <Link href="/contatti" className="flex items-center justify-center gap-3">
                    Prenota Sopralluogo
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white h-16 px-10 rounded-2xl text-lg w-full sm:w-auto uppercase transition-all duration-300"
                  asChild
                >
                  <Link href="/progetti">Vedi Lavori</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}