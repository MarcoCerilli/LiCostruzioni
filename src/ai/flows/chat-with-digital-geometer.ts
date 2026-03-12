'use server';
/**
 * @fileOverview This file defines a Genkit flow for an AI-powered 'Digital Geometer' chatbot.
 * The chatbot answers technical construction questions and uses a tool to collect leads (name and phone)
 * for sopralluogo requests, saving them to Firebase Firestore.
 *
 * - chatWithDigitalGeometer - The main function to interact with the chatbot.
 * - ChatWithDigitalGeometerInput - The input type for the chatWithDigitalGeometer function.
 * - ChatWithDigitalGeometerOutput - The return type for the chatWithDigitalGeometer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import * as admin from 'firebase-admin'; // Import firebase-admin

// Initialize Firebase Admin if not already initialized
// This pattern helps prevent re-initialization in development/HMR scenarios.
// For production, ensure FIREBASE_PROJECT_ID or GOOGLE_APPLICATION_CREDENTIALS
// are correctly set in the environment.
if (!admin.apps.length) {
  admin.initializeApp({
    // projectId: process.env.FIREBASE_PROJECT_ID, // Uncomment and set if explicit project ID is needed
  });
}
const db = admin.firestore(); // Get Firestore instance

// Input schema for the chatbot
const ChatWithDigitalGeometerInputSchema = z.object({
  message: z.string().describe('The user\'s message or question to the chatbot.'),
  chatHistory: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).optional().describe('Optional chat history to provide context for the current message.'),
});
export type ChatWithDigitalGeometerInput = z.infer<typeof ChatWithDigitalGeometerInputSchema>;

// Output schema for the chatbot
const ChatWithDigitalGeometerOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response to the user.'),
  leadCollected: z.boolean().optional().describe('True if a lead (name and phone) was collected and saved.'),
});
export type ChatWithDigitalGeometerOutput = z.infer<typeof ChatWithDigitalGeometerOutputSchema>;

// Define a tool to save leads to Firebase Firestore
const saveLeadTool = ai.defineTool(
  {
    name: 'saveLead',
    description: 'Saves the client\'s name and phone number as a lead for a sopralluogo request.',
    inputSchema: z.object({
      name: z.string().describe('The name of the client.'),
      phone: z.string().describe('The phone number of the client.'),
    }),
    outputSchema: z.object({
        status: z.string(),
        leadId: z.string().optional(),
        message: z.string().optional(),
    }),
  },
  async (input) => {
    try {
      const docRef = await db.collection('leads').add({
        name: input.name,
        phone: input.phone,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
      console.log('Lead saved:', docRef.id);
      return { status: 'success', leadId: docRef.id };
    } catch (error) {
      console.error('Error saving lead:', error);
      return { status: 'error', message: (error as Error).message };
    }
  }
);

// Define the prompt for the Digital Geometer
const chatWithDigitalGeometerPrompt = ai.definePrompt({
  name: 'digitalGeometerPrompt',
  input: { schema: ChatWithDigitalGeometerInputSchema },
  output: { schema: z.string().describe('The chatbot\'s conversational response.') }, // Expects a conversational string response
  tools: [saveLeadTool],
  system: `Sei il Geometra Digitale di LI-COSTRUZIONI SRL. La tua sede è a Terracina (Via Appia Antica 122), ma siete operativi anche a Roma e Latina.
  Il tuo compito è rispondere a dubbi tecnici e fornire informazioni sui servizi di costruzione e ristrutturazione offerti da LI-COSTRUZIONI.
  È fondamentale che, se l'utente esprime interesse per un sopralluogo o desidera maggiori informazioni sui servizi, tu chieda sempre il suo "Nome" e "Numero di Telefono".
  Una volta ottenuti questi dati, usa lo strumento 'saveLead' per registrarli.
  Mantieni un tono professionale, competente e amichevole.
  Fornisci risposte concise e pertinenti.`,
  prompt: `{{#if chatHistory}}
  {{#each chatHistory}}
  {{#ifEquals role "user"}}User: {{content}}
  {{else}}Assistant: {{content}}
  {{/ifEquals}}
  {{/each}}
  {{/if}}
  User: {{message}}
  Assistant: `,
});

// Define the Genkit flow for the chatbot
const chatWithDigitalGeometerFlow = ai.defineFlow(
  {
    name: 'chatWithDigitalGeometerFlow',
    inputSchema: ChatWithDigitalGeometerInputSchema,
    outputSchema: ChatWithDigitalGeometerOutputSchema,
  },
  async (input) => {
    let leadCollected = false;

    // The prompt's chatHistory input is directly `input.chatHistory`
    // The current message `input.message` is also passed directly.
    const response = await chatWithDigitalGeometerPrompt(input);

    // Check for tool calls made by the LLM
    if (response.toolCalls && response.toolCalls.length > 0) {
      for (const toolCall of response.toolCalls) {
        if (toolCall.name === 'saveLead') {
          console.log('LLM requested to save lead:', toolCall.input);
          const toolOutput = await saveLeadTool(toolCall.input);
          if (toolOutput.status === 'success') {
            leadCollected = true;
            console.log('Lead successfully saved with ID:', toolOutput.leadId);
          } else {
            console.error('Failed to save lead:', toolOutput.message);
          }
        }
      }
    }

    return {
      response: response.text || "I'm sorry, I couldn't process that request at the moment.",
      leadCollected: leadCollected,
    };
  }
);

export async function chatWithDigitalGeometer(input: ChatWithDigitalGeometerInput): Promise<ChatWithDigitalGeometerOutput> {
  return chatWithDigitalGeometerFlow(input);
}
