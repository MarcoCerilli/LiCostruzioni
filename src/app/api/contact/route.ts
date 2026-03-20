import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nome, email, telefono, intervento, messaggio } = await req.json();

    // 1. EMAIL A TE (Notifica Nuovo Progetto)
    const notification = await resend.emails.send({
      from: "Sito L.I-Costruzioni Srl <luca@li-costruzionisrl.it>", 
      to: ["licostruzioni.luca@gmail.com"], 
      subject: `🛠️ ${intervento} - ${nome}`,
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
              <tr><td style="padding: 12px 0; color: #64748b; font-size: 14px;">Telefono:</td><td style="padding: 12px 0; color: #0f172a; font-size: 15px;"><a href="tel:${telefono}" style="color: #f59e0b; text-decoration: none; font-weight: bold;">${telefono}</a></td></tr>
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

    // 2. EMAIL DI RICEVUTA ALL'UTENTE
    await resend.emails.send({
      from: "L.I-Costruzioni Srl <luca@li-costruzionisrl.it>",
      to: [email], // Inviata all'indirizzo inserito nel form
      subject: `Abbiamo ricevuto la tua richiesta, ${nome}`,
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
               <a href="https://www.marcoderilli.it" style="display: inline-block; padding: 12px 24px; background-color: #f59e0b; color: #0f172a; text-decoration: none; font-weight: bold; border-radius: 6px; text-transform: uppercase; font-size: 13px;">Vai al Portfolio</a>
            </div>
          </div>
          <div style="background-color: #0f172a; padding: 20px; text-align: center; color: #f59e0b; font-size: 12px;">
            L.I-Costruzioni Srl | Terracina - Latina - Roma
          </div>
        </div>
      `,
    });

    if (notification.error) {
      return NextResponse.json({ error: notification.error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email inviate con successo" }, { status: 200 });

  } catch (err) {
    return NextResponse.json({ error: "Errore interno durante l'invio" }, { status: 500 });
  }
}