export interface IBaseEvent {
  blockNumber: number;
  blockHash: string;
  transactionHash: string;
  transactionIndex: number;
  logIndex: number;
}

export const baseEvent = {
  blockNumber: { type: Number, index: true },
  blockHash: String,
  transactionHash: String,
  transactionIndex: Number,
  logIndex: { type: Number, index: true },
};
