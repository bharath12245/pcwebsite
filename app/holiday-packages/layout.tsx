import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holiday & Leisure Packages | P&C Tours and Travels",
  description: "Browse curated leisure holiday and getaway packages from Bengaluru covering Coorg, Goa, Kashmir, Andaman and more.",
};

export default function HolidayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
