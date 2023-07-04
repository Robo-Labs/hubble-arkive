import { InsuranceFund } from "../../abis/InsuranceFund.ts";
import { EventHandlerFor } from "../../deps.ts";

export const insuranceFundEventHandler: EventHandlerFor<
  typeof InsuranceFund,
  "FundsAdded" | "FundsWithdrawn"
> = async (ctx) => {};
