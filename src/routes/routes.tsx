import Landing from "../pages/Landing";
import { createBrowserRouter } from "react-router-dom";
import Chats from "../pages/Chats";
import ErrorInQuery from "../components/ErrorInQuery";
import { channelNameLoader } from "../utils/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorInQuery />,
  },
  {
    path: ":channelName",
    element: <Chats />,
    loader: channelNameLoader,
    errorElement: <ErrorInQuery />,
  },
]);
