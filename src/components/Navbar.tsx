"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const logo = PlaceHolderImages.find(img => img.id === 'logo-aziendale');

  const isDarkHeroPage = pathname === '/' || pathname.startsWith('/servizi/');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isDarkHeroPage && !isScrolled;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Servizi", href: "/servizi" },
    { name: "Progetti", href: "/progetti" },
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Contatti", href: "/contatti" },
  ];


  return (
    <nav 
      aria-label="Navigazione Principale" // SEO & Accessibilità
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
        isTransparent 
          ? "bg-transparent py-7" 
          : "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-md py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO - Titolo H1 rimosso (va solo nella Hero), usiamo una classe per il brand */}
        <Link href="/" className="flex items-center gap-4 group shrink-0" aria-label="Torna alla Home">
          <div className={cn(
            "relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 group-hover:rotate-3 transition-all duration-500 bg-white",
            isTransparent ? "h-14 w-14 md:h-16 md:w-16" : "h-12 w-12 md:h-14 md:w-14"
          )}>
            {logo && (
              <Image 
                src={logo.imageUrl} 
                alt="LI-COSTRUZIONI - Impresa Edile specializzata in ristrutturazioni a Terracina, Roma e Latina" // Keyword incluse
                fill 
                className="object-contain p-2"
                priority
              />
            )}
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-black tracking-tighter transition-all leading-none",
              isTransparent ? "text-xl md:text-2xl text-white" : "text-lg md:text-xl text-slate-900"
            )}>
              LI-COSTRUZIONI <span className="text-amber-500">SRL</span>
            </span>
            {/* Tagline locale - Ottima per la Local SEO */}
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-[0.35em] transition-all duration-500",
              isTransparent ? "text-slate-200 mt-2" : "text-slate-500 mt-1",
              isScrolled && "opacity-0 h-0 invisible" // Aggiunto invisible per accessibilità
            )}>
              Terracina · Roma · Latina
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP - Ora con struttura a lista per Google */}
        <ul className={cn(
          "hidden md:flex items-center gap-10 font-bold",
          isTransparent ? "text-white/95" : "text-slate-700"
        )}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}> {/* Tag li aggiunto */}
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-sm uppercase tracking-wide relative py-1 transition-colors hover:text-amber-500 group/link",
                    isActive && (isTransparent ? "text-amber-400" : "text-amber-600")
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-amber-500 transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover/link:w-full"
                  )} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button 
            asChild 
            className={cn(
              "hidden sm:flex font-black text-[10px] uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 rounded-full px-8 h-12",
              isTransparent 
                ? "bg-amber-500 text-slate-900 hover:bg-white" 
                : "bg-slate-900 text-white hover:bg-amber-600 shadow-slate-200"
            )}
          >
            {/* Titolo nel link CTA per chiarezza */}
            <Link href="/contatti" title="Richiedi un preventivo gratuito per la tua ristrutturazione">
              Preventivo Libero
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}