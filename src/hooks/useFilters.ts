import { useMemo } from "react";
import { Filter } from "../types/Filter";
import { Message } from "../types/Message";

export function useFilters(filters: Filter[], messages: Message[]) {
  const filteredMessages = useMemo(
    () =>
      messages.filter((message) => filters.every((filter) => filter(message))),
    [filters, messages]
  );

  return filteredMessages;
}
