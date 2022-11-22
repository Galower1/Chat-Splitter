import { useTmi } from "../hooks/useTmi";
import ChatWindow from "./ChatWindow";

type Props = {
  username: string;
};

function ChatsContainer({ username }: Props) {
  const { messages, loading } = useTmi(username);

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center text-white">
      {loading ? "Loading..." : <ChatWindow messages={messages} />}
    </div>
  );
}

export default ChatsContainer;
