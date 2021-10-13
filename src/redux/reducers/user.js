/* eslint-disable prettier/prettier */
import Actions, {
  getActionSuccess,
  getActionFail,
  getActionUnmount,
} from '../actions';

const initialState = {
  data: null,
  error: null,
  fetching: false,
};

export const registerAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REGISTER_ACCOUNT: {
      return {
        ...state,
        fetching: true,
      };
    }

    case getActionSuccess(Actions.REGISTER_ACCOUNT):
      return {
        ...state,
        data: action.data,
        error: action.error,
        fetching: false,
      };
    case getActionFail(Actions.REGISTER_ACCOUNT):
      return {
        ...state,
        data: null,
        error: action.error,
        fetching: false,
      };
    case getActionUnmount(Actions.REGISTER_ACCOUNT):
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export const loginAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_ACCOUNT: {
      return {...state, fetching: true};
    }
    case getActionSuccess(Actions.LOGIN_ACCOUNT):
      return {
        ...state,
        data: action.data,
        error: action.error,
        fetching: false,
      };
    case getActionFail(Actions.LOGIN_ACCOUNT):
      return {...state, data: null, error: action.error, fetching: false};
    case getActionUnmount(Actions.LOGIN_ACCOUNT):
      return {...initialState};
    default:
      return state;
  }
};

const userReducer = {
  registerAccountReducer,
  loginAccountReducer,
};
export default userReducer;
