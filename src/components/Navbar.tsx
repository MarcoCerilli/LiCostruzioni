"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Hammer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      isScrolled ? "bg-background/90 backdrop-blur-md border-b shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Hammer className="text-primary-foreground h-6 w-6" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tighter">
            LI-COSTRUZIONI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/servizi" className="text-sm font-medium hover:text-primary transition-colors">Servizi</Link>
          <Link href="/progetti" className="text-sm font-medium hover:text-primary transition-colors">Progetti</Link>
          <Link href="/chi-siamo" className="text-sm font-medium hover:text-primary transition-colors">Chi Siamo</Link>
          <Link href="/contatti" className="text-sm font-medium hover:text-primary transition-colors">Contatti</Link>
        </div>

        <Button asChild className="hidden sm:flex font-semibold shadow-md">
          <Link href="/contatti">Richiedi Preventivo</Link>
        </Button>
      </div>
    </nav>
  );
}
