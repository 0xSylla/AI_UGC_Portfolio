import type { Metadata } from "next";
import Agencies from "@/components/Agencies";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.agencies.metaTitle,
  description: site.agencies.metaDescription,
  alternates: { languages: { en: "/agencies", fr: "/fr/agencies" } },
};

export default function Page() {
  return <Agencies site={site} />;
}
