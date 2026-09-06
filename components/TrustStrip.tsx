import { Award, ShieldCheck, HeartHandshake, MapPin, UserCheck, Clock } from "lucide-react";

export default function TrustStrip() {
  const pillars = [
    {
      icon: Award,
      title: "20+ Years Industry Expertise",
      desc: "Founded by Prhallada C in 2025, bringing over two decades of hands-on tourism knowledge to every itinerary.",
    },
    {
      icon: ShieldCheck,
      title: "All-Inclusive Pricing",
      desc: "Clear, transparent quotes covering stays, meals, transfers, and sightseeing with zero hidden charges.",
    },
    {
      icon: HeartHandshake,
      title: "Personalised Itineraries",
      desc: "Tailored travel schedules for individuals, families, and senior citizens matching your preferred dates and pace.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Tour Support",
      desc: "Experienced tour coordinators and darshan assistance on-ground to ensure your journey is smooth and peaceful.",
    },
  ];

  return (
    <section className="py-12 bg-navy text-white border-y border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="group flex flex-col p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-magenta/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(236,72,153,0.15)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle decorative glow in top right */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-magenta/10 rounded-full blur-2xl group-hover:bg-magenta/20 transition-all duration-500"></div>
                
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-magenta to-magenta-light text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(236,72,153,0.3)] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
