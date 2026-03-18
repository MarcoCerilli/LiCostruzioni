"use client";

import { useState } from "react";
import { ImagePlaceholder, PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, Maximize2 } from "lucide-react";

// Lightbox setup
// @ts-ignore
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const projects = [
  {
    id: 1,
    title: "Ristrutturazione Appartamento Storico",
    city: "Roma",
    type: "Ristrutturazione",
    images: ["project-roma-1", "project-roma-2", "project-roma-3"],
  },
  {
    id: 2,
    title: "Struttura Ricettiva Fronte Mare",
    city: "Terracina",
    type: "Nuova Costruzione",
    images: [
      "project-terracina-1",
      "project-terracina-2",
      "project-terracina-3",
    ],
  },
  {
    id: 3,
    title: "Complesso Uffici High-Tech",
    city: "Latina",
    type: "Edilizia Commerciale",
    images: ["project-latina-1", "project-latina-2"],
  },
  {
    id: 4,
    title: "Manutenzione Facciata Condominiale",
    city: "Roma",
    type: "Manutenzione",
    images: ["project-roma-1"],
  },
  {
    id: 5,
    title: "Villa Unifamiliare",
    city: "Sabaudia",
    type: "Nuova Costruzione",
    images: ["project-sabaudia-1", "project-sabaudia-2", "project-sabaudia-3"],
  },
  {
    id: 6,
    title: "Recupero Rustico",
    city: "San Felice Circeo",
    type: "Ristrutturazione",
    images: [
      "project-sanfelice-1",
      "project-sanfelice-2",
      "project-sanfelice-3",
    ],
  },
];

export default function ProjectsPage() {
  const [activeCity] = useState("all");
  const [activeType] = useState("all");

  // Stati per la Lightbox
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);

  const filteredProjects = projects.filter(
    (p) =>
      (activeCity === "all" || p.city === activeCity) &&
      (activeType === "all" || p.type === activeType),
  );

  const cities = ["all", ...Array.from(new Set(projects.map((p) => p.city)))];
  const types = ["all", ...Array.from(new Set(projects.map((p) => p.type)))];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Portfolio */}
        <div className="text-center mb-20">
          <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">
            Opere che parlano di <span className="text-amber-500">Noi</span>
          </h1>
        </div>

        {/* --- Inizio Griglia Progetti --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => {
            // Recupera gli oggetti immagine completi per il progetto corrente
            const projectImages = project.images
              .map((id) => PlaceHolderImages.find((img) => img.id === id))
              .filter((img): img is ImagePlaceholder => !!img);

            const mainImage = projectImages[0] || PlaceHolderImages[0];

            return (
              <Card
                key={project.id}
                className="group overflow-hidden bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] cursor-pointer"
                onClick={() => {
                  // Prepara le slide per la lightbox con tutte le foto del progetto
                  const projectSlides = projectImages.map((img) => ({
                    src: img.imageUrl,
                  }));
                  setSlides(projectSlides);
                  setOpen(true);
                }}
              >
                {/* Contenitore Immagine */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={mainImage.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />

                  {/* Badge indicatore Numero Foto (appare solo se > 1) */}
                  {projectImages.length > 1 && (
                    <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-lg transition-transform group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
                      {projectImages.length} FOTO
                    </div>
                  )}

                  {/* Overlay Gradiente Base (Sotto i testi/icone) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />

                  {/* Icona Zoom (appare in Hover) */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 className="text-white w-6 h-6" />
                    </div>
                  </div>

                  {/* Badge Città (in basso a sinistra dell'immagine) */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <Badge
                      className="
      /* Stato Base */
      bg-amber-500 
      !text-slate-900     /* Forziamo il testo scuro di base */
      font-black 
      border-none 
      px-4 
      py-1 
      rounded-full 
      uppercase 
      text-[10px] 
      transition-colors 
      duration-300

      /* Stato Hover sulla Card (group-hover) */
      group-hover:!bg-white    /* Lo sfondo diventa bianco puro al passaggio del mouse */
      group-hover:!text-slate-900 /* Il testo rimane scuro e leggibile */
    "
                    >
                      {project.city}
                    </Badge>
                  </div>
                </div>

                {/* Contenuto Card */}
                <CardContent className="p-8">
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-3 block">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  {/* Linea decorativa animata */}
                  <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-amber-500 transition-all duration-500" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State: Nessun progetto trovato */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <LayoutGrid className="mx-auto h-12 w-12 text-slate-200 mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest">
              Nessun progetto trovato per i filtri selezionati.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox con Plugin Zoom per i dettagli */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
        animation={{ zoom: 500 }}
      />
    </div>
  );
}
