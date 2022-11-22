type Props = {
  username: string;
  color: string;
  message: string;
};

function ChatBubble({ username, color, message }: Props) {
  return (
    <div className="text-white flex">
      <h3 style={{ color }}>{username}:</h3>
      <p className="ml-1">{message}</p>
    </div>
  );
}

export default ChatBubble;
