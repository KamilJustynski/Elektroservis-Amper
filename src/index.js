import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./core/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./notfound/NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <App />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ])}
      />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
