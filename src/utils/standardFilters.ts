import { Message } from "../types/Message";

export function isFirstMsg({ tags }: Message) {
  return !!tags["first-msg"];
}

export function isMod({ tags }: Message) {
  return !!tags.mod;
}

export function isSubbed({ tags }: Message) {
  return !!tags.subscriber;
}

export function isVip({ tags }: Message) {
  return !!tags.badges?.vip;
}

export function isSubGifter({ tags }: Message) {
  return !!tags.badges?.["sub-gifter"];
}
