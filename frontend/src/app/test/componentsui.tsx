import CardField from "@/entites/ui/CardField/CardField";
import Draggable from "@/shared/ui/Draggable/Draggable";
import Droppable from "@/shared/ui/Droppable/Droppable";
import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import UIButton from "@/shared/ui/UIButton/UIButton";
import UIInput from "@/shared/ui/UIInput/UIInput";
import UILink from "@/shared/ui/UILink/UILink";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

export default function ComponentsUI() {
  function handleDragEnd(event: DragEndEvent) {
    console.log("event", event);
    if (event.over && event.over.id === "droppable") {
      console.log("DragEnd");
    }
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
          <DndContext
            onDragEnd={handleDragEnd}
            onDragOver={() => console.log("Пересеклось")}
          >
            <div className="flex flex-col gap-[12px] items-center">
              <div className="flex gap-[6px]">
                <Draggable id="1">
                  <div className="w-[165px] h-[247px] bg-red-500">Drag</div>
                </Draggable>
              </div>
              {/* <Draggable>
              <div className="h-[350px] w-[250px] bg-green-500">Card</div>
            </Draggable> */}
              <div className="gameSpace">
                <Droppable>
                  <CardField />
                </Droppable>
                <CardField />
                <CardField />
                <CardField />
                <CardField className="rotate-180" />
                <CardField />
                <CardField />
                <CardField />
                <CardField />
              </div>
            </div>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
