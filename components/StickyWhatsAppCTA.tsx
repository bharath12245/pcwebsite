"use client";

import Image from "next/image";
import { PRIMARY_WHATSAPP_LINK } from "@/lib/tours";

export default function StickyWhatsAppCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <a
        href={PRIMARY_WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 drop-shadow-2xl hover:drop-shadow-[0_10px_20px_rgba(34,197,94,0.4)]"
        aria-label="Chat with P&C Tours on WhatsApp"
      >
        <Image
          src="/logo/whatsapp.png"
          alt="WhatsApp"
          width={64}
          height={64}
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        />
      </a>
    </div>
  );
}
