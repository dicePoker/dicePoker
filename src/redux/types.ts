import {
  ActionloadingFailed,
  ActionloadingSuccess,
  ActionResetLoading,
  ActionSetUsers,
  ActionSetUserInfo,
  ActionSetIsAuth,
  ActionSetGameResult,
} from './actions/types';

export type typeSubmitUserInfo = userInfoType & { password: string };

export type userInfoType = {
  id?: number | string | null;
  firstName: string | null;
  secondName: string | null;
  login: string | null;
  email: string | null;
  phone: string | null;
  [key: string]: string | number | null | undefined;
};

export type userResult = {
  name: string;
  points: number;
};

export type gameResult = {
  firstPlayer: userResult;
  secondPlayer: userResult;
};

export interface StateTypes {
  loading: number;
  isAuth: boolean;
  gameResult: gameResult;
  users: {
    id: string;
    name: string;
    rating: string;
    record: string;
  }[];
  userInfo: userInfoType;
}

export enum ActionTypes {
  LOADING_RESET = 'LOADING_RESET',
  LOADING = 'LOADING',
  LOADING_OFF = 'LOADING_OFF',
  SET_USERS = 'SET_USERS',
  SET_USER_INFO = 'SET_USER_INFO',
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_GAME_RESULT = 'SET_GAME_RESULT',
}

export type ActionType =
  | ActionResetLoading
  | ActionloadingSuccess
  | ActionloadingFailed
  | ActionSetUsers
  | ActionSetUserInfo
  | ActionSetIsAuth
  | ActionSetGameResult;
