import {
  Abi,
  decodeEventLog,
  DecodeEventLogReturnType,
  encodeEventTopics,
  ExtractAbiEventNames,
  GetContractReturnType,
  TransactionReceipt,
} from "../deps.ts";

export const parseEvent = <
  TAbi extends Abi,
  TEventNames extends ExtractAbiEventNames<TAbi>,
>(
  receipt: TransactionReceipt,
  emitter: GetContractReturnType<TAbi>,
  names: TEventNames[],
): DecodeEventLogReturnType<TAbi, TEventNames> => {
  for (const name of names) {
    const topic =
      // deno-lint-ignore no-explicit-any
      encodeEventTopics({ abi: emitter.abi, eventName: name as any })[0];
    const log = receipt.logs
      .sort((a, b) => (b.logIndex ?? 0) - (a.logIndex ?? 0))
      .find((log) =>
        log.address === emitter.address && log.topics[0] === topic
      );
    if (!log) {
      continue;
    }
    const event = decodeEventLog({
      abi: emitter.abi,
      // deno-lint-ignore no-explicit-any
      eventName: name as any,
      topics: log.topics,
      data: log.data,
    });
    return event;
  }

  throw new Error(
    `Events ${
      names.join(", ")
    } from ${emitter.address} not found in receipt ${receipt}`,
  );
};
