"use client";

import Link from "next/link";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setErrorMsg(
        "Para enviar o pedido, aceite o tratamento dos seus dados pessoais.",
      );
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, consent }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setConsent(false);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Ocorreu um erro. Tente novamente.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Ocorreu um erro. Tente novamente.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#C7CFC0] px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-2xl text-center">
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

        {status === "success" ? (
          <div className="rounded-2xl bg-[#2D352C] px-8 py-10 text-[#E6E1D2]">
            <p className="font-serif text-2xl">Mensagem enviada!</p>
            <p className="mt-3 text-[#C7CFC0]">
              Entraremos em contacto brevemente.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 text-left"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6C7463]"
              >
                Nome e apelido
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="O seu nome e apelido"
                className="w-full rounded-xl border border-[#B0BAA8] bg-[#D8DFD1] px-5 py-4 text-[#2D352C] placeholder-[#9AA392] outline-none transition focus:border-[#2D352C] focus:ring-2 focus:ring-[#2D352C]/20"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6C7463]"
              >
                Contacto
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contacto telefónico"
                className="w-full rounded-xl border border-[#B0BAA8] bg-[#D8DFD1] px-5 py-4 text-[#2D352C] placeholder-[#9AA392] outline-none transition focus:border-[#2D352C] focus:ring-2 focus:ring-[#2D352C]/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6C7463]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="o.seu@email.com"
                className="w-full rounded-xl border border-[#B0BAA8] bg-[#D8DFD1] px-5 py-4 text-[#2D352C] placeholder-[#9AA392] outline-none transition focus:border-[#2D352C] focus:ring-2 focus:ring-[#2D352C]/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6C7463]"
              >
                Motivo de contacto
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Motivo de contacto..."
                className="w-full resize-none rounded-xl border border-[#B0BAA8] bg-[#D8DFD1] px-5 py-4 text-[#2D352C] placeholder-[#9AA392] outline-none transition focus:border-[#2D352C] focus:ring-2 focus:ring-[#2D352C]/20"
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#4B544A]">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#2D352C]"
              />
              <span>
                Autorizo o tratamento dos meus dados pessoais, incluindo
                informação de saúde que partilhe nesta mensagem, para efeitos de
                resposta ao meu pedido de contacto, nos termos da{" "}
                <Link
                  href="/privacidade"
                  target="_blank"
                  className="text-[#2D352C] underline underline-offset-4"
                >
                  Política de Privacidade
                </Link>
                .
              </span>
            </label>

            {status === "error" && (
              <p className="text-sm text-red-700">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-[#2D352C] px-10 py-5 text-lg text-[#E6E1D2] transition hover:bg-[#4B544A] disabled:opacity-60"
            >
              {status === "loading" ? "A enviar…" : "Enviar pedido de contacto"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
