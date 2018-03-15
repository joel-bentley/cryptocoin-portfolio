import { all, takeLatest, throttle } from 'redux-saga/effects';

import { types as timeTypes } from '../reducers/time';
import * as timeSagas from './time';

import { types as assetsTypes } from '../reducers/assets';
import * as assetsSagas from './assets';

export default function* rootSaga() {
  yield all([
    takeLatest(timeTypes.FETCH_NEW_TIME, timeSagas.fetchNewTime),
    throttle(
      3000,
      assetsTypes.FETCH_CURRENT_PRICES,
      assetsSagas.fetchCurrentPrices
    ),
  ]);
}
