import { FaqAccordion } from "./faq-accordion";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

type FaqSectionProps = {
  faqs: readonly {
    question: string;
    answer: string;
  }[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
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
          </div>

          <FaqAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
