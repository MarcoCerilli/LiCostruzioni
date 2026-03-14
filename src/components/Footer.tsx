import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-aziendale');
  
  // SEO: Testi dei link ottimizzati con keyword + città
  const areas = [
    { name: 'Impresa Edile Terracina', slug: 'terracina' },
    { name: 'Ristrutturazioni Latina', slug: 'latina' },
    { name: 'Cantieri a Roma', slug: 'roma' },
    { name: 'Edilizia Sabaudia', slug: 'sabaudia' },
    { name: 'San Felice Circeo', slug: 'san-felice-circeo' }
  ];

  return (
    <footer className="bg-[#1a1f1a] text-primary-foreground pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* BRAND & MISSION */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="relative h-11 w-11 rounded-xl overflow-hidden bg-white shadow-inner transition-transform group-hover:-rotate-3">
              {logo && (
                <Image 
                  src={logo.imageUrl} 
                  alt="L.I-Costruzioni SRL - Edilizia di eccellenza" 
                  fill 
                  className="object-contain p-2"
                />
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-xl tracking-tighter text-white">L.I-Costruzioni</span>
              <span className="text-[10px] text-accent font-bold tracking-widest uppercase">S.R.L.</span>
            </div>
          </Link>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Specialisti in ristrutturazioni residenziali e commerciali. Portiamo la qualità dell'artigianato italiano in ogni cantiere tra Terracina e Roma.
          </p>
        </div>

        {/* CONTATTI - Con link cliccabili per SEO/UX */}
        <div>
          <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Contatti</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <a 
                href="https://goo.gl/maps/xxxx" // Inserisci link Google Maps reale
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Via Appia Antica 22,<br />04019 Terracina (LT)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent shrink-0" />
              <a href="tel:+393248643886" className="hover:text-accent transition-colors font-mono tracking-tight">
                +39 324 864 3886
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent shrink-0" />
              <a href="mailto:info@L.I-Costruzionisrl.it" className="hover:text-accent transition-colors">
                info@L.I-Costruzionisrl.it
              </a>
            </li>
          </ul>
        </div>

        {/* LINK RAPIDI */}
        <div>
          <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Azienda</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><Link href="/servizi" className="hover:text-accent flex items-center gap-2">I Nostri Servizi</Link></li>
            <li><Link href="/progetti" className="hover:text-accent flex items-center gap-2">Progetti Realizzati</Link></li>
            <li><Link href="/chi-siamo" className="hover:text-accent flex items-center gap-2">Certificazioni e Team</Link></li>
            <li><Link href="/contatti" className="hover:text-accent flex items-center gap-2">Richiedi Sopralluogo</Link></li>
          </ul>
        </div>

        {/* AREE SEO - Tag Cloud */}
        <div>
          <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Copertura Territoriale</h4>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <Link 
                key={area.slug} 
                href={`/servizi/${area.slug}`}
                className="text-[10px] uppercase font-bold bg-white/5 px-3 py-2 rounded-lg border border-white/10 hover:border-accent/50 hover:bg-accent/10 hover:text-accent transition-all"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium text-primary-foreground/40 uppercase tracking-widest">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} L.I-Costruzioni SRL • P.IVA 01234567890 • Capitale Sociale i.v. €10.000
        </div>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}