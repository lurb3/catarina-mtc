import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Nome do Profissional] | Medicina Tradicional Chinesa em [Cidade]",
  description:
    "Consultas de Medicina Tradicional Chinesa em [Cidade]: acupunctura, fitoterapia, Tui Ná, moxabustão e ventosas. Marcação online.",
};

// Check if we're in production (used to show construction page)
const isProduction = process.env.VERCEL_ENV === "production";

export default function Home() {
  // Show construction page in production
  if (isProduction) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-black">Em Construção</h1>
          <p className="mb-8 text-lg text-gray-600">
            O nosso website está a ser preparado.
            <br />
          </p>
          <div className="animate-pulse text-6xl">🏗️</div>
          <p className="mt-8 text-sm text-gray-400">
            Medicina Tradicional Chinesa em Gondomar
          </p>
        </div>
      </main>
    );
  }

  // Show full site in development
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Treatments />
      <AboutSectionTwo />
      <Blog />
      <Contact />
    </>
  );
}
