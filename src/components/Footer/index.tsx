"use client";
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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 lg:max-w-sm">
            <Link
              href="/"
              className="mb-6 inline-block font-serif text-2xl text-[#E6E1D2]"
            >
              Catarina Abreu
            </Link>
            <p className="mb-8 text-sm leading-relaxed text-[#959D8D]">
              Consultório de Medicina Tradicional Chinesa
              Acupunctura, fitoterapia e terapias holísticas para o seu
              bem-estar
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://instagram.com" label="Instagram">
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
              <SocialLink href="https://facebook.com" label="Facebook">
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialLink>
              <SocialLink href="mailto:contacto@exemplo.pt" label="Email">
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

          {/* Navegação */}
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-[#E6CFB8]">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/#about">Sobre</FooterLink>
              <FooterLink href="/#treatments">Tratamentos</FooterLink>
              <FooterLink href="/#philosophy">Filosofia</FooterLink>
              <FooterLink href="/#contact">Contacto</FooterLink>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-[#E6CFB8]">
              Contactos
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+351000000000"
                  className="text-[#B5BFAB] transition hover:text-[#E6CFB8]"
                >
                  +351 000 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@exemplo.pt"
                  className="text-[#B5BFAB] transition hover:text-[#E6CFB8]"
                >
                  contacto@exemplo.pt
                </a>
              </li>
              <li className="text-[#959D8D]">Rua Exemplo</li>
            </ul>
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
            <Link href="/" className="transition hover:text-[#E6CFB8]">
              Privacidade
            </Link>
            <Link href="/" className="transition hover:text-[#E6CFB8]">
              Cookies
            </Link>
            <Link href="/" className="transition hover:text-[#E6CFB8]">
              Termos
            </Link>
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
