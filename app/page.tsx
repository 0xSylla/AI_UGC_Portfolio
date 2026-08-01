import Hero from "@/components/Hero";
import Galleries from "@/components/Galleries";
import { Strip, Compare, About, Faq, Footer } from "@/components/Sections";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Strip />
        <Galleries galleries={site.galleries} />
        <Compare />
        <div className="band band--bleed" />
        <About />
        <div className="band band--bleed" />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
