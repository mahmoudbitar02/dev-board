import { ArrowLeft, Pencil, Check, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useBoardContext } from "@/context/BoardContext";
import { useNavigate, useParams } from "react-router-dom";
import Tasks from "@/components/Tasks/Tasks";
import { useState } from "react";
import InputButton from "@/components/InputButton/InputButton";
import { showToast } from "@/Utils/utils";

function BoardsDetails() {
  const { id } = useParams();
  const { boards } = useBoardContext();
  const [editBoard, setEditBoard] = useState(false);
  const [boardName, setBoardName] = useState("");
  const currentBoard = boards.find((board) => board.id === id);
  const navigate = useNavigate();

  function handleEditBoardTitle(id: string | undefined) {
    if (!id) return;
    if (!currentBoard) return;
    console.log(currentBoard.title);

    setBoardName(currentBoard.title);
    setEditBoard(true);
  }

  function saveBoardName() {
    const trimedBoardName = boardName.trim();
    if (!trimedBoardName) return;

    const exsistBoard = boards.some((board) => board.title.toLocaleLowerCase() === trimedBoardName.toLocaleLowerCase());

    if (exsistBoard) {
      alert("Board name ist vergeben");
      return;
    } else {
      if (!currentBoard) return;

      currentBoard.title = boardName;
      setEditBoard(false);
      showToast("success", `Board Name wurde erfolgreich geändert`);
    }
  }

  if (!currentBoard) {
    return (
      <div className="p-4 text-center flex flex-col items-center justify-center w-full">
        <p>Board nicht gefunden.</p>
        <Button onClick={() => navigate("/boards")} className="mt-2">
          Zurück zur Übersicht
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 pt-2">
      <div className="flex gap-4 items-center justify-start">
        <Button
          onClick={() => {
            navigate(-1);
          }}
          variant="ghost"
          size={"lg"}
          className="hover:bg-primary-hover hover:cursor-pointer p-2"
        >
          <ArrowLeft className="w-5! h-5!" />
        </Button>
        {!editBoard ? (
          <div className="flex gap-4 items-center justify-start">
            <h4 className="text-2xl font-bold">{currentBoard.title}</h4>
            <Button
              onClick={() => handleEditBoardTitle(currentBoard.id)}
              variant="ghost"
              size={"lg"}
              className="hover:bg-primary-hover hover:cursor-pointer p-2"
            >
              <Pencil className="w-4! h-4!" />
            </Button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2 w-80">
            <InputButton id="boardName" value={boardName} setValue={setBoardName} placeholder="Board Name" />

            <Button onClick={saveBoardName} variant="ghost" size={"lg"} className="hover:bg-primary-hover hover:cursor-pointer p-2">
              <Check className="w-5! h-5!" />
            </Button>

            <Button
              onClick={() => {
                setEditBoard(false);
              }}
              variant="ghost"
              size={"lg"}
              className="hover:bg-primary-hover hover:cursor-pointer p-2"
            >
              <X className="w-5! h-5!" />
            </Button>
          </div>
        )}
      </div>
      <Tasks currentBoard={currentBoard} />
    </div>
  );
}

export default BoardsDetails;
