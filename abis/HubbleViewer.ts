export const HUBBLE_VIEWER = [{
  "inputs": [{
    "internalType": "contract IClearingHouse",
    "name": "_clearingHouse",
    "type": "address",
  }, {
    "internalType": "contract IMarginAccount",
    "name": "_marginAccount",
    "type": "address",
  }, { "internalType": "address", "name": "_registry", "type": "address" }],
  "stateMutability": "nonpayable",
  "type": "constructor",
}, {
  "inputs": [
    { "internalType": "uint256", "name": "dToken", "type": "uint256" },
    { "internalType": "uint256", "name": "idx", "type": "uint256" },
  ],
  "name": "calcWithdrawAmounts",
  "outputs": [{
    "internalType": "uint256",
    "name": "quoteAsset",
    "type": "uint256",
  }, { "internalType": "uint256", "name": "baseAsset", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "clearingHouse",
  "outputs": [{
    "internalType": "contract IClearingHouse",
    "name": "",
    "type": "address",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "trader",
    "type": "address",
  }],
  "name": "getAccountInfo",
  "outputs": [
    { "internalType": "int256", "name": "totalCollateral", "type": "int256" },
    { "internalType": "int256", "name": "freeMargin", "type": "int256" },
    { "internalType": "int256", "name": "marginFraction", "type": "int256" },
    {
      "internalType": "uint256",
      "name": "notionalPosition",
      "type": "uint256",
    },
    { "internalType": "int256", "name": "unrealizedPnl", "type": "int256" },
    {
      "internalType": "int256",
      "name": "marginFractionLiquidation",
      "type": "int256",
    },
  ],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [
    {
      "internalType": "uint256",
      "name": "quoteAssetQuantity",
      "type": "uint256",
    },
    { "internalType": "uint256", "name": "idx", "type": "uint256" },
    { "internalType": "bool", "name": "isLong", "type": "bool" },
  ],
  "name": "getBase",
  "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [
    { "internalType": "address", "name": "trader", "type": "address" },
    { "internalType": "uint256", "name": "idx", "type": "uint256" },
  ],
  "name": "getLiquidationPrice",
  "outputs": [{
    "internalType": "uint256",
    "name": "liquidationPrice",
    "type": "uint256",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [
    { "internalType": "address", "name": "trader", "type": "address" },
    { "internalType": "uint256", "name": "idx", "type": "uint256" },
    { "internalType": "uint256", "name": "vUSD", "type": "uint256" },
    { "internalType": "bool", "name": "isRemove", "type": "bool" },
  ],
  "name": "getMakerExpectedMFAndLiquidationPrice",
  "outputs": [{
    "internalType": "int256",
    "name": "expectedMarginFraction",
    "type": "int256",
  }, {
    "internalType": "uint256",
    "name": "liquidationPrice",
    "type": "uint256",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [
    { "internalType": "address", "name": "_maker", "type": "address" },
    { "internalType": "uint256", "name": "idx", "type": "uint256" },
  ],
  "name": "getMakerLiquidity",
  "outputs": [
    { "internalType": "uint256", "name": "vAsset", "type": "uint256" },
    { "internalType": "uint256", "name": "vUSD", "type": "uint256" },
    { "internalType": "uint256", "name": "totalDeposited", "type": "uint256" },
    { "internalType": "uint256", "name": "dToken", "type": "uint256" },
    { "internalType": "uint256", "name": "unbondTime", "type": "uint256" },
    { "internalType": "uint256", "name": "unbondAmount", "type": "uint256" },
    { "internalType": "uint256", "name": "vAssetBalance", "type": "uint256" },
    { "internalType": "uint256", "name": "vUSDBalance", "type": "uint256" },
  ],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [
    { "internalType": "address", "name": "_maker", "type": "address" },
    { "internalType": "uint256", "name": "idx", "type": "uint256" },
  ],
  "name": "getMakerPositionAndUnrealizedPnl",
  "outputs": [
    { "internalType": "int256", "name": "position", "type": "int256" },
    { "internalType": "uint256", "name": "openNotional", "type": "uint256" },
    { "internalType": "int256", "name": "unrealizedPnl", "type": "int256" },
  ],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [
    { "internalType": "uint256", "name": "idx", "type": "uint256" },
    { "internalType": "uint256", "name": "inputAmount", "type": "uint256" },
    { "internalType": "bool", "name": "isBase", "type": "bool" },
    { "internalType": "bool", "name": "deposit", "type": "bool" },
  ],
  "name": "getMakerQuote",
  "outputs": [{
    "internalType": "uint256",
    "name": "fillAmount",
    "type": "uint256",
  }, { "internalType": "uint256", "name": "dToken", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address[]",
    "name": "traders",
    "type": "address[]",
  }],
  "name": "getMarginFractionAndMakerStatus",
  "outputs": [{
    "internalType": "int256[]",
    "name": "fractions",
    "type": "int256[]",
  }, { "internalType": "bool[]", "name": "isMaker", "type": "bool[]" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address[]",
    "name": "traders",
    "type": "address[]",
  }],
  "name": "getPendingFundings",
  "outputs": [{
    "internalType": "int256[][]",
    "name": "takerFundings",
    "type": "int256[][]",
  }, {
    "internalType": "int256[][]",
    "name": "makerFundings",
    "type": "int256[][]",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "int256",
    "name": "baseAssetQuantity",
    "type": "int256",
  }, { "internalType": "uint256", "name": "idx", "type": "uint256" }],
  "name": "getQuote",
  "outputs": [{
    "internalType": "uint256",
    "name": "quoteAssetQuantity",
    "type": "uint256",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [
    { "internalType": "address", "name": "trader", "type": "address" },
    { "internalType": "uint256", "name": "idx", "type": "uint256" },
    { "internalType": "int256", "name": "baseAssetQuantity", "type": "int256" },
  ],
  "name": "getTakerExpectedMFAndLiquidationPrice",
  "outputs": [{
    "internalType": "int256",
    "name": "expectedMarginFraction",
    "type": "int256",
  }, {
    "internalType": "uint256",
    "name": "quoteAssetQuantity",
    "type": "uint256",
  }, {
    "internalType": "uint256",
    "name": "liquidationPrice",
    "type": "uint256",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "maker", "type": "address" }],
  "name": "makerPositions",
  "outputs": [{
    "components": [
      { "internalType": "int256", "name": "size", "type": "int256" },
      { "internalType": "uint256", "name": "openNotional", "type": "uint256" },
      { "internalType": "int256", "name": "unrealizedPnl", "type": "int256" },
      { "internalType": "uint256", "name": "avgOpen", "type": "uint256" },
      { "internalType": "int256", "name": "funding", "type": "int256" },
    ],
    "internalType": "struct HubbleViewer.Position[]",
    "name": "positions",
    "type": "tuple[]",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "marginAccount",
  "outputs": [{
    "internalType": "contract IMarginAccount",
    "name": "",
    "type": "address",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address[]",
    "name": "traders",
    "type": "address[]",
  }],
  "name": "marginAccountLiquidatationStatus",
  "outputs": [{
    "internalType": "enum IMarginAccount.LiquidationStatus[]",
    "name": "isLiquidatable",
    "type": "uint8[]",
  }, {
    "internalType": "uint256[]",
    "name": "repayAmount",
    "type": "uint256[]",
  }, {
    "internalType": "uint256[]",
    "name": "incentivePerDollar",
    "type": "uint256[]",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "markets",
  "outputs": [{
    "components": [{
      "internalType": "address",
      "name": "amm",
      "type": "address",
    }, { "internalType": "address", "name": "underlying", "type": "address" }],
    "internalType": "struct HubbleViewer.MarketInfo[]",
    "name": "_markets",
    "type": "tuple[]",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "registry",
  "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "trader",
    "type": "address",
  }],
  "name": "userInfo",
  "outputs": [{ "internalType": "int256[]", "name": "", "type": "int256[]" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "trader",
    "type": "address",
  }],
  "name": "userPositions",
  "outputs": [{
    "components": [
      { "internalType": "int256", "name": "size", "type": "int256" },
      { "internalType": "uint256", "name": "openNotional", "type": "uint256" },
      { "internalType": "int256", "name": "unrealizedPnl", "type": "int256" },
      { "internalType": "uint256", "name": "avgOpen", "type": "uint256" },
      { "internalType": "int256", "name": "funding", "type": "int256" },
    ],
    "internalType": "struct HubbleViewer.Position[]",
    "name": "positions",
    "type": "tuple[]",
  }],
  "stateMutability": "view",
  "type": "function",
}] as const;
