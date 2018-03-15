import { all, throttle } from 'redux-saga/effects';

import { types as assetsTypes } from '../reducers/assets';
import * as assetsSagas from './assets';

export default function* rootSaga() {
  yield all([
    throttle(
      3000,
      assetsTypes.FETCH_CURRENT_PRICES,
      assetsSagas.fetchCurrentPrices
    ),
  ]);
}
