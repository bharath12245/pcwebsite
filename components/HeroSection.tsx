"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Compass, Sparkles, Sun, ShieldCheck, HeartHandshake, PhoneCall, ArrowRight, MessageCircle } from "lucide-react";
import { PRIMARY_WHATSAPP_LINK, getFeaturedTours } from "@/lib/tours";

export default function HeroSection() {
  const featuredTours = getFeaturedTours(5); // Show 5 featured packages
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (featuredTours.length === 0 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredTours.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredTours.length, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      setCurrentIndex((prev) => (prev + 1) % featuredTours.length);
    } else if (diff < -50) {
      setCurrentIndex((prev) => (prev - 1 + featuredTours.length) % featuredTours.length);
    }
    touchStartX.current = null;
  };

  return (
    <section className="relative bg-navy text-white overflow-hidden py-16 lg:py-24">
      {/* Dynamic Background Pattern & Gradient Overlay */}
      <div className="absolute inset-0 opacity-20">
        {featuredTours.map((tour, index) => (
          <Image
            key={tour.slug + '-bg'}
            src={tour.hero_image}
            alt={`${tour.name} Background`}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out blur-sm ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80"></div>
      </div>

      {/* Decorative Glow Orb */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-magenta/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Dual Entry Funnel */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-magenta-light shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-magenta-light" />
              <span>Travel Beyond Boundaries</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Journeys for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-light to-white">Soul</span> and the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-magenta-light">Season</span>
            </h1>

            {/* Sub-line */}
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              From temple yatras to relaxing getaways, P&C Tours and Travels designs journeys across India built on two decades of hands-on travel expertise.
            </p>

            {/* Dual Entry CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/pilgrimage-tours"
                className="bg-magenta hover:bg-magenta-hover text-white text-base font-bold px-7 py-4 rounded-2xl shadow-magenta hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                <span>Explore Pilgrimage Tours</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/holiday-packages"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-base font-bold px-7 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Sun className="w-5 h-5 text-amber-300" />
                <span>Explore Holiday Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2 flex items-center gap-3 text-xs text-gray-300">
              <a
                href={PRIMARY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-magenta-light underline flex items-center gap-1.5 font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Need a custom itinerary? Talk directly to our travel team on WhatsApp
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Card Stack */}
          <div 
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="grid grid-cols-1 grid-rows-1">
                {featuredTours.map((tour, index) => (
                  <Link
                    href={`/${tour.category === 'pilgrimage' ? 'pilgrimage-tours' : 'holiday-packages'}/${tour.slug}`}
                    key={tour.slug}
                    className={`col-start-1 row-start-1 relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-2xl space-y-4 transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group">
                      <Image
                        src={tour.hero_image}
                        alt={tour.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white pr-4">
                        <span className="bg-magenta text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-md">
                          {tour.category === "pilgrimage" ? "Featured Yatra" : "Featured Holiday"}
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl font-bold mt-1.5 leading-snug drop-shadow-sm">{tour.name}</h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                      <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                        <div className="font-bold text-white text-base">{tour.duration_days}</div>
                        <div className="text-[10px] text-gray-300 uppercase mt-1 tracking-wider">Days</div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                        <div className="font-bold text-magenta-light text-base capitalize">{tour.mode}</div>
                        <div className="text-[10px] text-gray-300 uppercase mt-1 tracking-wider">Travel</div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                        <div className="font-bold text-white text-base">All-In</div>
                        <div className="text-[10px] text-gray-300 uppercase mt-1 tracking-wider">Package</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {featuredTours.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      index === currentIndex ? "bg-magenta-light w-8" : "bg-white/30 hover:bg-white/60 w-2"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
