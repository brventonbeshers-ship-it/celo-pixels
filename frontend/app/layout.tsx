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
      <body className="min-h-screen text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// layout: 1775238609653
