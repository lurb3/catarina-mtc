/**
 * Sanity Studio embedded at /studio
 * Rendered client-side only to avoid "window is not defined" error
 */

import { Metadata, Viewport } from "next";
import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";
import { Suspense } from "react";
import StudioLoader from "./StudioLoader";

export const metadata: Metadata = studioMetadata;
export const viewport = studioViewport;

export default function StudioPage() {
  return (
    <Suspense fallback={<div>Loading Studio...</div>}>
      <StudioLoader />
    </Suspense>
  );
}
