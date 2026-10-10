import { useDroppable } from "@dnd-kit/react";

function Droppable({ id, children, isGlobalDragging }: { id: string; children: React.ReactNode; isGlobalDragging: boolean }) {
  const { ref, isDropTarget } = useDroppable({
    id: id,
  });
  return (
    <div ref={ref} className="card border rounded-lg flex flex-col min-h-50 w-72 bg-gray-50 overflow-hidden relative transition-all border-black ">
      {children}

      {isGlobalDragging && (
        <div className="absolute inset-2 z-50 flex items-center justify-center ">
          <div
            className={`w-full h-20 border-2 border-dashed rounded-lg flex items-center justify-center p-3 text-center shadow-md  ${
              isDropTarget ? "border-cyan-500 bg-cyan-100/90 " : "border-cyan-400 bg-cyan-50/90 opacity-80"
            }`}
          >
            <p className="text-cyan-700 font-semibold text-sm">Hier ablegen</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Droppable;
