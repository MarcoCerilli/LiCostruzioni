import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ShieldCheck, Award, Globe2 } from 'lucide-react'; 
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-aziendale');
  
  // Rinominate per essere più autorevoli
  const areas = [
    'Roma',
    'Latina',
    'Terracina',
    'Sabaudia',
    'San Felice Circeo'
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
              <span className="text-[10px] text-amber-500 font-bold tracking-widest uppercase text-balance">General Contractor</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
            "L'eccellenza costruttiva al servizio delle grandi idee."
          </p>
          
          <div className="flex flex-col gap-3">
            {/* BADGE SOA */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl">
              <ShieldCheck className="text-amber-500 h-5 w-5" />
              <div>
                <p className="text-[9px] font-black uppercase text-white tracking-widest">Qualificazione</p>
                <p className="text-[11px] font-bold text-amber-500 uppercase">Certificazione SOA</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTATTI */}
        <div>
          <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest flex items-center gap-2">
            <span className="h-px w-4 bg-amber-500"></span> Sede e Uffici
          </h4>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3 font-medium">
              <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
              <span>Via Appia Antica 22,<br />04019 Terracina (LT)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-amber-500 shrink-0" />
              <a href="tel:+393248643886" className="hover:text-amber-500 transition-colors font-mono font-bold text-lg text-white">
                +39 324.8643886
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-amber-500 shrink-0" />
              <a href="mailto:licostruzioni.luca@gmail.com" className="hover:text-amber-500 transition-colors text-xs">
                licostruzioni.luca@gmail.com
              </a>
            </li>
          </ul>
        </div>

       {/* SERVIZI - VERSIONE EVOLUTA */}
        <div>
          <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest flex items-center gap-2">
            <span className="h-px w-4 bg-amber-500"></span> Corporate
          </h4>
          <ul className="space-y-3 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            {/* Sostituiamo il classico link 'ristrutturazioni' con qualcosa di più imprenditoriale */}
            <li>
              <Link href="/progetti" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                Sviluppo & Valorizzazione Asset
              </Link>
            </li>
            <li>
              <Link href="/servizi#risanamento" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                Ingegneria del Risanamento
              </Link>
            </li>
            <li>
              <Link href="/progetti" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                Portfolio Architettonico
              </Link>
            </li>
            <li className="pt-4">
              <Link 
                href="/contatti" 
                className="group inline-flex items-center gap-2 text-white bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-amber-500 hover:text-slate-950 transition-all duration-300"
              >
                Consulenza Tecnica
                <Award className="h-3 w-3 text-amber-500 group-hover:text-slate-950" />
              </Link>
            </li>
          </ul>
        </div>

        {/* OPERATIVITÀ (NON CLICCABILE PER LOOK INTERNAZIONALE) */}
        <div>
          <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest flex items-center gap-2">
            <span className="h-px w-4 bg-amber-500"></span> Presidio Territoriale
          </h4>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-slate-500 mb-2 leading-tight uppercase font-medium">
                Coordiniamo cantieri su tutto il territorio regionale:
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {areas.map((area) => (
                <span 
                  key={area} 
                  className="text-[10px] uppercase font-black text-slate-300 flex items-center gap-1.5"
                >
                  <Globe2 className="h-3 w-3 text-amber-500/50" />
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-[9px] text-slate-300 leading-relaxed italic">
                    Logistica integrata e personale diretto garantiscono operatività immediata in tutto il Lazio.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} L.I-Costruzioni SRL • P.IVA 01234567890 • International Standard Quality
        </div>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}