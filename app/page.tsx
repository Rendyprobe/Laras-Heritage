import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PartnershipSection } from "@/components/partnership-section";
import { ProductsSection } from "@/components/products-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/data/site-content";

export default function Home() {
  return (
    <>
      <SiteHeader brand={siteContent.brand} navItems={siteContent.navItems} />
      <main className="relative overflow-x-clip">
        <HeroSection
          brand={siteContent.brand}
          hero={siteContent.hero}
          links={siteContent.links}
        />
        <ProductsSection products={siteContent.products} />
        <AboutSection about={siteContent.about} />
        <PartnershipSection
          partnership={siteContent.partnership}
          links={siteContent.links}
        />
        <ContactSection contact={siteContent.contact} />
      </main>
      <SiteFooter
        brand={siteContent.brand}
        navItems={siteContent.navItems}
        contact={siteContent.contact}
      />
    </>
  );
}
