import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Send } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark border-t border-white/[0.08] mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <Image src="/logo.png" alt="Fishing Profits" width={2588} height={1664} className="h-12 w-auto object-contain" />
          <p className="font-body text-sm text-gray leading-relaxed max-w-xs">
            Plataforma de educación en trading en español. Aprende a leer el mercado y opera con precisión.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-green hover:text-green text-silver transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-[#2AABEE] hover:text-[#2AABEE] text-silver transition"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Navegación</p>
          <ul className="space-y-2 font-display tracking-wider text-sm">
            {[
              { href: '/cursos', label: 'CURSOS' },
              { href: '/asesorias', label: 'ASESORÍAS' },
              { href: '/senales', label: 'SEÑALES' },
              { href: '/contacto', label: 'CONTACTO' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-silver hover:text-green transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Disclaimer legal</p>
          <p className="font-mono text-[0.65rem] leading-relaxed text-gray/70">
            El trading de instrumentos financieros conlleva un alto riesgo de pérdida de capital y puede no ser
            apto para todos los inversores. Los resultados pasados no garantizan ganancias futuras. Fishing
            Profits es una plataforma de educación financiera; nada de lo aquí publicado constituye asesoría
            financiera personalizada. Opera bajo tu propia responsabilidad.
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[0.7rem] text-gray">© {year} Fishing Profits. Todos los derechos reservados.</p>
          <p className="font-mono text-[0.7rem] text-gray">{siteConfig.instagramHandle}</p>
        </div>
      </div>
    </footer>
  );
}
