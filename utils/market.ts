import { mainnetConfig } from "../config/mainnet.ts";

const marketToId = mainnetConfig.contracts.amms.reduce((acc, amm, idx) => {
  acc[amm.perp] = idx;
  return acc;
}, {} as Record<string, number>);

export const convertMarketToId = (market: string) => {
  return marketToId[market];
};
