"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- SOTTO-COMPONENTE PER I PARTNER ---
function PartnerLogo({ partner }: { partner: { name: string; src: string } }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group flex justify-center items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 h-32 relative transition-all hover:shadow-md">
      {!hasError ? (
        <Image
          src={partner.src}
          alt={`Partner Tecnico LI-COSTRUZIONI: ${partner.name}`}
          fill
          sizes="(max-width: 768px) 50vw, 15vw"
          className="object-contain p-6 grayscale hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-slate-400 font-bold text-xs uppercase text-center italic">
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

  const partners = [
    { name: "Mapei", src: "/logos/mapei.png" },
    { name: "Kerakoll", src: "/logos/kerakoll.png" },
    { name: "Gyproc", src: "/logos/gyproc.png" },
    { name: "Fassa Bortolo", src: "/logos/fassa.png" },
    { name: "Fischer", src: "/logos/fisher.png" },
    { name: "Project for Building", src: "/logos/logo-Project.png" },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {/* SEZIONE 1: STORIA & VALORI */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
          <div className="order-2 lg:order-1">
            <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Eredità Artigiana dal 1994
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter">
              Dall&apos;idea al <br />
              <span className="text-amber-500">Cantiere Perfetto.</span>
            </h1>
            <blockquote className="text-xl text-slate-600 mb-8 leading-relaxed italic border-l-4 border-amber-500 pl-8 py-2">
              &quot;LI-COSTRUZIONI nasce dall&apos;ambizione di Alfredo Iaboni:
              trasformare la dedizione per il fare bene in una solida realtà
              imprenditoriale nel Lazio.&quot;
            </blockquote>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Oggi la tradizione incontra l&apos;innovazione con{" "}
              <strong>Luca e Jessica Iaboni</strong>. Gestiamo ogni progetto con
              tecnologie all&apos;avanguardia, mantenendo intatta quella cura
              del dettaglio che ci ha resi un punto di riferimento tra{" "}
              <strong>Terracina, Latina e Roma</strong>.
            </p>

            <div className="grid grid-cols-2 gap-12 py-10 border-t border-slate-200">
              <div>
                <p className="text-5xl font-black text-slate-900 tracking-tighter">
                  30+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mt-2">
                  Anni di Attività
                </p>
              </div>
              <div>
                <p className="text-5xl font-black text-slate-900 tracking-tighter">
                  100%
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mt-2">
                  Finiture d&apos;Elite
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-3xl order-1 lg:order-2 border-[12px] border-white">
            {teamImg && (
              <Image
                src={teamImg.imageUrl}
                alt="Maestria artigianale LI-COSTRUZIONI - Dettaglio cantiere"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            )}
          </div>
        </section>

        {/* SEZIONE 2: ALTA DEFINIZIONE EDILIZIA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 mb-40 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
                Edilizia in{" "}
                <span className="text-amber-500 uppercase">
                  Alta Definizione
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
                Il nostro metodo si basa sulla trasparenza totale. Non
                costruiamo solo pareti, ma creiamo ambienti dove ogni giuntura,
                ogni materiale e ogni finitura parla di eccellenza.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Coinvolgimento diretto proprietari",
                  "Selezione certificata materiali",
                  "Maestria tecnica certificata",
                  "Assistenza post-consegna",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber-500 h-5 w-5 shrink-0" />
                    <span className="text-slate-200 font-bold text-sm uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-full h-[1px] lg:h-40 lg:w-[1px] bg-slate-800" />
              <div className="px-10 text-center">
                <p className="text-amber-500 font-black text-6xl mb-2">SOA</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
                  Certificazione Lavori Pubblici
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEZIONE TEAM: I VOLTI */}
        {/*   <section className="mb-40">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Il Cuore dell&apos;Azienda</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">La Direzione Tecnica</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "Alfredo Iaboni", role: "Fondatore & Vision", phone: "339 3274092", src: "/team/alfredo.jpg" },
              { name: "Luca Iaboni", role: "Project Manager", phone: "324 8643886", src: "/team/luca.jpg" },
              { name: "Jessica Iaboni", role: "Responsabile Uff. Tecnico", phone: "389 5996660", src: "/team/jessica.jpg" },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center group text-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl group-hover:border-amber-500 transition-all duration-500">
                  <Image
                    src={member.src}
                    alt={`${member.name} - ${member.role} LI-COSTRUZIONI`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{member.name}</h3>
                <p className="text-amber-600 font-black text-[10px] uppercase tracking-widest mt-1 mb-4">{member.role}</p>
                <a
                  href={`tel:${member.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors py-2 px-4 rounded-full bg-slate-100 group-hover:bg-amber-100"
                  title={`Chiama ${member.name}`}
                >
                  <Phone className="h-3 w-3" />
                  {member.phone}
                </a>
              </div>
            ))}
          </div>
        </section> */}

        {/* SEZIONE PARTNER */}
        <section className="mb-40">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black text-slate-900 mb-2 italic">
              Solo il meglio per i nostri cantieri.
            </h2>
            <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-bold">
              Top Brand & Fornitori Tecnici
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {partners.map((partner, i) => (
              <PartnerLogo key={i} partner={partner} />
            ))}
          </div>
        </section>

        {/* CTA FINALE - Compact & Balanced */}
        <section className="relative max-w-4xl mx-auto mt-20 mb-16 px-4">
          <div className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-14 text-center shadow-sm relative overflow-hidden">
            {/* Soft Glow Ambientale */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-900/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-10">
                Pronto a costruire il <br />
                <span className="text-amber-500 italic">tuo futuro?</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                {/* PRIMARIO: Nero -> Giallo in Hover */}
                <Button
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 font-black px-10 h-16 rounded-2xl shadow-xl transition-all duration-300 text-lg group w-full sm:w-auto uppercase tracking-tighter"
                  asChild
                >
                  <Link href="/contatti" className="flex items-center gap-3">
                    Prenota Sopralluogo
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                {/* SECONDARIO: Bianco/Trasparente -> Solo il bordo e il testo cambiano (Niente fondo scuro) */}
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-200 bg-transparent text-slate-500 hover:border-amber-500 hover:text-amber-600 hover:bg-transparent font-black h-16 px-10 rounded-2xl text-lg transition-all duration-300 w-full sm:w-auto uppercase tracking-tighter shadow-none"
                  asChild
                >
                  <Link href="/progetti">Vedi Lavori</Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-amber-500" />
                </span>
                <span className="hidden sm:block text-slate-200">|</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-amber-500" />
                  Risposta in 24h
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
