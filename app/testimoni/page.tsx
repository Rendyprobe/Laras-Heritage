import type { Metadata } from "next";
import { FaqSection } from "@/components/faq-section";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { TestimonialsSection } from "@/components/testimonials-section";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Testimoni",
  description:
    "Kesan pelanggan setelah mencoba Laras Heritage dan jawaban untuk pertanyaan umum.",
};

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow={siteContent.testimonials.eyebrow}
        title={siteContent.testimonials.title}
        description={siteContent.testimonials.description}
      />
      <TestimonialsSection
        testimonials={siteContent.testimonials}
        showHeading={false}
      />
      <FaqSection faqs={siteContent.faqs} />
    </PageShell>
  );
}
