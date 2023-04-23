import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { defaultTheme } from "theme";
import { store } from "store";
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <CssBaseline />
  </ThemeProvider>
);
