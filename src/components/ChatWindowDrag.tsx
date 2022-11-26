import { useChatsStore } from "../hooks/stores/useChatsStore";

type Props = {
  index: number;
  title: string;
};

function ChatWindowDrag({ index, title }: Props) {
  const { removeChat } = useChatsStore();

  return (
    <div className="chat-window-handler text-white cursor-move bg-neutral-600 flex justify-between h-9 items-center">
      <h1 className="pl-1">{title}</h1>
      <div
        className="cursor-pointer bg-red-900 h-full w-10 flex justify-center items-center"
        onClick={() => removeChat(index)}
      >
        X
      </div>
    </div>
  );
}

export default ChatWindowDrag;