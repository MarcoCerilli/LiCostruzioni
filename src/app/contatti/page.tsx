"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactsPage() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    // 1. Controllo Honeypot (Antispam silenzioso)
    if (formData.get("_honey")) {
      console.warn("Bot rilevato");
      return;
    }

    setIsPending(true);

    // 2. Estrazione e validazione sicura per TypeScript
    const data = {
      nome: formData.get("nome") as string,
      telefono: formData.get("telefono") as string,
      email: formData.get("email") as string,
      intervento: formData.get("intervento") as string,
      messaggio: formData.get("messaggio") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Errore durante l'invio");
      
      router.push("/contatti/grazie");
    } catch (error) {
      alert(
        "Si è verificato un errore. Per favore riprova o chiamaci direttamente al +39 324 864 3886.",
      );
    } finally {
      setIsPending(false);
    }
  }

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <span className="text-amber-700 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Sopralluoghi Gratuiti
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">
            Iniziamo il tuo <span className="text-amber-600">Progetto</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Hai in mente una ristrutturazione o una nuova costruzione? Il nostro
            team tecnico è a tua disposizione per una consulenza personalizzata.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-10">
            <section aria-labelledby="sede-info">
              <h2 id="sede-info" className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3 italic">
                Sede Operativa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: MapPin,
                    label: "Dove Siamo",
                    value: "Via Appia Antica 22, Terracina (LT)",
                  },
                  {
                    icon: Phone,
                    label: "Pronto Intervento",
                    value: "+39 324 864 3886",
                    href: "tel:+393248643886"
                  },
                  {
                    icon: Mail,
                    label: "Scrivici",
                    value: "licostruzioni.luca@gmail.com",
                    href: "mailto:licostruzioni.luca@gmail.com"
                  },
                  {
                    icon: Clock,
                    label: "Orario Uffici",
                    value: "Lun-Ven: 08:30 - 18:30",
                  },
                ].map((item, idx) => (
                  <Card
                    key={idx}
                    className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="flex flex-row items-center gap-3 pb-2 space-y-0">
                      <div className="p-2 bg-amber-500/10 rounded-lg text-amber-700" aria-hidden="true">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-[10px] uppercase tracking-widest text-slate-500">
                        {item.label}
                      </span>
                    </CardHeader>
                    <CardContent>
                      {item.href ? (
                        <a href={item.href} className="text-slate-900 font-bold text-sm tracking-tight hover:text-amber-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-bold text-sm tracking-tight">
                          {item.value}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* MAPPA EMBED REALE (Esempio per Terracina) */}
            <div className="h-[350px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group bg-slate-200">
              <iframe
                title="Mappa della sede L.I-Costruzioni a Terracina"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4447432431!2d13.245!3d41.285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13253272e50587d1%3A0x6d9f5835a16d034!2sVia%20Appia%20Antica%2C%2022%2C%2004019%20Terracina%20LT!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <section className="relative" aria-labelledby="form-title">
            <div className="absolute -inset-4 bg-amber-500/5 rounded-[3rem] blur-2xl -z-10" aria-hidden="true" />
            <Card className="bg-white p-6 md:p-10 border-slate-100 shadow-2xl rounded-[3rem]">
              <div className="mb-8">
                <h2 id="form-title" className="text-3xl font-black text-slate-900 mb-2">
                  Invia la tua Richiesta
                </h2>
                <p className="text-sm text-slate-500">
                  Ti risponderemo entro 24 ore lavorative.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot per prevenire spam */}
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">
                      Nome Completo
                    </label>
                    <Input id="nome" name="nome" placeholder="Mario Rossi" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-amber-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">
                      Telefono
                    </label>
                    <Input id="telefono" name="telefono" type="tel" placeholder="+39 3XX XXX XXXX" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-amber-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="mario.rossi@esempio.it" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-amber-500 transition-all" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="intervento" className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">
                    Tipo di Intervento
                  </label>
                  <select
                    id="intervento"
                    name="intervento"
                    required
                    className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-slate-900"
                  >
                    <option value="">Seleziona un'opzione...</option>
                    <option value="ristrutturazione-totale">Ristrutturazione Totale</option>
                    <option value="nuova-costruzione">Nuova Costruzione</option>
                    <option value="rifacimento-bagno-cucina">Rifacimento Bagno/Cucina</option>
                    <option value="manutenzione-esterni">Manutenzione Esterni / Facciate</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="messaggio" className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">
                    Messaggio
                  </label>
                  <Textarea id="messaggio" name="messaggio" placeholder="Parlaci del tuo progetto..." required className="rounded-xl bg-slate-50 border-slate-200 focus:ring-amber-500 min-h-[120px] transition-all" />
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full font-black text-lg h-16 bg-amber-500 text-slate-900 hover:bg-slate-900 hover:text-white shadow-xl shadow-amber-500/20 transition-all rounded-2xl group"
                >
                  {isPending ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Richiedi Preventivo
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}