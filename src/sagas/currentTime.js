import { call, put } from 'redux-saga/effects';
import fetchNewTimeApi from '../api/fetchNewTime';

import { actions as currentTimeActions } from '../reducers/currentTime';

export function* fetchNewTime() {
  try {
    const dateString = yield call(fetchNewTimeApi);
    yield put(currentTimeActions.setNewTime(dateString));
  } catch (err) {
    console.err(err.message);
  }
}
