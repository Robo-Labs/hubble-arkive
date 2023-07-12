import { ORDER_BOOK } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const orderMatchingErrorHandler: EventHandlerFor<
  typeof ORDER_BOOK,
  "OrderMatchingError"
> = async (ctx) => {
};
