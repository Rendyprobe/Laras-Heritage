import { CheckCircle2, Quote } from "lucide-react";
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
  };
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-anchor section-shell">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              description={about.paragraphs[0]}
            />
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
            <SurfaceCard className="p-8 md:p-10">
              <Quote className="h-8 w-8 text-brand-gold" aria-hidden="true" />
              <p className="mt-5 max-w-2xl text-display text-3xl font-semibold leading-tight text-brand-ink md:text-4xl">
                {about.quote}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-brand-olive/10 bg-brand-cream/70 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-ink/52">
                    Mood
                  </p>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/76">
                    Calm, editorial, and naturally premium.
                  </p>
                </div>
                <div className="rounded-[24px] border border-brand-olive/10 bg-white/72 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-ink/52">
                    Direction
                  </p>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/76">
                    Lebih banyak rasa percaya, lebih sedikit blok teks yang padat.
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
