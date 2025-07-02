import { User } from 'src/users/entities/user.entity';

export class Game {
  id: number;
  title: string;
  password?: string;
  players: User[];
}
