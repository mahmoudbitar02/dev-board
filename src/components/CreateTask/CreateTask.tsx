import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import InputButton from "../InputButton/InputButton";
import { useUsernameContext } from "@/context/UserContext";
import MyButton from "../MyButton/MyButton";
import type { Task } from "@/types/Types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import { useBoardContext } from "@/context/BoardContext";
import { showToast } from "@/Utils/utils";
import { useParams } from "react-router-dom";

const initialTaskState: Task = {
  id: "",
  title: "",
  description: "",
  userName: "",
  status: "todo",
  deadline: "",
};

function CreateTask({ column, taskEdit, task }: { column?: { id: string; title: string }; taskEdit: boolean; task?: Task }) {
  const { id } = useParams();
  const { boards, setBoards } = useBoardContext();
  const { username } = useUsernameContext();
  const [taskData, setTaskData] = useState<Task>(initialTaskState);
  const [open, setOpen] = useState(false);
  const currentBoard = boards.find((board) => board.id === id);

  function handleChange(field: keyof typeof initialTaskState, value: string) {
    setTaskData((prev) => ({ ...prev, [field]: value }));
  }

  function handleCreateTask() {
    const newTask: Task = {
      ...taskData,
      id: uuidv4(),
      status: column?.id.toLowerCase() as "todo" | "in-progress" | "done",
    };
    if (!newTask) return;
    setTaskData(initialTaskState);
    setOpen(false);
    currentBoard?.tasks.push(newTask);
    setBoards({ type: "UPDATE_BOARD", payload: currentBoard });
    showToast("success", `Task "${newTask.title}" wurde erfolgreich erstellt`);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button className=" ">
            {!taskEdit ? (
              <div className="hover:bg-primary-hover p-2 hover:cursor-pointer rounded-lg">
                <Plus className="w-4 h-4" />
              </div>
            ) : (
              <span className="hover:underline hover:cursor-pointer font-medium">{task?.title}</span>
            )}
          </button>
        }
      ></DialogTrigger>
      <DialogContent className="w-full max-w-lg! px-6 py-10 ">
        <DialogHeader>
          <DialogTitle>Neue Task erstellen</DialogTitle>
          <DialogDescription>Fill out the details for your new task.</DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="title">Title</Label>
            <InputButton id="title" value={taskData.title} setValue={(value) => handleChange("title", value)} placeholder="Task title" />
          </Field>
          <Field>
            <Label htmlFor="beschreibung">Beschreibung</Label>
            <InputButton
              textarea
              id="beschreibung"
              value={taskData.description}
              setValue={(value) => handleChange("description", value)}
              placeholder="Was soll erledigt werden?"
            />
          </Field>
          <Field>
            <select id="userName" value={taskData.userName} onChange={(e) => handleChange("userName", e.target.value)}>
              <option value="Niemand">Niemand</option>
              <option value={username}>{username}</option>
            </select>
          </Field>

          <Field>
            <Label htmlFor="deadline">Deadline</Label>
            <InputButton
              type="date"
              id="deadline"
              value={taskData.deadline}
              setValue={(value) => handleChange("deadline", value)}
              placeholder="Wann soll es erledigt werden?"
            />
          </Field>
        </FieldGroup>

        <div className="flex justify-end gap-2">
          <DialogClose
            render={
              <Button
                className=" text-black hover:cursor-pointer p-5"
                value=""
                onClick={() => {
                  setTaskData(initialTaskState);
                }}
                variant="outline"
              >
                Abbrechen
              </Button>
            }
          />
          <MyButton
            onSave={handleCreateTask}
            value=""
            disabled={taskData.title === "" || taskData.description === "" || taskData.deadline === ""}
            buttonText="Erstellen"
            variant="default"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTask;
