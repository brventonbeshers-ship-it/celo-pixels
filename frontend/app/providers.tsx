"use client";

import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/wagmi";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#8B5CF6",
            accentColorForeground: "white",
            borderRadius: "large",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// providers: 1775238807309

// providers: 1775271820115

// providers: 1775284889448

// providers: 1775383515969

// providers: 1775389993107

// providers: 1775437166433

// providers: 1775510785224

// providers: 1775598401828

// providers: 1775643442006

// providers: 1775695395169

// providers: 1775710519498

// providers: 1775751492549

// providers: 1775796055478

// providers: 1775827814278

// providers: 1775870929707

// providers: 1775919662485

// providers: 1775966042832

// providers: 1776045923298

// providers: 1776062377831

// providers: 1776083261423

// providers: 1776115299993

// providers: 1776143160210

// providers: 1776170241056

// providers: 1776185384394

// providers: 1776214491868

// providers: 1776247233808

// providers: 1776255803587

// providers: 1776268983178

// providers: 1776314877978

// providers: 1776330388373
