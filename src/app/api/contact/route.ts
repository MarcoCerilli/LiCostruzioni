import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nome, email, telefono, intervento, messaggio } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Sito Li-Costruzioni Srl <onboarding@resend.dev>", // Poi lo cambierai col tuo dominio
      to: ["cerillimarco15@gmail.com"], // Tua email o del team
      // ... dentro resend.emails.send({
      subject: `🛠️ ${intervento} - ${nome}`,
      html: `
  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
    <div style="background-color: #0f172a; padding: 24px; text-align: center;">
      <h1 style="color: #f59e0b; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">Li-Costruzioni</h1>
      <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 14px;">Nuova richiesta dal sito web</p>
    </div>
    
    <div style="padding: 32px; background-color: #ffffff;">
      <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px dashed #e2e8f0;">
        <span style="font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold;">Tipologia Intervento</span>
        <h2 style="margin: 4px 0; color: #0f172a; font-size: 22px;">${intervento}</h2>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; color: #64748b; font-size: 14px; width: 120px;">Cliente:</td>
          <td style="padding: 12px 0; color: #0f172a; font-size: 15px; font-weight: bold;">${nome}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Telefono:</td>
          <td style="padding: 12px 0; color: #0f172a; font-size: 15px;">
            <a href="tel:${telefono}" style="color: #f59e0b; text-decoration: none; font-weight: bold;">${telefono}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Email:</td>
          <td style="padding: 12px 0; color: #0f172a; font-size: 15px;">${email}</td>
        </tr>
      </table>

      <div style="margin-top: 24px; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
        <span style="font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold; display: block; margin-bottom: 8px;">Messaggio:</span>
        <p style="margin: 0; color: #334155; line-height: 1.6; font-style: italic;">"${messaggio}"</p>
      </div>
    </div>

    <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
      Email generata automaticamente dal modulo contatti di li-costruzionisrl.it
    </div>
  </div>
`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Inviato con successo" },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
