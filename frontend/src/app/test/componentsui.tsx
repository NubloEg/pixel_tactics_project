"use client"

import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import UIButton from "@/shared/ui/UIButton/UIButton";
import UIInput from "@/shared/ui/UIInput/UIInput";
import UILink from "@/shared/ui/UILink/UILink";
import { useState } from "react";
import { Draggable } from "../shared/ui/Draggable/Draggable";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "../shared/ui/Droppable/Droppable";
// import { DndContext, DragEndEvent } from "@dnd-kit/core";

export default function ComponentsUI() {
  const [parent, setParent] = useState(null);
  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

  function handleDragEnd({ over }: { over: any }) {
    setParent(over ? over.id : null);
  }

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[12px]">
        <h1>Button</h1>
        <div className="flex gap-[6px]">
          <UIButton variant="red" />
          <UIButton variant="green" />
          <UIButton variant="blue" />
        </div>
      </div>
      <div className="flex flex-col gap-[12px] ">
        <h1>Link</h1>
        <div className="flex gap-[6px] items-center">
          <UILink href="/" className="w-[100%]">
            <UIButton className="w-[100%]" variant="blue">
              Home
            </UIButton>
          </UILink>
          <UILink
            href="https://cssunitconverter.vercel.app/px-to-vw"
            target="_blank"
            className="h-[max-content] w-[max-content]"
          />
          <UILink href="/game" className="w-[100%]">
            <UIButton className="w-[100%]" variant="red">
              Game
            </UIButton>
          </UILink>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h1>Input</h1>
        <div className="flex gap-[6px]">
          <UIInput />
          <UIInput />
          <UIInput />
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h1>Avatar</h1>
        <div className="flex gap-[6px]">
          <UIAvatar size="10.417vw" />
          <UIAvatar
            image="https://wow.zamimg.com/uploads/blog/images/19058-15th-anniversary-of-leeroy-jenkins-meme-video.jpg"
            isChange
            size="26.042vw"
          />
          <UIAvatar />
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h1>Drag&Drop</h1>
        <div className="flex gap-[6px] justify-center">
          <DndContext onDragEnd={handleDragEnd}>
            {!parent ? draggable : null}
            <Droppable id="droppable">
              {parent === "droppable" ? draggable : "Drop here"}
            </Droppable>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
