import { ClearingHouse } from "../../abis/ClearingHouse.ts";
import { EventHandlerFor } from "../../deps.ts";

export const fundingRateUpdatedHandler: EventHandlerFor<
  typeof ClearingHouse,
  "FundingRateUpdated"
> = async (ctx) => {};
