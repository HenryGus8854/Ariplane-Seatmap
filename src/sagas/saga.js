import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchData } from '../api';

function* flightInfoAsync() {
  try {
    const data = yield call(fetchData);
    yield put({ type: 'FLIGHTS_DATA', payload: data });
  } catch (e) {
    console.log(e);
  }
}

export function* watchFlightData() {
  yield takeEvery('GET_FLIGHT_DATA', flightInfoAsync);
}
