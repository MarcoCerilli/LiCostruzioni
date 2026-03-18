export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  { id: "logo-aziendale", description: "Logo L.I-Costruzioni", imageUrl: "/logo.png", imageHint: "logo" },
  { id: "hero-industrial", description: "Cantiere", imageUrl: "/hero.png", imageHint: "site" },
  
  // ROMA
  { id: "project-roma-1", description: "Roma - Vista 1", imageUrl: "/progetti/roma.webp", imageHint: "interior" },
  { id: "project-roma-2", description: "Roma - Vista 2", imageUrl: "/progetti/roma-2.webp", imageHint: "interior detail" },
  { id: "project-roma-3", description: "Roma - Vista 3", imageUrl: "/progetti/roma-3.webp", imageHint: "interior bath" },

  // TERRACINA
  { id: "project-terracina-1", description: "Terracina - Vista 1", imageUrl: "/progetti/terracina.webp", imageHint: "exterior" },
  { id: "project-terracina-2", description: "Terracina - Vista 2", imageUrl: "/progetti/terracina-2.webp", imageHint: "exterior garden" },
  { id: "project-terracina-3", description: "Terracina - Vista 3", imageUrl: "/progetti/terracina-3.webp", imageHint: "pool area" },

  // LATINA
  { id: "project-latina-1", description: "Latina - Vista 1", imageUrl: "/progetti/latina.webp", imageHint: "office" },
  { id: "project-latina-2", description: "Latina - Vista 2", imageUrl: "/progetti/latina-2.webp", imageHint: "office hall" },

  // SABAUDIA
  { id: "project-sabaudia-1", description: "Sabaudia - Vista 1", imageUrl: "/progetti/sabaudia-1.webp", imageHint: "villa" },
  { id: "project-sabaudia-2", description: "Sabaudia - Vista 2", imageUrl: "/progetti/sabaudia-2.webp", imageHint: "villa night" },
  { id: "project-sabaudia-3", description: "Sabaudia - Vista 3", imageUrl: "/progetti/sabaudia-3.webp", imageHint: "villa pool" },

  // SAN FELICE
  { id: "project-sanfelice-1", description: "San Felice - Vista 1", imageUrl: "/progetti/rustico.webp", imageHint: "rustic" },
  { id: "project-sanfelice-2", description: "San Felice - Vista 2", imageUrl: "/progetti/rustico-2.webp", imageHint: "rustic garden" },
  { id: "project-sanfelice-3", description: "San Felice - Vista 3", imageUrl: "/progetti/rustico-3.webp", imageHint: "rustic pool" },
  
  { id: "service-renovation", description: "Servizi", imageUrl: "/progetti/costruzione.webp", imageHint: "tools" },
];