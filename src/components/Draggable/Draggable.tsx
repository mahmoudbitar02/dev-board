import { useDraggable } from "@dnd-kit/react";
import type { Task } from "@/types/Types";
import { CircleUserRound, CalendarDays, Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { useBoardContext } from "@/context/BoardContext";

function Draggable({ task }: { task: Task }) {
  const { setBoards } = useBoardContext();
  const { ref, handleRef, isDragging } = useDraggable({
    id: task.id,
  });

  function handleDeleteTask(id: string) {
    console.log(" from draggable" + id);
    setBoards({ type: "REMOVE_TASK", payload: id });
  }
  return (
    <div ref={ref} className={` ${isDragging ? "opacity-50" : ""}`}>
      <div className="flex gap-3 border border-black rounded-lg m-2 p-4 bg-white relative">
        <Button
          onClick={() => handleDeleteTask(task.id)}
          className="bg-transparent p-2 text-black hover:bg-white hover:cursor-pointer group absolute right-2 top-3"
        >
          <Trash2Icon className="w-3 h-3 group-hover:text-red-500" />
        </Button>
        <div ref={handleRef} className="cursor-grab mb-2 text-black h-1">
          :::
        </div>

        <div className="flex flex-col gap-1 ">
          <h5 className="font-semibold text-sm text-black hover:underline hover:cursor-pointer ">{task.title}</h5>
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
