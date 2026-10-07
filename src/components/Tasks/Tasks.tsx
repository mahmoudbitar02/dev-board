import type { Boards, Columns } from "@/types/Types";
import CreateTask from "../CreateTask/CreateTask";
import Draggable from "../Draggable/Draggable";

const COLUMNS: Columns[] = [
  { id: "todo", title: "Todo" },
  { id: "in-progress", title: "in Progress" },
  { id: "done", title: "Done" },
];

type TasksProps = {
  currentBoard: Boards;
};

function Tasks({ currentBoard }: TasksProps) {
  return (
    <div className="flex flex-wrap gap-4  justify-start items-stretch">
      {COLUMNS.map((column) => {
        const tasks = currentBoard?.tasks.filter((task) => task.status === column.id);

        return (
          <div key={column.id} className="card border border-black rounded-lg flex flex-col min-h-40 w-72 bg-gray-50 ">
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
        );
      })}
    </div>
  );
}

export default Tasks;
