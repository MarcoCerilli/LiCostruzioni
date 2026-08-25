"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage = "/progetti/frosinone-cantiere-hd.jpg",
  afterImage = "/progetti/frosinone-ristorante-hd.jpg",
  beforeAlt = "Cantiere in corso prima del completamento",
  afterAlt = "Design Restaurant & Lounge completato con arredi d'autore",
  beforeLabel = "Stato Grezzo",
  afterLabel = "Locale Consegnato",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging || e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Contenitore Slider compatto e ultra-preciso con Pointer Events & Input nativo */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[360px] sm:max-h-[400px] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 select-none cursor-ew-resize touch-none group"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* ======================= IMMAGINE DOPO (Base) ======================= */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950 pointer-events-none">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center contrast-[1.04] brightness-[1.02]"
            priority
          />
          <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/20 text-white font-black text-[10px] uppercase tracking-widest shadow-xl pointer-events-none">
            {afterLabel}
          </div>
        </div>

        {/* ======================= IMMAGINE PRIMA (Clip a Sinistra) ======================= */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950 z-10 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center contrast-[1.04] brightness-[1.02]"
            priority
          />
          <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-widest shadow-xl pointer-events-none">
            {beforeLabel}
          </div>
        </div>

        {/* ======================= LINEA & CURSORE TRASCINAMENTO ======================= */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_16px_rgba(0,0,0,0.9)] z-20 pointer-events-none transition-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-slate-950 border-2 border-amber-500 text-amber-500 shadow-2xl flex items-center justify-center transition-transform ${isDragging ? "scale-115 bg-amber-500 text-slate-950" : "group-hover:scale-105"}`}>
            <MoveHorizontal size={18} strokeWidth={2.5} />
          </div>
        </div>

        {/* ======================= INPUT RANGE ACCESSIBILE ======================= */}
        <input
          type="range"
          min="0"
          max="100"
          step="0.5"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(parseFloat(e.target.value))}
          aria-label="Confronta prima e dopo i lavori"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-none"
        />
      </div>

      <p className="text-slate-500 text-xs text-center mt-3 font-medium flex items-center justify-center gap-1.5">
        <MoveHorizontal size={14} className="text-amber-600" />
        <span>Trascina il cursore per visualizzare l&apos;opera finita</span>
      </p>
    </div>
  );
}
