import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "../styles/index.css";
import { Shell } from "./shell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://catarinaabreumtc.com"),
  title: {
    default: "Catarina Abreu | Medicina Tradicional Chinesa",
    template: "%s | Catarina Abreu — MTC",
  },
  description:
    "Consultas de Medicina Tradicional Chinesa em Portugal: acupunctura, fitoterapia, Tui Ná, moxabustão e ventosas.",
  openGraph: {
    siteName: "Catarina Abreu — MTC",
    locale: "pt_PT",
    type: "website",
    url: "https://catarinaabreumtc.com",
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
      "Consultas de Medicina Tradicional Chinesa em Portugal: acupunctura, fitoterapia, Tui Ná, moxabustão e ventosas.",
    images: ["/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://catarinaabreumtc.com",
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
        <Analytics />
      </body>
    </html>
  );
}
