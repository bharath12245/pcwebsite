"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, Compass, Sun, MapPin, ChevronRight } from "lucide-react";
import { PRIMARY_PHONE, SECONDARY_PHONE, PRIMARY_WHATSAPP_LINK } from "@/lib/tours";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-300">
      {/* Top Utility Bar - Marquee */}
      <div className="bg-navy text-white text-xs py-2 border-b border-navy-light overflow-hidden flex relative group">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-6">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <MapPin className="w-3.5 h-3.5 text-magenta-light" />
                Gandhi Nagar, Bengaluru
              </span>
              <span className="text-magenta-light/50 font-bold">•</span>
              <span className="flex items-center gap-1 text-gray-300">
                Founded in 2025 by Prhallada C, backed by 20+ years of personal industry experience
              </span>
              <span className="text-magenta-light/50 font-bold">•</span>
              <a
                href={PRIMARY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-magenta-light transition-colors font-medium flex items-center gap-1"
              >
                <Compass className="w-3.5 h-3.5 text-magenta-light" />
                Plan Personalised Tour
              </a>
              <span className="text-magenta-light/50 font-bold">•</span>
              <a
                href={`tel:${PRIMARY_PHONE.replace(/\s+/g, "")}`}
                className="flex items-center gap-1 font-semibold hover:text-magenta-light transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-magenta-light" />
                {PRIMARY_PHONE}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Lockup */}
          <Link href="/" className="flex items-center group sm:-ml-2">
            <Image
              src="/logo/without background.png"
              alt="P&C Tours and Travels Logo"
              width={400}
              height={100}
              className="object-contain transition-transform duration-300 group-hover:scale-105 h-14 sm:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-navy font-semibold text-sm hover:text-magenta transition-colors py-2 border-b-2 border-transparent hover:border-magenta"
            >
              Home
            </Link>
            <Link
              href="/pilgrimage-tours"
              className="text-navy font-semibold text-sm hover:text-magenta transition-colors py-2 border-b-2 border-transparent hover:border-magenta"
            >
              Pilgrimage & Temple Tours
            </Link>
            <Link
              href="/holiday-packages"
              className="text-navy font-semibold text-sm hover:text-magenta transition-colors py-2 border-b-2 border-transparent hover:border-magenta"
            >
              Holiday Packages
            </Link>
            <Link
              href="/about"
              className="text-navy font-semibold text-sm hover:text-magenta transition-colors py-2 border-b-2 border-transparent hover:border-magenta"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-navy font-semibold text-sm hover:text-magenta transition-colors py-2 border-b-2 border-transparent hover:border-magenta"
            >
              Contact
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PRIMARY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-magenta hover:bg-magenta-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-magenta hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk to Travel Team</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy hover:bg-surface focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden bg-white border-b border-borderColor shadow-xl animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-semibold text-navy hover:bg-surface hover:text-magenta transition-colors"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
            <Link
              href="/pilgrimage-tours"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-semibold text-navy hover:bg-surface hover:text-magenta transition-colors"
            >
              <span>Pilgrimage & Temple Tours</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
            <Link
              href="/holiday-packages"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-semibold text-navy hover:bg-surface hover:text-magenta transition-colors"
            >
              <span>Holiday Packages</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-semibold text-navy hover:bg-surface hover:text-magenta transition-colors"
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-semibold text-navy hover:bg-surface hover:text-magenta transition-colors"
            >
              <span>Contact</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>

            <div className="pt-4 border-t border-borderColor space-y-3">
              <a
                href={PRIMARY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-magenta text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-magenta"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="text-center text-xs text-copy-muted pt-1">
                Call: {PRIMARY_PHONE} / {SECONDARY_PHONE}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
