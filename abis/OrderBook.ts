export const OrderBook = [{
  "inputs": [{
    "internalType": "address",
    "name": "_clearingHouse",
    "type": "address",
  }, {
    "internalType": "address",
    "name": "_marginAccount",
    "type": "address",
  }],
  "stateMutability": "nonpayable",
  "type": "constructor",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "uint8",
    "name": "version",
    "type": "uint8",
  }],
  "name": "Initialized",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "trader",
    "type": "address",
  }, {
    "indexed": true,
    "internalType": "bytes32",
    "name": "orderHash",
    "type": "bytes32",
  }, {
    "indexed": false,
    "internalType": "string",
    "name": "err",
    "type": "string",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "toLiquidate",
    "type": "uint256",
  }],
  "name": "LiquidationError",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "trader",
    "type": "address",
  }, {
    "indexed": true,
    "internalType": "bytes32",
    "name": "orderHash",
    "type": "bytes32",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "fillAmount",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "price",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "openInterestNotional",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "address",
    "name": "relayer",
    "type": "address",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "LiquidationOrderMatched",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "trader",
    "type": "address",
  }, {
    "indexed": true,
    "internalType": "bytes32",
    "name": "orderHash",
    "type": "bytes32",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "OrderCancelled",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "bytes32",
    "name": "orderHash",
    "type": "bytes32",
  }, {
    "indexed": false,
    "internalType": "string",
    "name": "err",
    "type": "string",
  }],
  "name": "OrderMatchingError",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "trader",
    "type": "address",
  }, {
    "indexed": true,
    "internalType": "bytes32",
    "name": "orderHash",
    "type": "bytes32",
  }, {
    "components": [
      { "internalType": "uint256", "name": "ammIndex", "type": "uint256" },
      { "internalType": "address", "name": "trader", "type": "address" },
      {
        "internalType": "int256",
        "name": "baseAssetQuantity",
        "type": "int256",
      },
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "uint256", "name": "salt", "type": "uint256" },
      { "internalType": "bool", "name": "reduceOnly", "type": "bool" },
    ],
    "indexed": false,
    "internalType": "struct IOrderBook.Order",
    "name": "order",
    "type": "tuple",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "OrderPlaced",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "bytes32",
    "name": "orderHash0",
    "type": "bytes32",
  }, {
    "indexed": true,
    "internalType": "bytes32",
    "name": "orderHash1",
    "type": "bytes32",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "fillAmount",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "price",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "openInterestNotional",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "address",
    "name": "relayer",
    "type": "address",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "OrdersMatched",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address",
  }],
  "name": "Paused",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address",
  }],
  "name": "Unpaused",
  "type": "event",
}, {
  "inputs": [],
  "name": "ORDER_TYPEHASH",
  "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "bibliophile",
  "outputs": [{
    "internalType": "contract IHubbleBibliophile",
    "name": "",
    "type": "address",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "components": [
      { "internalType": "uint256", "name": "ammIndex", "type": "uint256" },
      { "internalType": "address", "name": "trader", "type": "address" },
      {
        "internalType": "int256",
        "name": "baseAssetQuantity",
        "type": "int256",
      },
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "uint256", "name": "salt", "type": "uint256" },
      { "internalType": "bool", "name": "reduceOnly", "type": "bool" },
    ],
    "internalType": "struct IOrderBook.Order",
    "name": "order",
    "type": "tuple",
  }],
  "name": "cancelOrder",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "components": [
      { "internalType": "uint256", "name": "ammIndex", "type": "uint256" },
      { "internalType": "address", "name": "trader", "type": "address" },
      {
        "internalType": "int256",
        "name": "baseAssetQuantity",
        "type": "int256",
      },
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "uint256", "name": "salt", "type": "uint256" },
      { "internalType": "bool", "name": "reduceOnly", "type": "bool" },
    ],
    "internalType": "struct IOrderBook.Order[]",
    "name": "orders",
    "type": "tuple[]",
  }],
  "name": "cancelOrders",
  "outputs": [],
  "stateMutability": "nonpayable",
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
    "components": [
      { "internalType": "uint256", "name": "ammIndex", "type": "uint256" },
      { "internalType": "address", "name": "trader", "type": "address" },
      {
        "internalType": "int256",
        "name": "baseAssetQuantity",
        "type": "int256",
      },
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "uint256", "name": "salt", "type": "uint256" },
      { "internalType": "bool", "name": "reduceOnly", "type": "bool" },
    ],
    "internalType": "struct IOrderBook.Order[2]",
    "name": "orders",
    "type": "tuple[2]",
  }, { "internalType": "int256", "name": "fillAmount", "type": "int256" }],
  "name": "executeMatchedOrders",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [],
  "name": "getLastTradePrices",
  "outputs": [{
    "internalType": "uint256[]",
    "name": "lastTradePrices",
    "type": "uint256[]",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "components": [
      { "internalType": "uint256", "name": "ammIndex", "type": "uint256" },
      { "internalType": "address", "name": "trader", "type": "address" },
      {
        "internalType": "int256",
        "name": "baseAssetQuantity",
        "type": "int256",
      },
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "uint256", "name": "salt", "type": "uint256" },
      { "internalType": "bool", "name": "reduceOnly", "type": "bool" },
    ],
    "internalType": "struct IOrderBook.Order",
    "name": "order",
    "type": "tuple",
  }],
  "name": "getOrderHash",
  "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "int256",
    "name": "baseAssetQuantity",
    "type": "int256",
  }, { "internalType": "uint256", "name": "price", "type": "uint256" }],
  "name": "getRequiredMargin",
  "outputs": [{
    "internalType": "uint256",
    "name": "requiredMargin",
    "type": "uint256",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "governance",
  "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, {
    "internalType": "string",
    "name": "_version",
    "type": "string",
  }, { "internalType": "address", "name": "_governance", "type": "address" }],
  "name": "initialize",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "int256", "name": "minSize", "type": "int256" }],
  "name": "initializeMinSize",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "name": "isValidator",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [
    { "internalType": "address", "name": "trader", "type": "address" },
    {
      "components": [
        { "internalType": "uint256", "name": "ammIndex", "type": "uint256" },
        { "internalType": "address", "name": "trader", "type": "address" },
        {
          "internalType": "int256",
          "name": "baseAssetQuantity",
          "type": "int256",
        },
        { "internalType": "uint256", "name": "price", "type": "uint256" },
        { "internalType": "uint256", "name": "salt", "type": "uint256" },
        { "internalType": "bool", "name": "reduceOnly", "type": "bool" },
      ],
      "internalType": "struct IOrderBook.Order",
      "name": "order",
      "type": "tuple",
    },
    {
      "internalType": "uint256",
      "name": "liquidationAmount",
      "type": "uint256",
    },
  ],
  "name": "liquidateAndExecuteOrder",
  "outputs": [],
  "stateMutability": "nonpayable",
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
  "inputs": [],
  "name": "minAllowableMargin",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "name": "minSizes",
  "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
  "name": "orderInfo",
  "outputs": [
    { "internalType": "uint256", "name": "blockPlaced", "type": "uint256" },
    { "internalType": "int256", "name": "filledAmount", "type": "int256" },
    { "internalType": "uint256", "name": "reservedMargin", "type": "uint256" },
    {
      "internalType": "enum IOrderBook.OrderStatus",
      "name": "status",
      "type": "uint8",
    },
  ],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{ "internalType": "string", "name": "err", "type": "string" }],
  "name": "parseMatchingError",
  "outputs": [{
    "internalType": "bytes32",
    "name": "orderHash",
    "type": "bytes32",
  }, { "internalType": "string", "name": "reason", "type": "string" }],
  "stateMutability": "pure",
  "type": "function",
}, {
  "inputs": [],
  "name": "pause",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [],
  "name": "paused",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "components": [
      { "internalType": "uint256", "name": "ammIndex", "type": "uint256" },
      { "internalType": "address", "name": "trader", "type": "address" },
      {
        "internalType": "int256",
        "name": "baseAssetQuantity",
        "type": "int256",
      },
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "uint256", "name": "salt", "type": "uint256" },
      { "internalType": "bool", "name": "reduceOnly", "type": "bool" },
    ],
    "internalType": "struct IOrderBook.Order",
    "name": "order",
    "type": "tuple",
  }],
  "name": "placeOrder",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "components": [
      { "internalType": "uint256", "name": "ammIndex", "type": "uint256" },
      { "internalType": "address", "name": "trader", "type": "address" },
      {
        "internalType": "int256",
        "name": "baseAssetQuantity",
        "type": "int256",
      },
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "uint256", "name": "salt", "type": "uint256" },
      { "internalType": "bool", "name": "reduceOnly", "type": "bool" },
    ],
    "internalType": "struct IOrderBook.Order[]",
    "name": "orders",
    "type": "tuple[]",
  }],
  "name": "placeOrders",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "", "type": "address" }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256",
  }],
  "name": "reduceOnlyAmount",
  "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_bibliophile",
    "type": "address",
  }],
  "name": "setBibliophile",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "__governance",
    "type": "address",
  }],
  "name": "setGovernace",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "validator",
    "type": "address",
  }, { "internalType": "bool", "name": "status", "type": "bool" }],
  "name": "setValidatorStatus",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [],
  "name": "settleFunding",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [],
  "name": "takerFee",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "unpause",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "ammIndex",
    "type": "uint256",
  }, { "internalType": "int256", "name": "minSize", "type": "int256" }],
  "name": "updateMinSize",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_minAllowableMargin",
    "type": "uint256",
  }, { "internalType": "uint256", "name": "_takerFee", "type": "uint256" }],
  "name": "updateParams",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "components": [
      { "internalType": "uint256", "name": "ammIndex", "type": "uint256" },
      { "internalType": "address", "name": "trader", "type": "address" },
      {
        "internalType": "int256",
        "name": "baseAssetQuantity",
        "type": "int256",
      },
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "uint256", "name": "salt", "type": "uint256" },
      { "internalType": "bool", "name": "reduceOnly", "type": "bool" },
    ],
    "internalType": "struct IOrderBook.Order",
    "name": "order",
    "type": "tuple",
  }, { "internalType": "bytes", "name": "signature", "type": "bytes" }],
  "name": "verifySigner",
  "outputs": [{ "internalType": "address", "name": "", "type": "address" }, {
    "internalType": "bytes32",
    "name": "",
    "type": "bytes32",
  }],
  "stateMutability": "view",
  "type": "function",
}] as const;
