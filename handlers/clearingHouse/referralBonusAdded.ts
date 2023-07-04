import { ClearingHouse } from "../../abis/ClearingHouse.ts";
import { EventHandlerFor } from "../../deps.ts";

export const referralBonusAddedHandler: EventHandlerFor<
  typeof ClearingHouse,
  "ReferralBonusAdded"
> = async (ctx) => {};
