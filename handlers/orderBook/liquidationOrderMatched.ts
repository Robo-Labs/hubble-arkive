import { OrderBook } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const liquidationOrderMatchedHandler: EventHandlerFor<
  typeof OrderBook,
  "LiquidationOrderMatched"
> = async (ctx) => {
};
