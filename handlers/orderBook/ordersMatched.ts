import { ORDER_BOOK } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const ordersMatchedHandler: EventHandlerFor<
  typeof ORDER_BOOK,
  "OrdersMatched"
> = async (ctx) => {
};
