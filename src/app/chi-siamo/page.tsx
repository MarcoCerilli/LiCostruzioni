"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { ArrowRight, Phone, HardHat, Ruler, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          /* RIMOSSO grayscale e opacity-40 */
          className="object-contain p-4 transition-all"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-slate-400 font-bold text-[10px] uppercase italic text-center">{partner.name}</span>
      )}
    </div>
  );
}

export default function AboutPage() {
  const storiaImg = PlaceHolderImages.find((img) => img.id === "storia-azienda");

  const team = [
    { name: "Alfredo Iaboni", phone: "339 3274092", role: "technical", src: "/team/alfredo.png" },
    { name: "Luca Iaboni", phone: "324 8643886", role: "design", src: "/team/luca.png" },
    { name: "Jessica Iaboni", phone: "389 5996660", role: "admin", src: "/team/jessica.png" },
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
    <main className="pt-24 pb-16 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-6xl mx-auto">

        {/* SEZIONE 1: STORIA & SEO TERRITORIALE */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-amber-600 font-black uppercase tracking-widest text-[9px] mb-3 flex items-center gap-2">
              <MapPin size={12} strokeWidth={3} /> Eccellenza Edile nel Lazio
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tighter uppercase leading-tight">
              Oltre trent&apos;anni di <br /> <span className="text-amber-500">Valore al Territorio.</span>
            </h1>
            <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-lg">
              L.I-Costruzioni rappresenta il punto di riferimento per le <strong>ristrutturazioni d&apos;élite nel Lazio</strong>. Portiamo l&apos;artigianato d&apos;avanguardia in tutta la <strong>provincia di Latina e Roma</strong>, garantendo standard qualitativi superiori.
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

        {/* TEAM - Avatar Rimpiccioliti */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase italic">La Direzione Tecnica</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center group">
                {/* Contenitore Avatar più piccolo: w-48 invece di w-full */}
                <div className="relative w-48 aspect-square rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg transition-all group-hover:border-amber-500 bg-white flex items-center justify-center">
                  <Image
                    src={member.src}
                    alt={`${member.name} - Team L.I-Costruzioni`}
                    width={140}
                    height={140}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Badge Ruolo */}
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#1a1c25] text-amber-500 rounded-lg flex items-center justify-center shadow-md">
                    {member.role === 'technical' && <HardHat size={16} />}
                    {member.role === 'design' && <Ruler size={16} />}
                    {member.role === 'admin' && <Briefcase size={16} />}
                  </div>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{member.name}</h3>
                <a href={`tel:${member.phone}`} className="text-slate-500 font-bold text-xs hover:text-amber-600 transition-colors flex items-center gap-2">
                  <Phone size={12} className="text-amber-500" /> {member.phone}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24 px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((p, i) => (
              <PartnerLogo key={i} partner={p} />
            ))}
          </div>
        </section>

        {/* CTA - Compatta */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-[#1a1c25] rounded-[2.5rem] p-10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%"><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" /></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-8 leading-none relative z-10">
              Progetta il tuo spazio <br /> <span className="text-amber-500 italic">nel Lazio.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button size="lg" className="h-14 px-8 bg-amber-500 text-[#1a1c25] hover:bg-white hover:text-[#1a1c25] font-black rounded-xl shadow-lg transition-all group uppercase tracking-widest text-sm" asChild>
                <Link href="/contatti" className="flex items-center gap-2">
                  Richiedi Sopralluogo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}