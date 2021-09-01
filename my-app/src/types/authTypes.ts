export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const USER_TOKEN = 'USER_TOKEN';
export const AUTH_ERROR = 'LOGIN_ERROR';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const CLEAR_AUTH_MESSAGES = 'CLEAR_LOGIN_MESSAGES';

export interface loginSuccess {
  type: typeof LOGIN_SUCCESS;
}

export interface userToken {
  type: typeof USER_TOKEN;
  payload: string;
}

export interface logout {
  type: typeof LOGOUT;
  payload: string;
}

export interface changePassword {
  type: typeof CHANGE_PASSWORD;
  payload: string;
}

export interface resetPassword {
  type: typeof RESET_PASSWORD;
  payload: string;
}

export interface authError {
  type: typeof AUTH_ERROR;
  payload: string;
}

export interface clearLoginMessages {
  type: typeof CLEAR_AUTH_MESSAGES;
}

export type authDispatchTypes =
  | loginSuccess
  | userToken
  | logout
  | changePassword
  | resetPassword
  | authError
  | clearLoginMessages;
