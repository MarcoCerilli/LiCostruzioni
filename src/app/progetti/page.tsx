"use client";

import { useState } from "react";
import { ImagePlaceholder, PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, Maximize2, MapPin } from "lucide-react";

// Lightbox setup
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// Definizione progetti (manteniamo la tua lista aggiornata)
const projects = [
  {
    id: 1,
    title: "Sistemi Radianti & Nuove Costruzioni",
    city: "Roma",
    type: "Innovazione Energetica",
    images: ["radiante-roma-3", "radiante-roma-2", "radiante-roma-1"],
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
    title: "Efficientamento Energetico & Cappotto Termico",
    city: "Latina",
    type: "Sostenibilità / Commerciale",
    images: ["project-latina-1", "project-latina-2"],
  },
  {
    id: 4,
    title: "Rifacimento Tetto",
    city: "Terracina",
    type: "Ristrutturazione",
    images: [
      "terracina-1",
      "terracina-2",
      "terracina-3",
      "terracina-4",
      "terracina-5",
    ],
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
  {
    id: 7,
    title: "Ristrutturazione Design Restaurant & Lounge",
    city: "Frosinone", // O la città corretta
    type: "Edilizia Commerciale",
    images: [
      "project-frosinone-1",
      "project-frosinone-2",
      "project-frosinone-3",
    ],
  },
  {
    id: 8,
    title: "Restyling Moderno Villa",
    city: "Itri",
    type: "Ristrutturazione",
    images: ["project-itri-1", "project-itri-2"],
  },
  {
    id: 9,
    title: "Rifacimento Terrazzo Privato",
    city: "Terracina",
    type: "Ristrutturazione Esterna",
    images: [
      "terrazzo-terracina-1",
      "terrazzo-terracina-2",
      "terrazzo-terracina-3",
    ],
  },

  {
    id: 10,
    title: "Interior Design & Panoramic Penthouse",
    city: "Itri",
    type: "Ristrutturazione Totale",
    images: [
      "appartamento-itri-1",
      "appartamento-itri-2",
      "appartamento-itri-3",
    ],
  },
  {
    id: 11,
    title: "Work in Progress: Restyling Totale",
    city: "Roma",
    type: "Cantiere / Interni",
    images: [
      "cantiere-roma-1", // Foto con l'arco e l'operatore
      "cantiere-roma-2", // Foto degli impianti e tracce a muro
      "cantiere-roma-3", // Foto della vasca in fase di muratura
    ],
  },
  {
    id: 12,
    title: "Restyling Viale d'Ingresso & Outdoor",
    city: "Latina",
    type: "Ristrutturazione Esterna",
    images: [
      "viale-latina-1",
      "viale-latina-2", // Foto del "Prima e Dopo"
    ],
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("Tutti");
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);

  const cities = ["Tutti", ...Array.from(new Set(projects.map((p) => p.city)))];

  const filteredProjects =
    filter === "Tutti" ? projects : projects.filter((p) => p.city === filter);

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Portfolio */}
        <header className="text-center mb-12">
          <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">
            Opere che parlano di <span className="text-amber-500">Noi</span>
          </h1>

          {/* Filtri Dinamici */}
          <nav
            className="flex flex-wrap justify-center gap-2 mt-8"
            aria-label="Filtra progetti per città"
          >
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setFilter(city)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                  filter === city
                    ? "bg-slate-900 border-slate-900 text-amber-500 shadow-lg scale-105"
                    : "bg-white border-slate-200 text-slate-500 hover:border-amber-500 hover:text-amber-600"
                }`}
              >
                {city}
              </button>
            ))}
          </nav>
        </header>

        {/* Griglia Progetti */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const projectImages = project.images
              .map((id) => PlaceHolderImages.find((img) => img.id === id))
              .filter((img): img is ImagePlaceholder => !!img);

            const mainImage = projectImages[0] || PlaceHolderImages[0];

            return (
              <Card
                key={project.id}
                className="group overflow-hidden bg-white border-none shadow-md hover:shadow-2xl transition-all duration-500 rounded-[2rem] cursor-pointer"
                onClick={() => {
                  setSlides(
                    projectImages.map((img) => ({ src: img.imageUrl })),
                  );
                  setOpen(true);
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={mainImage.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3} // Carica subito le prime 3 immagini
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Badge Città */}
                  <div className="absolute top-6 left-6 z-20">
                    <Badge className="bg-white/90 backdrop-blur-md text-slate-900 border-none font-black px-3 py-1 flex items-center gap-1 shadow-sm">
                      <MapPin className="w-3 h-3 text-amber-500" />
                      {project.city}
                    </Badge>
                  </div>

                  {/* Badge Conteggio Foto */}
                  {projectImages.length > 1 && (
                    <div className="absolute top-6 right-6 z-20 bg-amber-500 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                      {projectImages.length} FOTO
                    </div>
                  )}

                  {/* Overlay Hover Icona */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2 block">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-amber-500 transition-all duration-500" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <LayoutGrid className="mx-auto h-12 w-12 text-slate-200 mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest">
              Nessun progetto trovato per questa città.
            </p>
          </div>
        )}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
        // Aggiunge animazioni più fluide alla lightbox
        animation={{ fade: 300, swipe: 500 }}
      />
    </main>
  );
}
