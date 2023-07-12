import { createEntity } from "../deps.ts";

export const charts1Minute = createEntity<{
  count: number;
  volume: number;
  open: number;
  close: number;
  high: number;
  start: number;
  end: number;
  low: number;
  market: number;
}>("Charts1Minute", {
  count: Number,
  volume: Number,
  open: Number,
  close: Number,
  high: Number,
  low: Number,
  start: { type: Number, index: true },
  end: { type: Number, index: true },
  market: { type: Number, index: true },
});
