import { createContext, useContext } from "react";
import type { Boards } from "@/types/Types";

type BoardContextType = {
  boards: Boards[];
  setBoards: (boards: Boards[]) => void;
};

export const boardContext = createContext<BoardContextType | undefined>(undefined);

export function useBoardContext() {
  const context = useContext(boardContext);
  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider");
  }
  return context;
}
