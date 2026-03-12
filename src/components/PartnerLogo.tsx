"use client"; // Fondamentale!

import { useState } from "react";

export function PartnerLogo({ partner }: { partner: { name: string; src: string } }) {
  const [error, setError] = useState(false);

  return (
    <div className="group flex justify-center items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 h-32 relative transition-all hover:scale-105 hover:shadow-lg">
      {!error ? (
        <img
          src={partner.src}
          alt={`Logo ${partner.name}`}
          className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
          onError={() => setError(true)} // Gestisce l'errore senza rompere il server
        />
      ) : (
        <span className="text-slate-400 font-bold text-xs uppercase text-center">
          {partner.name}
        </span>
      )}
    </div>
  );
}