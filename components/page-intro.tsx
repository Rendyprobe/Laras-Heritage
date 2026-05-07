import type { ReactNode } from "react";
import { Container } from "./ui/container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-brand-olive/10 bg-brand-cream/45 pb-10 pt-28 md:pb-12">
      <div className="soft-grid absolute inset-0 -z-10 opacity-45" />
      <Container>
        <div data-reveal="fade-up" className="max-w-4xl">
          <span data-reveal-text="1" className="section-kicker">
            {eyebrow}
          </span>
          <h1
            data-reveal-text="2"
            className="text-balance text-display text-[clamp(3.25rem,7vw,5.75rem)] font-semibold leading-[0.92] text-brand-ink"
          >
            {title}
          </h1>
          <p
            data-reveal-text="3"
            className="mt-5 max-w-3xl text-pretty text-lg leading-8 text-brand-ink/76 md:text-xl"
          >
            {description}
          </p>
          {children ? (
            <div data-reveal-text="4" className="mt-7">
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
