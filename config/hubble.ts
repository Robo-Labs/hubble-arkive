export const hubbleConfig = {
  "rpcUrl":
    "https://hubblenext-archive-rpc.hubble.exchange/ext/bc/iKMFgo49o4X3Pd3UWUkmPwjKom3xZz3Vo6Y1kkwL2Ce6DZaPm/rpc",
  "contracts": {
    "OrderBook": "0x0300000000000000000000000000000000000000",
    "ClearingHouse": "0x0300000000000000000000000000000000000002",
    "MarginAccount": "0x0300000000000000000000000000000000000001",
    "HubbleViewer": "0xa1e7b5ffD6FC7261f770d8A190104ED23255aFf2",
    "amms": [
      {
        "perp": "AVAX-PERP",
        "address": "0xD3575CC24dB98Bfa3C61Da7b484CF3a50a6f4fEd",
        "underlying": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
        "vamm": "0x269Cd1827fCa5c4d3c7748C45708806c026052FE",
      },
    ],
    "collateral": [
      {
        "name": "Hubble USD",
        "ticker": "hUSD",
        "decimals": "6",
        "weight": "1000000",
        "address": "0x5c6FC0AaF35A55E7a43Fff45575380bCEdb5Cbc2",
      },
      {
        "name": "Wrapped AVAX",
        "ticker": "WAVAX",
        "decimals": "18",
        "weight": "800000",
        "address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      },
      {
        "name": "Wrapped Ether",
        "ticker": "WETH.e",
        "decimals": "18",
        "weight": "800000",
        "address": "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      },
    ],
  },
  "systemParams": {
    "maintenanceMargin": "100000",
    "numCollateral": 3,
    "insuranceFundFee": "250",
    "liquidationFee": "50000",
    "fundingCap": 0.005,
    "tradingFeeDiscount": "100",
  },
  "blockConfirmations": 50,
} as const;
