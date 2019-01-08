import * as GamesActions from './games.actions';
import { Game } from '../../shared/game';

export interface State {
  games: Game[];
}

const initialState: State = {
  games: [],
};

export function gamesReducer(state = initialState, action: GamesActions.GamesActions) {
  switch (action.type) {
    case(GamesActions.UPDATE):
      return { ...state, games: action.payload };

    default:
      return state;
  }
}
