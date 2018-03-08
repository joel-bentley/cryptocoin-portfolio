import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

import loggingMiddleware from './loggingMiddleware';
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, loggingMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
