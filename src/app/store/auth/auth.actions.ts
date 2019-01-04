import { Action } from '@ngrx/store';
import { User } from '../../shared/user.interface';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class Signup implements Action {
  readonly type = SIGNUP;

  constructor(public payload: User) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;

  constructor(public payload: User) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions =
  Signup |
  Signin |
  Logout |
  SetToken;
