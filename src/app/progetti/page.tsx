"use client";

import { useState } from "react";
import { ImagePlaceholder, PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, Maximize2, MapPin } from "lucide-react";

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
    images: ["project-terracina-1", "project-terracina-2", "project-terracina-3"],
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
    title: "Rifacimento Tetto",
    city: "Terracina",
    type: "Ristrutturazione",
    images: ["terracina-1", "terracina-2", "terracina-3", "terracina-4", "terracina-5"],
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
    images: ["project-sanfelice-1", "project-sanfelice-2", "project-sanfelice-3"],
  },
];

export default function ProjectsPage() {
  // Stati per la Lightbox
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);

  // 1. Raggruppamento dei progetti per città
  const groupedProjects = projects.reduce((acc, project) => {
    const city = project.city;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

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
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Esplora le nostre realizzazioni suddivise per territorio. Tecnologie avanzate al servizio dell'edilizia moderna.
          </p>
        </div>

        {/* --- Griglia Raggruppata per Località --- */}
        <div className="space-y-24">
          {Object.entries(groupedProjects).map(([city, cityProjects]) => (
            <div key={city} className="space-y-10">
              
              {/* Header Città con Linea Decorativa */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="text-amber-500 w-6 h-6" />
                  <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
                    {city}
                  </h2>
                </div>
                <div className="h-[2px] flex-grow bg-slate-200 hidden sm:block" />
                <Badge className="bg-slate-900 text-white font-bold px-4 py-1 rounded-full border-none">
                  {cityProjects.length} {cityProjects.length === 1 ? 'PROGETTO' : 'PROGETTI'}
                </Badge>
              </div>

              {/* Griglia Card della Città */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cityProjects.map((project) => {
                  const projectImages = project.images
                    .map((id) => PlaceHolderImages.find((img) => img.id === id))
                    .filter((img): img is ImagePlaceholder => !!img);

                  const mainImage = projectImages[0] || PlaceHolderImages[0];

                  return (
                    <Card
                      key={project.id}
                      className="group overflow-hidden bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] cursor-pointer"
                      onClick={() => {
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

                        {/* Badge Conteggio Foto */}
                        {projectImages.length > 1 && (
                          <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-lg transition-transform group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
                            {projectImages.length} FOTO
                          </div>
                        )}

                        {/* Overlay Gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />

                        {/* Icona Zoom (Hover) */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                            <Maximize2 className="text-white w-6 h-6" />
                          </div>
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
                        <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-amber-500 transition-all duration-500" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <LayoutGrid className="mx-auto h-12 w-12 text-slate-200 mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest">
              Nessun progetto disponibile al momento.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
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