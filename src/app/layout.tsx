import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "../styles/index.css";
import CookieConsent from "@/components/CookieConsent";
import { Shell } from "./shell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://catarinaabreumtc.com"),
  title: {
    default: "Catarina Abreu | Medicina Tradicional Chinesa",
    template: "%s | Catarina Abreu — MTC",
  },
  description:
    "Consultas de Medicina Tradicional Chinesa em Fânzeres, Gondomar: acupuntura, fitoterapia, Tui Na, moxabustão e ventosas.",
  openGraph: {
    siteName: "Catarina Abreu — MTC",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Catarina Abreu — Medicina Tradicional Chinesa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catarina Abreu | Medicina Tradicional Chinesa",
    description:
      "Consultas de Medicina Tradicional Chinesa em Fânzeres, Gondomar: acupuntura, fitoterapia, Tui Na, moxabustão e ventosas.",
    images: ["/images/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-PT">
      <head />
      <body className={`bg-[#C7CFC0] ${inter.className}`}>
        <Shell>{children}</Shell>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
