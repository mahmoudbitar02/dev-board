import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import MyButton from "@/components/MyButton/MyButton";
import { useBoardContext } from "@/context/BoardContext";

import { Plus } from "lucide-react";
import InputButton from "@/components/InputButton/InputButton";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { showToast } from "@/Utils/utils";

function CreateBoardDialog() {
  const { boards, setBoards } = useBoardContext();
  const [boardName, setBoardName] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setBoardName("");
    }
  };

  function handleCreateBoard() {
    const trimmedBoardName = boardName.trim();
    if (!trimmedBoardName) return;

    const boardExists = boards.some((board) => board.title.toLocaleLowerCase() === trimmedBoardName.toLocaleLowerCase());

    if (boardExists) {
      showToast("error", "Ein Board mit diesem Namen existiert bereits");
      setOpen(false);
      return;
    } else {
      const newBoard = { id: `board-${uuidv4()}`, title: trimmedBoardName, tasks: [] };
      showToast("success", `Board "${newBoard.title}" wurde erfolgreich erstellt`);
      setBoards({ type: "ADD_BOARD", payload: newBoard });
      setOpen(false);
    }
  }
  return (
    <div>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger
          render={
            <Button className="text-black px-3 py-5 cursor-pointer">
              <Plus className="w-4 h-4" />
              Neues Board
            </Button>
          }
        />

        <DialogContent className="w-full max-w-lg!">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Neues Board erstellen</DialogTitle>
            <DialogDescription>Gib dem Board einen Namen. Es werden automatisch drei Spalten angelegt (To Do, In Progress, Done).</DialogDescription>
          </DialogHeader>
          <InputButton id="boardName" value={boardName} setValue={setBoardName} placeholder="Board Name" />

          <div className="flex justify-end gap-2">
            <DialogClose
              render={
                <Button className="mt-4 text-black hover:cursor-pointer p-5" variant="outline">
                  Abbrechen
                </Button>
              }
            />

            <div className="mt-4">
              <MyButton onSave={handleCreateBoard} value={boardName} buttonText="Erstellen" variant="default" disabled={!boardName.trim()} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBoardDialog;
