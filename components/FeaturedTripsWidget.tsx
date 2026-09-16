import Link from "next/link";
import TourCard from "./TourCard";
import { getFeaturedTours } from "@/lib/tours";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeaturedTripsWidget() {
  const featuredTours = getFeaturedTours(6);

  return (
    <section className="py-16 bg-surface border-y border-borderColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-magenta mb-2">
              <Sparkles className="w-4 h-4 text-magenta" />
              <span>Upcoming Departures & Popular Circuits</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
              Featured Yatras & Holiday Getaways
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/pilgrimage-tours"
              className="text-xs font-bold text-navy hover:text-magenta transition-colors border border-borderColor bg-white px-4 py-2 rounded-full shadow-sm"
            >
              Pilgrimage Tours
            </Link>
            <Link
              href="/holiday-packages"
              className="text-xs font-bold text-navy hover:text-magenta transition-colors border border-borderColor bg-white px-4 py-2 rounded-full shadow-sm"
            >
              Holiday Packages
            </Link>
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/pilgrimage-tours"
            className="inline-flex items-center gap-2 text-navy hover:text-magenta font-semibold text-sm transition-colors group"
          >
            <span>Explore more packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
