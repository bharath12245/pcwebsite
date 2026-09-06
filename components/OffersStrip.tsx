import { Users, Calendar, CreditCard, MessageCircle, Tag } from "lucide-react";
import { PRIMARY_WHATSAPP_LINK } from "@/lib/tours";

export default function OffersStrip() {
  const offers = [
    {
      icon: Users,
      tag: "Group & Family Special",
      color: "from-purple-600 to-indigo-700",
      title: "Group & Family Yatra Discount",
      desc: "Special group coordination, dedicated vehicle allocation, and priority darshan assistance for families & groups of 6+ pilgrims.",
      code: "PNC-GROUP",
      whatsappText: "Hi, I'd like to enquire about the Group & Family Yatra Discount (PNC-GROUP).",
    },
    {
      icon: Calendar,
      tag: "Advance Booking",
      color: "from-magenta to-pink-700",
      title: "Early-Bird Yatra Reservation",
      desc: "Book your Char Dham, 12 Jyotirlinga, or Ram Mandir yatra 30 days in advance for guaranteed train/flight seat allocation and hotel preference.",
      code: "PNC-EARLY",
      whatsappText: "Hi, I'd like to enquire about Early-Bird Yatra Reservation (PNC-EARLY).",
    },
    {
      icon: CreditCard,
      tag: "Flexible Payments",
      color: "from-navy to-navy-light",
      title: "Flexible Payment & EMI Options",
      desc: "Reserve your package with a minimal advance deposit. Easy monthly installment (EMI) options available through partner banks.",
      code: "PNC-FLEXI",
      whatsappText: "Hi, I'd like to enquire about Flexible Payment & EMI Options (PNC-FLEXI).",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-magenta mb-2">
            <Tag className="w-3.5 h-3.5 text-magenta" />
            <span>Exclusive Travel Value</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Ongoing Travel Offers & Payment Flexibility
          </h2>
          <p className="text-copy-muted text-sm mt-3">
            Designed to make pilgrimage yatras and holiday getaways affordable and accessible for every family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;
            const waUrl = `https://wa.me/917204180555?text=${encodeURIComponent(offer.whatsappText)}`;

            return (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden border border-borderColor hover:border-magenta/40 p-6 flex flex-col justify-between hover-lift shadow-card bg-surface"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${offer.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="bg-magenta-light text-magenta text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {offer.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy">
                    {offer.title}
                  </h3>

                  <p className="text-copy-muted text-xs leading-relaxed">
                    {offer.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-borderColor flex items-center justify-between gap-3">
                  <div className="text-xs">
                    <span className="text-gray-400 block text-[10px] uppercase font-semibold">Promo Code</span>
                    <span className="font-mono font-bold text-navy bg-white px-2 py-0.5 rounded border border-borderColor text-xs">
                      {offer.code}
                    </span>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy hover:bg-navy-hover text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Claim Offer</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
