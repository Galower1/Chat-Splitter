import { useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactFlow, { Background, Controls } from "reactflow";
import { useChatsStore } from "../hooks/stores/useChatsStore";
import { useTmi } from "../hooks/useTmi";
import ChatWindow from "./ChatWindow";
import Loader from "./Loader";
import "reactflow/dist/style.css";

function ChatsContainer() {
  const { channelName } = useParams();
  const { messages, loading } = useTmi(channelName as string);
  const { chats } = useChatsStore();
  const nodeTypes = useMemo(() => ({ chatWindow: ChatWindow }), []);

  return (
    <div className="bg-gray-900 text-white h-screen">
      {loading ? (
        <Loader />
      ) : (
        <ReactFlow nodeTypes={nodeTypes}>
          <Background />
          <Controls />
        </ReactFlow>
      )}
    </div>
  );
}

export default ChatsContainer;
