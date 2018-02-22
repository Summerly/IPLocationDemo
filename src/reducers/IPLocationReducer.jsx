import * as SearchActionTypes from '../constants/SearchActionTypes';

const initialState = {
  status: SearchActionTypes.IDLE,
  ipLocation: {},
};

const IPLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH:
      return {
        ...state,
        status: SearchActionTypes.SEARCH,
        ipLocation: action.ipLocation,
      };
    default:
      return state;
  }
}

export default IPLocationReducer;
