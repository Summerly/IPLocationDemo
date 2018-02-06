import IPLocationSearch from '../api/IPLocationSearch';
import * as SearchActionTypes from '../constants/SearchActionTypes';

function searchWithIPLocationAPI(keyword, dispatch) {
  IPLocationSearch(keyword, (data) => {
    const province = Array.isArray(data.province) ? data.province.join() : data.province;
    const city = Array.isArray(data.city) ? data.city.join() : data.city;
    const adCode = Array.isArray(data.adcode) ? data.adcode.join() : data.adcode;
    const rectangle = Array.isArray(data.rectangle) ? data.rectangle.join() : data.rectangle;

    dispatch({
      type: SearchActionTypes.SEARCH_DONE,
      ipLocation: {
        province,
        city,
        adCode,
        rectangle,
      },
    });
  });
}

export function SearchIPLocation(keyword) {
  return (dispatch) => {
    searchWithIPLocationAPI(keyword, dispatch);
  };
}

