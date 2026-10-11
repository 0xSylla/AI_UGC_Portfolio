import Image from "next/image";
import type { Site } from "@/content/site";
import { CalendarIcon, SocialLinks } from "./icons";

/* ---------------- tagline + industry strip ---------------- */
export function Strip({ site }: { site: Site }) {
  return (
    <>
      <div className="rule" />
      <p className="tagline">{site.tagline}</p>
      <div className="rule" />
      <nav className="cats" aria-label={site.ui.industries}>
        <div className="wrap cats__row">
          {site.categories.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </nav>
      <div className="rule" />
    </>
  );
}

/* ---------------- packages ---------------- */
export function Pricing({ site }: { site: Site }) {
  const { title, sub, plans, cta, more } = site.pricing;
  return (
    <section className="plans" id="packages">
      <div className="wrap">
        <h2 className="h-serif h-center h-underline">{title}</h2>
        <p className="plans__sub">{sub}</p>
        <div className="plans__grid">
          {plans.map((p) => (
            <article key={p.name} className={p.featured ? "plan plan--featured" : "plan"}>
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__pitch">{p.pitch}</p>
              <p className="plan__price">{p.price}</p>
              <ul className="plan__items">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className="plan__actions">
                <a className="pill" href={site.brand.calendly} target="_blank" rel="noopener noreferrer">
                  {cta}
                </a>
                {p.link && (
                  <a className="plan__more" href={site.paths[p.link]}>
                    {more} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- strengths + honest limits ---------------- */
export function Limits({ site }: { site: Site }) {
  const l = site.limits;
  return (
    <section className="limits wrap">
      <h2 className="h-serif h-underline">{l.title}</h2>
      <p className="limits__sub">{l.sub}</p>
      <div className="limits__grid">
        <div>
          <h3 className="limits__head">{l.goodTitle}</h3>
          <ul className="limits__list limits__list--ok">
            {l.good.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="limits__head">{l.badTitle}</h3>
          <ul className="limits__list limits__list--no">
            {l.bad.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="limits__foot">{l.footer}</p>
    </section>
  );
}

/* ---------------- about ---------------- */
export function About({ site }: { site: Site }) {
  const a = site.about;
  return (
    <section className="about wrap">
      <div className="about__media">
        {/* must match the real file (640×800) or next/image reserves the
            wrong box and requests the wrong srcset widths */}
        <Image src={a.photo} alt={`${site.brand.owner} — ${site.ui.portrait}`} width={640} height={800} />
        <div className="badge">
          <b>{a.badge.big}</b>
          <span>{a.badge.small}</span>
        </div>
      </div>
      <div className="about__copy">
        <h2 className="h-serif about__title">{a.title}</h2>
        <p className="about__label">{a.label}</p>
        <div>
          {a.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- faq ---------------- */
export function Faq({ site }: { site: Site }) {
  const f = site.faq;
  return (
    <section className="faq wrap">
      <h2 className="h-serif faq__kicker">{f.kicker}</h2>
      <div className="faq__grid">
        <aside className="faq__side">
          <h3 className="h-serif h-underline">{f.title}</h3>
          <p className="faq__note">{f.note}</p>
          <a
            className="faq__cal"
            href={site.brand.calendly}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={site.ui.bookCall}
          >
            <CalendarIcon />
          </a>
        </aside>
        <ul className="faq__list">
          {f.items.map((i) => (
            <li key={i.q}>
              <div className="faq__q">{i.q}</div>
              <div className="faq__a">{i.a}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- footer ---------------- */
export function Footer({ site }: { site: Site }) {
  const { brand, footerCta } = site;
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        <a className="pill" href={`mailto:${brand.email}`}>
          {footerCta}
        </a>
        <a className="foot__mail" href={`mailto:${brand.email}`}>
          {brand.email}
        </a>
        <div className="foot__icons">
          <SocialLinks brand={brand} order={["linkedin", "calendly"]} />
        </div>
      </div>
    </footer>
  );
}
