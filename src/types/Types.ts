export type TaskStatus = "todo" | "in-progress" | "done";

export type Task = {
  id: string;
  title: string;
  description: string;
  userName: string;
  status: TaskStatus;
  deadline: string;
};

export type Boards = {
  id: string;
  title: string;
  tasks: Task[];
};

export type BoardAction =
  | { type: "SET_BOARDS"; payload: Boards[] }
  | { type: "ADD_BOARD"; payload: Boards }
  | { type: "REMOVE_BOARD"; payload: string }
  | { type: "UPDATE_BOARD"; payload: Boards };
