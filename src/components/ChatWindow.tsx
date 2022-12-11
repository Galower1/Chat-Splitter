import { useAutoScroll } from "../hooks/useAutoScroll";
import { useFilters } from "../hooks/useFilters";
import { Filter } from "../types/Filter";
import { NodeProps } from "reactflow";
import ChatBubble from "./ChatBubble";
import ChatWindowDrag from "./ChatWindowDrag";
import ChatWindowFilters from "./ChatWindowFilters";
import { useMessagesStore } from "../hooks/stores/useMessagesStore";

export interface ChatWindowProps {
  filters: Filter[];
  title: string;
}

type Props = NodeProps<ChatWindowProps>;

function ChatWindow({ id, data: { filters, title } }: Props) {
  const { messages } = useMessagesStore();
  const chatWindowRef = useAutoScroll(messages);
  const filteredMessages = useFilters(filters, messages);

  return (
    <div className="chat-window-container w-96">
      <ChatWindowDrag id={id} title={title} />
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
