import create from "zustand";
import { applyNodeChanges, Node, NodeChange } from "reactflow";
import { ChatWindowProps } from "../../components/ChatWindow";

interface NodeState {
  nodes: Node<ChatWindowProps>[];
  setNodes: (changes: NodeChange[]) => void;
  addNode: (params: ChatWindowProps) => void;
  removeNode: (id: string) => void;
}

export const useNodesStore = create<NodeState>()((set) => ({
  nodes: [],
  setNodes: (changes) => {
    set((state) => ({ nodes: applyNodeChanges(changes, state.nodes) }));
  },
  addNode: (params) =>
    set((state) => {
      const id = window.crypto.randomUUID();
      const type = "chatWindow";
      const position = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      const newNode = {
        id,
        type,
        position,
        data: params,
      };

      return { nodes: [...state.nodes, newNode] };
    }),
  removeNode: (id) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== id),
    })),
}));
