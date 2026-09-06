import { ArrowLeft, Pencil, Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
function BoardsDetails() {
  return (
    <div className="flex flex-col gap-6 pt-2">
      <div className="flex gap-4 items-center justify-start">
        <Button variant="ghost" size={"lg"} className="hover:bg-primary-hover hover:cursor-pointer p-2">
          <ArrowLeft className="w-5! h-5!" />
        </Button>
        <h4 className="text-2xl font-bold">test</h4>
        <Button variant="ghost" size={"lg"} className="hover:bg-primary-hover hover:cursor-pointer p-2">
          <Pencil className="w-4! h-4!" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 items-start justify-start">
        <div className="card border border-black rounded-lg flex flex-col min-h-40 w-72 bg-gray-50">
          <div className="flex flex-col items-center justify-between  py-2">
            <div className="  border-black border-b w-full flex justify-between items-center py-3 px-4">
              <div className="flex gap-2 items-center">
                <h5 className="font-semibold text-sm">Todo</h5>
                <span className="text-muted-foreground text-sm">1</span>
              </div>
              <Plus className="w-4 h-4" />
            </div>

            <div className="text-muted-foreground text-xs">Kein Tasks vorhanden</div>
          </div>
        </div>
        <div className="card border border-black rounded-lg flex flex-col min-h-40 w-72 bg-gray-50">
          <div className="flex flex-col items-center justify-between  py-2">
            <div className="  border-black border-b w-full flex justify-between items-center py-3 px-4">
              <div className="flex gap-2 items-center">
                <h5 className="font-semibold text-sm">Todo</h5>
                <span className="text-muted-foreground text-sm">1</span>
              </div>
              <Plus className="w-4 h-4" />
            </div>

            <div className="text-muted-foreground text-xs">Kein Tasks vorhanden</div>
          </div>
        </div>

        <div className="card border border-black rounded-lg flex flex-col min-h-40 w-72 bg-gray-50">
          <div className="flex flex-col items-center justify-between  py-2">
            <div className="  border-black border-b w-full flex justify-between items-center py-3 px-4">
              <div className="flex gap-2 items-center">
                <h5 className="font-semibold text-sm">Todo</h5>
                <span className="text-muted-foreground text-sm">1</span>
              </div>
              <Plus className="w-4 h-4" />
            </div>

            <div className="text-muted-foreground text-xs">Kein Tasks vorhanden</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardsDetails;
