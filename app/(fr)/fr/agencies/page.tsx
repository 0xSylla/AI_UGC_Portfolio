import type { Metadata } from "next";
import Agencies from "@/components/Agencies";
import { siteFr } from "@/content/site.fr";

export const metadata: Metadata = {
  title: siteFr.agencies.metaTitle,
  description: siteFr.agencies.metaDescription,
  alternates: { languages: { en: "/agencies", fr: "/fr/agencies" } },
};

export default function Page() {
  return <Agencies site={siteFr} />;
}
