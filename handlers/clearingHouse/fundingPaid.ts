import { CLEARING_HOUSE } from "../../abis/ClearingHouse.ts";
import { EventHandlerFor } from "../../deps.ts";

export const fundingPaidHandler: EventHandlerFor<
  typeof CLEARING_HOUSE,
  "FundingPaid"
> = async (ctx) => {};
