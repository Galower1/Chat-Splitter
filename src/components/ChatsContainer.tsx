import { useParams } from "react-router-dom";
import { useChatsStore } from "../hooks/stores/useChatsStore";
import { useTmi } from "../hooks/useTmi";
import ChatWindow from "./ChatWindow";
import Loader from "./Loader";

function ChatsContainer() {
  const { channelName } = useParams();
  const { messages, loading } = useTmi(channelName as string);
  const { chats, addChat } = useChatsStore();

  return (
    <div className="bg-gray-900 text-white h-screen overflow-hidden">
      {loading ? (
        <Loader />
      ) : (
        <>
          {chats.length
            ? chats.map((chat) => (
                <ChatWindow
                  key={chat.index}
                  index={chat.index}
                  filters={chat.filters}
                  title={chat.title}
                  messages={messages}
                />
              ))
            : "No Chats Loaded"}
          <button onClick={() => addChat([], "Random Chat")}>Add</button>
        </>
      )}
    </div>
  );
}

export default ChatsContainer;
