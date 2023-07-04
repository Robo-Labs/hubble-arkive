export interface IBaseEvent {
  blockNumber: number;
  blockHash: string;
  transactionHash: string;
  transactionIndex: number;
  logIndex: number;
}

export const baseEvent = {
  blockNumber: Number,
  blockHash: String,
  transactionHash: String,
  transactionIndex: Number,
  logIndex: Number,
};
