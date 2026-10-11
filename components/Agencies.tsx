import type { Site } from "@/content/site";
import { Footer } from "./Sections";

export default function Agencies({ site }: { site: Site }) {
  const a = site.agencies;
  const { brand } = site;
  return (
    <>
      <main>
        <section className="ag wrap" id="top">
          <p className="ag__kicker">{a.kicker}</p>
          <h1 className="ag__title">{a.title}</h1>
          <p className="ag__intro">{a.intro}</p>
        </section>

        <div className="rule" />

        <section className="ag-points wrap">
          {a.points.map((p) => (
            <article key={p.title} className="ag-point">
              <h2 className="ag-point__title">{p.title}</h2>
              <p>{p.body}</p>
            </article>
          ))}
        </section>

        <div className="band band--bleed" />

        <section className="ag-steps wrap">
          <h2 className="h-serif h-underline">{a.stepsTitle}</h2>
          <ol>
            {a.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </section>

        <section className="ag-cta">
          <div className="wrap">
            <h2 className="h-serif">{a.ctaTitle}</h2>
            <a className="pill pill--solid" href={brand.calendly} target="_blank" rel="noopener noreferrer">
              {a.cta}
            </a>
            <p className="ag-cta__or">
              {a.or}{" "}
              <a className="touch__mail" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </p>
            <a className="plan__more" href={`${site.paths.home}#examples`}>
              {a.examples} →
            </a>
          </div>
        </section>
      </main>
      <Footer site={site} />
    </>
  );
}
