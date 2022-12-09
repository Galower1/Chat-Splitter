import { useAutoScroll } from "../hooks/useAutoScroll";
import { useFilters } from "../hooks/useFilters";
import { Filter } from "../types/Filter";
import { Message } from "../types/Message";
import { NodeProps } from "reactflow";
import ChatBubble from "./ChatBubble";
import ChatWindowDrag from "./ChatWindowDrag";
import ChatWindowFilters from "./ChatWindowFilters";

export interface ChatWindowProps {
  messages: Message[];
  filters: Filter[];
  index: number;
  title: string;
}

type Props = NodeProps<ChatWindowProps>;

function ChatWindow({ data: { messages, filters, title, index } }: Props) {
  const chatWindowRef = useAutoScroll(messages);
  const filteredMessages = useFilters(filters, messages);

  return (
    <div className="chat-window-container w-96">
      <ChatWindowDrag index={index} title={title} />
      <ChatWindowFilters filters={filters} />
      <div
        ref={chatWindowRef}
        className="overflow-y-scroll overflow-x-hidden bg-gray-700 h-96"
      >
        {filteredMessages.map(({ tags, message }) => (
          <ChatBubble
            key={tags.id}
            username={tags.username}
            message={message}
            color={tags.color || "black"}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatWindow;
