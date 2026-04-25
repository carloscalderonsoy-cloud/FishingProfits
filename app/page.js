import Image from 'next/image';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import { ArrowRight, Target, Shield, Users, Zap, BookOpen, Send, Radio } from 'lucide-react';
import Ticker from '@/components/Ticker';
import { siteConfig } from '@/lib/site';

async function getTestimonios() {
  const file = await fs.readFile(path.join(process.cwd(), 'data', 'testimonios.json'), 'utf-8');
  return JSON.parse(file).testimonios;
}

export default async function HomePage() {
  const testimonios = await getTestimonios();

  const productos = [
    { href: '/cursos',    tag: 'CURSOS',    title: 'Programa completo', desc: 'De cero a trader consistente. Fundamentos, price action y gestión profesional.', topColor: 'border-t-green', icon: BookOpen, accent: 'text-green' },
    { href: '/asesorias', tag: 'ASESORÍAS', title: 'Mentoría 1 a 1',    desc: 'Sesiones personalizadas en vivo. Revisamos tu operativa y construimos tu plan.', topColor: 'border-t-red',   icon: Users,     accent: 'text-red'   },
    { href: '/senales',   tag: 'SEÑALES',   title: 'Canal Premium',     desc: 'Setups diarios con entrada, SL y TP. Lectura institucional del mercado.',       topColor: 'border-t-amber', icon: Radio,     accent: 'text-amber' },
  ];

  const features = [
    { icon: Target, title: 'METODOLOGÍA CLARA', desc: 'Sistema replicable basado en estructura de mercado, price action y confluencias institucionales.' },
    { icon: Shield, title: 'GESTIÓN DE RIESGO',  desc: 'Sin riesgo definido, no hay trading. Aprendes a proteger tu capital antes que buscar ganancias.' },
    { icon: Users,  title: 'COMUNIDAD ACTIVA',   desc: 'Canal privado de Telegram con traders del mismo nivel. Aprendes operando con otros.' },
    { icon: Zap,    title: 'SEÑALES EN VIVO',    desc: 'Operaciones reales comentadas en tiempo real. Ves el proceso de decisión, no solo el resultado.' },
  ];

  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section
        className="relative min-h-screen overflow-hidden flex items-center px-6 md:px-14 pb-20 scanlines"
        style={{ paddingTop: 'calc(var(--nav-h, 60px) + 36px + 24px)' }}
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 80% 30%, rgba(76,175,35,0.10), transparent 55%),
            radial-gradient(ellipse 60% 50% at 20% 90%, rgba(76,175,35,0.04), transparent 60%),
            radial-gradient(circle at 50% 50%, #0F0F0F 0%, #050505 90%)
          `,
        }}
      >
        {/* Layered grid with radial mask */}
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern" />

        {/* Top-right glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-64 -right-40 h-[700px] w-[900px] z-[1]"
          style={{
            background: 'radial-gradient(ellipse, rgba(76,175,35,0.22), rgba(76,175,35,0.05) 40%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />

        {/* Logo watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -bottom-32 z-[1] w-[780px] max-w-[60vw] opacity-[0.06] mix-blend-screen"
        >
          <Image src="/logo.png" alt="" width={2588} height={1664} className="h-auto w-full opacity-60" />
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-52"
          style={{ background: 'linear-gradient(to top, #050505, transparent)' }}
        />

        {/* Ticker — fixed to top of hero */}
        <Ticker />

        {/* Asymmetric 55 / 45 grid */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-18">

          {/* LEFT ── copy */}
          <div className="flex min-w-0 flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2.5 border border-[rgba(76,175,35,0.3)] bg-[rgba(76,175,35,0.05)] px-3.5 py-[7px]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-dot"
                style={{ boxShadow: '0 0 10px rgba(76,175,35,0.9)' }}
              />
              <span className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.25em] text-green">
                Trading Education · En Vivo
              </span>
            </div>

            <h1 className="font-display font-black uppercase text-white">
              <span className="h1-line-1">Aprende a leer el</span>
              <span className="h1-line-2">
                Mercado<span className="text-white">.</span>
              </span>
            </h1>

            <p className="font-body max-w-[500px] text-[1.1rem] leading-[1.6] text-silver">
              {siteConfig.subTagline} Cursos, asesorías y señales para operar con plan, sin adivinar.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/cursos"
                className="group inline-flex items-center gap-2.5 bg-green px-7 py-4 font-display text-[0.9rem] font-bold uppercase tracking-[0.15em] text-black transition-all duration-200 hover:-translate-y-px hover:bg-green-2 hover:shadow-[0_0_24px_rgba(76,175,35,0.5)]"
              >
                Empezar ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://t.me/+oWz0ONGqOapiOWIx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-white/20 bg-white/[0.02] px-7 py-4 font-display text-[0.9rem] font-bold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-green hover:bg-[rgba(76,175,35,0.05)] hover:text-green"
              >
                Ver señales
              </a>
            </div>

            {/* Stats — size hierarchy, not color */}
            <div className="mt-3 grid max-w-[560px] grid-cols-3 gap-6 border-t border-white/[0.07] pt-8">
              {[
                { num: '500', unit: '+',    label: 'Estudiantes'     },
                { num: '3',   unit: 'Años', label: 'En el mercado'  },
                { num: '24',  unit: '/7',   label: 'Comunidad'       },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex items-baseline gap-0.5 font-display font-black leading-none text-white">
                    <span className="text-[2.6rem]">{s.num}</span>
                    <span className="text-[1.1rem] font-bold tracking-[0.02em] text-white/60">{s.unit}</span>
                  </div>
                  <div className="mt-2.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.22em] text-gray">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ── CandleChart card */}
          <div className="relative hidden lg:block">
            {/* Glow behind card */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 z-0"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(76,175,35,0.25), rgba(76,175,35,0.05) 50%, transparent 75%)',
                filter: 'blur(30px)',
              }}
            />
            <div
              className="relative z-[1] border border-white/[0.08] backdrop-blur-md"
              style={{
                background: 'linear-gradient(180deg, rgba(28,28,28,0.7), rgba(12,12,12,0.85))',
                boxShadow: '0 0 0 1px rgba(76,175,35,0.05), 0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* Terminal corners */}
              <span aria-hidden className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t border-l border-green" />
              <span aria-hidden className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t border-r border-green" />
              <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-green" />
              <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-green" />

              {/* Chart header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-black/30 px-[18px] py-3.5">
                <div className="flex items-center gap-2.5 font-mono text-[0.72rem] font-semibold tracking-[0.12em] text-silver">
                  <span>BTC/USDT</span>
                  <span className="text-gray-2">·</span>
                  <span className="border border-[rgba(76,175,35,0.2)] bg-[rgba(76,175,35,0.1)] px-2 py-0.5 text-green">4H</span>
                  <span className="ml-1 inline-flex items-center gap-1.5 text-[0.6rem] tracking-[0.2em] text-green">
                    <span className="h-[5px] w-[5px] animate-pulse-dot rounded-full bg-green" />
                    LIVE
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {['CANDLES','VOL','RSI'].map((t, i) => (
                    <span
                      key={t}
                      className={`border px-2 py-1 font-mono text-[0.58rem] tracking-[0.15em] ${
                        i === 0
                          ? 'border-[rgba(76,175,35,0.3)] bg-[rgba(76,175,35,0.08)] text-green'
                          : 'border-transparent text-gray'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* SVG Chart */}
              <div className="px-[18px] pt-[18px] pb-3.5">
                <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" className="block h-auto w-full">
                  <defs>
                    <linearGradient id="bullG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5CC02A" /><stop offset="100%" stopColor="#4CAF23" />
                    </linearGradient>
                    <linearGradient id="bearG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E83434" /><stop offset="100%" stopColor="#B82424" />
                    </linearGradient>
                    <linearGradient id="vBull" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4CAF23" stopOpacity="0.7" /><stop offset="100%" stopColor="#4CAF23" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="vBear" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D42B2B" stopOpacity="0.7" /><stop offset="100%" stopColor="#D42B2B" stopOpacity="0.2" />
                    </linearGradient>
                    <radialGradient id="cGlow" cx="0.85" cy="0.4" r="0.6">
                      <stop offset="0%" stopColor="#4CAF23" stopOpacity="0.18" /><stop offset="100%" stopColor="#4CAF23" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect x="0" y="0" width="560" height="280" fill="url(#cGlow)" />
                  <g stroke="rgba(76,175,35,0.10)" strokeWidth="1" strokeDasharray="3 5">
                    <line x1="0" y1="40"  x2="500" y2="40"  /><line x1="0" y1="90"  x2="500" y2="90"  />
                    <line x1="0" y1="140" x2="500" y2="140" /><line x1="0" y1="190" x2="500" y2="190" />
                    <line x1="0" y1="240" x2="500" y2="240" />
                  </g>
                  <g stroke="rgba(255,255,255,0.025)" strokeWidth="1">
                    <line x1="92"  y1="10" x2="92"  y2="270" /><line x1="196" y1="10" x2="196" y2="270" />
                    <line x1="300" y1="10" x2="300" y2="270" /><line x1="404" y1="10" x2="404" y2="270" />
                  </g>
                  <g fontFamily="var(--font-mono), JetBrains Mono, monospace" fontSize="9" fill="#777" letterSpacing="0.5">
                    <text x="510" y="38">68,200</text><text x="510" y="88">67,800</text>
                    <text x="510" y="138">67,400</text><text x="510" y="188">67,000</text><text x="510" y="238">66,600</text>
                  </g>
                  <g strokeWidth="1.5">
                    <line x1="40"  y1="180" x2="40"  y2="240" stroke="#4CAF23" /><rect x="28"  y="200" width="24" height="32" fill="url(#bullG)" stroke="#5CC02A" strokeWidth="0.5" />
                    <line x1="92"  y1="148" x2="92"  y2="212" stroke="#4CAF23" /><rect x="80"  y="168" width="24" height="34" fill="url(#bullG)" stroke="#5CC02A" strokeWidth="0.5" />
                    <line x1="144" y1="132" x2="144" y2="202" stroke="#D42B2B" /><rect x="132" y="152" width="24" height="40" fill="url(#bearG)" stroke="#E83434" strokeWidth="0.5" />
                    <line x1="196" y1="110" x2="196" y2="182" stroke="#4CAF23" /><rect x="184" y="128" width="24" height="44" fill="url(#bullG)" stroke="#5CC02A" strokeWidth="0.5" />
                    <line x1="248" y1="100" x2="248" y2="178" stroke="#D42B2B" /><rect x="236" y="122" width="24" height="42" fill="url(#bearG)" stroke="#E83434" strokeWidth="0.5" />
                    <line x1="300" y1="86"  x2="300" y2="158" stroke="#4CAF23" /><rect x="288" y="106" width="24" height="38" fill="url(#bullG)" stroke="#5CC02A" strokeWidth="0.5" />
                    <line x1="352" y1="96"  x2="352" y2="172" stroke="#D42B2B" /><rect x="340" y="120" width="24" height="40" fill="url(#bearG)" stroke="#E83434" strokeWidth="0.5" />
                    <line x1="404" y1="112" x2="404" y2="178" stroke="#D42B2B" /><rect x="392" y="138" width="24" height="30" fill="url(#bearG)" stroke="#E83434" strokeWidth="0.5" />
                    <line x1="456" y1="92"  x2="456" y2="168" stroke="#4CAF23" /><rect x="444" y="110" width="24" height="46" fill="url(#bullG)" stroke="#5CC02A" strokeWidth="0.7" />
                  </g>
                  <line x1="0" y1="113" x2="490" y2="113" stroke="#4CAF23" strokeWidth="1" strokeDasharray="4 3" opacity="0.85" />
                  <line x1="0" y1="113" x2="490" y2="113" stroke="#4CAF23" strokeWidth="3" opacity="0.12" />
                  <g transform="translate(490, 103)">
                    <rect x="0" y="0" width="68" height="20" fill="#4CAF23" />
                    <text x="6" y="14" fontFamily="var(--font-mono), JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="#0D0D0D">67,412.50</text>
                    <text x="58" y="14" fontFamily="var(--font-mono), JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="#0D0D0D">▲</text>
                  </g>
                  <g>
                    <rect x="28"  y="320" width="24" height="18" fill="url(#vBull)" /><rect x="80"  y="312" width="24" height="26" fill="url(#vBull)" />
                    <rect x="132" y="305" width="24" height="33" fill="url(#vBear)" /><rect x="184" y="296" width="24" height="42" fill="url(#vBull)" />
                    <rect x="236" y="302" width="24" height="36" fill="url(#vBear)" /><rect x="288" y="314" width="24" height="24" fill="url(#vBull)" />
                    <rect x="340" y="308" width="24" height="30" fill="url(#vBear)" /><rect x="392" y="318" width="24" height="20" fill="url(#vBear)" />
                    <rect x="444" y="288" width="24" height="50" fill="url(#vBull)" />
                  </g>
                  <text x="0" y="284" fontFamily="var(--font-mono), JetBrains Mono, monospace" fontSize="8" fill="#555" letterSpacing="1">VOL</text>
                  <g fontFamily="var(--font-mono), JetBrains Mono, monospace" fontSize="8" fill="#555" letterSpacing="0.5">
                    <text x="28" y="354">12:00</text><text x="184" y="354">16:00</text>
                    <text x="340" y="354">20:00</text><text x="444" y="354" fill="#4CAF23">NOW</text>
                  </g>
                </svg>
              </div>

              {/* OHLC footer */}
              <div className="flex justify-between gap-4 border-t border-white/[0.06] bg-black/25 px-[18px] py-3 font-mono text-[0.64rem] tracking-[0.12em] text-gray">
                {[
                  { k: 'O', v: '66,890', tone: null  },
                  { k: 'H', v: '67,520', tone: 'up'  },
                  { k: 'L', v: '66,720', tone: 'dn'  },
                  { k: 'C', v: '67,412', tone: 'up'  },
                  { k: 'CHG', v: '+1.87%', tone: 'up' },
                ].map(({ k, v, tone }) => (
                  <div key={k}>
                    <span className="mr-1.5 text-gray-2">{k}</span>
                    <span className={`font-semibold ${tone === 'up' ? 'text-green' : tone === 'dn' ? 'text-red' : 'text-silver'}`}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PRODUCTOS ─────────────────────────────────── */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-14 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-3">01 · Productos</p>
              <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none">
                Tres caminos.<br /><span className="text-gradient-green">Un solo objetivo.</span>
              </h2>
            </div>
            <p className="font-body text-silver max-w-sm">
              Elige cómo aprender: a tu ritmo con los cursos, acompañado con asesorías, o siguiendo setups en vivo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {productos.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`group relative bg-surface border border-white/[0.08] ${p.topColor} border-t-2 hover:border-green/40 transition-all p-7 flex flex-col`}
              >
                <span aria-hidden className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t border-r border-green/40 group-hover:border-green transition-colors" />
                <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-green/40 group-hover:border-green transition-colors" />
                <p.icon className={`w-8 h-8 ${p.accent} mb-5`} strokeWidth={1.5} />
                <p className="font-mono text-[0.65rem] tracking-[0.25em] text-gray mb-2">{p.tag}</p>
                <h3 className="font-display font-black text-2xl text-white mb-3">{p.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 font-display text-sm tracking-wider text-white group-hover:text-green transition">
                  VER MÁS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ FP ────────────────────────────────── */}
      <section className="py-24 bg-black relative overflow-hidden atm-bg">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern-dense" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-4">02 · Por qué Fishing Profits</p>
            <h2 className="font-display font-black text-white uppercase leading-[0.92]">
              <span className="h1-line-1">Trading serio.</span>
              <span className="h1-line-2 text-[clamp(3.5rem,7vw,6rem)]">Sin humo.</span>
            </h2>
            <p className="font-body text-silver mt-5 leading-relaxed max-w-md">
              No vendemos sueños de riqueza rápida. Enseñamos la habilidad de leer el mercado como lo hace quien mueve capital real. Lo demás es consecuencia.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="/cursos"
                className="inline-flex items-center gap-2 bg-green text-black font-display font-bold tracking-[0.15em] text-sm px-6 py-3 hover:bg-green-2 hover:shadow-[0_0_20px_rgba(76,175,35,0.4)] transition-all"
              >
                VER CURSOS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="relative bg-surface border border-green/10 p-6 hover:border-green/40 transition group">
                <span aria-hidden className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t border-r border-green/20 group-hover:border-green/60 transition-colors" />
                <f.icon className="w-6 h-6 text-green mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-lg text-white tracking-wider mb-2">{f.title}</h3>
                <p className="font-body text-sm text-gray leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ───────────────────────────────── */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-14">
            <p className="eyebrow mb-3">03 · Testimonios</p>
            <h2 className="font-display font-black text-white uppercase leading-none">
              <span className="h1-line-1">Resultados</span>
              <span className="h1-line-2 text-[clamp(3rem,6vw,5.5rem)]">Reales.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonios.slice(0, 6).map((t) => (
              <div key={t.handle} className="bg-surface border border-white/[0.06] p-6 flex flex-col gap-4 hover:border-green/30 transition">
                <span className="inline-flex self-start bg-green text-black font-mono text-[0.65rem] tracking-wider px-2 py-0.5">
                  {t.resultado}
                </span>
                <p className="font-body italic text-silver text-[0.95rem] leading-relaxed">
                  &ldquo;{t.texto}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="font-mono text-xs text-gray">{t.handle}</span>
                  <span className="font-mono text-[0.65rem] tracking-wider text-green uppercase">{t.nivel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────── */}
      <section className="py-24 bg-black relative overflow-hidden scanlines">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] z-0"
          style={{ background: 'radial-gradient(ellipse, rgba(76,175,35,0.18), transparent 70%)', filter: 'blur(40px)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow mb-4">04 · Empieza hoy</p>
          <h2 className="font-display font-black text-white uppercase leading-[0.92] mb-6">
            <span className="h1-line-1">Deja de adivinar.</span>
            <span className="h1-line-2 text-[clamp(3.5rem,8vw,7rem)]">Empieza<span className="text-white"> ya.</span></span>
          </h2>
          <p className="font-body text-silver text-lg max-w-xl mx-auto mb-10">
            El mercado no espera. Cada día sin plan es capital en riesgo. Únete a quienes ya operan con método.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 bg-green text-black font-display font-bold tracking-[0.15em] text-sm px-7 py-3.5 hover:bg-green-2 hover:shadow-[0_0_24px_rgba(76,175,35,0.5)] transition-all"
            >
              VER CURSOS <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#2AABEE] hover:text-[#2AABEE] text-white font-display font-bold tracking-[0.15em] text-sm px-7 py-3.5 transition"
            >
              UNIRSE A TELEGRAM <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
