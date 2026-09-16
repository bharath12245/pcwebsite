import Image from "next/image";
import Link from "next/link";
import { Award, Compass, Sun, MapPin, Phone, MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { PRIMARY_WHATSAPP_LINK, PRIMARY_PHONE, SECONDARY_PHONE, OFFICE_ADDRESS } from "@/lib/tours";

export const metadata = {
  title: "About P&C Tours and Travels | Bengaluru Tour Operator",
  description:
    "Learn about P&C Tours and Travels — Founded in 2025 by Prhallada C, backed by 17 years in IRCTC of personal industry experience, offering pilgrimage and holiday packages from Bengaluru.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Banner */}
      <section className="relative text-white py-16 lg:py-24 min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-about-hero.png"
            alt="Scenic background representing travel and touring across India"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-magenta-light">
            <Award className="w-4 h-4 text-magenta-light" />
            <span>Our Journey & Purpose</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            About P&C Tours and Travels
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Founded in 2025 by Prhallada C, backed by 17 years in IRCTC of personal industry experience
          </p>
        </div>
      </section>

      {/* Main Content Body (SEO Document Verbatim) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
          
          {/* Main Story Paragraphs & Founder Profile */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch pt-4">
            
            {/* Story Text */}
            <div className="flex-1 text-copy-muted leading-relaxed space-y-6 font-normal">
              <p className="text-xl sm:text-2xl font-medium text-navy leading-relaxed">
                P&C Tours and Travels was founded in 2025 by Prhallada C, with a simple goal: to make well-organised, trustworthy travel accessible to every kind of traveller — from those seeking a spiritual pilgrimage to those looking for a relaxing holiday escape.
              </p>

              <p className="text-base sm:text-lg">
                While the company itself is newly established, it isn't new to travel. Prhallada C brings 17 years in IRCTC of hands-on experience in the tourism and travel industry, gained long before P&C was founded. That experience shapes every itinerary we design — from choosing reliable transport and accommodation partners to understanding what makes a temple yatra run smoothly or a family holiday genuinely relaxing.
              </p>

              <p className="text-base sm:text-lg">
                At P&C Tours and Travels, we believe travel should be simple to plan and easy to trust. That's why every package we offer is all-inclusive — covering transport, stay, meals, and sightseeing wherever possible — with clear pricing and no hidden costs. We work with travellers individually, in families, and in groups, tailoring pace, dates, and inclusions to what actually works for you.
              </p>
            </div>

            {/* Founder Profile Card */}
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="bg-surface border border-borderColor rounded-3xl p-8 flex flex-col items-center text-center shadow-card h-full justify-center space-y-6 transition-all hover:border-magenta/30">
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full overflow-hidden border-[6px] border-white shadow-xl">
                  <Image
                    src="/images/founder.png"
                    alt="Prahalad - Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-3xl font-bold text-navy">Prhallada C</h3>
                  <div className="w-12 h-0.5 bg-magenta mx-auto rounded-full my-2"></div>
                  <p className="text-magenta font-bold text-xs tracking-widest uppercase">Founder</p>
                </div>
              </div>
            </div>

          </div>

          {/* Core Offerings Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Card 1: Pilgrimage */}
            <div className="bg-surface p-8 rounded-3xl border border-borderColor hover:border-navy/40 transition-all space-y-4 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy">
                Pilgrimage & Temple Tours
              </h3>
              <p className="text-copy-muted text-sm leading-relaxed">
                Thoughtfully planned yatras to major temple circuits and spiritual destinations across India, with attention to comfort, darshan timing, and traveller convenience.
              </p>
              <Link
                href="/pilgrimage-tours"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-magenta transition-colors"
              >
                <span>View Pilgrimage Catalogue</span>
                <CheckCircle2 className="w-4 h-4 text-magenta" />
              </Link>
            </div>

            {/* Card 2: Holiday Packages */}
            <div className="bg-surface p-8 rounded-3xl border border-borderColor hover:border-magenta/40 transition-all space-y-4 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-magenta text-white flex items-center justify-center font-bold">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy">
                Holiday Packages
              </h3>
              <p className="text-copy-muted text-sm leading-relaxed">
                Leisure getaways to hill stations, coastal towns, wildlife destinations, and popular holiday circuits, designed for relaxation and discovery.
              </p>
              <Link
                href="/holiday-packages"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-magenta hover:text-magenta-hover transition-colors"
              >
                <span>View Holiday Catalogue</span>
                <CheckCircle2 className="w-4 h-4 text-magenta" />
              </Link>
            </div>
          </div>

          {/* Location & Closing Callout */}
          <div className="bg-navy text-white p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold">
                Visit Us in Gandhi Nagar, Bengaluru
              </h3>
              <p className="text-gray-300 text-sm">
                Based in Gandhi Nagar, Bengaluru, our team is available to help you plan your next journey — whether that's a spiritual yatra or a well-earned holiday.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={PRIMARY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-magenta hover:bg-magenta-hover text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-magenta transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get in Touch With Our Team</span>
              </a>

              <a
                href={`tel:${PRIMARY_PHONE.replace(/\s+/g, "")}`}
                className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PRIMARY_PHONE}</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
