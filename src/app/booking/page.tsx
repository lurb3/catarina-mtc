import BookingButton from "@/components/Booking/BookingButton";
import { CalEvent, WHATSAPP_URL } from "@/config/booking";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marcar Consulta",
  description:
    "Marque a sua consulta de Medicina Tradicional Chinesa com Catarina Abreu, online ou presencial em Gondomar (Fânzeres). Escolha o dia e a hora que lhe convém.",
  alternates: { canonical: "/marcar-consulta" },
};

const options: {
  event: CalEvent;
  title: string;
  description: string;
  duration: string;
  prices: string;
}[] = [
  {
    event: "firstConsultation",
    title: "1ª Consulta",
    description:
      "Avaliação inicial completa: histórico de saúde, queixas, estilo de vida e diagnóstico segundo a MTC, seguida do plano de tratamento.",
    duration: "Até 2h",
    prices: "Online 40 € · Presencial 50 €",
  },
  {
    event: "followUpConsultation",
    title: "Consulta de Seguimento",
    description:
      "Para quem já fez a avaliação inicial: acompanhamento da evolução, tratamento e ajuste do plano.",
    duration: "Até 1h",
    prices: "Online 25 € · Presencial 30 €",
  },
];

export default function BookingPage() {
  return (
    <>
      {/* ── Options ── */}
      <section className="relative overflow-hidden bg-[#C7CFC0] px-6 pt-36 pb-28 text-[#2D352C] md:px-12 lg:pt-44">
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#B5BFAB]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#6C7463]">
            Marcação
          </p>
          <h1 className="mb-6 max-w-3xl font-serif text-5xl leading-[1.05] md:text-6xl">
            Marcar <em className="font-normal italic text-[#4B544A]">consulta</em>
          </h1>
          <p className="mb-16 max-w-xl text-base leading-relaxed text-[#4B544A]">
            Escolha o tipo de consulta e o horário que lhe convém. Consultas
            online ou presenciais no Espaço Blume, em Gondomar.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {options.map((option) => (
              <div
                key={option.event}
                className="flex flex-col rounded-2xl bg-[#2D352C] p-8 text-[#E6E1D2] md:p-10"
              >
                <h2 className="mb-2 font-serif text-3xl text-[#E6CFB8]">
                  {option.title}
                </h2>
                <p className="mb-6 text-sm text-[#959D8D]">
                  {option.duration} · {option.prices}
                </p>
                <p className="mb-10 text-base leading-relaxed text-[#B5BFAB]">
                  {option.description}
                </p>
                <BookingButton
                  event={option.event}
                  className="mt-auto w-full cursor-pointer rounded-full bg-[#E6CFB8] px-8 py-4 text-center text-base text-[#2D352C] transition hover:bg-[#E6E1D2]"
                >
                  Escolher horário
                </BookingButton>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 text-sm leading-relaxed text-[#4B544A] md:flex-row md:items-center md:justify-between">
            <p>
              A marcação fica confirmada após o pagamento de 50% do valor da
              sessão.{" "}
              <Link
                href="/consultas#politica-agendamento"
                className="text-[#2D352C] underline underline-offset-4"
              >
                Ver política de agendamento
              </Link>
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-[#2D352C] underline underline-offset-4"
            >
              Prefere marcar por WhatsApp? →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
