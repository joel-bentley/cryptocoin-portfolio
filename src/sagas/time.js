import { call, put } from 'redux-saga/effects';
import fetchNewTimeApi from '../api/fetchNewTime';

import { actions as timeActions } from '../reducers/time';

export function* fetchNewTime() {
  try {
    const dateString = yield call(fetchNewTimeApi);
    yield put(timeActions.setNewTime(dateString));
  } catch (err) {
    console.error(err.message);
  }
}
