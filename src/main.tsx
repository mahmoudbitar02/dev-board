import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { UsernameProvider } from "./context/UserProvider";
import { BoardProvider } from "./context/BoardProvider";
import { Toaster } from "./components/ui/toast.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UsernameProvider>
      <BoardProvider>
        <App />
        <Toaster />
      </BoardProvider>
    </UsernameProvider>
  </StrictMode>,
);
