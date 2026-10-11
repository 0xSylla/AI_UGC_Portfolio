import type { Metadata } from "next";
import { Tinos, Nunito_Sans } from "next/font/google";
import type { Site } from "@/content/site";
import LangSwitch from "@/components/LangSwitch";

/* Tinos is metrically identical to Times New Roman — the serif the reference
   build renders. Loading it directly beats relying on a local Times fallback,
   which is unhinted on many machines and absent on most phones. */
const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-tinos",
  display: "swap",
});

/* Nunito Sans stands in for Avenir — humanist geometric with a tall x-height,
   a much closer match than the Futura-derived Jost it replaces. */
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export function siteMetadata(site: Site): Metadata {
  return {
    title: site.meta.title,
    description: site.meta.description,
    alternates: { languages: { en: "/", fr: "/fr" } },
    openGraph: {
      title: site.meta.ogTitle,
      description: site.meta.ogDescription,
      type: "website",
    },
  };
}

/* Each language is its own root layout (route groups), so <html lang> is
   correct per page; both render through this one shell. */
export function Shell({ site, children }: { site: Site; children: React.ReactNode }) {
  const sw = site.ui.langSwitch;
  return (
    <html lang={site.lang} className={`${tinos.variable} ${nunito.variable}`}>
      <body>
        <header className="mark">
          <a href={site.paths.home}>{site.brand.name}</a>
          <nav className="mark__nav">
            <a className="mark__link" href={site.paths.agencies}>
              {site.ui.nav.agencies}
            </a>
            <LangSwitch lang={site.lang} label={sw.label} aria={sw.aria} />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
