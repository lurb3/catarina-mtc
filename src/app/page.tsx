import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MedicalBusinessJsonLd from "@/components/JsonLd/MedicalBusinessJsonLd";
import Locations from "@/components/Locations";
import Treatments from "@/components/Treatments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catarina Abreu | Medicina Tradicional Chinesa em Gondomar",
  description:
    "Consultas de Medicina Tradicional Chinesa em Gondomar (Fânzeres) e Santa Maria da Feira: acupuntura, fitoterapia, Tui Na, moxabustão e ventosas.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <MedicalBusinessJsonLd />
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Treatments />
      <AboutSectionTwo />
      <Locations />
      <Contact />
    </>
  );
}
