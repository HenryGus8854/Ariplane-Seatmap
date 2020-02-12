export function requestFlightInfo() {
  return {
    type: 'GET_FLIGHT_DATA'
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
