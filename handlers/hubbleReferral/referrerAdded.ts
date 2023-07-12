import { HUBBLE_REFERRAL } from "../../abis/HubbleReferral.ts";
import { EventHandlerFor } from "../../deps.ts";

export const referrerAddedHandler: EventHandlerFor<
  typeof HUBBLE_REFERRAL,
  "ReferrerAdded"
> = async (ctx) => {};
