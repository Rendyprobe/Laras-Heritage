import { HomeDashboard } from "@/components/home-dashboard";
import { PageShell } from "@/components/page-shell";
import { siteContent } from "@/data/site-content";

export default function Home() {
  return (
    <PageShell>
      <HomeDashboard
        brand={siteContent.brand}
        hero={siteContent.hero}
        links={siteContent.links}
      />
    </PageShell>
  );
}
