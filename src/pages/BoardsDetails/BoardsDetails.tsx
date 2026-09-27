import { ArrowLeft, Pencil } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useBoardContext } from "@/context/BoardContext";
import { useNavigate, useParams } from "react-router-dom";
import Tasks from "@/components/Tasks/Tasks";

function BoardsDetails() {
  const { id } = useParams();
  const { boards } = useBoardContext();
  const currentBoard = boards.find((board) => board.id === id);
  const navigate = useNavigate();

  function handleEditBoardTitle(id: string | undefined) {
    console.log(id);
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
        <h4 className="text-2xl font-bold">{currentBoard?.title}</h4>

        <Button
          onClick={() => handleEditBoardTitle(currentBoard?.id)}
          variant="ghost"
          size={"lg"}
          className="hover:bg-primary-hover hover:cursor-pointer p-2"
        >
          <Pencil className="w-4! h-4!" />
        </Button>
      </div>
      <Tasks currentBoard={currentBoard} />
    </div>
  );
}

export default BoardsDetails;
