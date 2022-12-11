import { useCallback, useMemo } from "react";
import ChatWindow from "../components/ChatWindow";
import { useNodesStore } from "./stores/useNodesStore";

export function useReactFlowNodes() {
  const nodeTypes = useMemo(() => ({ chatWindow: ChatWindow }), []);
  const { nodes, setNodes } = useNodesStore();

  const onNodesChange = useCallback(setNodes, []);

  return { nodeTypes, nodes, onNodesChange };
}
