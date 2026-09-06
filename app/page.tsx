import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedTripsWidget from "@/components/FeaturedTripsWidget";
import OffersStrip from "@/components/OffersStrip";
import TrustStrip from "@/components/TrustStrip";
import TourCard from "@/components/TourCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import { getPilgrimageTours, getHolidayPackages, PRIMARY_PHONE, SECONDARY_PHONE, OFFICE_ADDRESS, PRIMARY_WHATSAPP_LINK } from "@/lib/tours";
import { Compass, Sun, ArrowRight, MessageCircle, MapPin, Award, Plane, Building2, Utensils, Map } from "lucide-react";

export const metadata = {
  title: "P&C Tours and Travels | Pilgrimage & Holiday Packages, Bengaluru",
  description:
    "Plan pilgrimage yatras and holiday packages with P&C Tours and Travels, Bengaluru — 20+ years of travel expertise, all-inclusive pricing, personalised itineraries.",
};

export default function HomePage() {
  const pilgrimageTours = getPilgrimageTours().slice(0, 6);
  const holidayPackages = getHolidayPackages().slice(0, 4);

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "P&C Tours and Travels",
    "founder": "Prhallada C",
    "foundingDate": "2025",
    "description": "Bengaluru-based tour operator offering pilgrimage yatras and holiday packages across India. Founded in 2025 by Prhallada C, backed by 20+ years of personal industry experience.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, Grand Majestic Mall, No. 2/17, Opp. Gubbi Veeranna Rangamandira, Gandhi Nagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560009",
      "addressCountry": "IN"
    },
    "telephone": [PRIMARY_PHONE, SECONDARY_PHONE],
    "url": "https://pctoursandtravels.in"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does P&C Tours and Travels offer both pilgrimage and leisure holiday packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. P&C Tours and Travels offers temple yatras and pilgrimage circuits alongside general holiday and leisure packages, all designed and managed by a team with over 20 years of experience in the travel industry."
        }
      },
      {
        "@type": "Question",
        "name": "Where is P&C Tours and Travels located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our office is located on the 2nd Floor, Grand Majestic Mall, No. 2/17, opposite Gubbi Veeranna Rangamandira, Gandhi Nagar, Bengaluru, Karnataka 560009."
        }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Intro Copy Section (SEO Content Verbatim, redesigned for visual impact) */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-borderColor text-xs font-bold uppercase tracking-widest text-navy shadow-sm">
                <Award className="w-4 h-4 text-magenta" />
                <span>Welcome to P&C Tours and Travels</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.2]">
                Crafting Memorable Journeys Across India
              </h2>

              <div className="text-copy-muted text-base sm:text-lg leading-relaxed space-y-5 font-normal">
                <p>
                  P&C Tours and Travels is a Bengaluru-based tour operator offering both pilgrimage yatras and holiday packages across India. Founded in 2025 by Prhallada C, backed by 20+ years of personal industry experience — bringing an established understanding of routes, destinations, and traveller needs to every itinerary we plan.
                </p>
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-borderColor shadow-sm">
                  <MapPin className="w-5 h-5 text-magenta flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Based in Gandhi Nagar, Bengaluru, we serve travellers across Karnataka and beyond, offering both domestic pilgrimage circuits and leisure holiday packages tailored to your dates, budget, and group size.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 text-sm font-semibold">
                <Link
                  href="/pilgrimage-tours"
                  className="bg-navy hover:bg-navy-hover text-white px-6 py-3.5 rounded-xl transition-colors shadow-sm flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-magenta-light" />
                  Explore Pilgrimage Tours
                </Link>
                <Link
                  href="/holiday-packages"
                  className="bg-white hover:bg-surface-muted text-navy border border-borderColor px-6 py-3.5 rounded-xl transition-colors shadow-sm flex items-center gap-2"
                >
                  <Sun className="w-4 h-4 text-amber-500" />
                  Explore Holiday Packages
                </Link>
                <a
                  href={PRIMARY_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-magenta hover:text-magenta-hover font-semibold py-3.5 px-4 transition-colors flex items-center gap-2"
                >
                  <Image src="/logo/whatsapp.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5 object-contain" />
                  <span>Talk to Our Team</span>
                </a>
              </div>
            </div>

            {/* Right Visual / Feature Grid */}
            <div className="relative">
              {/* Abstract decorative background */}
              <div className="absolute inset-0 bg-magenta/5 rounded-[40px] transform rotate-3 scale-105 -z-10"></div>
              
              <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-card border border-borderColor relative z-10 hover-lift">
                <h3 className="font-serif text-2xl font-bold text-navy mb-5">Every Detail Handled For You</h3>
                <p className="text-sm text-copy-muted mb-8 leading-relaxed">
                  Whether you&apos;re seeking a peaceful temple yatra, a family holiday, or a getaway with friends, P&C Tours and Travels handles all the details so you can focus strictly on the experience. Every package is transparent and all-inclusive.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-surface p-3 rounded-xl border border-borderColor">
                      <Plane className="w-6 h-6 text-magenta" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Transport</h4>
                      <p className="text-xs text-copy-muted mt-1">Flights, trains & premium AC vehicles</p>
                    </div>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-surface p-3 rounded-xl border border-borderColor">
                      <Building2 className="w-6 h-6 text-magenta" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Accommodation</h4>
                      <p className="text-xs text-copy-muted mt-1">Verified hotels tailored to your budget</p>
                    </div>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-surface p-3 rounded-xl border border-borderColor">
                      <Utensils className="w-6 h-6 text-magenta" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Curated Meals</h4>
                      <p className="text-xs text-copy-muted mt-1">Hygienic and authentic local dining</p>
                    </div>
                  </div>
                  {/* Feature 4 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-surface p-3 rounded-xl border border-borderColor">
                      <Map className="w-6 h-6 text-magenta" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Sightseeing</h4>
                      <p className="text-xs text-copy-muted mt-1">VIP Guided darshans and attractions</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-borderColor">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-copy-muted font-medium">Flexible Payment Options</span>
                    <span className="text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-xs uppercase tracking-wide">No Hidden Costs</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Trips Widget */}
      <FeaturedTripsWidget />

      {/* 4. Ongoing Offers Strip */}
      <OffersStrip />

      {/* 5. Trust Strip */}
      <TrustStrip />

      {/* 6. Core Product Grid — Pilgrimage & Temple Tours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-borderColor pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">
                <Compass className="w-4 h-4 text-magenta" />
                <span>Sacred Yatra Circuits</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
                Pilgrimage & Temple Tours
              </h2>
              <p className="text-copy-muted text-sm mt-1">
                All-inclusive yatras by flight and train across Char Dham, 12 Jyotirlinga, Tirupati & South India circuits.
              </p>
            </div>

            <Link
              href="/pilgrimage-tours"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-hover text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm flex-shrink-0"
            >
              <span>View All 20 Pilgrimage Yatras</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilgrimageTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>

        </div>
      </section>

      {/* 7. Core Product Grid — Holiday & Leisure Packages */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-borderColor pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-magenta mb-2">
                <Sun className="w-4 h-4 text-magenta" />
                <span>Leisure Getaways</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
                Holiday Packages
              </h2>
              <p className="text-copy-muted text-sm mt-1">
                Scenic getaways to Coorg, Goa, Munnar, Kashmir, Andaman & Leh-Ladakh.
              </p>
            </div>

            <Link
              href="/holiday-packages"
              className="inline-flex items-center gap-2 bg-magenta hover:bg-magenta-hover text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-magenta flex-shrink-0"
            >
              <span>View All 10 Holiday Getaways</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {holidayPackages.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>

        </div>
      </section>

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Testimonials: Wall of Love */}
      <TestimonialSection />

      {/* 10. FAQ Section */}
      <FAQSection />
    </>
  );
}
