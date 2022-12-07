import { useParams } from "react-router-dom";
import { useChatsStore } from "../hooks/stores/useChatsStore";
import { useTmi } from "../hooks/useTmi";
import ScrollContainer from "react-indiana-drag-scroll";
import ChatWindow from "./ChatWindow";
import Loader from "./Loader";

function ChatsContainer() {
  const { channelName } = useParams();
  const { messages, loading } = useTmi(channelName as string);
  const { chats, addChat } = useChatsStore();

  return (
    <ScrollContainer
      className="bg-gray-900 text-white h-screen"
      vertical
      horizontal
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {chats.length
            ? chats.map((chat) => (
                <ChatWindow key={chat.index} {...{ ...chat, messages }} />
              ))
            : "No Chats Loaded"}
          <button onClick={() => addChat([], "Random Chat")}>Add</button>
        </>
      )}
    </ScrollContainer>
  );
}

export default ChatsContainer;
