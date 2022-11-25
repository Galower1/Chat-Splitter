import { Message } from "./Message";

type Filter = {
  callback: (message: Message, ...args: any[]) => boolean;
};
