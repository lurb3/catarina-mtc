import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Marque a sua consulta de Medicina Tradicional Chinesa. Entre em contacto com Catarina Abreu para acupunctura, fitoterapia, Tui Ná, moxabustão e ventosas.",
  alternates: {
    canonical: "https://catarinaabreumtc.com/contact",
  },
  openGraph: {
    title: "Contacto | Catarina Abreu — MTC",
    description:
      "Marque a sua consulta de Medicina Tradicional Chinesa. Entre em contacto com Catarina Abreu para acupunctura, fitoterapia, Tui Ná, moxabustão e ventosas.",
    url: "https://catarinaabreumtc.com/contact",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contacto"
        description="Agende a sua consulta ou esclareça as suas dúvidas. Estou disponível para o acompanhar no seu caminho para o equilíbrio e bem-estar."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
