import type { Boards, BoardAction } from "@/types/Types";

export function boardReducer(state: Boards[], action: BoardAction) {
  switch (action.type) {
    case "SET_BOARDS":
      return action.payload;
    case "ADD_BOARD":
      return [...state, action.payload];
    case "REMOVE_BOARD":
      return state.filter((board) => board.id !== action.payload);
    case "UPDATE_BOARD":
      return state.map((board) => (board.id === action.payload?.id ? action.payload : board));

    case "REMOVE_TASK":
      return state.map((board) => ({ ...board, tasks: board.tasks ? board.tasks.filter((task) => task.id !== action.payload) : [] }));
    default:
      return state;
  }
}
