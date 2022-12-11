import { useNodesStore } from "../hooks/stores/useNodesStore";

type Props = {
  id: string;
  title: string;
};

function ChatWindowDrag({ id, title }: Props) {
  const { removeNode } = useNodesStore();

  return (
    <div className="text-white cursor-move bg-neutral-600 flex justify-between h-9 items-center">
      <h1 className="pl-1">{title}</h1>
      <div
        className="cursor-pointer bg-red-900 h-full w-10 flex justify-center items-center"
        onClick={() => removeNode(id)}
      >
        X
      </div>
    </div>
  );
}

export default ChatWindowDrag;
