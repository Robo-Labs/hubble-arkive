import { HubbleReferral } from "../../abis/HubbleReferral.ts";
import { EventHandlerFor } from "../../deps.ts";

export const referrerAddedHandler: EventHandlerFor<
  typeof HubbleReferral,
  "ReferrerAdded"
> = async (ctx) => {};
