"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useMiniPay } from "@/hooks/useMiniPay";

export default function Header() {
  const { isMiniPay, isConnected, connect } = useMiniPay();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-dark/80 border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Celo Pixels
        </h1>
        {isMiniPay ? (
          !isConnected && (
            <button
              type="button"
              onClick={() => void connect()}
              className="rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Connect MiniPay
            </button>
          )
        ) : (
          <ConnectButton />
        )}
      </div>
    </header>
  );
}

// header: 1775238957435

// header: 1775271849826

// header: 1775284851218

// header: 1775383555122

// header: 1775389894553

// header: 1775437200986

// header: 1775510738372

// header: 1775598480375

// header: 1775643457739

// header: 1775695403541

// header: 1775710315628

// header: 1775751489377

// header: 1775796183224

// header: 1775827784399

// header: 1775870889703

// header: 1775919681375

// header: 1775966092394

// header: 1776045807376

// header: 1776062322283

// header: 1776083129718

// header: 1776115477749

// header: 1776143086672

// header: 1776170110090

// header: 1776185329507

// header: 1776214504379

// header: 1776247240415

// header: 1776255664960

// header: 1776268967379

// header: 1776314861047

// header: 1776330457349

// header: 1776348921640

// header: 1776371975336

// header: 1776400453783

// header: 1776431085900

// header: 1776458680447

// header: 1776478520899

// header: 1776492427560

// header: 1776517070297

// header: 1776548573719
