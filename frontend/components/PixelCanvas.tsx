"use client";

import { useState, useRef, useEffect } from "react";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { encodeFunctionData } from "viem";
import { contractConfig } from "@/lib/contract";
import { GRID_SIZE } from "@/lib/config";
import { useMiniPay } from "@/hooks/useMiniPay";
import { sendMiniPayTransaction } from "@/lib/minipayTx";

const COLORS = [
  "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF",
  "#FFFF00", "#FF00FF", "#00FFFF", "#FF8800", "#8800FF",
  "#FF0088", "#00FF88", "#0088FF", "#88FF00", "#FF4444",
  "#44FF44",
];

function hexToUint24(hex: string): number {
  return parseInt(hex.replace("#", ""), 16);
}

export default function PixelCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { address, isConnected } = useAccount();
  const { isMiniPay } = useMiniPay();
  const [selectedColor, setSelectedColor] = useState(COLORS[2]);
  const [hoveredPixel, setHoveredPixel] = useState<{ x: number; y: number } | null>(null);
  const [txError, setTxError] = useState<string | null>(null);
  const [miniPayHash, setMiniPayHash] = useState<`0x${string}`>();

  const { sendTransactionAsync, data: hash, isPending } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: miniPayHash ?? hash });

  const pixelSize = 10;
  const canvasSize = GRID_SIZE * pixelSize;

  useEffect(() => {
    drawGrid();
  }, []);

  useEffect(() => {
    if (isSuccess) drawGrid();
  }, [isSuccess]);

  function drawGrid() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    ctx.strokeStyle = "rgba(139, 92, 246, 0.1)";
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * pixelSize, 0);
      ctx.lineTo(i * pixelSize, canvasSize);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * pixelSize);
      ctx.lineTo(canvasSize, i * pixelSize);
      ctx.stroke();
    }
  }

  async function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!isConnected || !address || isPending || isConfirming) return;
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / pixelSize);
    const y = Math.floor((e.clientY - rect.top) / pixelSize);
    if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return;

    const color = hexToUint24(selectedColor);

    // Draw immediately for feedback
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.fillStyle = selectedColor;
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);

    setTxError(null);
    setMiniPayHash(undefined);
    try {
      const data = encodeFunctionData({
        abi: contractConfig.abi,
        functionName: "placePixel",
        args: [BigInt(x), BigInt(y), color],
      });

      if (isMiniPay) {
        const nextHash = await sendMiniPayTransaction(contractConfig.address, data);
        setMiniPayHash(nextHash);
      } else {
        await sendTransactionAsync({
          account: address,
          to: contractConfig.address,
          data,
        } as Parameters<typeof sendTransactionAsync>[0]);
      }
    } catch (error) {
      setTxError(error instanceof Error ? error.message.slice(0, 180) : "Transaction rejected or failed.");
      drawGrid();
    }
  }

  function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / pixelSize);
    const y = Math.floor((e.clientY - rect.top) / pixelSize);
    if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
      setHoveredPixel({ x, y });
    } else {
      setHoveredPixel(null);
    }
  }

  const busy = isPending || isConfirming;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="glass-card p-4">
        <canvas
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          className={`cursor-crosshair ${busy ? "opacity-50 pointer-events-none" : ""}`}
        />
      </div>

      {/* Color picker */}
      <div className="glass-card p-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-lg border-2 transition-transform hover:scale-110 ${
                selectedColor === color ? "border-white scale-110" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Status */}
      <div className="text-sm text-gray-400">
        {hoveredPixel && `(${hoveredPixel.x}, ${hoveredPixel.y})`}
        {busy && " — Placing pixel..."}
        {!isConnected && " — Connect wallet to place pixels"}
      </div>
      {txError && <p className="max-w-md text-center text-sm text-red-400">{txError}</p>}
    </div>
  );
}

// canvas: 1775238829483

// canvas: 1775272249601

// canvas: 1775284427104

// canvas: 1775383374745

// canvas: 1775389815454

// canvas: 1775437241725

// canvas: 1775510869545

// canvas: 1775598487936

// canvas: 1775643343162

// canvas: 1775695446727

// canvas: 1775710387207

// canvas: 1775751628001

// canvas: 1775796102685

// canvas: 1775827670262

// canvas: 1775870878165

// canvas: 1775919593565

// canvas: 1775966008661

// canvas: 1776045860637

// canvas: 1776062274263

// canvas: 1776083200960

// canvas: 1776115344311

// canvas: 1776143314822

// canvas: 1776170180484

// canvas: 1776185375839

// canvas: 1776214665414

// canvas: 1776247012425

// canvas: 1776255749902

// canvas: 1776269109106

// canvas: 1776315044483

// canvas: 1776330475135

// canvas: 1776349034704

// canvas: 1776372037583

// canvas: 1776400325910

// canvas: 1776431171692

// canvas: 1776459002739

// canvas: 1776478342792

// canvas: 1776492416574

// canvas: 1776516900759
