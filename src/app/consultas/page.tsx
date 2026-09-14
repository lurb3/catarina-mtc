import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultas | Catarina Abreu — Medicina Tradicional Chinesa",
  description:
    "Saiba como funciona uma consulta de Medicina Tradicional Chinesa com Catarina Abreu: primeira consulta, acompanhamento e o que esperar.",
};

// ─── FAQ data ────────────────────────────────────────────────────────────────

const faqs = [
  {
    id: 1,
    question: "Como é a primeira consulta?",
    answer:
      "A primeira consulta dura cerca de 75 minutos. Inclui uma anamnese detalhada — histórico de saúde, queixas, estilo de vida, observação da língua e palpação do pulso — seguida do primeiro tratamento. O objectivo é compreender o seu padrão de desequilíbrio de forma holística.",
  },
  {
    id: 2,
    question: "Quantas sessões são necessárias?",
    answer:
      "Depende da condição e do indivíduo. Queixas agudas (constipação, dor pontual) resolvem-se frequentemente em 3–5 sessões. Condições crónicas — insónia, ansiedade, dores persistentes — beneficiam de um plano mais longo, geralmente 8–12 sessões espaçadas.",
  },
  {
    id: 3,
    question: "As agulhas doem?",
    answer:
      "As agulhas de acupunctura são muito finas — entre 0,16 e 0,30 mm. A maioria dos pacientes sente uma leve sensação de pressão ou formigueiro (a chamada \"sensação de De Qi\"), que costuma ser confortável. Dor intensa não é esperada.",
  },
  {
    id: 4,
    question: "Preciso de preparação especial?",
    answer:
      "Não é necessário qualquer preparo especial. Aconselho apenas chegar bem hidratado(a), não em jejum prolongado, e usar roupa confortável que permita acesso fácil a braços e pernas.",
  },
  {
    id: 5,
    question: "As consultas têm comparticipação?",
    answer:
      "Algumas seguradoras e planos de saúde incluem Medicina Tradicional Chinesa. Emito sempre recibo e declaração de tratamentos para que possa submeter o pedido de reembolso junto da sua entidade.",
  },
];

// ─── Process steps ───────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Marcação",
    description:
      "Contacte via telefone, email ou pelo formulário. Escolhemos juntos o dia e hora mais convenientes.",
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

const pricing = [
  {
    id: 1,
    label: "Primeira Consulta",
    duration: "75 min",
    price: "€ 75",
    note: "Inclui anamnese + tratamento",
    highlight: false,
  },
  {
    id: 2,
    label: "Consulta de Seguimento",
    duration: "50 min",
    price: "€ 55",
    note: "Avaliação e tratamento",
    highlight: true,
  },
  {
    id: 3,
    label: "Pacote 5 Sessões",
    duration: "5 × 50 min",
    price: "€ 245",
    note: "Poupança de € 30",
    highlight: false,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConsultasPage() {
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
              href="/#contact"
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

          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl p-8 transition hover:shadow-2xl ${
                  item.highlight
                    ? "bg-[#2D352C] ring-1 ring-[#E6CFB8]/30"
                    : "bg-[#4B544A]/60"
                }`}
              >
                {item.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-[#E6CFB8]/20 px-3 py-1 text-xs uppercase tracking-widest text-[#E6CFB8]">
                    Mais popular
                  </span>
                )}
                <h3 className="mb-1 font-serif text-xl text-[#E6E1D2]">
                  {item.label}
                </h3>
                <p className="mb-6 text-sm text-[#B5BFAB]">{item.duration}</p>
                <p className="mb-2 font-serif text-4xl text-[#E6CFB8]">
                  {item.price}
                </p>
                <p className="text-xs text-[#959D8D]">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-[#B5BFAB]/70">
            * Os valores indicados são a título indicativo. Contacte para
            confirmação e disponibilidade.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#C7CFC0] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6C7463]">
                FAQ
              </p>
              <h2 className="font-serif text-4xl text-[#2D352C] md:text-5xl">
                Perguntas
                <br />
                <em className="font-normal italic text-[#4B544A]">
                  frequentes
                </em>
              </h2>
            </div>

            <div className="divide-y divide-[#4B544A]/20">
              {faqs.map((faq) => (
                <details key={faq.id} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-serif text-lg text-[#2D352C]">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#4B544A]/40 text-[#4B544A] transition group-open:rotate-45">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      >
                        <line x1="7" y1="1" x2="7" y2="13" />
                        <line x1="1" y1="7" x2="13" y2="7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-[#4B544A]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
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
              href="/#contact"
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
