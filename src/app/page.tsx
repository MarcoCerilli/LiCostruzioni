import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  // Titolo orientato all'eccellenza regionale: Roma e Latina prima di Terracina
  title: "General Contractor & Impresa di Costruzioni Lazio | Roma, Latina | L.I-Costruzioni",
  
  // Descrizione che punta su "General Contractor" e "Territorio Laziale" per alzare il target dei clienti
  description: "Leader nelle ristrutturazioni d'élite e nuove costruzioni nel territorio laziale. General Contractor specializzato in progetti chiavi in mano tra Roma e Latina. Eccellenza tecnica certificata.",
  
  keywords: [
    "General Contractor Lazio",
    "Ristrutturazioni d'eccellenza Roma",
    "Impresa costruzioni Latina",
    "Costruzioni residenziali classe A+",
    "L.I-Costruzioni SRL",
    "Edilizia di prestigio Lazio"
  ],

  robots: {
    index: process.env.NEXT_PUBLIC_COMING_SOON !== "true",
    follow: process.env.NEXT_PUBLIC_COMING_SOON !== "true",
  },
  
  // Opzionale: Aggiungi OpenGraph per quando condividi il link su WhatsApp o Social
  openGraph: {
    title: "L.I-Costruzioni | Eccellenza nell'Edilizia Laziale",
    description: "Progettazione e realizzazione di opere edili d'alto profilo a Roma, Latina e provincia.",
    type: "website",
  }
};

export default function HomePage() {
  return <HomeClient />;
}