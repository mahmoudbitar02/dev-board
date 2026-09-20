import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { UsernameProvider } from "./context/UserProvider";
import { BoardProvider } from "./context/BoardProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UsernameProvider>
      <BoardProvider>
        <App />
      </BoardProvider>
    </UsernameProvider>
  </StrictMode>,
);
