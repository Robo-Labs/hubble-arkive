import { formatUnits } from "../deps.ts";

export const bnToFloat = (num: bigint, decimals = 6) => {
  return parseFloat(formatUnits(num, decimals));
};

export const abs = (n: bigint) => {
  return (n < 0n ? -n : n);
};
