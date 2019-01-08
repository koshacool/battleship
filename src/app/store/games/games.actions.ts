import { Action } from '@ngrx/store';

export const UPDATE = 'UPDATE';

export class Update implements Action {
  readonly type = UPDATE;

  constructor(public payload) {}
}

export type GamesActions = Update;
