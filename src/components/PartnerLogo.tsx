"use client";

import { useState } from "react";

export function PartnerLogo({ partner }: { partner: { name: string; src: string } }) {
  const [error, setError] = useState(false);

  return (
    <div className="flex justify-center items-center p-6 bg-white rounded-3xl shadow-md border border-slate-200 h-44 w-full transition-transform hover:scale-105">
      {!error ? (
        <img
          src={partner.src}
          alt={`Logo ${partner.name}`}
          /* IMPORTANTE: Ho rimosso ogni riferimento a 'grayscale' e 'opacity'.
             L'immagine ora è visualizzata esattamente nei suoi colori originali.
          */
          className="w-full h-full object-contain display-block" 
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-slate-400 font-bold text-sm uppercase text-center px-2">
          {partner.name}
        </span>
      )}
    </div>
  );
}