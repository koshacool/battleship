import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer';
import * as fromGames from './games/games.reducer';

export interface AppState {
  auth: fromAuth.State;
  games: fromGames.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  games: fromGames.gamesReducer,
};
