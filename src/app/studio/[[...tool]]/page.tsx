/**
 * Sanity Studio embedded at /studio
 *
 * Configurada via `sanity.config.ts` na raiz do projecto.
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-dynamic";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
