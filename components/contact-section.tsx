import { ContactForm } from "./contact-form";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type ContactSectionProps = {
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    whatsappLink: string;
  };
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="section-anchor relative pb-10 pt-8 md:pb-12 md:pt-10"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />

          <SurfaceCard className="mt-8 p-6 md:p-8">
            <ContactForm whatsappLink={contact.whatsappLink} />
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
