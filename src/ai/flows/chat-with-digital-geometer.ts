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
    const systemInstruction = `Sei il Geometra Digitale di LI-COSTRUZIONI SRL (Terracina). 
    Rispondi in modo professionale ma CONCISO. 
    Usa elenchi puntati brevi. 
    NON superare le 200 parole per risposta. 
    Se l'utente vuole un sopralluogo, chiedi Nome e Telefono.`;

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
      if (phoneMatch) {
        await db.collection("leads").add({
          fullMessage: input.message,
          detectedPhone: phoneMatch[0],
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          source: "gemini_2.5_optimized"
        });
      }

      return { response: responseText };
    } catch (error) {
      console.error("ERRORE:", error);
      return { response: "C'è stato un piccolo intoppo tecnico. Mi lasci il suo numero così la richiamo?" };
    }
  }
);