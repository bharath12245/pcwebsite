"use client";

import { useState } from "react";
import TourCard from "@/components/TourCard";
import { getInternationalPackages, PRIMARY_WHATSAPP_LINK } from "@/lib/tours";
import { Plane, Search, MessageCircle, Globe } from "lucide-react";

export default function InternationalCategoryPage() {
  const tours = getInternationalPackages();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTours = tours.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.itinerary_summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative text-white py-24 lg:py-32 min-h-[85vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/tours/international/europe-highlights.webp" alt="International Packages" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
            <Globe className="w-4 h-4 text-white" />
            <span>Global Leisure Getaways</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            International Packages
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Take a break with an international holiday package designed around how you actually want to travel. Explore breathtaking global destinations — from the futuristic skyline of Dubai to the serene beaches of Bali, the historic charm of Europe to the natural wonders of Southeast Asia.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-surface border-b border-borderColor sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination (Dubai, Singapore, Europe)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-borderColor rounded-full pl-10 pr-4 py-2 text-xs font-medium text-navy placeholder:text-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

        </div>
      </section>

      {/* Grid Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex justify-between items-center text-xs text-copy-muted font-semibold">
            <span>Showing {filteredTours.length} International Packages</span>
            <a
              href={PRIMARY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Enquire About Custom Global Itinerary
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
              <p className="text-navy font-semibold text-base">No international packages matched your search criteria.</p>
              <button
                onClick={() => { setSearchQuery(""); }}
                className="text-xs font-bold text-amber-500 underline"
              >
                Clear search and view all packages
              </button>
            </div>
          )}

          {/* Bottom Callout */}
          <div className="bg-amber-500 text-white p-8 rounded-3xl text-center space-y-4 shadow-xl">
            <h3 className="font-serif text-2xl font-bold">
              Planning a Special Honeymoon, Family Reunion or Group Tour?
            </h3>
            <p className="text-white/90 text-sm max-w-xl mx-auto">
              Our travel specialists will design custom dates, luxury hotel selections, and customized sightseeing itineraries just for you.
            </p>
            <a
              href="https://wa.me/917204180555?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20an%20International%20Package."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-hover text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire About an International Package</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
