import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Respostas às perguntas mais comuns sobre consultas de Medicina Tradicional Chinesa e acupunctura com Catarina Abreu: primeira consulta, número de sessões, agulhas e comparticipação.",
  alternates: { canonical: "/faq" },
};

// ─── FAQ data ────────────────────────────────────────────────────────────────

const faqs = [
  {
    id: 1,
    question: "Como é a primeira consulta?",
    answer:
      "A primeira consulta pode durar até 2 horas. Inclui uma anamnese detalhada — histórico de saúde, queixas, estilo de vida, observação da língua e palpação do pulso — seguida do primeiro tratamento. O objectivo é compreender o seu padrão de desequilíbrio de forma holística.",
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
    id: 6,
    question: "Como faço a marcação e o pagamento?",
    answer:
      "Pode escolher o horário online, na página Marcar Consulta, ou marcar por WhatsApp ou telemóvel. O horário fica pré-reservado durante 4 horas e a consulta é confirmada após o envio do comprovativo de pagamento de 50% do valor da sessão. Cancelamentos ou remarcações devem ser comunicados com pelo menos 24 horas de antecedência.",
  },
  {
    id: 5,
    question: "As consultas têm comparticipação?",
    answer:
      "Algumas seguradoras e planos de saúde incluem Medicina Tradicional Chinesa. Emito sempre recibo e declaração de tratamentos para que possa submeter o pedido de reembolso junto da sua entidade.",
  },
];

// FAQPage structured data — helps search engines and AI assistants extract the Q&A
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── FAQ ── */}
      <section className="relative overflow-hidden bg-[#C7CFC0] px-6 pt-36 pb-28 md:px-12 lg:pt-44">
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#B5BFAB]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6C7463]">
                FAQ
              </p>
              <h1 className="mb-6 font-serif text-5xl leading-[1.05] text-[#2D352C] md:text-6xl">
                Perguntas
                <br />
                <em className="font-normal italic text-[#4B544A]">
                  frequentes
                </em>
              </h1>
              <p className="max-w-sm text-base leading-relaxed text-[#4B544A]">
                Tudo o que precisa de saber antes da sua consulta de Medicina
                Tradicional Chinesa. Não encontra a sua pergunta?{" "}
                <Link
                  href="/#contacto"
                  className="text-[#2D352C] underline underline-offset-4"
                >
                  Fale comigo
                </Link>
                .
              </p>
            </div>

            <div className="divide-y divide-[#4B544A]/20">
              {faqs.map((faq) => (
                <details key={faq.id} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <h2 className="font-serif text-lg text-[#2D352C]">
                      {faq.question}
                    </h2>
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
              Veja como funcionam as consultas e os preços, ou marque já a sua
              primeira consulta.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/marcar-consulta"
                className="inline-block rounded-full bg-[#E6CFB8] px-10 py-4 text-base text-[#2D352C] transition hover:bg-[#E6E1D2]"
              >
                Marcar Consulta
              </Link>
              <Link
                href="/consultas"
                className="inline-block rounded-full border border-[#4B544A] px-10 py-4 text-base text-[#B5BFAB] transition hover:border-[#E6CFB8] hover:text-[#E6CFB8]"
              >
                Consultas e Preços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
