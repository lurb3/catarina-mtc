import Image from "next/image";
import Link from "next/link";

const AboutSectionTwo = () => {
  return (
    <section
      id="about"
      className="bg-[#2D352C] px-6 py-28 text-[#E6E1D2] md:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
            Sobre Mim
          </p>
          <h2 className="mb-8 font-serif text-4xl leading-tight md:text-5xl">
            Mais do que sintomas, <em className="italic">a pessoa</em> por trás
            deles.
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-[#B5BFAB]">
            Há mais de [X] anos que acompanho pessoas no caminho da saúde
            integrativa. A minha abordagem combina o diagnóstico tradicional
            da MTC com escuta atenta — porque cada corpo conta uma história
            diferente.
          </p>
          <ul className="mb-10 space-y-3 text-[#E6E1D2]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E6CFB8]" />
              Diagnóstico personalizado por padrões energéticos
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E6CFB8]" />
              Plano de tratamento adaptado ao seu ritmo
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E6CFB8]" />
              Acompanhamento contínuo e humano
            </li>
          </ul>
          <Link
            href="#contact"
            className="inline-block rounded-full bg-[#E6CFB8] px-8 py-4 text-[#2D352C] transition hover:bg-[#E6E1D2]"
          >
            Conhecer Catarina
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
