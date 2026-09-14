import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil Clínico | Catarina Abreu — Medicina Tradicional Chinesa",
  description:
    "Conheça Catarina Abreu, especialista em Medicina Tradicional Chinesa e Fitoterapia com cédula profissional reconhecida pela ACSS.",
};

// ─── Purpose / Values / Vision ───────────────────────────────────────────────

const pillars = [
  {
    id: 1,
    label: "Propósito",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
    ),
    text: "Acompanhar cada pessoa com atenção genuína, unindo o rigor científico à sensibilidade humana, para que cada tratamento seja verdadeiramente personalizado e transformador.",
  },
  {
    id: 2,
    label: "Valores",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Integridade, escuta activa, rigor, empatia e respeito pela singularidade de cada indivíduo. Acredito que a disciplina e a paixão são a base de qualquer cuidado de excelência.",
  },
  {
    id: 3,
    label: "Visão",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    text: "Ser uma referência na integração da Medicina Tradicional Chinesa com a investigação científica, contribuindo para um sistema de saúde mais holístico, acessível e humano.",
  },
];

// ─── Timeline milestones ──────────────────────────────────────────────────────

const milestones = [
  {
    year: "18 anos",
    title: "O início de uma jornada",
    description:
      "Primeiros desafios de saúde que despertaram uma profunda curiosidade sobre o corpo humano, a mente e as terapias integrativas.",
  },
  {
    year: "2022",
    title: "Contabilista Certificada",
    description:
      "Obtenção da cédula profissional de Contabilista Certificada — um percurso exigente que forjou resiliência, rigor e disciplina.",
  },
  {
    year: "2023",
    title: "Pós-Graduação em MTC",
    description:
      "Ingresso na Pós-Graduação da Atlântico Business School (3.ª turma), iniciando a formação especializada em Medicina Tradicional Chinesa e Fitoterapia.",
  },
  {
    year: "Hoje",
    title: "Especialista & Investigadora",
    description:
      "Especialista em MTC com cédula reconhecida pela ACSS, autora principal em dois de três artigos científicos publicados durante o percurso académico.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PerfilClinicoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#C7CFC0] px-6 pt-36 pb-24 text-[#2D352C] md:px-12 lg:pt-44">
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#B5BFAB]/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#E6CFB8]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Text */}
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#6C7463]">
                Perfil Clínico
              </p>
              <h1 className="mb-6 font-serif text-5xl leading-[1.05] text-[#2D352C] md:text-6xl lg:text-7xl">
                Olá, sou a{" "}
                <em className="font-normal italic text-[#4B544A]">Catarina</em>
              </h1>
              <p className="mb-4 text-base leading-relaxed text-[#4B544A]">
                Tenho 28 anos e sou especialista em{" "}
                <strong className="font-medium text-[#2D352C]">
                  Medicina Tradicional Chinesa
                </strong>{" "}
                e{" "}
                <strong className="font-medium text-[#2D352C]">
                  Fitoterapia
                </strong>
                , com cédula profissional reconhecida pela ACSS.
              </p>
              <p className="mb-8 text-base leading-relaxed text-[#4B544A]">
                O meu percurso não foi linear — e é exactamente isso que me
                torna diferente. A disciplina da contabilidade, a paixão pela
                investigação e a experiência pessoal com a saúde convergem numa
                prática clínica singular.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="rounded-full bg-[#2D352C] px-8 py-4 text-base text-[#E6E1D2] transition hover:bg-[#4B544A]"
                >
                  Marcar Consulta
                </Link>
                <a
                  href="#historia"
                  className="rounded-full border border-[#2D352C]/40 px-8 py-4 text-base text-[#2D352C] transition hover:border-[#2D352C]"
                >
                  A minha história
                </a>
              </div>
            </div>

            {/* Credential card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-3xl bg-[#2D352C] p-8 text-[#E6E1D2]">
                <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#E6CFB8]">
                  Credenciais
                </p>
                <ul className="space-y-5">
                  {[
                    {
                      label: "Especialidade",
                      value: "Medicina Tradicional Chinesa & Fitoterapia",
                    },
                    { label: "Cédula", value: "Reconhecida pela ACSS" },
                    {
                      label: "Formação",
                      value: "Pós-Graduação — Atlântico Business School",
                    },
                    {
                      label: "Investigação",
                      value: "3 artigos científicos (autora principal em 2)",
                    },
                    {
                      label: "Formação anterior",
                      value: "Contabilista Certificada (2022)",
                    },
                  ].map((item) => (
                    <li key={item.label} className="border-b border-[#4B544A]/40 pb-5 last:border-0 last:pb-0">
                      <p className="mb-1 text-xs text-[#959D8D]">
                        {item.label}
                      </p>
                      <p className="text-sm text-[#E6E1D2]">{item.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section id="historia" className="bg-[#2D352C] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            {/* Main narrative */}
            <div className="space-y-12">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
                  A minha história
                </p>
                <h2 className="mb-8 font-serif text-4xl text-[#E6E1D2] md:text-5xl">
                  Um percurso{" "}
                  <em className="font-normal italic">inesperado</em>
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-[#B5BFAB]">
                  <p>
                    O meu percurso académico e profissional nem sempre passou
                    pela área da saúde, mas a vida encarregou-se de mudar o meu
                    rumo. No 10.º ano, decidi seguir o ramo das Ciências
                    Socioeconómicas com o objectivo de ser Contabilista — uma
                    meta que, com muito esforço, acabei por alcançar.
                  </p>
                  <p>
                    Ao longo do caminho, cruzei-me com docentes incríveis que
                    me provaram que podemos ser aquilo que quisermos. Aprendi a
                    ler e a interpretar desde romances e poesia até legislação
                    complexa. Percebi que, com foco, paixão e disciplina, somos
                    capazes de aprender tudo a que nos propomos.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-serif text-2xl text-[#E6CFB8]">
                  A Grande Mudança: dos números à saúde integral
                </h3>
                <div className="space-y-5 text-base leading-relaxed text-[#B5BFAB]">
                  <p>
                    A questão que muitos colocam é:{" "}
                    <em className="text-[#E6E1D2]">
                      como é que uma contabilista decide mudar radicalmente para
                      a Medicina Tradicional Chinesa?
                    </em>
                  </p>
                  <p>
                    A resposta reside na minha própria história. Desde os meus
                    18 anos que enfrentei vários desafios e complicações de
                    saúde. Essa vulnerabilidade despertou em mim uma enorme sede
                    de conhecimento, levando-me a ler e a fazer formações na
                    área do Desenvolvimento Pessoal.
                  </p>
                  <p>
                    Em 2023, a minha irmã convenceu-me a ingressar na
                    Pós-Graduação da Atlântico Business School (3.ª turma). Ela
                    acreditava que este seria o meu caminho — e a verdade é que
                    ela não se enganou.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-serif text-2xl text-[#E6CFB8]">
                  Investigação e rigor científico
                </h3>
                <div className="space-y-5 text-base leading-relaxed text-[#B5BFAB]">
                  <p>
                    Esta jornada académica transformou-me. Permitiu-me crescer
                    imenso, descobrir o meu verdadeiro propósito e cruzar-me com
                    pessoas extraordinárias.
                  </p>
                  <p>
                    Mais do que aprender a cuidar, apaixonei-me pela vertente
                    académica: durante este percurso, consegui escrever{" "}
                    <strong className="text-[#E6E1D2]">
                      três artigos científicos, sendo autora principal em dois
                      deles
                    </strong>
                    . Revelou-se uma nova paixão que pretendo continuar a
                    explorar através da investigação na área da saúde.
                  </p>
                  <p>
                    O rigor e a lógica que herdei da contabilidade fundem-se
                    perfeitamente com a sensibilidade que a Medicina Tradicional
                    Chinesa exige. Esta reviravolta ensinou-me que{" "}
                    <strong className="text-[#E6E1D2]">
                      nunca é tarde para mudar
                    </strong>{" "}
                    e que, com a disciplina certa, somos capazes de alcançar
                    tudo aquilo a que nos propomos.
                  </p>
                </div>
              </div>
            </div>

            {/* Pull quote */}
            <div className="flex items-start lg:pt-24">
              <blockquote className="sticky top-28 rounded-2xl border border-[#4B544A] p-8">
                <p className="mb-6 font-serif text-xl leading-relaxed text-[#E6CFB8]">
                  "Nunca é tarde para mudar — com disciplina e paixão, somos
                  capazes de alcançar tudo aquilo a que nos propomos."
                </p>
                <footer className="text-sm text-[#6C7463]">— Catarina Abreu</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[#6C7463] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
            Percurso
          </p>
          <h2 className="mb-16 font-serif text-4xl text-[#E6E1D2] md:text-5xl">
            Marcos que me definem
          </h2>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[11px] top-0 h-full w-px bg-[#4B544A] md:left-1/2" />

            <div className="space-y-12">
              {milestones.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex gap-8 md:w-1/2 ${
                    i % 2 === 0 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  {/* dot */}
                  <div
                    className={`absolute top-1 h-6 w-6 shrink-0 rounded-full border-2 border-[#E6CFB8] bg-[#6C7463] ${
                      i % 2 === 0
                        ? "left-0 md:-left-3"
                        : "left-0 md:left-auto md:-right-3"
                    }`}
                  />

                  <div className={`pl-10 md:pl-0 ${i % 2 !== 0 ? "md:pr-0" : ""}`}>
                    <p className="mb-1 text-sm uppercase tracking-widest text-[#E6CFB8]">
                      {item.year}
                    </p>
                    <h3 className="mb-2 font-serif text-xl text-[#E6E1D2]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#B5BFAB]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Purpose / Values / Vision ── */}
      <section className="bg-[#C7CFC0] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6C7463]">
            Fundamentos
          </p>
          <h2 className="mb-16 max-w-xl font-serif text-4xl text-[#2D352C] md:text-5xl">
            O que guia a minha{" "}
            <em className="font-normal italic text-[#4B544A]">prática</em>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl bg-[#2D352C] p-8 transition hover:bg-[#1F2620] hover:shadow-2xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6CFB8]/10 text-[#E6CFB8]">
                  {pillar.icon}
                </div>
                <h3 className="mb-4 font-serif text-2xl text-[#E6CFB8]">
                  {pillar.label}
                </h3>
                <p className="text-sm leading-relaxed text-[#B5BFAB]">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1F2620] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-[#2D352C] px-8 py-16 text-center md:px-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
              Próximo passo
            </p>
            <h2 className="mb-6 font-serif text-4xl text-[#E6E1D2] md:text-5xl">
              Estou aqui para o(a) ajudar
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-[#B5BFAB]">
              Encontrar o equilíbrio começa por uma conversa. Marque a sua
              primeira consulta e dê o primeiro passo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-block rounded-full bg-[#E6CFB8] px-10 py-4 text-base text-[#2D352C] transition hover:bg-[#E6E1D2]"
              >
                Marcar Consulta
              </Link>
              <Link
                href="/consultas"
                className="inline-block rounded-full border border-[#4B544A] px-10 py-4 text-base text-[#B5BFAB] transition hover:border-[#E6CFB8] hover:text-[#E6CFB8]"
              >
                Ver Consultas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
