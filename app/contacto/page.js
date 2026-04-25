import { Instagram, Send } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con Fishing Profits por Telegram o Instagram.',
};

export default function ContactoPage() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-32 atm-bg scanlines">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[700px] h-[600px]"
        style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(76,175,35,0.15), transparent 65%)', filter: 'blur(10px)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="eyebrow mb-4">Hablemos</p>
        <h1 className="font-display font-black uppercase text-white mb-8">
          <span className="h1-line-1">Escríbenos</span>
          <span className="h1-line-2">Directo<span className="text-white">.</span></span>
        </h1>
        <p className="font-body text-silver text-lg max-w-xl mx-auto mb-10">
          Respondemos en minutos. Sin formularios, sin esperas. Elige el canal que prefieras.
        </p>

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a
            href={waLink('Hola, quiero información sobre Fishing Profits.')}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-display font-bold tracking-[0.15em] text-sm px-7 py-4 hover:bg-[#25D366]/90 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all"
          >
            <MessageCircle className="w-5 h-5" fill="white" strokeWidth={0} /> WHATSAPP
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-green hover:text-green text-white font-display font-bold tracking-[0.15em] text-sm px-7 py-4 transition"
          >
            <Instagram className="w-5 h-5" /> INSTAGRAM {siteConfig.instagramHandle}
          </a>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-tg-blue hover:text-tg-blue text-white font-display font-bold tracking-[0.15em] text-sm px-7 py-4 transition"
          >
            <Send className="w-5 h-5" /> TELEGRAM
          </a>
        </div>

        <p className="font-mono text-[0.65rem] text-gray/60 mt-14 max-w-xl mx-auto leading-relaxed">
          Fishing Profits es una plataforma de educación financiera. El trading de instrumentos financieros conlleva un alto riesgo de pérdida. Nada de lo publicado constituye asesoría financiera personalizada. Opera bajo tu propia responsabilidad.
        </p>
      </div>
    </section>
  );
}
