import { Filter } from "../types/Filter";
import { Message } from "../types/Message";

export const standardFilters: { [key: string]: Filter } = {
  isFirstMsg: ({ tags }: Message) => !!tags["first-msg"],
  isMod: ({ tags }: Message) => !!tags.mod,
  isSubbed: ({ tags }: Message) => !!tags.subscriber,
  isVip: ({ tags }: Message) => !!tags.badges?.vip,
  isSubGifter: ({ tags }: Message) => !!tags.badges?.["sub-gifter"],
};
