import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata = {
  title: 'Asesorías en Vivo',
  description: 'Sesiones de mentoría 1 a 1 con análisis personalizado de tu operativa.',
};

const incluye = [
  'Diagnóstico completo de tu operativa actual',
  'Plan de trading personalizado a tu capital y horario',
  'Revisión de operaciones con feedback accionable',
  'Mentoría en gestión de riesgo y psicología',
  'Acceso directo al mentor por Telegram',
  'Sesiones grabadas para repasar cuando quieras',
];

const pasos = [
  { n: '01', t: 'Agenda',    d: 'Escríbenos por Telegram y reservamos una llamada exploratoria gratuita.' },
  { n: '02', t: 'Diagnóstico', d: 'Revisamos tu operativa, historial y objetivos. Identificamos el gap real.' },
  { n: '03', t: 'Plan',      d: 'Diseñamos un plan de mentoría a medida con objetivos y entregables claros.' },
  { n: '04', t: 'Ejecución', d: 'Sesiones en vivo semanales más seguimiento diario hasta lograr consistencia.' },
];

const faqs = [
  { q: '¿Cuánto dura la mentoría?',      a: 'Los programas típicos son de 4, 8 o 12 semanas. El plan exacto se define en la sesión de diagnóstico según tu nivel.' },
  { q: '¿Necesito experiencia previa?',  a: 'No es imprescindible, pero si vienes de cero te recomendamos primero el curso base y después la mentoría para acelerar resultados.' },
  { q: '¿Las sesiones son grabadas?',    a: 'Sí. Tienes acceso a todas las sesiones grabadas para repasar el material cuando quieras.' },
  { q: '¿En qué mercados operamos?',     a: 'Principalmente Forex, índices y crypto. La metodología es agnóstica al activo.' },
];

export default function AsesoriasPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative pt-36 pb-20 overflow-hidden atm-bg scanlines">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[500px] z-0"
          style={{ background: 'radial-gradient(ellipse, rgba(212,43,43,0.15), transparent 65%)', filter: 'blur(12px)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-4">01 a 1 · En vivo</p>
          <h1 className="font-display font-black uppercase text-white">
            <span className="h1-line-1">Mentoría</span>
            <span className="h1-line-2" style={{ color: '#D42B2B', textShadow: '0 0 40px rgba(212,43,43,0.25)' }}>
              Personalizada<span className="text-white">.</span>
            </span>
          </h1>
          <p className="font-body text-silver text-lg max-w-2xl mt-5 leading-relaxed">
            Sesiones uno a uno diseñadas a partir de tu operativa real. Sin teoría genérica, sin plantillas. Solo lo que tú necesitas para operar con consistencia.
          </p>
        </div>
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to top, #141414, transparent)' }} />
      </section>

      {/* Incluye + Proceso */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-4">Qué incluye</p>
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white mb-8 leading-tight">
              Todo lo que un trader serio necesita.
            </h2>
            <ol className="space-y-4">
              {incluye.map((item, i) => (
                <li key={i} className="flex items-start gap-5 border-b border-white/5 pb-4">
                  <span className="font-display font-black text-3xl text-green leading-none shrink-0 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body text-silver text-base pt-1">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="eyebrow mb-4">Proceso</p>
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white mb-8 leading-tight">
              4 pasos simples.
            </h2>
            <div className="space-y-3">
              {pasos.map((p) => (
                <div key={p.n} className="relative bg-surface border border-white/[0.08] p-6 hover:border-green/30 transition group">
                  <span aria-hidden className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t border-r border-green/20 group-hover:border-green/60 transition-colors" />
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-xs text-green tracking-widest">{p.n}</span>
                    <h3 className="font-display font-bold text-xl text-white tracking-wider uppercase">{p.t}</h3>
                  </div>
                  <p className="font-body text-sm text-gray leading-relaxed pl-12">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern-dense" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-4">Preguntas frecuentes</p>
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white mb-10">
            Dudas comunes.
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-surface border border-white/[0.08] hover:border-green/30 transition">
                <summary className="flex items-center justify-between gap-4 px-6 py-5">
                  <span className="font-display font-bold text-lg text-white tracking-wide">{f.q}</span>
                  <span className="font-mono text-green text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="font-body text-silver text-sm leading-relaxed px-6 pb-5">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark relative overflow-hidden scanlines">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-white uppercase leading-[0.92] mb-6">
            <span className="h1-line-1">Vamos directo</span>
            <span className="h1-line-2 text-[clamp(3rem,7vw,6rem)]">Al grano<span className="text-white">.</span></span>
          </h2>
          <p className="font-body text-silver mb-8">
            Reserva tu sesión exploratoria sin costo. Te decimos con honestidad si la mentoría es para ti.
          </p>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green text-black font-display font-bold tracking-[0.15em] text-sm px-8 py-4 hover:bg-green-2 hover:shadow-[0_0_24px_rgba(76,175,35,0.5)] transition-all"
          >
            AGENDAR POR TELEGRAM <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
