import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#C7CFC0] px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#6C7463]">
          Vamos começar
        </p>
        <h2 className="mb-8 font-serif text-4xl leading-tight text-[#2D352C] md:text-6xl">
          O primeiro passo é <em className="italic">ouvir-se</em>.
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-[#4B544A]">
          Marque uma primeira avaliação para conversarmos sobre o que procura
          e desenharmos o plano certo para si.
        </p>
        <Link
          href="mailto:catarina@example.com"
          className="inline-block rounded-full bg-[#2D352C] px-10 py-5 text-lg text-[#E6E1D2] transition hover:bg-[#4B544A]"
        >
          Marcar Consulta
        </Link>
      </div>
    </section>
  );
};

export default Contact;
