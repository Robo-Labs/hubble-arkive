import { CLEARING_HOUSE } from "../../abis/ClearingHouse.ts";
import { EventHandlerFor } from "../../deps.ts";

export const fundingRateUpdatedHandler: EventHandlerFor<
  typeof CLEARING_HOUSE,
  "FundingRateUpdated"
> = async (ctx) => {};
