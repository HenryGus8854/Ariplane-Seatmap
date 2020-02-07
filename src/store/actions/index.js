import axios from 'axios';

export function getFlightInfo() {
  return async dispatch => {
    const responce = await axios.get(
      'https://gist.githubusercontent.com/manfredxu99/c7de8bb829712e2e3f8b69995a7853e9/raw/434d8d1e981d171f86c0a1eac5f7f447309bde8c/data.json'
    );
    dispatch(changeInfo(responce.data));
  };
}

export function changeInfo(data) {
  return {
    type: 'FLIGHTS_DATA',
    payload: data
  };
}

export const selectSeat = data => {
  return {
    type: 'SELECTED_SEAT',
    payload: data
  };
};

export const changeFlight = data => {
  return {
    type: 'FLIGHT_CHANGE',
    payload: data
  };
};
