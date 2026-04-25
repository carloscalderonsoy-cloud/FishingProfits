import { promises as fs } from 'fs';
import path from 'path';
import CursoCard from '@/components/CursoCard';
import { siteConfig } from '@/lib/site';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Cursos de Trading',
  description: 'Cursos de trading en español, desde fundamentos hasta operativa institucional.',
};

async function getCursos() {
  const file = await fs.readFile(path.join(process.cwd(), 'data', 'cursos.json'), 'utf-8');
  return JSON.parse(file).cursos;
}

export default async function CursosPage() {
  const cursos = await getCursos();
  return (
    <>
      {/* Page header */}
      <section className="relative pt-36 pb-20 overflow-hidden atm-bg scanlines">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[500px] z-0"
          style={{ background: 'radial-gradient(ellipse, rgba(76,175,35,0.18), transparent 65%)', filter: 'blur(12px)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-4">Catálogo · Trading</p>
          <h1 className="font-display font-black uppercase text-white">
            <span className="h1-line-1">Elige tu</span>
            <span className="h1-line-2">Nivel<span className="text-white">.</span></span>
          </h1>
          <p className="font-body text-silver text-lg max-w-2xl mt-5 leading-relaxed">
            Programas diseñados para llevarte desde cero hasta operativa institucional. Cada curso incluye comunidad, soporte y material descargable.
          </p>
        </div>
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to top, #141414, transparent)' }} />
      </section>

      {/* Grid */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cursos.map((c) => <CursoCard key={c.id} curso={c} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern-dense" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-black uppercase text-white leading-none mb-2">
            <span className="h1-line-1">¿No sabes cuál elegir?</span>
          </h2>
          <p className="font-body text-silver mt-4 mb-8">
            Escríbenos por Telegram y te recomendamos el curso según tu nivel y objetivos.
          </p>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green text-black font-display font-bold tracking-[0.15em] text-sm px-7 py-3.5 hover:bg-green-2 hover:shadow-[0_0_24px_rgba(76,175,35,0.5)] transition-all"
          >
            CONSULTAR AHORA <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
