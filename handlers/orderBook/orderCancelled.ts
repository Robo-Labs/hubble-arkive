import { ORDER_BOOK } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const orderCancelledHandler: EventHandlerFor<
  typeof ORDER_BOOK,
  "OrderCancelled"
> = async (ctx) => {
};
