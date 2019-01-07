import { Board } from './board';

export class Game {
  boards: Object = {
    player: Board,
    computer: Board,
  };
  userId: string;
  status: string;
  key: string;
  date: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
