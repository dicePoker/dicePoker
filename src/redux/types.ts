import {
  ActionloadingFailed,
  ActionloadingSuccess,
  ActionResetLoading,
  ActionSetUsers,
} from './actions/types';

export interface StateTypes {
  loading: number;
  users: {
    id: string;
    name: string;
    rating: string;
    record: string;
  }[];
}

export enum ActionTypes {
  LOADING_RESET = 'LOADING_RESET',
  LOADING = 'LOADING',
  LOADING_OFF = 'LOADING_OFF',
  SET_USERS = 'SET_USERS',
}

export type ActionType =
  | ActionResetLoading
  | ActionloadingSuccess
  | ActionloadingFailed
  | ActionSetUsers;
