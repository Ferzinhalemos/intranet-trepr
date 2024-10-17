import { GET_CLIMA_DATA } from '../constants/ActionTypes';

const initialState = {
  data: {},
};

export const climaData = (state = initialState, action = {}) => {
  switch (action?.type) {
    case `${GET_CLIMA_DATA}_PENDING`:
      return {
        ...state,
        loaded: false,
        loading: true,
        error: null,
        data: {},
      };
    case `${GET_CLIMA_DATA}_FAIL`:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.error,
        data: null,
      };
    case `${GET_CLIMA_DATA}_SUCCESS`:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: null,
        data: action.result,
      };
    default:
      return state;
  }
};
