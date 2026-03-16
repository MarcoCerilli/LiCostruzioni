"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Menu, X, ChevronRight } from "lucide-react"; // Importati per il toggle

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Stato per il toggle
  const pathname = usePathname();
  const logo = PlaceHolderImages.find((img) => img.id === "logo-aziendale");

  const isDarkHeroPage = pathname === "/" || pathname.startsWith("/servizi/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chiudi il menu mobile al cambio di rotta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isTransparent = isDarkHeroPage && !isScrolled && !isMobileMenuOpen;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Servizi", href: "/servizi" },
    { name: "Progetti", href: "/progetti" },
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Contatti", href: "/contatti" },
  ];

  return (
    <>
      <nav
        aria-label="Navigazione Principale"
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
          isTransparent
            ? "bg-transparent py-7"
            : "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-md py-4",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-4 group shrink-0"
            aria-label="Torna alla Home"
          >
            <div
              className={cn(
                "relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 group-hover:rotate-3 transition-all duration-500 bg-white",
                isTransparent
                  ? "h-14 w-14 md:h-16 md:w-16"
                  : "h-12 w-12 md:h-14 md:w-14",
              )}
            >
              {logo && (
                <Image
                  src={logo.imageUrl}
                  alt="L.I-Costruzioni - Ristrutturazioni Terracina"
                  fill
                  className="object-contain p-2"
                  priority
                />
              )}
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-black tracking-tighter transition-all leading-none",
                  isTransparent
                    ? "text-xl md:text-2xl text-white"
                    : "text-lg md:text-xl text-slate-900",
                )}
              >
                L.I - Costruzioni <span className="text-amber-500">SRL</span>
              </span>
              <span
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.35em] transition-all duration-500",
                  isTransparent ? "text-slate-200 mt-2" : "text-slate-500 mt-1",
                  isScrolled && "opacity-0 h-0 invisible",
                )}
              >
                Terracina · Roma · Latina
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <ul
            className={cn(
              "hidden md:flex items-center gap-10 font-bold",
              isTransparent ? "text-white/95" : "text-slate-700",
            )}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm uppercase tracking-wide relative py-1 transition-colors hover:text-amber-500 group/link",
                      isActive &&
                        (isTransparent ? "text-amber-400" : "text-amber-600"),
                    )}
                  >
                    {link.name}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-[2px] bg-amber-500 transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover/link:w-full",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA & TOGGLE MOBILE */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className={cn(
                "hidden sm:flex font-black text-[10px] uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 rounded-full px-8 h-12",
                isTransparent
                  ? "bg-amber-500 text-slate-900 hover:bg-white hover:text-slate-900" // Aggiunto hover esplicito
                  : "bg-slate-900 text-white hover:bg-amber-600 hover:text-white shadow-slate-200", // Aggiunto hover esplicito
              )}
            >
              <Link href="/contatti">Richiedi un preventivo</Link>
            </Button>

            {/* BOTTONE HAMBURGER */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg md:hidden transition-colors",
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-slate-900 hover:bg-slate-100",
              )}
              aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 z-[90] bg-white transition-all duration-500 ease-in-out md:hidden flex flex-col pt-32 px-8",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <ul className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-slate-100 pb-4">
              <Link
                href={link.href}
                className="flex items-center justify-between group"
              >
                <span
                  className={cn(
                    "text-3xl font-black tracking-tighter transition-colors",
                    pathname === link.href
                      ? "text-amber-600"
                      : "text-slate-900",
                  )}
                >
                  {link.name}
                </span>
                <ChevronRight className="text-amber-500 group-hover:translate-x-2 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto mb-12 space-y-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            Contatti Diretti
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+393248643886"
              className="text-xl font-bold text-slate-900"
            >
              Cell: 324.8643886 Luca
            </a>
            <p className="text-slate-500">info@licostruzionisrl.it</p>
          </div>
          <Button
            className="w-full bg-amber-500 text-slate-900 font-black py-8 rounded-2xl text-lg shadow-lg shadow-amber-200/50 hover:bg-slate-900 hover:text-amber-500 active:scale-95 transition-all duration-300 border-none"
            asChild
          >
            <Link href="/contatti">Richiedi Sopralluogo</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
