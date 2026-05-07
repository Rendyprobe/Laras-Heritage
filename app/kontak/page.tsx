import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Laras Heritage melalui form WhatsApp, email, Instagram, atau alamat studio.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow={siteContent.contact.eyebrow}
        title={siteContent.contact.title}
        description={siteContent.contact.description}
      />
      <ContactSection contact={siteContent.contact} showHeading={false} />
    </PageShell>
  );
}
