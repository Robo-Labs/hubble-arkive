// deno-lint-ignore-file no-explicit-any
import { HUBBLE_VIEWER } from "../abis/HubbleViewer.ts";
import { hubbleConfig } from "../config/hubble.ts";
import {
  createPublicClient,
  getContract,
  GraphQLError,
  GraphQLFieldResolver,
  http,
} from "../deps.ts";
import { positionModifiedEvent } from "../entities/events.ts";
import { bnToFloat } from "../utils/bignumber.ts";
import { convertMarketToId } from "../utils/market.ts";

const DURATION = 86400 * 50; // 1 day
const EXTRAPOLATE = 86400 * 365 * 100;
const NUM_RECENT_TRADES = 15;

export const marketResolver: GraphQLFieldResolver<
  any,
  any,
  { market: string }
> = async (_, { market }) => {
  const marketId = convertMarketToId(market);
  if (marketId === undefined) {
    throw new GraphQLError("Invalid asset");
  }

  const now = Date.now() / 1000;

  const posModifiedDocs = await positionModifiedEvent
    .find({
      market: marketId,
      $or: [{
        type: "PositionModified",
        "args.executionMode": "Taker",
      }, {
        type: "PositionLiquidated",
      }],
    })
    .sort({ blockNumber: -1, logIndex: -1 })
    .limit(NUM_RECENT_TRADES);

  const trades = [];

  for (const doc of posModifiedDocs) {
    const {
      timestamp,
      transactionHash,
      args: { baseAsset },
      info: { markPrice },
    } = doc;
    trades.push({
      timestamp,
      side: baseAsset > 0 ? "Buy" : "Sell",
      size: Math.abs(baseAsset),
      price: markPrice.toFixed(2),
      hash: transactionHash,
    });
  }
};

const getMarketStats = async (marketId: number) => {
};
