import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, MessageCircle, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { PRIMARY_PHONE, SECONDARY_PHONE, OFFICE_ADDRESS, PRIMARY_WHATSAPP_LINK } from "@/lib/tours";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-24 lg:pb-12 border-t-4 border-magenta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-light">
          
          {/* Column 1: Brand & Logo Lockup */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center sm:-ml-2">
              <Image
                src="/logo/without background.png"
                alt="P&C Tours and Travels Logo"
                width={400}
                height={120}
                className="object-contain brightness-0 invert h-16 sm:h-24 w-auto"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md pt-2">
              Founded in 2025 by Prhallada C, backed by 20+ years of personal industry experience. We craft authentic pilgrimage yatras and serene holiday escapes across India with all-inclusive transparent planning and dedicated care.
            </p>

            <div className="pt-2">
              <a
                href={PRIMARY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-hover text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-magenta"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Pilgrimage Tours */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white border-b border-navy-light pb-2">
              Pilgrimage Yatras
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/pilgrimage-tours/char-dham-yatra-flight" className="hover:text-magenta-light transition-colors">
                  Char Dham Yatra (Flight)
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours/12-jyotirlinga-yatra-flight" className="hover:text-magenta-light transition-colors">
                  12 Jyotirlinga Yatra
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours/tirupati-balaji-darshan-flight" className="hover:text-magenta-light transition-colors">
                  Tirupati Balaji Special
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours/ayodhya-ram-mandir-flight" className="hover:text-magenta-light transition-colors">
                  Ayodhya Ram Mandir
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours/kashi-vishwanath-prayagraj-yatra" className="hover:text-magenta-light transition-colors">
                  Kashi Vishwanath Yatra
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours" className="text-magenta-light font-medium hover:underline inline-flex items-center gap-1 pt-1">
                  View All 20 Yatras <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Holiday Packages */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white border-b border-navy-light pb-2">
              Holiday Getaways
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/holiday-packages/coorg-coffee-trails" className="hover:text-magenta-light transition-colors">
                  Coorg Coffee Trails
                </Link>
              </li>
              <li>
                <Link href="/holiday-packages/goa-beach-holiday" className="hover:text-magenta-light transition-colors">
                  Goa Beach Holiday
                </Link>
              </li>
              <li>
                <Link href="/holiday-packages/kashmir-valley-holiday" className="hover:text-magenta-light transition-colors">
                  Kashmir Valley Escape
                </Link>
              </li>
              <li>
                <Link href="/holiday-packages/andaman-island-holiday" className="hover:text-magenta-light transition-colors">
                  Andaman Islands Tour
                </Link>
              </li>
              <li>
                <Link href="/holiday-packages/leh-ladakh-adventure-holiday" className="hover:text-magenta-light transition-colors">
                  Leh-Ladakh Adventure
                </Link>
              </li>
              <li>
                <Link href="/holiday-packages" className="text-magenta-light font-medium hover:underline inline-flex items-center gap-1 pt-1">
                  View All 10 Holidays <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white border-b border-navy-light pb-2">
              Contact & Office
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-magenta-light flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{OFFICE_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-magenta-light flex-shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href={`tel:${PRIMARY_PHONE.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                    {PRIMARY_PHONE}
                  </a>
                  <a href={`tel:${SECONDARY_PHONE.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                    {SECONDARY_PHONE}
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5 inline text-green-400 mr-1" />
                  Direct WhatsApp Response
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Policies Strip */}
        <div className="py-6 border-b border-navy-light flex flex-wrap justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/policies/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/policies/cancellation" className="hover:text-white transition-colors">
              Cancellation & Refund Policy
            </Link>
            <Link href="/policies/pricing" className="hover:text-white transition-colors">
              Pricing Policy
            </Link>
          </div>
          <div className="text-gray-400">
            Official Travel Operator • Gandhi Nagar, Bengaluru
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2025 P&C Tours and Travels. All rights reserved.</p>
          <p className="flex items-center gap-1 text-gray-400">
            Crafted with <Heart className="w-3 h-3 text-magenta" /> for Pilgrims & Travellers Across India
          </p>
        </div>
      </div>
    </footer>
  );
}
