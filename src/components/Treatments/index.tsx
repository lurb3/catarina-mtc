import SectionTitle from "../Common/SectionTitle";
import SingleTreatment from "./SingleTreatment";
import treatmentsData from "./treatmentsData";

const Treatments = () => {
  return (
    <section id="treatments" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Tratamentos"
          paragraph="Cada consulta é única. Avaliamos a sua história clínica segundo a Medicina Tradicional Chinesa e desenhamos um plano terapêutico ajustado ao seu corpo, à sua mente e ao seu ritmo de vida."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {treatmentsData.map((treatment) => (
            <SingleTreatment key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
