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

// layout: 1776185313604

// layout: 1776214560163

// layout: 1776247096135

// layout: 1776255783660

// layout: 1776269113303

// layout: 1776314866431

// layout: 1776330324529

// layout: 1776349030523

// layout: 1776400209463

// layout: 1776430983920

// layout: 1776458795410

// layout: 1776478569926

// layout: 1776492412336

// layout: 1776517065063

// layout: 1776548537846

// layout: 1776584118185

// layout: 1776617921445

// layout: 1776643125806

// layout: 1776671008772

// layout: 1776677998544

// layout: 1776700046242

// layout: 1776750208715

// layout: 1776779794999

// layout: 1776803096153

// layout: 1776816161272

// layout: 1776833094548

// layout: 1776861877288

// layout: 1776874929208

// layout: 1776888421570

// layout: 1776937625680

// layout: 1776961089531

// layout: 1777000071642

// layout: 1777023529550

// layout: 1777035863109

// layout: 1777065266955

// layout: 1777102025221

// layout: 1777117944582

// layout: 1777167841906

// layout: 1777182766476

// layout: 1777193013928

// layout: 1777213542193

// layout: 1777236095478

// layout: 1777264801356

// layout: 1777277121025
