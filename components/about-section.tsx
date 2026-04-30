import { CheckCircle2 } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type AboutSectionProps = {
  about: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    quote: string;
    principles: readonly string[];
    facts: readonly {
      label: string;
      value: string;
    }[];
  };
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-anchor section-shell">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[1fr_0.82fr]">
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              description={about.paragraphs[0]}
            />
            <div className="mt-7 grid gap-5 text-base leading-8 text-brand-ink/74">
              {about.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {about.principles.map((principle) => (
                <div
                  key={principle}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-olive/10 bg-white/72 px-4 py-3 text-sm font-medium text-brand-ink/76 shadow-[0_14px_30px_-24px_rgba(35,50,44,0.34)]"
                >
                  <CheckCircle2
                    className="h-4 w-4 flex-none text-brand-olive"
                    aria-hidden="true"
                  />
                  {principle}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SurfaceCard className="p-7 md:p-9">
              <p className="max-w-2xl text-display text-4xl font-semibold leading-tight text-brand-ink md:text-5xl">
                {about.quote}
              </p>
              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-brand-ink/50">
                Laras Heritage
              </p>
              <div className="mt-8 space-y-4 border-t border-brand-olive/10 pt-6">
                {about.facts.map((fact) => (
                  <div key={fact.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/45">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-brand-ink/72">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
