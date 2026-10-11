import type { Viewport } from "next";
import { siteFr } from "@/content/site.fr";
import { Shell, siteMetadata } from "@/lib/shell";
import "../globals.css";

export const metadata = siteMetadata(siteFr);

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell site={siteFr}>{children}</Shell>;
}
