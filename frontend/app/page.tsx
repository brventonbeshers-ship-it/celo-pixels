"use client";

import Header from "@/components/Header";
import PixelCanvas from "@/components/PixelCanvas";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Collaborative Pixel Art
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Place pixels on a 50x50 canvas stored on the Celo blockchain.
            Every pixel is permanent and verifiable on-chain.
          </p>
        </div>
        <PixelCanvas />
      </main>
    </>
  );
}

// page: 1775239293611

// page: 1775271616709

// page: 1775284724604

// page: 1775383429920
