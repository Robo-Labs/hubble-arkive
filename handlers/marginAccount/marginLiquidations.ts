import { MARGIN_ACCOUNT } from "../../abis/MarginAccount.ts";
import { EventHandlerFor } from "../../deps.ts";

export const marginLiquidationsHandler: EventHandlerFor<
  typeof MARGIN_ACCOUNT,
  "MarginAccountLiquidated" | "SettledBadDebt"
> = async (ctx) => {
};
