import Landing from "../components/Landing";
import { createBrowserRouter } from "react-router-dom";
import ChatsContainer from "../components/ChatsContainer";
import { validateUser } from "../requests/validateUser";
import ErrorInQuery from "../components/ErrorInQuery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: ":channelName",
    element: <ChatsContainer />,
    loader: async ({ params }) => {
      const { status } = await validateUser({
        queryKey: [{}, params.channelName],
      });

      if (status === 404) {
        throw new Response("Not found", { status });
      }
    },
    errorElement: <ErrorInQuery />,
  },
]);
