import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface CardInfo {
  id: number;
  iconHero: StaticImageData;
  hero: {
    name: string;
    attack: number;
    sheet: number;
    abilitys: {
      vanguard: ReactElement;
      flank: ReactElement;
      rear: ReactElement;
      order: ReactElement;
    };
  };
  leader: {
    name: string;
    description: string;
    ability: string;
    attack: number;
    sheet: number;
  };
}

import assassin from "../entities/assets/pixelHero/AssassinPixel.png";
import knight from "../entities/assets/pixelHero/KnightPixel.png";
import mascot from "../entities/assets/pixelHero/MascotPixel.png";
import scientist from "../entities/assets/pixelHero/ScientistPixel.png";
import gunner from "../entities/assets/pixelHero/GunnerPixel.png";

class CardStore {
  private cards: CardInfo[] = [
    {
      id: 0,
      iconHero: knight,
      hero: {
        name: "Рыцарь",
        attack: 3,
        sheet: 10,
        abilitys: {
          vanguard: (
            <span>
              <strong>Перехват.</strong>Нанесите 2 урона герою,который выбрал
              этого героя как цель своей атаки
            </span>
          ),
          flank: <span>Ваш лидер не получает урон от дальних атак</span>,
          rear: (
            <span>
              <strong>Заклинание:</strong> переместите до 6 единиц урона с
              героев в вашем отряде на этого героя
            </span>
          ),
          order: (
            <span>
              Нанесите по 4 урона каждому герою и лидеру соперника в ближнем бою
            </span>
          ),
        },
      },
      leader: {
        name: "Каденза",
        description: "Механическая Пехотная Дивизия",
        attack: 4,
        sheet: 20,
        ability: "Ваши герои и лидеры получают на 1 меньше урона от атак",
      },
    },
    {
      id: 1,
      iconHero: assassin,
      hero: {
        name: "Ассасин",
        attack: 3,
        sheet: 1,
        abilitys: {
          vanguard: <span>Базовая сила атаки удваивается против лидеров.</span>,
          flank: (
            <span>
              Базовая сила атаки впередистоящего удваивается против героев
            </span>
          ),
          rear: (
            <span>
              <strong>Заклинание:</strong> нанесите 3 урона лидеру соперника
            </span>
          ),
          order: <span>Любовй герой повержен</span>,
        },
      },
      leader: {
        name: "Регицид Хекетч",
        description: "Специальный Отряд Зачистки",
        attack: 8,
        sheet: 15,
        ability: "ЧТо то атквоатв оатыов лтаывл атыолвтслывт о",
      },
    },
    {
      id: 2,
      iconHero: mascot,
      hero: {
        name: "Рыцарь",
        attack: 3,
        sheet: 10,
        abilitys: {
          vanguard: (
            <span>
              <strong>Перехват.</strong>Нанесите 2 урона герою,который выбрал
              этого героя как цель своей атаки
            </span>
          ),
          flank: <span>Ваш лидер не получает урон от дальних атак</span>,
          rear: (
            <span>
              <strong>Заклинание:</strong> переместите до 6 единиц урона с
              героев в вашем отряде на этого героя
            </span>
          ),
          order: (
            <span>
              Нанесите по 4 урона каждому герою и лидеру соперника в ближнем бою
            </span>
          ),
        },
      },
      leader: {
        name: "Каденза",
        description: "Механическая Пехотная Дивизия",
        attack: 4,
        sheet: 20,
        ability: "Ваши герои и лидеры получают на 1 меньше урона от атак",
      },
    },
    {
      id: 3,
      iconHero: scientist,
      hero: {
        name: "Ассасин",
        attack: 3,
        sheet: 1,
        abilitys: {
          vanguard: <span>Базовая сила атаки удваивается против лидеров.</span>,
          flank: (
            <span>
              Базовая сила атаки впередистоящего удваивается против героев
            </span>
          ),
          rear: (
            <span>
              <strong>Заклинание:</strong> нанесите 3 урона лидеру соперника
            </span>
          ),
          order: <span>Любовй герой повержен</span>,
        },
      },
      leader: {
        name: "Регицид Хекетч",
        description: "Специальный Отряд Зачистки",
        attack: 8,
        sheet: 15,
        ability: "ЧТо то атквоатв оатыов лтаывл атыолвтслывт о",
      },
    },
    {
      id: 4,
      iconHero: gunner,
      hero: {
        name: "Рыцарь",
        attack: 3,
        sheet: 10,
        abilitys: {
          vanguard: (
            <span>
              <strong>Перехват.</strong>Нанесите 2 урона герою,который выбрал
              этого героя как цель своей атаки
            </span>
          ),
          flank: <span>Ваш лидер не получает урон от дальних атак</span>,
          rear: (
            <span>
              <strong>Заклинание:</strong> переместите до 6 единиц урона с
              героев в вашем отряде на этого героя
            </span>
          ),
          order: (
            <span>
              Нанесите по 4 урона каждому герою и лидеру соперника в ближнем бою
            </span>
          ),
        },
      },
      leader: {
        name: "Каденза",
        description: "Механическая Пехотная Дивизия",
        attack: 4,
        sheet: 20,
        ability: "Ваши герои и лидеры получают на 1 меньше урона от атак",
      },
    },
  ];

  constructor() {}

  get getCards() {
    return this.cards;
  }

  getCard(id: number) {
    return this.cards[id];
  }

  addCard() {
    this.cards[1].hero.name = "HELLLLO";
  }
}

const cardStore = new CardStore();

export default cardStore;
