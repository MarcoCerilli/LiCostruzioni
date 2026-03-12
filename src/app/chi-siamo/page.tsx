import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function AboutPage() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'project-terracina-1');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">La Nostra Storia</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              LI-COSTRUZIONI SRL nasce dalla passione per l'arte del costruire bene. Fondata a Terracina, l'azienda si è evoluta costantemente, integrando le tecnologie più moderne nel rispetto della tradizione artigianale italiana.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              La nostra missione è semplice: superare le aspettative dei nostri clienti, offrendo non solo edifici, ma veri e propri spazi di vita progettati per durare nel tempo.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-border">
              <div>
                <span className="text-4xl font-bold text-primary block mb-1">15+</span>
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Anni di Esperienza</span>
              </div>
              <div>
                <span className="text-4xl font-bold text-primary block mb-1">200+</span>
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Progetti Completati</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            {teamImg && (
              <Image
                src={teamImg.imageUrl}
                alt="Squadra LI-COSTRUZIONI al lavoro"
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-primary/5" />
          </div>
        </div>

        <div className="bg-card p-12 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-16">I Nostri Valori Fondamentali</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Trasparenza", desc: "Ogni preventivo è dettagliato e ogni fase del lavoro è documentata per la tua tranquillità." },
              { title: "Eccellenza", desc: "Non accettiamo compromessi sulla qualità dei materiali e sull'esecuzione tecnica." },
              { title: "Innovazione", desc: "Utilizziamo le tecnologie più avanzate, inclusa l'intelligenza artificiale per l'assistenza clienti." }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="text-primary text-5xl font-bold mb-4 opacity-20">0{i+1}</div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
