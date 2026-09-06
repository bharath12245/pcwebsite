import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilgrimage Yatra Packages | P&C Tours and Travels",
  description: "Browse 20+ all-inclusive Pilgrimage and Temple Yatra packages from Bengaluru covering Char Dham, Jyotirlinga, Tirupati, and more.",
};

export default function PilgrimageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
