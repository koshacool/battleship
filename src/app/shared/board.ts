export class Board {
  playerId: string;
  score: number;
  tiles: Object[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
