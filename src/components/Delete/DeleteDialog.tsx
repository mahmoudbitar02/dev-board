import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useBoardContext } from "@/context/BoardContext";
import MyButton from "../MyButton/MyButton";

import { showToast } from "@/Utils/utils";

function DeleteDialog({ id, deleteText, taskTitle }: { id: string; deleteText: string; taskTitle?: string }) {
  const { boards, setBoards } = useBoardContext();
  const [open, setOpen] = useState(false);

  function handleDeleteTask(id: string) {
    if (id.startsWith("board")) {
      const deletedBoard = boards.find((board) => id === board.id);

      if (deletedBoard) {
        setBoards({ type: "REMOVE_BOARD", payload: id });
        showToast("error", `Board "${deletedBoard.title}" wurde gelöscht`);
      }
    } else {
      setBoards({ type: "REMOVE_TASK", payload: id });
      showToast("error", `Task "${taskTitle}" wurde gelöscht`);
    }
  }
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button className="bg-transparent p-2 text-black hover:bg-white hover:cursor-pointer group absolute right-2 top-3">
              <Trash2Icon className="w-3 h-3 group-hover:text-red-500" />
            </Button>
          }
        >
          open
        </PopoverTrigger>
        <PopoverContent align="end" className={"w-full"}>
          <PopoverHeader>
            <PopoverTitle>{deleteText}</PopoverTitle>
            <PopoverDescription className="flex gap-2">
              <MyButton
                onSave={() => {
                  handleDeleteTask(id);
                }}
                value=""
                buttonText="Löschen"
                style="bg-red-500 hover:bg-red-400 hover:cursor-pointer p-4"
                variant="default"
              />
              <MyButton
                value=""
                onSave={() => {
                  setOpen(false);
                }}
                buttonText="Abbrechen"
                style="hover:cursor-pointer p-4"
                variant="outline"
              />
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DeleteDialog;
