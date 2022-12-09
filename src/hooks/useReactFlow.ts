import { useMemo, useState } from "react";
import { Node } from "reactflow";
import ChatWindow, { ChatWindowProps } from "../components/ChatWindow";

export function useReactFlow() {
  const nodeTypes = useMemo(() => ({ chatWindow: ChatWindow }), []);
  const [nodes, setNodes] = useState<Node[]>([]);

  const addNode = (data: ChatWindowProps) => {
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
      data,
    };

    setNodes((previousNodes) => [...previousNodes, newNode]);
  };

  return { nodeTypes, addNode };
}
