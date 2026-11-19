import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa estesa sull'uso dei cookie e tecnologie similari sul sito web di L.I-Costruzioni SRL.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50">
      <article className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-[2.5rem] border border-slate-200/80 shadow-xl">
        <header className="mb-10 pb-8 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Cookie className="h-3.5 w-3.5" />
            Informativa Cookie
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Informazioni sull&apos;utilizzo dei cookie ai sensi della normativa vigente
          </p>
        </header>

        <div className="space-y-8 text-slate-700 text-sm md:text-base leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">1. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell&apos;utente, dove
              vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Servono a
              garantire il corretto funzionamento tecnico delle pagine o a migliorare l&apos;esperienza di navigazione.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">2. Tipologie di cookie utilizzati da questo sito</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Cookie tecnici e strettamente necessari:</strong> indispensabili per il corretto funzionamento
                del sito, la sicurezza delle richieste e la navigazione tra le pagine. Non richiedono il consenso
                preventivo dell&apos;utente.
              </li>
              <li>
                <strong>Misurazione delle prestazioni (Vercel Speed Insights):</strong> il sito utilizza strumenti di
                telemetria tecnica per rilevare tempi di caricamento e stabilità delle pagine in forma aggregata, senza
                profilazione pubblicitaria.
              </li>
              <li>
                <strong>Contenuti di terze parti (Google Maps):</strong> nella pagina{" "}
                <Link href="/contatti" className="text-amber-700 font-semibold hover:underline">
                  Contatti
                </Link>{" "}
                è integrata una mappa interattiva di Google Maps per mostrare la sede operativa di Terracina.
                L&apos;interazione con la mappa può comportare l&apos;impostazione di cookie da parte di Google LLC secondo
                le rispettive informative.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">3. Cookie di profilazione</h2>
            <p>
              Questo sito <strong>non utilizza cookie di profilazione proprietari</strong> né effettua attività di
              remarketing pubblicitario o tracciamento commerciale degli utenti.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">4. Come gestire o disabilitare i cookie</h2>
            <p>
              L&apos;utente può in qualsiasi momento controllare, bloccare o cancellare i cookie attraverso le
              impostazioni del proprio browser (Chrome, Firefox, Safari, Edge). La disabilitazione totale dei cookie
              tecnici potrebbe compromettere la visualizzazione di alcuni componenti esterni come la mappa interattiva.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black text-slate-900">5. Titolare del trattamento</h2>
            <p>
              Per qualsiasi chiarimento è possibile contattare <strong>L.I-Costruzioni SRL</strong> (Via Appia Antica 22,
              04019 Terracina LT, P.IVA 03144440595) all&apos;indirizzo email{" "}
              <a href="mailto:licostruzioni.luca@gmail.com" className="text-amber-700 font-semibold hover:underline">
                licostruzioni.luca@gmail.com
              </a>{" "}
              o consultare la{" "}
              <Link href="/privacy" className="text-amber-700 font-semibold hover:underline">
                Privacy Policy
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
            href="/privacy"
            className="text-sm font-bold text-amber-700 hover:underline"
          >
            Vai alla Privacy Policy →
          </Link>
        </footer>
      </article>
    </div>
  );
}
