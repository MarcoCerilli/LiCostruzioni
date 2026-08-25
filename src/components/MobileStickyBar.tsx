"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+393248643886"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          aria-label="Chiama lo studio tecnico"
        >
          <Phone size={18} className="text-amber-500 mb-1" />
          <span className="text-[10px] font-black uppercase tracking-tight">Chiama</span>
        </a>

        <a
          href="https://wa.me/393248643886?text=Salve%2C%20vorrei%20informazioni%20per%20un%20sopralluogo%20tecnico%20con%20L.I-Costruzioni"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
          aria-label="Scrivi su WhatsApp"
        >
          <WhatsAppIcon className="h-5 w-5 text-emerald-400 mb-1 fill-current" />
          <span className="text-[10px] font-black uppercase tracking-tight">WhatsApp</span>
        </a>

        <Link
          href="/contatti"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors font-black"
          aria-label="Richiedi sopralluogo gratuito"
        >
          <Calendar size={18} className="text-slate-950 mb-1" />
          <span className="text-[10px] font-black uppercase tracking-tight">Preventivo</span>
        </Link>
      </div>
    </div>
  );
}
