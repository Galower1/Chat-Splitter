import { useRef } from "react";
import Draggable from "react-draggable";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { Filter } from "../types/Filter";
import { Message } from "../types/Message";
import ChatBubble from "./ChatBubble";
import ChatWindowDrag from "./ChatWindowDrag";
import ChatWindowFilters from "./ChatWindowFilters";

type Props = {
  messages: Message[];
  filters: Filter[];
  index: number;
  title: string;
};

function ChatWindow({ messages, index, title, filters }: Props) {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  useAutoScroll(chatWindowRef, messages);

  return (
    <Draggable handle=".chat-window-handler">
      <div className="chat-window-container w-96">
        <ChatWindowDrag title={title} index={index} />
        <ChatWindowFilters filters={filters} />
        <div
          ref={chatWindowRef}
          className="overflow-y-scroll overflow-x-hidden bg-gray-700 h-96"
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
