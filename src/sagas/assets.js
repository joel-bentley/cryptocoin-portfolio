import { call, put } from 'redux-saga/effects';
import fetchCurrentPricesApi from '../api/fetchCurrentPrices';

import { actions as assetsActions } from '../reducers/assets';
import { actions as timeActions } from '../reducers/time';

export function* fetchCurrentPrices(action) {
  try {
    const prices = yield call(
      fetchCurrentPricesApi,
      action.assetList.join(','),
      'USD'
    );
    yield put(assetsActions.updatePrices(prices));
    yield put(timeActions.fetchNewTime());
  } catch (err) {
    console.error(err.message);
  }
}
