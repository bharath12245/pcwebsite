import { PRIMARY_PHONE, SECONDARY_PHONE } from "@/lib/tours";

export const metadata = {
  title: "Cancellation & Refund Policy | P&C Tours and Travels",
  description: "Cancellation and refund terms for pilgrimage yatras and holiday packages booked with P&C Tours and Travels.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="border-b border-borderColor pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-magenta">Booking Policies</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xs text-copy-muted">Last Updated: August 2026</p>
        </div>

        {/* Content Body */}
        <div className="prose prose-navy max-w-none text-copy-muted text-sm leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">General Policy</h2>
            <p>
              Cancellation requests must be made in writing via WhatsApp or phone to P&C Tours and Travels as early as possible before the scheduled departure. Refund eligibility, where applicable, depends on how much advance notice is given and the cancellation terms set by our transport, accommodation, and other service partners for that specific tour.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">How Refunds Are Determined</h2>
            <p>
              Because each tour involves different third-party suppliers (airlines, railways, hotels), refund amounts can vary from tour to tour. As a general principle:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cancellations made well in advance of departure are more likely to be eligible for a partial or full refund, subject to supplier terms.</li>
              <li>Cancellations made closer to the departure date are less likely to be refundable, as many supplier bookings (tickets, hotel blocks) become non-cancellable nearer the travel date.</li>
              <li>Exact refund eligibility for a specific tour will be communicated at the time of booking and again at the time of a cancellation request.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Non-Refundable Components</h2>
            <p>
              Certain costs — including confirmed train/flight tickets, visa fees (for international tours), and advance hotel deposits — may be non-refundable once booked with the supplier, regardless of how far in advance a cancellation is requested.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Tour Cancellation by P&C Tours and Travels</h2>
            <p>
              In the rare event that P&C Tours and Travels cancels a tour (for example, due to insufficient group size, government restrictions, or unforeseen circumstances), travellers will be offered a full refund of amounts paid to us, or the option to reschedule to an alternative departure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Refund Processing</h2>
            <p>
              Approved refunds will be processed to the original mode of payment within a reasonable timeframe, communicated at the time the refund is approved.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Amendments / Date Changes</h2>
            <p>
              Requests to change travel dates are subject to availability and the terms of the specific tour's suppliers, and may involve additional costs depending on the change requested.
            </p>
          </section>

          <section className="space-y-2 bg-surface p-6 rounded-2xl border border-borderColor">
            <h2 className="font-serif text-xl font-bold text-navy">Contact for Cancellations</h2>
            <p className="font-semibold text-navy">Phone / WhatsApp: {PRIMARY_PHONE} / {SECONDARY_PHONE}</p>
          </section>
        </div>

      </div>
    </div>
  );
}
