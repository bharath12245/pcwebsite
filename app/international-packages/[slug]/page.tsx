import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TourCard from "@/components/TourCard";
import { getTourBySlug, getInternationalPackages, buildWhatsAppLink } from "@/lib/tours";
import { Clock, CheckCircle2, MessageCircle, ShieldCheck, ArrowLeft, Globe } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const tours = getInternationalPackages();
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const tour = getTourBySlug(params.slug);
  if (!tour) return { title: "Package Not Found | P&C Tours and Travels" };

  return {
    title: `${tour.name} | P&C Tours and Travels`,
    description: `${tour.duration_days} Days International Package by ${tour.mode}. ${tour.itinerary_summary}`,
  };
}

export default function InternationalDetailPage({ params }: Props) {
  const tour = getTourBySlug(params.slug);
  if (!tour || tour.category !== "international") {
    notFound();
  }

  const relatedTours = getInternationalPackages()
    .filter((t) => t.slug !== tour.slug)
    .slice(0, 3);

  const waLink = buildWhatsAppLink(tour.whatsapp_message);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb & Navigation */}
      <div className="bg-surface border-b border-borderColor py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/international-packages"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-amber-500 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to International Packages</span>
          </Link>
        </div>
      </div>

      {/* Hero Visual Section */}
      <section className="relative text-white py-16 min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={tour.hero_image}
            alt={`${tour.name} Destination`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-white text-navy text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
              International Package
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-white" />
              {tour.duration_days} Days
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase px-3.5 py-1 rounded-full flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>Global Tour</span>
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
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-white" />
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
                  <Globe className="w-6 h-6 text-amber-500" />
                  <span>International Inclusions</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-borderColor">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-navy text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary Summary */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-navy">
                  Global Overview & Itinerary
                </h2>
                <div className="bg-white p-8 rounded-3xl border border-borderColor space-y-4">
                  <p className="text-copy-muted text-base leading-relaxed">
                    {tour.itinerary_summary}
                  </p>
                  <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-xs text-navy space-y-1">
                    <p className="font-bold flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-amber-500" /> Visa & Travel Planning:</p>
                    <p className="text-copy-muted pl-5">
                      Our international packages include assistance with visa documentation and flight arrangements. Every itinerary can be adjusted for your specific travel dates.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Booking Widget */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-navy text-white p-8 rounded-3xl space-y-6 shadow-2xl">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Plan Your Global Journey</h3>
                  <p className="text-gray-300 text-sm">International travel made seamless and strictly professional.</p>
                </div>
                
                <ul className="space-y-4 text-sm text-gray-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>No hidden forex charges or last minute add-ons.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Handpicked premium hotels globally.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Transfers and detailed visa assistance provided.</span>
                  </li>
                </ul>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Request International Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedTours.length > 0 && (
        <section className="py-16 bg-surface border-t border-borderColor">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <h2 className="font-serif text-3xl font-bold text-navy text-center">
              Other Popular International Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedTours.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
