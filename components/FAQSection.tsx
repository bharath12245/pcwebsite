"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { PRIMARY_WHATSAPP_LINK, OFFICE_ADDRESS } from "@/lib/tours";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<"pilgrimage" | "holiday" | "booking">("pilgrimage");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = {
    pilgrimage: [
      {
        q: "Does P&C Tours and Travels offer both pilgrimage and leisure holiday packages?",
        a: "Yes. P&C Tours and Travels offers temple yatras and pilgrimage circuits alongside general holiday and leisure packages, all designed and managed by a team with over 20 years of experience in the travel industry.",
      },
      {
        q: "What is included in a typical P&C Pilgrimage Yatra package?",
        a: "Unless specified otherwise for a specific tour, our pilgrimage packages include return transport (train or flight), accommodation in clean hotels/guesthouses, wholesome pure vegetarian meals, temple darshan assistance, and a dedicated tour manager.",
      },
      {
        q: "Are the pilgrimage tours senior-citizen friendly?",
        a: "Absolutely. We design our yatra schedules with manageable travel hours, regular rest breaks, hotel stays close to shrine entrances, and optional pony/palki/battery-car assistance where available.",
      },
      {
        q: "Can custom dates or private family yatras be organized?",
        a: "Yes! While we operate scheduled group departures, we also customize private family or group yatras tailored to your specific dates, group size, and temple preferences.",
      },
    ],
    holiday: [
      {
        q: "What kinds of holiday packages do you offer?",
        a: "We offer leisure packages across hill stations (Coorg, Ooty, Munnar), coastal & beach getaways (Goa, Andaman), Himalayan retreats (Kashmir, Ladakh, Darjeeling), and heritage tours (Rajasthan).",
      },
      {
        q: "Can holiday itineraries be customized?",
        a: "Yes. All holiday packages can be tailored according to your travel dates, preferred hotel category, meal plan, and sightseeing interests.",
      },
      {
        q: "Are flights and local sightseeing transfers included?",
        a: "Flight-inclusive packages clearly specify return airfare. All packages include private or AC coach transfers for local sightseeing per the itinerary.",
      },
    ],
    booking: [
      {
        q: "Where is P&C Tours and Travels located?",
        a: `Our office is located at ${OFFICE_ADDRESS}. You can visit us or connect directly via WhatsApp and phone.`,
      },
      {
        q: "How do I book or enquire about a package?",
        a: "Simply click 'Book Now' or 'Talk to Travel Team' on any package card to chat directly with us on WhatsApp (+91 72041 80555). We will assist you with itinerary details, seat availability, and advance payment details.",
      },
      {
        q: "What are your payment and EMI options?",
        a: "Bookings are confirmed with an advance deposit. Balance payments can be settled prior to travel. We also assist with EMI payment options through partner banks.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Cancellation requests must be submitted via WhatsApp or phone. Refund eligibility depends on supplier terms (railways, airlines, hotels) and how far in advance the cancellation is requested. Please review our Cancellation Policy for full details.",
      },
    ],
  };

  const currentFaqs = faqs[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-magenta mb-2">
            <HelpCircle className="w-4 h-4 text-magenta" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Frequently Asked Questions
          </h2>
          <p className="text-copy-muted text-sm mt-2">
            Everything you need to know about planning your journey with P&C Tours and Travels.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-10 border-b border-borderColor pb-4">
          <button
            onClick={() => { setActiveTab("pilgrimage"); setOpenIndex(0); }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "pilgrimage"
                ? "bg-navy text-white shadow-md"
                : "bg-surface text-copy-muted hover:text-navy"
            }`}
          >
            Pilgrimage Yatras
          </button>
          <button
            onClick={() => { setActiveTab("holiday"); setOpenIndex(0); }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "holiday"
                ? "bg-magenta text-white shadow-md"
                : "bg-surface text-copy-muted hover:text-navy"
            }`}
          >
            Holiday Packages
          </button>
          <button
            onClick={() => { setActiveTab("booking"); setOpenIndex(0); }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "booking"
                ? "bg-navy text-white shadow-md"
                : "bg-surface text-copy-muted hover:text-navy"
            }`}
          >
            Booking & Policies
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {currentFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-borderColor rounded-2xl overflow-hidden transition-all bg-surface"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-5 text-left font-serif text-lg font-bold text-navy flex justify-between items-center gap-4 hover:text-magenta transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-magenta flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div id={`faq-answer-${idx}`} className="px-5 pb-5 text-copy-muted text-sm leading-relaxed border-t border-borderColor-light pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-surface border border-borderColor">
          <p className="text-sm text-navy font-medium">
            Have a specific question about dates, custom routes, or group bookings?
          </p>
          <a
            href={PRIMARY_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 bg-magenta hover:bg-magenta-hover text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-magenta transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Our Travel Team on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
