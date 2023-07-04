import { MarginAccount } from "../../abis/MarginAccount.ts";
import { EventHandlerFor } from "../../deps.ts";

export const marginLiquidationsHandler: EventHandlerFor<
  typeof MarginAccount,
  "MarginAccountLiquidated" | "SettledBadDebt"
> = async (ctx) => {
};
