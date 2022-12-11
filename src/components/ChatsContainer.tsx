import { useParams } from "react-router-dom";
import ReactFlow, { Background, Controls } from "reactflow";
import { useTmi } from "../hooks/useTmi";
import { useReactFlowNodes } from "../hooks/useReactFlowNodes";
import Loader from "./Loader";
import "reactflow/dist/style.css";
import { useNodesStore } from "../hooks/stores/useNodesStore";

function ChatsContainer() {
  const { channelName } = useParams();
  const { loading } = useTmi(channelName as string);
  const { nodeTypes, nodes, onNodesChange } = useReactFlowNodes();
  const { addNode } = useNodesStore();

  return (
    <div className="bg-gray-900 text-white h-screen">
      {loading ? (
        <Loader />
      ) : (
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          onNodesChange={onNodesChange}
        >
          <Background />
          <Controls />
          <button
            className="w-28 h-28 absolute z-10"
            onClick={() => addNode({ filters: [], title: "Random Chat" })}
          >
            Add Chat
          </button>
        </ReactFlow>
      )}
    </div>
  );
}

export default ChatsContainer;
