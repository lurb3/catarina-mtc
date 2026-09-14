import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description:
    "Conheça Catarina Abreu, terapeuta de Medicina Tradicional Chinesa. Formação, experiência clínica e uma abordagem centrada na pessoa e no seu equilíbrio.",
  alternates: {
    canonical: "https://catarinaabreumtc.com/about",
  },
  openGraph: {
    title: "Sobre Mim | Catarina Abreu — MTC",
    description:
      "Conheça Catarina Abreu, terapeuta de Medicina Tradicional Chinesa. Formação, experiência clínica e uma abordagem centrada na pessoa e no seu equilíbrio.",
    url: "https://catarinaabreumtc.com/about",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Mim"
        description="Terapeuta de Medicina Tradicional Chinesa com formação em acupunctura, fitoterapia e técnicas complementares. Uma abordagem centrada na pessoa e no seu equilíbrio."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
