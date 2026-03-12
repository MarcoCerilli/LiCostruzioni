
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'logo-aziendale');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md border-b shadow-lg py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform">
            {logo && (
              <Image 
                src={logo.imageUrl} 
                alt="LI-COSTRUZIONI Logo" 
                fill 
                className="object-cover"
                data-ai-hint={logo.imageHint}
              />
            )}
          </div>
          <span className={cn(
            "font-headline font-extrabold text-xl tracking-tighter transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}>
            LI-COSTRUZIONI
          </span>
        </Link>

        <div className={cn(
          "hidden md:flex items-center gap-8 font-semibold",
          isScrolled ? "text-primary" : "text-white/90"
        )}>
          <Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link>
          <Link href="/servizi" className="text-sm hover:text-accent transition-colors">Servizi</Link>
          <Link href="/progetti" className="text-sm hover:text-accent transition-colors">Progetti</Link>
          <Link href="/chi-siamo" className="text-sm hover:text-accent transition-colors">Chi Siamo</Link>
          <Link href="/contatti" className="text-sm hover:text-accent transition-colors">Contatti</Link>
        </div>

        <Button asChild className="hidden sm:flex font-bold shadow-lg hover:bg-accent hover:text-accent-foreground transition-all" variant={isScrolled ? "default" : "secondary"}>
          <Link href="/contatti">Richiedi Preventivo</Link>
        </Button>
      </div>
    </nav>
  );
}
