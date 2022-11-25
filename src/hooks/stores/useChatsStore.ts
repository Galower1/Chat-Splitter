import create from "zustand";
import { ChatManager } from "../../types/ChatManager";
import { Filter } from "../../types/Filter";

interface ChatState {
  chats: ChatManager[];
  addChat: (filters: Filter[]) => void;
  removeChat: (index: number) => void;
}

export const useChatsStore = create<ChatState>()((set) => ({
  chats: [],
  addChat: (filters: Filter[]) =>
    set((state) => ({
      chats: [...state.chats, { index: state.chats.length, filters }],
    })),
  removeChat: (index: number) =>
    set((state) => ({
      chats: state.chats.filter((chat) => chat.index !== index),
    })),
}));
