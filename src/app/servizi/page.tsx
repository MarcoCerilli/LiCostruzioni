import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Building2, Home, Paintbrush, HardHat, ShieldCheck, Ruler } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const allServices = [
  { title: "Ristrutturazioni Chiavi in Mano", icon: Paintbrush, desc: "Dall'idea alla consegna, gestiamo noi ogni aspetto del cantiere." },
  { title: "Costruzioni Civili", icon: Building2, desc: "Realizzazione di ville, condomini e complessi residenziali moderni." },
  { title: "Consolidamento Strutturale", icon: ShieldCheck, desc: "Interventi di messa in sicurezza e miglioramento sismico degli edifici." },
  { title: "Posa Pavimentazioni", icon: Ruler, desc: "Specialisti in marmi, resine e pavimentazioni industriali ad alte prestazioni." },
  { title: "Impermeabilizzazioni", icon: HardHat, desc: "Soluzioni definitive per tetti, terrazzi e fondamenta contro le infiltrazioni." },
  { title: "Manutenzione Condominiale", icon: Home, desc: "Servizi programmati e pronto intervento per la cura del tuo stabile." }
];

export default function ServicesPage() {
  const serviceImg = PlaceHolderImages.find(img => img.id === 'service-renovation');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Servizi Edili Professionali</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offriamo soluzioni su misura per ogni esigenza abitativa o commerciale, garantendo sempre il massimo degli standard qualitativi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {allServices.map((s, i) => (
            <Card key={i} className="bg-card hover:bg-primary/5 transition-all border-none group shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                {s.desc}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-primary-foreground shadow-2xl">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
            {serviceImg && (
              <Image
                src={serviceImg.imageUrl}
                alt="Lavoro di qualità"
                fill
                className="object-cover"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Pronto per iniziare il tuo prossimo progetto?</h2>
            <p className="mb-8 opacity-90 text-lg">
              Il nostro team di esperti è a tua disposizione per una consulenza tecnica gratuita e senza impegno. Analizzeremo le tue necessità per fornirti il miglior preventivo.
            </p>
            <Button size="lg" variant="secondary" className="font-bold text-lg h-14 px-10 shadow-xl" asChild>
              <Link href="/contatti">Richiedi una Consulenza</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
