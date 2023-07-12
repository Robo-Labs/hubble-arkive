import { INSURANCE_FUND } from "../../abis/InsuranceFund.ts";
import { EventHandlerFor } from "../../deps.ts";

export const insuranceFundEventHandler: EventHandlerFor<
  typeof INSURANCE_FUND,
  "FundsAdded" | "FundsWithdrawn"
> = async (ctx) => {};
