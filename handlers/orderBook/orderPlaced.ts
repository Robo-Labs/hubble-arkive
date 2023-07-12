import { ORDER_BOOK } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const orderPlacedHandler: EventHandlerFor<
  typeof ORDER_BOOK,
  "OrderPlaced"
> = async (ctx) => {
};
