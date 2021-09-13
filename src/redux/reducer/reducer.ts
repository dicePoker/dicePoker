import { ActionType, ActionTypes, StateTypes } from '../types';

const initialState: StateTypes = {
  loading: 0,
  users: [],
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

    default:
      return state;
  }
};

export default reducer;
