import { PRIMARY_PHONE, SECONDARY_PHONE } from "@/lib/tours";

export const metadata = {
  title: "Pricing Policy | P&C Tours and Travels",
  description: "Pricing Policy explaining inclusions, exclusions, price validity, and EMI payment options for P&C Tours and Travels.",
};

export default function PricingPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="border-b border-borderColor pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-magenta">Pricing Standards</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Pricing Policy
          </h1>
          <p className="text-xs text-copy-muted">Last Updated: August 2026</p>
        </div>

        {/* Content Body */}
        <div className="prose prose-navy max-w-none text-copy-muted text-sm leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">What's Included</h2>
            <p>Unless stated otherwise for a specific tour, listed package prices include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Accommodation as specified in the itinerary</li>
              <li>Meals as specified in the itinerary</li>
              <li>Transport as specified (train/coach/flight, as applicable)</li>
              <li>Sightseeing and entry fees as listed in the itinerary</li>
              <li>Tour manager/coordinator support throughout the journey</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">What's Excluded</h2>
            <p>Unless stated otherwise, package prices do not include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Personal expenses (shopping, tips, phone/laundry, etc.)</li>
              <li>Travel insurance (unless specified as included)</li>
              <li>Any meals, sightseeing, or entry fees not explicitly listed in the itinerary</li>
              <li>Additional costs arising from personal delays, missed connections, or individual requests outside the group itinerary</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Price Validity</h2>
            <p>
              Prices shared are subject to change without prior notice until a booking is confirmed with advance payment. Confirmed bookings are locked at the price agreed at the time of confirmation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">EMI / Payment Plans</h2>
            <p>
              Where EMI options are offered, they are subject to eligibility criteria set by the respective bank or payment partner. P&C Tours and Travels does not control EMI approval or terms — these are determined by the card issuer or partner.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Taxes</h2>
            <p>
              All prices are inclusive of applicable taxes unless stated otherwise for a specific tour.
            </p>
          </section>

          <section className="space-y-2 bg-surface p-6 rounded-2xl border border-borderColor">
            <h2 className="font-serif text-xl font-bold text-navy">Contact Us</h2>
            <p>For pricing clarifications, contact:</p>
            <p className="font-semibold text-navy">Phone / WhatsApp: {PRIMARY_PHONE} / {SECONDARY_PHONE}</p>
          </section>
        </div>

      </div>
    </div>
  );
}
