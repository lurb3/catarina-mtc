// Google Analytics 4 — only loaded after the visitor accepts analytics cookies
export const GA_MEASUREMENT_ID = "G-FMJCLQZKVM";

// Load analytics on the production site only (not locally or on preview deployments)
export const ANALYTICS_ENABLED =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
