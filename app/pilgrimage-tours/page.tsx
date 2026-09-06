"use client";

import { useState } from "react";
import TourCard from "@/components/TourCard";
import { getPilgrimageTours, PRIMARY_WHATSAPP_LINK } from "@/lib/tours";
import { Compass, Search, Filter, MessageCircle, Plane, Train, Bus } from "lucide-react";

export default function PilgrimageCategoryPage() {
  const tours = getPilgrimageTours();
  const [filterMode, setFilterMode] = useState<"all" | "flight" | "train">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTours = tours.filter((t) => {
    const matchesMode = filterMode === "all" || t.mode === filterMode;
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.itinerary_summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMode && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative text-white py-24 lg:py-32 border-b-4 border-magenta overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/pilgrimage.jpg" alt="Pilgrimage & Temple Tours" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
            <Compass className="w-4 h-4 text-magenta-light" />
            <span>Sacred Yatra Circuits</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Pilgrimage & Temple Tours
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Undertake your yatra with the confidence of an experienced travel team. P&C Tours and Travels organises pilgrimage and temple tour packages across India, covering major spiritual circuits and sacred destinations alike. Every package includes transport, accommodation, meals, and on-ground assistance — planned with the pace and comfort of pilgrims in mind.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-surface border-b border-borderColor sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Travel Mode Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <button
              onClick={() => setFilterMode("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filterMode === "all"
                  ? "bg-navy text-white shadow-md"
                  : "bg-white text-navy border border-borderColor hover:bg-surface-muted"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>All 20 Yatras</span>
            </button>
            <button
              onClick={() => setFilterMode("flight")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filterMode === "flight"
                  ? "bg-magenta text-white shadow-md"
                  : "bg-white text-navy border border-borderColor hover:bg-surface-muted"
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>By Flight (10)</span>
            </button>
            <button
              onClick={() => setFilterMode("train")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filterMode === "train"
                  ? "bg-navy text-white shadow-md"
                  : "bg-white text-navy border border-borderColor hover:bg-surface-muted"
              }`}
            >
              <Train className="w-3.5 h-3.5" />
              <span>By Train (10)</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search temple or shrine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-borderColor rounded-full pl-10 pr-4 py-2 text-xs font-medium text-navy placeholder:text-gray-400 focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta"
            />
          </div>

        </div>
      </section>

      {/* Grid Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex justify-between items-center text-xs text-copy-muted font-semibold">
            <span>Showing {filteredTours.length} Pilgrimage Packages</span>
            <a
              href={PRIMARY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-magenta hover:underline flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Enquire About Custom Yatra Route
            </a>
          </div>

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-surface rounded-3xl border border-borderColor space-y-4">
              <p className="text-navy font-semibold text-base">No pilgrimage packages matched your search criteria.</p>
              <button
                onClick={() => { setFilterMode("all"); setSearchQuery(""); }}
                className="text-xs font-bold text-magenta underline"
              >
                Clear filters and view all packages
              </button>
            </div>
          )}

          {/* Bottom Enquire Callout */}
          <div className="bg-navy text-white p-8 rounded-3xl text-center space-y-4 shadow-xl">
            <h3 className="font-serif text-2xl font-bold">
              Looking for a Custom Temple Yatra for your Group or Family?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl mx-auto">
              Our travel team — backed by 20+ years of experience — will design custom dates, routes, and senior-citizen friendly schedules tailored to your family's needs.
            </p>
            <a
              href="https://wa.me/917204180555?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20Custom%20Pilgrimage%20Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-hover text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-magenta transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire About a Pilgrimage Tour</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
