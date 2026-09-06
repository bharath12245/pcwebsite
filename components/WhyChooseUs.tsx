import { Compass, UserCheck, ShieldCheck, CreditCard, Sparkles, Map, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Compass,
      title: "Dual Travel Specialisation",
      desc: "Sacred temple yatras and relaxing holiday escapes seamlessly handled by one experienced operator.",
    },
    {
      icon: UserCheck,
      title: "On-Ground Tour Managers",
      desc: "Every group tour is accompanied by a dedicated, attentive manager handling darshan tickets, meals, and hotels.",
    },
    {
      icon: ShieldCheck,
      title: "All-Inclusive Transparency",
      desc: "Package quotes cover transport, quality hotel stays, wholesome meals, and sight-seeing entry fees.",
    },
    {
      icon: CreditCard,
      title: "Payment Flexibility & EMI",
      desc: "Book your package with an advance deposit and enjoy flexible installment payment options through partner banks.",
    },
    {
      icon: Sparkles,
      title: "Tailored for Senior Pilgrims",
      desc: "Senior-friendly travel schedules with comfortable rest stops, special darshan assistance, and minimal physical strain.",
    },
    {
      icon: Map,
      title: "Handpicked Stays & Transport",
      desc: "Vetted AC coaches, hygienic dining spots, and clean hotels located close to shrines and key attractions.",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-magenta mb-2">
            <CheckCircle2 className="w-4 h-4 text-magenta" />
            <span>Why Choose P&C Tours and Travels</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Built on Two Decades of Industry Experience
          </h2>
          <p className="text-copy-muted text-base mt-3">
            Founded by Prhallada C in 2025, our mission is to deliver stress-free, deeply rewarding travel across India with personal care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-borderColor hover:border-magenta/40 hover-lift shadow-card flex flex-col space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-magenta-light text-magenta flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy">
                  {feat.title}
                </h3>
                <p className="text-copy-muted text-xs leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
