import IPLocationSearch from '../api/IPLocationSearch';
import * as SearchActionTypes from '../constants/SearchActionTypes';

function searchWithIPLocationAPI(keyword, dispatch) {
  IPLocationSearch(keyword, (data) => {
    dispatch({
      type: SearchActionTypes.SEARCH_DONE,
      ipLocation: {
        province: data.province,
        city: data.city,
        adCode: data.adcode,
        rectangle: data.rectangle,
      },
    });
  });
}

export function SearchIPLocation(keyword) {
  return (dispatch) => {
    searchWithIPLocationAPI(keyword, dispatch);
  };
}