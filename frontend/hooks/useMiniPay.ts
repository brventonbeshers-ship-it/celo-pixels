"use client";
import { useState, useEffect, useCallback } from "react";
import { useAccount, useConnect } from "wagmi";

interface MiniPayState {
  isMiniPay: boolean;
  address: string | null;
  isConnected: boolean;
  connect: () => Promise<void>;
}

let hasAttemptedMiniPayAutoConnect = false;

export function useMiniPay(): MiniPayState {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  const connect = useCallback(async () => {
    if (!isMiniPay || isConnected) return;
    const connector = connectors.find((item) => item.id === "injected") ?? connectors[0];
    if (!connector) return;
    try {
      await connectAsync({ connector });
    } catch (error) {
      console.warn("MiniPay connection failed", error);
    }
  }, [connectAsync, connectors, isConnected, isMiniPay]);

  useEffect(() => {
    if (!isMiniPay || isConnected || hasAttemptedMiniPayAutoConnect) return;
    hasAttemptedMiniPayAutoConnect = true;
    void connect();
  }, [connect, isConnected, isMiniPay]);

  return { isMiniPay, address: address ?? null, isConnected, connect };
}

// minipay: 1775271702174

// minipay: 1775284937909

// minipay: 1775383525164

// minipay: 1775389886350

// minipay: 1775437157249

// minipay: 1775510901735

// minipay: 1775598450967

// minipay: 1775643397799

// minipay: 1775695528022

// minipay: 1775710550774

// minipay: 1775751708829

// minipay: 1775796014832

// minipay: 1775827867341

// minipay: 1775870732456

// minipay: 1775919599938

// minipay: 1775966154998

// minipay: 1776045820066

// minipay: 1776062385514

// minipay: 1776083207338

// minipay: 1776115490677

// minipay: 1776143362062

// minipay: 1776170112498

// minipay: 1776185325325

// minipay: 1776214608717

// minipay: 1776247105702

// minipay: 1776255797210

// minipay: 1776269019881

// minipay: 1776314723081

// minipay: 1776330398970

// minipay: 1776348913299

// minipay: 1776371839178

// minipay: 1776400223228

// minipay: 1776431003816

// minipay: 1776458729291

// minipay: 1776478511169

// minipay: 1776492361912

// minipay: 1776517128152

// minipay: 1776548602317

// minipay: 1776584025653

// minipay: 1776617730644

// minipay: 1776643175463

// minipay: 1776671011013

// minipay: 1776678150413

// minipay: 1776699981875

// minipay: 1776750355112

// minipay: 1776779720013

// minipay: 1776803360566

// minipay: 1776816041493

// minipay: 1776833085815

// minipay: 1776861774286

// minipay: 1776874920712

// minipay: 1776888532529

// minipay: 1776937558120

// minipay: 1777000067349

// minipay: 1777023657549

// minipay: 1777035934214

// minipay: 1777065256454

// minipay: 1777101962744

// minipay: 1777118107365

// minipay: 1777167833433

// minipay: 1777182839260

// minipay: 1777213700492

// minipay: 1777236317305
