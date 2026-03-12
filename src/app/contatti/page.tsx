import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactsPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contattaci</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Siamo pronti ad ascoltare le tue idee e trasformarle in realtà. Richiedi un preventivo gratuito o un sopralluogo tecnico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Informazioni Aziendali</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, label: "Indirizzo", value: "Via Appia Antica 122, Terracina (LT)" },
                { icon: Phone, label: "Telefono", value: "+39 0773 000000" },
                { icon: Mail, label: "Email", value: "info@li-costruzioni.it" },
                { icon: Clock, label: "Orari", value: "Lun-Ven: 08:30 - 18:30" },
              ].map((item, idx) => (
                <Card key={idx} className="bg-card/50 border-none">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wider">{item.label}</span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-8 bg-primary rounded-2xl text-primary-foreground relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Urgenze?</h3>
                <p className="mb-6 opacity-90">Per interventi di manutenzione straordinaria o urgenze tecniche, chiamaci subito al nostro numero dedicato.</p>
                <Button variant="secondary" className="font-bold text-lg h-12 px-8">Chiama Ora</Button>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Phone size={120} />
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-card p-8 border-primary/20 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">Richiedi un Preventivo</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome</label>
                    <Input placeholder="Tuo Nome" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Telefono</label>
                    <Input placeholder="Tuo Telefono" className="bg-background" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="tua@email.it" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipologia Intervento</label>
                  <Input placeholder="Es: Ristrutturazione Bagno" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Messaggio</label>
                  <Textarea placeholder="Descrivi brevemente il tuo progetto..." className="bg-background min-h-[120px]" />
                </div>
                <Button className="w-full font-bold text-lg h-12 shadow-lg shadow-primary/20">Invia Messaggio</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
