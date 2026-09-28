"use client";
import { resetConsent } from "@/components/CookieConsent/consent";
import { OPENING_HOURS } from "@/config/business";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="bg-[#1F2620] px-6 pt-20 pb-10 text-[#B5BFAB] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-6 inline-block font-serif text-2xl text-[#E6E1D2]"
            >
              Catarina Abreu - Especialista em Medicina Tradicional Chinesa
            </Link>
            <p className="mb-8 text-sm leading-relaxed text-[#959D8D]">
              Espaço de Saúde e Bem-Estar | Medicina Tradicional Chinesa <br />
              Acupuntura • Fitoterapia • Terapias Complementares
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://www.instagram.com/catarinaabreumtc" label="Instagram">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialLink>
              <SocialLink href="mailto:catarinaabreumtc@gmail.com" label="Email">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-[#E6CFB8]">
              Contactos
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+do+Repel%C3%A3o+370%2C+4510-649+F%C3%A2nzeres"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B5BFAB] transition hover:text-[#E6CFB8]"
                >
                  R. do Repelão 370, Loja 15
                  <br />
                  4510-649 Fânzeres, Gondomar
                </a>
              </li>
              <li>{OPENING_HOURS.label}</li>
              <li>
                <a
                  href="tel:+351918844601"
                  className="text-[#B5BFAB] transition hover:text-[#E6CFB8]"
                >
                  (+351) 918 844 601
                </a>
                <br />
                (Chamada para a rede móvel nacional)
              </li>
              <li>
                <a
                  href="mailto:catarinaabreumtc@gmail.com"
                  className="text-[#B5BFAB] transition hover:text-[#E6CFB8]"
                >
                  catarinaabreumtc@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Licenças e Cédulas */}
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-[#E6CFB8]">
              Licenças e Cédulas
            </h3>
            <ul className="space-y-3 text-sm">
            <p className="text-sm leading-relaxed text-[#959D8D]">Especialista de Medicina Tradicional Chinesa - C0062366</p>
            <p className="text-sm leading-relaxed text-[#959D8D]">Especialista de Fitoterapia - C0040836</p>
            <p className="text-sm leading-relaxed text-[#959D8D]">Licença ERS - E182343</p>
            </ul>
          </div>

          {/* ERS */}
          <div className="lg:flex lg:items-start lg:justify-end">
            <div className="flex w-[216px] flex-col items-center rounded-xl bg-[#E6E1D2] p-2 pb-4">
              <a
                href="https://www.ers.pt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entidade Reguladora da Saúde"
                className="transition hover:opacity-90 mb-5"
              >
                <Image
                  src="/images/entidade_reguladora_saude.png"
                  alt="Entidade Reguladora da Saúde (ERS)"
                  width={200}
                  height={106}
                />
              </a>
              <Image
                src="/images/ers_informacoes.png"
                alt="Código QR com informações da Entidade Reguladora da Saúde"
                width={140}
                height={138}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-[#4B544A]/40" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-[#6C7463] md:flex-row">
          <p>
            © {new Date().getFullYear()} Catarina Abreu — Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="transition hover:text-[#E6CFB8]">
              Privacidade
            </Link>
            <Link href="/cookies" className="transition hover:text-[#E6CFB8]">
              Cookies
            </Link>
            <button
              type="button"
              onClick={resetConsent}
              className="cursor-pointer transition hover:text-[#E6CFB8]"
            >
              Preferências de cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-[#B5BFAB] transition hover:text-[#E6CFB8]"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4B544A] text-[#B5BFAB] transition hover:border-[#E6CFB8] hover:text-[#E6CFB8]"
  >
    {children}
  </a>
);

export default Footer;
