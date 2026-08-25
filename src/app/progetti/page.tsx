"use client";

import { useState } from "react";
import { ImagePlaceholder, PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, Maximize2, Sparkles, Layers } from "lucide-react";

// Lightbox setup
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// Definizione progetti con metadati geografici interni per SEO
const projects = [
  {
    id: 1,
    title: "Sistemi Radianti & Nuove Costruzioni",
    city: "Roma", // Metadato SEO
    type: "Innovazione Energetica",
    categoryGroup: "Innovazione Energetica",
    images: ["radiante-roma-3", "radiante-roma-2", "radiante-roma-1"],
  },
  {
    id: 2,
    title: "Struttura Ricettiva Fronte Mare",
    city: "Terracina", // Metadato SEO
    type: "Nuova Costruzione",
    categoryGroup: "Nuove Costruzioni",
    images: [
      "project-terracina-3",
      "project-terracina-2",
      "project-terracina-1",
      "project-terracina-4",
      "project-terracina-5",
      "project-terracina-6",
      "project-terracina-7",
      "project-terracina-8",
      "project-terracina-9",
      "project-terracina-10",
      "project-terracina-11",
      "project-terracina-12",
      "project-terracina-13",
      "project-terracina-14",
    ],
  },
  {
    id: 3,
    title: "Efficientamento Energetico & Cappotto Termico",
    city: "Latina", // Metadato SEO
    type: "Sostenibilità Ambientale",
    categoryGroup: "Innovazione Energetica",
    images: ["project-latina-1", "project-latina-2"],
  },
  {
    id: 4,
    title: "Rifacimento Tetto & Impermeabilizzazione",
    city: "Terracina", // Metadato SEO
    type: "Ristrutturazione Strutturale",
    categoryGroup: "Ristrutturazioni",
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
    title: "Villa Unifamiliare d'Élite",
    city: "Sabaudia", // Metadato SEO
    type: "Nuova Costruzione",
    categoryGroup: "Nuove Costruzioni",
    images: ["project-sabaudia-1", "project-sabaudia-2", "project-sabaudia-3"],
  },
  {
    id: 6,
    title: "Recupero Rustico & Opere Murarie",
    city: "San Felice Circeo", // Metadato SEO
    type: "Ristrutturazione d'Autore",
    categoryGroup: "Ristrutturazioni",
    images: [
      "project-sanfelice-1",
      "project-sanfelice-2",
      "project-sanfelice-3",
    ],
  },
  {
    id: 7,
    title: "Ristrutturazione Design Restaurant & Lounge",
    city: "Frosinone", // Metadato SEO
    type: "Edilizia Commerciale",
    categoryGroup: "Edilizia Commerciale",
    images: [
      "project-frosinone-1",
      "project-frosinone-2",
      "project-frosinone-3",
    ],
  },
  {
    id: 8,
    title: "Restyling Moderno Villa",
    city: "Itri", // Metadato SEO
    type: "Ristrutturazione Completa",
    categoryGroup: "Ristrutturazioni",
    images: ["project-itri-1", "project-itri-2"],
  },
  {
    id: 9,
    title: "Rifacimento Terrazzo Privato",
    city: "Terracina", // Metadato SEO
    type: "Ristrutturazione Esterna",
    categoryGroup: "Ristrutturazioni",
    images: [
      "terrazzo-terracina-1",
      "terrazzo-terracina-2",
      "terrazzo-terracina-3",
    ],
  },
  {
    id: 10,
    title: "Interior Design & Panoramic Penthouse",
    city: "Itri", // Metadato SEO
    type: "Ristrutturazione Totale",
    categoryGroup: "Ristrutturazioni",
    images: [
      "appartamento-itri-1",
      "appartamento-itri-2",
      "appartamento-itri-3",
    ],
  },
  {
    id: 11,
    title: "Restyling Totale & Impianti Speciali",
    city: "Roma", // Metadato SEO
    type: "Opere Murarie & Impianti",
    categoryGroup: "Ristrutturazioni",
    images: [
      "cantiere-roma-1",
      "cantiere-roma-2",
      "cantiere-roma-3",
    ],
  },
  {
    id: 12,
    title: "Restyling Viale d'Ingresso & Outdoor",
    city: "Latina", // Metadato SEO
    type: "Ristrutturazione Esterna",
    categoryGroup: "Ristrutturazioni",
    images: [
      "viale-latina-1",
      "viale-latina-2",
    ],
  },
];

const filterCategories = [
  "Tutti",
  "Nuove Costruzioni",
  "Ristrutturazioni",
  "Innovazione Energetica",
  "Edilizia Commerciale",
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("Tutti");
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);

  const filteredProjects =
    filter === "Tutti"
      ? projects
      : projects.filter((p) => p.categoryGroup === filter);

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Portfolio */}
        <header className="text-center mb-12">
          <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Portfolio Opere Realizzate
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter uppercase">
            Cantieri & Opere d&apos;<span className="text-amber-500">Eccellenza</span>
          </h1>

          {/* Filtri per Categoria (Nomi città nascosti visivamente) */}
          <nav
            className="flex flex-wrap justify-center gap-2 mt-8"
            aria-label="Filtra progetti per categoria"
          >
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                  filter === category
                    ? "bg-slate-900 border-slate-900 text-amber-500 shadow-lg scale-105"
                    : "bg-white border-slate-200 text-slate-500 hover:border-amber-500 hover:text-amber-600"
                }`}
              >
                {category}
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
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
                  {/* Ambient Backdrop per riempire i bordi senza bande nere */}
                  <div className="absolute inset-0 filter blur-xl opacity-35 scale-125 pointer-events-none">
                    <Image
                      src={mainImage.imageUrl}
                      alt=""
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <Image
                    src={mainImage.imageUrl}
                    alt={`${project.title} - L.I-Costruzioni General Contractor`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    className="object-cover object-center contrast-[1.04] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Badge Tipologia (Senza mostrare il nome della città) */}
                  <div className="absolute top-6 left-6 z-20">
                    <Badge className="bg-slate-950/80 backdrop-blur-md text-white border border-white/15 font-black text-[10px] uppercase tracking-wider px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      {project.type}
                    </Badge>
                  </div>

                  {/* Badge Conteggio Foto */}
                  {projectImages.length > 1 && (
                    <div className="absolute top-6 right-6 z-20 bg-amber-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                      {projectImages.length} FOTO
                    </div>
                  )}

                  {/* Overlay Hover Icona */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2 block">
                    {project.categoryGroup}
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
              Nessun progetto trovato per questa categoria.
            </p>
          </div>
        )}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
        animation={{ fade: 300, swipe: 500 }}
      />
    </main>
  );
}
