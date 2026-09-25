// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Trash2Icon } from "lucide-react";
import { useBoardContext } from "../../context/BoardContext";

import CreateBoardDialog from "../../components/Boards/CreateBoardDialog";

function Boards() {
  const { boards, setBoards } = useBoardContext();

  function handleDeleteBoard(id: string) {
    const deletedBoard = boards.filter((board) => board.id !== id);
    console.log(deletedBoard);
    setBoards({ type: "REMOVE_BOARD", payload: id });
  }
  return (
    <div className="w-full ">
      <div className="flex justify-between mt-2 items-center">
        <h1 className="text-2xl font-bold">Meine Boards</h1>
        <CreateBoardDialog />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4.5">
        {boards.map((board) => (
          <div key={board.id} className="card flex justify-between border border-black rounded-lg p-6  hover:shadow-md">
            <Link to={board.id}>
              {/* Muss noch angepasst werden, damit es auf die Board-Seite weiterleitet!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
              <div className="flex-1 hover:cursor-pointer group">
                <p className="font-bold group-hover:underline ">{board.title}</p>
                <div className="flex gap-0.5 items-center text-sm text-slate-500 mt-2">
                  <p>3 Spalten .</p>
                  <span></span> <p>{board.tasks.length} Tasks</p>
                </div>
              </div>
            </Link>

            <Button
              onClick={() => handleDeleteBoard(board.id)}
              className="bg-transparent p-2 text-black hover:bg-primary-hover hover:cursor-pointer group"
            >
              <Trash2Icon className="w-4 h-4 group-hover:text-red-500" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boards;
