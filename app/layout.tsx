import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "GrowthMe — See How Your Money Grows",
  description:
    "A clean, simple compound interest calculator for global investors. Set your currency, adjust contributions, and see your long-term growth.",
  metadataBase: new URL("https://growthme.org"),
  openGraph: {
    title: "GrowthMe — See How Your Money Grows",
    description:
      "A clean, simple compound interest calculator for global investors. Set your currency, adjust contributions, and see your long-term growth.",
    type: "website",
    siteName: "GrowthMe",
    url: "https://growthme.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthMe — See How Your Money Grows",
    description:
      "A clean, simple compound interest calculator for global investors.",
  },
  alternates: {
    canonical: "https://growthme.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "GrowthMe",
              url: "https://growthme.org",
              description:
                "A clean, simple compound interest calculator for global investors.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body>
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <Nav />
          <main>{children}</main>
          <footer
            className="py-8 text-center text-xs"
            style={{
              color: "var(--text-muted)",
              borderTop: "1px solid var(--border)",
            }}
          >
            Built with care, not with venture capital.
          </footer>
        </div>
      </body>
    </html>
  );
}
