"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

// --- SOTTO-COMPONENTE PER I PARTNER ---
function PartnerLogo({ partner }: { partner: { name: string; src: string } }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group flex justify-center items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 h-32 relative transition-all hover:scale-105 hover:shadow-lg">
      {!hasError ? (
        <Image
          src={partner.src}
          alt={`Logo ${partner.name}`}
          fill
          sizes="(max-width: 768px) 50vw, 15vw"
          className="object-contain p-4 grayscale hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-slate-400 font-bold text-xs uppercase text-center">
          {partner.name}
        </span>
      )}
    </div>
  );
}

export default function AboutPage() {
  const teamImg = PlaceHolderImages.find(
    (img) => img.id === "project-terracina-1",
  );

  // Percorsi aggiornati alle tue immagini locali in /public/logos/
  const partners = [
    { name: "Mapei", src: "/logos/mapei.png" },
    { name: "Kerakoll", src: "/logos/kerakoll.png" },
    { name: "Gyproc", src: "/logos/gyproc.png" },
    { name: "Fassa Bortolo", src: "/logos/fassa.png" },
    { name: "Fischer", src: "/logos/fisher.png" }, // Corretto 'fisher' come da tuo percorso
    { name: "Project for Building", src: "/logos/logo-Project.png" },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* SEZIONE 1: LE ORIGINI & STORIA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Dal 1994
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
              Le Origini e il Successo
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed italic border-l-4 border-amber-500 pl-6">
              "LI-COSTRUZIONI nasce negli anni &apos;90 dalla volontà di Alfredo
              Iaboni; un uomo che ha trasformato la sua dedizione per il fare
              bene e la cura del dettaglio in un&apos;Impresa di successo."
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Oggi, quella maestria è stata tramandata ai figli{" "}
              <strong>Luca e Jessica Iaboni</strong> che continuano a migliorare
              questa solida realtà con nuove tecnologie.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-200">
              <div>
                <span className="text-4xl font-bold text-slate-900 block mb-1">
                  30+
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Anni di Esperienza
                </span>
              </div>
              <div>
                <span className="text-4xl font-bold text-slate-900 block mb-1">
                  100%
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Qualità Garantita
                </span>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 bg-slate-200">
            {teamImg && (
              <Image
                src={teamImg.imageUrl}
                alt="Maestria LI-COSTRUZIONI"
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </div>

        {/* SEZIONE 2: EDILIZIA IN ALTA DEFINIZIONE */}
        <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-20 mb-32 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-500">
              Edilizia in Alta Definizione
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Il principio su cui si fonda quest&apos;Azienda è l&apos;
              <strong>alta definizione</strong> in termini di cura del dettaglio
              ed assistenza continua.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Coinvolgimento diretto",
                "Scelta dei materiali migliori",
                "Maestria tecnica",
                "Occhio attento al particolare",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-500 h-6 w-6 shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEZIONE TEAM */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              I Volti dell&apos;Eccellenza
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                name: "Alfredo Iaboni",
                role: "Fondatore",
                phone: "339 3274092",
                src: "/team/alfredo.jpg",
              },
              {
                name: "Luca Iaboni",
                role: "Project Manager",
                phone: "324 8643886",
                src: "/team/luca.jpg",
              },
              {
                name: "Jessica Iaboni",
                role: "Ufficio Tecnico",
                phone: "389 5996660",
                src: "/team/jessica.jpg",
              },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center group">
                {/* Contenitore circolare piccolo: 128px o 150px al massimo */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-amber-500/20 shadow-sm transition-transform group-hover:scale-105">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover"
                    quality={100} // Forza Next.js a non comprimere ulteriormente
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-bold text-[10px] uppercase tracking-tighter mb-2">
                    {member.role}
                  </p>
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="text-slate-500 text-xs hover:text-amber-600 transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEZIONE 4: PARTNER & MATERIALI */}
        <div className="text-center mb-32">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 italic">
            L&apos;eccellenza del lavoro parte dai prodotti che utilizziamo.
          </h2>
          <p className="text-slate-500 mb-12 uppercase tracking-widest text-sm font-medium">
            I Nostri Partner Tecnici
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partners.map((partner, i) => (
              <PartnerLogo key={i} partner={partner} />
            ))}
          </div>
        </div>

        {/* CTA FINALE */}
        <div className="mt-32 text-center bg-slate-700 rounded-[3rem] p-12 md:p-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full -ml-32 -mt-32 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">
            Pronto a riscrivere lo standard della tua casa?
          </h2>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-3 bg-amber-500 text-slate-900 px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:scale-105 transition-all relative z-10 shadow-xl"
          >
            Contattaci per un sopralluogo
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
