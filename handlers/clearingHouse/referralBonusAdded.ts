import { CLEARING_HOUSE } from "../../abis/ClearingHouse.ts";
import { EventHandlerFor } from "../../deps.ts";

export const referralBonusAddedHandler: EventHandlerFor<
  typeof CLEARING_HOUSE,
  "ReferralBonusAdded"
> = async (ctx) => {};
