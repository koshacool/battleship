import { Board } from './board';

export class Game {
  boards: Board[];
  userId: string;
  status: string;
  turn: string;
  key: string;
  date: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
