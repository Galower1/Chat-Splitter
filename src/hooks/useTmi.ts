import { useEffect, useState } from "react";
import tmi from "tmi.js";
import { useMessagesStore } from "./stores/useMessagesStore";

export function useTmi(username: string) {
  const [loading, setLoading] = useState(true);
  const { addMessage } = useMessagesStore();

  useEffect(() => {
    const client = new tmi.Client({
      channels: [username],
    });

    client.connect().then(() => setLoading(false));

    client.addListener("message", (_channel, tags, message) => {
      addMessage({ tags, message });
    });

    return () => {
      client.removeAllListeners();
      client.disconnect();
    };
  }, []);

  return { loading };
}
