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
const HandIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-4 0v5" />
    <path d="M14 10V4a2 2 0 0 0-4 0v6" />
    <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
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
    <path d="M5 4h14v6a7 7 0 0 1-14 0V4Z" />
    <path d="M3 4h18" />
    <path d="M12 17v4" />
    <path d="M8 21h8" />
  </svg>
);
const EarIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 4-6 8.5a3 3 0 0 1-6 0" />
    <path d="M9 8.5a3.5 3.5 0 1 1 7 0c0 3.5-3 3-3 5.5" />
  </svg>
);

const treatmentsData: Treatment[] = [
  {
    id: 1,
    icon: NeedleIcon,
    title: "Acupunctura",
    paragraph:
      "Estimulação de pontos energéticos com agulhas finas para aliviar dores, reduzir o stress e equilibrar a circulação de Qi no corpo.",
  },
  {
    id: 2,
    icon: LeafIcon,
    title: "Fitoterapia Chinesa",
    paragraph:
      "Fórmulas de plantas medicinais personalizadas a cada paciente, complementando a acupunctura no tratamento de patologias crónicas e agudas.",
  },
  {
    id: 3,
    icon: HandIcon,
    title: "Tui Ná",
    paragraph:
      "Massagem terapêutica chinesa que combina pressão, alongamento e mobilizações para libertar tensões musculares e articulares.",
  },
  {
    id: 4,
    icon: FlameIcon,
    title: "Moxabustão",
    paragraph:
      "Aplicação de calor com a planta Artemísia em pontos específicos, indicada em quadros de frio interno, fadiga e dores crónicas.",
  },
  {
    id: 5,
    icon: CupIcon,
    title: "Ventosas",
    paragraph:
      "Técnica de sucção que ajuda a desbloquear estagnações, melhorar a circulação sanguínea e aliviar contracturas musculares.",
  },
  {
    id: 6,
    icon: EarIcon,
    title: "Auriculoterapia",
    paragraph:
      "Estimulação de pontos reflexos do pavilhão auricular, útil no controlo da ansiedade, insónia, dependências e gestão do peso.",
  },
];

export default treatmentsData;
