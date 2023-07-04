export const InsuranceFund = [{
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address",
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "spender",
    "type": "address",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256",
  }],
  "name": "Approval",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "BadDebtAccumulated",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "insurer",
    "type": "address",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "FundsAdded",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "insurer",
    "type": "address",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "FundsWithdrawn",
  "type": "event",
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
    "name": "from",
    "type": "address",
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256",
  }],
  "name": "Transfer",
  "type": "event",
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "trader",
    "type": "address",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "unbondAmount",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "unbondTime",
    "type": "uint256",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "Unbonded",
  "type": "event",
}, {
  "inputs": [
    { "internalType": "address", "name": "owner", "type": "address" },
    { "internalType": "address", "name": "spender", "type": "address" },
  ],
  "name": "allowance",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address",
  }, { "internalType": "uint256", "name": "amount", "type": "uint256" }],
  "name": "approve",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [],
  "name": "auctionDuration",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "name": "auctions",
  "outputs": [
    { "internalType": "uint256", "name": "startPrice", "type": "uint256" },
    { "internalType": "uint256", "name": "startedAt", "type": "uint256" },
    { "internalType": "uint256", "name": "expiryTime", "type": "uint256" },
  ],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "balance",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "account",
    "type": "address",
  }],
  "name": "balanceOf",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
  ],
  "name": "buyCollateralFromAuction",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
  ],
  "name": "calcVusdAmountForAuction",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "decimals",
  "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
  "stateMutability": "pure",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address",
  }, {
    "internalType": "uint256",
    "name": "subtractedValue",
    "type": "uint256",
  }],
  "name": "decreaseAllowance",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256",
  }],
  "name": "deposit",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256",
  }],
  "name": "depositFor",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "token", "type": "address" }],
  "name": "getAuctionPrice",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "governance",
  "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address",
  }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }],
  "name": "increaseAllowance",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_governance",
    "type": "address",
  }],
  "name": "initialize",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "token", "type": "address" }],
  "name": "isAuctionOngoing",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "marginAccount",
  "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "marginAccountHelper",
  "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "name",
  "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "oracle",
  "outputs": [{
    "internalType": "contract IOracle",
    "name": "",
    "type": "address",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "pendingObligation",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "pricePerShare",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256",
  }],
  "name": "seizeBadDebt",
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
  "inputs": [],
  "name": "settlePendingObligation",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "token", "type": "address" }],
  "name": "startAuction",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [],
  "name": "startPriceMultiplier",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "symbol",
  "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_registry",
    "type": "address",
  }],
  "name": "syncDeps",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256",
  }],
  "name": "transfer",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, {
    "internalType": "address",
    "name": "to",
    "type": "address",
  }, { "internalType": "uint256", "name": "amount", "type": "uint256" }],
  "name": "transferFrom",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "name": "unbond",
  "outputs": [{
    "internalType": "uint256",
    "name": "shares",
    "type": "uint256",
  }, { "internalType": "uint256", "name": "unbondTime", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "unbondPeriod",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [],
  "name": "unbondRoundOff",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "shares",
    "type": "uint256",
  }],
  "name": "unbondShares",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [],
  "name": "vusd",
  "outputs": [{
    "internalType": "contract IERC20",
    "name": "",
    "type": "address",
  }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "shares",
    "type": "uint256",
  }],
  "name": "withdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, {
    "internalType": "uint256",
    "name": "shares",
    "type": "uint256",
  }],
  "name": "withdrawFor",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [],
  "name": "withdrawPeriod",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "stateMutability": "view",
  "type": "function",
}] as const;
