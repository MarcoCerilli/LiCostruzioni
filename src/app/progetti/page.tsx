"use client";

import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projects = [
  {
    id: 1,
    title: "Ristrutturazione Appartamento Storico",
    type: "Ristrutturazione",
    city: "Roma",
    imgId: "project-roma-1"
  },
  {
    id: 2,
    title: "Villa Moderna Fronte Mare",
    type: "Nuova Costruzione",
    city: "Terracina",
    imgId: "project-terracina-1"
  },
  {
    id: 3,
    title: "Complesso Uffici High-Tech",
    type: "Edilizia Commerciale",
    city: "Latina",
    imgId: "project-latina-1"
  },
  {
    id: 4,
    title: "Manutenzione Facciata Condominiale",
    type: "Manutenzione",
    city: "Roma",
    imgId: "project-roma-1"
  },
  {
    id: 5,
    title: "Villa Unifamiliare",
    type: "Nuova Costruzione",
    city: "Sabaudia",
    imgId: "project-terracina-1"
  },
  {
    id: 6,
    title: "Recupero Rustico",
    type: "Ristrutturazione",
    city: "San Felice Circeo",
    imgId: "project-roma-1"
  }
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
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">I Nostri Progetti</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sfoglia il nostro portfolio per vedere come trasformiamo le visioni in realtà. Ogni progetto è un esempio del nostro impegno per la qualità.
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Filtra per Città</span>
            <Tabs value={activeCity} onValueChange={setActiveCity}>
              <TabsList className="bg-card w-full sm:w-auto flex-wrap h-auto p-1">
                {cities.map(city => (
                  <TabsTrigger key={city} value={city} className="text-xs sm:text-sm capitalize px-4 py-2">
                    {city === 'all' ? 'Tutte' : city}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Filtra per Tipologia</span>
            <Tabs value={activeType} onValueChange={setActiveType}>
              <TabsList className="bg-card w-full sm:w-auto flex-wrap h-auto p-1">
                {types.map(type => (
                  <TabsTrigger key={type} value={type} className="text-xs sm:text-sm capitalize px-4 py-2">
                    {type === 'all' ? 'Tutte' : type}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => {
            const img = PlaceHolderImages.find(i => i.id === project.imgId);
            return (
              <Card key={project.id} className="overflow-hidden bg-card border-none shadow-xl group hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-[4/3]">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={`${project.type} eseguito a ${project.city} da LI-COSTRUZIONI`}
                      fill
                      className="object-cover group-hover:brightness-110 transition-all"
                      data-ai-hint={img.imageHint}
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground font-bold">{project.city}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{project.type}</span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
