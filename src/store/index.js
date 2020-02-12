import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers/flightsInfo';
import createSagaMiddleware from 'redux-saga';
import { watchFlightData } from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFlightData);
