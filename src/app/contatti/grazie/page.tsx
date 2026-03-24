import Link from "next/link";
import { CheckCircle, ArrowLeft, Calendar, PhoneCall } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="relative pt-40 pb-24 px-6 min-h-screen flex items-center justify-center bg-slate-50/50 overflow-hidden">
      {/* Elementi decorativi di sfondo */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl -z-10" aria-hidden="true" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Icona Animata */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-ping scale-75" />
            <div className="relative bg-white p-6 rounded-full shadow-xl border border-slate-100">
              <CheckCircle className="h-16 w-16 text-amber-500 stroke-[1.5px]" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">
          Messaggio <span className="text-amber-600">Inviato!</span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Grazie per aver scelto <strong>L.I-Costruzioni</strong>. 
          Il nostro team tecnico analizzerà la tua richiesta e ti ricontatterà 
          entro <strong>24 ore lavorative</strong> per fissare un sopralluogo gratuito.
        </p>

        {/* Box informativo extra per migliorare la UX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <Calendar className="h-6 w-6 text-amber-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-sm">Sopralluogo Rapido</p>
              <p className="text-xs text-slate-500">Organizziamo la visita entro 48 ore dalla chiamata.</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <PhoneCall className="h-6 w-6 text-amber-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-sm">Hai Urgenza?</p>
              <p className="text-xs text-slate-500">Chiamaci subito al +39 324 864 3886.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-900/10"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Torna alla Home
          </Link>
          
          <Link
            href="/progetti"
            className="text-slate-500 font-bold hover:text-slate-900 transition-colors px-8 py-4"
          >
            Guarda i nostri lavori
          </Link>
        </div>
      </div>
    </main>
  );
}