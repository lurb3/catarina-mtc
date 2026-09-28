"use client";

import { useSyncExternalStore } from "react";
import { GA_MEASUREMENT_ID } from "@/config/analytics";

export type Consent = "granted" | "denied";

const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";

const read = (): Consent | null => {
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : null;
};

const notify = () => window.dispatchEvent(new Event(CHANGE_EVENT));

/** Removes Google Analytics cookies (set on the current host and its parent domain). */
const clearAnalyticsCookies = () => {
  const host = window.location.hostname;
  document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name.startsWith("_ga"))
    .forEach((name) => {
      for (const domain of ["", `; domain=${host}`, `; domain=.${host}`]) {
        document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
      }
    });
};

export const setConsent = (value: Consent) => {
  localStorage.setItem(STORAGE_KEY, value);
  if (value === "denied") {
    // Stop an already-loaded GA instance from sending more data this session
    (window as unknown as Record<string, boolean>)[
      `ga-disable-${GA_MEASUREMENT_ID}`
    ] = true;
    clearAnalyticsCookies();
  }
  notify();
};

/** Clears the stored choice so the banner is shown again. */
export const resetConsent = () => {
  localStorage.removeItem(STORAGE_KEY);
  notify();
};

const subscribe = (callback: () => void) => {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
};

/**
 * Current consent: "granted" | "denied" | null (no choice yet).
 * "unknown" during server rendering, so nothing consent-dependent renders
 * until the browser has read the stored choice.
 */
export const useConsent = (): Consent | null | "unknown" =>
  useSyncExternalStore(subscribe, read, () => "unknown");
