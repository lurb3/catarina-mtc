"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";

const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="isolate">
        {!isProduction && <Header />}
        {children}
        {!isProduction && <Footer />}
      </div>
      {!isProduction && <ScrollToTop />}
    </Providers>
  );
}
