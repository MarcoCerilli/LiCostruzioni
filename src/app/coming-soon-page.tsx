

import React from "react";
import Image from "next/image";
import { HardHat, Timer, Phone, MessageCircle, Mail } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex flex-col font-sans selection:bg-amber-500/30">
      
      {/* HEADER: Layout fluido per mobile */}
      <header className="w-full py-4 px-4 sm:px-8 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-white p-1 rounded-md shadow-sm">
              <Image
                src="/logo.png"
                alt="L.I - Costruzioni SRL"
                width={90}
                height={30}
                className="object-contain w-auto h-[25px] sm:h-[30px]"
                priority
              />
            </div>
            <div className="hidden xs:flex flex-col border-l border-white/10 pl-3 leading-none">
              <span className="text-[8px] font-black uppercase tracking-wider text-slate-500">Terracina</span>
              <span className="text-[8px] font-black uppercase tracking-wider text-slate-500">Roma • Latina</span>
            </div>
          </div>

          <a
            href="https://wa.me/393248643886"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg font-black uppercase text-[9px] sm:text-[10px] tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-amber-500/10 active:scale-95"
          >
            <MessageCircle size={14} />
            <span className="hidden xs:inline">Contatto Rapido</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* MAIN: Centratura migliorata e testi scalabili */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 w-full max-w-4xl mx-auto">
        
        {/* Badge Tecnico */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-500 mb-8 animate-pulse">
          <HardHat size={14} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Sito in costruzione</span>
        </div>

        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
            CANTIERE <br />
            <span className="text-amber-500 italic drop-shadow-2xl">IN CORSO</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base md:text-xl max-w-lg mx-auto leading-relaxed font-medium px-4">
            Stiamo definendo i dettagli della nostra nuova presenza digitale. 
            Il rigore tecnico di <span className="text-white border-b border-amber-500/50">L.I - Costruzioni</span> sta arrivando.
          </p>
        </div>

        {/* INFO GRID: Responsive da 1 a 2 colonne */}
        <div className="mt-12 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-3 backdrop-blur-sm">
            <Timer className="text-amber-500" size={28} />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-1">Apertura Online</p>
              <p className="text-xl font-black italic uppercase text-white">Marzo 2026</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-3 backdrop-blur-sm">
            <HardHat className="text-amber-500" size={28} />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-1">Sede Principale</p>
              <p className="text-xl font-black italic uppercase text-white">Terracina (LT)</p>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER: Più spazio e icone pulite */}
      <footer className="w-full py-8 px-6 border-t border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-white text-[10px] font-black uppercase tracking-widest">L.I - Costruzioni SRL</p>
            <p className="text-slate-600 text-[9px] font-medium tracking-tight">P.IVA 01234567890 • © 2026 Tutti i diritti riservati</p>
          </div>

          <div className="flex items-center gap-8">
           
            <a href="https://wa.me/393248643886" className="text-slate-400 hover:text-amber-500 transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}