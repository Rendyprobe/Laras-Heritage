"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    requestAnimationFrame(() => {
      root.classList.add("reveal-ready");
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.revealed = "true";
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.dataset.revealed = "true";
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.16,
      },
    );

    elements.forEach((element) => {
      if (!element.dataset.revealed) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
