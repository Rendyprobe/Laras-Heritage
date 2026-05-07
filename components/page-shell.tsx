import type { ReactNode } from "react";
import { siteContent } from "@/data/site-content";
import { ScrollReveal } from "./scroll-reveal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <ScrollReveal />
      <SiteHeader brand={siteContent.brand} navItems={siteContent.navItems} />
      <main className="page-transition relative overflow-x-clip">{children}</main>
      <SiteFooter
        brand={siteContent.brand}
        navItems={siteContent.navItems}
        contact={siteContent.contact}
      />
    </>
  );
}
