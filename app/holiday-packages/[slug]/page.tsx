import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TourCard from "@/components/TourCard";
import { getTourBySlug, getHolidayPackages, buildWhatsAppLink } from "@/lib/tours";
import { Clock, Plane, Train, Bus, CheckCircle2, MessageCircle, ShieldCheck, ArrowLeft } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const tours = getHolidayPackages();
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const tour = getTourBySlug(params.slug);
  if (!tour) return { title: "Package Not Found | P&C Tours and Travels" };

  return {
    title: `${tour.name} | P&C Tours and Travels`,
    description: `${tour.duration_days} Days Holiday Package by ${tour.mode}. ${tour.itinerary_summary}`,
  };
}

export default function HolidayDetailPage({ params }: Props) {
  const tour = getTourBySlug(params.slug);
  if (!tour || tour.category !== "holiday") {
    notFound();
  }

  const relatedTours = getHolidayPackages()
    .filter((t) => t.slug !== tour.slug)
    .slice(0, 3);

  const waLink = buildWhatsAppLink(tour.whatsapp_message);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb & Navigation */}
      <div className="bg-surface border-b border-borderColor py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/holiday-packages"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-magenta transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Holiday Packages</span>
          </Link>
        </div>
      </div>

      {/* Hero Visual Section */}
      <section className="relative bg-magenta text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <Image
            src={tour.hero_image}
            alt={`${tour.name} Holiday Destination`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-white text-navy text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Holiday Package
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-white" />
              {tour.duration_days} Days
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase px-3.5 py-1 rounded-full flex items-center gap-1">
              {tour.mode === "flight" && <Plane className="w-3.5 h-3.5 text-white" />}
              {tour.mode === "coach" && <Bus className="w-3.5 h-3.5 text-white" />}
              <span>{tour.mode} Travel</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight max-w-4xl leading-tight">
            {tour.name}
          </h1>

          <p className="text-gray-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {tour.itinerary_summary}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy hover:bg-navy-hover text-white font-bold text-sm px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Book This Package on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Inclusions & Summary */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Package Inclusions Box */}
              <div className="bg-surface p-8 rounded-3xl border border-borderColor space-y-6 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-navy flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-magenta" />
                  <span>Holiday Package Inclusions</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-borderColor">
                      <CheckCircle2 className="w-5 h-5 text-magenta flex-shrink-0 mt-0.5" />
                      <span className="text-navy text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary Summary */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-navy">
                  Holiday Overview & Itinerary
                </h2>
                <div className="bg-white p-8 rounded-3xl border border-borderColor space-y-4">
                  <p className="text-copy-muted text-base leading-relaxed">
                    {tour.itinerary_summary}
                  </p>
                  <div className="p-4 bg-surface rounded-2xl border border-borderColor-light text-xs text-navy space-y-1">
                    <p className="font-bold">Personalised Flexibility:</p>
                    <p className="text-copy-muted">
                      Every holiday package can be adjusted for your specific travel dates, group size, meal preferences, and hotel upgrades.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Callout */}
              <div className="bg-magenta text-white p-8 rounded-3xl space-y-4 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold">Ready for a Well-Earned Holiday?</h3>
                  <p className="text-white/90 text-xs mt-1">
                    Chat directly with our team on WhatsApp to confirm dates & get custom quotes.
                  </p>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy hover:bg-navy-hover text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Book Now via WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Column: Quick Details Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-surface p-6 rounded-3xl border border-borderColor space-y-6 shadow-card">
                <h3 className="font-serif text-xl font-bold text-navy border-b border-borderColor pb-3">
                  Quick Package Summary
                </h3>

                <div className="space-y-4 text-xs font-medium text-navy">
                  <div className="flex justify-between items-center py-2 border-b border-borderColor-light">
                    <span className="text-copy-muted">Duration:</span>
                    <span className="font-bold">{tour.duration_days} Days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-borderColor-light">
                    <span className="text-copy-muted">Travel Mode:</span>
                    <span className="font-bold capitalize">{tour.mode}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-borderColor-light">
                    <span className="text-copy-muted">Sightseeing:</span>
                    <span className="font-bold text-magenta">Included</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-borderColor-light">
                    <span className="text-copy-muted">Transfers & Stay:</span>
                    <span className="font-bold text-green-700">All-Inclusive</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-magenta hover:bg-magenta-hover text-white text-xs font-bold py-3.5 px-4 rounded-xl shadow-magenta transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Related Holiday Packages */}
          <div className="mt-20 pt-12 border-t border-borderColor space-y-8">
            <h2 className="font-serif text-3xl font-bold text-navy">
              More Holiday Packages You Might Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedTours.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
