// src/app/page.tsx
import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Impresa Edile e Costruzioni Terracina, Roma, Latina | L.I-Costruzioni",
  description: "Ditta edile specializzata in ristrutturazioni chiavi in mano, nuove costruzioni e manutenzione a Terracina, Roma e Latina. Qualità garantita da 15 anni.",
  robots: {
    index: process.env.NEXT_PUBLIC_COMING_SOON !== "true",
    follow: process.env.NEXT_PUBLIC_COMING_SOON !== "true",
  },
};

export default function HomePage() {
  return <HomeClient />;
}