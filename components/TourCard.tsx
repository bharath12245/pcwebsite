import Link from "next/link";
import Image from "next/image";
import { Tour, buildWhatsAppLink } from "@/lib/tours";
import { Plane, Train, Bus, Clock, CheckCircle2, MessageCircle, ArrowUpRight, Shield, Utensils, Hotel, UserCheck } from "lucide-react";

interface TourCardProps {
  tour: Tour;
  featured?: boolean;
}

export default function TourCard({ tour, featured = false }: TourCardProps) {
  const getModeIcon = (mode: Tour["mode"]) => {
    switch (mode) {
      case "flight":
        return <Plane className="w-3.5 h-3.5" />;
      case "train":
        return <Train className="w-3.5 h-3.5" />;
      case "coach":
      default:
        return <Bus className="w-3.5 h-3.5" />;
    }
  };

  let detailPath = `/holiday-packages/${tour.slug}`;
  if (tour.category === "pilgrimage") {
    detailPath = `/pilgrimage-tours/${tour.slug}`;
  } else if (tour.category === "international") {
    detailPath = `/international-packages/${tour.slug}`;
  }

  const waLink = buildWhatsAppLink(tour.whatsapp_message);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-borderColor hover:border-magenta/40 hover-lift flex flex-col h-full shadow-card transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-surface">
        <Image
          src={tour.hero_image}
          alt={`${tour.category === "pilgrimage" ? "Pilgrimage Yatra" : tour.category === "international" ? "International Package" : "Holiday Package"} to ${tour.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>

        {/* Category & Duration Tags */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center gap-2">
          <span
            className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
              tour.category === "international"
                ? "bg-amber-500 text-white"
                : tour.category === "pilgrimage"
                ? "bg-navy text-white"
                : "bg-magenta text-white"
            }`}
          >
            {tour.category === "international" ? "International Package" : tour.category === "pilgrimage" ? "Pilgrimage Yatra" : "Holiday Package"}
          </span>

          <span className="bg-white/95 text-navy backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-magenta" />
            {tour.duration_days} Days
          </span>
        </div>

        {/* Travel Mode Overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
          <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 border border-white/20">
            <Shield className="w-3.5 h-3.5" />
            <span className="capitalize">Guided Package</span>
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <Link href={detailPath} className="group/title block">
            <h3 className="font-serif text-xl font-bold text-navy group-hover/title:text-magenta transition-colors line-clamp-2 leading-tight">
              {tour.name}
            </h3>
          </Link>

          <p className="text-copy-muted text-xs leading-relaxed mt-2.5 line-clamp-3">
            {tour.itinerary_summary}
          </p>

          {/* Feature Pill Strip */}
          <div className="grid grid-cols-2 gap-1.5 mt-4 pt-3 border-t border-borderColor-light text-[11px] text-navy font-medium">
            <div className="flex items-center gap-1.5">
              <Hotel className="w-3.5 h-3.5 text-magenta" />
              <span className="truncate">Hotel / Stay</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-magenta" />
              <span className="truncate">Meals Included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-magenta" />
              <span className="truncate">Tour Manager</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-magenta" />
              <span className="truncate">All-Inclusive</span>
            </div>
          </div>
        </div>

        {/* Actions Container */}
        <div className="pt-3 border-t border-borderColor flex items-center gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-magenta hover:bg-magenta-hover text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-magenta"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book Now</span>
          </a>

          <Link
            href={detailPath}
            className="bg-surface hover:bg-surface-muted text-navy p-2.5 rounded-xl transition-colors border border-borderColor flex items-center justify-center"
            title="View Itinerary Details"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
