import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./layout/Layout";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
      staleTime: 60 * 1000
    }
  }
})

function App() {
  return <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Router />
        <Toaster/>
      </Layout>
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>
    ;
}

export default App;
