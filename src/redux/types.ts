import {
  ActionloadingFailed,
  ActionloadingSuccess,
  ActionResetLoading,
  ActionSetUsers,
  ActionSetUserInfo,
  ActionSetIsAuth,
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

export interface StateTypes {
  loading: number;
  isAuth: boolean;
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
}

export type ActionType =
  | ActionResetLoading
  | ActionloadingSuccess
  | ActionloadingFailed
  | ActionSetUsers
  | ActionSetUserInfo
  | ActionSetIsAuth;
