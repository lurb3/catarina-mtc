import { OPENING_HOURS } from "@/config/business";

const locations: {
  id: number;
  name: string;
  street: string;
  city: string;
  hours?: string;
  mapsUrl: string;
}[] = [
  {
    id: 1,
    name: "Blume - Centro Terapêutico",
    street: "Rua do Repelão 370, Loja 15",
    city: "4510-649 Fânzeres, Gondomar",
    hours: OPENING_HOURS.label,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+do+Repel%C3%A3o+370%2C+4510-649+F%C3%A2nzeres",
  },
  {
    id: 2,
    name: "FisioSouto",
    street: "Rua Fontanário 395",
    city: "4520-716 Santa Maria da Feira",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=FisioSouto%2C+Rua+Fontan%C3%A1rio+395%2C+4520-716",
  },
];

const PinIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Locations = () => {
  return (
    <section id="locations" className="bg-[#6C7463] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E6CFB8]">
          Onde me encontrar
        </p>
        <h2 className="mb-16 max-w-2xl font-serif text-4xl text-[#E6E1D2] md:text-5xl">
          Consultas em <em className="italic">Gondomar</em> e{" "}
          <em className="italic">Santa Maria da Feira</em>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <div
              key={location.id}
              className="flex flex-col rounded-2xl bg-[#2D352C] p-8 transition hover:shadow-2xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6CFB8]/10 text-[#E6CFB8]">
                {PinIcon}
              </div>
              <h3 className="mb-3 font-serif text-2xl text-[#E6CFB8]">
                {location.name}
              </h3>
              <address className="mb-4 text-base not-italic leading-relaxed text-[#B5BFAB]">
                {location.street}
                <br />
                {location.city}
              </address>
              {location.hours && (
                <p className="mb-8 text-sm text-[#E6E1D2]">{location.hours}</p>
              )}
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm uppercase tracking-widest text-[#E6CFB8] underline-offset-4 hover:underline"
              >
                Ver no mapa →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
