import { Resend } from "resend";
import { NextResponse } from "next/server";

const INTERVENTI: Record<string, string> = {
  "ristrutturazione-totale": "Ristrutturazione Totale",
  "nuova-costruzione": "Nuova Costruzione",
  "rifacimento-bagno-cucina": "Rifacimento Bagno/Cucina",
  "manutenzione-esterni": "Manutenzione Esterni / Facciate",
  altro: "Altro",
};

// Escape dei caratteri HTML: impedisce l'iniezione di markup/link nelle email
const escapeHtml = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d(][\d\s()./-]{5,24}$/;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Richiesta non valida" }, { status: 400 });
    }

    const rawNome = clean(body.nome, 100);
    const rawEmail = clean(body.email, 254);
    const rawTelefono = clean(body.telefono, 25);
    const rawMessaggio = clean(body.messaggio, 5000);
    const rawIntervento = INTERVENTI[clean(body.intervento, 50)] ?? "Altro";

    if (!rawNome || !EMAIL_RE.test(rawEmail) || !PHONE_RE.test(rawTelefono) || !rawMessaggio) {
      return NextResponse.json({ error: "Dati mancanti o non validi" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY non configurata");
      return NextResponse.json({ error: "Servizio email non configurato" }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const nome = escapeHtml(rawNome);
    const email = escapeHtml(rawEmail);
    const telefono = escapeHtml(rawTelefono);
    const intervento = escapeHtml(rawIntervento);
    const messaggio = escapeHtml(rawMessaggio).replace(/\n/g, "<br>");
    const telHref = rawTelefono.replace(/[^\d+]/g, "");
    const subjectNome = rawNome.replace(/[\r\n]+/g, " ");

    // 1. EMAIL A TE (Notifica Nuovo Progetto)
    const notification = await resend.emails.send({
      from: "Sito L.I-Costruzioni Srl <luca@li-costruzionisrl.it>", 
      to: ["licostruzioni.luca@gmail.com"],
      replyTo: rawEmail,
      subject: `🛠️ ${rawIntervento} - ${subjectNome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 24px; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">L.I-Costruzioni</h1>
            <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 14px;">Nuova richiesta dal sito web</p>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px dashed #e2e8f0;">
              <span style="font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold;">Tipologia Intervento</span>
              <h2 style="margin: 4px 0; color: #0f172a; font-size: 22px;">${intervento}</h2>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 12px 0; color: #64748b; font-size: 14px; width: 120px;">Cliente:</td><td style="padding: 12px 0; color: #0f172a; font-size: 15px; font-weight: bold;">${nome}</td></tr>
              <tr><td style="padding: 12px 0; color: #64748b; font-size: 14px;">Telefono:</td><td style="padding: 12px 0; color: #0f172a; font-size: 15px;"><a href="tel:${telHref}" style="color: #f59e0b; text-decoration: none; font-weight: bold;">${telefono}</a></td></tr>
              <tr><td style="padding: 12px 0; color: #64748b; font-size: 14px;">Email:</td><td style="padding: 12px 0; color: #0f172a; font-size: 15px;">${email}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
              <span style="font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold; display: block; margin-bottom: 8px;">Messaggio:</span>
              <p style="margin: 0; color: #334155; line-height: 1.6; font-style: italic;">"${messaggio}"</p>
            </div>
          </div>
        </div>
      `,
    });

    if (notification.error) {
      console.error("Errore invio notifica:", notification.error);
      return NextResponse.json({ error: "Invio non riuscito" }, { status: 500 });
    }

    // 2. EMAIL DI RICEVUTA ALL'UTENTE (non bloccante: la richiesta è già arrivata)
    const receipt = await resend.emails.send({
      from: "L.I-Costruzioni Srl <luca@li-costruzionisrl.it>",
      to: [rawEmail], // Inviata all'indirizzo inserito nel form
      subject: `Abbiamo ricevuto la tua richiesta, ${subjectNome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #f59e0b; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 40px 24px; text-align: center;">
             <h1 style="color: #f59e0b; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 3px;">Grazie per averci contattato</h1>
          </div>
          <div style="padding: 40px 32px; background-color: #ffffff; text-align: center;">
            <h2 style="color: #0f172a; margin-bottom: 16px;">Ciao ${nome},</h2>
            <p style="color: #475569; font-size: 16px; line-height: 1.8;">
              Ti confermiamo di aver ricevuto correttamente la tua richiesta per l'intervento di:<br>
              <strong style="color: #0f172a; font-size: 18px;">${intervento}</strong>
            </p>
            <p style="color: #475569; font-size: 16px; line-height: 1.8; margin-top: 20px;">
              Un nostro tecnico analizzerà i dettagli del messaggio e ti ricontatterà al numero <strong>${telefono}</strong> nel più breve tempo possibile.
            </p>
            <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
               <p style="color: #94a3b8; font-size: 14px; margin-bottom: 8px;">Nel frattempo, visita il nostro sito:</p>
               <a href="https://www.li-costruzionisrl.it" style="display: inline-block; padding: 12px 24px; background-color: #f59e0b; color: #0f172a; text-decoration: none; font-weight: bold; border-radius: 6px; text-transform: uppercase; font-size: 13px;">Vai al Portfolio</a>
            </div>
          </div>
          <div style="background-color: #0f172a; padding: 20px; text-align: center; color: #f59e0b; font-size: 12px;">
            L.I-Costruzioni Srl | Terracina - Latina - Roma
          </div>
        </div>
      `,
    });

    if (receipt.error) {
      console.error("Errore invio ricevuta utente:", receipt.error);
    }

    return NextResponse.json({ message: "Email inviate con successo" }, { status: 200 });

  } catch (err) {
    console.error("Errore /api/contact:", err);
    return NextResponse.json({ error: "Errore interno durante l'invio" }, { status: 500 });
  }
}