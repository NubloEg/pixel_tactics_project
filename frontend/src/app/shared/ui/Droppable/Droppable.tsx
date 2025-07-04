import { useDroppable } from "@dnd-kit/core";
import React, { ReactNode } from "react";

export default function Droppable(props: { children: ReactNode }) {
  const droppableSettings = useDroppable({
    id: "droppable",
  });
  const style = {
    color: droppableSettings.isOver ? "green" : undefined,
  };

  console.log("Droppable", droppableSettings);
  return (
    <div
      className="bg-green-300"
      ref={droppableSettings.setNodeRef}
      style={style}
    >
      {props.children}
    </div>
  );
}
