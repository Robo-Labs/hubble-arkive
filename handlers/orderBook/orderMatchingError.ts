import { OrderBook } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const orderMatchingErrorHandler: EventHandlerFor<
  typeof OrderBook,
  "OrderMatchingError"
> = async (ctx) => {
};
