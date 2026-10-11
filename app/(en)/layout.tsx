import type { Viewport } from "next";
import { site } from "@/content/site";
import { Shell, siteMetadata } from "@/lib/shell";
import "../globals.css";

export const metadata = siteMetadata(site);

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell site={site}>{children}</Shell>;
}
