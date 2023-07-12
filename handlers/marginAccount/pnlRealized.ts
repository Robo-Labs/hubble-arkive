import { MARGIN_ACCOUNT } from "../../abis/MarginAccount.ts";
import { EventHandlerFor } from "../../deps.ts";

export const pnlRealizedHandler: EventHandlerFor<
  typeof MARGIN_ACCOUNT,
  "PnLRealized"
> = async (ctx) => {
};
