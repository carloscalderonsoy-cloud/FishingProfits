import { siteConfig } from '@/lib/site';
import { ArrowRight } from 'lucide-react';

const nivelStyles = {
  'Básico': { top: 'border-t-green', label: 'text-green' },
  'Intermedio': { top: 'border-t-amber', label: 'text-amber' },
  'Avanzado': { top: 'border-t-red', label: 'text-red' },
};

export default function CursoCard({ curso }) {
  const style = nivelStyles[curso.nivel] || nivelStyles['Básico'];
  const showPeriod = curso.periodo && curso.periodo !== 'único';

  return (
    <article
      className={`group relative bg-surface border border-white/[0.08] ${style.top} border-t-2 hover:border-green/40 transition-colors p-7 flex flex-col`}
    >
      {curso.destacado && (
        <span className="absolute -top-3 left-5 bg-green text-black font-display font-bold text-[0.65rem] tracking-[0.2em] px-2.5 py-1">
          POPULAR
        </span>
      )}

      <div className="flex items-center justify-between mb-4">
        <span className={`font-mono text-[0.65rem] tracking-[0.25em] uppercase ${style.label}`}>
          {curso.nivel}
        </span>
        <span className="font-mono text-[0.65rem] text-gray">{curso.duracion.split('·')[0].trim()}</span>
      </div>

      <h3 className="font-display font-black text-2xl leading-tight text-white mb-3">
        {curso.nombre}
      </h3>
      <p className="font-body text-sm text-gray leading-relaxed mb-5">{curso.descripcion}</p>

      <ul className="space-y-1.5 mb-6 flex-1">
        {curso.temario.slice(0, 5).map((t, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-silver">
            <span className="text-green font-mono shrink-0 mt-0.5">▸</span>
            <span className="font-body">{t}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-white/5 pt-5 mt-2">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="font-mono text-xs text-gray">{curso.moneda}</span>
          <span className="font-display font-black text-4xl text-white">${curso.precio}</span>
          {showPeriod && <span className="font-mono text-xs text-gray">/{curso.periodo}</span>}
          {!showPeriod && <span className="font-mono text-xs text-gray">· pago único</span>}
        </div>

        <a
          href={waLink(curso.whatsapp_msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-green text-black font-display font-bold tracking-[0.15em] text-sm py-3 hover:bg-green/90 transition"
        >
          QUIERO ESTE CURSO <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}
