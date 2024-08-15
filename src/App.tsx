import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-tertiary">
        <Header />
        <Home />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
