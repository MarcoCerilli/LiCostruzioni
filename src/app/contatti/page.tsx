"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock, Send, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactsPage() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    
    // Protezione HoneyPot: se questo campo è pieno, è un bot
    if (formData.get("_honey")) {
      setIsPending(false);
      return;
    }

    const data = {
      nome: formData.get("nome"),
      telefono: formData.get("telefono"),
      email: formData.get("email"),
      intervento: formData.get("intervento"),
      messaggio: formData.get("messaggio"),
    };

    try {
      // Simulazione invio o chiamata API reale
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Errore durante l'invio");

      router.push("/contatti/grazie");
    } catch (error) {
      alert("Si è verificato un errore. Per favore riprova o chiamaci direttamente al +39 324 864 3886.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block animate-fade-in">
            Sopralluoghi Gratuiti
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">
            Iniziamo il tuo <span className="text-amber-500">Progetto</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Hai in mente una ristrutturazione o una nuova costruzione? Il nostro team tecnico è a tua disposizione per una consulenza personalizzata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* INFO AZIENDALI & MAPPA */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3 italic">
                Sede Operativa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: "Dove Siamo", value: "Via Appia Antica 22, Terracina (LT)" },
                  { icon: Phone, label: "Pronto Intervento", value: "+39 324 864 3886" },
                  { icon: Mail, label: "Scrivici", value: "info@li-costruzionisrl.it" },
                  { icon: Clock, label: "Orario Uffici", value: "Lun-Ven: 08:30 - 18:30" },
                ].map((item, idx) => (
                  <Card key={idx} className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-3 pb-2 space-y-0">
                      <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-[10px] uppercase tracking-widest text-slate-400">{item.label}</span>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-900 font-bold text-sm tracking-tight">{item.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* MAPPA EMBED - Cruciale per Local SEO */}
            <div className="h-[350px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <iframe
                title="Sede LI-COSTRUZIONI Terracina"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4!2d13.2!3d41.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiAxM8KwMDAnMDAuMCJF!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* MODULO DI CONTATTO */}
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-[3rem] blur-2xl -z-10" />
            <Card className="bg-white p-6 md:p-10 border-none shadow-2xl rounded-[3rem]">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Invia la tua Richiesta</h2>
                <p className="text-sm text-slate-400">Ti risponderemo entro 24 ore lavorative.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* HoneyPot Hidden Field */}
                <input type="text" name="_honey" className="hidden" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Nome Completo</label>
                    <Input name="nome" placeholder="Mario Rossi" className="h-12 rounded-xl bg-slate-50 border-slate-100 focus:ring-amber-500 transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Telefono</label>
                    <Input name="telefono" type="tel" placeholder="+39 3XX XXX XXXX" className="h-12 rounded-xl bg-slate-50 border-slate-100 focus:ring-amber-500 transition-all" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                  <Input name="email" type="email" placeholder="mario.rossi@esempio.it" className="h-12 rounded-xl bg-slate-50 border-slate-100 focus:ring-amber-500 transition-all" required />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Tipo di Intervento</label>
                  <select 
                    name="intervento" 
                    className="flex h-12 w-full rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    required
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
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Messaggio</label>
                  <Textarea name="messaggio" placeholder="Parlaci del tuo progetto..." className="rounded-xl bg-slate-50 border-slate-100 focus:ring-amber-500 min-h-[120px] transition-all" required />
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
                      Richiedi Preventivo Gratis
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-4 uppercase tracking-[0.2em]">
                  <ShieldCheck className="h-3 w-3" />
                  Connessione Protetta & Privacy Garantita
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}