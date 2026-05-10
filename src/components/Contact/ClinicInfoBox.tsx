const InfoRow = ({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) => (
  <div className="mb-6 flex items-start">
    <div className="bg-primary/10 text-primary mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-md">
      {icon}
    </div>
    <div>
      <h4 className="text-dark mb-1 text-base font-semibold dark:text-white">
        {title}
      </h4>
      <div className="text-body-color text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

const PinIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const PhoneIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const MailIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const ClockIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const ClinicInfoBox = () => {
  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
        Informações do Consultório
      </h3>
      <p className="border-body-color/25 text-body-color mb-8 border-b pb-8 text-base leading-relaxed dark:border-white/25">
        Estamos disponíveis para esclarecer qualquer dúvida e ajudá-lo a marcar
        a sua primeira consulta.
      </p>

      <InfoRow title="Morada" icon={PinIcon}>
        [Rua Exemplo, nº 123]
        <br />
        [Código Postal] [Cidade]
      </InfoRow>

      <InfoRow title="Telefone" icon={PhoneIcon}>
        <a href="tel:+351000000000" className="hover:text-primary">
          +351 000 000 000
        </a>
      </InfoRow>

      <InfoRow title="Email" icon={MailIcon}>
        <a href="mailto:contacto@exemplo.pt" className="hover:text-primary">
          contacto@exemplo.pt
        </a>
      </InfoRow>

      <InfoRow title="Horário" icon={ClockIcon}>
        Segunda a Sexta · 09h00 – 19h00
        <br />
        Sábado · 09h00 – 13h00 (mediante marcação)
      </InfoRow>
    </div>
  );
};

export default ClinicInfoBox;
