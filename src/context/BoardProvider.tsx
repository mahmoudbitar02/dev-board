import { useState, useEffect } from "react";
import type { Boards } from "@/types/Types";
import { boardContext } from "./BoardContext";

export function BoardProvider({ children }: { children: React.ReactNode }) {
  function getBoardsFromLocalStorage() {
    const boards = localStorage.getItem("boards");
    return boards ? JSON.parse(boards) : [];
  }

  const [boards, setBoards] = useState<Boards[]>(getBoardsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  return <boardContext.Provider value={{ boards, setBoards }}>{children}</boardContext.Provider>;
}
