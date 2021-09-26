import { ActionTypes, StateTypes } from '../types';

export interface ActionloadingSuccess {
  type: ActionTypes.LOADING;
}

export interface ActionloadingFailed {
  type: ActionTypes.LOADING_OFF;
}

export interface ActionResetLoading {
  type: ActionTypes.LOADING_RESET;
}

export interface ActionSetUsers {
  type: ActionTypes.SET_USERS;
  payload: StateTypes['users'];
}

export interface ActionSetUserInfo {
  type: ActionTypes.SET_USER_INFO;
  payload: StateTypes['userInfo'];
}

export interface ActionSetIsAuth {
  type: ActionTypes.SET_IS_AUTH;
  payload: boolean;
}
