import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import MyButton from "@/components/MyButton/MyButton";

import { Plus } from "lucide-react";
import InputButton from "@/components/InputButton/InputButton";
import { useState } from "react";

function CreateBoardDialog() {
  const [boardName, setBoardName] = useState("");
  const [open, setOpen] = useState(false);

  function handleCreateBoard() {
    if (!boardName.trim()) return;

    // 1. Board erstellen / im State oder Backend speichern
    console.log("Board created", { boardName });

    // 2. Eingabefeld leeren
    setBoardName("");

    // 3. FENSTER SCHLIESSEN!
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="text-black px-3 py-5 cursor-pointer">
            <Plus className="" /> Neues Board
          </Button>
        }
      ></DialogTrigger>

      <DialogContent className="w-full max-w-lg!">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Neues Board erstellen</DialogTitle>
          <DialogDescription>Gib dem Board einen Namen. Es werden automatisch drei Spalten angelegt (To Do, In Progress, Done).</DialogDescription>
        </DialogHeader>
        <InputButton value={boardName} setValue={setBoardName} placeholder="Board Name" />

        <div className="flex justify-end gap-2">
          <DialogClose
            render={
              <Button onClick={() => setBoardName("")} className="mt-4 text-black hover:cursor-pointer p-5" variant="outline">
                Abbrechen
              </Button>
            }
          />

          <MyButton onSave={handleCreateBoard} value={boardName} buttonText="Erstellen" variant="default" disabled={!boardName.trim()} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateBoardDialog;
