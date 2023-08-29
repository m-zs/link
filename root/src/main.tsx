import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { ApiProvider, QueryProvider } from "./api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </ApiProvider>
  </React.StrictMode>
);
