import { LoaderFunction } from "react-router-dom";
import { validateUser } from "../requests/validateUser";

export const channelNameLoader: LoaderFunction = async ({ params }) => {
  const { status } = await validateUser({
    queryKey: [{}, params.channelName],
  });

  if (status === 404) {
    throw new Response("Not found", { status });
  }
};
