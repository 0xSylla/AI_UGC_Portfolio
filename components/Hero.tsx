import Image from "next/image";
import { site } from "@/content/site";
import { SocialLinks } from "./icons";

function Stars({ rating }: { rating: number }) {
  /* five grey stars with a gold layer clipped to the rating — avoids the
     half-star glyph U+2BE8, which has almost no font coverage */
  const pct = (Math.max(0, Math.min(5, rating)) / 5) * 100;
  return (
    <div className="stars" aria-label={`${rating} out of 5`}>
      <span className="stars__base">★★★★★</span>
      <span className="stars__fill" style={{ width: `${pct}%` }}>
        ★★★★★
      </span>
    </div>
  );
}

export default function Hero() {
  const { brand, hero } = site;

  return (
    <section className="hero wrap" id="top">
      <div className="hero__left">
        <h1 className="hero__title">
          {hero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero__body">{hero.body}</p>

        <div className="touch">
          <h2 className="touch__title">{hero.contactTitle}</h2>
          <p className="touch__sub">{hero.contactSub}</p>
          <div className="touch__icons">
            <SocialLinks brand={brand} />
          </div>
          <p className="touch__or">{hero.or}</p>
          <a className="touch__mail" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
        </div>
      </div>

      <div className="hero__right">
        <figure className="framed">
          <Image
            src={hero.portrait}
            alt={`${brand.owner} — portrait`}
            width={900}
            height={900}
            priority
          />
        </figure>
      </div>

      <div className="hero__foot">
        <div className="trust">
          <Stars rating={brand.stars} />
          <span>{brand.trust}</span>
        </div>
        <div className="place">
          <span aria-hidden="true">📍</span> <span>{brand.location}</span>
        </div>
      </div>
    </section>
  );
}
