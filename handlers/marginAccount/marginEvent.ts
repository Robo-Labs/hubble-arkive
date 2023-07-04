import { MarginAccount } from "../../abis/MarginAccount.ts";
import { EventHandlerFor } from "../../deps.ts";

export const marginEventHandler: EventHandlerFor<
  typeof MarginAccount,
  "MarginAdded" | "MarginRemoved"
> = async (ctx) => {
};
