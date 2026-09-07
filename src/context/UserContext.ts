import { createContext, useContext } from "react";

type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
};

export const usernameContext = createContext<UserContextType | undefined>(undefined);

export function useUsernameContext() {
  const context = useContext(usernameContext);
  if (!context) {
    throw new Error("useUsernameContext must be used within a UsernameProvider");
  }
  return context;
}
