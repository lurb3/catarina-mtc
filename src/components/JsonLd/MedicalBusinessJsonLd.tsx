/**
 * JSON-LD structured data for the practice.
 * Renders a MedicalBusiness + Person schema in the page <head>.
 *
 * Only real data goes here — empty or fake values (blank address, 0/0 geo)
 * are worse than omitting the field.
 */

import { OPENING_HOURS } from "@/config/business";

const ACSS = {
  "@type": "Organization",
  name: "Administração Central do Sistema de Saúde (ACSS)",
  url: "https://www.acss.min-saude.pt",
};

const SAME_AS = ["https://www.instagram.com/catarinaabreumtc"];

const MedicalBusinessJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://catarinaabreumtc.com/#business",
        name: "Catarina Abreu — Medicina Tradicional Chinesa",
        url: "https://catarinaabreumtc.com",
        logo: "https://catarinaabreumtc.com/images/logo/logo.svg",
        image: "https://catarinaabreumtc.com/images/catarina-abreu-mtc.jpeg",
        description:
          "Consultas de Medicina Tradicional Chinesa: acupuntura, fitoterapia, Tui Na, moxabustão e ventosas.",
        telephone: "+351918844601",
        email: "catarinaabreumtc@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua do Repelão 370, Loja 15",
          postalCode: "4510-649",
          addressLocality: "Fânzeres",
          addressRegion: "Porto",
          addressCountry: "PT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.172357,
          longitude: -8.540986,
        },
        hasMap: "https://www.google.com/maps?q=41.172357,-8.540986",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: OPENING_HOURS.days,
          opens: OPENING_HOURS.opens,
          closes: OPENING_HOURS.closes,
        },
        areaServed: [
          "Gondomar",
          "Porto",
          "Valongo",
          "Maia",
          "Santa Maria da Feira",
        ],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        medicalSpecialty: "Traditional Chinese Medicine",
        employee: { "@id": "https://catarinaabreumtc.com/#catarina" },
        sameAs: SAME_AS,
      },
      {
        "@type": "Person",
        "@id": "https://catarinaabreumtc.com/#catarina",
        name: "Catarina Abreu",
        url: "https://catarinaabreumtc.com/perfil-clinico",
        image: "https://catarinaabreumtc.com/images/catarina-abreu-mtc.jpeg",
        jobTitle: "Especialista de Medicina Tradicional Chinesa e Fitoterapia",
        worksFor: { "@id": "https://catarinaabreumtc.com/#business" },
        workLocation: [
          { "@id": "https://catarinaabreumtc.com/#business" },
          {
            "@type": "MedicalClinic",
            name: "FisioSouto",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Fontanário 395",
              postalCode: "4520-716",
              addressLocality: "Santa Maria da Feira",
              addressRegion: "Aveiro",
              addressCountry: "PT",
            },
          },
        ],
        knowsAbout: [
          "Medicina Tradicional Chinesa",
          "Acupuntura",
          "Fitoterapia",
          "Moxabustão",
          "Ventosaterapia",
          "Tui Na",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Cédula Profissional",
            name: "Especialista de Medicina Tradicional Chinesa",
            identifier: "C0062366",
            recognizedBy: ACSS,
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Cédula Profissional",
            name: "Especialista de Fitoterapia",
            identifier: "C0040836",
            recognizedBy: ACSS,
          },
        ],
        sameAs: SAME_AS,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default MedicalBusinessJsonLd;
