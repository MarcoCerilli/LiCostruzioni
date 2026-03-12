import Link from 'next/link';
import { Hammer, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const areas = [
    { name: 'Terracina', slug: 'terracina' },
    { name: 'Latina', slug: 'latina' },
    { name: 'Roma', slug: 'roma' },
    { name: 'Sabaudia', slug: 'sabaudia' },
    { name: 'San Felice Circeo', slug: 'san-felice-circeo' }
  ];

  return (
    <footer className="bg-background border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-1.5 rounded-lg">
              <Hammer className="text-primary-foreground h-5 w-5" />
            </div>
            <span className="font-headline font-bold text-lg">LI-COSTRUZIONI</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Eccellenza nelle costruzioni e ristrutturazioni. La tua casa, la nostra passione.
          </p>
          <div className="flex gap-4">
            {/* Social icons could go here */}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contatti</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              Via Appia Antica 122, Terracina (LT)
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              +39 0773 000000
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              info@li-costruzioni.it
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Link Rapidi</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="/servizi" className="hover:text-primary transition-colors">I Nostri Servizi</Link></li>
            <li><Link href="/progetti" className="hover:text-primary transition-colors">Portafoglio Lavori</Link></li>
            <li><Link href="/chi-siamo" className="hover:text-primary transition-colors">La Nostra Storia</Link></li>
            <li><Link href="/contatti" className="hover:text-primary transition-colors">Richiedi Preventivo</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Aree di Intervento</h4>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <Link 
                key={area.slug} 
                href={`/servizi/${area.slug}`}
                className="text-xs bg-card px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} LI-COSTRUZIONI SRL. P.IVA 01234567890. Tutti i diritti riservati.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
