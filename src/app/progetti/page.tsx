"use client";

import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, LayoutGrid, Hammer } from 'lucide-react';

const projects = [
  { id: 1, title: "Ristrutturazione Appartamento Storico", type: "Ristrutturazione", city: "Roma", imgId: "project-roma-1" },
  { id: 2, title: "Villa Moderna Fronte Mare", type: "Nuova Costruzione", city: "Terracina", imgId: "project-terracina-1" },
  { id: 3, title: "Complesso Uffici High-Tech", type: "Edilizia Commerciale", city: "Latina", imgId: "project-latina-1" },
  { id: 4, title: "Manutenzione Facciata Condominiale", type: "Manutenzione", city: "Roma", imgId: "project-roma-1" },
  { id: 5, title: "Villa Unifamiliare", type: "Nuova Costruzione", city: "Sabaudia", imgId: "project-terracina-1" },
  { id: 6, title: "Recupero Rustico", type: "Ristrutturazione", city: "San Felice Circeo", imgId: "project-roma-1" }
];

export default function ProjectsPage() {
  const [activeCity, setActiveCity] = useState('all');
  const [activeType, setActiveType] = useState('all');

  const filteredProjects = projects.filter(p => 
    (activeCity === 'all' || p.city === activeCity) &&
    (activeType === 'all' || p.type === activeType)
  );

  const cities = ['all', ...Array.from(new Set(projects.map(p => p.city)))];
  const types = ['all', ...Array.from(new Set(projects.map(p => p.type)))];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header di Sezione */}
        <div className="text-center mb-20">
          <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">
            Opere che parlano di <span className="text-amber-500">Noi</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Ogni cantiere è una sfida vinta. Dalla conservazione del patrimonio storico a Roma alle moderne strutture sostenibili a Terracina.
          </p>
        </div>

        {/* Sistema di Filtri Avanzato */}
        <div className="space-y-6 mb-16 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <MapPin className="h-3 w-3" /> Area Geografica
              </label>
              <Tabs value={activeCity} onValueChange={setActiveCity} className="w-full">
                <TabsList className="bg-slate-100/50 p-1 rounded-xl flex-wrap h-auto">
                  {cities.map(city => (
                    <TabsTrigger key={city} value={city} className="rounded-lg px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm capitalize font-bold text-xs">
                      {city === 'all' ? 'Tutte le zone' : city}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <Hammer className="h-3 w-3" /> Categoria Lavori
              </label>
              <Tabs value={activeType} onValueChange={setActiveType} className="w-full">
                <TabsList className="bg-slate-100/50 p-1 rounded-xl flex-wrap h-auto">
                  {types.map(type => (
                    <TabsTrigger key={type} value={type} className="rounded-lg px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm capitalize font-bold text-xs">
                      {type === 'all' ? 'Tutte le tipologie' : type}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Grid Progetti */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map(project => {
            const img = PlaceHolderImages.find(i => i.id === project.imgId);
            return (
              <Card key={project.id} className="group overflow-hidden bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={`${project.type} L.I-Costruzioni a ${project.city}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                  )}
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Badge Città */}
                  <div className="absolute bottom-6 left-6">
                    <Badge className="bg-amber-500 text-slate-900 font-black border-none px-4 py-1 rounded-full uppercase text-[10px]">
                      {project.city}
                    </Badge>
                  </div>
                </div>
                
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
            <LayoutGrid className="mx-auto h-12 w-12 text-slate-200 mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest">Nessun progetto trovato in questa categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}