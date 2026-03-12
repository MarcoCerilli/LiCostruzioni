import { Hero } from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Building2, Home, Paintbrush, HardHat } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: "Ristrutturazioni",
    desc: "Rinnoviamo i vostri spazi con materiali di pregio e finiture impeccabili.",
    icon: Paintbrush
  },
  {
    title: "Nuove Costruzioni",
    desc: "Edifici moderni, sicuri ed energeticamente efficienti.",
    icon: Building2
  },
  {
    title: "Manutenzione",
    desc: "Interventi rapidi e risolutivi per ogni esigenza del tuo immobile.",
    icon: HardHat
  },
  {
    title: "Design d'Interni",
    desc: "Progettazione degli spazi per coniugare estetica e funzionalità.",
    icon: Home
  }
];

export default function HomePage() {
  const serviceImg = PlaceHolderImages.find(img => img.id === 'service-renovation');

  return (
    <>
      <Hero />
      
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Offriamo una gamma completa di servizi edilizi, curando ogni dettaglio con la massima professionalità.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-none bg-background/50 hover:bg-primary/5 transition-colors group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {serviceImg && (
              <Image
                src={serviceImg.imageUrl}
                alt={serviceImg.description}
                fill
                className="object-cover"
                data-ai-hint={serviceImg.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-primary/10" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Qualità Certificata e Affidabilità</h2>
            <p className="text-muted-foreground mb-6">
              LI-COSTRUZIONI SRL opera nel settore edile da anni, portando avanti una tradizione di eccellenza. La nostra sede a Terracina è il cuore pulsante delle nostre attività, ma siamo orgogliosi di servire clienti in tutta la provincia di Latina e Roma.
            </p>
            <ul className="space-y-4">
              {['Personale Specializzato', 'Materiali di Alta Qualità', 'Rispetto dei Tempi', 'Trasparenza Totale'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
