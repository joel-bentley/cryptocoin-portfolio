import { all, takeLatest } from 'redux-saga/effects';

import { types as timeTypes } from '../reducers/currentTime';
import * as timeSagas from './currentTime';

export default function* rootSaga() {
  yield all([takeLatest(timeTypes.FETCH_NEW_TIME, timeSagas.fetchNewTime)]);
}
