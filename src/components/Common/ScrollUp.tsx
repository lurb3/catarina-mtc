"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => {
    const scrollUp = () => {
      window.document.scrollingElement?.scrollTo(0, 0)
    }
    scrollUp();
  }, [])

  return null;
}
