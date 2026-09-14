"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => {
    // Don't reset scroll when the URL contains a hash anchor
    if (window.location.hash) return;
    window.document.scrollingElement?.scrollTo(0, 0);
  }, [])

  return null;
}
