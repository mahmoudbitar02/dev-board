import { useEffect, useReducer } from "react";
import { boardContext } from "./BoardContext";
import { boardReducer } from "@/hooks/BoardReducer";

export function BoardProvider({ children }: { children: React.ReactNode }) {
  function getBoardsFromLocalStorage() {
    const boards = localStorage.getItem("boards");
    return boards ? JSON.parse(boards) : [];
  }

  const [boards, setBoards] = useReducer(boardReducer, [], getBoardsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  return <boardContext.Provider value={{ boards, setBoards }}>{children}</boardContext.Provider>;
}
