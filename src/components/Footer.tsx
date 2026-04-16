import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ShieldCheck, Award } from 'lucide-react'; // Aggiunto ShieldCheck e Award
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-aziendale');
  
  const areas = [
    { name: 'Impresa Edile Terracina', slug: 'terracina' },
    { name: 'Ristrutturazioni Latina', slug: 'latina' },
    { name: 'Cantieri a Roma', slug: 'roma' },
    { name: 'Edilizia Sabaudia', slug: 'sabaudia' },
    { name: 'San Felice Circeo', slug: 'san-felice-circeo' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* BRAND & CERTIFICAZIONE SOA */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="relative h-11 w-11 rounded-xl overflow-hidden bg-white shadow-inner transition-transform group-hover:-rotate-3">
              {logo && (
                <Image 
                  src={logo.imageUrl} 
                  alt="L.I-Costruzioni SRL" 
                  fill 
                  className="object-contain p-2"
                />
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-xl tracking-tighter text-white uppercase">L.I-Costruzioni</span>
              <span className="text-[10px] text-amber-500 font-bold tracking-widest uppercase text-balance">Edilizia High-End</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Impresa leader nel Lazio per ristrutturazioni e grandi opere. Eccellenza tecnica e risanamento definitivo certificato.
          </p>
          
          {/* BADGE SOA OTTIMIZZATO */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl group hover:border-amber-500/50 transition-colors">
            <div className="h-10 w-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
               <ShieldCheck className="text-amber-500 h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-white tracking-widest">Impresa Attestata</p>
              <p className="text-[12px] font-bold text-amber-500 uppercase">Qualificazione SOA</p>
            </div>
          </div>
        </div>

        {/* CONTATTI */}
        <div>
          <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Contatti Diretti</h4>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
              <a href="https://goo.gl/maps/xxxx" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                Via Appia Antica 22,<br />04019 Terracina (LT)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-amber-500 shrink-0" />
              <a href="tel:+393248643886" className="hover:text-amber-500 transition-colors font-mono tracking-tight font-bold text-lg text-white">
                +39 324.8643886
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-amber-500 shrink-0" />
              <a href="mailto:licostruzioni.luca@gmail.com" className="hover:text-amber-500 transition-colors">
                licostruzioni.luca@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* AZIENDA & SPECIALIZZAZIONI */}
        <div>
          <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Servizi e Garanzie</h4>
          <ul className="space-y-3 text-sm text-slate-400 font-bold uppercase text-[11px] tracking-wider">
            <li><Link href="/servizi/umidita-risalita" className="hover:text-amber-500 flex items-center gap-2 transition-colors">Risanamento Umidità</Link></li>
            <li><Link href="/servizi/ristrutturazioni" className="hover:text-amber-500 flex items-center gap-2 transition-colors">Ristrutturazioni SOA</Link></li>
            <li><Link href="/progetti" className="hover:text-amber-500 flex items-center gap-2 transition-colors">Opere Realizzate</Link></li>
            <li><Link href="/contatti" className="hover:text-amber-500 flex items-center gap-2 transition-colors underline-amber">Richiedi Sopralluogo</Link></li>
          </ul>
        </div>

        {/* AREE SEO */}
        <div>
          <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Operatività Lazio</h4>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <Link 
                key={area.slug} 
                href={`/servizi/${area.slug}`}
                className="text-[9px] uppercase font-black bg-white/5 px-3 py-2 rounded-lg border border-white/10 hover:border-amber-500 hover:text-amber-500 transition-all text-slate-400"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} L.I-Costruzioni SRL • P.IVA 01234567890 • Impresa SOA Certificata
        </div>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}