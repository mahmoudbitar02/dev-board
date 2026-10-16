import { useDraggable } from "@dnd-kit/react";
import type { Task } from "@/types/Types";
import { CircleUserRound, CalendarDays } from "lucide-react";

import DeleteDialog from "../Delete/DeleteDialog";
import CreateTask from "../CreateTask/CreateTask";

function Draggable({ task }: { task: Task }) {
  const { ref, handleRef, isDragging } = useDraggable({
    id: task.id,
  });

  return (
    <div ref={ref} className={` ${isDragging ? "opacity-50" : ""}`}>
      <div className="flex gap-3 border border-black rounded-lg m-2 p-4 bg-white relative">
        <DeleteDialog taskTitle={task.title} deleteText="Task Löschen?" id={task.id} />
        <div ref={handleRef} className="cursor-grab mb-2 text-black h-1">
          :::
        </div>

        <div className="flex flex-col gap-1 ">
          <h5 className="font-semibold text-sm text-black hover:underline hover:cursor-pointer ">
            <CreateTask taskEdit task={task} />
          </h5>
          <p>{task.description}</p>
          <div className="flex gap-1 items-center">
            {task.userName === "" ? "" : <CircleUserRound className="w-3 h-3" />}
            <p>{task.userName}</p>
          </div>
          <div className="flex gap-1 items-center">
            <CalendarDays className="w-3 h-3" />
            <p>{task.deadline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draggable;
