"use server";

import { genkit, z } from 'genkit';
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

const ai = genkit({});

export const chatWithDigitalGeometer = ai.defineFlow(
  {
    name: 'chatWithDigitalGeometer',
    inputSchema: z.object({
      message: z.string(),
      chatHistory: z.array(z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })).optional(),
    }),
  },
  async (input) => {
    const API_KEY = process.env.GOOGLE_GENAI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    // OTTIMIZZAZIONE: Istruzioni per non mozzare e restare nei limiti
   const systemInstruction = `Sei il Geometra Digitale di L.I-Costruzioni SRL (Terracina). 
Autorità tecnica nel Lazio per:
1. Ristrutturazioni e Grandi Opere (Siamo Certificati SOA).
2. Risanamento definitivo Umidità di Risalita (Barriere chimiche e igrometria).
3. Consolidamento strutturale e finiture di pregio.

LINEE GUIDA:
- Sii professionale, tecnico ma estremamente CONCISO.
- Se l'utente menziona umidità, muffa o infiltrazioni, spiega che siamo SPECIALISTI e che serve un'analisi igrometrica.
- Se si parla di grossi appalti, menziona la nostra Attestazione SOA come garanzia di solidità.
- OBIETTIVO FINALE: Ottenere Nome e Telefono per un sopralluogo gratuito. 
- NON superare le 150-200 parole. Usa elenchi puntati.`;


    const contents = [
      { role: "user", parts: [{ text: systemInstruction }] },
      ...(input.chatHistory || []).map(h => ({
        role: h.role === "model" ? "model" : "user",
        parts: [{ text: h.content }]
      })),
      { role: "user", parts: [{ text: input.message }] }
    ];

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          contents, 
          generationConfig: { 
            temperature: 0.8,
            maxOutputTokens: 2000, // Aumentato a 2000 per evitare tagli
            topP: 0.95
          } 
        })
      });

      const data = await response.json();

      if (!response.ok) throw new Error("Errore API Google");

      const responseText = data.candidates[0].content.parts[0].text;

      // Logica Lead Avanzata: Cattura Nome e Telefono
     const phoneMatch = input.message.match(/\d{7,}/);
const emailMatch = input.message.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);

if (phoneMatch || emailMatch) {
  await db.collection("leads").add({
    fullMessage: input.message,
    detectedPhone: phoneMatch ? phoneMatch[0] : "Non fornito",
    detectedEmail: emailMatch ? emailMatch[0] : "Non fornita",
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    source: "geometra_digitale_v2", // Aggiornato versione per tracciamento
    tags: input.message.toLowerCase().includes("umidit") ? ["umidità"] : ["generale"]
  });
      }

      return { response: responseText };
    } catch (error) {
      console.error("ERRORE:", error);
      return { response: "C'è stato un piccolo intoppo tecnico. Mi lasci il suo numero così la richiamo?" };
    }
  }
);