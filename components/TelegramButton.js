'use client';

import { siteConfig } from '@/lib/site';
import { Send } from 'lucide-react';

export default function TelegramButton() {
  return (
    <a
      href={siteConfig.telegram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por Telegram"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#2AABEE] shadow-lg shadow-black/40 flex items-center justify-center hover:scale-110 transition-transform ring-2 ring-black/20"
    >
      <Send className="w-6 h-6 text-white" />
    </a>
  );
}
