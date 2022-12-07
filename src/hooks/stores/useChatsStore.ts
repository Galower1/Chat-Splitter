import create from "zustand";
import { ChatManager } from "../../types/ChatManager";
import { Filter } from "../../types/Filter";

interface ChatState {
  chats: ChatManager[];
  addChat: (filters: Filter[], title: string) => void;
  removeChat: (index: number) => void;
}

export const useChatsStore = create<ChatState>()((set) => ({
  chats: [],
  addChat: (filters, title) =>
    set((state) => ({
      chats: [...state.chats, { index: state.chats.length, filters, title }],
    })),
  removeChat: (index) =>
    set((state) => ({
      chats: state.chats.filter((chat) => chat.index !== index),
    })),
}));
