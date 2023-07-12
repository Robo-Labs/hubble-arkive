import { ORDER_BOOK } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const liquidationOrderMatchedHandler: EventHandlerFor<
  typeof ORDER_BOOK,
  "LiquidationOrderMatched"
> = async (ctx) => {
};
