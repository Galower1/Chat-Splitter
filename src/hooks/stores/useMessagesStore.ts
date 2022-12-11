import create from "zustand";
import { Message } from "../../types/Message";

interface MessagesState {
  messages: Message[];
  addMessage: (newMessage: Message) => void;
}

export const useMessagesStore = create<MessagesState>()((set) => ({
  messages: [],
  addMessage: (newMessage) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
}));
