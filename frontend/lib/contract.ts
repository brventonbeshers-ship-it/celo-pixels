import { CONTRACT_ADDRESS, CELO_RPC } from "./config";
import {
  CeloPixelsClient,
  CELO_PIXELS_ABI as SDK_ABI,
  GRID_SIZE as SDK_GRID_SIZE,
} from "celo-pixels-sdk";
export type { PixelData, UserStats } from "celo-pixels-sdk";

const client = new CeloPixelsClient({
  contractAddress: CONTRACT_ADDRESS,
  rpcUrl: CELO_RPC,
});

export const getPixelColor = (x: number, y: number) => client.getPixel(x, y);
export const getUserPixelStats = (address: string) => client.getUserStats(address);
export const getTotalPixels = () => client.getTotalPixels();
export const getGridSize = () => client.getGridSize();

export const CELO_PIXELS_ABI = [
  {
    inputs: [
      { name: "x", type: "uint256" },
      { name: "y", type: "uint256" },
      { name: "color", type: "uint24" },
    ],
    name: "placePixel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { name: "x", type: "uint256" },
      { name: "y", type: "uint256" },
    ],
    name: "getPixel",
    outputs: [{ name: "", type: "uint24" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "user", type: "address" }],
    name: "getUserPixelCount",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPixels",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const contractConfig = {
  address: CONTRACT_ADDRESS as `0x${string}`,
  abi: CELO_PIXELS_ABI,
} as const;

// abi: 1775238599474

// abi: 1775271692786

// abi: 1775284556126

// abi: 1775383440271

// abi: 1775389881182

// abi: 1775437246897

// abi: 1775510865193

// abi: 1775598446803

// abi: 1775643311759

// abi: 1775695525827

// abi: 1775710303117

// abi: 1775751665334

// abi: 1775796027390

// abi: 1775827613475

// abi: 1775870757719

// abi: 1775919589243

// abi: 1775966200396

// abi: 1776045823247

// abi: 1776062380166

// abi: 1776083257229

// abi: 1776115274731

// abi: 1776143252794

// abi: 1776169984271

// abi: 1776185401099

// abi: 1776214497046

// abi: 1776247032593

// abi: 1776255741522

// abi: 1776269092325

// abi: 1776315003867

// abi: 1776330404169

// abi: 1776348740961

// abi: 1776400220042

// abi: 1776431040399

// abi: 1776458739001

// abi: 1776478580387

// abi: 1776492529997

// abi: 1776516916954

// abi: 1776548349742

// abi: 1776584133194

// abi: 1776617808887

// abi: 1776643177719

// abi: 1776670805301
