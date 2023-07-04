import { Manifest } from "./deps.ts";
import { ClearingHouse } from "./abis/ClearingHouse.ts";
import {
  positionModifiedHandler,
} from "./handlers/clearingHouse/positionModified.ts";
import { positionModifiedEvent } from "./entities/events.ts";
import { hourlyMarketApyResolver } from "./queries/apy.ts";
import { referralBonusAddedHandler } from "./handlers/clearingHouse/referralBonusAdded.ts";
import { fundingPaidHandler } from "./handlers/clearingHouse/fundingPaid.ts";
import { fundingRateUpdatedHandler } from "./handlers/clearingHouse/fundingRateUpdated.ts";
import { OrderBook } from "./abis/OrderBook.ts";
import { liquidationOrderMatchedHandler } from "./handlers/orderBook/liquidationOrderMatched.ts";
import { orderCancelledHandler } from "./handlers/orderBook/orderCancelled.ts";
import { orderMatchingErrorHandler } from "./handlers/orderBook/orderMatchingError.ts";
import { orderPlacedHandler } from "./handlers/orderBook/orderPlaced.ts";
import { ordersMatchedHandler } from "./handlers/orderBook/ordersMatched.ts";
import { HubbleReferral } from "./abis/HubbleReferral.ts";
import { referrerAddedHandler } from "./handlers/hubbleReferral/referrerAdded.ts";
import { MarginAccount } from "./abis/MarginAccount.ts";
import { marginEventHandler } from "./handlers/marginAccount/marginEvent.ts";
import { pnlRealizedHandler } from "./handlers/marginAccount/pnlRealized.ts";
import { marginLiquidationsHandler } from "./handlers/marginAccount/marginLiquidations.ts";
import { InsuranceFund } from "./abis/InsuranceFund.ts";
import { insuranceFundEventHandler } from "./handlers/insuranceFund/insuranceFundEvent.ts";

export default new Manifest("hubble-arkive")
  .addChain("avalanche", (chain) => {
    chain
      .setBlockRange(2047n)
      .addContract(
        {
          name: "ClearingHouse",
          abi: ClearingHouse,
          eventHandlers: {
            PositionModified: positionModifiedHandler,
            PositionLiquidated: positionModifiedHandler,
            ReferralBonusAdded: referralBonusAddedHandler,
            FundingRateUpdated: fundingRateUpdatedHandler,
            FundingPaid: fundingPaidHandler,
          },
          sources: {
            "0x4E3535964Cb5612a466d8bb25362d485452eFcEF": 31390091n,
          },
        },
      )
      .addContract({
        name: "OrderBook",
        abi: OrderBook,
        eventHandlers: {
          OrderPlaced: orderPlacedHandler,
          OrdersMatched: ordersMatchedHandler,
          OrderMatchingError: orderMatchingErrorHandler,
          LiquidationOrderMatched: liquidationOrderMatchedHandler,
          OrderCancelled: orderCancelledHandler,
        },
      })
      .addContract({
        name: "HubbleReferral",
        abi: HubbleReferral,
        eventHandlers: {
          ReferrerAdded: referrerAddedHandler,
        },
      })
      .addContract({
        name: "MarginAccount",
        abi: MarginAccount,
        eventHandlers: {
          MarginAdded: marginEventHandler,
          MarginRemoved: marginEventHandler,
          PnLRealized: pnlRealizedHandler,
          MarginAccountLiquidated: marginLiquidationsHandler,
          SettledBadDebt: marginLiquidationsHandler,
        },
      })
      .addContract({
        name: "InsuranceFund",
        abi: InsuranceFund,
        eventHandlers: {
          FundsAdded: insuranceFundEventHandler,
          FundsWithdrawn: insuranceFundEventHandler,
        },
      });
  })
  .addEntities([
    positionModifiedEvent,
  ])
  .extendSchema((schemaComposer) => {
    schemaComposer.Query.addFields({
      MarketHourlyApy: {
        type: "Float",
        args: {
          market: "String!",
        },
        resolve: hourlyMarketApyResolver,
      },
    });
    return schemaComposer;
  })
  .build();
