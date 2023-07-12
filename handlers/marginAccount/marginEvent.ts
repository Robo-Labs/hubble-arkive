import { MARGIN_ACCOUNT } from "../../abis/MarginAccount.ts";
import { EventHandlerFor } from "../../deps.ts";

export const marginEventHandler: EventHandlerFor<
  typeof MARGIN_ACCOUNT,
  "MarginAdded" | "MarginRemoved"
> = async (ctx) => {
};
