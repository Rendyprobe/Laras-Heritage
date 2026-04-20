import { BadgeCheck, Droplets, FlaskConical, PackageCheck } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type QualitySectionProps = {
  quality: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly {
      title: string;
      description: string;
    }[];
    stats: readonly {
      value: string;
      label: string;
    }[];
  };
};

const icons = [Droplets, FlaskConical, BadgeCheck, PackageCheck];

export function QualitySection({ quality }: QualitySectionProps) {
  return (
    <section id="quality" className="section-anchor section-shell">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={quality.eyebrow}
              title={quality.title}
              description={quality.description}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              {quality.stats.map((stat) => (
                <SurfaceCard key={stat.label} tone="muted" className="p-5">
                  <p className="text-display text-4xl font-semibold leading-none text-brand-olive">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-brand-ink/52">
                    {stat.label}
                  </p>
                </SurfaceCard>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {quality.steps.map((step, index) => {
              const Icon = icons[index % icons.length];

              return (
                <SurfaceCard key={step.title} className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-leaf text-brand-olive">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                    {step.description}
                  </p>
                </SurfaceCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
