import { Filter } from "../types/Filter";
import { Message } from "../types/Message";

export const isFirstMsg: Filter = ({ tags }: Message) => {
  return !!tags["first-msg"];
};

export const isMod: Filter = ({ tags }: Message) => {
  return !!tags.mod;
};

export const isSubbed: Filter = ({ tags }: Message) => {
  return !!tags.subscriber;
};

export const isVip: Filter = ({ tags }: Message) => {
  return !!tags.badges?.vip;
};

export const isSubGifter: Filter = ({ tags }: Message) => {
  return !!tags.badges?.["sub-gifter"];
};
