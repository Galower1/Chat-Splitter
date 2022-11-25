import { useChatsStore } from "../hooks/stores/useChatsStore";
import { useTmi } from "../hooks/useTmi";
import ChatWindow from "./ChatWindow";

type Props = {
  username: string;
};

function ChatsContainer({ username }: Props) {
  const { messages, loading } = useTmi(username);
  const { chats, addChat } = useChatsStore();

  return (
    <div className="bg-gray-900 text-white h-screen overflow-hidden">
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex items-center justify-center">
          {chats.length
            ? chats.map((chat) => (
                <ChatWindow
                  key={chat.index}
                  index={chat.index}
                  filters={chat.filters}
                  messages={messages}
                />
              ))
            : "No Chats Loaded"}
        </div>
      )}
      <button onClick={() => addChat([])}>Add</button>
    </div>
  );
}

export default ChatsContainer;
