import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import InputButton from "../InputButton/InputButton";
import { useUsernameContext } from "@/context/UserContext";
import MyButton from "../MyButton/MyButton";
import type { Task } from "@/types/Types";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (open) {
      if (taskEdit && task) {
        setTaskData(task);
      } else {
        setTaskData(initialTaskState);
      }
    }
  }, [taskEdit, task, open]);

  function handleChange(field: keyof typeof initialTaskState, value: string) {
    setTaskData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSaveTask() {
    if (!currentBoard) return;

    if (!taskEdit) {
      if (!column) return;
      const newTask: Task = {
        ...taskData,
        id: uuidv4(),
        status: column.id.toLowerCase() as "todo" | "in-progress" | "done",
      };

      setBoards({ type: "UPDATE_BOARD", payload: { ...currentBoard, tasks: [...currentBoard.tasks, newTask] } });
      setTaskData(initialTaskState);

      showToast("success", `Task "${newTask.title}" wurde erfolgreich erstellt`);
    } else {
      if (!task) return;
      const updatedTasks = currentBoard.tasks.map((t) => (t.id === task.id ? { ...taskData } : t));
      setBoards({ type: "UPDATE_BOARD", payload: { ...currentBoard, tasks: updatedTasks } });
      showToast("success", `Task "${taskData.title}" wurde aktualisiert`);
    }
    setOpen(false);
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
            <Label htmlFor="userName">User</Label>
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
            onSave={handleSaveTask}
            value=""
            disabled={!taskData.title.trim() || !taskData.description.trim() || !taskData.deadline}
            buttonText={taskEdit ? "Speichern" : "Erstellen"}
            variant="default"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTask;
