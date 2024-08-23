import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./lib/styledComponents/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/reactRouterDom/router";
import { ThemeProvider } from "styled-components";
import Theme from "./lib/styledComponents/Theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <ToastContainer autoClose={2500} theme="colored" closeButton={false} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
