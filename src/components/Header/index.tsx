"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-300 md:px-8 ${
        sticky ? "pt-2" : "pt-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-[#2D352C]/95 px-6 py-3 backdrop-blur-md">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg tracking-wide text-[#E6E1D2] md:text-xl"
        >
          Catarina Abreu
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm text-[#B5BFAB] md:flex">
          {menuData.map((item) => (
            <Link
              key={item.id}
              href={item.path || "#"}
              className={`transition hover:text-[#E6CFB8] ${
                pathname === item.path ? "text-[#E6CFB8]" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-[#E6CFB8] px-5 py-2 text-sm text-[#2D352C] transition hover:bg-[#E6E1D2] md:block"
          >
            Marcar Consulta
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Mobile Menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-[#E6E1D2] transition ${
                navbarOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#E6E1D2] transition ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#E6E1D2] transition ${
                navbarOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl bg-[#2D352C]/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          navbarOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {menuData.map((item) => (
            <Link
              key={item.id}
              href={item.path || "#"}
              onClick={() => setNavbarOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm transition hover:bg-[#1F2620] ${
                pathname === item.path
                  ? "text-[#E6CFB8]"
                  : "text-[#B5BFAB]"
              }`}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setNavbarOpen(false)}
            className="mt-2 rounded-full bg-[#E6CFB8] px-5 py-3 text-center text-sm text-[#2D352C] transition hover:bg-[#E6E1D2]"
          >
            Marcar Consulta
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
