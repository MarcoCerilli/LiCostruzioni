import { Hero } from '@/components/Hero';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const validCities = ['terracina', 'latina', 'roma', 'sabaudia', 'san-felice-circeo'];

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = params.city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `Impresa Edile a ${city} | LI-COSTRUZIONI SRL`,
    description: `Cerchi un'impresa edile a ${city}? LI-COSTRUZIONI SRL offre servizi di ristrutturazione e costruzione di alta qualità a ${city} e dintorni.`,
  };
}

export default function LocalServicePage({ params }: { params: { city: string } }) {
  if (!validCities.includes(params.city.toLowerCase())) {
    notFound();
  }

  const city = params.city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <>
      <Hero city={city} />
      
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Perché scegliere LI-COSTRUZIONI a {city}</h2>
          <p className="text-muted-foreground">
            Conosciamo profondamente il territorio di {city}. Offriamo consulenza tecnica dedicata e soluzioni che rispettano i canoni estetici e funzionali della zona.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" />
                Presenza Locale
              </CardTitle>
            </CardHeader>
            <CardContent>
              Siamo operativi su tutto il territorio di {city} con squadre dedicate per garantire interventi tempestivi.
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" />
                Iter Burocratici
              </CardTitle>
            </CardHeader>
            <CardContent>
              Gestiamo noi tutti i permessi comunali necessari per i lavori a {city}, togliendoti ogni preoccupazione.
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" />
                Sopralluoghi Gratuiti
              </CardTitle>
            </CardHeader>
            <CardContent>
              Offriamo sopralluoghi gratuiti in tutta {city} per valutare insieme il tuo progetto.
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" />
                Materiali Selezionati
              </CardTitle>
            </CardHeader>
            <CardContent>
              Collaboriamo con i migliori fornitori locali di {city} per offrirti sempre il top della gamma.
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
