import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celo Pixels — Collaborative Pixel Art on Celo",
  description: "Place pixels on a 50x50 canvas stored on the Celo blockchain. Create art together, one pixel at a time.",
  openGraph: {
    title: "Celo Pixels",
    description: "Collaborative pixel art canvas on Celo blockchain.",
    images: ["/og.png"],
  },
  other: {
    "talent-protocol-verification": "celo-pixels",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="talentapp:project_verification" content="40c53be902ab5087828930f1e8dd909c75d6b884b24194bc967153208331ec4e619e380ff854d3ca811d216290e2458a44b3063bb51c9b396f965e7b5dbdf1ac" />
      </head>
      <body className="min-h-screen text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// layout: 1775238609653

// layout: 1775272090748
