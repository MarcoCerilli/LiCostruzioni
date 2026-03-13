"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock, Send, Loader2 } from "lucide-react";
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
    const data = {
      nome: formData.get("nome"),
      telefono: formData.get("telefono"),
      email: formData.get("email"),
      intervento: formData.get("intervento"),
      messaggio: formData.get("messaggio"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Errore durante l'invio");

      // Redirect alla Thank You Page per tracciare la conversione Ads
      router.push("/contatti/grazie");
    } catch (error) {
      alert("Si è verificato un errore. Per favore riprova o chiamaci direttamente.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Contattaci</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Siamo pronti ad ascoltare le tue idee e trasformarle in realtà. Richiedi un preventivo gratuito o un sopralluogo tecnico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* COLONNA SINISTRA: INFO AZIENDALI */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Informazioni Aziendali</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, label: "Indirizzo", value: "Via Appia Antica 22, Terracina (LT)" },
                { icon: Phone, label: "Telefono", value: "+39 324 864 3886" },
                { icon: Mail, label: "Email", value: "info@li-costruzioni.it" },
                { icon: Clock, label: "Orari", value: "Lun-Ven: 08:30 - 18:30" },
              ].map((item, idx) => (
                <Card key={idx} className="bg-slate-50 border-none shadow-sm">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-widest text-slate-500">{item.label}</span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-900 font-medium">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-8 bg-slate-800 rounded-[2rem] text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h3 className="text-2xl text-white font-bold mb-4">Urgenze?</h3>
                <p className="mb-6 text-slate-300">Per interventi di manutenzione straordinaria o urgenze tecniche, chiamaci subito.</p>
                <a 
                  href="tel:+393248643886" 
                  className="inline-flex items-center justify-center bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-white transition-colors text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Chiama Ora
                </a>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Phone size={150} />
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: MODULO DI CONTATTO */}
          <div>
            <Card className="bg-white p-8 border-slate-100 shadow-2xl rounded-[2.5rem]">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Richiedi un Preventivo</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Nome</label>
                    <Input 
                      name="nome"
                      placeholder="Tuo Nome" 
                      className="bg-slate-50 border-slate-200 focus:bg-white transition-all" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Telefono</label>
                    <Input 
                      name="telefono"
                      type="tel"
                      placeholder="Tuo Telefono" 
                      className="bg-slate-50 border-slate-200 focus:bg-white transition-all" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="tua@email.it" 
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-all" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Tipologia Intervento</label>
                  <Input 
                    name="intervento"
                    placeholder="Es: Ristrutturazione Bagno" 
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-all" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Messaggio</label>
                  <Textarea 
                    name="messaggio"
                    placeholder="Descrivi brevemente il tuo progetto..." 
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-all min-h-[120px]" 
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full font-bold text-lg h-14 bg-amber-500 text-slate-900 hover:bg-slate-900 hover:text-white shadow-lg shadow-amber-500/20 transition-all rounded-2xl"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      Invia Messaggio
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
              
              <p className="mt-4 text-[10px] text-slate-400 text-center uppercase tracking-widest">
                Trattamento dati garantito secondo normativa privacy
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}