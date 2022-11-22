import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatsContainer from "./components/ChatsContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChatsContainer username="sodapoppin" />
    </QueryClientProvider>
  );
}

export default App;
