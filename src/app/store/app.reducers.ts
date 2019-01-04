import * as fromAuth from './auth/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer
};
