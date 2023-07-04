import { OrderBook } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const orderCancelledHandler: EventHandlerFor<
  typeof OrderBook,
  "OrderCancelled"
> = async (ctx) => {
};
