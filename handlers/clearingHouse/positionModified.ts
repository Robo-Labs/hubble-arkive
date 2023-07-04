import { ClearingHouse } from "../../abis/ClearingHouse.ts";
import { OrderBook } from "../../abis/OrderBook.ts";
import {
  EventHandlerFor,
  formatUnits,
  getContract,
  match,
} from "../../deps.ts";
import { positionModifiedEvent } from "../../entities/events.ts";
import { abs, bnToFloat } from "../../utils/bignumber.ts";
import { parseEvent } from "../../utils/event.ts";

export const positionModifiedHandler: EventHandlerFor<
  typeof ClearingHouse,
  "PositionModified" | "PositionLiquidated"
> = async (ctx) => {
  const receipt = await ctx.client.getTransactionReceipt({
    hash: ctx.event.transactionHash,
  });

  const orderBook = getContract({
    abi: OrderBook,
    publicClient: ctx.client,
    address: "0xplaceholder", // @TODO(hazelnutcloud): add OrderBook address
  });

  const matchEvent = parseEvent(receipt, orderBook, [
    "OrdersMatched",
    "LiquidationOrderMatched",
  ]);

  const baseAsset = Number(formatUnits(ctx.event.args.baseAsset, 18));

  const orderHash = match(matchEvent)
    .with(
      { eventName: "OrdersMatched" },
      (res) => baseAsset > 0 ? res.args.orderHash0 : res.args.orderHash1,
    )
    .with({ eventName: "LiquidationOrderMatched" }, (res) => res.args.orderHash)
    .exhaustive();

  const executionMode = match(ctx.event)
    .with({ eventName: "PositionModified" }, (res) => {
      switch (res.args.mode) {
        case 0:
          return "Taker";
        case 1:
          return "Maker";
        case 2:
          return "Taker";
        case 3:
          return "Liquidation";
        default:
          return "Taker";
      }
    })
    .with({ eventName: "PositionLiquidated" }, () => "Liquidation")
    .exhaustive();

  const {
    blockHash,
    blockNumber,
    transactionHash,
    transactionIndex,
    logIndex,
    args,
  } = ctx.event;

  positionModifiedEvent.create({
    blockHash: blockHash,
    blockNumber: Number(blockNumber),
    transactionHash: transactionHash,
    transactionIndex: transactionIndex,
    logIndex: logIndex,
    type: ctx.eventName,
    timestamp: Number(args.timestamp),
    trader: args.trader,
    market: Number(args.idx),
    orderHash,
    args: {
      baseAsset,
      quoteAsset: bnToFloat(abs(args.baseAsset * args.price / BigInt(1e18))),
      realizedPnl: bnToFloat(args.realizedPnl),
      tradeFee: bnToFloat(args.fee),
      size: bnToFloat(args.size, 18),
      openNotional: bnToFloat(args.openNotional),
      executionMode,
    },
    info: {
      markPrice: bnToFloat(args.price),
      openInterestNotional: bnToFloat(matchEvent.args.openInterestNotional, 18),
    },
  });
};
