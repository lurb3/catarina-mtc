"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

// Check if we're in production
const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-PT">
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="isolate">
            {!isProduction && <Header />}
            {children}
            {!isProduction && <Footer />}
          </div>
          {!isProduction && <ScrollToTop />}
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

