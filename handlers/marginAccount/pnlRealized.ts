import { MarginAccount } from "../../abis/MarginAccount.ts";
import { EventHandlerFor } from "../../deps.ts";

export const pnlRealizedHandler: EventHandlerFor<
  typeof MarginAccount,
  "PnLRealized"
> = async (ctx) => {
};
