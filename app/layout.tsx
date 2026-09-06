import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsAppCTA from "@/components/StickyWhatsAppCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "P&C Tours and Travels | Pilgrimage & Holiday Packages, Bengaluru",
  description:
    "Plan pilgrimage yatras and holiday packages with P&C Tours and Travels, Bengaluru — 20+ years of travel expertise, all-inclusive pricing, personalised itineraries.",
  keywords: [
    "P&C Tours and Travels",
    "pilgrimage tour packages Bengaluru",
    "temple yatra Bengaluru",
    "holiday packages Bangalore",
    "Gandhi Nagar travel agency",
    "Char Dham Yatra flight",
  ],
  authors: [{ name: "P&C Tours and Travels" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-navy antialiased selection:bg-magenta selection:text-white pb-24 md:pb-0">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyWhatsAppCTA />
      </body>
    </html>
  );
}
