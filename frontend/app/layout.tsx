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

// layout: 1775284340688

// layout: 1775383598527

// layout: 1775389960198

// layout: 1775437318092

// layout: 1775510951412

// layout: 1775598525742

// layout: 1775643306399

// layout: 1775695383610

// layout: 1775710394578

// layout: 1775751499918

// layout: 1775796100503

// layout: 1775827859012

// layout: 1775870791701

// layout: 1775919647920

// layout: 1775966050241

// layout: 1776045769951

// layout: 1776062387875

// layout: 1776083314368

// layout: 1776115364367

// layout: 1776143359873

// layout: 1776170165640
