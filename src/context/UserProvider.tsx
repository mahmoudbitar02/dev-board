import { useState } from "react";
import { usernameContext } from "./UserContext";

export function UsernameProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState("");
  return <usernameContext.Provider value={{ username, setUsername }}>{children}</usernameContext.Provider>;
}
