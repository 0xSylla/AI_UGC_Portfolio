import Hero from "@/components/Hero";
import Galleries from "@/components/Galleries";
import { Strip, Pricing, Limits, About, Faq, Footer } from "@/components/Sections";
import type { Site } from "@/content/site";

export default function Home({ site }: { site: Site }) {
  return (
    <>
      <main>
        <Hero site={site} />
        <Strip site={site} />
        <Galleries galleries={site.galleries} ui={site.ui} />
        <Pricing site={site} />
        <Limits site={site} />
        <div className="band band--bleed" />
        <About site={site} />
        <div className="band band--bleed" />
        <Faq site={site} />
      </main>
      <Footer site={site} />
    </>
  );
}
