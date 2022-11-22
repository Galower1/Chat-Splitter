import { useEffect, useState } from "react";
import tmi from "tmi.js";
import { Message } from "../types/Message";

export function useTmi(username: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = new tmi.Client({
      channels: [username],
    });

    client.connect().then(() => setLoading(false));

    client.addListener("message", (_channel, tags, message) => {
      setMessages((prev) => [...prev, { tags, message }]);
    });

    return () => {
      client.removeAllListeners();
      client.disconnect();
    };
  }, []);

  return { messages, loading };
}
