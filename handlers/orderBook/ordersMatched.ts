import { OrderBook } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const ordersMatchedHandler: EventHandlerFor<
  typeof OrderBook,
  "OrdersMatched"
> = async (ctx) => {
};
