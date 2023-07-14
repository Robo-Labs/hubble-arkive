import { Manifest } from "./deps.ts";
import { CLEARING_HOUSE } from "./abis/ClearingHouse.ts";
import {
  positionModifiedHandler,
} from "./handlers/clearingHouse/positionModified.ts";
import { positionModifiedEvent } from "./entities/events.ts";
import { hubbleConfig } from "./config/hubble.ts";
import { refreshChartsHandler } from "./handlers/refreshCharts.ts";
import { charts1Minute } from "./entities/chart.ts";

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
          },
          sources: {
            [hubbleConfig.contracts.ClearingHouse]: 1n,
          },
        },
      )
      .addBlockHandler({
        blockInterval: 150,
        handler: refreshChartsHandler,
        startBlockHeight: 150n,
      });
  })
  .addEntities([
    positionModifiedEvent,
    charts1Minute,
  ])
  .build();
