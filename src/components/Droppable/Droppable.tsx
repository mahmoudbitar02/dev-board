import { useDroppable } from "@dnd-kit/react";

function Droppable({ id, children }: { id: string; children: React.ReactNode }) {
  const { ref } = useDroppable({
    id: id,
  });
  return <div ref={ref}>{children}</div>;
}

export default Droppable;
