import { ActionTypes, StateTypes } from '../types';

export interface ActionLoadingTrue {
  type: ActionTypes.LOADING;
}

export interface ActionLoadingFalse {
  type: ActionTypes.LOADING_OFF;
}

export interface ActionResetLoading {
  type: ActionTypes.LOADING_RESET;
}

export interface ActionSetUsers {
  type: ActionTypes.SET_USERS;
  payload: StateTypes['users'];
}
