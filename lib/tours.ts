import pilgrimageData from "@/content/tours/pilgrimage.json";
import holidaysData from "@/content/tours/holidays.json";
import internationalData from "@/content/tours/international.json";

export interface Tour {
  slug: string;
  name: string;
  category: "pilgrimage" | "holiday" | "international";
  duration_days: number;
  mode: "flight" | "train" | "coach" | "mixed";
  inclusions: string[];
  itinerary_summary: string;
  hero_image: string;
  whatsapp_message: string;
}

export function getAllTours(): Tour[] {
  return [...(pilgrimageData as Tour[]), ...(holidaysData as Tour[])];
}

export function getPilgrimageTours(): Tour[] {
  return pilgrimageData as Tour[];
}

export function getHolidayPackages(): Tour[] {
  return holidaysData as Tour[];
}

export function getInternationalPackages(): Tour[] {
  return internationalData as Tour[];
}

export function getTourBySlug(slug: string): Tour | undefined {
  return getAllTours().find((t) => t.slug === slug);
}

export function getFeaturedTours(limit: number = 6): Tour[] {
  const pilgrimages = getPilgrimageTours().slice(0, 4);
  const holidays = getHolidayPackages().slice(0, 2);
  return [...pilgrimages, ...holidays].slice(0, limit);
}

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/917204180555?text=${encoded}`;
}

export const PRIMARY_WHATSAPP_LINK = "https://wa.me/917204180555?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20tour%20packages.";
export const PRIMARY_PHONE = "+91 72041 80555";
export const SECONDARY_PHONE = "+91 82201 00261";
export const OFFICE_ADDRESS = "2nd Floor, Grand Majestic Mall, No. 2/17, Opp. Gubbi Veeranna Rangamandira, Gandhi Nagar, Bengaluru, Karnataka 560009";
