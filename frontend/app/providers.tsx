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

// providers: 1776348857000

// providers: 1776372045960

// providers: 1776400211663

// providers: 1776431103786

// providers: 1776458907802

// providers: 1776478347036

// providers: 1776492356652

// providers: 1776516963293

// providers: 1776548600087

// providers: 1776583885449

// providers: 1776617923688

// providers: 1776643142081

// providers: 1776671093039

// providers: 1776678229553

// providers: 1776700091116

// providers: 1776750405371

// providers: 1776779667126

// providers: 1776803226863

// providers: 1776816256153

// providers: 1776832949195

// providers: 1776861533973

// providers: 1776874969779

// providers: 1776888530287

// providers: 1776937560353

// providers: 1776961091798

// providers: 1777000209915

// providers: 1777023545587

// providers: 1777035994391

// providers: 1777065286730

// providers: 1777102164846

// providers: 1777118040441

// providers: 1777167950728

// providers: 1777182669517

// providers: 1777193143047

// providers: 1777236212264
