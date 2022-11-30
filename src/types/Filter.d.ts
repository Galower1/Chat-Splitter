import { Message } from "./Message";

type Filter = (message: Message, ...args: any[]) => boolean;
