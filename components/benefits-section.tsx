import { Coffee, MoonStar, SunMedium } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type BenefitsSectionProps = {
  rituals: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      label: string;
      title: string;
      description: string;
    }[];
  };
};

const icons = [SunMedium, Coffee, MoonStar];

export function BenefitsSection({ rituals }: BenefitsSectionProps) {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow={rituals.eyebrow}
          title={rituals.title}
          description={rituals.description}
          align="center"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {rituals.items.map((ritual, index) => {
            const Icon = icons[index % icons.length];

            return (
              <SurfaceCard
                key={ritual.title}
                data-reveal-delay={String(index + 1)}
                className="p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cream text-brand-olive">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span
                    data-reveal-text="1"
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink/52"
                  >
                    {ritual.label}
                  </span>
                </div>
                <h3
                  data-reveal-text="2"
                  className="mt-6 text-display text-4xl font-semibold leading-none text-brand-ink"
                >
                  {ritual.title}
                </h3>
                <p
                  data-reveal-text="3"
                  className="mt-4 text-base leading-8 text-brand-ink/74"
                >
                  {ritual.description}
                </p>
              </SurfaceCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
