export class Player {
  id: string;
  score = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
