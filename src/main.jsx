import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import EntryContextProvider from "./contexts/EntryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EntryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EntryContextProvider>
  </StrictMode>
);
