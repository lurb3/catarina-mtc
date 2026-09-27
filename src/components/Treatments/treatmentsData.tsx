import { Treatment } from "@/types/treatment";

// Simple inline SVG icons (Lucide-style, currentColor) so we keep zero new deps.
const NeedleIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3 9 15" />
    <path d="m12 12 3 3" />
    <path d="M9 15a3 3 0 1 1-3 3" />
    <path d="M3 21l3-3" />
  </svg>
);
const LeafIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 3 0 6 1 8 3 0 7-4 13-10 13Z" />
    <path d="M2 22c4-3 7-7 9-13" />
  </svg>
);
const FlameIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.5 0 2.5-1 2.5-2.5 0-1-.5-1.5-1-2-1-1-1.5-2-1-3 .5-1 0-2-.5-3-2 1-3 3-3 5 0 1 0 2 .5 3 .5 1 0 2-.5 2.5z" />
    <path d="M12 2c1 1 2 3 2 5 0 1-.5 2-1 3 1 1 2 2 2 4 0 2.5-2 4.5-5 4.5S5 16.5 5 14c0-2 1-4 3-6 1-1 2-3 2-4 1 0 2-1 2-2z" />
  </svg>
);
const CupIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 4h6" />
    <path d="M10 4v2a7 7 0 0 0-5 6.7V18h14v-5.3A7 7 0 0 0 14 6V4" />
    <path d="M3 20h18" />
  </svg>
);

const treatmentsData: Treatment[] = [
  {
    id: 1,
    icon: NeedleIcon,
    title: "Acupunctura",
    paragraph:
      "Estimulação de pontos energéticos com agulhas finas para aliviar dores, reduzir o stress e equilibrar a circulação de Qi no corpo.",
    image: "/images/tratamentos/acupuntura.jpg",
  },
  {
    id: 2,
    icon: LeafIcon,
    title: "Dietoterapia e Fitoterapia",
    paragraph:
      "Fórmulas de plantas medicinais personalizadas a cada paciente, complementando a acupunctura no tratamento de patologias crónicas e agudas.",
    image: "/images/tratamentos/dietoterapia.jpg",
  },
  {
    id: 4,
    icon: FlameIcon,
    title: "Moxabustão",
    paragraph:
      "Aplicação de calor com a planta Artemísia em pontos específicos, indicada em quadros de frio interno, fadiga e dores crónicas.",
    image: "/images/tratamentos/moxabustao.jpg",
  },
  {
    id: 6,
    icon: CupIcon,
    title: "Ventosaterapia",
    paragraph:
      "Aplicação de ventosas que criam uma suave sucção sobre a pele, estimulando a circulação local e aliviando tensões e contraturas musculares.",
    image: "/images/tratamentos/ventosaterapia.jpg",
  },
];

export default treatmentsData;
