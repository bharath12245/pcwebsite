import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Compass } from "lucide-react";
import { PRIMARY_PHONE, SECONDARY_PHONE, OFFICE_ADDRESS, PRIMARY_WHATSAPP_LINK } from "@/lib/tours";

export const metadata = {
  title: "Contact P&C Tours and Travels | Bengaluru Office",
  description:
    "Get in touch with P&C Tours and Travels, Bengaluru. Call, WhatsApp, or visit our Gandhi Nagar office to plan your pilgrimage or holiday tour.",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "P&C Tours and Travels",
    "image": "https://pctoursandtravels.in/logo/main.png",
    "telephone": [PRIMARY_PHONE, SECONDARY_PHONE],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, Grand Majestic Mall, No. 2/17, Opp. Gubbi Veeranna Rangamandira, Gandhi Nagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560009",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="relative text-white py-24 lg:py-32 min-h-[85vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/contact.jpg" alt="Contact Us" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
            <Compass className="w-4 h-4 text-magenta-light" />
            <span>Connect With Our Travel Team</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have a destination in mind, or not sure where to start? Our team is happy to help you plan a pilgrimage yatra or holiday package that fits your dates, budget, and travel style.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Direct WhatsApp Call Card */}
            <div className="bg-surface p-8 rounded-3xl border border-borderColor space-y-6 shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-magenta text-white flex items-center justify-center shadow-magenta">
                  <MessageCircle className="w-8 h-8" />
                </div>

                <h2 className="font-serif text-2xl font-bold text-navy">
                  Instant WhatsApp Assistance
                </h2>

                <p className="text-copy-muted text-sm leading-relaxed">
                  WhatsApp is our fastest contact channel. Connect directly with Prhallada C and our travel team for package inquiries, custom itineraries, or seat availability.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <a
                  href={PRIMARY_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-magenta hover:bg-magenta-hover text-white text-sm font-bold py-4 px-6 rounded-2xl shadow-magenta transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with us on WhatsApp</span>
                </a>
                <p className="text-center text-xs text-copy-muted">
                  Instant replies during business hours (9:30 AM – 8:00 PM IST)
                </p>
              </div>
            </div>

            {/* Office Address & Phone Info */}
            <div className="bg-white p-8 rounded-3xl border border-borderColor space-y-8 shadow-card">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-borderColor pb-3">
                Office & Phone Details
              </h2>

              <div className="space-y-6 text-sm">
                
                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-navy text-base">Visit Us</h3>
                    <p className="text-copy-muted leading-relaxed">
                      {OFFICE_ADDRESS}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-navy text-base">Call Us Directly</h3>
                    <div className="flex flex-col text-copy-muted font-semibold">
                      <a href={`tel:${PRIMARY_PHONE.replace(/\s+/g, "")}`} className="hover:text-magenta transition-colors">
                        {PRIMARY_PHONE}
                      </a>
                      <a href={`tel:${SECONDARY_PHONE.replace(/\s+/g, "")}`} className="hover:text-magenta transition-colors">
                        {SECONDARY_PHONE}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-navy text-base">Operating Hours</h3>
                    <p className="text-copy-muted">
                      Monday to Saturday: 9:30 AM – 8:00 PM IST
                    </p>
                  </div>
                </div>

              </div>

              <div className="p-4 bg-surface rounded-2xl border border-borderColor-light text-xs text-navy flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>All booking communications handled directly via phone and verified WhatsApp line.</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
