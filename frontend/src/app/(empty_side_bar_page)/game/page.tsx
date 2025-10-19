import UIButton from "@/shared/ui/UIButton/UIButton";
import UILink from "@/shared/ui/UILink/UILink";
import CardTable from "@/widgets/CardTable/CardTable";
import React from "react";

export default function Game() {
  return (
    <>
      <div className="flex flex-col h-[100%]">
        <div className="h-[3.125vw] flex justify-between">
          <div className="bg-gray-400 w-[30%]">
            <div className="flex items-center h-[100%] justify-between px-2">
              <UILink href="/games">
                <UIButton variant="red" className="w-[60px]">
                  Out
                </UIButton>
              </UILink>
              <div>Название комнаты:Хейе хей хей</div>
            </div>
          </div>
          <div className="bg-gray-400 w-[30%]">
            <div className="flex w-[100%]">
              Время на ход
              <UIButton
                variant="green"
                className="w-[max-content] justify-self-end"
              >
                Completed
              </UIButton>
            </div>
          </div>
        </div>
        <div className="flex flex-1 px-[1.667vw] gap-[1.354vw]">
          <CardTable />
          <CardTable isLeft />
        </div>
        <div className="h-[3.125vw] flex justify-between">
          <div className="bg-gray-400 w-[30%]">Кол-во действий:2</div>
          <div className="bg-gray-400 w-[30%]">right</div>
        </div>
      </div>
    </>
  );
}
