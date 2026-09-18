export type TaskStatus = "todo" | "in-progress" | "done";

export type taskType = {
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
  tasks: taskType[];
};
