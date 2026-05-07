import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type BrandIntroSectionProps = {
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    stats: readonly {
      value: string;
      label: string;
    }[];
  };
};

export function BrandIntroSection({ intro }: BrandIntroSectionProps) {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow={intro.eyebrow}
          title={intro.title}
          description={intro.description}
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {intro.stats.map((stat, index) => (
            <SurfaceCard
              key={stat.label}
              data-reveal-delay={String(index + 1)}
              className="p-6 text-center"
            >
              <p
                data-reveal-text="1"
                className="text-display text-5xl font-semibold leading-none text-brand-olive"
              >
                {stat.value}
              </p>
              <p
                data-reveal-text="2"
                className="mt-3 text-sm uppercase tracking-[0.2em] text-brand-ink/54"
              >
                {stat.label}
              </p>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
