import Link from "next/link";
import { ShieldCheck, Phone, MapPin, MessageCircle } from "lucide-react";
import { OFFICE_ADDRESS, PRIMARY_PHONE, SECONDARY_PHONE, PRIMARY_WHATSAPP_LINK } from "@/lib/tours";

export const metadata = {
  title: "Privacy Policy | P&C Tours and Travels",
  description: "Privacy Policy for P&C Tours and Travels, explaining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="border-b border-borderColor pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-magenta">Legal Policy</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Privacy Policy
          </h1>
          <p className="text-xs text-copy-muted">Last Updated: August 2026</p>
        </div>

        {/* Content Body */}
        <div className="prose prose-navy max-w-none text-copy-muted text-sm leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Introduction</h2>
            <p>
              P&C Tours and Travels ("we," "us," "our") operates this website and provides pilgrimage and holiday tour packages. This Privacy Policy explains how we collect, use, and protect the personal information you share with us when you use our website or book a tour.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact details:</strong> name, phone number, city</li>
              <li><strong>Booking details:</strong> preferred tour, travel dates, number of travellers, group composition</li>
              <li><strong>Communication records:</strong> enquiries submitted via WhatsApp or phone</li>
              <li><strong>Payment information:</strong> processed through our payment partners; we do not store full card or bank details on our own servers</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to enquiries and process bookings</li>
              <li>To send booking confirmations, itinerary details, and travel updates</li>
              <li>To share offers and updates, only if you've opted in</li>
              <li>To improve our services and website experience</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share necessary booking details with third-party service providers (hotels, transport operators, insurance providers) strictly to fulfil your tour booking.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Data Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your personal information from unauthorised access, loss, or misuse.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us via WhatsApp or phone.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Cookies</h2>
            <p>
              Our website may use cookies to improve browsing experience and understand site usage. You can disable cookies through your browser settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-navy">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="space-y-2 bg-surface p-6 rounded-2xl border border-borderColor">
            <h2 className="font-serif text-xl font-bold text-navy">Contact Us</h2>
            <p>For privacy-related questions, contact us at:</p>
            <p className="font-semibold text-navy">{OFFICE_ADDRESS}</p>
            <p className="font-semibold text-navy">Phone: {PRIMARY_PHONE} / {SECONDARY_PHONE}</p>
          </section>
        </div>

      </div>
    </div>
  );
}
