export class Player {
  id: string;
  score: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
