"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { ANALYTICS_ENABLED, GA_MEASUREMENT_ID } from "@/config/analytics";
import { setConsent, useConsent } from "./consent";

/**
 * Cookie banner + Google Analytics.
 * GA is only loaded after the visitor accepts analytics cookies.
 */
const CookieConsent = () => {
  const consent = useConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  return (
    <>
      {ANALYTICS_ENABLED && consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Preferências de cookies"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-xl bg-[#1F2620] p-5 text-[#E6E1D2] shadow-2xl ring-1 ring-[#E6CFB8]/20"
        >
          <p className="mb-1 font-serif text-base text-[#E6CFB8]">
            Este site utiliza cookies
          </p>
          <p className="mb-4 text-xs leading-relaxed text-[#B5BFAB]">
            Utilizamos cookies de análise (Google Analytics) para compreender
            como o site é utilizado e melhorá-lo. Estes cookies só são
            instalados com o seu consentimento. Saiba mais na{" "}
            <Link
              href="/cookies"
              className="text-[#E6E1D2] underline underline-offset-4"
            >
              Política de Cookies
            </Link>
            .
          </p>

          {showPreferences && (
            <div className="mb-4 space-y-3 rounded-lg bg-[#2D352C] p-4 text-xs">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 shrink-0 accent-[#E6CFB8]"
                />
                <span>
                  <strong className="text-[#E6E1D2]">
                    Estritamente necessários
                  </strong>
                  <span className="block text-[#B5BFAB]">
                    Essenciais para o funcionamento do site. Sempre ativos.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#E6CFB8]"
                />
                <span>
                  <strong className="text-[#E6E1D2]">Análise e estatística</strong>
                  <span className="block text-[#B5BFAB]">
                    Google Analytics — ajuda-nos a perceber como o site é
                    utilizado.
                  </span>
                </span>
              </label>
            </div>
          )}

          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => setConsent("granted")}
              className="cursor-pointer rounded-full bg-[#E6CFB8] px-4 py-2 text-xs text-[#2D352C] transition hover:bg-[#E6E1D2]"
            >
              Aceitar todos
            </button>
            <button
              type="button"
              onClick={() => setConsent("denied")}
              className="cursor-pointer rounded-full bg-[#E6CFB8] px-4 py-2 text-xs text-[#2D352C] transition hover:bg-[#E6E1D2]"
            >
              Rejeitar não essenciais
            </button>
            {showPreferences ? (
              <button
                type="button"
                onClick={() => setConsent(analytics ? "granted" : "denied")}
                className="cursor-pointer rounded-full border border-[#E6CFB8]/50 px-4 py-2 text-xs text-[#E6E1D2] transition hover:border-[#E6CFB8]"
              >
                Guardar preferências
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="cursor-pointer rounded-full border border-[#E6CFB8]/50 px-4 py-2 text-xs text-[#E6E1D2] transition hover:border-[#E6CFB8]"
              >
                Gerir preferências
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
