/**
 * JSON-LD structured data for the practice.
 * Renders a MedicalBusiness + Person schema in the page <head>.
 *
 * Fill in the TODOs below with real data before going live:
 *   - telephone
 *   - streetAddress / addressLocality / postalCode
 *   - openingHours
 *   - geo coordinates
 *   - Catarina's credentials / sameAs social links
 */

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
          "Consultas de Medicina Tradicional Chinesa: acupunctura, fitoterapia, Tui Ná, moxabustão e ventosas.",
        // TODO: add real phone number
        telephone: "",
        address: {
          "@type": "PostalAddress",
          // TODO: fill in real address
          streetAddress: "",
          addressLocality: "",
          postalCode: "",
          addressCountry: "PT",
        },
        // TODO: add real geo coordinates
        geo: {
          "@type": "GeoCoordinates",
          latitude: 0,
          longitude: 0,
        },
        // TODO: add real opening hours, e.g. "Mo-Fr 09:00-18:00"
        openingHours: [],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        medicalSpecialty: "Traditional Chinese Medicine",
        employee: { "@id": "https://catarinaabreumtc.com/#catarina" },
        sameAs: [
          // TODO: add social profile URLs, e.g. Instagram, Facebook, LinkedIn
        ],
      },
      {
        "@type": "Person",
        "@id": "https://catarinaabreumtc.com/#catarina",
        name: "Catarina Abreu",
        url: "https://catarinaabreumtc.com/about",
        image: "https://catarinaabreumtc.com/images/catarina-abreu-mtc.jpeg",
        jobTitle: "Terapeuta de Medicina Tradicional Chinesa",
        worksFor: { "@id": "https://catarinaabreumtc.com/#business" },
        // TODO: add credential details, e.g. degree / certification names
        hasCredential: [],
        sameAs: [
          // TODO: add social profile URLs
        ],
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
