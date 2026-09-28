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
const HandIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
    <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
);

const treatmentsData: Treatment[] = [
  {
    id: 1,
    icon: NeedleIcon,
    title: "Acupuntura",
    paragraph:
      "Aplicação de agulhas em pontos específicos do corpo para promover o reequilíbrio do Qi, auxiliar na gestão do stress e favorecer o alívio de desconfortos físicos.",
    image: "/images/tratamentos/acupuntura.jpg",
  },
  {
    id: 2,
    icon: LeafIcon,
    title: "Dietoterapia e Fitoterapia",
    paragraph:
      "Recomendação de fórmulas fitoterapêuticas tradicionais e orientações alimentares personalizadas a cada utente. Atuam diretamente no reequilíbrio energético, no reforço da vitalidade e na promoção do bem-estar geral em diferentes fases da vida.",
    image: "/images/tratamentos/dietoterapia.jpg",
  },
  {
    id: 4,
    icon: FlameIcon,
    title: "Moxabustão",
    paragraph:
      "Aplicação de calor suave em pontos e áreas específicas do corpo através da combustão da planta Artemisia vulgaris (Moxa). É utilizada para estimular a circulação energética, promovendo o conforto térmico, o reforço da vitalidade e o alívio de desconfortos persistentes.",
    image: "/images/tratamentos/moxabustao.jpg",
  },
  {
    id: 5,
    icon: CupIcon,
    title: "Ventosaterapia",
    paragraph:
      "Aplicação de ventosas que criam um efeito de sucção suave sobre a pele, estimulando a circulação sanguínea local e auxiliando no alívio de tensões, rigidez e contraturas musculares.",
    image: "/images/tratamentos/ventosaterapia.jpg",
  },
  {
    id: 6,
    icon: HandIcon,
    title: "Tui Na (Massagem Terapêutica Chinesa)",
    paragraph:
      "Abordagem corporal da Medicina Tradicional Chinesa que combina técnicas de compressão, amassamento, tração e mobilização ao longo dos meridianos e pontos energéticos. Auxilia na libertação de tensões musculares, favorece a mobilidade articular e estimula a circulação energética e sanguínea.",
    image: "/images/tratamentos/tuina.jpg",
  },
];

export default treatmentsData;
