import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultas e Preços em Gondomar",
  description:
    "Saiba como funciona uma consulta de Medicina Tradicional Chinesa com Catarina Abreu em Gondomar (Fânzeres) e Santa Maria da Feira: primeira consulta, acompanhamento, preços e o que esperar.",
  alternates: { canonical: "/consultas" },
};

// ─── Process steps ───────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Marcação",
    description:
      "Escolha o dia e a hora online, na página de marcação, ou contacte por WhatsApp ou telemóvel.",
  },
  {
    number: "02",
    title: "Primeira Consulta",
    description:
      "Anamnese completa e avaliação segundo os princípios da MTC, seguida do primeiro tratamento na mesma sessão.",
  },
  {
    number: "03",
    title: "Plano Personalizado",
    description:
      "Definimos o protocolo de tratamento, a frequência das sessões e eventuais recomendações alimentares ou de estilo de vida.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description:
      "Cada sessão é adaptada à sua evolução. Avaliamos progressos e ajustamos o plano para resultados sustentados.",
  },
];

// ─── Pricing cards ───────────────────────────────────────────────────────────

const pricingGroups = [
  {
    id: "online",
    title: "Consultas Online",
    subtitle: "Por videochamada, onde estiver",
    items: [
      {
        id: 1,
        label: "1ª Consulta",
        detail: "Avaliação inicial",
        duration: "Até 2h de duração",
        price: "40 €",
        note: "",
      },
      {
        id: 2,
        label: "Consulta de Seguimento",
        detail: "Avaliação e ajuste do plano",
        duration: "Até 1h de duração",
        price: "25 €",
        note: "",
      },
      {
        id: 3,
        label: "Plano de Tratamento",
        detail: "1ª consulta + 2 consultas de seguimento",
        duration: "3 consultas",
        price: "85 €",
        note: "Validade de 1 ano a partir da data de compra.",
      },
    ],
  },
  {
    id: "presencial",
    title: "Consultas Presenciais",
    subtitle: "Espaço Blume — Fânzeres, Gondomar",
    items: [
      {
        id: 1,
        label: "1ª Consulta",
        detail: "Avaliação inicial",
        duration: "Até 2h de duração",
        price: "50 €",
        note: "",
      },
      {
        id: 2,
        label: "Consulta de Seguimento",
        detail: "Avaliação e tratamento",
        duration: "Até 1h de duração",
        price: "30 €",
        note: "",
      },
    ],
  },
];

// ─── Booking & payment policy ────────────────────────────────────────────────

const bookingPolicy = [
  {
    title: "Reserva Temporária",
    text: "O horário pretendido fica pré-reservado por um período máximo de 4 horas. Caso o pagamento não seja efetuado dentro deste prazo, a vaga será novamente disponibilizada.",
  },
  {
    title: "Confirmação Efetiva",
    text: "A consulta só fica definitivamente agendada após a receção e validação do comprovativo de pagamento de 50% do valor total da sessão.",
  },
  {
    title: "Alterações e Cancelamentos",
    text: "Qualquer pedido de cancelamento ou remarcação deve ser comunicado com, pelo menos, 24 horas de antecedência.",
  },
  {
    title: "Canais Oficiais",
    text: "Todos os agendamentos, dúvidas ou alterações devem ser tratados exclusivamente através do WhatsApp ou telemóvel. Não são consideradas válidas mensagens enviadas através de redes sociais pessoais.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConsultationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#C7CFC0] px-6 pt-36 pb-24 text-[#2D352C] md:px-12 lg:pt-44">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#B5BFAB]/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#E6CFB8]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#6C7463]">
            Consultas
          </p>
          <h1 className="mb-6 max-w-3xl font-serif text-5xl leading-[1.05] text-[#2D352C] md:text-6xl lg:text-7xl">
            Uma abordagem{" "}
            <em className="font-normal italic text-[#4B544A]">integral</em>
            <br />à sua saúde
          </h1>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-[#4B544A]">
            Cada consulta começa por ouvir. O diagnóstico em Medicina Tradicional
            Chinesa considera o ser humano na sua totalidade — corpo, emoções e
            contexto de vida.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/marcar-consulta"
              className="rounded-full bg-[#2D352C] px-8 py-4 text-base text-[#E6E1D2] transition hover:bg-[#4B544A]"
            >
              Marcar Consulta
            </Link>
            <a
              href="#como-funciona"
              className="rounded-full border border-[#2D352C]/40 px-8 py-4 text-base text-[#2D352C] transition hover:border-[#2D352C]"
            >
              Como Funciona
            </a>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="como-funciona" className="bg-[#2D352C] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
            O Processo
          </p>
          <h2 className="mb-16 max-w-xl font-serif text-4xl text-[#E6E1D2] md:text-5xl">
            Do primeiro contacto ao bem-estar
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="group">
                <p className="mb-4 font-serif text-5xl text-[#E6CFB8]/30 transition group-hover:text-[#E6CFB8]/60">
                  {step.number}
                </p>
                <h3 className="mb-3 font-serif text-xl text-[#E6E1D2]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#B5BFAB]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-[#6C7463] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
            Honorários
          </p>
          <h2 className="mb-16 max-w-xl font-serif text-4xl text-[#E6E1D2] md:text-5xl">
            Transparência desde o início
          </h2>

          <div className="space-y-16">
            {pricingGroups.map((group) => (
              <div key={group.id}>
                <h3 className="mb-1 font-serif text-2xl text-[#E6E1D2] md:text-3xl">
                  {group.title}
                </h3>
                <p className="mb-8 text-md text-[#E6CFB8]">{group.subtitle}</p>

                <div className="grid gap-6 md:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-2xl p-8 transition hover:shadow-2xl bg-[#2D352C] ring-1 ring-[#E6CFB8]/30`}
                    >
                      <h4 className="mb-1 font-serif text-xl text-[#E6E1D2]">
                        {item.label}
                      </h4>
                      <p className="text-sm text-[#B5BFAB]">{item.detail}</p>
                      <p className="mb-6 text-sm text-[#959D8D]">
                        {item.duration}
                      </p>
                      <p className="mb-2 font-serif text-4xl text-[#E6CFB8]">
                        {item.price}
                      </p>
                      {item.note && (
                        <p className="text-xs text-[#959D8D]">{item.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Booking & payment policy ── */}
          <div
            id="politica-agendamento"
            className="mt-16"
          >
            <h3 className="mb-3 font-serif text-2xl text-[#E6E1D2] md:text-3xl">
              Política de Agendamento e Pagamento
            </h3>
            <p className="mb-10 text-base leading-relaxed text-[#C7CFC0]">
              Para garantir o compromisso mútuo e o bom funcionamento da nossa
              agenda, o processo de marcação rege-se pelas seguintes normas:
            </p>
            <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {bookingPolicy.map((rule) => (
                <div key={rule.title} className="border-l-2 border-[#E6CFB8]/50 pl-5">
                  <dt className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#E6CFB8]">
                    {rule.title}
                  </dt>
                  <dd className="text-base leading-relaxed text-[#E6E1D2]">
                    {rule.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── FAQ teaser ── */}
      <section className="bg-[#C7CFC0] px-6 py-20 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6C7463]">
              FAQ
            </p>
            <h2 className="font-serif text-3xl text-[#2D352C] md:text-4xl">
              Tem dúvidas antes de marcar?
            </h2>
          </div>
          <Link
            href="/faq"
            className="rounded-full border border-[#2D352C]/40 px-8 py-4 text-base text-[#2D352C] transition hover:border-[#2D352C]"
          >
            Ver perguntas frequentes →
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#6C7463] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-[#2D352C] px-8 py-16 text-center md:px-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
              Próximo passo
            </p>
            <h2 className="mb-6 font-serif text-4xl text-[#E6E1D2] md:text-5xl">
              Pronto para começar?
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-[#B5BFAB]">
              Marque a sua primeira consulta e dê o primeiro passo em direcção a
              um equilíbrio duradouro.
            </p>
            <Link
              href="/marcar-consulta"
              className="inline-block rounded-full bg-[#E6CFB8] px-10 py-4 text-base text-[#2D352C] transition hover:bg-[#E6E1D2]"
            >
              Marcar Consulta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
