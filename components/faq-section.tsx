import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "./faq-accordion";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type FaqSectionProps = {
  faqs: readonly {
    question: string;
    answer: string;
  }[];
  links: {
    whatsapp: string;
    contact: string;
  };
};

export function FaqSection({ faqs, links }: FaqSectionProps) {
  return (
    <section id="faq" className="section-anchor section-shell">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Jawaban singkat untuk pertanyaan yang paling sering muncul."
              description="Bagian ini sengaja dibuat ringkas agar hambatan utama cepat terjawab tanpa membuat halaman terasa panjang."
            />

            <SurfaceCard tone="muted" className="mt-8 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-ink/50">
                Masih butuh percakapan langsung?
              </p>
              <p className="mt-4 text-base leading-8 text-brand-ink/74">
                Jika Anda ingin mendiskusikan produk atau peluang kemitraan,
                kami menyiapkan jalur kontak yang cepat dan rendah friksi.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col">
                <Button href={links.whatsapp} target="_blank" rel="noreferrer">
                  Chat via WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href={links.contact} variant="secondary">
                  Ke Form Kontak
                </Button>
              </div>
            </SurfaceCard>
          </div>

          <FaqAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
