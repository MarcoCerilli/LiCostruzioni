"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { ArrowRight, Phone, HardHat, Ruler, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- COMPONENTI INTERNI ---

function PartnerLogo({ partner }: { partner: { name: string; src: string } }) {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="group flex justify-center items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 h-32 relative transition-all hover:shadow-md hover:scale-105">
      {!hasError ? (
        <Image
          src={partner.src}
          alt={partner.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-contain p-4 transition-all"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-slate-400 font-bold text-[10px] uppercase italic text-center">{partner.name}</span>
      )}
    </div>
  );
}

// --- PAGINA PRINCIPALE ---

export default function AboutPage() {
  const storiaImg = PlaceHolderImages.find((img) => img.id === "storia-azienda");

  const team = [
    { 
      name: "Alfredo Iaboni", 
      phone: "339 3274092", 
      role: "technical", 
      src: "/team/alfredo.png" 
    },
    { 
      name: "Luca Iaboni", 
      phone: "324 8643886", 
      role: "design", 
      src: "/team/luca.png" 
    },
    { 
      name: "Jessica Iaboni", 
      phone: "389 5996660", 
      role: "admin", 
      src: "/team/jessica.png" 
    },
  ];

  const partners = [
    { name: "Mapei", src: "/logos/mapei.png" },
    { name: "Kerakoll", src: "/logos/kerakoll.png" },
    { name: "Gyproc", src: "/logos/gyproc.png" },
    { name: "Fassa Bortolo", src: "/logos/fassa.png" },
    { name: "Fischer", src: "/logos/fisher.png" },
    { name: "Project", src: "/logos/logo-Project.png" },
  ];

  return (
    /* Aumentato il padding-top per staccarsi dall'header fixed */
    <main className="pt-32 lg:pt-48 pb-16 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-6xl mx-auto">

        {/* SEZIONE 1: STORIA */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-amber-600 font-black uppercase tracking-widest text-[9px] mb-3 flex items-center gap-2">
              <MapPin size={12} strokeWidth={3} /> Eccellenza Edile nel Lazio
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tighter uppercase leading-tight">
              Oltre trent&apos;anni di <br /> <span className="text-amber-500">Valore al Territorio.</span>
            </h1>
            <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-lg">
              L.I-Costruzioni rappresenta il punto di riferimento per le <strong>ristrutturazioni d&apos;élite nel Lazio</strong>. Portiamo l&apos;artigianato d&apos;avanguardia in tutta la <strong>provincia di Latina e Roma</strong>.
            </p>
            <div className="flex gap-8 py-6 border-t border-slate-200">
              <div>
                <p className="text-3xl font-black text-slate-900">30+</p>
                <p className="text-[9px] font-bold uppercase tracking-tight text-amber-600">Anni di Esperienza</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">100%</p>
                <p className="text-[9px] font-bold uppercase tracking-tight text-amber-600">Qualità Certificata</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-[1.3/1] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2 border-8 border-white bg-slate-200">
            {storiaImg && <Image src={storiaImg.imageUrl} alt="Impresa Edile Lazio" fill className="object-cover" priority />}
          </div>
        </section>

        {/* TEAM */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase italic">La Direzione Tecnica</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center group">
                {/* Contenitore Immagine con Badge Icona */}
                <div className="relative w-48 aspect-square rounded-full mb-6 transition-all group-hover:scale-105">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-white z-0 group-hover:border-amber-500 transition-colors">
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      sizes="192px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Badge Icona sovrapposto alla foto */}
                  <div className="absolute bottom-2 right-2 w-10 h-10 bg-slate-900 text-amber-500 rounded-xl flex items-center justify-center shadow-lg border-2 border-white z-10 transition-transform group-hover:rotate-12">
                    {member.role === 'technical' && <HardHat size={20} />}
                    {member.role === 'design' && <Ruler size={20} />}
                    {member.role === 'admin' && <Briefcase size={20} />}
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-amber-600 font-bold text-[10px] uppercase tracking-widest mb-3">
                    {member.role === 'technical' ? 'Responsabile Tecnico' : member.role === 'design' ? 'Interior Designer' : 'Amministrazione'}
                </p>
                <a href={`tel:${member.phone}`} className="inline-flex gap-2 items-center text-slate-500 font-bold text-xs hover:text-amber-600 transition-colors border border-slate-200 px-4 py-2 rounded-full bg-white">
                  <Phone size={12} className="text-amber-500" /> {member.phone}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERS */}
        <section className="mb-24 px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((p, i) => (
              <PartnerLogo key={i} partner={p} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto pb-12">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-center shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-8 relative z-10">
              Progetta il tuo spazio <br /> <span className="text-amber-500 italic">nel Lazio.</span>
            </h2>
            <Button size="lg" className="bg-amber-500 text-slate-900 hover:bg-white font-black rounded-xl uppercase tracking-widest text-sm relative z-10" asChild>
              <Link href="/contatti" className="flex items-center gap-2">
                Richiedi Sopralluogo <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}