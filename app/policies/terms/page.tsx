import { OFFICE_ADDRESS, PRIMARY_PHONE, SECONDARY_PHONE } from "@/lib/tours";

export const metadata = {
  title: "Terms & Conditions | P&C Tours and Travels",
  description: "Terms & Conditions governing your use of P&C Tours and Travels website and booking tour packages.",
};

export default function TermsPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="border-b border-borderColor pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-magenta">Legal Terms</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Terms & Conditions
          </h1>
          <p className="text-xs text-copy-muted">Last Updated: August 2026</p>
        </div>

        {/* Content Body */}
        <div className="prose prose-navy max-w-none text-copy-muted text-sm leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Introduction</h2>
            <p>
              These Terms & Conditions govern your use of the P&C Tours and Travels website and any tour package booked with us. By booking a tour or using this website, you agree to these terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Booking & Confirmation</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>A booking is confirmed only upon receipt of the applicable advance payment and written confirmation from P&C Tours and Travels.</li>
              <li>Prices shared are indicative and subject to change until a booking is confirmed.</li>
              <li>It is the traveller's responsibility to provide accurate personal details (name, age, ID proof) at the time of booking.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Traveller Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Travellers must carry valid identification documents as required for the specific tour (e.g. for train travel, temple entry, or international travel where applicable).</li>
              <li>Travellers are responsible for their own conduct during the tour and must adhere to the itinerary and instructions of the tour manager/coordinator.</li>
              <li>Any illegal activity, misconduct, or failure to comply with safety instructions may result in removal from the tour without refund.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Changes to Itinerary</h2>
            <p>
              P&C Tours and Travels reserves the right to modify itineraries due to weather, transport delays, local restrictions, government regulations, or circumstances beyond our control. We will make reasonable efforts to provide equivalent alternatives where possible.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Liability</h2>
            <p>
              P&C Tours and Travels acts as an intermediary arranging transport, accommodation, and related services through third-party providers. We are not liable for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Delays, cancellations, or deficiencies caused by third-party service providers (airlines, railways, hotels, etc.)</li>
              <li>Loss of personal belongings during the tour</li>
              <li>Injury, illness, or loss arising from circumstances beyond our reasonable control</li>
            </ul>
            <p>Travellers are encouraged to purchase appropriate travel insurance for their journey.</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Intellectual Property</h2>
            <p>
              All content on this website — including text, images, and design — is the property of P&C Tours and Travels unless otherwise credited, and may not be reproduced without permission.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Governing Law</h2>
            <p>
              These terms are governed by the laws of India, with jurisdiction in Bengaluru, Karnataka.
            </p>
          </section>

          <section className="space-y-2 bg-surface p-6 rounded-2xl border border-borderColor">
            <h2 className="font-serif text-xl font-bold text-navy">Contact Us</h2>
            <p className="font-semibold text-navy">{OFFICE_ADDRESS}</p>
            <p className="font-semibold text-navy">Phone: {PRIMARY_PHONE} / {SECONDARY_PHONE}</p>
          </section>
        </div>

      </div>
    </div>
  );
}
