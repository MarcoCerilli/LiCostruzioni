import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="pt-40 pb-24 px-6 min-h-screen text-center">
      <CheckCircle className="max-w-2xl mx-auto" />
      <h1 className="text-4xl font-bold mb-4 text-slate-900">
        Messaggio Inviato!
      </h1>
      <p className="text-lg text-slate-600 mb-10">
        Grazie per averci contattato. Il team di <strong>Li-Costruzioni</strong>{" "}
        ti risponderà nel più breve tempo possibile per fissare un sopralluogo.
      </p>
      <Link
        href="/"
        className="bg-slate-800 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg"
      >
        Torna alla Home
      </Link>
    </div>
  );
}
