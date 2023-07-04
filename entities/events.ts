import { createEntity } from "../deps.ts";
import { baseEvent, IBaseEvent } from "../utils/entity.ts";

export const positionModifiedEvent = createEntity<
  IBaseEvent & {
    type: string;
    timestamp: number;
    trader: string;
    market: string;
    orderHash: string;
    args: {
      baseAsset: number;
      quoteAsset: number;
      realizedPnl: number;
      tradeFee: number;
      size: number;
      openNotional: number;
      executionMode: string;
    };
    info: {
      markPrice: number;
      openInterestNotional: number;
    };
  }
>(
  "PositionModifiedEvent",
  {
    ...baseEvent,
    type: String,
    timestamp: Number,
    trader: String,
    market: String,
    orderHash: String,
    args: {
      baseAsset: Number,
      quoteAsset: Number,
      realizedPnl: Number,
      tradeFee: Number,
      size: Number,
      openNotional: Number,
      executionMode: String,
    },
    info: {
      markPrice: Number,
      openInterestNotional: Number,
    },
  },
);
