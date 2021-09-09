import {
  ActionloadingFailed,
  ActionloadingSuccess,
  ActionResetLoading,
  ActionSetUsers,
  ActionSetUserInfo,
  ActionSetIsAuth,
} from './actions/types';

export interface StateTypes {
  loading: number;
  isAuth: boolean;
  users: {
    id: string;
    name: string;
    rating: string;
    record: string;
  }[];
  userInfo: {
    id: number | null;
    first_name: string | null;
    second_name: string | null;
    login: string | null;
    email: string | null;
    phone: string | null;
  };
}

export enum ActionTypes {
  LOADING_RESET = 'LOADING_RESET',
  LOADING = 'LOADING',
  LOADING_OFF = 'LOADING_OFF',
  SET_USERS = 'SET_USERS',
  SET_USER_INFO = 'SET_USER_INFO',
  SET_IS_AUTH = 'SET_IS_AUTH',
}

export type ActionType =
  | ActionResetLoading
  | ActionloadingSuccess
  | ActionloadingFailed
  | ActionSetUsers
  | ActionSetUserInfo
  | ActionSetIsAuth;
