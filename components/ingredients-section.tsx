import { Leaf } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type IngredientsSectionProps = {
  ingredients: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      name: string;
      detail: string;
    }[];
  };
};

export function IngredientsSection({ ingredients }: IngredientsSectionProps) {
  return (
    <section id="ingredients" className="section-anchor section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow={ingredients.eyebrow}
              title={ingredients.title}
              description={ingredients.description}
            />
          </div>

          <SurfaceCard className="overflow-hidden p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {ingredients.items.map((item, index) => (
                <div
                  key={item.name}
                  data-reveal-text={String((index % 4) + 1)}
                  className="rounded-[24px] border border-brand-surface/55 bg-brand-surface/72 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-leaf text-brand-olive">
                    <Leaf className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-brand-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-ink/72">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
