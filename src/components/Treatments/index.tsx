import Link from "next/link";
import SingleTreatment from "./SingleTreatment";
import treatmentsData from "./treatmentsData";

const Treatments = () => {
  return (
    <section
      id="treatments"
      className="bg-[#6C7463] px-6 py-28 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
              Tratamentos
            </p>
            <h2 className="max-w-2xl font-serif text-4xl text-[#E6E1D2] md:text-5xl">
              Cuidado <em className="italic">personalizado</em> para cada pessoa
            </h2>
          </div>
          <Link
            href="#contact"
            className="text-sm uppercase tracking-widest text-[#E6CFB8] underline-offset-4 hover:underline"
          >
            Marcar avaliação →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {treatmentsData.map((treatment) => (
            <SingleTreatment key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
