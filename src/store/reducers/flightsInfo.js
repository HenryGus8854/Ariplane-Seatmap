const defaultState = {
  flightInfo: [],
  selected: {},
  seatMapNum: 0,
  loaded: false
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FLIGHTS_DATA':
      return {
        ...state,
        flightInfo: action.payload,
        loaded: true
      };
    case 'SELECTED_SEAT':
      if (!state.selected[action.payload]) {
        return {
          ...state,
          selected: {
            ...state.selected,
            [action.payload]: true
          }
        };
      } else {
        return {
          ...state,
          selected: {
            ...state.selected,
            [action.payload]: !state.selected[action.payload]
          }
        };
      }
    case 'FLIGHT_CHANGE':
      return {
        ...state,
        seatMapNum: action.payload
      };
    default:
      return state;
  }
};

export default mainReducer;
