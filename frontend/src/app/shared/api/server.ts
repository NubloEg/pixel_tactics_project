export const mockApiData: { [key: string]: unknown } = {
  "/api/users/profile": {
    id: "user-123",
    name: "Иван Иванов",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1703756/pub_5dada023028d6800b0360208_5dada03305fd9800add779c0/scale_1200",
    rating: "4.8",
    lvl: {
      value: 12,
      exp: 3450,
      maxExp: 50000,
    },
    bestInfo: [
      {
        title: "Сыграно игр",
        value: "14",
      },
      {
        title: "Максимальная разница в рейтинге",
        value: "27",
      },
      {
        title: "Любимый лидер",
        value: "Рыцарь",
      },
      {
        title: "Время самой долгой игры",
        value: "1:10:32",
      },
    ],
    achivments: ["1", "4", "8"],
  },
  "/api/achievement": [
    {
      id: "6",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Orc-1024.png",
      name: "Новичок",
      description: "Выиграйте свою первую игру!",
    },
    {
      id: "1",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Knight-1024.png",
      name: "Тактическая блокада",
      description: "Заблокируйте 3 или более атаки противника за одну игру",
    },
    {
      id: "2",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Sorceress-1024.png",
      name: "Мастер поддержки",
      description:
        "Используйте 5 или более способностей, которые усиливают союзников.",
    },
    {
      id: "3",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Grim_Reaper-1024.png",
      name: "Мистер Смерть!",
      description: "Не дай никому умереть!",
    },
    {
      id: "4",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Spell_Book-1024.png",
      name: "Легенда Pixel Tactics",
      description: "Выиграйте 25 игр, используя разные тактики и стратегии.",
    },
    {
      id: "5",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Werewolf-1024.png",
      name: "Сокрушительная мощь",
      description: "Нанесите 15 или более урона за одну игру.",
    },

    {
      id: "7",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Poison_Spider-1024.png",
      name: "Комбо-мастер",
      description: "Активируйте 3 или более способностей юнитов за один ход.",
    },
    {
      id: "8",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Destructive_Magic-1024.png",
      name: "Сокрушительный удар",
      description: "Убейте 3 или более юнитов за один ход.",
    },
    {
      id: "9",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Castle-1024.png",
      name: "Мастер тактики",
      description:
        "Победа в 10 играх, используя разные героические способности лидера в каждой игре.(разных лидеров)",
    },
    {
      id: "10",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Treant-1024.png",
      name: "Скрытая угроза",
      description:
        "Убейте вражеского лидера с помощью юнита, который был на поле с самого начала игры.",
    },
    {
      id: "11",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Dragon_Egg-1024.png",
      name: "Скрытый потенциал",
      description:
        "Победите, используя юнита, который был разыгран в последний момент.",
    },
    {
      id: "12",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Monster-1024.png",
      name: "Огненная буря",
      description: "Нанесите 10 или более урона за один ход.",
    },
    {
      id: "13",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Unicorn-1024.png",
      name: "Счастливчик",
      description:
        "Выиграйте игру, несмотря на то, что у вас остался только лидер.",
    },
    {
      id: "14",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/King-1024.png",
      name: "Тактический гений",
      description: "Победа в 5 играх подряд.",
    },
    {
      id: "15",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Elf-1024.png",
      name: "Ловкий маневр",
      description: "Победите, не используя ни одной атаки лидера.",
    },
    {
      id: "16",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Armor-1024.png",
      name: "Защитник слабых",
      description:
        "Используйте способность юнита, чтобы защитить союзника от смертельного удара.",
    },
    {
      id: "17",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Food-1024.png",
      name: "Мастер переворота",
      description:
        "Выиграйте игру, имея меньше юнитов на поле, чем ваш противник.",
    },
    {
      id: "18",
      icon: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Medusa-1024.png",
      name: "Без пощады",
      description:
        "Уничтожьте все юниты противника до того, как атаковать лидера.",
    },
  ],
  "/api/games": [
    {
      id: "1",
      player1: "Egor",
      player2: "Лиза",
      title: "Игра 1",
    },
  ],
};
