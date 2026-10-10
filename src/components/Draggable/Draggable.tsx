import { useDraggable } from "@dnd-kit/react";
import type { Task } from "@/types/Types";
function Draggable({ task }: { task: Task }) {
  const { ref, handleRef, isDragging } = useDraggable({
    id: task.id,
  });
  return (
    <div ref={ref} className={` ${isDragging ? "opacity-50" : ""}`}>
      <div className="flex gap-3 border border-black rounded-lg m-2 p-4 bg-white">
        <div ref={handleRef} className="cursor-grab mb-2 text-black h-1">
          :::
        </div>
        <div className="flex flex-col gap-1 ">
          <h5 className="font-semibold text-sm text-black hover:underline hover:cursor-pointer ">{task.title}</h5>
          <p>{task.description}</p>
          <p>{task.userName}</p>
          <p>{task.deadline}</p>
        </div>
      </div>
    </div>
  );
}

export default Draggable;
