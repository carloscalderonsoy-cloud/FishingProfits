'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const links = [
  { href: '/',          label: 'INICIO'    },
  { href: '/cursos',    label: 'CURSOS'    },
  { href: '/asesorias', label: 'ASESORÍAS' },
  { href: '/senales',   label: 'SEÑALES'   },
  { href: '/contacto',  label: 'CONTACTO'  },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const nav = document.getElementById('site-nav');
    const setNavH = () => {
      if (nav) document.documentElement.style.setProperty('--nav-h', `${nav.offsetHeight}px`);
    };
    setNavH();
    const ro = new ResizeObserver(setNavH);
    if (nav) ro.observe(nav);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <header
        id="site-nav"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(8,8,8,0.92)] backdrop-blur-md border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-14 py-3 md:py-[14px] max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="Fishing Profits"
              width={2588}
              height={1664}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`font-mono text-[0.65rem] tracking-[0.18em] uppercase transition-colors ${
                    isActive(l.href) ? 'text-green' : 'text-gray-2 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/senales"
              className="inline-flex items-center gap-1.5 bg-amber text-black font-display font-bold tracking-[0.15em] text-sm px-4 py-2 hover:bg-amber/90 hover:shadow-[0_0_16px_rgba(245,158,11,0.4)] transition-all"
            >
              SEÑALES <Zap className="w-4 h-4" strokeWidth={2.5} fill="currentColor" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'radial-gradient(circle at 50% 50%, #0F0F0F 0%, #050505 100%)',
        }}
      >
        <div aria-hidden className="absolute inset-0 grid-pattern pointer-events-none" />
        <ul className="relative pt-28 px-8 flex flex-col gap-5">
          {links.map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-500 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${open ? i * 70 : 0}ms` }}
            >
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-display font-black uppercase leading-none ${
                  isActive(l.href) ? 'text-green' : 'text-white hover:text-green transition-colors'
                }`}
                style={{ fontSize: 'clamp(2.8rem, 8vw, 4rem)', letterSpacing: '-.02em' }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-8">
            <Link
              href="/senales"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-amber text-black font-display font-bold tracking-[0.15em] text-base px-5 py-3 hover:bg-amber/90 transition"
            >
              SEÑALES <Zap className="w-5 h-5" fill="currentColor" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
