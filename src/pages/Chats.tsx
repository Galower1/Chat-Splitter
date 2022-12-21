import { useParams } from "react-router-dom";
import ReactFlow, { Background, Controls } from "reactflow";
import { useTmi } from "../hooks/useTmi";
import { useReactFlowNodes } from "../hooks/useReactFlowNodes";
import Loader from "../components/Loader";
import "reactflow/dist/style.css";
import ModifyChatForm from "../components/ModifyChatForm";

function Chats() {
  const { channelName } = useParams();
  const { loading } = useTmi(channelName as string);
  const { nodeTypes, nodes, onNodesChange } = useReactFlowNodes();

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
          <ModifyChatForm />
        </ReactFlow>
      )}
    </div>
  );
}

export default Chats;
