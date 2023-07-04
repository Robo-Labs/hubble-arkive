// deno-lint-ignore-file no-explicit-any
import { GraphQLError, GraphQLFieldResolver } from "../deps.ts";
import { positionModifiedEvent } from "../entities/events.ts";
import { convertMarketToId } from "../utils/market.ts";

export const hourlyMarketApyResolver: GraphQLFieldResolver<
  any,
  any,
  { market: string }
> = async (_, { market }) => {
  const id = convertMarketToId(market);
  if (id === undefined) {
    throw new GraphQLError("Invalid asset");
  }

  const now = Math.floor(new Date().getTime() / 1000);

  const res = await positionModifiedEvent.aggregate([
    {
      $match: {
        market,
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
                $gte: ["$timestamp", now - 86400],
              },
              then: { $abs: "$args.quoteAsset" },
              else: 0,
            },
          },
        },
      },
    },
  ]);

  console.log(res);
};
