import { Blend, Gem, Shield, Sparkles } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type ValuePillarsSectionProps = {
  pillars: readonly {
    title: string;
    description: string;
  }[];
};

const icons = [Blend, Sparkles, Gem, Shield];

export function ValuePillarsSection({ pillars }: ValuePillarsSectionProps) {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Alasan yang terasa emosional sekaligus rasional."
          description="Website ini perlu membuat brand terlihat menarik, tetapi ketertarikan saja tidak cukup. Karena itu, diferensiasi Laras Heritage dibangun dari kombinasi heritage, rasa, presentasi, dan kesiapan untuk dibawa ke kanal yang lebih luas."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];

            return (
              <SurfaceCard
                key={pillar.title}
                className="flex h-full flex-col p-6 hover:-translate-y-1 hover:border-brand-olive/18"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cream text-brand-olive">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-brand-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  {pillar.description}
                </p>
              </SurfaceCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
