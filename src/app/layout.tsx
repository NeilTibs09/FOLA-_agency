import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyCta } from "@/components/layout/StickyCta";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/env";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: "en_ZA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${archivo.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="label sr-only z-50 bg-accent px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCta />
        {/* Without JavaScript, scroll-reveal content must simply be visible. */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </body>
    </html>
  );
}
