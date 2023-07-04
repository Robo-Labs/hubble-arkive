export const HubbleReferral = [{
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "referrer",
    "type": "address",
  }, {
    "indexed": false,
    "internalType": "string",
    "name": "referralCode",
    "type": "string",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "ReferralCodeCreated",
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
    "internalType": "address",
    "name": "referrer",
    "type": "address",
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256",
  }],
  "name": "ReferrerAdded",
  "type": "event",
}, {
  "inputs": [{
    "internalType": "string",
    "name": "referralCode",
    "type": "string",
  }],
  "name": "createReferralCode",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_referrer",
    "type": "address",
  }],
  "name": "getReferralCodeByAddress",
  "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_trader",
    "type": "address",
  }],
  "name": "getTraderRefereeInfo",
  "outputs": [{
    "internalType": "address",
    "name": "referrer",
    "type": "address",
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
  "inputs": [],
  "name": "initialize",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "string", "name": "", "type": "string" }],
  "name": "referralCodeToReferrerMap",
  "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "stateMutability": "view",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "name": "referrers",
  "outputs": [{
    "internalType": "uint256",
    "name": "createdAt",
    "type": "uint256",
  }, { "internalType": "string", "name": "referralCode", "type": "string" }],
  "stateMutability": "view",
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
    "internalType": "string",
    "name": "referralCode",
    "type": "string",
  }],
  "name": "setReferralCode",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
}, {
  "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "name": "traders",
  "outputs": [{
    "internalType": "uint256",
    "name": "createdAt",
    "type": "uint256",
  }, { "internalType": "string", "name": "referralCode", "type": "string" }],
  "stateMutability": "view",
  "type": "function",
}] as const;
