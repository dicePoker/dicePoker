import { ActionType, ActionTypes, StateTypes } from '../types';
import {
  ActionLoadingFalse,
  ActionLoadingTrue,
  ActionResetLoading,
  ActionSetUsers,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { StateType } from '../store';
import apiService from '../../service/ApiService';

export type TypeApiService = typeof apiService;
export type ThunkType = ThunkAction<
  void | Promise<unknown>,
  StateType,
  TypeApiService,
  ActionType
>;

// ставим загрузку
export const loadingTrue = (): ActionLoadingTrue => {
  return {
    type: ActionTypes.LOADING,
  };
};

export const loadingFalse = (): ActionLoadingFalse => {
  return {
    type: ActionTypes.LOADING_OFF,
  };
};

export const loadingReset = (): ActionResetLoading => {
  return {
    type: ActionTypes.LOADING_RESET,
  };
};

const setUsers = (users: StateTypes['users']): ActionSetUsers => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const fetchUsers = (): ThunkType => (dispatch, getState, apiService) => {
  dispatch(loadingTrue());
  apiService
    .getUsers()
    .then((response: StateTypes['users']) => {
      dispatch(setUsers(response));
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => dispatch(loadingFalse()));
};
