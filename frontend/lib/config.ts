export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0xC12193662bcb75eeCc3C5768bE487cb385aC42EF";
export const CELO_RPC = "https://forno.celo.org";
export const GRID_SIZE = 50;

export function shortenAddress(addr: string, head = 6, tail = 4): string {
  if (!addr) return "";
  return `${addr.slice(0, head)}...${addr.slice(-tail)}`;
}

// cfg: 1775238633817

// cfg: 1775272219230

// cfg: 1775284404759

// cfg: 1775383479863

// cfg: 1775389811274

// cfg: 1775437287281

// cfg: 1775510735196

// cfg: 1775598520381

// cfg: 1775643460926
