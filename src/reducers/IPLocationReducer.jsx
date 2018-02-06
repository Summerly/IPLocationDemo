import * as SearchActionTypes from '../constants/SearchActionTypes';

const initialState = {
  status: SearchActionTypes.IDLE,
  ipLocation: {},
};

const IPLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_DONE:
      return {
        ...state,
        status: SearchActionTypes.SEARCH_DONE,
        ipLocation: action.ipLocation,
      };
    case SearchActionTypes.SEARCH_PENDING:
      return {
        ...state,
        status: SearchActionTypes.SEARCH_PENDING,
        ipLocation: {},
      };
    default:
      return state;
  }
}

export default IPLocationReducer;
