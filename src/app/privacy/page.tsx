import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR) di L.I-Costruzioni SRL.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50">
      <article className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-[2.5rem] border border-slate-200/80 shadow-xl">
        <header className="mb-10 pb-8 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            Informativa GDPR
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Informativa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR)
          </p>
        </header>

        <div className="space-y-8 text-slate-700 text-sm md:text-base leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali è{" "}
              <strong>L.I-Costruzioni SRL</strong>, con sede legale e operativa in{" "}
              <strong>Via Appia Antica 22, 04019 Terracina (LT)</strong>, P.IVA{" "}
              <strong>03144440595</strong>.
            </p>
            <p>
              Contatti del Titolare: telefono{" "}
              <a href="tel:+393248643886" className="text-amber-700 font-semibold hover:underline">
                +39 324 864 3886
              </a>
              , email{" "}
              <a href="mailto:licostruzioni.luca@gmail.com" className="text-amber-700 font-semibold hover:underline">
                licostruzioni.luca@gmail.com
              </a>
              , PEC{" "}
              <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                licostruzionisrls@pec.bufetti.it
              </span>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">2. Tipologie di dati trattati e finalità</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Dati di navigazione:</strong> i sistemi informatici preposti al funzionamento del sito
                acquisiscono alcuni dati la cui trasmissione è implicita nell&apos;uso dei protocolli Internet
                (indirizzi IP, log di accesso, tipo di browser), utilizzati solo per sicurezza, diagnostica e
                statistiche tecniche aggregate tramite Vercel Speed Insights.
              </li>
              <li>
                <strong>Modulo di contatto e richiesta preventivi:</strong> nome, numero di telefono, indirizzo email,
                tipologia di intervento e contenuto del messaggio inviati volontariamente dall&apos;utente nella pagina{" "}
                <Link href="/contatti" className="text-amber-700 font-semibold hover:underline">
                  Contatti
                </Link>
                . I dati sono trattati esclusivamente per rispondere alla richiesta, fissare sopralluoghi tecnici e
                formulare preventivi.
              </li>
              <li>
                <strong>Consulente Tecnico AI (Chatbot):</strong> i messaggi inseriti nella chat vengono elaborati per
                fornire risposte tecniche immediate. Qualora l&apos;utente inserisca volontariamente un numero di
                telefono o un indirizzo email per essere ricontattato, tali recapiti vengono registrati al solo fine
                di gestire la richiesta di sopralluogo o consulenza.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">3. Base giuridica del trattamento</h2>
            <p>
              Il trattamento dei dati forniti tramite modulo di contatto o chat si fonda sull&apos;esecuzione di misure
              precontrattuali adottate su richiesta dell&apos;interessato (art. 6, par. 1, lett. b GDPR) e sul
              legittimo interesse del Titolare a garantire la sicurezza e il corretto funzionamento del sito (art. 6,
              par. 1, lett. f GDPR).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">4. Modalità, destinatari e trasferimento dati</h2>
            <p>
              I dati sono trattati con strumenti elettronici protetti da adeguate misure di sicurezza e non vengono
              diffusi né venduti a terzi. Per l&apos;erogazione tecnica del servizio il Titolare si avvale di fornitori
              qualificati (hosting web su Vercel, invio email transazionali tramite Resend, database cloud su Google
              Firebase/Firestore e modelli AI Google Gemini), nominati ove richiesto responsabili del trattamento o
              operanti secondo clausole contrattuali standard europee.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">5. Periodo di conservazione</h2>
            <p>
              I dati raccolti per richieste di preventivo o sopralluogo sono conservati per il tempo strettamente
              necessario a evadere la richiesta e, in caso di instaurazione del rapporto contrattuale, per la durata
              prevista dagli obblighi civili e fiscali di legge.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">6. Diritti dell&apos;interessato</h2>
            <p>
              Ai sensi degli artt. 15–22 del GDPR, l&apos;interessato ha il diritto di chiedere al Titolare l&apos;accesso
              ai propri dati personali, la rettifica, la cancellazione, la limitazione del trattamento, l&apos;opposizione
              al trattamento e la portabilità dei dati, scrivendo a{" "}
              <a href="mailto:licostruzioni.luca@gmail.com" className="text-amber-700 font-semibold hover:underline">
                licostruzioni.luca@gmail.com
              </a>
              . È inoltre sempre possibile proporre reclamo al Garante per la Protezione dei Dati Personali.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">7. Cookie</h2>
            <p>
              Per informazioni dettagliate sull&apos;utilizzo dei cookie e delle tecnologie simili, consulta la nostra{" "}
              <Link href="/cookies" className="text-amber-700 font-semibold hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
          <Link
            href="/cookies"
            className="text-sm font-bold text-amber-700 hover:underline"
          >
            Vai alla Cookie Policy →
          </Link>
        </footer>
      </article>
    </div>
  );
}
