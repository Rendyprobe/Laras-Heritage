import { Leaf, ShieldCheck, Sparkles, Store } from "lucide-react";
import { Container } from "./ui/container";
import { SurfaceCard } from "./ui/surface-card";

const icons = [Leaf, Sparkles, ShieldCheck, Store];

type TrustStripProps = {
  items: readonly {
    title: string;
    description: string;
  }[];
};

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <section className="section-shell pt-6 md:pt-8">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <SurfaceCard
                key={item.title}
                className="p-7 hover:-translate-y-1 hover:border-brand-olive/15"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cream text-brand-olive">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-display text-[2rem] font-semibold leading-none text-brand-ink">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-brand-ink/72">
                  {item.description}
                </p>
              </SurfaceCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
