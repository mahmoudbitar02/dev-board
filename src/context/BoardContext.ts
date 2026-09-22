import { createContext, useContext } from "react";
import type { Boards, BoardAction } from "@/types/Types";

type BoardContextType = {
  boards: Boards[];
  setBoards: React.Dispatch<BoardAction>;
};

export const boardContext = createContext<BoardContextType | undefined>(undefined);

export function useBoardContext() {
  const context = useContext(boardContext);
  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider");
  }
  return context;
}
