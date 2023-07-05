import { Manifest } from "./deps.ts";
import { CLEARING_HOUSE } from "./abis/ClearingHouse.ts";
import {
  positionModifiedHandler,
} from "./handlers/clearingHouse/positionModified.ts";
import { positionModifiedEvent } from "./entities/events.ts";
import { hourlyMarketApyResolver } from "./queries/apy.ts";
import { referralBonusAddedHandler } from "./handlers/clearingHouse/referralBonusAdded.ts";
import { fundingPaidHandler } from "./handlers/clearingHouse/fundingPaid.ts";
import { fundingRateUpdatedHandler } from "./handlers/clearingHouse/fundingRateUpdated.ts";
import { hubbleConfig } from "./config/hubble.ts";
import { ORDER_BOOK } from "./abis/OrderBook.ts";
import { liquidationOrderMatchedHandler } from "./handlers/orderBook/liquidationOrderMatched.ts";
import { orderCancelledHandler } from "./handlers/orderBook/orderCancelled.ts";
import { orderMatchingErrorHandler } from "./handlers/orderBook/orderMatchingError.ts";
import { orderPlacedHandler } from "./handlers/orderBook/orderPlaced.ts";
import { ordersMatchedHandler } from "./handlers/orderBook/ordersMatched.ts";
import { HUBBLE_REFERRAL } from "./abis/HubbleReferral.ts";
import { referrerAddedHandler } from "./handlers/hubbleReferral/referrerAdded.ts";
import { MARGIN_ACCOUNT } from "./abis/MarginAccount.ts";
import { marginEventHandler } from "./handlers/marginAccount/marginEvent.ts";
import { pnlRealizedHandler } from "./handlers/marginAccount/pnlRealized.ts";
import { marginLiquidationsHandler } from "./handlers/marginAccount/marginLiquidations.ts";
import { INSURANCE_FUND } from "./abis/InsuranceFund.ts";
import { insuranceFundEventHandler } from "./handlers/insuranceFund/insuranceFundEvent.ts";

export default new Manifest("hubble-arkive")
  .addChain("hubble", (chain) => {
    chain
      .setOptions({
        rpcUrl: hubbleConfig.rpcUrl,
        blockRange: 2047n,
      })
      .addContract(
        {
          name: "ClearingHouse",
          abi: CLEARING_HOUSE,
          eventHandlers: {
            PositionModified: positionModifiedHandler,
            PositionLiquidated: positionModifiedHandler,
            ReferralBonusAdded: referralBonusAddedHandler,
            FundingRateUpdated: fundingRateUpdatedHandler,
            FundingPaid: fundingPaidHandler,
          },
          sources: {
            [hubbleConfig.contracts.ClearingHouse]: 1n,
          },
        },
      )
      .addContract({
        name: "OrderBook",
        abi: ORDER_BOOK,
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
        abi: HUBBLE_REFERRAL,
        eventHandlers: {
          ReferrerAdded: referrerAddedHandler,
        },
      })
      .addContract({
        name: "MarginAccount",
        abi: MARGIN_ACCOUNT,
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
        abi: INSURANCE_FUND,
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
  })
  .build();
