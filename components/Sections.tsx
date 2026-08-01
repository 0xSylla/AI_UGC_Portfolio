import Image from "next/image";
import { site } from "@/content/site";
import { InstagramIcon, SocialLinks } from "./icons";

/* ---------------- tagline + industry strip ---------------- */
export function Strip() {
  return (
    <>
      <div className="rule" />
      <p className="tagline">{site.tagline}</p>
      <div className="rule" />
      <nav className="cats" aria-label="Industries">
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

/* ---------------- comparison table ---------------- */
export function Compare() {
  const { title, sub, head, rows, footer } = site.compare;
  return (
    <section className="compare">
      <div className="wrap">
        <h2 className="h-serif h-center h-underline">{title}</h2>
        <p className="compare__sub">{sub}</p>
        <div className="table-scroll">
          <table className="cmp">
            <thead>
              <tr>
                {head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.cat}>
                  <td>{r.cat}</td>
                  <td className="no">{r.trad}</td>
                  <td className="ok">{r.ai}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>{footer}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------------- about ---------------- */
export function About() {
  const a = site.about;
  return (
    <section className="about wrap">
      <div className="about__media">
        {/* must match the real file (640×800) or next/image reserves the
            wrong box and requests the wrong srcset widths */}
        <Image src={a.photo} alt={`${site.brand.owner} — portrait`} width={640} height={800} />
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
export function Faq() {
  const f = site.faq;
  return (
    <section className="faq wrap">
      <h2 className="h-serif faq__kicker">{f.kicker}</h2>
      <div className="faq__grid">
        <aside className="faq__side">
          <h3 className="h-serif h-underline">{f.title}</h3>
          <p className="faq__note">{f.note}</p>
          <a
            className="faq__ig"
            href={site.brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
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
export function Footer() {
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
          <SocialLinks brand={brand} order={["linkedin", "instagram"]} />
        </div>
      </div>
    </footer>
  );
}
