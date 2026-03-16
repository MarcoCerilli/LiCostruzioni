"use client";

import React from "react";
import Image from "next/image";
import { HardHat, Timer, Phone, MessageCircle } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col font-sans">
      {/* HEADER COMPATTO */}
      <header className="py-4 px-6 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-md shadow-sm">
              <Image
                src="/logo.png"
                alt="L.I - Costruzioni SRL"
                width={110}
                height={35}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block border-l border-white/10 pl-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 block leading-tight">
                Terracina • Roma
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 block leading-tight">
                Latina
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/393248643886"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-xl font-bold uppercase text-[9px] tracking-widest transition-all flex items-center gap-2"
          >
            <MessageCircle size={14} className="text-amber-500" />
            Contatto Rapido
          </a>
        </div>
      </header>

      {/* BODY CENTRALE */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center py-10">
        <div className="space-y-6">
          {/* Badge Minore */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-500 mb-2">
            <HardHat size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">
              Area Tecnica
            </span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            CANTIERE <br />
            <span className="text-amber-500 italic">IN CORSO</span>
          </h2>

          <p className="text-slate-500 text-sm md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Stiamo ultimando la nuova piattaforma digitale. <br />
            L'eccellenza di{" "}
            <span className="text-slate-300 font-bold uppercase">
              L.I - Costruzioni
            </span>{" "}
            sarà presto online.
          </p>

          {/* BOX INFO STATUS - Più sottile */}
          <div className="mt-10 inline-grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-8 py-6 flex flex-col items-center space-y-2 bg-slate-950/40">
              <Timer className="text-amber-500/50" size={24} />
              <div className="flex flex-col">
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-600">
                  Lancio
                </span>
                <span className="text-lg font-black italic uppercase text-white">
                  Marzo 2026
                </span>
              </div>
            </div>
            <div className="px-8 py-6 flex flex-col items-center space-y-2 bg-slate-950/40 border-t md:border-t-0 md:border-l border-white/10">
              <HardHat className="text-amber-500/50" size={24} />
              <div className="flex flex-col">
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-600">
                  Location
                </span>
                <span className="text-lg font-black italic uppercase text-white">
                  Terracina (LT)
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER ESSENZIALE */}
      <footer className="py-6 px-10 flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-7xl mx-auto border-t border-white/5">
        <p className="text-slate-600 text-[8px] font-bold tracking-[0.4em] uppercase">
          © 2026 L.I - Costruzioni SRL
        </p>

        <div className="flex gap-6 items-center"></div>
      </footer>
    </div>
  );
}
