import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden px-6 py-32 text-[#E6E1D2] md:px-12"
    >
      <Image
        src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1F2620]/90" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
          Filosofia
        </p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
          A natureza já conhece a resposta.
          <br />
          <em className="italic text-[#E6CFB8]">
            O equilíbrio começa por dentro.
          </em>
        </h2>
      </div>
    </section>
  );
};

export default AboutSectionOne;
