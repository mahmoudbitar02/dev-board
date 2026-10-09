import type { Boards, Columns } from "@/types/Types";
import CreateTask from "../CreateTask/CreateTask";
import Draggable from "../Draggable/Draggable";
import { DragDropProvider } from "@dnd-kit/react";
import Droppable from "../Droppable/Droppable";
import { useBoardContext } from "@/context/BoardContext";

const COLUMNS: Columns[] = [
  { id: "todo", title: "Todo" },
  { id: "in-progress", title: "in Progress" },
  { id: "done", title: "Done" },
];

type TasksProps = {
  currentBoard: Boards;
};

function Tasks({ currentBoard }: TasksProps) {
  const { setBoards } = useBoardContext();
  return (
    <div className="flex flex-wrap gap-4  justify-start items-stretch">
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled || event.operation.target === undefined) return;
          const { source, target } = event.operation;
          console.log("Drag ended from", source?.id, "to", target?.id);
          const taskId = source?.id;
          const newStatus = target?.id as "todo" | "in-progress" | "done";
          const updatedTask = currentBoard.tasks.find((task) => task.id === taskId);
          if (updatedTask && newStatus) {
            setBoards({
              type: "UPDATE_BOARD",
              payload: {
                ...currentBoard,
                tasks: updatedTask
                  ? currentBoard.tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task))
                  : currentBoard.tasks,
              },
            });
            console.log("Updated task:", updatedTask);
            console.log("New status:", newStatus);
          }
        }}
      >
        {COLUMNS.map((column) => {
          const tasks = currentBoard?.tasks.filter((task) => task.status === column.id);

          return (
            <Droppable id={column.id} key={column.id}>
              <div className="card border border-black rounded-lg flex flex-col min-h-40 w-72 bg-gray-50 ">
                <div className="flex flex-col items-center justify-between">
                  <div className="  border-black border-b w-full flex justify-between items-center py-3 px-4">
                    <div className="flex gap-2 items-center">
                      <h5 className="font-semibold text-sm">{column.title}</h5>
                      <span className="text-muted-foreground text-sm">{tasks?.length}</span>
                    </div>
                    <CreateTask currentBoard={currentBoard} column={column} />
                  </div>

                  <div className="text-muted-foreground text-xs">
                    {tasks?.length === 0 ? (
                      <div className="text-muted-foreground text-xs text-center py-4">Keine Tasks vorhanden</div>
                    ) : (
                      tasks?.map((task) => <Draggable task={task} key={task.id} />)
                    )}
                  </div>
                </div>
              </div>
            </Droppable>
          );
        })}
      </DragDropProvider>
    </div>
  );
}

export default Tasks;
