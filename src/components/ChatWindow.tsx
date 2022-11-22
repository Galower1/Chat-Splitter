import { useRef } from "react";
import Draggable from "react-draggable";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { Message } from "../types/Message";
import ChatBubble from "./ChatBubble";

type Props = {
  messages: Message[];
};

function ChatWindow({ messages }: Props) {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  useAutoScroll(chatWindowRef, messages);

  return (
    <Draggable handle=".chat-window-handler">
      <div className="chat-window-container">
        <div className="chat-window-handler text-white cursor-move bg-neutral-600 p-3">
          Drag from here
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
