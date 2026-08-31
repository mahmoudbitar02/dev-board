import { Button } from "../../components/ui/button";
import { Plus, Trash2Icon } from "lucide-react";

function Boards() {
  return (
    <div className="w-full ">
      <div className="flex justify-between mt-2 items-center">
        <h1 className="text-2xl font-bold">Meine Boards</h1>
        <Button className="text-black px-3 py-5">
          <Plus /> Neues Board
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4.5">
        <div className="card flex justify-between border border-black rounded-lg p-6  hover:shadow-md">
          <div className="flex-1 hover:cursor-pointer group">
            <a href="#" className="font-bold group-hover:underline ">
              Test
            </a>
            <div className="flex gap-0.5 items-center text-sm text-slate-500 mt-2">
              <p>3 Spalten .</p>
              <span></span> <p>0 Tasks</p>
            </div>
          </div>

          <Button className="bg-transparent p-2 text-black hover:bg-primary-hover hover:cursor-pointer group">
            <Trash2Icon className="w-4 h-4 group-hover:text-red-500" />
          </Button>
        </div>

        <div className="card flex justify-between border border-black rounded-lg p-6 hover:shadow-md">
          <div className="flex-1 hover:cursor-pointer group">
            <a href="#" className="font-bold group-hover:underline ">
              Test
            </a>
            <div className="flex gap-0.5 items-center text-sm text-slate-500 mt-2">
              <p>3 Spalten .</p>
              <span></span> <p>0 Tasks</p>
            </div>
          </div>

          <Button className="bg-transparent p-2 text-black hover:bg-primary-hover hover:cursor-pointer group">
            <Trash2Icon className="w-4 h-4 group-hover:text-red-500" />
          </Button>
        </div>

        <div className="card flex justify-between border border-black rounded-lg p-6 hover:shadow-md">
          <div className="flex-1 hover:cursor-pointer group">
            <a href="#" className="font-bold group-hover:underline ">
              Test
            </a>
            <div className="flex gap-0.5 items-center text-sm text-slate-500 mt-2">
              <p>3 Spalten .</p>
              <span></span> <p>0 Tasks</p>
            </div>
          </div>

          <Button className="bg-transparent p-2 text-black hover:bg-primary-hover hover:cursor-pointer group">
            <Trash2Icon className="w-4 h-4 group-hover:text-red-500" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Boards;
