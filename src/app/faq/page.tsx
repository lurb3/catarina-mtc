import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Respostas às perguntas mais comuns sobre Medicina Tradicional Chinesa e acupuntura: segurança, agulhas, primeira consulta, indicações, cuidados após a sessão, marcações e comparticipação.",
  alternates: { canonical: "/faq" },
};

// ─── FAQ data ────────────────────────────────────────────────────────────────

type Faq = { question: string; answer: string };

const faqGroups: { title: string; faqs: Faq[] }[] = [
  {
    title: "Sobre a Medicina Tradicional Chinesa",
    faqs: [
      {
        question: "O que é a Medicina Tradicional Chinesa (MTC)?",
        answer:
          "A MTC é um sistema de saúde com milhares de anos que inclui disciplinas como a Acupuntura, Fitoterapia Chinesa, Tui Na (massagem), Dietoterapia e Qi Gong. Baseia-se na avaliação e no reequilíbrio do fluxo de energia (Qi) e sangue no organismo para promover a saúde, prevenir desequilíbrios e restaurar a vitalidade geral.",
      },
      {
        question: "A MTC tem base científica?",
        answer:
          "Sim. Existe um número crescente de estudos clínicos e publicações científicas que fundamentam os mecanismos de ação e o valor terapêutico da Acupuntura e de outras técnicas da MTC em diversas áreas da saúde. A Organização Mundial da Saúde (OMS) reconhece a MTC e tem vindo a publicar diretrizes e estratégias globais para a sua integração segura.",
      },
      {
        question: "A MTC substitui a medicina convencional?",
        answer:
          "Não. A MTC atua de forma estritamente complementar à medicina convencional, nunca como sua substituta. Recomendamos que mantenha sempre o seu acompanhamento médico regular e informe todos os profissionais de saúde envolvidos sobre os cuidados que está a receber.",
      },
      {
        question: "A MTC é regulamentada em Portugal?",
        answer:
          "Sim. O exercício da Acupuntura e da Medicina Tradicional Chinesa em Portugal é regulado pela Lei n.º 71/2013 e legislação complementar, exigindo formação superior reconhecida e a obtenção de Cédula Profissional emitida pela ACSS (Administração Central do Sistema de Saúde).",
      },
      {
        question:
          "Onde posso confirmar se o especialista possui Cédula Profissional válida?",
        answer:
          "Pode verificar o registo de qualquer profissional no portal oficial da ACSS. Os meus números de Cédula Profissional são o C0062366 (Medicina Tradicional Chinesa) e o C0040836 (Fitoterapia), emitidos pela ACSS, o que atesta a habilitação legal para o exercício da atividade e a existência do seguro de responsabilidade civil obrigatório.",
      },
      {
        question: "O que acontece se o meu caso não tiver indicação para a MTC?",
        answer:
          "O rigor e a ética clínica são prioritários. Se, durante a avaliação inicial, for identificado que a MTC não é a abordagem mais adequada ou segura para a sua situação, ser-lhe-á dada a devida explicação e feito o encaminhamento para a medicina convencional ou para a especialidade médica indicada.",
      },
    ],
  },
  {
    title: "Acupuntura e segurança",
    faqs: [
      {
        question: "A acupuntura dói?",
        answer:
          "As agulhas de acupuntura são extremamente finas — a sua espessura varia habitualmente entre 0,16 mm e 0,30 mm (cerca de 10 a 20 vezes mais finas do que uma agulha de injeção convencional). A maioria dos utentes sente apenas uma leve sensação de pressão, formigueiro ou calor no local de inserção. O procedimento é geralmente muito relaxante.",
      },
      {
        question: "As agulhas são reutilizadas?",
        answer:
          "Não. São utilizadas exclusivamente agulhas filiformes, estéreis e descartáveis (de utilização única), abertas na sua presença e depositadas num recipiente próprio para resíduos clínicos após a utilização. A segurança e a higiene do utente são prioridades absolutas.",
      },
      {
        question:
          'O que é aquela sensação de "choque", peso ou calor na agulha?',
        answer:
          "Essa reação é conhecida na MTC como a sensação de De Qi (a chegada da energia). É um sinal clínico normal que indica que o ponto de acupuntura foi devidamente localizado e estimulado. Pode manifestar-se como uma sensação temporária de peso, formigueiro ou expansão, dissipando-se em poucos segundos.",
      },
      {
        question: "Tenho receio de agulhas. Ainda assim posso beneficiar da MTC?",
        answer:
          "Sim, perfeitamente. A Medicina Tradicional Chinesa integra outras abordagens que não utilizam agulhas, tais como a Tui Na (massagem terapêutica), a Ventosaterapia, a Moxabustão, a Auriculoterapia com sementes e a Acupressão. Na consulta inicial, definimos em conjunto a abordagem mais confortável para si.",
      },
      {
        question: "Existe alguma contraindicação absoluta para a acupuntura?",
        answer:
          "As contraindicações absolutas são raras. Contudo, técnicas como a eletroacupuntura (estímulo elétrico) são contraindicadas em utentes com pacemakers. Utentes com perturbações graves da coagulação ou a tomar medicação anticoagulante devem informar o especialista para que o tratamento seja adaptado com total segurança.",
      },
      {
        question: "A acupuntura é segura durante a gravidez?",
        answer:
          "Sim, quando realizada por um profissional qualificado. Pode ser um excelente apoio na gestão de náuseas, lombalgias e na promoção do relaxamento durante a gestação. No entanto, existem pontos de acupuntura estritamente contraindicados em determinadas fases da gravidez, devendo o estado gestacional ser comunicado logo no início do atendimento.",
      },
      {
        question: "Posso doar sangue se fizer tratamento com acupuntura?",
        answer:
          "Em Portugal, o Instituto Português do Sangue e da Transplantação (IPST) permite a dádiva de sangue a quem realiza acupuntura, desde que o tratamento seja efetuado por um profissional legalizado e com material estéril de uso único (o nosso caso). Se pretender doar sangue, solicite a emissão de uma declaração que ateste as condições de biossegurança do tratamento.",
      },
    ],
  },
  {
    title: "Indicações",
    faqs: [
      {
        question:
          "Em que áreas ou condições a MTC pode constituir um apoio complementar?",
        answer:
          "A MTC pode atuar como suporte no alívio de desconfortos musculoesqueléticos (dores nas costas, cervical, articulações), na gestão da ansiedade, insónia e enxaquecas, no apoio ao bem-estar digestivo, na regulação do ciclo menstrual e no acompanhamento da fadiga e vitalidade geral.",
      },
      {
        question: "A MTC ajuda no processo de gestão de peso?",
        answer:
          "Sim, como ferramenta complementar a um estilo de vida saudável. A MTC não substitui um plano alimentar adequado nem o exercício físico, mas atua nos fatores associados ao ganho de peso: auxilia na gestão da ansiedade e do apetite emocional, apoia a função digestiva e favorece o equilíbrio metabólico global.",
      },
      {
        question: "A MTC pode apoiar a fertilidade masculina e feminina?",
        answer:
          "Sim. A MTC é frequentemente procurada como apoio no acompanhamento da fertilidade natural e como suporte complementar aos tratamentos de Procriação Medicamente Assistida (FIV/IUI). Auxilia na promoção do equilíbrio hormonal, no suporte à circulação sanguínea pélvica e na redução do stress e ansiedade associados ao processo.",
      },
    ],
  },
  {
    title: "A consulta",
    faqs: [
      {
        question: "Como é estruturada a primeira consulta?",
        answer:
          "A primeira consulta tem uma duração habitual de 90 a 120 minutos. Inclui uma avaliação energética detalhada (anamnese) — onde analisamos o histórico de saúde, hábitos de vida, alimentação e padrão de sono, juntamente com a observação da língua e a palpação do pulso — seguida da aplicação do tratamento inicial.",
      },
      {
        question: "O que devo fazer antes de vir à consulta?",
        answer:
          "Recomenda-se fazer uma refeição leve antes da sessão (evitando vir em jejum prolongado), vestir roupa confortável e folgada e evitar o consumo de bebidas alcoólicas nas 24 horas anteriores. Se possuir exames de diagnóstico ou relatórios médicos recentes, poderá trazê-los para contextualização.",
      },
      {
        question: "Tenho de me despir para a sessão?",
        answer:
          "Geralmente não é necessário. A maioria dos pontos de acupuntura mais utilizados situa-se abaixo dos joelhos e cotovelos, bem como no abdómen e costas. Utilizar vestuário largo facilita o acesso. Caso seja necessário aceder à região dorsal, garante-se sempre a total privacidade e conforto com resguardos e toalhas adequadas.",
      },
      {
        question: "Existe a possibilidade de realizar consultas online?",
        answer:
          "Para intervenções que exijam Acupuntura ou Tui Na, a consulta presencial é indispensável. Contudo, é possível realizar consultas de acompanhamento e aconselhamento individualizado em Dietoterapia e Fitoterapia Chinesa através de formato online.",
      },
      {
        question: "Quantas sessões são necessárias?",
        answer:
          "O número e a frequência das sessões dependem das características do utente, da natureza do desequilíbrio e da resposta individual ao tratamento. Na consulta inicial é elaborado um plano de acompanhamento estimativo, sendo o progresso continuamente reavaliado ao longo do processo.",
      },
    ],
  },
  {
    title: "Depois da sessão",
    faqs: [
      {
        question: "O que posso sentir após uma sessão de acupuntura?",
        answer:
          "A maioria dos utentes refere uma sensação profunda de relaxamento e bem-estar. Em alguns casos, é normal sentir um cansaço ligeiro ou uma leve sensação de repouso muscular nas horas seguintes, resultantes da resposta do organismo ao reequilíbrio energético. Recomenda-se hidratar-se e repousar após a sessão.",
      },
      {
        question: "Os sintomas podem ter uma ligeira alteração antes de melhorar?",
        answer:
          "Por vezes, sim. Pode ocorrer uma reatividade temporária do organismo (frequentemente associada ao processo de autorregulação), na qual o desconforto inicial tem uma oscilação ligeira. Esta reação costuma durar entre 24 a 48 horas, sendo habitualmente seguida por uma sensação de alívio e evolução positiva.",
      },
      {
        question: "Podem ficar marcas na pele após o tratamento?",
        answer:
          "Na acupuntura, é pouco frequente, mas podem surgir pequenos hematomas (pisaduras) temporários no ponto de inserção. Na ventosaterapia, é normal e esperado o aparecimento de marcas circulares rosadas, avermelhadas ou arroxeadas. Estas marcas não constituem lesões, não magoam e desaparecem gradualmente entre 3 a 7 dias.",
      },
      {
        question: "Posso fazer exercício físico após a sessão?",
        answer:
          "Recomenda-se evitar treinos de elevada intensidade ou grande impacto nas 2 a 3 horas posteriores à sessão, permitindo ao organismo assimilar os estímulos do tratamento. Atividades moderadas ou relaxantes, como caminhadas suaves, são perfeitamente seguras.",
      },
      {
        question: "Posso tomar banho ou lavar o cabelo após a consulta?",
        answer:
          "Sim, pode tomar banho normalmente. No entanto, caso tenha realizado tratamentos com moxabustão (aplicação de calor) ou quando há uma maior abertura dos poros, recomenda-se evitar banhos de água fria e correntes de ar nas 2 horas seguintes, optando por água morna.",
      },
    ],
  },
  {
    title: "Fitoterapia e Dietoterapia",
    faqs: [
      {
        question:
          "A Fitoterapia Chinesa pode interferir com a minha medicação habitual?",
        answer:
          "Sim, é possível existirem interações. Por esse motivo, é fundamental informar o especialista sobre toda a medicação ou suplementação que esteja a tomar. As recomendações fitoterapêuticas são rigorosamente individualizadas e adaptadas para garantir a máxima segurança.",
      },
      {
        question: "A Dietoterapia Chinesa obriga-me a consumir alimentos orientais?",
        answer:
          "Não. A Dietoterapia Chinesa aplica os princípios energéticos dos alimentos (como as suas propriedades térmicas e nutricionais) aos ingredientes comuns do seu dia a dia, disponíveis nos mercados e supermercados locais. O objetivo é adaptar os métodos de confeção e a escolha dos alimentos à sua constituição individual.",
      },
    ],
  },
  {
    title: "Marcações e pagamentos",
    faqs: [
      {
        question: "Como faço a marcação e o pagamento?",
        answer:
          "Pode escolher o horário online, na página Marcar Consulta, ou marcar por WhatsApp ou telemóvel. O horário fica pré-reservado durante 4 horas e a consulta é confirmada após o envio do comprovativo de pagamento de 50% do valor da sessão. Cancelamentos ou remarcações devem ser comunicados com pelo menos 24 horas de antecedência.",
      },
      {
        question: "As consultas têm comparticipação por seguro de saúde?",
        answer:
          "Diversas seguradoras, subsistemas e planos de saúde em Portugal preveem o reembolso de atos no âmbito das Terapêuticas Não Convencionais. É emitido o respetivo recibo discriminado (com número de Cédula e registo ERS) para que possa submeter o pedido de reembolso junto da sua entidade.",
      },
    ],
  },
];

// FAQPage structured data — helps search engines and AI assistants extract the Q&A
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups
    .flatMap((group) => group.faqs)
    .map((faq) => ({
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
      {/* overflow-x-clip (not hidden) keeps the sticky sidebar working */}
      <section className="relative overflow-x-clip bg-[#C7CFC0] px-6 pt-36 pb-28 md:px-12 lg:pt-44">
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#B5BFAB]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
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
              <p className="mb-8 max-w-sm text-base leading-relaxed text-[#4B544A]">
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

              {/* Section index */}
              <nav aria-label="Temas" className="hidden lg:block">
                <ul className="space-y-2 text-sm">
                  {faqGroups.map((group, i) => (
                    <li key={group.title}>
                      <a
                        href={`#tema-${i + 1}`}
                        className="text-[#4B544A] transition hover:text-[#2D352C]"
                      >
                        {group.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="space-y-14">
              {faqGroups.map((group, i) => (
                <div
                  key={group.title}
                  id={`tema-${i + 1}`}
                  className="scroll-mt-32"
                >
                  <h2 className="mb-2 font-serif text-2xl text-[#2D352C] md:text-3xl">
                    {group.title}
                  </h2>
                  <div className="divide-y divide-[#4B544A]/20">
                    {group.faqs.map((faq) => (
                      <details key={faq.question} className="group py-6">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                          <h3 className="font-serif text-lg text-[#2D352C]">
                            {faq.question}
                          </h3>
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
