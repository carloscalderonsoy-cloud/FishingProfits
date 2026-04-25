import { Zap, Send, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata = {
  title: 'Señales de Trading',
  description: 'Canal premium de señales con entradas, SL y TP claros. Lectura institucional.',
};

const incluye = [
  'Setups diarios con entrada, SL y TP',
  'Análisis pre-sesión de mercado',
  'Alertas en tiempo real',
  'Acceso a grupo privado Telegram',
  'Revisión semanal de operaciones',
  'Contexto macro y news trading',
];

const stats = [
  { k: '+65%',  v: 'Win rate promedio'   },
  { k: '3-6',   v: 'Setups por semana'   },
  { k: '24/5',  v: 'Cobertura de mercado'},
];

const preview = [
  { pair: 'EUR/USD',  type: 'LONG',  entry: '1.0840',  sl: '1.0815',  tp: '1.0895',  up: true,  time: '09:14 GMT' },
  { pair: 'BTC/USDT', type: 'SHORT', entry: '67,500',  sl: '68,100',  tp: '66,200',  up: false, time: '10:02 GMT' },
  { pair: 'XAU/USD',  type: 'LONG',  entry: '2,335.0', sl: '2,328.0', tp: '2,354.0', up: true,  time: '12:30 GMT' },
];

export default function SenalesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative pt-36 pb-20 overflow-hidden atm-bg scanlines">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[500px] z-0"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.15), transparent 65%)', filter: 'blur(12px)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <div className="inline-flex items-center gap-2 border border-amber/40 bg-amber/5 px-3 py-1.5 mb-6">
            <Zap className="w-3.5 h-3.5 text-amber" fill="currentColor" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-amber">CANAL PREMIUM</span>
          </div>
          <h1 className="font-display font-black uppercase text-white">
            <span className="h1-line-1">Señales con</span>
            <span className="h1-line-2" style={{ color: '#F59E0B', textShadow: '0 0 40px rgba(245,158,11,0.25)' }}>
              Precisión<span className="text-white">.</span>
            </span>
          </h1>
          <p className="font-body text-silver text-lg max-w-2xl mt-5 leading-relaxed">
            Setups institucionales entregados en caliente. Cada señal incluye entrada, stop loss, take profit y razonamiento. Tú decides si entras.
          </p>
        </div>
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to top, #141414, transparent)' }} />
      </section>

      {/* Incluye + Preview */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="eyebrow mb-4">Qué recibes</p>
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white mb-8 leading-tight">
              Todo lo que necesitas para operar.
            </h2>
            <ul className="space-y-3">
              {incluye.map((item, i) => (
                <li key={i} className="flex items-start gap-3 border-l-2 border-amber/40 pl-4 py-2 bg-surface/50 hover:border-amber/80 transition">
                  <span className="text-amber font-mono text-xs tracking-widest shrink-0 mt-0.5">0{i + 1}</span>
                  <span className="font-body text-silver">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Signal preview card */}
          <div className="relative">
            <span aria-hidden className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t border-l border-amber/60" />
            <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-amber/60" />
            <div className="bg-surface border border-white/[0.08] overflow-hidden">
              <div className="flex items-center justify-between bg-dark border-b border-white/[0.08] px-5 py-3">
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-tg-blue" />
                  <span className="font-display font-bold text-sm text-white tracking-widest">FISHING PROFITS · SEÑALES</span>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[0.65rem] text-green tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" /> LIVE
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {preview.map((p, i) => (
                  <div key={i} className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-lg text-white">{p.pair}</span>
                        <span className={`font-mono text-[0.65rem] tracking-widest px-2 py-0.5 ${p.up ? 'bg-green/20 text-green' : 'bg-red/20 text-red'}`}>
                          {p.type}
                        </span>
                      </div>
                      <span className="font-mono text-[0.65rem] text-gray">{p.time}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-black/40 py-2">
                        <p className="font-mono text-[0.6rem] text-gray tracking-widest uppercase">Entry</p>
                        <p className="font-mono text-sm text-white mt-1">{p.entry}</p>
                      </div>
                      <div className="bg-black/40 py-2">
                        <p className="font-mono text-[0.6rem] text-red tracking-widest uppercase">SL</p>
                        <p className="font-mono text-sm text-white mt-1">{p.sl}</p>
                      </div>
                      <div className="bg-black/40 py-2">
                        <p className="font-mono text-[0.6rem] text-green tracking-widest uppercase">TP</p>
                        <p className="font-mono text-sm text-white mt-1">{p.tp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 bg-black/60 font-mono text-[0.6rem] text-gray tracking-widest">
                PREVIEW · ejemplo ilustrativo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern-dense" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-3 gap-4 md:gap-8 border-y border-white/5 py-10">
            {stats.map((s) => (
              <div key={s.v} className="text-center">
                <div className="flex items-baseline justify-center gap-0.5 font-display font-black leading-none text-white">
                  <span className="text-[clamp(2.5rem,6vw,4rem)]">{s.k}</span>
                </div>
                <div className="font-mono text-[0.6rem] md:text-xs text-gray tracking-[0.25em] uppercase mt-3">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark relative overflow-hidden scanlines">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.12), transparent 70%)', filter: 'blur(40px)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow mb-4">Membresía · $150 USD / mes</p>
          <h2 className="font-display font-black text-white uppercase leading-[0.92] mb-6">
            <span className="h1-line-1">Únete al</span>
            <span className="h1-line-2" style={{ color: '#F59E0B', textShadow: '0 0 40px rgba(245,158,11,0.25)' }}>
              Canal<span className="text-white">.</span>
            </span>
          </h2>
          <p className="font-body text-silver mb-8 max-w-xl mx-auto">
            Plazas limitadas para mantener la calidad del grupo. Cancela cuando quieras.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-tg-blue text-white font-display font-bold tracking-[0.15em] text-sm px-8 py-4 hover:bg-tg-blue/90 transition"
            >
              <Send className="w-4 h-4" /> ACCEDER AL CANAL
            </a>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-green hover:text-green text-white font-display font-bold tracking-[0.15em] text-sm px-8 py-4 transition"
            >
              CANAL GRATUITO <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="font-mono text-[0.65rem] text-gray/60 mt-10 max-w-2xl mx-auto leading-relaxed">
            Las señales son opiniones educativas; no constituyen asesoría financiera ni garantía de rentabilidad. El trading conlleva riesgo de pérdida de capital. Opera bajo tu propia responsabilidad.
          </p>
        </div>
      </section>
    </>
  );
}
