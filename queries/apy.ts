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

export const hourlyMarketApyResolver: GraphQLFieldResolver<
  any,
  any,
  { market: string }
> = async (_, { market }) => {
  const id = convertMarketToId(market);
  if (id === undefined) {
    throw new GraphQLError("Invalid asset");
  }

  const now = Date.now() / 1000;

  const [doc] = await positionModifiedEvent.aggregate([
    {
      $match: {
        market: id,
        $or: [
          { type: "PositionModified" },
          { type: "PositionLiquidated" },
        ],
      },
    },
    {
      $group: {
        _id: null,
        volume: {
          $sum: {
            $cond: {
              if: {
                $gte: ["$timestamp", now - DURATION],
              },
              then: { $abs: "$args.quoteAsset" },
              else: 0,
            },
          },
        },
      },
    },
  ]);
  if (!doc || !doc.volume) return 0;
  const volume = doc.volume; // 5bps
  const fee = volume * 0.0005;

  // liquidity
  const ZEROADD = "0x" + "0".repeat(40);
  const client = createPublicClient({
    transport: http(hubbleConfig.rpcUrl),
  });
  const hubbleViewer = getContract({
    abi: HUBBLE_VIEWER,
    address: hubbleConfig.contracts.HubbleViewer,
    publicClient: client,
  });

  let vUSDBalance;
  try {
    [, , , , , , , vUSDBalance] = await hubbleViewer.read
      .getMakerLiquidity(
        [ZEROADD as `0x${string}`, BigInt(id)],
      );
  } catch (e) {
    throw new GraphQLError(e);
  }

  // // console.log({ fee, vUSDBalance: bnToFloat(vUSDBalance, 6) })
  // // assuming liquidity in the pool remained the same for duration
  let hour;
  if (vUSDBalance == 0n) {
    // should never happen ideally because FE shouldn't request the apr when amm is in ignition
    hour = 0;
  } else {
    hour = (fee * EXTRAPOLATE / (2 * bnToFloat(vUSDBalance, 6) * DURATION))
      .toFixed(2);
  }

  return hour;
};
