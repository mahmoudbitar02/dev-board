// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useBoardContext } from "@/context/BoardContext";
import CreateBoardDialog from "@/components/Boards/CreateBoardDialog";
import DeleteDialog from "@/components/Delete/DeleteDialog";

function Boards() {
  const { boards } = useBoardContext();

  return (
    <div className="w-full ">
      <div className="flex justify-between mt-2 items-center">
        <h1 className="text-2xl font-bold">Meine Boards</h1>
        <CreateBoardDialog />
      </div>
      {boards?.length === 0 ? (
        <div className="flex items-center mt-4 text-2xl justify-center">
          <p className="border-2 border-dashed rounded-2xl p-4 border-primary">keine Boards Vorhanden</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4.5 ">
          {boards.map((board) => (
            <div key={board.id} className="card flex justify-between border border-black rounded-lg p-6  hover:shadow-md relative ">
              <Link to={board.id}>
                <div className="flex-1 hover:cursor-pointer group">
                  <p className="font-bold group-hover:underline ">{board.title}</p>
                  <div className="flex gap-0.5 items-center text-sm text-slate-500 mt-2">
                    <p>3 Spalten •</p>
                    <p>{board.tasks.length} Tasks</p>
                  </div>
                </div>
              </Link>
              <DeleteDialog deleteText="Board Löschen?" id={board.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Boards;
