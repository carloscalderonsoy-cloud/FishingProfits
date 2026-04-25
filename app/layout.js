import './globals.css';
import { Barlow_Condensed, DM_Sans, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TelegramButton from '@/components/TelegramButton';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://fishingprofits.com'),
  title: {
    default: 'Fishing Profits — Trading Education',
    template: '%s · Fishing Profits',
  },
  description: 'Cursos, asesorías y señales de trading en español. Aprende a leer el mercado y opera con precisión.',
  keywords: ['trading', 'señales trading', 'curso trading español', 'price action', 'forex', 'fishing profits'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://fishingprofits.com',
    siteName: 'Fishing Profits',
    title: 'Fishing Profits — Trading Education',
    description: 'Aprende a leer el mercado. Cursos, asesorías y señales.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Fishing Profits' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fishing Profits — Trading Education',
    description: 'Aprende a leer el mercado. Cursos, asesorías y señales.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${barlow.variable} ${dmSans.variable} ${jetbrains.variable} dark`}>
      <body className="min-h-screen bg-black text-white font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TelegramButton />
      </body>
    </html>
  );
}
