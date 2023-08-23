import { QueryClient, QueryClientProvider } from "react-query";
import MainContainer from "./Reports/MainContainer";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MainContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
