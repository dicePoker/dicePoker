import { ActionType, ActionTypes, StateTypes } from '../types';

const initialState: StateTypes = {
  loading: 0,
  isAuth: false,
  users: [],
  gameResult: {
    firstPlayer: {
      name: 'Игрок 1',
      points: 0,
    },
    secondPlayer: {
      name: 'Игрок 2',
      points: 0,
    },
  },
  userInfo: {
    id: null,
    firstName: null,
    secondName: null,
    login: null,
    email: null,
    phone: null,
  },
};

const reducer = (state = initialState, action: ActionType): StateTypes => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return {
        ...state,
        loading: state.loading + 1,
      };

    case ActionTypes.LOADING_OFF:
      return {
        ...state,
        loading: state.loading > 0 ? state.loading - 1 : 0,
      };

    case ActionTypes.LOADING_RESET:
      return {
        ...state,
        loading: 0,
      };
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ActionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    case ActionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    case ActionTypes.SET_GAME_RESULT:
      console.log('SET_GAME_RESULT');
      return {
        ...state,
        gameResult: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
