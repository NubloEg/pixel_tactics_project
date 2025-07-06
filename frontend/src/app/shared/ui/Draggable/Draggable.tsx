//import { useDraggable } from "@dnd-kit/core";
import React, { ReactNode } from "react";

export default function Draggable(props: {
  children: ReactNode;
  id: string;
  completerTransform?: { x: string; y: string };
}) {
  // const draggableSettings = useDraggable({
  //   id: props.id,
  // });
  // const style = draggableSettings.transform
  //   ? {
  //       transform: `translate3d(${
  //         props.completerTransform?.x || draggableSettings.transform.x
  //       }px, ${
  //         props.completerTransform?.y || draggableSettings.transform.y
  //       }px, 0)`,
  //     }
  //   : undefined;

  return (
    <button
      className="h-[max-content]"
      // ref={draggableSettings.setNodeRef}
      // style={style}
      // {...draggableSettings.listeners}
      // {...draggableSettings.attributes}
    >
      {props.children}
    </button>
  );
}
