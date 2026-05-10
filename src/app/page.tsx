import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catarina Abreu | Medicina Tradicional Chinesa",
  description:
    "Consultas de Medicina Tradicional Chinesa: acupunctura, fitoterapia, Tui Ná, moxabustão e ventosas",
};

const isProduction = process.env.VERCEL_ENV === "production";

export default function Home() {
  if (isProduction) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#2D352C] px-4 text-[#E6E1D2]">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-4xl">Em Construção</h1>
          <p className="mb-8 text-lg text-[#B5BFAB]">
            O website está a ser preparado.
          </p>
          <p className="mt-8 text-sm text-[#959D8D]">
            Medicina Tradicional Chinesa
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Treatments />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
