import { CONTRACT_ADDRESS } from "./config";

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
