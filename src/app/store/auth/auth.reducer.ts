import * as AuthActions from './auth.actions';
import { User } from '../../shared/user.interface';

export interface State {
  token: string;
  user: User;
  isAuthinticated: boolean;
}

const initialState: State = {
  token: null,
  user: null,
  isAuthinticated: false,
}

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case(AuthActions.SIGNUP):
    case(AuthActions.SIGNIN):
      return {
        ...state,
        isAuthinticated: true,
        user: action.payload,
      };

    case(AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload,
      };

    case(AuthActions.LOGOUT):
      return initialState;

    default:
      return state;
  }
}