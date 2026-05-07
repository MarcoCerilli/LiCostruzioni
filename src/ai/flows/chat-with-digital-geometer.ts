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
   const systemInstruction = `Sei il Geometra Digitale di L.I-Costruzioni SRL. 
Autorità tecnica nel Lazio (Terracina, Roma, Latina) per Grandi Opere e Risanamento.

COMPETENZE CORE:
1. Ristrutturazioni SOA: Gestione cantieri complessi e appalti certificati.
2. Protocollo Umidità: Analisi igrometrica e barriere chimiche definitive (NO rimedi temporanei).
3. Consolidamento: Interventi strutturali e finiture di alto profilo.

PROTOCOLLO DI RISPOSTA:
- Umidità: Se l'utente ha muffa o risalita, spiega che agiamo sulla CAUSA (capillarità) e non sull'effetto. Proponi subito l'analisi tecnica.
- Stile: Autorevole, rapido, scansionabile (usa grassetti e punti elenco).
- Gestione Contatti: Quando chiedi Nome e Telefono, rassicura l'utente che i dati serviranno SOLO a Jessica o Luca per fissare il sopralluogo tecnico. 

REGOLA D'ORO PER I DATI:
Se l'utente fornisce i dati, conferma di averli ricevuti e comunica che la segreteria tecnica lo contatterà entro 24h. Non cercare di avviare chiamate telefoniche, spiega che il contatto avverrà via telefono/WhatsApp dalla sede.

LIMITE: Max 150 parole.`;


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