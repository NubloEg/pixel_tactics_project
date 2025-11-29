import { createGame } from "@/app/shared/api/games/api";
import { useVariables } from "@/app/shared/hooks/useVariables";
import UIAvatar from "@/app/shared/ui/UIAvatar/UIAvatar";
import UIButton from "@/app/shared/ui/UIButton/UIButton";
import UIInput from "@/app/shared/ui/UIInput/UIInput";
import { UIModal } from "@/app/shared/ui/UIModal/UIModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

export const CreateGameModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}) => {
  const { Px450, Px550, Px150, Px24, Px18, Px6 } = useVariables();

  const styleModalContainer: React.CSSProperties = {
    height: Px450,
    width: Px550,
  };

  const styleModalWrapper: React.CSSProperties = {
    padding: Px24,
    gap: Px18,
  };

  const styleAvatarContainer: React.CSSProperties = {
    gap: Px6,
  };

  const queryCliet = useQueryClient();

  const createGameMutation = useMutation({
    mutationKey: ["createGame"],
    mutationFn: createGame,
    onSuccess: () => {
      queryCliet.invalidateQueries({ queryKey: ["games"] });
    },
  });
  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <div style={styleModalContainer} className="bg-white rounded-2xl">
        <div style={styleModalWrapper} className="flex flex-col h-[100%]">
          <h1 className="text-center text-5xl">Создание игры</h1>
          <div className="text-center">
            <UIInput
              placeholder="Введите название комнаты"
              className="w-full"
            />
          </div>
          <div className="flex justify-between ">
            <div
              style={styleAvatarContainer}
              className="flex flex-col items-center"
            >
              <UIAvatar size={Px150} />
              <div>
                <UIInput placeholder="Первый игрок" />
              </div>
            </div>
            <div
              style={styleAvatarContainer}
              className="flex flex-col items-center "
            >
              <UIAvatar size={Px150} />
              <div>
                <UIInput placeholder="Второй игрок" />
              </div>
            </div>
          </div>
          <UIButton
            onClick={() =>
              createGameMutation.mutate({
                player1: "Egor2",
                player2: "Liza2",
                title: "Новая комната",
              })
            }
            variant="green"
          >
            Создать
          </UIButton>
        </div>
      </div>
    </UIModal>
  );
};
