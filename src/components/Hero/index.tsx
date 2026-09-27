import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#C7CFC0] px-6 pt-32 pb-32 text-[#2D352C] md:px-12 lg:pt-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#6C7463]">
              Medicina Tradicional Chinesa
            </p>
            <h1 className="mb-6 font-serif text-5xl leading-[1.05] text-[#2D352C] md:text-6xl lg:text-7xl">
              Restaurar o<br />
              <em className="font-normal italic text-[#4B544A]">equilíbrio</em>{" "}
              do<br />
              corpo &amp; da mente
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/marcar-consulta"
                className="rounded-full bg-[#2D352C] px-8 py-4 text-base text-[#E6E1D2] transition hover:bg-[#4B544A]"
              >
                Marcar Consulta
              </Link>
              <Link
                href="#tratamentos"
                className="rounded-full border border-[#2D352C]/40 px-8 py-4 text-base text-[#2D352C] transition hover:border-[#2D352C]"
              >
                Ver Tratamentos
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -left-6 top-12 hidden h-16 w-16 rounded-2xl bg-[#6C7463] md:block" />
            <div className="absolute -right-4 top-24 hidden h-14 w-14 rounded-2xl bg-[#4B544A]/60 md:block" />
            <div className="absolute -bottom-6 left-12 hidden h-12 w-12 rounded-2xl bg-[#E6CFB8]/70 md:block" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[200px] rounded-b-3xl">
              <Image
                src="https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1200&q=80"
                alt="Catarina Abreu - Terapeuta de MTC"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* floating intro card */}
            <Link
              href="/perfil-clinico"
              className="absolute -bottom-8 left-4 right-4 flex gap-4 rounded-2xl bg-[#2D352C] p-5 text-[#E6E1D2] shadow-xl transition hover:bg-[#1F2620] hover:shadow-2xl md:left-auto md:right-[-40px] md:max-w-sm"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/images/catarina-abreu-especialista-mtc.jpg"
                  alt="Catarina Abreu, especialista em Medicina Tradicional Chinesa"
                  fill
                  sizes="64px"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div>
                <h3 className="mb-1 font-serif text-base text-[#E6CFB8]">
                  Sou a Catarina, Especialista de MTC
                </h3>
                <p className="text-xs leading-relaxed text-[#B5BFAB]">
                  Tratamentos personalizados que combinam tradição milenar com
                  escuta atenta de cada pessoa.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
