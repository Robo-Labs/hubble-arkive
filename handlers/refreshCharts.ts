import { BlockHandler } from "../deps.ts";
import { charts1Minute } from "../entities/chart.ts";
import { positionModifiedEvent } from "../entities/events.ts";
import { marketIds } from "../utils/market.ts";

export const refreshChartsHandler: BlockHandler = async (_ctx) => {
  const markets = marketIds;

  for (const market of markets) {
    const docs = await charts1Minute.find({ market }).sort({ start: -1 }).limit(
      1,
    );
    let start;
    if (docs.length) {
      start = docs[0].end;
    } else {
      start = 1646092800;
    }

    const agg = await positionModifiedEvent.aggregate([
      {
        $match: {
          $or: [{ type: "PositionModified", "args.executionMode": "Taker" }, {
            type: "PositionLiquidated",
          }],
          market,
          timestamp: { $gte: start },
        },
      },
      {
        $sort: { timestamp: 1 },
      },
      {
        $group: {
          _id: {
            $dateTrunc: {
              date: {
                $toDate: {
                  $toLong: {
                    $multiply: ["$timestamp", 1000],
                  },
                },
              },
              unit: "minute",
              binSize: 1,
            },
          },
          count: { $sum: 1 },
          volume: { $sum: { $abs: "$args.quoteAsset" } },
          open: { $first: "$info.markPrice" },
          close: { $last: "$info.markPrice" },
          high: { $max: "$info.markPrice" },
          low: { $min: "$info.markPrice" },
        },
      },
      {
        $addFields: {
          start: { $divide: [{ $toLong: "$_id" }, 1000] },
          end: {
            $divide: [{
              $toLong: {
                $dateAdd: {
                  startDate: "$_id",
                  unit: "minute",
                  amount: 1,
                },
              },
            }, 1000],
          },
          market,
        },
      },
      { $unset: "_id" },
    ]);

    charts1Minute.insertMany(agg);
  }
};
