import Landing from "../components/Landing";
import { createBrowserRouter } from "react-router-dom";
import ChatsContainer from "../components/ChatsContainer";
import ErrorInQuery from "../components/ErrorInQuery";
import { channelNameLoader } from "../utils/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: ":channelName",
    element: <ChatsContainer />,
    loader: channelNameLoader,
    errorElement: <ErrorInQuery />,
  },
]);
