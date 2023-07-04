import { OrderBook } from "../../abis/OrderBook.ts";
import { EventHandlerFor } from "../../deps.ts";

export const orderPlacedHandler: EventHandlerFor<
  typeof OrderBook,
  "OrderPlaced"
> = async (ctx) => {
};
