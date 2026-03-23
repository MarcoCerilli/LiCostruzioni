export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    id: "logo-aziendale",
    description: "Logo L.I-Costruzioni",
    imageUrl: "/logo.png",
    imageHint: "logo",
  },
  {
    id: "hero-industrial",
    description: "Cantiere",
    imageUrl: "/hero.png",
    imageHint: "site",
  },

  // ROMA
  {
    id: "radiante-roma-1",
    description: "Roma - Vista 1",
    imageUrl: "/progetti/radiante-roma-1.webp",
    imageHint: "interior",
  },
  {
    id: "radiante-roma-2",
    description: "Roma - Vista 2",
    imageUrl: "/progetti/radiante-roma-2.webp",
    imageHint: "interior detail",
  },
  {
    id: "radiante-roma-3",
    description: "Roma - Vista 3",
    imageUrl: "/progetti/radiante-roma-3.webp",
    imageHint: "interior bath",
  },

  // TERRACINA
  {
    id: "project-terracina-1",
    description: "Terracina - Vista 1",
    imageUrl: "/progetti/terracina.webp",
    imageHint: "exterior",
  },
  {
    id: "project-terracina-2",
    description: "Terracina - Vista 2",
    imageUrl: "/progetti/terracina-2.webp",
    imageHint: "exterior garden",
  },
  {
    id: "project-terracina-3",
    description: "Terracina - Vista 3",
    imageUrl: "/progetti/terracina-3.webp",
    imageHint: "pool area",
  },

  // LATINA
  {
    id: "project-latina-1",
    description: "Latina - Vista 1",
    imageUrl: "/progetti/cappotto-latina.webp",
    imageHint: "office",
  },
  {
    id: "project-latina-2",
    description: "Latina - Vista 2",
    imageUrl: "/progetti/cappotto-latina-2.webp",
    imageHint: "office hall",
  },

  // SABAUDIA
  {
    id: "project-sabaudia-1",
    description: "Sabaudia - Vista 1",
    imageUrl: "/progetti/sabaudia-1.webp",
    imageHint: "villa",
  },
  {
    id: "project-sabaudia-2",
    description: "Sabaudia - Vista 2",
    imageUrl: "/progetti/sabaudia-2.webp",
    imageHint: "villa night",
  },
  {
    id: "project-sabaudia-3",
    description: "Sabaudia - Vista 3",
    imageUrl: "/progetti/sabaudia-3.webp",
    imageHint: "villa pool",
  },

  // SAN FELICE
  {
    id: "project-sanfelice-1",
    description: "San Felice - Vista 1",
    imageUrl: "/progetti/rustico.webp",
    imageHint: "rustic",
  },
  {
    id: "project-sanfelice-2",
    description: "San Felice - Vista 2",
    imageUrl: "/progetti/rustico-2.webp",
    imageHint: "rustic garden",
  },
  {
    id: "project-sanfelice-3",
    description: "San Felice - Vista 3",
    imageUrl: "/progetti/rustico-3.webp",
    imageHint: "rustic pool",
  },

  {
    id: "service-renovation",
    description: "Servizi",
    imageUrl: "/progetti/costruzione.webp",
    imageHint: "tools",
  },
  // FROSINONE - Ristrutturazione Locale Commerciale
  {
    id: "project-frosinone-1",
    description: "Frosinone - Cantiere Locale Commerciale",
    imageUrl: "/progetti/frosinone-ristorante.webp",
    imageHint: "site construction",
  },
  {
    id: "project-frosinone-2",
    description: "Frosinone - Interni Ristorante Design",
    imageUrl: "/progetti/frosinone-dettaglio.webp",
    imageHint: "restaurant interior",
  },
  {
    id: "project-frosinone-3",
    description: "Frosinone - Dettaglio Illuminazione e Finiture",
    imageUrl: "/progetti/frosinone-cantiere.webp",
    imageHint: "interior detail",
  },
  // ITRI - Ristrutturazione Soluzione Indipendente
  {
    id: "project-itri-1",
    description: "Itri - Stato originale e cantiere esterno",
    imageUrl: "/progetti/itri-dopo-1.webp",
    imageHint: "original exterior",
  },
  {
    id: "project-itri-2",
    description: "Itri - Restyling facciate e nuovo porticato",
    imageUrl: "/progetti/itri-prima.webp",
    imageHint: "modern facade",
  },
  {
    id: "project-itri-1",
    description: "Itri - Stato originale e cantiere esterno",
    imageUrl: "/progetti/itri-dopo-1.webp",
    imageHint: "original exterior",
  },
  {
    id: "project-itri-2",
    description: "Itri - Restyling facciate e nuovo porticato",
    imageUrl: "/progetti/itri-prima.webp",
    imageHint: "modern facade",
  },

  // NUOVI PROGETTI TERRACINA (Rifacimento Tetto)
  {
    id: "terracina-1",
    description: "Rifacimento Tetto Terracina - Vista 1",
    imageUrl: "/progetti/rifacimento-tetto-terracina1.webp", // <-- Controlla se è .webp o .jpg!
    imageHint: "roof detail",
  },
  {
    id: "terracina-2",
    description: "Rifacimento Tetto Terracina - Vista 2",
    imageUrl: "/progetti/rifacimento-tetto-terracina2.webp",
    imageHint: "roof detail",
  },
  {
    id: "terracina-3",
    description: "Rifacimento Tetto Terracina - Vista 3",
    imageUrl: "/progetti/rifacimento-tetto-terracina3.webp",
    imageHint: "roof detail",
  },
  {
    id: "terracina-4",
    description: "Rifacimento Tetto Terracina - Vista 4",
    imageUrl: "/progetti/rifacimento-tetto-terracina4.webp",
    imageHint: "roof detail",
  },
  {
    id: "terracina-5",
    description: "Rifacimento Tetto Terracina - Vista 5",
    imageUrl: "/progetti/rifacimento-tetto-terracina5.webp",
    imageHint: "roof detail",
  },
  // NUOVI: TERRAZZO TERRACINA
  {
    id: "terrazzo-terracina-1",
    description: "Terrazzo Terracina - Vista 1",
    imageUrl: "/progetti/terrazzo-terracina-1.webp",
    imageHint: "terrace view",
  },
  {
    id: "terrazzo-terracina-2",
    description: "Terrazzo Terracina - Vista 2",
    imageUrl: "/progetti/terrazzo-terracina-2.webp",
    imageHint: "terrace detail",
  },
  {
    id: "terrazzo-terracina-3",
    description: "Terrazzo Terracina - Vista 3",
    imageUrl: "/progetti/terrazzo-terracina-3.webp",
    imageHint: "terrace floor",
  },
  // Aggiungi questi dentro l'array PlaceHolderImages in lib/placeholder-images.ts

  {
    id: "appartamento-itri-1",
    description: "Ristrutturazione Itri - Bagno Design Tropical",
    imageUrl: "/progetti/appartamento-itri-1.webp",
    imageHint: "luxury bathroom",
  },
  {
    id: "appartamento-itri-2",
    description: "Ristrutturazione Itri - Dettaglio finiture",
    imageUrl: "/progetti/appartamento-itri-2.webp",
    imageHint: "interior detail",
  },
  {
    id: "appartamento-itri-3",
    description: "Ristrutturazione Itri - Zona Living",
    imageUrl: "/progetti/appartamento-itri-3.webp",
    imageHint: "modern living",
  },
  // NUOVO: CANTIERE APPARTAMENTO ROMA
  {
    id: "cantiere-roma-1",
    description:
      "Roma - Realizzazione archi architettonici e opere murarie a secco",
    imageUrl: "/progetti/cantiere-roma-1.webp",
    imageHint: "construction site arch detail",
  },
  {
    id: "cantiere-roma-2",
    description:
      "Roma - Predisposizione impianti elettrici e idraulici sottotraccia",
    imageUrl: "/progetti/cantiere-roma-2.webp",
    imageHint: "technical systems installation",
  },
  {
    id: "cantiere-roma-3",
    description:
      "Roma - Installazione e coibentazione vasca da bagno da incasso",
    imageUrl: "/progetti/cantiere-roma-3.webp",
    imageHint: "bathroom construction site",
  },
  // LATINA - Restyling Viale
{
  id: "viale-latina-1",
  description: "Latina - Trasformazione viale d'ingresso: sostituzione pavimentazione e restyling architettonico",
  imageUrl: "/progetti/viale-latina-1.webp", 
  imageHint: "before and after outdoor renovation",
},

{
  id: "viale-latina-2",
  description: "Latina - Trasformazione viale d'ingresso: sostituzione pavimentazione e restyling architettonico",
  imageUrl: "/progetti/viale-latina-2.webp", 
  imageHint: "before and after outdoor renovation",
},
];
