"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  HardHat,
  Ruler,
  Briefcase,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- COMPONENTI INTERNI ---

function PartnerLogo({ partner }: { partner: { name: string; src: string } }) {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="group flex justify-center items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 h-28 relative transition-all hover:shadow-md hover:scale-105">
      {!hasError ? (
        <Image
          src={partner.src}
          alt={partner.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-contain p-4 transition-all grayscale group-hover:grayscale-0"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-slate-400 font-bold text-[10px] uppercase italic text-center">
          {partner.name}
        </span>
      )}
    </div>
  );
}

function TeamMemberCard({
  member,
}: {
  member: {
    name: string;
    phone: string;
    roleTitle: string;
    role: "technical" | "design" | "admin";
    src: string;
  };
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex flex-col items-center group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      {/* Contenitore Immagine con Badge Icona */}
      <div className="relative w-40 aspect-square rounded-full mb-5 transition-all group-hover:scale-105">
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-100 shadow-lg bg-slate-100 z-0 group-hover:border-amber-500 transition-colors">
          {!hasError ? (
            <Image
              src={member.src}
              alt={member.name}
              fill
              sizes="160px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              onError={() => setHasError(true)}
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
              <User size={48} />
            </div>
          )}
        </div>

        {/* Badge Icona Sovrapposto */}
        <div className="absolute bottom-1 right-1 w-9 h-9 bg-slate-950 text-amber-500 rounded-xl flex items-center justify-center shadow-lg border-2 border-white z-10 transition-transform group-hover:rotate-12">
          {member.role === "technical" && <HardHat size={18} />}
          {member.role === "design" && <Ruler size={18} />}
          {member.role === "admin" && <Briefcase size={18} />}
        </div>
      </div>

      <h3 className="text-lg font-black text-slate-900 mb-1 uppercase tracking-tight text-center">
        {member.name}
      </h3>
      <p className="text-amber-600 font-black text-[10px] uppercase tracking-widest mb-4 text-center">
        {member.roleTitle}
      </p>

      {/* Contatti Rapidi */}
      <div className="flex items-center gap-2 mt-auto w-full justify-center">
        <a
          href={`tel:${member.phone.replace(/\s+/g, "")}`}
          className="inline-flex gap-1.5 items-center text-slate-700 font-bold text-xs hover:text-amber-600 transition-colors border border-slate-200 px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-white"
          aria-label={`Chiama ${member.name}`}
        >
          <Phone size={12} className="text-amber-500" />
          <span>{member.phone}</span>
        </a>

        <a
          href={`https://wa.me/39${member.phone.replace(/\s+/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-500 hover:text-white transition-colors"
          aria-label={`Scrivi a ${member.name} su WhatsApp`}
        >
          <WhatsAppIcon className="h-4 w-4 fill-current" />
        </a>
      </div>
    </div>
  );
}

// --- PAGINA PRINCIPALE ---

export default function AboutPage() {
  const storiaImg = PlaceHolderImages.find((img) => img.id === "storia-azienda");

  const team: Array<{
    name: string;
    phone: string;
    roleTitle: string;
    role: "technical" | "design" | "admin";
    src: string;
  }> = [
    {
      name: "Alfredo Iaboni",
      phone: "339 3274092",
      roleTitle: "Direzione Tecnica Cantieri",
      role: "technical",
      src: "/team/avatar-alfredo.jpg",
    },
    {
      name: "Luca Iaboni",
      phone: "324 8643886",
      roleTitle: "Interior Design & Progetti",
      role: "design",
      src: "/team/avatar-luca.jpg",
    },
    {
      name: "Jessica Iaboni",
      phone: "389 5996660",
      roleTitle: "Amministrazione & Contratti",
      role: "admin",
      src: "/team/avatar-jessica.jpg",
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
    <main className="pt-28 md:pt-36 pb-20 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* SEZIONE 1: STORIA */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 space-y-6">
            <span className="text-amber-600 font-black uppercase tracking-widest text-[10px] flex items-center gap-2">
              <Sparkles size={13} /> Oltre 30 Anni di Storia
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
              L&apos;Ingegneria del Costruire, <br />
              <span className="text-amber-500">La Passione del Creare.</span>
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-lg">
              L.I-Costruzioni rappresenta un punto di riferimento per l&apos;edilizia di pregio nel Lazio.
              Uniamo maestranze interne specializzate, attrezzature moderne di proprietà e attestazione <strong>SOA N. 8148/69/07</strong> per garantire solidità, rispetto dei tempi e trasparenza economica.
            </p>

            <div className="flex flex-wrap gap-8 py-6 border-t border-slate-200">
              <div>
                <p className="text-3xl font-black text-slate-900">30+</p>
                <p className="text-[10px] font-bold uppercase tracking-tight text-amber-600">
                  Anni di Esperienza
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">SOA</p>
                <p className="text-[10px] font-bold uppercase tracking-tight text-amber-600">
                  N. 8148/69/07
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-tight text-amber-600">
                  Qualità Certificata
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[1.2/1] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 border-4 border-white bg-slate-200">
            {storiaImg && (
              <Image
                src={storiaImg.imageUrl}
                alt="Radici e Cantiere L.I-Costruzioni"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            )}
          </div>
        </section>

        {/* SEZIONE 2: LA DIREZIONE TECNICA & AVATAR TEAM */}
        <section className="mb-24">
          <div className="text-center mb-14 space-y-3">
            <span className="text-amber-600 font-black uppercase tracking-widest text-[10px] block">
              Leadership & Competenze
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">
              La Direzione Tecnica
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              I referenti diretti per ogni fase del cantiere, dalla progettazione ingegneristica alla consegna delle chiavi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <TeamMemberCard key={i} member={member} />
            ))}
          </div>
        </section>

        {/* SEZIONE 3: PARTNER & FORNITORI CERTIFICATI */}
        <section className="mb-24 px-4">
          <div className="text-center mb-10">
            <span className="text-slate-400 font-black uppercase tracking-[0.25em] text-[10px] block mb-2">
              Qualità dei Materiali
            </span>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
              Partner Tecnici & Fornitori Selezionati
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p, i) => (
              <PartnerLogo key={i} partner={p} />
            ))}
          </div>
        </section>

        {/* SEZIONE 4: CTA CONTATTI */}
        <section className="max-w-4xl mx-auto pb-12">
          <div className="bg-slate-950 rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_70%)]" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">
                Inizia il tuo Progetto con <br />
                <span className="text-amber-500">L.I-Costruzioni</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
                Prenota un sopralluogo tecnico gratuito direttamente con la nostra direzione lavori.
              </p>
              <Button
                size="lg"
                className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-black rounded-xl uppercase tracking-widest text-xs h-13 px-8 shadow-xl shadow-amber-500/20"
                asChild
              >
                <Link href="/contatti" className="flex items-center gap-2">
                  Richiedi Sopralluogo <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}