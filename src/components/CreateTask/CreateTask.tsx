import type { Boards } from "@/types/Types";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import InputButton from "../InputButton/InputButton";
import { useUsernameContext } from "@/context/UserContext";

function CreateTask({ currentBoard, column }: { currentBoard: Boards; column: { id: string; title: string } }) {
  const { username } = useUsernameContext();
  console.log(currentBoard, column);
  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <button className="hover:cursor-pointer rounded-lg hover:bg-primary-hover p-2">
              <Plus className="w-4 h-4" />
            </button>
          }
        ></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Neue Task erstellen</DialogTitle>
            <DialogDescription>Fill out the details for your new task.</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="title">Title</Label>
              <InputButton id="title" value="" setValue={() => {}} placeholder="Task title" />
            </Field>
            <Field>
              <Label htmlFor="beschreibung">Beschreibung</Label>
              <InputButton textarea id="beschreibung" value="" setValue={() => {}} placeholder="Was soll erledigt werden?" />
            </Field>
            <select>
              <option value="">Niemand</option>
              <option value="Fatimatsdaf">{username}</option>
            </select>
          </FieldGroup>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTask;
