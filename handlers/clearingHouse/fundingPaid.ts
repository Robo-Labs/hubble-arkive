import { ClearingHouse } from "../../abis/ClearingHouse.ts";
import { EventHandlerFor } from "../../deps.ts";

export const fundingPaidHandler: EventHandlerFor<
  typeof ClearingHouse,
  "FundingPaid"
> = async (ctx) => {};
