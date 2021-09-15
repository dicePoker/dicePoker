import {
  ActionType,
  ActionTypes,
  StateTypes,
  typeSubmitUserInfo,
} from '../types';
import {
  ActionloadingFailed,
  ActionloadingSuccess,
  ActionResetLoading,
  ActionSetIsAuth,
  ActionSetUserInfo,
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
export const loadingSuccess = (): ActionloadingSuccess => {
  return {
    type: ActionTypes.LOADING,
  };
};

export const loadingFailed = (): ActionloadingFailed => {
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

const setUserInfo = (userInfo: StateTypes['userInfo']): ActionSetUserInfo => {
  return {
    type: ActionTypes.SET_USER_INFO,
    payload: userInfo,
  };
};

const setIsAuth = (isAuth: boolean): ActionSetIsAuth => {
  return {
    type: ActionTypes.SET_IS_AUTH,
    payload: isAuth,
  };
};

export const createNewUser =
  (data: typeSubmitUserInfo): ThunkType =>
  (dispatch, getState, apiService) => {
    dispatch(loadingSuccess());
    const userData = {
      first_name: data?.firstName,
      second_name: data?.secondName,
      login: data?.login,
      email: data?.email,
      password: data?.password,
      phone: data?.phone,
    };
    apiService
      .createNewUser(userData)
      .then((response: { id: number }) => {
        const userInfo = { id: response?.id, ...data };
        dispatch(setUserInfo(userInfo));
        dispatch(setIsAuth(true));
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => dispatch(loadingFailed()));
  };

export const changeProfileData =
  (data: typeSubmitUserInfo): ThunkType =>
  (dispatch, getState, apiService) => {
    dispatch(loadingSuccess());
    const userData = {
      first_name: data?.firstName,
      second_name: data?.secondName,
      login: data?.login,
      email: data?.email,
      phone: data?.phone,
    };
    apiService
      .changeProfileData({
        ...userData,
        display_name: data.login,
        id: getState().userInfo.id,
      })
      .then((response: StateTypes['userInfo']) => {
        dispatch(setUserInfo(response));
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => dispatch(loadingFailed()));
  };

export const authorization =
  (data: { login: string; password: string }): ThunkType =>
  (dispatch, getState, apiService) => {
    dispatch(loadingSuccess());
    apiService
      .authorization(data)
      .then((response: string) => {
        dispatch(setIsAuth(true));
        dispatch(getUser());
      })
      .catch(error => {
        dispatch(setIsAuth(false));
        console.log(error);
      })
      .finally(() => dispatch(loadingFailed()));
  };

export const logout = (): ThunkType => (dispatch, getState, apiService) => {
  dispatch(loadingSuccess());
  apiService
    .logout()
    .then((response: string) => {
      dispatch(setIsAuth(false));
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => dispatch(loadingFailed()));
};

export const getUser = (): ThunkType => (dispatch, getState, apiService) => {
  dispatch(loadingSuccess());
  apiService
    .getUser()
    .then(response => {
      const userInfo: StateTypes['userInfo'] = {
        id: response.id,
        firstName: response.first_name,
        secondName: response.second_name,
        login: response.login,
        email: response.email,
        phone: response.phone,
      };
      dispatch(setUserInfo(userInfo));
      dispatch(setIsAuth(true));
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => dispatch(loadingFailed()));
};

export const fetchUsers = (): ThunkType => (dispatch, getState, apiService) => {
  dispatch(loadingSuccess());
  apiService
    .getUsers()
    .then((response: StateTypes['users']) => {
      dispatch(setUsers(response));
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => dispatch(loadingFailed()));
};
