
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-aziendale');
  const areas = [
    { name: 'Terracina', slug: 'terracina' },
    { name: 'Latina', slug: 'latina' },
    { name: 'Roma', slug: 'roma' },
    { name: 'Sabaudia', slug: 'sabaudia' },
    { name: 'San Felice Circeo', slug: 'san-felice-circeo' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-white">
              {logo && (
                <Image 
                  src={logo.imageUrl} 
                  alt="LI-COSTRUZIONI Logo" 
                  fill 
                  className="object-cover p-1"
                />
              )}
            </div>
            <span className="font-headline font-bold text-xl tracking-tighter text-white">LI-COSTRUZIONI</span>
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
            Eccellenza nelle costruzioni e ristrutturazioni dal 2009. Trasformiamo visioni in solide realtà abitative.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-accent">Contatti</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              Via Appia Antica 22, Terracina (LT)
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              +393248643886
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              info@li-costruzioni.it
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-accent">Link Rapidi</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link href="/servizi" className="hover:text-accent transition-colors">I Nostri Servizi</Link></li>
            <li><Link href="/progetti" className="hover:text-accent transition-colors">Portafoglio Lavori</Link></li>
            <li><Link href="/chi-siamo" className="hover:text-accent transition-colors">La Nostra Storia</Link></li>
            <li><Link href="/contatti" className="hover:text-accent transition-colors">Richiedi Preventivo</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-accent">Aree di Intervento</h4>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <Link 
                key={area.slug} 
                href={`/servizi/${area.slug}`}
                className="text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/5 hover:border-accent hover:text-accent transition-all"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} LI-COSTRUZIONI SRL. P.IVA 01234567890. Tutti i diritti riservati.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-accent transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
