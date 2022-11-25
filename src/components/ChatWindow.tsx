import { useRef } from "react";
import Draggable from "react-draggable";
import { useChatsStore } from "../hooks/stores/useChatsStore";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { Filter } from "../types/Filter";
import { Message } from "../types/Message";
import ChatBubble from "./ChatBubble";

type Props = {
  messages: Message[];
  filters: Filter[];
  index: number;
};

function ChatWindow({ messages, index }: Props) {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  useAutoScroll(chatWindowRef, messages);
  const { removeChat } = useChatsStore();

  return (
    <Draggable handle=".chat-window-handler">
      <div className="chat-window-container">
        <div className="chat-window-handler text-white cursor-move bg-neutral-600 p-3 flex">
          <h1>Drag</h1>
          <div onClick={() => removeChat(index)}>X</div>
        </div>
        <div
          ref={chatWindowRef}
          className="overflow-y-scroll overflow-x-hidden h-96 w-96 bg-gray-700"
        >
          {messages.map(({ tags, message }) => (
            <ChatBubble
              key={tags.id}
              username={tags.username}
              message={message}
              color={tags.color || "black"}
            />
          ))}
        </div>
      </div>
    </Draggable>
  );
}

export default ChatWindow;
