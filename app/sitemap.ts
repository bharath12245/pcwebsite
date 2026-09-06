import { MetadataRoute } from "next";
import { getAllTours } from "@/lib/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pctoursandtravels.in";
  const allTours = getAllTours();

  const tourUrls = allTours.map((tour) => ({
    url: `${baseUrl}/${tour.category === "pilgrimage" ? "pilgrimage-tours" : "holiday-packages"}/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pilgrimage-tours`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/holiday-packages`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...tourUrls,
  ];
}
