import { useState, useEffect } from "react";
import { usernameContext } from "./UserContext";

export function UsernameProvider({ children }: { children: React.ReactNode }) {
  function getUsernameFromLocalStorage() {
    const savedUsername = localStorage.getItem("username");
    return savedUsername ? JSON.parse(savedUsername) : "";
  }
  const [username, setUsername] = useState(getUsernameFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);
  return <usernameContext.Provider value={{ username, setUsername }}>{children}</usernameContext.Provider>;
}
