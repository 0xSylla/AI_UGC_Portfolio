import type { Metadata, Viewport } from "next";
import { Tinos, Nunito_Sans } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "AI UGC Studio — UGC-style video ads that convert",
  description:
    "AI-generated UGC-style video ads for brands. Scale creative testing " +
    "without traditional production costs.",
  openGraph: {
    title: "AI UGC Studio",
    description: "AI-generated UGC-style video ads that convert.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${tinos.variable} ${nunito.variable}`}>
      <body>
        <header className="mark">
          <a href="#top">{site.brand.name}</a>
        </header>
        {children}
      </body>
    </html>
  );
}
