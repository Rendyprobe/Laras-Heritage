import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { BrandIntroSection } from "@/components/brand-intro-section";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { TrustStrip } from "@/components/trust-strip";
import { ValuePillarsSection } from "@/components/value-pillars-section";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cerita Laras Heritage, prinsip racikan, asal usaha, dan tim di balik brand jamu modern ini.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow={siteContent.about.eyebrow}
        title={siteContent.about.title}
        description={siteContent.about.paragraphs[0]}
      />
      <AboutSection about={siteContent.about} showHeading={false} />
      <BrandIntroSection intro={siteContent.brandIntro} />
      <ValuePillarsSection pillars={siteContent.pillars} />
      <TrustStrip items={siteContent.trustItems} />
    </PageShell>
  );
}
