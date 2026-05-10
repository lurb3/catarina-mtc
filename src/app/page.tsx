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

export default function Home() {
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
