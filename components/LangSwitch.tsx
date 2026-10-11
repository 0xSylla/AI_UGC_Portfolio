"use client";

import { usePathname } from "next/navigation";

/* points at the same page in the other language — /agencies ↔ /fr/agencies */
export default function LangSwitch({
  lang,
  label,
  aria,
}: {
  lang: string;
  label: string;
  aria: string;
}) {
  const path = usePathname() || "/";
  const href = lang === "fr" ? path.replace(/^\/fr/, "") || "/" : `/fr${path === "/" ? "" : path}`;
  return (
    <a className="mark__lang" href={href} hrefLang={lang === "fr" ? "en" : "fr"} aria-label={aria}>
      {label}
    </a>
  );
}
